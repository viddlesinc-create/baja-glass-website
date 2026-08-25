import fs from 'fs';
import path from 'path';
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { routes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Strip hardcoded default OG / Twitter meta tags from the HTML template
 * so that Helmet-injected page-specific tags are the only ones present.
 */
function stripDefaultMetaTags(html) {
  html = html.replace(/<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '');
  html = html.replace(/<meta\s+name="twitter:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '');
  html = html.replace(/<title>[^<]*<\/title>/i, '');
  html = html.replace(/\n\s*\n\s*\n/g, '\n');
  return html;
}

/**
 * Vite emits the entry `<script type="module">` (and its modulepreload) ahead of
 * the `<link rel="stylesheet">`. Chrome fetches all three at high priority, so
 * the render-blocking stylesheet ends up queued behind ~95KB of deferred JS that
 * nothing above the fold needs — measured on this build, the CSS landed at
 * ~999ms instead of ~250ms, and first paint waited for it.
 *
 * Hoisting the stylesheet above the module script lets CSS win the connection.
 * The scripts are `type="module"`, so they are deferred either way and execution
 * order is unaffected.
 */
function hoistStylesheetAboveModuleScript(html) {
  const styleMatch = html.match(/[ \t]*<link[^>]+rel="stylesheet"[^>]*>\n?/i);
  const scriptMatch = html.match(/[ \t]*<script[^>]+type="module"[^>]*>[\s\S]*?<\/script>\n?/i);
  if (!styleMatch || !scriptMatch) return html;

  // Only reorder when the stylesheet currently sits after the module script.
  if (html.indexOf(styleMatch[0]) < html.indexOf(scriptMatch[0])) return html;

  return html
    .replace(styleMatch[0], '')
    .replace(scriptMatch[0], `${styleMatch[0]}${scriptMatch[0]}`);
}

/**
 * react-helmet-async stamps data-rh="true" on everything it emits. The attribute
 * is how the client re-attaches to meta/link/script tags on hydration, so it has
 * to stay on those — but <title> is applied via document.title and never
 * re-created, so stripping it there is safe and leaves an attribute-free
 * <title> for SEO tooling (and `grep -o '<title>'`) to match.
 */
function renderTitleTag(helmet) {
  if (!helmet.title) return '';
  return helmet.title.toString().replace(/<title\s+data-rh="true"\s*>/i, '<title>');
}

function extractTag(html, tagRegex) {
  const match = html.match(tagRegex);
  return match ? match[1] : null;
}

async function prerender() {
  console.log('🚀 Starting SSG prerendering...');
  
  // mode: 'production' ensures vite.config's dev-only componentTagger() is
  // excluded, so prerendered HTML doesn't carry data-lov-* attributes.
  const vite = await createServer({
    mode: 'production',
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error'
  });

  const distDir = path.join(__dirname, '../dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const rawTemplate = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');

  let successCount = 0;
  const errors = [];
  const results = [];

  for (const route of routes) {
    try {
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const { html, helmetContext } = await render(route);

      if (!html || html.length < 500) {
        throw new Error(`Rendered HTML is suspiciously short (${html?.length || 0} chars) — possible fallback`);
      }
      if (!/<h1[\s>]/i.test(html)) {
        throw new Error(`Rendered body has no <h1> — route likely renders an empty shell or a client-only redirect (check AppSSR.tsx route registration)`);
      }
      
      let finalHtml = hoistStylesheetAboveModuleScript(stripDefaultMetaTags(rawTemplate));
      finalHtml = finalHtml.replace(
        '<div id="root"></div>',
        `<div id="root" data-ssr="true">${html}</div>`
      );
      
      const { helmet } = helmetContext;
      if (helmet) {
        const headTags = [
          renderTitleTag(helmet),
          helmet.meta ? helmet.meta.toString() : '',
          helmet.link ? helmet.link.toString() : '',
          helmet.script ? helmet.script.toString() : '',
        ].filter(Boolean).join('\n');

        if (headTags) {
          finalHtml = finalHtml.replace('</head>', `${headTags}\n</head>`);
        }
      }

      // Write directory-based: /about/index.html
      const dirFilePath = route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route, 'index.html');
      const dir = path.dirname(dirFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(dirFilePath, finalHtml);

      // Write file-based: /about.html (skip for root)
      if (route !== '/') {
        const fileBasedPath = path.join(distDir, `${route}.html`);
        const fileDir = path.dirname(fileBasedPath);
        if (!fs.existsSync(fileDir)) {
          fs.mkdirSync(fileDir, { recursive: true });
        }
        fs.writeFileSync(fileBasedPath, finalHtml);
      }

      const title = extractTag(finalHtml, /<title[^>]*>([^<]+)<\/title>/i) || '(no title)';
      console.log(`✅ ${route} → <title>${title}</title>`);
      results.push({ route, title });
      successCount++;

    } catch (error) {
      console.error(`❌ ${route}:`, error.stack || error.message);
      errors.push({ route, error: error.message });
    }
  }

  // Generate a real 404.html from the NotFound component (catch-all route)
  // instead of copying the homepage, so unknown URLs (served with HTTP 404 by
  // netlify.toml) show proper "Page Not Found" content.
  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const { html, helmetContext } = await render('/__not-found__');
    if (!html || !/<h1[\s>]/i.test(html)) {
      throw new Error('NotFound render produced no <h1>');
    }
    let finalHtml = hoistStylesheetAboveModuleScript(stripDefaultMetaTags(rawTemplate));
    finalHtml = finalHtml.replace(
      '<div id="root"></div>',
      `<div id="root" data-ssr="true">${html}</div>`
    );
    const { helmet } = helmetContext;
    if (helmet) {
      const headTags = [
        renderTitleTag(helmet),
        helmet.meta ? helmet.meta.toString() : '',
        helmet.link ? helmet.link.toString() : '',
        helmet.script ? helmet.script.toString() : '',
      ].filter(Boolean).join('\n');
      if (headTags) finalHtml = finalHtml.replace('</head>', `${headTags}\n</head>`);
    }
    fs.writeFileSync(path.join(distDir, '404.html'), finalHtml);
    console.log('✅ 404.html → NotFound page');
  } catch (error) {
    console.error('❌ 404.html generation failed:', error.stack || error.message);
    errors.push({ route: '404.html', error: error.message });
  }

  await vite.close();

  console.log(`\n🎉 Prerendering complete: ${successCount}/${routes.length} pages`);
  
  if (errors.length > 0) {
    console.error('\n🚨 FAILED ROUTES:');
    errors.forEach(e => console.error(`  ❌ ${e.route}: ${e.error}`));
    console.error('\nBuild FAILED — all routes must render successfully.');
    process.exit(1);
  }
}

prerender().catch(err => {
  console.error('Fatal prerender error:', err);
  process.exit(1);
});
