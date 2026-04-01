

# SEO Prerender Audit: Root Cause & Fix Plan

## A. Root Cause Found

**Every route except the homepage renders identical placeholder HTML during the SSG build.** The technical cause:

`App.tsx` uses `React.lazy()` for all page components except `Index` and `NotFound`. During the SSG prerender step (`scripts/prerender.js`), `renderToString()` is called — this is a **synchronous** API that cannot resolve dynamic `import()` calls. When it encounters a `<Suspense>` boundary wrapping a lazy component, it renders the **fallback** instead: the `<PageLoader />` skeleton (a generic pulse animation div).

**Result:** All 33+ prerendered HTML files contain identical body content: Header → BreadcrumbNav → PageLoader skeleton → Footer. Only the Helmet metadata (title, description, canonical) differs between files, but even that is undermined by Problem #2.

**Problem #2: Duplicate meta tags.** The `index.html` template contains hardcoded default OG tags (og:title, og:description, og:image, twitter:card, etc.). The prerender script appends Helmet-generated page-specific tags before `</head>` but never removes the defaults. Crawlers see TWO sets of OG tags and may pick the wrong (default) one.

**Problem #3: No SSR-specific routing.** `entry-server.tsx` imports `App` directly, which uses lazy loading. There is no server-side variant with eager imports.

## B. Pass/Fail Summary (Current State)

| Check | `/` (homepage) | All other routes |
|-------|:-:|:-:|
| Unique `<title>` in raw HTML | ✅ | ⚠️ Present but duplicated with default |
| Unique meta description | ✅ | ⚠️ Present but duplicated with default |
| Unique canonical | ✅ | ⚠️ Present but duplicated with default |
| Unique H1 in raw HTML | ✅ | ❌ All show PageLoader div |
| Unique body content | ✅ | ❌ All identical skeleton |
| Correct schema (JSON-LD) | ✅ | ❌ Not rendered (inside lazy components) |
| Correct prerendered HTML | ✅ | ❌ Generic fallback |

## C. Fixes

### 1. Create `src/AppSSR.tsx` — Server-side App with eager imports

A copy of `App.tsx` where every page component is eagerly imported (no `lazy()`), and the `<Suspense>` wrapper is removed. This is only used during the SSG build, not in the client bundle.

All ~30 page components will be statically imported. The route definitions stay identical to `App.tsx`.

### 2. Update `src/entry-server.tsx` to use `AppSSR`

Change `import App from './App'` → `import App from './AppSSR'` so the SSG prerender uses synchronous imports.

### 3. Fix duplicate meta tags in `scripts/prerender.js`

Before injecting Helmet tags, strip the hardcoded default OG/twitter tags from the template HTML:
- Remove all `<meta property="og:*">` defaults
- Remove all `<meta name="twitter:*">` defaults
- Then inject Helmet-generated tags cleanly

### 4. Fix `index.html` default `<title>` tag

Add a default `<title>` tag to `index.html` so that even the raw SPA fallback has a proper title. Helmet will override it per-route in prerendered files.

### Files changed

| File | Action |
|------|--------|
| `src/AppSSR.tsx` | **New** — eager-import version of App for SSR |
| `src/entry-server.tsx` | Import `AppSSR` instead of `App` |
| `scripts/prerender.js` | Strip default OG/twitter meta before Helmet injection |
| `index.html` | Add default `<title>` tag |

### What this does NOT change
- Client-side bundle: `App.tsx` with lazy loading remains untouched — users still get code-splitting benefits
- No URL changes, no redirect changes, no content changes
- Netlify Prerender extension can remain enabled as a belt-and-suspenders approach, but the static HTML files will now contain full page-specific content

