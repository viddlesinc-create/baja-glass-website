import fs from 'fs';
import path from 'path';
import { routes, domain } from './routes.js';

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  const priority = route === '/' ? '1.0' : 
                   route.startsWith('/shower-doors-las-vegas') ? '0.8' :
                   route.startsWith('/blog/') ? '0.5' : '0.7';
  
  return `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated with', routes.length, 'routes');
};

generateSitemap();
