

# Plan: ServiceAreasBlock, Fix Non-Canonical Sitemap URLs, Orphan Pages, and Meta Description Audit

## Summary

Four issues to fix:
1. **Build a ServiceAreasBlock component** — a reusable block of city links added to the bottom of service pages for internal linking
2. **Remove non-canonical URL from sitemap** — `/shower-doors-las-vegas/semi-frameless` 301-redirects to `/semi-frameless-framed`, so it should not be in the sitemap or routes list
3. **Fix orphan pages** — `/faq` and `/shower-enclosures-las-vegas` are not linked from the header or footer navigation
4. **Trim meta descriptions over 160 characters** — at least 7 pages have descriptions exceeding 160 chars

---

## 1. Create ServiceAreasBlock Component

**New file: `src/components/ServiceAreasBlock.tsx`**

A simple, reusable component that renders a grid of internal links to all 6 location pages plus the Areas Served page. Styled to match existing card/section patterns. Includes a heading like "Serving the Greater Las Vegas Area" and links to Henderson, Summerlin, Paradise, Spring Valley, Enterprise, and Green Valley.

**Add it to the bottom of these service pages** (before the closing `</div>`):
- `src/pages/ShowerDoorsHub.tsx`
- `src/pages/FramelessShowerDoors.tsx`
- `src/pages/SemiFramelessShowerDoors.tsx`
- `src/pages/SlidingShowerDoors.tsx`
- `src/pages/HingedShowerDoors.tsx`
- `src/pages/CustomEnclosures.tsx`
- `src/pages/SteamShowerEnclosures.tsx`
- `src/pages/ShowerEnclosuresLasVegas.tsx`
- `src/pages/GlassCompanyLasVegas.tsx`
- `src/pages/ResidentialGlassRepair.tsx`
- `src/pages/OfficeEnclosures.tsx`

---

## 2. Remove Non-Canonical URL from Sitemap

`/shower-doors-las-vegas/semi-frameless` is 301-redirected to `/shower-doors-las-vegas/semi-frameless-framed` in `netlify.toml`. Having the redirect source in the sitemap tells Google to crawl a URL that immediately bounces — wastes crawl budget and confuses indexing.

**Changes:**
- **`scripts/routes.js`** — Remove `/shower-doors-las-vegas/semi-frameless` from the routes array (line 9)
- **`public/sitemap.xml`** — Remove the `<url>` entry for `/shower-doors-las-vegas/semi-frameless` (or regenerate)
- **`src/seo/metaConfig.ts`** — Remove the `/shower-doors-las-vegas/semi-frameless` entry (lines 64-69), since it's a redirect target and should never serve its own meta

---

## 3. Fix Orphan Pages

These pages exist in the router but aren't linked from header or footer navigation:

| Page | Current linkage | Fix |
|------|----------------|-----|
| `/faq` | Only linked from NotFound and SiteLinks | Add "FAQ" to Footer quickLinks array |
| `/shower-enclosures-las-vegas` | Linked from ShowerDoorsHub and SiteLinks but not footer/header | Add to Sitemap.tsx under "Shower Doors & Enclosures" section, and to Footer serviceLinks |
| `/glass-company-las-vegas` sub-pages | Footer only has hub link | Already linked from SiteLinks and Sitemap page — acceptable |

**Changes:**
- **`src/components/Footer.tsx`** — Add `{ name: "FAQ", href: "/faq" }` to `quickLinks` array
- **`src/components/Footer.tsx`** — Add `{ name: "Shower Enclosures", href: "/shower-enclosures-las-vegas" }` to `serviceLinks` array
- **`src/pages/Sitemap.tsx`** — Add `{ name: "Shower Enclosures Las Vegas", href: "/shower-enclosures-las-vegas" }` to the "Shower Doors & Enclosures" section, and add `{ name: "FAQ", href: "/faq" }` to the "Main Pages" section

---

## 4. Meta Descriptions Over 160 Characters

These descriptions need trimming (current char counts in parentheses):

| Route | Current length | Shortened to |
|-------|---------------|-------------|
| `/` | ~178 | "Local Las Vegas glass company. Frameless shower doors, custom enclosures and mirrors. Serving Henderson & Summerlin. Free estimates." |
| `/shower-doors-las-vegas` | ~176 | "Shower doors in Las Vegas by Baja Glass. Frameless, semi-frameless and sliding options. Free in-home estimate, fast local installation." |
| `/glass-company-las-vegas` | ~167 | "Trusted Las Vegas glass company for shower doors, mirrors, windows and commercial glass. Licensed and insured. Free quotes." |
| `/gallery` | ~180 | "Frameless shower door gallery — completed projects across Las Vegas. Get inspiration for your custom glass shower or mirror installation." |
| `/reviews` | ~165 | "Real reviews from Henderson, Summerlin and Paradise customers. See why Las Vegas homeowners trust Baja Glass for shower doors." |
| `/contact` | ~165 | "Request a free quote for frameless shower doors or custom glass in Las Vegas. Call or fill out our form to schedule a measurement." |
| `/about` | ~175 | "Locally owned Las Vegas glass company specializing in frameless shower doors and custom glass. Meet the Baja Glass & Mirror team." |
| `/blog/installation-process` | ~170 | "Complete guide to shower door installation — consultation to final inspection. Learn preparation steps, timeline, and what to expect." |

**File changed:** `src/seo/metaConfig.ts` — update the `description` field for each route listed above.

---

## Files Changed Summary

| File | Change |
|------|--------|
| `src/components/ServiceAreasBlock.tsx` | **NEW** — reusable city links component |
| `src/components/Footer.tsx` | Add FAQ and Shower Enclosures links |
| `src/pages/Sitemap.tsx` | Add FAQ and Shower Enclosures entries |
| `src/seo/metaConfig.ts` | Trim 8 meta descriptions + remove semi-frameless entry |
| `scripts/routes.js` | Remove `/shower-doors-las-vegas/semi-frameless` |
| `public/sitemap.xml` | Remove semi-frameless URL entry |
| 11 service page files | Import and add `<ServiceAreasBlock />` |

