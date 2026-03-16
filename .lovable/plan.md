

# Plan: Remove Installation & Repair Pages

Remove `/shower-door-installation-las-vegas` and `/shower-doors-las-vegas/repair`, redirecting both to `/shower-doors-las-vegas` to preserve SEO equity and prevent 404s.

---

## 1. Routes & Redirects

### `src/App.tsx`
- Remove lazy imports for `ShowerDoorInstallationLasVegas` and `ShowerGlassRepair`
- Replace both routes with `<RedirectComponent>` pointing to `/shower-doors-las-vegas`

### `public/_redirects`
- Add two redirect rules:
  - `/shower-door-installation-las-vegas → /shower-doors-las-vegas 301`
  - `/shower-doors-las-vegas/repair → /shower-doors-las-vegas 301`

### `scripts/routes.js`
- Remove both routes from the array

### `public/sitemap.xml`
- Remove both `<url>` entries

---

## 2. Navigation & Footer

### `src/components/Header.tsx`
- Remove "Shower Door Installation" and "Shower Door Repair" from `showerDoorsPages` array

### `src/components/Footer.tsx`
- Remove "Shower Door Installation" and "Shower Door Repair" from `serviceLinks` array

---

## 3. SEO Config

### `src/seo/metaConfig.ts`
- Remove entries for `/shower-door-installation-las-vegas` and `/shower-doors-las-vegas/repair`

### `src/components/BreadcrumbNav.tsx`
- Remove the breadcrumb entry for `/shower-door-installation-las-vegas`

### `src/components/SiteLinks.tsx`
- Remove "Installation Services" and "Shower Glass Repair" links

### `src/pages/Sitemap.tsx`
- Remove "Shower Glass Repair" from the HTML sitemap listing

---

## 4. Internal Link Cleanup (remove or repoint links)

All internal links to these two pages across the site need to be updated. Links mentioning "installation" or "repair" will either be removed or repointed to `/shower-doors-las-vegas` or `/contact`.

Files with references to clean up:
- **`src/pages/ShowerDoorsHub.tsx`** — Remove repair service card from services array, remove/repoint installation and repair inline links
- **`src/pages/AreasServed.tsx`** — Rewrite city subsection paragraphs to remove installation/repair links (point to `/shower-doors-las-vegas` or `/contact` instead)
- **`src/pages/ShowerEnclosuresLasVegas.tsx`** — Remove installation link
- **`src/pages/CustomShowerDoorsLasVegas.tsx`** — Remove installation link (note: this page already redirects, but the file still exists)
- **`src/pages/Index.tsx`** — Remove any installation/repair internal links
- **`src/pages/GlassCompanyLasVegas.tsx`** — Remove any repair/installation links
- **`src/pages/blog/ShowerDoorCostGuide.tsx`** — Repoint installation links to `/shower-doors-las-vegas`
- **Location pages** (Henderson, Summerlin, Paradise, etc.) — Remove installation/repair links from `LocationPageTemplate` usage

---

## 5. Files to Keep (not delete)

The actual page files (`src/pages/ShowerDoorInstallationLasVegas.tsx` and `src/pages/ShowerGlassRepair.tsx`) can be kept in the codebase since they're no longer routed to, but removing the imports and routes means they won't be bundled. Optionally they can be deleted.

---

## Summary

| Area | Action |
|------|--------|
| Routes | Replace with 301 redirects to `/shower-doors-las-vegas` |
| Nav/Footer | Remove both links |
| Sitemap (XML + HTML) | Remove entries |
| metaConfig | Remove entries |
| ~10 content pages | Remove or repoint internal links |

