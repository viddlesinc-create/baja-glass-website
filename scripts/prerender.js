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
  // Remove default OG meta tags
  html = html.replace(/<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '');
  // Remove default Twitter meta tags
  html = html.replace(/<meta\s+name="twitter:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '');
  // Remove any default <title>…</title> so Helmet's title takes precedence
  html = html.replace(/<title>[^<]*<\/title>/i, '');
  // Clean up resulting blank lines
  html = html.replace(/\n\s*\n\s*\n/g, '\n');
  return html;
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
  let errorCount = 0;

  for (const route of routes) {
    try {
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const { html, helmetContext } = await render(route);
      
      // Start from the template with default meta stripped
      let finalHtml = stripDefaultMetaTags(rawTemplate);
      
      // Replace root div with SSR content
      finalHtml = finalHtml.replace(
        '<div id="root"></div>',
        `<div id="root" data-ssr="true">${html}</div>`
      );
      
      // Inject helmet tags if available
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

      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join(distDir, `${routePath}.html`);
      const dir = path.dirname(filePath);

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, finalHtml);
      console.log(`✅ ${route}`);
      successCount++;

    } catch (error) {
      console.error(`❌ ${route}:`, error.message);
      errorCount++;
    }
  }

  await vite.close();
  
  console.log('\n🎉 Prerendering complete!');
  console.log(`✅ Success: ${successCount} pages`);
  if (errorCount > 0) console.log(`❌ Errors: ${errorCount} pages`);
}

prerender().catch(console.error);
