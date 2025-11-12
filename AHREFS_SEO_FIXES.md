# Ahrefs SEO Issues - Complete Fix Plan

**Date:** January 16, 2025  
**Priority:** CRITICAL

## Issues Identified

### 🚨 CRITICAL: Non-Canonical Pages (31 pages)

**Problem:** All pages show canonical pointing to homepage "/" instead of themselves

**Affected URLs:**
- /contact
- /gallery
- /blog/choosing-right-door
- /shower-doors-green-valley-nv
- /shower-doors-henderson-nv
- /shower-doors-summerlin-nv
- /shower-doors-paradise-nv
- /shower-doors-spring-valley-nv
- /shower-doors-enterprise-nv
- /reviews
- /areas-served
- /resources
- /about
- /sitemap
- /glass-company-las-vegas
- /glass-company-las-vegas/residential-glass-repair
- /glass-company-las-vegas/office-enclosures
- /shower-doors-las-vegas
- /shower-doors-las-vegas/frameless
- /shower-doors-las-vegas/semi-frameless-framed
- /shower-doors-las-vegas/sliding
- /shower-doors-las-vegas/hinged
- /shower-doors-las-vegas/custom-enclosures
- /shower-doors-las-vegas/steam-enclosures
- /shower-doors-las-vegas/repair
- /blog/glass-care-guide
- /blog/installation-process
- /blog/warranty-information
- /blog/shower-door-installation-cost-las-vegas
- /blog/frameless-vs-semi-frameless-shower-doors
- /blog/las-vegas-water-quality-shower-glass-hard-water-solutions

**Root Cause:** Index.html may have a base canonical tag OR react-helmet-async not rendering properly in SSR

**Fix:** 
1. Ensure no base canonical in index.html
2. Verify react-helmet-async is properly configured in SSR
3. Add canonical to all pages that are missing it

---

### ⚠️ HIGH PRIORITY: Orphan Pages (6 pages)

**Problem:** Pages have no internal links pointing to them

**Affected URLs:**
1. /shower-doors-las-vegas/steam-enclosures
2. /shower-doors-las-vegas/semi-frameless-framed
3. /shower-doors-las-vegas/hinged
4. /blog/shower-door-installation-cost-las-vegas
5. /blog/frameless-vs-semi-frameless-shower-doors
6. /blog/las-vegas-water-quality-shower-glass-hard-water-solutions

**Fix:**
1. Add steam enclosures link to ShowerDoorsHub services grid
2. Add semi-frameless link to ShowerDoorsHub services grid  
3. Add hinged doors link to ShowerDoorsHub services grid
4. Add blog posts to Resources page
5. Add internal links from related service pages
6. Add links to Footer navigation

---

### 📏 MEDIUM PRIORITY: Meta Description Too Long (1 page)

**Problem:** Meta description exceeds 160 characters (showing 260 chars)

**URL:** /shower-doors-las-vegas/ (with trailing slash)

**Current:** "Professional Las Vegas glass company specializing in custom frameless shower doors, mirrors, office glass & residential glass services. Family-owned with 20+ years experience. Licensed, insured with warranty-backed installation throughout the Las Vegas Valley." (260 chars)

**Fix:** Shorten to 155 characters:
"Professional shower door installation in Las Vegas. Frameless, sliding, hinged, custom enclosures & repairs. Licensed with warranty. Get your free quote!"

---

### ✅ INFO: HTTP to HTTPS Redirects (2 pages)

**URLs:**
- http://bajaglass.com/ → https://bajaglass.com/
- http://www.bajaglass.com/ → https://www.bajaglass.com/

**Status:** CORRECT - These are intentional security redirects in public/_redirects

---

## Implementation Checklist

### Phase 1: Fix Canonical Tags (CRITICAL)
- [ ] Remove any base canonical from index.html
- [ ] Verify all page components have self-referential canonical tags
- [ ] Test SSR rendering of canonical tags
- [ ] Verify with curl/view-source that canonicals render server-side

### Phase 2: Fix Orphan Pages (HIGH PRIORITY)
- [ ] Add steam enclosures to ShowerDoorsHub
- [ ] Add semi-frameless to ShowerDoorsHub
- [ ] Add hinged doors to ShowerDoorsHub
- [ ] Add blog posts to Resources page
- [ ] Add blog posts to Footer
- [ ] Add cross-links between related services

### Phase 3: Fix Meta Descriptions (MEDIUM PRIORITY)
- [ ] Shorten /shower-doors-las-vegas meta description to 155 chars
- [ ] Verify all other pages are under 160 chars

### Phase 4: Verification (POST-FIX)
- [ ] Re-crawl with Ahrefs
- [ ] Verify canonical tags with view-source
- [ ] Check Google Search Console for indexing
- [ ] Verify internal link structure
- [ ] Monitor for 24-48 hours

---

## Expected Results

**Immediate (0-24 hours):**
- All canonical tags point to correct self-referential URLs
- All orphan pages have at least 3-5 internal links
- All meta descriptions under 160 characters

**Short-term (1-7 days):**
- Ahrefs re-crawl shows 0 non-canonical issues
- GSC shows all pages indexed correctly
- Internal link equity properly distributed

**Long-term (2-4 weeks):**
- Improved crawl efficiency
- Better page rankings
- Increased organic traffic to previously orphan pages

---

## Monitoring Plan

**Daily (first 3 days):**
- Check GSC for indexing status
- Monitor canonical tag rendering
- Verify internal links working

**Weekly (first month):**
- Run Ahrefs crawl to verify fixes
- Check GSC performance reports
- Monitor organic traffic changes

**Monthly:**
- Full technical SEO audit
- Compare traffic metrics
- Identify new opportunities
