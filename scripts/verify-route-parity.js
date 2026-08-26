#!/usr/bin/env node
/**
 * Route parity guard.
 *
 * Two failure modes this catches, both of which shipped to production:
 *
 * 1. A page registered in the router but missing from routes.js. netlify.toml's
 *    final rule is `/* -> /404.html status = 404` with no SPA 200-rewrite, so any
 *    route that is not prerendered is served to users and crawlers as a real 404.
 *    /privacy-policy and /terms-of-service shipped this way and were confirmed as
 *    "Not found (404)" in Search Console while linked from every page's footer.
 *
 * 2. Drift between AppSSR.tsx (what the prerenderer renders) and MainSite.tsx
 *    (what the client renders). A route present in one but not the other either
 *    fails to prerender or 404s on direct navigation.
 *
 * Runs before the build so failures are loud and local rather than silent and live.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/** Real routes only: no wildcards, and no client-side redirects (netlify.toml 301s those). */
const readRoutes = (file) => {
  const src = fs.readFileSync(path.join(root, file), 'utf-8');
  return [...src.matchAll(/<Route\s+path="([^"*]+)"\s+element=\{<(\w+)/g)]
    .filter(([, , component]) => component !== 'RedirectComponent')
    .map(([, routePath]) => routePath);
};

/**
 * Paths that netlify.toml redirects at the edge with force = true. These never reach
 * the static files, so a router registration for them is inert and must not be treated
 * as a missing prerender. Example: /shower-doors-las-vegas/semi-frameless 301s to
 * /shower-doors-las-vegas/semi-frameless-framed before any file lookup happens.
 */
const forcedRedirects = (() => {
  const toml = fs.readFileSync(path.join(root, 'netlify.toml'), 'utf-8');
  const blocks = toml.split('[[redirects]]').slice(1);
  return blocks
    .filter((b) => /force\s*=\s*true/.test(b))
    .map((b) => b.match(/from\s*=\s*"([^"]+)"/)?.[1])
    .filter((from) => from && !from.includes('*'));
})();

const ssrRoutes = readRoutes('src/AppSSR.tsx')        // prerender source of truth
  .filter((r) => !forcedRedirects.includes(r));
const clientRoutes = readRoutes('src/MainSite.tsx')   // client-side router
  .filter((r) => !forcedRedirects.includes(r));

const problems = [];
const diff = (a, b) => a.filter((x) => !b.includes(x));

for (const r of diff(ssrRoutes, routes))
  problems.push(`${r} — in AppSSR.tsx but not routes.js (never prerendered → hard 404)`);
for (const r of diff(routes, ssrRoutes))
  problems.push(`${r} — in routes.js but not AppSSR.tsx (prerender renders NotFound)`);
// MainSite omits the /lp/* paid landing pages by design; they live only in AppSSR/App.
for (const r of diff(clientRoutes, ssrRoutes))
  problems.push(`${r} — in MainSite.tsx but not AppSSR.tsx (client/SSR drift)`);

if (problems.length) {
  console.error('\n🚨 Route parity check FAILED:\n');
  problems.forEach((p) => console.error(`   ❌ ${p}`));
  console.error('\n   Fix: keep AppSSR.tsx, MainSite.tsx and scripts/routes.js in sync.\n');
  process.exit(1);
}

console.log(`✅ Route parity OK — ${ssrRoutes.length} prerenderable routes, all in sync`);
