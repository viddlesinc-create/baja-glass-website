import fs from 'fs';
import path from 'path';
import { routes, domain } from './routes.js';

/**
 * Sitemap Generator
 * Automatically generates sitemap.xml with proper priority and changefreq values
 * 
 * Priority Guidelines:
 * - 1.0: Homepage (most important)
 * - 0.9-0.95: Primary landing pages (Henderson, main service hubs)
 * - 0.8-0.85: Location pages and service pages
 * - 0.7: High-value blog posts (cost guides, comparisons)
 * - 0.6: Standard blog posts
 * - 0.5: Utility pages (sitemap, resources)
 * 
 * Changefreq Guidelines:
 * - daily: Homepage (frequently updated content)
 * - weekly: Service pages, location pages (active SEO targets)
 * - monthly: Blog posts, about, contact
 * - yearly: Utility pages that rarely change
 */

const getRouteConfig = (route) => {
  // Homepage - highest priority
  if (route === '/') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  
  // Henderson - PRIMARY SEO landing page (highest traffic target)
  if (route === '/shower-doors-henderson-nv') {
    return { priority: '0.95', changefreq: 'weekly' };
  }
  
  // Main hub pages - high priority
  if (route === '/shower-doors-las-vegas' || route === '/glass-company-las-vegas') {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  
  // Other location pages - strategic SEO pages
  if (route.startsWith('/shower-doors-') && route.endsWith('-nv')) {
    return { priority: '0.85', changefreq: 'weekly' };
  }
  
  // Service pages under shower-doors hub
  if (route.startsWith('/shower-doors-las-vegas/')) {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  
  // Shower enclosures hub - high-value SEO page
  if (route === '/shower-enclosures-las-vegas') {
    return { priority: '0.85', changefreq: 'weekly' };
  }
  
  // Service pages under glass-company hub
  if (route.startsWith('/glass-company-las-vegas/')) {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  
  // Gallery - visual proof, important for conversions
  if (route === '/gallery') {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  
  // Reviews - social proof, important for conversions
  if (route === '/reviews') {
    return { priority: '0.75', changefreq: 'monthly' };
  }
  
  // High-value blog posts (buying guides, cost information)
  if (route === '/blog/shower-door-installation-cost-las-vegas' ||
      route === '/blog/frameless-vs-semi-frameless-shower-doors' ||
      route === '/blog/las-vegas-water-quality-shower-glass-hard-water-solutions') {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  
  // Standard blog posts
  if (route.startsWith('/blog/')) {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  // Contact and About - conversion pages
  if (route === '/contact' || route === '/about') {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  
  // Utility pages
  if (['/areas-served', '/resources', '/sitemap'].includes(route)) {
    return { priority: '0.5', changefreq: 'yearly' };
  }

  // Legal / trust pages - required for E-E-A-T trust signals but low crawl priority
  if (['/privacy-policy', '/terms-of-service'].includes(route)) {
    return { priority: '0.3', changefreq: 'yearly' };
  }
  
  // FAQ page - important for SEO rich results
  if (route === '/faq') {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  
  // New SEO-optimized pages
  if (route === '/custom-shower-doors-las-vegas') {
    return { priority: '0.85', changefreq: 'weekly' };
  }
  
  // Default fallback
  return { priority: '0.5', changefreq: 'monthly' };
};

/**
 * Routes excluded from sitemap.xml.
 * Google Ads landing pages (/lp/*) are noindex,nofollow and exist only to
 * serve paid traffic. Listing them in the sitemap would invite organic
 * indexing and cannibalize equivalent organic pages. They still get
 * prerendered (routes.js is the source of truth for prerender.js); we
 * simply omit them from the sitemap.
 */
const isExcludedFromSitemap = (route) => route.startsWith('/lp/');

const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];

  const indexableRoutes = routes.filter(r => !isExcludedFromSitemap(r));
  const excludedRoutes = routes.filter(isExcludedFromSitemap);

  const urlEntries = indexableRoutes.map(route => {
    const { priority, changefreq } = getRouteConfig(route);
    return `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Google Ads landing pages (/lp/*) are intentionally excluded — they are
  noindex,nofollow and exist only for paid traffic. See generate-sitemap.js
  for the exclusion rule.
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);

  console.log('✅ Sitemap generated successfully!');
  console.log(`   📄 Indexable routes: ${indexableRoutes.length}`);
  console.log(`   🚫 Excluded (/lp/*): ${excludedRoutes.length} — ${excludedRoutes.join(', ') || 'none'}`);
  console.log(`   📅 Last modified: ${today}`);
  console.log(`   🌐 Domain: ${domain}`);
};

generateSitemap();
