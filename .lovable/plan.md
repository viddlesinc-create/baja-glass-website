

## Fix Valid SEO Issues from Audit

### Summary
Address the legitimate findings: expand FAQ answers, create Privacy Policy & Terms pages, fix rating inconsistency, add missing schema properties, and consolidate duplicate schemas.

### Changes

**1. Expand FAQ Answers (src/pages/Index.tsx)**
- Rewrite all 6 FAQ answers from ~25 words to 100-150 words each
- Include business name and location naturally
- Keep answers practical and informative

**2. Create Privacy Policy Page**
- New file: `src/pages/PrivacyPolicy.tsx`
- Route: `/privacy-policy`
- Sections: data collection (contact forms), usage, third-party services (Google Analytics/Maps), CCPA/Nevada compliance, contact info
- Add SEO meta via Helmet

**3. Create Terms of Service Page**
- New file: `src/pages/TermsOfService.tsx`
- Route: `/terms-of-service`
- Sections: service agreement, warranties, liability, payment terms, cancellation
- Add SEO meta via Helmet

**4. Add Routes & Footer Links**
- Register both new pages in `src/App.tsx`
- Add footer links in `src/components/Footer.tsx`
- Add to sitemap in `public/sitemap.xml`

**5. Fix Rating Inconsistency**
- Update `src/pages/Index.tsx` body copy from "4.9/5" to "4.6/5" (matching schema's 27 reviews)
- Update `src/pages/ShowerDoorsHub.tsx` similarly
- Update `src/pages/ShowerEnclosuresLasVegas.tsx` schema to use consistent rating
- Alternatively, update all to match whichever is the real current Google rating

**6. Add Missing Schema Properties (src/seo/LocalBusinessSchema.tsx)**
- Add `"logo"` property pointing to the company logo image
- Add `"foundingDate": "2004"` (adjust if different)

**7. Remove Duplicate Organization Schema**
- Remove `OrganizationSchema` rendering from homepage in `src/pages/Index.tsx` (keep `LocalBusinessSchema` which is more specific)
- Keep `OrganizationSchema` available for non-homepage use (blog posts reference it as publisher)

### Files affected
- `src/pages/Index.tsx` — FAQ expansion, rating fix, remove OrganizationSchema
- `src/pages/PrivacyPolicy.tsx` — new
- `src/pages/TermsOfService.tsx` — new
- `src/App.tsx` — add routes
- `src/components/Footer.tsx` — add legal page links
- `src/seo/LocalBusinessSchema.tsx` — add logo + foundingDate
- `src/pages/ShowerDoorsHub.tsx` — rating fix
- `src/pages/ShowerEnclosuresLasVegas.tsx` — rating fix
- `public/sitemap.xml` — add new pages

### Notes
- The robots.txt "critical failure" from the audit is **false** — no changes needed there
- Business hours (16:00 vs 17:00) require human confirmation before changing
- Rating value (4.6 vs 4.9) — plan uses 4.6/27 reviews as the conservative match; owner should confirm actual Google rating

