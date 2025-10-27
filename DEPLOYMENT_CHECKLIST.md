# 🚀 Final SSR Deployment Checklist

## ✅ Completed Steps

### 1. Core SSR Infrastructure
- [x] Created `src/entry-server.tsx` for server rendering
- [x] Created `src/entry-client.tsx` for client hydration
- [x] Updated `src/main.tsx` with conditional hydration
- [x] Refactored `src/App.tsx` (removed duplicate wrappers)
- [x] Configured `vite.config.ts` for SSR

### 2. Build Scripts
- [x] Created `scripts/routes.js` (21 routes defined)
- [x] Created `scripts/generate-sitemap.js`
- [x] Created `scripts/prerender.js` (with 404 handling)
- [x] Created `scripts/build-ssr.js` (master orchestrator)

### 3. SEO Optimization
- [x] Cleaned up `index.html` (removed placeholder meta tags)
- [x] Added robots meta tags to ALL 21 pages
- [x] Added 404 status code handling
- [x] Created dedicated 404.html generation

### 4. Deployment Configuration
- [x] Created `netlify.toml` with proper redirects and headers

---

## 🔴 CRITICAL: Manual Step Required

### Update package.json

**Location:** `package.json` (root of project)

**Change the `"build"` script from:**
```json
"build": "vite build"
```

**To:**
```json
"build": "node scripts/build-ssr.js"
```

**Full scripts section should look like:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "node scripts/build-ssr.js",
    "build:client": "vite build",
    "preview": "vite preview",
    "sitemap": "node scripts/generate-sitemap.js"
  }
}
```

**Why this is critical:** Without this change, Netlify will run the regular Vite build which produces client-side only (CSR) HTML. The SSR prerendering won't happen, and search engines will still see empty `<div id="root"></div>`.

---

## 📋 Pre-Deployment Testing

### Step 1: Update package.json
```bash
# Make the change above in package.json
```

### Step 2: Test Local Build
```bash
npm run build
```

**Expected output:**
```
🚀 Building SSG application for Baja Glass...
🧹 Cleaning dist folder...
📄 Generating sitemap...
✅ Sitemap generated with 21 routes
⚡ Building application...
📁 Copying static assets...
✅ Copied robots.txt
✅ Copied sitemap.xml
✅ Copied _redirects
✅ Copied _headers
🎨 Pre-rendering pages...
✅ /
✅ /shower-doors-las-vegas/frameless
... (21 routes total)
📄 Creating dedicated 404.html...
✅ 404.html created
✨ SSG build complete!
```

### Step 3: Preview Locally
```bash
npm run preview
```

Open browser to `http://localhost:4173/`

### Step 4: Test with curl
```bash
# In another terminal
curl -s http://localhost:4173/ | grep "<h1"
```

**Should see:**
```html
<h1>Shower Doors Las Vegas – Custom Frameless & Framed Installation</h1>
```

**NOT this:**
```html
<div id="root"></div>
```

### Step 5: Test Multiple Routes
```bash
curl -s http://localhost:4173/shower-doors-las-vegas/frameless | grep "Frameless"
curl -s http://localhost:4173/contact | grep "<title>"
curl -s http://localhost:4173/ | grep 'meta name="robots"'
```

All should return content from the HTML (not empty).

---

## 🚀 Deployment Steps

### Step 1: Commit All Changes
```bash
git add .
git commit -m "Implement complete SSR/SSG with full SEO optimization"
git push origin main
```

### Step 2: Monitor Netlify Deploy
1. Go to Netlify dashboard
2. Watch the deploy logs
3. Look for successful build output (similar to local testing)

**Key things to verify in logs:**
- ✅ "Building SSG application for Baja Glass..."
- ✅ "Sitemap generated with 21 routes"
- ✅ "Pre-rendering pages..." (all 21 routes listed)
- ✅ "SSG build complete!"

### Step 3: Wait for Deploy to Finish
- Usually takes 2-3 minutes
- Status should show "Published"

---

## ✅ Post-Deployment Verification

### Test 1: View Source (Browser)
1. Visit: `https://bajaglass.com/`
2. Right-click → "View Page Source"
3. Look for (should be in first 50 lines):

**Expected to see:**
```html
<title>Baja Glass | Las Vegas Glass Company | Shower Doors, Mirrors & Glass Installation</title>
<meta name="description" content="Professional Las Vegas glass company...">
<meta name="robots" content="index, follow, max-image-preview:large...">
<link rel="canonical" href="https://bajaglass.com/">
<h1>Shower Doors Las Vegas – Custom Frameless & Framed Installation</h1>
```

**Should NOT see:**
```html
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
<!-- Empty page with no content -->
```

### Test 2: cURL Command Line Test
```bash
curl -s https://bajaglass.com/ | grep "<title>"
curl -s https://bajaglass.com/ | grep "<h1"
curl -s https://bajaglass.com/ | grep 'meta name="robots"'
curl -s https://bajaglass.com/ | grep "application/ld+json"
```

All should return content (not empty).

### Test 3: Multiple Page Test
```bash
curl -s https://bajaglass.com/shower-doors-las-vegas/frameless | grep "Frameless"
curl -s https://bajaglass.com/contact | grep "Contact"
curl -s https://bajaglass.com/about | grep "About"
```

### Test 4: Google Search Console
1. Go to: https://search.google.com/search-console
2. Select your property
3. Go to: URL Inspection
4. Enter: `https://bajaglass.com/`
5. Click: "Test Live URL"
6. Wait for results
7. Click: "View Tested Page" → "More Info" → "HTML"

**Expected:** Full HTML with content visible (not empty root div)

### Test 5: Facebook Sharing Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: `https://bajaglass.com/`
3. Click: "Debug"

**Expected:**
- ✅ Title: "Baja Glass | Las Vegas Glass Company..."
- ✅ Description: Full 160-character description
- ✅ Image: Baja Glass logo
- ✅ No errors or warnings

### Test 6: Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: `https://bajaglass.com/`
3. Click: "Preview card"

**Expected:**
- ✅ Card type: summary_large_image
- ✅ Title displaying correctly
- ✅ Description displaying correctly
- ✅ Image displaying

### Test 7: Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter: `https://bajaglass.com/`
3. Click: "Test URL"

**Expected:**
- ✅ "Page is eligible for rich results"
- ✅ LocalBusiness schema detected
- ✅ All properties valid (name, address, phone, geo)
- ✅ No errors or warnings

### Test 8: Lighthouse SEO Audit
1. Open `https://bajaglass.com/` in Chrome
2. Press F12 (Developer Tools)
3. Click "Lighthouse" tab
4. Select "SEO" only
5. Click "Analyze page load"

**Expected Scores:**
- ✅ SEO: 100/100
- ✅ "Document has a meta description" ✓
- ✅ "Links are crawlable" ✓
- ✅ "Page has successful HTTP status code" ✓

---

## 📊 Success Metrics

### Immediate (Day 1)
- ✅ View Source shows full HTML content
- ✅ curl tests return page content
- ✅ Social sharing cards working
- ✅ Rich results eligible
- ✅ Lighthouse SEO: 100

### Week 1-2
- ✅ Google re-crawls pages
- ✅ Search Console shows improved indexing
- ✅ Ahrefs audit shows 0 "no outgoing links"

### Month 1-3
- ✅ Organic traffic increase 20-40%
- ✅ Rankings improve 5-15 positions
- ✅ Reduced bounce rate (faster load)

---

## 🆘 Troubleshooting

### Issue: Build still shows CSR (empty root div)
**Cause:** package.json not updated
**Fix:** Verify `"build": "node scripts/build-ssr.js"` in package.json

### Issue: Some pages missing content
**Cause:** Route not in scripts/routes.js
**Fix:** Add route to `scripts/routes.js` and rebuild

### Issue: Hydration mismatch errors
**Cause:** Server HTML doesn't match client render
**Fix:** Check for `window` usage in render logic

### Issue: 404 page returns 200 status
**Cause:** Netlify.toml 404 redirect not working
**Fix:** Verify netlify.toml has 404 redirect before catch-all

---

## 📝 Final Notes

1. **New Pages:** Always add new routes to `scripts/routes.js`
2. **Development:** Uses CSR (faster HMR, no pre-rendering needed)
3. **Production:** Uses SSG (all pages pre-rendered at build time)
4. **SEO Tags:** All pages must have complete Helmet configuration
5. **Testing:** Always test with curl to verify SSR working

---

## 🎉 Success Confirmation

If all tests pass, you should see:
- ✅ Full HTML in View Source
- ✅ Content in curl responses
- ✅ Social cards working perfectly
- ✅ Rich results eligible
- ✅ Lighthouse SEO: 100/100

**Your site is now 100% ready for search engine crawling!**

Request re-indexing in Google Search Console for all 21 pages to speed up the process.
