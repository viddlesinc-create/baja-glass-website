# Baja Glass & Mirror — bajaglass.com

Vite + React SPA, prerendered to static HTML (`scripts/build-ssr.js`), deployed on Netlify. Tracking contract: see the "Tracking" section in README.md.

## Meta tracking (verified 2026-10-12)
Pixel/Dataset ID: 1040273871777124 | CAPI: netlify/functions/meta-capi.mts | Graph API: version set in Netlify META_GRAPH_VERSION (v26.0 was recommended; server calls returned 200)
Events: PageView (browser, once per SPA route change), Lead + Contact (browser+server, deduped by event_id)
Env vars (Netlify): VITE_META_PIXEL_ID, META_PIXEL_ID, META_CAPI_ACCESS_TOKEN, META_GRAPH_VERSION (META_TEST_EVENT_CODE removed after testing)
GTM Meta tag: none (GTM-PJK7SWRX container checked 2026-10-12 — no fbevents/fbq)
Verification (2026-10-12, Netlify function logs + Events Manager Test events):
- Contact: meta-capi 200 events_received:1 (1:33 PM)
- Lead (/lp/steam-shower-installation-lv): meta-capi 200 events_received:1 (1:40 PM); Pixel eid 8fdd0d9b-5055-45be-acec-84e82a4a5248
- PageView: one per route change (/ → /gallery → /about), verified at main@f186c81
- Domain verification meta tag (facebook-domain-verification) is in index.html <head>; bajaglass.com shows Verified in Meta Business Settings (confirmed 2026-10-13)
