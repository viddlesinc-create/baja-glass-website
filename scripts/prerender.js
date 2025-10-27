import fs from 'fs';
import path from 'path';
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { routes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const { html, helmetContext } = await render(route);
      
      // Extract helmet data
      const { helmet } = helmetContext;
      let finalHtml = template;
      
      // Replace root div with SSR content
      finalHtml = finalHtml.replace(
        '<div id="root"></div>',
        `<div id="root" data-ssr="true">${html}</div>`
      );
      
      // Inject helmet tags if available
      if (helmet) {
        if (helmet.title) finalHtml = finalHtml.replace('</head>', `${helmet.title.toString()}</head>`);
        if (helmet.meta) finalHtml = finalHtml.replace('</head>', `${helmet.meta.toString()}</head>`);
        if (helmet.link) finalHtml = finalHtml.replace('</head>', `${helmet.link.toString()}</head>`);
        if (helmet.script) finalHtml = finalHtml.replace('</head>', `${helmet.script.toString()}</head>`);
      }
      
      // Check if this is a 404 page
      const is404 = html.includes('404') || html.includes('Page not found') || html.includes('Page Not Found');
      if (is404) {
        finalHtml = finalHtml.replace(
          '</head>',
          '<meta name="prerender-status-code" content="404"></head>'
        );
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
