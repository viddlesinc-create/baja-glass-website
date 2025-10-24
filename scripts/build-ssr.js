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
  execSync('vite build', { cwd: root, stdio: 'inherit' });

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

  console.log('\n✨ SSG build complete!');
  console.log('📦 Deploy the dist/ folder to Netlify');
  console.log('🔍 All 21 routes are now crawlable with full SEO metadata\n');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
