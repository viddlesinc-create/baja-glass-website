#!/usr/bin/env node
/**
 * Generates src/data/pageDates.json: route -> last content-change date.
 *
 * Feeds two things from ONE source, so they cannot drift:
 *   - the visible "Last updated" line and JSON-LD dateModified on each page
 *   - per-URL <lastmod> in sitemap.xml (every URL previously shared one blanket date,
 *     which Google discounts)
 *
 * Dates come from git's last commit touching each page's source file. Honest limitation,
 * stated plainly: a commit that only touches formatting still moves the date. Blog posts
 * are exempt — they carry curated datePublished/dateModified in src/data/blogPosts.ts,
 * which is author-controlled and more accurate than file history.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { routes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// route -> component name, read from the router rather than hardcoded
const routerSrc = fs.readFileSync(path.join(root, 'src/AppSSR.tsx'), 'utf-8');
const routeToComponent = new Map(
  [...routerSrc.matchAll(/<Route\s+path="([^"*]+)"\s+element=\{<(\w+)/g)]
    .filter(([, , c]) => c !== 'RedirectComponent')
    .map(([, p, c]) => [p, c])
);

// component name -> source file
const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.tsx')) files.push(p);
  }
})(path.join(root, 'src/pages'));
const componentToFile = new Map(files.map((f) => [path.basename(f, '.tsx'), f]));

const gitDate = (file) => {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${path.relative(root, file)}"`, {
      cwd: root, encoding: 'utf-8',
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch { return null; }
};

const today = execSync('git log -1 --format=%cs', { cwd: root, encoding: 'utf-8' }).trim();
const dates = {};
const unresolved = [];
for (const route of routes) {
  const component = routeToComponent.get(route);
  const file = component && componentToFile.get(component);
  const d = file ? gitDate(file) : null;
  if (!d) unresolved.push(route);
  dates[route] = d || today;
}

const outPath = path.join(root, 'src/data/pageDates.json');
fs.writeFileSync(outPath, JSON.stringify(dates, null, 2) + '\n');
console.log(`✅ Page dates generated for ${Object.keys(dates).length} routes`);
if (unresolved.length) {
  console.log(`   ↪ fell back to latest commit date for ${unresolved.length}: ${unresolved.join(', ')}`);
}
