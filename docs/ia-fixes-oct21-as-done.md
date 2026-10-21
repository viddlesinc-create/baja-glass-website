# Baja Glass and Mirror (bajaglass.com): IA fixes — AS DONE (record of PR #22 and the Oct 21 follow-up)

Status: PR #22 merged to `main` at `e40b9cc` on Oct 21 2026 by the owner's instruction ("Merge anything that is left open"), together with PR #21. Follow-up PR #23 (hub link casing, one-row areas list) merged to `main` at `4fcf633` the same day on the owner's "merge it". Netlify deploys from `main`. The original brief said "PR first; do not deploy or merge without Frank's yes" — the merge was authorised in chat by the repo owner, not by a separate Frank sign-off. Record that where it matters.

Sources: IA_PLAN.md §1, §5, §6 (Archie, pass 2) + QA_REPORT.md (Quinn). Live baseline table dated Wed Oct 21 2026 06:49 AM PT.

## STEP 1 — Baselines (done, no edits)

Where things live (all paths repo-relative):
- Footer, all columns: `src/components/Footer.tsx`. Quick Links / Services / Local Services (= "Areas") / Blog & Resources are arrays; "Popular Services" (Henderson, Summerlin, Frameless, Custom, Sliding, Hinged, Semi-Frameless, Steam) was a hard-coded block.
- /areas-served list: `src/pages/AreasServed.tsx`, inline array feeding the "{name} →" buttons.
- Six older area pages: `src/pages/locations/ShowerDoors{Henderson,Summerlin,Paradise,SpringValley,Enterprise,GreenValley}.tsx`, all rendered by `src/components/LocationPageTemplate.tsx`. The "We Also Serve Nearby Areas" sibling block is an inline array in the template filtered by `city`. The hub anchor "shower doors Las Vegas" is NOT in that block; it is prose inside each page's `description` prop.
- Centennial Hills: `src/pages/locations/ShowerDoorsCentennialHills.tsx` (own component, not the template).
- /gallery `src/pages/Gallery.tsx`; steam `src/pages/SteamShowerEnclosures.tsx`; hub `src/pages/ShowerDoorsHub.tsx`.

Local prerender of `main` at `04ecfe2` matched the live table exactly on all 12 pages:

| Page | GTM | Phone | Centennial href | "Glass Company Services" |
|---|---|---|---|---|
| / | 2 | 14 | 0 | 2 |
| /areas-served | 2 | 10 | 0 | 1 |
| /shower-doors-centennial-hills-nv | 2 | 10 | 0 | 1 |
| /shower-doors-henderson-nv | 2 | 12 | 0 | 1 |
| /shower-doors-summerlin-nv | 2 | 9 | 0 | 1 |
| /shower-doors-paradise-nv | 2 | 8 | 0 | 1 |
| /shower-doors-spring-valley-nv | 2 | 11 | 0 | 1 |
| /shower-doors-enterprise-nv | 2 | 8 | 0 | 1 |
| /shower-doors-green-valley-nv | 2 | 8 | 0 | 1 |
| /gallery | 2 | 5 | 0 | 1 |
| /shower-doors-las-vegas/steam-enclosures | 2 | 11 | 0 | 1 |
| /shower-doors-las-vegas | 2 | 9 | 0 | 1 |

Footer: 46 `<a>` on every page; the 5 duplicated hrefs were exactly the ones listed (/shower-doors-las-vegas, /blog, /blog/shower-door-installation-cost-las-vegas, /shower-doors-henderson-nv, /shower-doors-summerlin-nv); no Centennial link.

Step 1.4 (live sitemap curl): NOT RUN. The build sandbox cannot reach bajaglass.com. Checked the repo's `public/sitemap.xml` instead: 44 `<loc>`, Centennial Hills listed once. Sitemap untouched.

Every BEFORE string in steps 2–8 was found exactly once. No STOP condition was hit.

## STEP 2 — Footer (done, `src/components/Footer.tsx`)
Removed: Services "Shower Doors Las Vegas" and "Glass Company Services"; Popular Services "Henderson Shower Doors" and "Summerlin Shower Doors"; Blog "View All Blog Posts" and "Shower Door Cost Guide". Added: Areas "Centennial Hills" after "Green Valley", same markup. Result 41 `<a>`, 0 duplicate hrefs, Centennial once. NAP, map link, socials, legal links, order of the rest unchanged. Home-page non-footer "Glass Company Services" block untouched (/ still shows 1).

## STEP 3 — /areas-served (done, `src/pages/AreasServed.tsx`)
"Centennial Hills →" appended after "Green Valley →", same markup. No new copy. Side effect noted at the time: the grid was `lg:grid-cols-6`, so the 7th item wrapped alone onto a second row on desktop. See follow-up below.

## STEP 4 — Sibling blocks on the 6 older pages (done, `src/components/LocationPageTemplate.tsx`)
Centennial Hills appended to the "We Also Serve Nearby Areas" array; renders as the last button on all six pages, same markup. Hub anchor untouched (it lives in per-page prose).

## STEP 5 — Centennial Hills page (done with a deviation, `src/pages/locations/ShowerDoorsCentennialHills.tsx`)
The template's "We Also Serve Nearby Areas" section was copied verbatim (heading, classes, Button/Link/MapPin markup) and inserted before the final CTA, listing `/shower-doors-las-vegas` first and the six siblings as plain names. Existing two links and all copy unchanged. No template variable, so no city-claim risk.
DEVIATION: on the older pages the hub link is a prose sentence; the brief said reuse the block and add no copy, so the hub link became the first BUTTON in the grid, labelled with the brief's lowercase anchor "shower doors Las Vegas". Frank asked for the casing fixed — see follow-up.

## STEP 6 — /gallery (done)
Visible "4280 Reno Ave, Ste A, Las Vegas, NV 89118" → "4280 W Reno Ave Ste A, Las Vegas, NV 89118". JSON-LD streetAddress and the other "4280 W Reno Ave" line untouched.

## STEP 7 — Steam H1 (done)
`Steam Shower Enclosures{" "}<span …>in Las Vegas</span>` → renders "Steam Shower Enclosures in Las Vegas". Body "Serving Lake Las Vegas…" (1) and JSON-LD untouched.

## STEP 8 — Hub H1 spacing (done)
`{" "}` after "in" and between the two spans → "Glass Shower Doors in Las Vegas Frameless & Sliding Glass Options". No word changes.

## VERIFY — results on the #22 build (all targets met)

| Page | GTM | Phone | Centennial href | GCS | footer `<a>` | footer dup | footer Centennial |
|---|---|---|---|---|---|---|---|
| / | 2 | 14 | 1 | 1 | 41 | 0 | 1 |
| /areas-served | 2 | 10 | 2 | 0 | 41 | 0 | 1 |
| /shower-doors-centennial-hills-nv | 2 | 10 | 1 | 0 | 41 | 0 | 1 |
| 6 older area pages | 2 | 12/9/8/11/8/8 | 2 each | 0 | 41 | 0 | 1 |
| /gallery | 2 | 5 | 1 | 0 | 41 | 0 | 1 |
| steam-enclosures | 2 | 11 | 1 | 0 | 41 | 0 | 1 |
| /shower-doors-las-vegas | 2 | 9 | 1 | 0 | 41 | 0 | 1 |

Centennial main content: `/shower-doors-las-vegas` ×1 and all six sibling hrefs ×1, original two links intact. Gallery: old address 0, new visible 1, streetAddress 1. Steam H1 as specified, "Lake Las Vegas &amp; Paradise" 0, body line 1. Hub H1 as specified. GTM/phone equal baseline on every page. 0 North Las Vegas / Boulder City, 0 "repair" in the diff, 0 keyword links to "/". `git diff --stat`: 7 files only (Footer, AreasServed, LocationPageTemplate, ShowerDoorsCentennialHills, Gallery, SteamShowerEnclosures, ShowerDoorsHub); nothing under banner/lead-time work.

PR: https://github.com/viddlesinc-create/baja-glass-website/pull/22 (branch `ia-fixes-oct21`, commit `1824bce`). Merged `e40b9cc`. The combined `main` with #21 was rebuilt once more afterwards: build clean, footer 41/0, 0 broken links, 0 missing assets, 0 metadata anomalies.

## FOLLOW-UP — PR #23 (Oct 21, after #22 merged; branch `ia-fixes-oct21-followup`; MERGED to `main` at `4fcf633` on the owner's "merge it")
Requested by the owner: fix the Centennial hub link casing and the /areas-served wrap. Two commits (`6a2d485`, `f58e397`), two files. PR: https://github.com/viddlesinc-create/baja-glass-website/pull/23

1. `src/pages/locations/ShowerDoorsCentennialHills.tsx`: nearby-areas hub button label "shower doors Las Vegas" → "Shower Doors Las Vegas". href unchanged. Verified on the build: 1 occurrence, lowercase 0.

2. `src/pages/AreasServed.tsx`: the seven area buttons now sit on ONE row at desktop. This needed a layout change the original brief's "same markup" rule did not allow, so it was done only after the owner chose "one row" over "centred two rows" or "casing only":
   - Container: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 max-w-5xl mx-auto` → `flex flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-3 mb-16 max-w-6xl mx-auto`
   - Button: `size="lg" className="h-auto py-4"` → `size="lg" className="h-auto py-4 lg:px-3 lg:text-sm xl:px-4 xl:text-base"`
   Reason: seven `size="lg"` buttons do not fit a 1024 px container, so the row is up to 1152 px wide, with px-3 / 14 px text at the `lg` breakpoint and px-4 / 16 px text from `xl` up.
   Measured in headless Chromium on the built page (rows = distinct button tops; overflow = any scrollWidth > clientWidth; a wrapped label would push a button past ~80 px tall):

   | Viewport | Rows | Overflow | Max button height |
   |---|---|---|---|
   | 1920 | 1 | no | 60 px |
   | 1440 | 1 | no | 60 px |
   | 1280 | 1 | no | 60 px |
   | 1024 | 1 | no | 56 px |
   | 900 | 2, centred | no | 60 px |
   | 768 | 2, centred | no | 60 px |
   | 375 | 6 (two per row) | no | 60 px |

   An intermediate commit (`6a2d485`) used a centred flex-wrap without the breakpoint tweaks; it removed the orphaned seventh button but still gave two rows at desktop. Superseded by `f58e397` in the same PR.

All step 1 / verify counts re-checked identical to the #22 table after both edits (GTM 2, phone per baseline, footer 41 anchors / 0 duplicate hrefs / Centennial once, Centennial href 2 on /areas-served and the six older pages). No copy, href, schema, tracking, form or sitemap changes. Build clean.

## OPEN QUESTIONS — final state
1. Steam H1: done as Frank settled it.
2. Steam body / JSON-LD areaServed "Lake Las Vegas": left as-is, no ticket.
3. Footer hours and Areas "All areas" link: not done.
4. Sibling lists: full-list pattern kept, Centennial added only.
5. Duplicate-keep choices: as written (Quick Links "Shower Doors"/"Blog", Areas "Henderson"/"Summerlin", Services "Shower Door Cost Guide"). Not flipped.
6. Hub link on Centennial = `/shower-doors-las-vegas` as a button, labelled "Shower Doors Las Vegas" since #23 (see step 5 deviation and follow-up).
