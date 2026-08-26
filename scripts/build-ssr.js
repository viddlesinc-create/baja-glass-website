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
  const HOMEPAGE_TITLE = 'Baja Glass & Mirror | Custom Shower Doors Las Vegas';
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

  if (verifyFailed) {
    console.error('\n🚨 Post-build verification FAILED — route files have wrong or missing content.');
    process.exit(1);
  }
  console.log('✅ Canonical self-reference check passed for all indexable routes');

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
