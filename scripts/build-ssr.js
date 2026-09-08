#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

console.log('🚀 Building SSG application for Baja Glass...\n');

try {
  // Step 1: Clean dist folder
  console.log('🧹 Cleaning dist folder...');
  const distDir = path.join(root, 'dist');
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }

  // Step 2: Route parity guard (must run before prerendering)
  console.log('🔗 Verifying route parity...');
  execSync('node scripts/verify-route-parity.js', { cwd: root, stdio: 'inherit' });

  // Step 3: Generate sitemap
  console.log('\n📄 Generating sitemap...');
  execSync('node scripts/generate-sitemap.js', { cwd: root, stdio: 'inherit' });

  // Step 3: Build the application
  console.log('\n⚡ Building application...');
  execSync('npx vite build', { cwd: root, stdio: 'inherit' });

  // Step 4: Copy static assets
  console.log('\n📁 Copying static assets...');
  const publicDir = path.join(root, 'public');
  
  const staticFiles = [
    'robots.txt', 
    'sitemap.xml', 
    '_redirects', 
    '_headers'
  ];
  
  staticFiles.forEach(file => {
    const src = path.join(publicDir, file);
    const dest = path.join(distDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`✅ Copied ${file}`);
    }
  });

  // Step 5: Prerender all routes
  console.log('\n🎨 Pre-rendering pages...');
  execSync('node scripts/prerender.js', { cwd: root, stdio: 'inherit' });

  // Step 6: Post-build verification
  console.log('\n🔍 Verifying prerendered output...');
  const HOMEPAGE_TITLE = 'Custom Shower Doors Las Vegas | Baja Glass and Mirror';
  const verifyRoutes = [
    { path: 'about/index.html', expectTitleContains: 'About' },
    { path: 'contact/index.html', expectTitleContains: 'Contact' },
    { path: 'shower-doors-las-vegas/index.html', expectTitleContains: 'Shower' },
    {
      path: 'shower-doors-las-vegas/semi-frameless-framed/index.html',
      expectTitleContains: 'Semi-Frameless',
    },
    { path: 'blog/index.html', expectTitleContains: 'Blog' },
    { path: 'faq/index.html', expectTitleContains: 'FAQ' },
  ];

  let verifyFailed = false;
  for (const check of verifyRoutes) {
    const filePath = path.join(distDir, check.path);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ MISSING: ${check.path}`);
      verifyFailed = true;
      continue;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : '(no title found)';
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '(no h1 found)';
    
    if (title === HOMEPAGE_TITLE || title === '(no title found)') {
      console.error(`❌ WRONG TITLE: ${check.path} → "${title}"`);
      verifyFailed = true;
    } else if (check.expectTitleContains && !title.includes(check.expectTitleContains)) {
      console.error(`❌ TITLE MISMATCH: ${check.path} → "${title}"`);
      verifyFailed = true;
    } else if (check.expectH1Contains && !h1.includes(check.expectH1Contains)) {
      console.error(`❌ H1 MISMATCH: ${check.path} → "${h1}"`);
      verifyFailed = true;
    } else if (check.expectBodyContains && !content.includes(check.expectBodyContains)) {
      console.error(`❌ BODY MISMATCH: ${check.path} missing expected page-specific content`);
      verifyFailed = true;
    } else {
      console.log(`✅ ${check.path} → "${title}" | H1: "${h1}"`);
    }
  }

  // Every indexable page must declare a canonical pointing at itself. A sitemap URL
  // whose canonical points elsewhere tells Google the page it just submitted is not
  // the one to index. /shower-enclosures-las-vegas shipped that way.
  const { routes: allRoutes, domain } = await import('./routes.js');
  for (const route of allRoutes) {
    if (route.startsWith('/lp/')) continue; // noindex paid landing pages
    const filePath = path.join(distDir, route === '/' ? 'index.html' : `${route}/index.html`);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ NOT PRERENDERED: ${route}`);
      verifyFailed = true;
      continue;
    }
    const html = fs.readFileSync(filePath, 'utf-8');
    const canonicals = [...html.matchAll(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/gi)].map((m) => m[1]);
    const expected = route === '/' ? domain : `${domain}${route}`;
    if (canonicals.length === 0) {
      console.error(`❌ NO CANONICAL: ${route}`);
      verifyFailed = true;
    } else if (canonicals.length > 1 && new Set(canonicals).size > 1) {
      console.error(`❌ CONFLICTING CANONICALS: ${route} → ${[...new Set(canonicals)].join(' , ')}`);
      verifyFailed = true;
    } else if (canonicals[0] !== expected) {
      console.error(`❌ NON-SELF CANONICAL: ${route} → ${canonicals[0]}`);
      verifyFailed = true;
    }
  }

  // Title/description compliance, measured on built HTML rather than source: 15 pages used
  // to override metaConfig with their own inline <Helmet>, so source-level checks passed
  // while the shipped pages were wrong. Entities are decoded first or "&amp;" inflates every
  // title containing "Baja Glass & Mirror" by four characters.
  const decodeEntities = (v) =>
    v.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"')
     .replace(/&mdash;/g, '\u2014').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  const seenTitles = new Map();
  const seenDescs = new Map();
  for (const route of allRoutes) {
    if (route.startsWith('/lp/')) continue; // noindex paid landing pages
    const filePath = path.join(distDir, route === '/' ? 'index.html' : `${route}/index.html`);
    if (!fs.existsSync(filePath)) continue;
    const html = fs.readFileSync(filePath, 'utf-8');
    const titles = [...html.matchAll(/<title[^>]*>([^<]*)<\/title>/gi)].map((m) => decodeEntities(m[1]));
    const descs = [...html.matchAll(/<meta[^>]+name="description"[^>]+content="([^"]*)"/gi)].map((m) => decodeEntities(m[1]));

    if (titles.length !== 1) {
      console.error(`❌ ${route} has ${titles.length} <title> tags (expected 1)`);
      verifyFailed = true;
    } else {
      if (titles[0].length < 50 || titles[0].length > 70) {
        console.error(`❌ TITLE LENGTH ${titles[0].length} (want 50-70): ${route}`);
        verifyFailed = true;
      }
      if (seenTitles.has(titles[0])) {
        console.error(`❌ DUPLICATE TITLE: ${route} and ${seenTitles.get(titles[0])}`);
        verifyFailed = true;
      }
      seenTitles.set(titles[0], route);
    }

    if (descs.length !== 1) {
      console.error(`❌ ${route} has ${descs.length} meta descriptions (expected 1)`);
      verifyFailed = true;
    } else {
      if (descs[0].length < 80 || descs[0].length > 160) {
        console.error(`❌ DESCRIPTION LENGTH ${descs[0].length} (want 80-160): ${route}`);
        verifyFailed = true;
      }
      if (seenDescs.has(descs[0])) {
        console.error(`❌ DUPLICATE DESCRIPTION: ${route} and ${seenDescs.get(descs[0])}`);
        verifyFailed = true;
      }
      seenDescs.set(descs[0], route);
    }
  }

  // Exactly one business entity per page, always the same @id. The site previously emitted
  // up to nine business nodes on a single page under three different identities (Footer's
  // anonymous Organization, per-page inline LocalBusiness blocks, and a competing
  // /#organization id), so Google saw several unlinked companies instead of one.
  // Third-party organizations (e.g. the licensing board under hasCredential) are ignored.
  const BIZ_TYPES = new Set(['LocalBusiness', 'Organization', 'HomeAndConstructionBusiness', 'GlassRepairService']);
  const CANONICAL_ID = `${domain}/#localbusiness`;
  const isSelf = (n) =>
    typeof n.name === 'string' ? /baja glass/i.test(n.name)
      : (typeof n['@id'] === 'string' && n['@id'].includes('bajaglass.com'));
  for (const route of allRoutes) {
    const filePath = path.join(distDir, route === '/' ? 'index.html' : `${route}/index.html`);
    if (!fs.existsSync(filePath)) continue;
    const html = fs.readFileSync(filePath, 'utf-8');
    let fullNodes = 0;
    const badIds = [];
    const walk = (n) => {
      if (Array.isArray(n)) return n.forEach(walk);
      if (!n || typeof n !== 'object') return;
      if (BIZ_TYPES.has(n['@type']) && isSelf(n)) {
        const keys = Object.keys(n).filter((k) => k !== '@type' && k !== '@id');
        if (keys.length > 0) {
          fullNodes++;
          if (n['@id'] !== CANONICAL_ID) badIds.push(n['@id'] || '(anonymous)');
        }
      }
      Object.values(n).forEach(walk);
    };
    for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try { walk(JSON.parse(m[1])); } catch { /* non-JSON block */ }
    }
    if (fullNodes !== 1) {
      console.error(`❌ ${route} declares ${fullNodes} business entities (expected exactly 1)`);
      verifyFailed = true;
    }
    if (badIds.length) {
      console.error(`❌ ${route} business node has wrong @id: ${badIds.join(', ')}`);
      verifyFailed = true;
    }
  }

  // A sitemap entry says "index this"; a robots noindex says the opposite. Shipping both
  // for the same URL is a contradictory signal — the /privacy-policy and /terms-of-service
  // pages were noindex while being added to the sitemap.
  const sitemapXml = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf-8');
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const loc of sitemapUrls) {
    const route = loc.replace(domain, '') || '/';
    const filePath = path.join(distDir, route === '/' ? 'index.html' : `${route}/index.html`);
    if (!fs.existsSync(filePath)) continue;
    const html = fs.readFileSync(filePath, 'utf-8');
    if (/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html)) {
      console.error(`❌ NOINDEX IN SITEMAP: ${route}`);
      verifyFailed = true;
    }
  }

  if (verifyFailed) {
    console.error('\n🚨 Post-build verification FAILED — route files have wrong or missing content.');
    process.exit(1);
  }
  console.log('✅ Canonical self-reference check passed for all indexable routes');
  console.log(`✅ No noindex pages in sitemap (${sitemapUrls.length} URLs checked)`);
  console.log(`✅ Title/description length + uniqueness passed (${seenTitles.size} indexable pages)`);
  console.log('✅ One business entity per page, all under ' + CANONICAL_ID);

  // Step 7: 404.html is generated by prerender.js from the NotFound component.
  const notFoundPath = path.join(distDir, '404.html');
  if (!fs.existsSync(notFoundPath)) {
    console.error('❌ 404.html missing — prerender.js did not generate it.');
    process.exit(1);
  }

  // Step 8: Remove any _redirects file to avoid overriding prerendered content
  const redirectsPath = path.join(distDir, '_redirects');
  if (fs.existsSync(redirectsPath)) {
    fs.unlinkSync(redirectsPath);
    console.log('🗑️ Removed _redirects file (netlify.toml handles routing)');
  }

  console.log('\n✨ SSG build complete!');
  console.log('📦 Deploy the dist/ folder to Netlify\n');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
