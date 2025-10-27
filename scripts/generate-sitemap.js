import fs from 'fs';
import path from 'path';
import { routes, domain } from './routes.js';

const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  // Assign priority based on page importance
  let priority = '0.5';
  let changefreq = 'monthly';
  
  if (route === '/') {
    priority = '1.0';
    changefreq = 'daily';
  } else if (route === '/shower-doors-las-vegas') {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (route.startsWith('/shower-doors-las-vegas/')) {
    priority = '0.8';
    changefreq = 'weekly';
  } else if (route === '/glass-company-las-vegas') {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (route.startsWith('/glass-company-las-vegas/')) {
    priority = '0.8';
    changefreq = 'weekly';
  } else if (route === '/gallery') {
    priority = '0.8';
    changefreq = 'weekly';
  } else if (route.startsWith('/blog/')) {
    priority = '0.6';
    changefreq = 'monthly';
  } else if (['/contact', '/about'].includes(route)) {
    priority = '0.7';
    changefreq = 'monthly';
  } else if (['/areas-served', '/resources', '/sitemap'].includes(route)) {
    priority = '0.5';
    changefreq = 'yearly';
  }
  
  return `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated with', routes.length, 'routes');
};

generateSitemap();
