

# Consolidated SEO Architecture & Content Optimization Plan

This plan merges the previous SEO response with the new navigation, internal linking, and cannibalization fixes into a single implementation.

---

## 1. Navigation Updates

### Header.tsx
- Restructure the `showerDoorsPages` dropdown into three clear groups:
  - **Design/Product**: Frameless, Semi-Frameless, Sliding, Hinged, Custom Enclosures, Steam Enclosures
  - **Services**: "Shower Door Installation" (links to `/shower-door-installation-las-vegas`)
  - **Urgent**: "Shower Door Repair" (links to `/shower-doors-las-vegas/repair`)
- Remove "Custom Shower Doors" link (`/custom-shower-doors-las-vegas`) from nav since that page will redirect

### Footer.tsx
- Add a new "Services" column with direct links to:
  - "Shower Door Installation" → `/shower-door-installation-las-vegas`
  - "Shower Door Repair" → `/shower-doors-las-vegas/repair`
  - "Glass Company Services" → `/glass-company-las-vegas`
  - "Shower Door Cost Guide" → `/blog/shower-door-installation-cost-las-vegas`

---

## 2. Meta Config Updates (metaConfig.ts)

Update these entries with new titles and descriptions:

| Route | New Title (under 60 chars) | New Description (under 160 chars) |
|-------|-----------|-----------------|
| `/` | `Baja Glass & Mirror | Shower Doors & Glass in Las Vegas` | `Baja Glass & Mirror is a local Las Vegas glass company specializing in frameless shower doors, custom glass enclosures and mirrors. Serving Henderson & Summerlin. Free estimates.` |
| `/shower-doors-las-vegas` | `Custom Shower Doors Las Vegas | Frameless & Sliding Glass` | `Looking for shower doors in Las Vegas? Baja Glass designs and installs frameless, semi-frameless and sliding glass shower doors. Free in-home estimate, fast local installation.` |
| `/shower-door-installation-las-vegas` | `Shower Door Installation Las Vegas | Expert Installers` | `Professional shower door installation in Las Vegas. Frameless and semi-frameless glass doors, accurate measurements, leak-free installation. Get a free quote today.` |
| `/shower-doors-las-vegas/repair` | `Shower Door Repair Las Vegas | Fast Glass & Hardware Fixes` | `Same-day shower door repair in Las Vegas & Henderson. Broken glass, sliding door repair, seal replacement, hardware fixes. Call (702) 383-0779 for emergency service.` |
| `/glass-company-las-vegas` | `Glass Company Las Vegas | Residential & Commercial Glass` | `Baja Glass & Mirror is a trusted glass company in Las Vegas for shower doors, mirrors, windows and commercial glass. Local, licensed and insured. Request a free quote.` |
| `/areas-served` | `Shower Door & Glass Services Near You | Las Vegas Area` | `Baja Glass provides shower doors, glass repair and custom enclosures near you in Las Vegas, Henderson, Summerlin, Paradise and surrounding areas.` |
| `/reviews` | `Customer Reviews | Baja Glass & Mirror Las Vegas` | `See why Las Vegas homeowners trust Baja Glass & Mirror for frameless shower doors and custom glass. Read real reviews from Henderson, Summerlin and Paradise customers.` |
| `/blog/shower-door-installation-cost-las-vegas` | `Shower Door Cost Las Vegas 2026 | Pricing Guide` | `How much does shower door installation cost in Las Vegas? See 2026 price ranges for frameless, semi-frameless and sliding glass shower doors, plus cost factors.` |

---

## 3. Page H1 & Content Updates

### `/shower-doors-las-vegas` (ShowerDoorsHub.tsx)
- **H1**: `Custom Shower Doors in Las Vegas – Frameless & Sliding Glass`
- **Add above-fold service bullets**: Custom frameless shower doors, Sliding glass shower doors, Shower door replacement & repair, Serving Las Vegas, Henderson, Summerlin
- **CTA text**: "Get My Free Shower Door Estimate"
- **Add internal link section** below hero: "Need it installed? View our [Professional Installation Services](/shower-door-installation-las-vegas)."
- **Add review trust block**: "Rated 4.9/5 by Las Vegas homeowners – [Read our customer reviews](/reviews)."

### `/shower-door-installation-las-vegas` (ShowerDoorInstallationLasVegas.tsx)
- **H1**: `Professional Shower Door Installation in Las Vegas`
- **Update FAQ questions** to target cost/labor queries:
  - "How much does shower door installation cost in Las Vegas?"
  - "How long does professional shower door installation take?"
  - "Do you remove old shower doors?"
- **Add keyword H2s**: "Shower Door Installation Services in Las Vegas", "Types of Shower Doors We Install", "Installation Costs & Estimates"
- **Add internal link**: "Wondering about pricing? Read our [Shower Door Cost Guide](/blog/shower-door-installation-cost-las-vegas)."

### `/shower-doors-las-vegas/repair` (ShowerGlassRepair.tsx)
- **H1**: `Shower Door Repair Las Vegas – Fast Glass & Hardware Fixes`
- Already well-optimized for repair/near-me queries; minor H1 update only

### `/glass-company-las-vegas` (GlassCompanyLasVegas.tsx)
- **H1**: `Full-Service Glass Company in Las Vegas`
- **Add explicit service bullets** near top: Custom shower glass & enclosures, Mirrors & mirror walls, Residential window glass repair, Commercial storefront glass & office enclosures

### `/blog/shower-door-installation-cost-las-vegas` (ShowerDoorCostGuide.tsx)
- **H1**: `2026 Guide: Shower Door Installation Cost in Las Vegas`
- **Update year references** from 2025 to 2026

### Homepage (`/`) (Index.tsx)
- **H1**: `Baja Glass & Mirror – Shower Doors & Custom Glass in Las Vegas`
- **Add service overview section** with H2: "Our Glass Services in Las Vegas" with bullet list
- **Add review trust link**: "Rated 4.9/5 – [Read our customer reviews](/reviews)."

### `/areas-served` (AreasServed.tsx)
- **H1**: `Shower Door & Glass Services Near You`
- **Add city-specific H2 subsections** before neighborhood cards, each with a paragraph and links to Installation and Repair pages:
  - H2: "Shower Door & Glass Services in Las Vegas, NV" — links "installation" → `/shower-door-installation-las-vegas`, "repair" → `/shower-doors-las-vegas/repair`
  - H2: "Shower Doors in Henderson, NV" — same pattern
  - H2: "Shower Doors in Summerlin, NV" — same pattern
  - H2: "Shower Doors in Paradise & Green Valley" — same pattern

### `/reviews` (Reviews.tsx)
- **H1**: `Customer Reviews for Baja Glass & Mirror`

---

## 4. Internal Linking Logic

Across all service pages, add contextual internal links:
- Any mention of "repair" → links to `/shower-doors-las-vegas/repair`
- Any mention of "installation" or "installers" → links to `/shower-door-installation-las-vegas`
- On key service pages (ShowerDoorsHub, InstallationLasVegas), add a trust block linking to `/reviews`
- On service pages, add link to cost guide: `/blog/shower-door-installation-cost-las-vegas`

---

## 5. Cannibalization Fix: Redirect `/custom-shower-doors-las-vegas`

### App.tsx
- Replace the `CustomShowerDoorsLasVegas` route with a redirect:
  ```
  <Route path="/custom-shower-doors-las-vegas" element={<RedirectComponent to="/shower-doors-las-vegas" />} />
  ```
- Remove the lazy import for `CustomShowerDoorsLasVegas`

### metaConfig.ts
- Remove the `/custom-shower-doors-las-vegas` entry

### scripts/routes.js
- Remove `/custom-shower-doors-las-vegas` from routes array

### public/sitemap.xml & public/_redirects
- Add redirect rule for `/custom-shower-doors-las-vegas` → `/shower-doors-las-vegas`
- Remove from sitemap

---

## 6. Image Alt Text Updates

On updated pages, ensure all hero and gallery images have descriptive alt text containing target keywords:
- ShowerDoorsHub hero: "Custom frameless shower door installation in Las Vegas"
- InstallationLasVegas hero: "Professional shower door installation in Las Vegas home"
- GlassCompanyLasVegas hero: "Las Vegas glass company - commercial and residential glass services"
- ShowerGlassRepair hero: "Shower door repair service in Las Vegas - damaged glass"

---

## Summary: Files to Edit

| File | Changes |
|------|---------|
| `src/seo/metaConfig.ts` | Update 8 route entries, remove 1 |
| `src/components/Header.tsx` | Restructure dropdown, remove custom doors link |
| `src/components/Footer.tsx` | Add Services column with Installation, Repair, Glass links |
| `src/pages/ShowerDoorsHub.tsx` | New H1, service bullets, internal links, CTA text, alt text |
| `src/pages/ShowerDoorInstallationLasVegas.tsx` | New H1, updated FAQs, H2s, cost guide link, alt text |
| `src/pages/ShowerGlassRepair.tsx` | Updated H1, alt text |
| `src/pages/GlassCompanyLasVegas.tsx` | New H1, service bullets, alt text |
| `src/pages/blog/ShowerDoorCostGuide.tsx` | New H1, year 2025→2026 |
| `src/pages/Index.tsx` | New H1, service section, review link |
| `src/pages/AreasServed.tsx` | New H1, city H2 subsections with internal links |
| `src/pages/Reviews.tsx` | New H1 |
| `src/App.tsx` | Redirect custom-shower-doors route, remove import |
| `scripts/routes.js` | Remove custom-shower-doors route |
| `public/_redirects` | Add custom-shower-doors → shower-doors-las-vegas redirect |

