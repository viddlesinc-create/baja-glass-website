

## Recommendation: Enrich the Shower Doors Hub — No New Page Needed

These three queries share identical intent with your existing `/shower-doors-las-vegas` hub. Building separate pages would split authority and create cannibalization. The fix is optimizing the hub to also rank for "shower glass" variants.

### What Changes

**1. Update meta tags in `src/seo/metaConfig.ts`**
- Title: `Shower Glass Doors Las Vegas | Frameless, Sliding & Custom - Baja Glass`
- Description: Weave in "shower glass doors," "bath glass shower doors," and "near me" phrasing naturally

**2. Enrich on-page content in `src/pages/ShowerDoorsHub.tsx`**
- Add "shower glass" and "bath glass" phrasing into the intro paragraph and H2 subheadings
- Add a short section or paragraph addressing "shower glass doors" as a concept (e.g., "Whether you're searching for shower glass doors, bath glass enclosures, or custom shower panels...")
- Keep H1 focused but broaden supporting copy

**3. Add FAQ entries to the hub**
- "What are shower glass doors?" — brief answer distinguishing frameless glass from framed/acrylic
- "Do you install bath glass shower doors?" — yes, with link to product types

### Files Modified
- `src/seo/metaConfig.ts` — updated title/description for `/shower-doors-las-vegas`
- `src/pages/ShowerDoorsHub.tsx` — enriched copy + 2 FAQ entries

### Why Not a New Page
All three queries have identical search intent. Google treats "shower glass doors," "shower doors glass," and "bath glass shower doors" as the same topic. A dedicated page would compete with your hub and dilute authority.

