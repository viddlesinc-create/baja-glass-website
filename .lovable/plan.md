

# Fix: Remove `_redirects` File That Overrides Prerendered Content

## Problem

The `_redirects` file written by `build-ssr.js` (line 114) contains `/* /index.html 200`. On Netlify, `_redirects` rules are processed **before** `netlify.toml` rules. Unlike `netlify.toml` where `force = false` means "check static files first," the `_redirects` format has no `force` concept — a `200` rewrite always proxies to the target. This means every request hits `/index.html` regardless of whether a prerendered file exists.

The `netlify.toml` already has the correct SPA catch-all with `force = false` (lines 175-179), which is sufficient.

## Plan

### 1. Remove `_redirects` generation from `scripts/build-ssr.js` (lines 112-115)

Delete the entire Step 8 block that writes `_redirects`. The `netlify.toml` catch-all with `force = false` handles SPA fallback correctly while respecting static files.

### 2. Improve 404 handling in `netlify.toml`

The current catch-all serves `index.html` with status `200` for non-existent pages. This is fine for client-side routing (React Router shows the NotFound component), but search engines see a `200` for missing pages.

**No change needed here for now** — Netlify automatically serves `dist/404.html` with a 404 status when no static file matches and no redirect applies. However, the current `/* /index.html 200` catch-all in `netlify.toml` prevents this from ever triggering. We have two options:

**Option A (safe, recommended):** Keep the `netlify.toml` catch-all as-is (`200`). Client-side React Router handles 404 display. Search engines get `200` but see "Page Not Found" content — not ideal but functional.

**Option B (better SEO):** Change the catch-all to serve `404.html` with status `404`:
```toml
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
  force = false
```
This breaks client-side SPA navigation for unprerendered routes. Only safe if ALL routes are prerendered.

Since all 35 routes ARE prerendered, **Option B is safe** and gives proper 404 status codes.

## Files Changed

| File | Change |
|------|--------|
| `scripts/build-ssr.js` | Remove lines 112-115 (Step 8: `_redirects` generation) |
| `netlify.toml` | Change SPA catch-all from `/index.html` status `200` → `/404.html` status `404` |

## Verification

After deploy:
- `/about` → serves `dist/about/index.html` with unique content ✅
- `/contact` → serves `dist/contact/index.html` with unique content ✅  
- `/shower-doors-las-vegas/semi-frameless` → 301 redirect to `/semi-frameless-framed` ✅
- `/this-does-not-exist` → returns 404 status with 404.html ✅

