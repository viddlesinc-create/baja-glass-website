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

function extractTag(html, tagRegex) {
  const match = html.match(tagRegex);
  return match ? match[1] : null;
}

async function prerender() {
  console.log('🚀 Starting SSG prerendering...');
  
  const vite = await createServer({
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
      
      let finalHtml = stripDefaultMetaTags(rawTemplate);
      finalHtml = finalHtml.replace(
        '<div id="root"></div>',
        `<div id="root" data-ssr="true">${html}</div>`
      );
      
      const { helmet } = helmetContext;
      if (helmet) {
        const headTags = [
          helmet.title ? helmet.title.toString() : '',
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
