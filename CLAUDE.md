# Baja Glass & Mirror — bajaglass.com

Vite + React SPA, prerendered to static HTML (`scripts/build-ssr.js`), deployed on Netlify. Tracking contract: see the "Tracking" section in README.md.

## Meta tracking (implemented 2026-10-06 — live verification PENDING)
Pixel/Dataset ID: <set in Netlify as VITE_META_PIXEL_ID + META_PIXEL_ID> | CAPI: netlify/functions/meta-capi.mts | Graph API: v26.0 (from third-party sources 2026-10-05; confirm on developers.facebook.com/docs/graph-api/changelog)
Events: PageView (browser), Lead + Contact (browser+server, deduped by event_id)
Env vars (Netlify): VITE_META_PIXEL_ID, META_PIXEL_ID, META_CAPI_ACCESS_TOKEN, META_GRAPH_VERSION
GTM Meta tag: unknown — existing guarded fbq('track','Lead') calls implied one; Frank to confirm paused before deploy
Update the line above to "verified <date>" only after the Phase 6 gate and Test Events checklist pass on production.
