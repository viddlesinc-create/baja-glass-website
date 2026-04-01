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

  // Step 2: Generate sitemap
  console.log('📄 Generating sitemap...');
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

  if (verifyFailed) {
    console.error('\n🚨 Post-build verification FAILED — route files have wrong or missing content.');
    process.exit(1);
  }

  // Step 7: Create dedicated 404.html
  console.log('\n📄 Creating dedicated 404.html...');
  const notFoundHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml);
  console.log('✅ 404.html created');

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
