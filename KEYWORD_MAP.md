# Keyword Map — bajaglass.com

One-page reference: which page on bajaglass.com is built to win which search term.
Use this when handing pages to a VA, briefing copy edits, or setting up rank tracking.

Data source: GSC query export 2026-05-26 (last 30 days).
Positioning rule: Baja Glass installs **custom frameless shower doors only** —
new installs + frameless upgrades. We do **not** service or repair other brands'
hardware. Any query in EXCLUDE clusters is intentionally not targeted.

---

## Cluster legend

| Cluster | Share of impressions | Weighted position | Lever |
|---|---|---|---|
| install_demand | 42.3% | 37.3 | RANK |
| replacement_demand | 23.1% | 32.0 | RANK (reframe → frameless upgrade) |
| shower_generic | 20.9% | 49.6 | RANK |
| enclosure | 4.3% | 21.3 | CAPTURE (close to page 1) |
| core_frameless | 3.9% | 41.4 | RANK (authority hub) |
| info | 1.7% | 57.4 | RANK (support content) |
| EXCLUDE_mirror_glass | 3.2% | 15.5 | DO NOT TARGET |
| brand | 0.6% | 2.2 | CONTROL |

Diagnostic rule: weighted position > 11 → RANKING lever (depth, links, authority).
Weighted position ≤ 11 → CAPTURE lever (title, meta, CRO).

---

## Primary demand pages — the money pages

| Page | Cluster | Representative queries |
|---|---|---|
| `/shower-door-installation-las-vegas` | install_demand | shower door installation near me · shower door installers near me · shower door installers · shower door installation las vegas · shower glass installation · frameless shower door installation near me |
| `/shower-doors-las-vegas/frameless` | core_frameless + replacement_demand | frameless shower doors las vegas · custom shower doors near me · frameless shower doors near me · custom glass shower doors near me · shower door replacement near me *(as "frameless upgrade")* |
| `/shower-doors-las-vegas` *(hub)* | shower_generic | glass shower doors near me · shower glass near me · shower doors near me · shower doors las vegas · shower glass las vegas · bath glass shower doors near me |
| `/shower-enclosures-las-vegas` | enclosure | shower enclosures las vegas · custom shower enclosures clark county nv · custom glass walk in shower enclosures las vegas nv |

## Shower-door style spokes (under the hub)

| Page | Target term |
|---|---|
| `/shower-doors-las-vegas/semi-frameless-framed` | semi frameless vs frameless shower door · semi-frameless / framed shower doors |
| `/shower-doors-las-vegas/sliding` | sliding / bypass shower doors |
| `/shower-doors-las-vegas/hinged` | hinged / pivot shower doors |
| `/shower-doors-las-vegas/custom-enclosures` | custom shower enclosures · neo-angle / corner enclosures |
| `/shower-doors-las-vegas/steam-enclosures` | steam shower enclosures |

## Geo / "near me" pages (mostly install_demand by city)

| Page | Target term |
|---|---|
| `/shower-doors-henderson-nv` | shower door installation henderson · glass shower door replacement henderson |
| `/shower-doors-summerlin-nv` | shower doors Summerlin |
| `/shower-doors-paradise-nv` | shower doors Paradise |
| `/shower-doors-spring-valley-nv` | shower doors Spring Valley |
| `/shower-doors-enterprise-nv` | shower doors Enterprise |
| `/shower-doors-green-valley-nv` | shower doors Green Valley |

## Info / support content

| Page | Target term |
|---|---|
| `/blog/shower-door-installation-cost-las-vegas` | shower door installation cost · how much does a glass shower door cost · frameless shower door cost |
| `/blog/frameless-vs-semi-frameless-shower-doors` | frameless vs framed shower doors · semi frameless vs frameless shower door |
| `/blog/choosing-right-door` | how to choose a shower door · how to pick a shower door |
| `/blog/glass-care-guide` | shower glass cleaning / maintenance |
| `/blog/las-vegas-water-quality-shower-glass-hard-water-solutions` | hard water shower glass solutions |
| `/blog/warranty-information` | shower door warranty |
| `/blog/installation-process` | what to expect during installation |

## Glass-company / non-core

| Page | Target term | Note |
|---|---|---|
| `/glass-company-las-vegas` | glass company las vegas | Non-shower glass hub |
| `/glass-company-las-vegas/residential-glass-repair` | residential glass replacement | ⚠️ Adjacent to the excluded repair/mirror intent — not a frameless target |
| `/glass-company-las-vegas/office-enclosures` | commercial / office glass partitions | Commercial, off the frameless thesis |

## Utility / brand (not keyword targets)

`/` (homepage — brand "baja glass" + catch-all) · `/about` · `/contact` · `/gallery` · `/reviews` · `/areas-served` · `/faq` · `/resources` · `/blog` (index) · `/sitemap`

## Intentionally NOT targeted

EXCLUDE_mirror_glass cluster — **no page targets these.** If they ever start
pulling bad-fit leads, the page to reconsider is `/glass-company-las-vegas/
residential-glass-repair`.

Representative queries to leave alone:
- custom mirrors las vegas
- glass doors las vegas
- custom glass las vegas
- custom glass doors las vegas
- glass window bathroom in vegas
- shower seal replacement henderson *(repair)*

---

## Cross-reference notes

- **`/shower-doors-las-vegas/frameless` does double duty** — it's both the
  core_frameless authority page and the replacement_demand owner (via the
  "frameless upgrade" reframe and the `/shower-door-replacement-las-vegas` → 301
  to install). That one page carries ~27% of all demand. Watch it doesn't get
  out-competed by the hub on frameless terms.
- **Every install/replacement/demand page must carry the qualification statement**
  above the fold (handled by `<FramelessQualification />`):
  > "Custom Frameless Shower Doors — New Installations & Frameless Upgrades.
  > We design and install frameless enclosures; we do not service or repair
  > other brands' hardware."
- **Landing pages** (`/lp/*`) are paid-traffic only, `noindex,nofollow`,
  excluded from sitemap. They do not compete in organic ranking.
