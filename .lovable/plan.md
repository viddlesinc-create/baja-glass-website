

## Fix 7 SEO Gaps

### 1. Fix OG Image Default
**File**: `src/seo/metaConfig.ts` line 4
Change `DEFAULT_OG_IMAGE` from `favicon.png` to `${BASE_URL}/og-image.jpg`.

### 2. Delete Orphaned Page
**File**: Delete `src/pages/ShowerGlassRepair.tsx` entirely.

### 3. Add noindex to Landing Page
**File**: `src/pages/landing/FramelessShowerLanding.tsx` line 113
Change `<meta name="robots" content="index, follow" />` to `<meta name="robots" content="noindex, nofollow" />`.

### 4. Add Product Schema to 4 Service Pages
**Files**: `FramelessShowerDoors.tsx`, `SlidingShowerDoors.tsx`, `HingedShowerDoors.tsx`, `CustomEnclosures.tsx`
Add a `Product` schema block alongside the existing `Service` schema in each page's `<Helmet>`, including `AggregateOffer` with price ranges:
- Frameless: $1,200–$3,000+
- Sliding: $800–$2,500
- Hinged: $900–$2,800
- Custom Enclosures: $1,500–$4,000+

Each Product schema will reference the canonical LocalBusiness via `@id` and include the shared aggregate rating (4.6/27).

### 5. Fix Homepage H1 Exact-Match Phrase
**File**: `src/pages/Index.tsx` lines 118-124
Reword to:
```
Baja Glass & Mirror –
Shower Doors Las Vegas    ← gradient span
& Custom Glass            ← smaller line
```
This puts "Shower Doors Las Vegas" as one contiguous string.

### 6. Add Legal Pages to metaConfig
**File**: `src/seo/metaConfig.ts`
Add entries for `/privacy-policy` and `/terms-of-service` with `noIndex: true` and appropriate titles/descriptions.

### 7. Update Trailing Slash Documentation
Update memory note to state: "All canonicals and netlify.toml use non-trailing slashes." No code change.

### Technical Details
- The `SEOMeta` type already has `noIndex?: boolean` — no type change needed.
- Product schema uses `@graph` pattern to co-exist with Service schema.
- Provider references use `"@id": "https://bajaglass.com/#localbusiness"` to link to the homepage entity.

