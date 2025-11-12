# Google Analytics 4 Event Tracking Guide

## Overview
GA4 event tracking has been implemented across the site to measure conversions, especially for the Henderson page.

## Events Being Tracked

### 1. **phone_click**
Tracks when users click phone numbers to call.

**Parameters:**
- `event_category`: "engagement"
- `event_label`: Location (e.g., "Henderson", "header", "mobile_menu", "contact_page")
- `value`: 1
- `page_location`: Current page location

**Where it's tracked:**
- All phone links in Header.tsx (desktop & mobile menu)
- Phone CTAs on all location pages (LocationPageTemplate.tsx)
- Contact page phone number

### 2. **generate_lead**
Tracks contact form submissions.

**Parameters:**
- `event_category`: "conversion"
- `event_label`: City submitted in form
- `value`: 1
- `city`: User's city
- `project_type`: Selected project type
- `source`: "contact_form" or "contact_page"

**Where it's tracked:**
- Contact page form submission (Contact.tsx)

### 3. **henderson_conversion**
Tracks Henderson-specific conversions to measure SEO campaign effectiveness.

**Parameters:**
- `event_category`: "henderson_page"
- `event_label`: Action type ("phone_click" or "form_submit")
- `value`: 1
- `location`: "Henderson"

**Where it's tracked:**
- Henderson page phone clicks (when city === "Henderson")
- Contact form submissions from Henderson (when city includes "henderson")

### 4. **cta_click**
Generic CTA button tracking (utility function for future use).

**Parameters:**
- `event_category`: "engagement"
- `event_label`: CTA type
- `page_location`: Location on site

---

## How to View in Google Analytics 4

### Viewing All Events:
1. Go to GA4 dashboard: [https://analytics.google.com/](https://analytics.google.com/)
2. Navigate to **Reports** → **Engagement** → **Events**
3. You'll see all tracked events listed with counts

### Creating Custom Reports for Henderson:

#### Henderson Conversion Report:
1. Go to **Explore** → Create a **Free Form** report
2. **Dimensions**: Add "Event name", "Page location"
3. **Metrics**: Add "Event count", "Total users"
4. **Filter**: Event name = "henderson_conversion"
5. **Date range**: Last 4 weeks (or as needed)

#### Phone Click Report by Location:
1. **Explore** → **Free Form**
2. **Dimensions**: "Event name", "Event label" (this shows location)
3. **Metrics**: "Event count"
4. **Filter**: Event name = "phone_click"
5. Group by "Event label" to see which locations get most calls

#### Form Submission Report by City:
1. **Explore** → **Free Form**
2. **Dimensions**: "Event name", "City" (custom parameter)
3. **Metrics**: "Event count"
4. **Filter**: Event name = "generate_lead"
5. Group by "City" to see which cities generate most leads

---

## Setting Up Conversion Goals in GA4

### Mark "henderson_conversion" as a Conversion:
1. Go to **Admin** → **Events**
2. Find "henderson_conversion" event
3. Toggle **Mark as conversion**

### Mark "generate_lead" as a Conversion:
1. Same process as above
2. This tracks all form submissions as conversions

---

## Weekly Tracking for Henderson Campaign

### Metrics to Track (Export Weekly):

**Week 1-4 Tracking:**
1. **Henderson Page Phone Clicks**
   - Event: `phone_click` where event_label = "Henderson"
   - Baseline: Record week 1 count
   - Target: 20%+ increase by week 4

2. **Henderson-Specific Conversions**
   - Event: `henderson_conversion`
   - Breakdown by action type (phone_click vs form_submit)
   - Target: 10+ conversions per week

3. **Form Submissions from Henderson**
   - Event: `generate_lead` where city = "Henderson"
   - Track conversion rate: Submissions / Page Views
   - Target: 2-5% conversion rate

4. **Henderson Page Performance**
   - Page: `/shower-doors-henderson-nv`
   - Metrics: Page views, Average engagement time, Bounce rate
   - Compare week-over-week

### Export Data:
1. Create the custom reports above
2. Set date range to "Last 7 days"
3. Click **Share** → **Download file** (CSV or Google Sheets)
4. Save with naming convention: `Henderson_GA4_Week[X]_[Date].csv`

---

## Expected Results Timeline

### Week 1-2 (Baseline):
- Event tracking functioning properly
- 5-15 henderson_conversion events per week
- 10-30 phone_click events on Henderson page

### Week 3-4 (Early Growth):
- 20-30% increase in Henderson page engagement
- 15-25 henderson_conversion events per week
- Improved conversion rate as SEO rankings improve

### Week 5-8 (SEO Impact):
- 50-100% increase as keywords move up in rankings
- 30-50 henderson_conversion events per week
- Noticeable increase in organic traffic from Google Search Console

---

## Troubleshooting

### Events Not Showing in GA4:
1. **Check DebugView**: GA4 → Admin → DebugView (shows real-time events)
2. **Verify gtag.js loaded**: Check browser console for errors
3. **Test events**: Click phone numbers/submit forms and check browser console for "GA4 Event:" logs

### Data Discrepancies:
- GA4 has a 24-48 hour delay for full data processing
- Use **Realtime** view for immediate verification
- Events are deduplicated per session, so multiple clicks may show as 1 event

---

## Console Logging

All tracking events are logged to browser console for debugging:
- `console.log('GA4 Event: phone_click', { location })`
- `console.log('GA4 Event: generate_lead', formData)`
- `console.log('GA4 Event: henderson_conversion', { action })`

Open browser DevTools (F12) → Console tab to verify events are firing.

---

## Integration with Google Search Console

### Correlating GSC Keywords with GA4 Conversions:

1. **Week 1**: Record baseline keyword positions from GSC
   - frameless shower doors henderson: Position 41.15
   - shower glass henderson: Position 60.03
   - etc.

2. **Weekly**: Export GSC data for Henderson page
   - Track position improvements
   - Track impressions & clicks

3. **Correlate with GA4**:
   - As GSC impressions increase → Check GA4 page views increase
   - As GSC clicks increase → Check GA4 "henderson_conversion" increase
   - Calculate: Conversion Rate = henderson_conversion / Page Views from Google Organic

### Example Analysis (Week 4):
```
GSC Data:
- Impressions: +150% (from 500 to 1,250)
- Clicks: +80% (from 50 to 90)
- Avg Position: +15 spots (from 45 to 30)

GA4 Data:
- Henderson Page Views: +85% (from 60 to 111)
- henderson_conversion events: +120% (from 10 to 22)
- Conversion Rate: 19.8% (22/111)

Result: SEO improvements directly drove 12 additional conversions
```

---

## Next Steps

1. **Immediate**: Verify events are firing by checking browser console
2. **Week 1**: Establish baseline metrics in GA4
3. **Weekly**: Export data and track against targets
4. **Month 1**: Create comprehensive report comparing GSC + GA4 data
5. **Ongoing**: Refine tracking based on which events correlate most with actual sales

---

**Questions or Issues?**
- Check browser console for "GA4 Event:" logs
- Use GA4 DebugView for real-time event verification
- Ensure Google Tag Manager or gtag.js is properly loaded in index.html (already configured)
