

# Fix: All Routes Rendering Homepage Content

## Problem

The SSG prerender pipeline is correctly set up in code (`AppSSR.tsx` with eager imports, `prerender.js` writing `route/index.html` files), but every URL on the live site still returns the homepage HTML. There are **two root causes**:

### Root Cause 1: Netlify's Built-in Prerendering Plugin

You likely have Netlify's "Prerendering" feature enabled (under Site Settings > Build & Deploy > Post Processing). This feature intercepts bot/crawler requests, loads your SPA in a headless browser, waits for JS to execute, and caches the result. Because the SPA uses `React.lazy()` and code splitting, the headless browser captures the page while it's still showing the Homepage component (before the lazy chunk loads). This overrides your static `route/index.html` files.

**Fix:** Disable Netlify's Prerendering feature in site settings. Your SSG build already produces the correct static HTML.

### Root Cause 2: Potential Silent SSR Failures

If any page component throws during `renderToString()` (e.g., accessing `window`, `document`, `localStorage`, or browser-only APIs), the `catch` block in `prerender.js` silently skips that route without writing a file. Netlify then falls back to the SPA catch-all (`/index.html` = homepage).

**Fix:** Add SSR safety guards and improve error visibility.

## Changes

### 1. Harden `prerender.js` with validation (scripts/prerender.js)

After rendering each route, verify the HTML contains route-specific content (not just the homepage). Log a warning if the rendered HTML appears to be a fallback. Also improve error logging to show full stack traces.

```text
For each route:
  - After render(), check html.length > 500 (not empty/skeleton)
  - After writing file, verify it exists and has content
  - On error, log full error.stack, not just error.message
```

### 2. Add SSR guards to `usePageTracking` (src/hooks/usePageTracking.ts)

Wrap the `window.dataLayer` access in a `typeof window !== 'undefined'` check. Although `useEffect` doesn't run during SSR, the hook itself should be SSR-safe to prevent any edge-case issues.

### 3. Add SSR guard to `QueryParameterRedirects` (src/components/QueryParameterRedirects.tsx)

Add a server-side early return. During SSR, `useNavigate` may behave unexpectedly. Return `null` immediately if `typeof window === 'undefined'`.

### 4. Add SSR guard to `RedirectComponent` (src/components/RedirectComponent.tsx)

Same pattern — return `null` during SSR to prevent `useNavigate` issues.

### 5. Remove default OG tags from `index.html` (index.html)

The `stripDefaultMetaTags` regex in `prerender.js` already handles this at build time, but having default OG tags in the template is fragile. Remove the default OG and Twitter meta block (lines 58-68) entirely. The `<title>` tag can stay as a fallback for the non-prerendered SPA shell.

### 6. Update `netlify.toml` — document that built-in prerendering must be OFF

Add a comment in the redirects section clarifying that Netlify's prerendering plugin must be disabled since static HTML files are generated at build time.

## Summary of files

| File | Change |
|------|--------|
| `scripts/prerender.js` | Add content validation and better error logging |
| `src/hooks/usePageTracking.ts` | Add `typeof window` guard |
| `src/components/QueryParameterRedirects.tsx` | Add SSR early return |
| `src/components/RedirectComponent.tsx` | Add SSR early return |
| `index.html` | Remove hardcoded OG/Twitter meta tags |
| `netlify.toml` | Add comment about disabling built-in prerendering |

## Manual step required (outside code)

Go to **Netlify Dashboard > Site Settings > Build & Deploy > Post Processing > Prerendering** and **disable** it. Your custom SSG build already generates static HTML for every route — Netlify's prerender plugin conflicts with this by overriding the static files with its own headless-browser capture (which shows the homepage).

