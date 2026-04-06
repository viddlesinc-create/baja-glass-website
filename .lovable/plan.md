

## Fix Google Search Console Indexing Issues

### Problem Analysis

From your GSC data: 21 pages with redirects, 2 not found (404), 1 soft 404, 2 crawled-not-indexed, 1 duplicate without canonical. Here's what's causing them and how to fix each.

### Root Causes Found

**1. Critical: netlify.toml overrides your new installation page**
Line 82-86 in `netlify.toml` has a `force = true` redirect sending `/shower-door-installation-las-vegas` → `/shower-doors-las-vegas`. Since `force = true` overrides static files, your prerendered page is never served — Google sees a 301 redirect for a URL you're submitting in the sitemap. This is the most damaging issue.

**2. Duplicate route without redirect: `/shower-doors-las-vegas/semi-frameless`**
App.tsx line 142 renders `SemiFramelessShowerDoors` at both `/semi-frameless-framed` AND `/semi-frameless`. The second URL has no canonical tag pointing to the first, creating the "duplicate without user-selected canonical" issue. The netlify.toml redirect (line 163-167) uses `force = false`, but the prerendered HTML file at that path takes precedence.

**3. Client-side-only redirects invisible to crawlers**
`/shower-door-replacement-las-vegas` only redirects via JavaScript (React Router). Google's crawler may not execute JS, so it could see an empty page (soft 404) or index it as duplicate content. Needs a server-side 301.

**4. Orphaned file: `ShowerDoorReplacement.tsx`**
This page component still exists but is no longer routed. Not harmful but adds confusion.

### Changes

**File: `netlify.toml`**
- Remove the `/shower-door-installation-las-vegas` → `/shower-doors-las-vegas` redirect (lines 82-86) — the page is now real
- Add `/shower-door-replacement-las-vegas` → `/shower-door-installation-las-vegas` as a `force = true` 301 redirect
- Change `/shower-doors-las-vegas/semi-frameless` redirect from `force = false` to `force = true` so Netlify serves the 301 even if a prerendered file exists

**File: `src/App.tsx`**
- Remove the duplicate route at line 142 (`/shower-doors-las-vegas/semi-frameless` → `SemiFramelessShowerDoors`). The netlify.toml redirect handles this at the server level. Keep only the `RedirectComponent` version as a JS fallback, or remove entirely since server handles it.

**File: `scripts/routes.js`**
- Verify `/shower-door-installation-las-vegas` is present (it is — confirmed)
- Ensure no redirect-only URLs are in the prerender list

**File: `public/sitemap.xml`**
- Verify no redirect-target URLs are listed (confirmed clean)

**Delete: `src/pages/ShowerDoorReplacement.tsx`**
- Orphaned component, no longer referenced by any route

### Impact
- Fixes the "page with redirect" issue for the installation page (sitemap URL now serves real content)
- Fixes the "duplicate without canonical" for semi-frameless
- Prevents soft 404 on the replacement URL by adding server-side redirect
- Reduces not-indexed count by ensuring all sitemap URLs return 200 with unique content

