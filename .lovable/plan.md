

## Analysis

The query "shower door replacement near me" is a high-intent, transactional keyword. Currently:
- No dedicated URL targets it
- Content is fragmented across `/shower-doors-las-vegas`, `/shower-doors-las-vegas/frameless`, `/shower-doors-las-vegas/repair` (which redirects), and location pages
- The `/shower-doors-las-vegas` hub partially covers it but its H1 and meta are focused on "Shower Doors Las Vegas" broadly

## Plan: Create a Shower Door Replacement Page

### New file: `src/pages/ShowerDoorReplacement.tsx`

A dedicated service page at `/shower-door-replacement-las-vegas` targeting:
- **Primary**: "shower door replacement near me", "shower door replacement las vegas"
- **Secondary**: "replace shower door las vegas", "shower door upgrade"

**Page structure** (following existing service page patterns like FramelessShowerDoors.tsx):

1. **SEO Head** — H1: "Shower Door Replacement Las Vegas", meta description targeting the keyword
2. **Structured Data** — Service schema for "Shower Door Replacement" + BreadcrumbList + FAQ
3. **Hero section** — Reuse existing hero image, strong CTA
4. **"Signs You Need a Replacement"** — Content section (cracked glass, outdated frames, leaks, hard water damage)
5. **Replacement process steps** — Inspect → Measure → Remove → Install
6. **Types of replacement options** — Cards linking to frameless, semi-frameless, sliding, hinged pages (internal linking)
7. **FAQ section** — 4-5 questions targeting long-tail variants ("how much does shower door replacement cost", "how long does it take")
8. **ServiceAreasBlock** — Reusable component already in use
9. **Final CTA** — Phone number + contact link

### Route addition: `src/App.tsx`
Add route: `/shower-door-replacement-las-vegas` → `ShowerDoorReplacement`

### Update `scripts/routes.js`
Add `/shower-door-replacement-las-vegas` to the routes array for prerendering

### Update `public/sitemap.xml`
Add the new URL entry

### Internal linking updates
- **ShowerDoorsHub.tsx**: Add a card/link for "Shower Door Replacement"
- **Footer.tsx**: Add link under services section
- **Header navigation**: No change needed (the hub dropdown covers service types)

### Technical details
- Lazy-loaded via `React.lazy()` like other pages
- Uses `Helmet` for meta tags, same pattern as FramelessShowerDoors
- Includes `ServiceAreasBlock` at bottom
- LocalBusiness + Service structured data with "near me" signals (areaServed, geo coordinates)

