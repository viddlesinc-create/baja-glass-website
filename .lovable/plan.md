

# Fix: Netlify Routing Overriding Static Prerendered Files

## Evidence from Live Site Inspection

I fetched the actual HTML from bajaglass.com for three routes:

- **bajaglass.com/about**: Serves unique SSR content with `data-ssr="true"`, `<h1>About Baja Glass</h1>`, and full page-specific body HTML. Prerendering IS working here.
- **bajaglass.com/contact**: Also serves unique SSR content (verified).
- **bajaglass.com/shower-doors-las-vegas/semi-frameless**: Serves a **PageLoader skeleton** (pulsing placeholder divs), not unique page content. This means either the prerendered file is missing or contains the Suspense fallback.

This tells us the SSG pipeline is partially working — most routes render correctly, but some routes fail or produce skeleton output. The `/semi-frameless` case is particularly problematic because:
1. The `netlify.toml` has a `force = true` 301 redirect from `/semi-frameless` to `/semi-frameless-framed`
2. `force = true` means Netlify processes this redirect BEFORE checking for static files
3. If the prerendered file for `/semi-frameless-framed` is invalid or contains skeleton content, users and crawlers see the loading state

## Root Causes

### 1. `force = true` on query-parameter redirects may cause edge-case interference
Lines 17-71 of `netlify.toml` contain five `from = "/*"` redirects with `force = true` and query conditions. While query conditions should limit matching, `force = true` with wildcard `/*` patterns can behave unpredictably on Netlify and may intercept requests before static file resolution.

### 2. Missing `_redirects` fallback file
The build copies `public/_redirects` to `dist/`, but no `_redirects` file exists in `public/`. Adding a `_redirects` file in `dist/` provides a safety net — Netlify processes both `netlify.toml` and `_redirects`, and `_redirects` rules are simpler and more predictable for the SPA catch-all.

### 3. The `/semi-frameless` redirect uses `force = true`
Line 163-167: The `/shower-doors-las-vegas/semi-frameless` → `/semi-frameless-framed` redirect has `force = true`, which bypasses any static file at that path. Since `/semi-frameless` is not in `routes.js`, no prerendered file exists for it anyway, so the redirect is the only handler. But if the TARGET path's prerendered file has issues, the redirect chain breaks silently.

## Plan

### 1. Change all query-parameter redirects from `force = true` to `force = false` (netlify.toml)

With `force = false`, Netlify checks for static files first, then applies the redirect if no file matches. Since these redirects target query-parameter variations (which never have static files), the behavior is identical — but they can no longer accidentally interfere with static file serving.

Affected rules: lines 17-71 (page_id, kuid, yandex-source, ga_action, s, kref query redirects).

Keep `force = true` only on explicit path-based 301 redirects (like `/services` → `/shower-doors-las-vegas`) where we explicitly WANT to override any potential static file.

### 2. Generate `_redirects` file during build (scripts/build-ssr.js)

After prerendering, write a `dist/_redirects` file containing only the SPA catch-all:

```
/* /index.html 200
```

This is the simplest, most reliable Netlify redirect format. It acts as a fallback if `netlify.toml` rules have any unexpected behavior. Netlify merges both files, with `netlify.toml` rules taking precedence.

### 3. Remove `/semi-frameless` forced redirect from `netlify.toml` (lines 162-167)

This redirect is redundant — it's already handled by the React Router in `AppSSR.tsx` (line 136) and `App.tsx` (line 140) via `<RedirectComponent>`. The client-side redirect works correctly for browsers. For crawlers, the `netlify.toml` 301 is nice to have, but `force = true` is problematic. Change to `force = false`.

### 4. Ensure trailing-slash redirects use `force = false` (lines 119-167)

All trailing-slash cleanup redirects currently use `force = true`. Change to `force = false` so they never override existing static files.

## Summary of Changes

| File | Change |
|------|--------|
| `netlify.toml` | Change query-param redirects and trailing-slash redirects from `force = true` to `force = false`. Keep `force = true` only on explicit legacy path redirects (`/services`, `/contact-us`, `/custom-shower-doors-las-vegas`, `/shower-door-installation-las-vegas`, `/shower-doors-las-vegas/repair`). |
| `scripts/build-ssr.js` | Add step to write `dist/_redirects` file with SPA catch-all `/* /index.html 200` |

## Key Insight

The core rule is: **`force = true` tells Netlify to skip checking for static files.** Any redirect with `force = true` and a broad pattern (`/*`) can accidentally prevent static prerendered files from being served. By changing non-essential redirects to `force = false`, we ensure Netlify always checks for a static file first.

