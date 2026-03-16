

# Current State vs. What You're Asking

**What was already done:** The `/shower-doors-las-vegas/repair` page was removed from navigation, footer, and sitemap, and 301-redirected to `/shower-doors-las-vegas`. The `/shower-door-installation-las-vegas` page was similarly removed and redirected.

**What has NOT been done:** The word "repair" still appears ~525 times across 19 page files. The content pivot from "repair" language to "replacement/upgrade" language has not been implemented. CTAs, FAQs, descriptions, and anchor text throughout the site still reference "repair" as a service.

---

## Plan: Content Pivot from "Repair" to "Replacement & Upgrade"

### 1. FAQ & Content Language Updates

**`src/pages/Index.tsx`**
- Change FAQ "Can you repair my existing shower door?" → "Can you replace my existing shower door?" with answer pivoting to replacement/upgrade
- Change "residential glass repair" service bullet → "residential glass replacement"
- Change city description mentions of "repair" → "replacement"
- Update the "Residential Glass Repair" card title/description to "Residential Glass Replacement" with upgrade-focused copy
- CTA: "Emergency Glass Repair" → "Emergency Glass Replacement"

**`src/pages/ShowerDoorsHub.tsx`**
- FAQ "Do you repair existing shower doors?" → "Do you replace existing shower doors?" — answer: "Yes. We specialize in full shower door replacements and upgrades..."
- Structured data description: remove "repair" → "replacement"

**`src/pages/FAQ.tsx`**
- Category "Shower Glass Repair" → "Shower Door Replacement"
- Rewrite 3 repair-focused FAQs to pivot toward replacement/upgrade language
- Meta description: remove "repair" reference

**`src/pages/GlassCompanyLasVegas.tsx`**
- Pivot residential glass content from "maintenance/repair" to "replacement and new custom glass"
- Update any repair-focused CTAs

### 2. Location Pages (6 files)

**Henderson, Summerlin, Paradise, Spring Valley, Enterprise, Green Valley:**
- Remove "Shower Door Repair [City]" H2 sections and replace with "Shower Door Replacement & Upgrades in [City]"
- Rewrite bullet lists: "roller and track repair" → "roller and track replacement", "leak diagnosis and repair" → "full door replacement for persistent leaks"
- Update FAQs: "Do you offer shower door repair in [City]?" → "Do you offer shower door replacement in [City]?"
- Update meta descriptions from "repair" → "replacement"

### 3. Supporting Pages

**`src/pages/ResidentialGlassRepair.tsx`**
- This is a full page at `/glass-company-las-vegas/residential-glass-repair`. Rename content focus to "Residential Glass Replacement" — update H1, meta, service descriptions, and CTAs from "repair" to "replacement"
- Note: URL path contains "repair" but changing URLs would require redirect work. Recommend keeping the URL for now (it captures repair search intent and redirects users to replacement messaging).

**`src/pages/ShowerEnclosuresLasVegas.tsx`** — Reword any "repair" mentions to "replacement"

**`src/pages/AreasServed.tsx`** — Update any remaining "repair" service descriptions

**`src/pages/blog/ShowerDoorCostGuide.tsx`** — Reframe repair cost references as replacement costs

**`src/pages/blog/HardWaterSolutions.tsx`** — Minor: change "repair" references to "replacement" where applicable

**`src/pages/blog/WarrantyInformation.tsx`** — Change "covered repairs" language to "covered replacements"

### 4. CTA Pivot

Across all updated pages:
- "Get a Repair Quote" → "Get a Replacement Estimate"
- "Emergency Glass Repair" → "Emergency Glass Replacement"
- "Schedule Repair" → "Schedule a Replacement"
- "Upgrade Your Shower Glass" (keep as-is, already good)

### 5. Structured Data & Schema

- Update Service schema descriptions in ShowerDoorsHub, location pages, and GlassCompanyLasVegas from "repair" to "replacement"
- Footer Organization schema: "glass repair" → "glass replacement" in description

### 6. Files NOT changed
- `src/pages/ShowerGlassRepair.tsx` and `src/pages/ShowerDoorInstallationLasVegas.tsx` — already redirected, not bundled, no action needed

---

## Summary: ~15 files to edit

| File | Key Change |
|------|-----------|
| `src/pages/Index.tsx` | FAQs, service bullets, city descriptions, card → "replacement" |
| `src/pages/ShowerDoorsHub.tsx` | FAQ + schema → "replacement" |
| `src/pages/FAQ.tsx` | Category name + 3 FAQs → "replacement" |
| `src/pages/GlassCompanyLasVegas.tsx` | Content pivot to replacement |
| `src/pages/ResidentialGlassRepair.tsx` | Full content reframe to replacement |
| `src/pages/ShowerEnclosuresLasVegas.tsx` | Minor wording updates |
| `src/pages/AreasServed.tsx` | Service descriptions |
| `src/pages/blog/ShowerDoorCostGuide.tsx` | Cost framing |
| `src/pages/blog/HardWaterSolutions.tsx` | Minor wording |
| `src/pages/blog/WarrantyInformation.tsx` | Coverage language |
| 6 location pages | H2s, FAQs, metas, bullet lists |
| `src/components/Footer.tsx` | Schema description |

