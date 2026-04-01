

# Fix: Prerendered Route Files Not Serving Unique Content

## Root Cause Analysis

After auditing every file in the build pipeline, I identified **three concrete problems** that together explain why all routes serve homepage content:

### Problem 1: `analytics.ts` crashes SSR silently

`pushToDataLayer()` (line 13) references `window` directly with no SSR guard. While most calls are inside `onClick` handlers (safe), the module is imported by `PhoneNumber.tsx`, `GoogleMap.tsx`, and many pages. If any analytics function is called during render (not just in useEffect), `renderToString()` throws and the catch block in `prerender.js` skips that route. Netlify then falls back to the SPA catch-all `index.html` (homepage).

### Problem 2: No post-build verification

The build script has no verification step to confirm that the generated HTML files actually contain unique content per route. If the prerender silently fails for every route, the build "succeeds" but `dist/` only contains the generic SPA `index.html`. There is no way to detect this from the Netlify build log.

### Problem 3: The `index.html` template still has a hardcoded `<title>`

Line 39 of `index.html`:
```html
<title>Baja Glass & Mirror | Custom Shower Doors Las Vegas</title>
```

The `stripDefaultMetaTags` regex in `prerender.js` removes `<title>` tags, but if the regex fails for any reason (e.g., the tag has extra whitespace or attributes), the homepage title persists in every prerendered file.

## Plan

### 1. Add SSR guard to `src/lib/analytics.ts`

Wrap `pushToDataLayer` and every exported function with `typeof window === 'undefined'` early return. This prevents any SSR crash from analytics during rendering.

```ts
const pushToDataLayer = (event: string, data: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};
```

Apply the same guard to `trackPhoneClick`, `trackPageView`, `trackMapInteraction`, and every other function that reads `window.location` or `document.title`.

### 2. Add post-build verification to `scripts/build-ssr.js`

After the prerender step completes, add a new Step 6 that reads 5 representative route files and checks that each has a unique `<title>` and `<h1>`. If any file is missing or contains the homepage title, the build fails with a clear error message. This makes silent failures impossible.

```text
Check files:
  dist/about/index.html        → expects "About Baja Glass"
  dist/contact/index.html      → expects "Get Your Free Quote"
  dist/shower-doors-las-vegas/index.html → expects "Custom Shower Doors"
  dist/blog/index.html         → expects "Shower Door Blog"
  dist/faq/index.html          → expects "Shower Door FAQ"

For each: read file, extract <title>, verify it differs from homepage title.
If any check fails → console.error + process.exit(1)
```

### 3. Harden `prerender.js` error handling

Change the error handling so that if ANY route fails to render, the entire build fails (not just logs a warning). This prevents partial builds from deploying with missing route files.

Also add a final summary that lists every generated file path and its `<title>` tag, giving full visibility in the Netlify build log.

### 4. Remove hardcoded title from `index.html`

Remove line 39 (`<title>Baja Glass & Mirror | Custom Shower Doors Las Vegas</title>`) from the template. Helmet injects the correct title per route. The SPA shell doesn't need a title tag since `SEOHead` handles it client-side, and the prerendered files will have the correct title injected.

### 5. Add dual file output to `prerender.js` (belt and suspenders)

For each route, write BOTH:
- `dist/about/index.html` (directory-based, current approach)
- `dist/about.html` (file-based, Netlify fallback)

This ensures Netlify serves the correct file regardless of its "Pretty URLs" setting or how it resolves clean URLs. Both formats are valid and Netlify checks both.

## Files Changed

| File | Change |
|------|--------|
| `src/lib/analytics.ts` | Add `typeof window === 'undefined'` guard to all functions |
| `scripts/build-ssr.js` | Add post-build verification step that fails the build if route files are missing or have wrong content |
| `scripts/prerender.js` | Fail build on any route error; write both `route/index.html` AND `route.html`; log title per file |
| `index.html` | Remove hardcoded `<title>` tag |

## Expected Outcome

After these changes, the Netlify build log will show:
- The title extracted from each generated HTML file
- A verification pass/fail for 5 representative routes
- Build failure if any route doesn't produce unique content

This eliminates the possibility of a "successful" build that deploys homepage content for all routes.

