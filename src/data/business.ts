/**
 * Single source of truth for Baja Glass business facts and JSON-LD generation.
 *
 * FACT POLICY
 * -----------
 * Every value in here is either:
 *   (a) VERIFIED — published on the live bajaglass.com site (this repo is the
 *       deployed source), and consistent everywhere it appears, or
 *   (b) TODO — unverifiable, or the live site contradicts itself. Those render
 *       the literal `{{TODO: confirm with Cliff}}` marker on the page so the
 *       claim cannot ship silently.
 *
 * Nothing here is invented. Every schema block on the landing page is generated
 * from this file — no hand-written JSON-LD anywhere in the render tree.
 */

/** The literal marker copywriters/QA grep for before a page goes live. */
export const TODO = '{{TODO: confirm with Cliff}}';

export const SITE_URL = 'https://bajaglass.com';

/**
 * Trailing-slash convention: the site uses NO trailing slash. `scripts/routes.js`
 * lists every route without one and netlify.toml 301s `/path/` -> `/path`.
 */
export const LP_PATH = '/lp/frameless-shower-doors-lv';
export const LP_URL = `${SITE_URL}${LP_PATH}`;

// ─── NAP ─────────────────────────────────────────────────────────────────────
// VERIFIED: identical across LocalBusinessSchema.tsx, StructuredData.tsx,
// Footer.tsx, LocationPageTemplate.tsx and every landing page on the live site.
export const BUSINESS = {
  legalName: 'Baja Glass & Mirror LLC',
  shortName: 'Baja Glass',
  phoneDisplay: '(702) 383-0779',
  phoneE164: '+17023830779',
  email: 'info@bajaglass.com',
  street: '4280 W Reno Ave Ste A',
  city: 'Las Vegas',
  region: 'NV',
  postalCode: '89118',
  country: 'US',
  latitude: 36.097781,
  longitude: -115.197234,
  /**
   * VERIFIED: Mon–Fri 8:00am–4:00pm — the site-wide LocalBusinessSchema and the
   * on-page hours copy both say 08:00–16:00. (The page-level JSON-LD that this
   * rebuild replaces said 17:00; that was the outlier and is not carried over.)
   */
  opensISO: '08:00',
  closesISO: '16:00',
  hoursDisplay: 'Mon–Fri, 8:00am–4:00pm',
  logo: `${SITE_URL}/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png`,
  mapsUrl:
    'https://www.google.com/maps/place/Baja+Glass+%26+Mirror+LLC/@36.0977853,-115.1998091,17z',
  sameAs: [
    'https://www.google.com/maps/place/Baja+Glass+%26+Mirror+LLC/@36.0977853,-115.1998091,17z',
    'https://www.instagram.com/baja_glass_lv/',
    'https://www.facebook.com/people/Baja-Glass-and-Mirror/100033858206711/',
    'https://www.yelp.com/biz/baja-glass-and-mirror-las-vegas',
    'https://www.bbb.org/us/nv/las-vegas/profile/window-glass/baja-glass-and-mirror-llc-1086-90011741',
  ],
} as const;

// ─── Trust claims ────────────────────────────────────────────────────────────
/**
 * `value` is what renders. `verified: false` entries render the TODO marker
 * instead of a number, and are deliberately kept OUT of JSON-LD.
 */
export const TRUST = {
  /** VERIFIED: "C8 Glass and Glazing" license from the Nevada State Contractors
   *  Board is published site-wide. The license NUMBER appears nowhere. */
  licenseCategory: 'Nevada State Contractors Board — C8 Glass and Glazing',
  licenseNumber: { value: TODO, verified: false },

  /** VERIFIED: "Licensed, bonded, and insured" is published site-wide. */
  insurance: 'Bonded and insured',

  /** CONFLICT on the live site: pages state a 1-year parts & labor warranty, a
   *  lifetime hardware warranty, and a 10yr/5yr/3yr tiered warranty. Cannot be
   *  reconciled from published copy, so no terms are published here. */
  warrantyTerms: { value: TODO, verified: false },

  /** VERIFIED: 4.6 is the rating published on every page of the live site. */
  googleRating: { value: '4.6', verified: true },

  /** CONFLICT: the live site publishes 27 everywhere; live ad copy claims both
   *  27 and 33. Unresolvable without the Google Business Profile, and the
   *  egress policy for this session blocks bajaglass.com and google.com.
   *  Deliberately omitted from aggregateRating rather than guessed. */
  googleReviewCount: { value: TODO, verified: false },

  /** CONFLICT: the live site says both "Owner-Operated Since 1999" and
   *  foundingDate 2004 / "serving Las Vegas since 2004", and both "20+ years"
   *  and (in ad copy) "25+ years". No year and no year-count is published. */
  yearsInBusiness: { value: TODO, verified: false },
  foundedYear: { value: TODO, verified: false },

  /** VERIFIED site-wide, no numeric component to get wrong. */
  ownership: 'Family-owned, first-responder owned, and owner-operated',
  ownInstallers: 'Installed by our own in-house crew — never subcontractors',
  freeMeasure: 'Free in-home measurement, no obligation',
} as const;

// ─── Service areas ───────────────────────────────────────────────────────────
export const SERVICE_AREAS = [
  'Las Vegas',
  'Summerlin',
  'Henderson',
  'North Las Vegas',
  'Spring Valley',
] as const;

/** Wider areaServed already published site-wide; used for JSON-LD only. */
export const SCHEMA_AREAS = [
  ...SERVICE_AREAS,
  'Paradise',
  'Enterprise',
  'Green Valley',
] as const;

// ─── Product catalogue ───────────────────────────────────────────────────────
export interface GlassThickness {
  size: string;
  weightNote: string;
  bestFor: string;
  detail: string;
}

/** VERIFIED: 3/8" and 1/2" tempered are the two options published site-wide. */
export const GLASS_THICKNESSES: GlassThickness[] = [
  {
    size: '3/8" tempered',
    weightNote: 'The standard for frameless',
    bestFor: 'Most Las Vegas bathrooms — hinged doors, inline panels, return panels',
    detail:
      'Three-eighths-inch tempered glass is the thickness the majority of frameless enclosures are built from. It is rigid enough to hang off wall-mounted hinges without a frame, light enough that standard hinges and clamps carry it, and it keeps the price of a custom enclosure sensible. If you have a conventional alcove or a door-and-panel layout, this is almost certainly what we will quote.',
  },
  {
    size: '1/2" tempered',
    weightNote: 'Noticeably heavier in the hand',
    bestFor: 'Oversized doors, tall openings, long unsupported spans, spa-style rooms',
    detail:
      'Half-inch glass is the upgrade. The extra thickness means less flex across a wide span, a heavier and more solid swing when you open the door, and a thicker polished edge that reads as more substantial. It costs more, and it needs heavier hardware rated to carry the weight. It earns its money on tall or wide openings and on walk-in panels that stand with minimal bracing.',
  },
];

export interface GlassOption {
  name: string;
  image: string;
  alt: string;
  description: string;
}

/** VERIFIED: clear, low-iron, rain and frosted/obscure glass plus a protective
 *  coating are all published on the live site, with these same images. */
export const GLASS_OPTIONS: GlassOption[] = [
  {
    name: 'Clear tempered',
    image: '/images/clear-glass.jpg',
    alt: 'Clear tempered glass shower door panel in a Las Vegas bathroom',
    description:
      'The default, and the one most people picture. Fully transparent, shows your tile off, makes a small bathroom read larger. Standard clear glass carries a faint green cast in the polished edge — you only really notice it edge-on.',
  },
  {
    name: 'Low-iron (ultra-clear)',
    image: '/images/low-iron-glass.jpg',
    alt: 'Low-iron ultra-clear glass shower panel showing a colourless polished edge',
    description:
      'Same glass with the iron content pulled out, which removes the green tint entirely. Worth it when your tile is white, pale grey, or a colour you actually want reproduced accurately — clear glass subtly shifts pale stone toward green.',
  },
  {
    name: 'Rain / textured',
    image: '/images/rain-glass.jpg',
    alt: 'Rain textured glass shower panel with a vertical rippled pattern',
    description:
      'A rippled texture rolled into one face. Obscures the view without going fully opaque, and hides water spotting far better than clear glass does — a real consideration on Las Vegas water.',
  },
  {
    name: 'Frosted / obscure',
    image: '/images/frosted-glass.jpg',
    alt: 'Frosted obscure glass shower door panel providing full privacy',
    description:
      'Acid-etched to a soft translucent white. Full privacy while still passing daylight through. The usual pick for a shared bathroom, a guest bath, or a window-adjacent enclosure.',
  },
];

export interface HardwareFinish {
  name: string;
  /** Tailwind-free inline swatch colour so the swatch renders without JS. */
  swatch: string;
  note: string;
}

/** VERIFIED: these five finishes are the set published on the live site. */
export const HARDWARE_FINISHES: HardwareFinish[] = [
  { name: 'Polished chrome', swatch: 'linear-gradient(145deg,#f4f6f8,#9aa5ad 45%,#e9edf0)', note: 'Bright, reflective, matches most existing bathroom fixtures.' },
  { name: 'Brushed nickel', swatch: 'linear-gradient(145deg,#dcdcd6,#a6a49c 45%,#cfcec7)', note: 'Warm satin grey. Hides water spots and fingerprints best.' },
  { name: 'Matte black', swatch: 'linear-gradient(145deg,#3d3d3d,#1a1a1a 45%,#333)', note: 'High contrast against white tile. The modern-remodel default.' },
  { name: 'Oil-rubbed bronze', swatch: 'linear-gradient(145deg,#5a4636,#2f241a 45%,#4a382a)', note: 'Dark warm brown with copper highlights. Suits traditional rooms.' },
  { name: 'Brass', swatch: 'linear-gradient(145deg,#e2c178,#a8801f 45%,#d4ae5e)', note: 'Warm gold tone. Pairs with brass tapware and lighting.' },
];

// ─── Frameless vs semi-frameless ─────────────────────────────────────────────
export interface ComparisonRow {
  attribute: string;
  frameless: string;
  semiFrameless: string;
}

export const FRAMELESS_COMPARISON: ComparisonRow[] = [
  {
    attribute: 'Glass thickness',
    frameless: '3/8" or 1/2" tempered — the glass is the structure',
    semiFrameless: 'Thinner tempered glass — the metal channel carries the load',
  },
  {
    attribute: 'Metal on the enclosure',
    frameless: 'Hinges, clamps and a header bar only. No perimeter frame.',
    semiFrameless: 'Metal channel around the outer edges; the door swings frame-free',
  },
  {
    attribute: 'Look',
    frameless: 'Glass wall. Sightlines run straight through to the tile.',
    semiFrameless: 'Clean, but the outer channel is visible against the wall',
  },
  {
    attribute: 'Cleaning',
    frameless: 'Nothing to trap water except the door sweep',
    semiFrameless: 'The bottom channel collects water and needs wiping out',
  },
  {
    attribute: 'Out-of-square walls',
    frameless: 'Glass is cut to the measured angle — no tolerance to hide behind',
    semiFrameless: 'The channel absorbs a few degrees of wall variance',
  },
  {
    attribute: 'Cost',
    frameless: 'Higher — thicker glass and heavier hardware',
    semiFrameless: 'Lower — the most common way to get a frameless look on a budget',
  },
];

// ─── Timeline ────────────────────────────────────────────────────────────────
export interface TimelineStep {
  title: string;
  duration: string;
  body: string;
}

/**
 * VERIFIED: 7–14 days measure-to-install, 5–10 business days fabrication, and a
 * 2–4 hour single-visit install are all published on the live site.
 * NOT verified: the first-response SLA. The live site says both "within 24
 * hours" and "within 48 hours" for booking the measure, so step 1 carries a
 * TODO instead of a number.
 */
export const TIMELINE: TimelineStep[] = [
  {
    title: 'Free in-home measure',
    duration: `Booked within ${TODO}`,
    body: 'We come to the bathroom. Nobody can quote a frameless enclosure accurately from a photo, because the price turns on the exact opening, the pan slope, and whether your walls are plumb. You get an exact written number at the end of the visit — not a range, and not a ballpark that moves on install day.',
  },
  {
    title: 'Template and glass order',
    duration: 'Same week as your approval',
    body: 'Once you approve the quote we template the opening: every dimension, every angle, hinge and clamp positions, the handle location, and which way the door swings. That template is what the glass gets cut and drilled to. Tempered glass cannot be trimmed after it is tempered, so this step is where the accuracy has to happen.',
  },
  {
    title: 'Fabrication',
    duration: '5–10 business days',
    body: 'Your glass is cut to the template, the edges are polished, hinge and handle holes are drilled, and then the whole panel goes through the tempering furnace. Tempering is what makes it safety glass — and it is why the holes have to be drilled first.',
  },
  {
    title: 'Installation',
    duration: '2–4 hours, one visit',
    body: 'Our own crew sets the hardware, hangs the glass, seals it, and adjusts the door so it holds wherever you leave it. Your old enclosure comes out and leaves with us. We clean up the site, walk you through the door, and tell you how long to leave the silicone before you run water on it.',
  },
];

/** VERIFIED site-wide: "Most projects run 7–14 days from initial measurement to
 *  final installation." */
export const TOTAL_TIMELINE = '7–14 days from measure to installed';

// ─── Gallery ─────────────────────────────────────────────────────────────────
export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

/**
 * Photographs of completed Baja Glass installs already published in the live
 * site's gallery. Deliberately a DIFFERENT set from the six used by
 * LandingGallery (which the sibling /lp/ pages render) so this page does not
 * duplicate their imagery.
 */
export const GALLERY: GalleryItem[] = [
  {
    src: '/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png',
    alt: 'Completed frameless glass shower door with a fixed inline panel in a Las Vegas home',
    caption: 'Frameless door with inline panel — Las Vegas',
  },
  {
    src: '/lovable-uploads/22adea8d-10a9-4780-8904-b61e4a017de8.png',
    alt: 'Frameless walk-in shower with a single fixed glass panel and no door',
    caption: 'Walk-in fixed panel, no door — Henderson',
  },
  {
    src: '/lovable-uploads/1d372151-698c-4fdb-91f7-16d12469dcd1.png',
    alt: 'Frameless glass shower enclosure wrapping a corner with clear tempered glass',
    caption: 'Corner enclosure, clear glass — Summerlin',
  },
  {
    src: '/lovable-uploads/965cff5c-c7a5-4e41-b978-72fc31a0550e.png',
    alt: 'Frameless shower door with brushed nickel hinges and a ladder pull handle',
    caption: 'Brushed nickel hardware — Spring Valley',
  },
  {
    src: '/lovable-uploads/7281360e-8ce3-43c7-890e-3f4b5f73e8a4.png',
    alt: 'Tall frameless glass shower panel installed against large-format tile',
    caption: 'Full-height panel on large-format tile — Las Vegas',
  },
  {
    src: '/lovable-uploads/a038cf4c-a8a3-4089-b29d-40d9ca793fff.png',
    alt: 'Frameless glass shower enclosure in a remodelled master bathroom',
    caption: 'Master bath enclosure — North Las Vegas',
  },
  {
    src: '/lovable-uploads/60879279-461a-40ca-b2cd-78b1d7fa95b3.png',
    alt: 'Frameless glass shower door installed over a tiled curb in a Las Vegas bathroom',
    caption: 'Curb-mounted frameless door — Las Vegas',
  },
  {
    src: '/lovable-uploads/30ead577-c1b4-4057-a808-f7d0d612125f.png',
    alt: 'Frameless glass shower enclosure with polished chrome hardware and clear glass',
    caption: 'Polished chrome hardware — Henderson',
  },
];

/** Above-the-fold hero. Its own image, not one of the gallery shots. */
export const HERO_IMAGE = {
  src: '/images/hero-shower-door.jpg',
  alt: 'Frameless glass shower door with clear tempered glass and chrome hardware in a Las Vegas bathroom',
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export interface Faq {
  q: string;
  a: string;
}

/**
 * Product-intent long-tail. Deliberately does NOT overlap the install-scheduling
 * FAQ on /lp/shower-door-installation-near-me or the custom-fabrication FAQ on
 * /lp/custom-shower-enclosures-lv.
 *
 * The word "repair" appears nowhere in these answers, by design — Baja sells
 * installation and custom fabrication only.
 */
export const FAQS: Faq[] = [
  {
    q: 'What is the difference between 3/8" and 1/2" glass on a frameless shower door?',
    a: 'Both are tempered safety glass and both are structurally sound; the difference is rigidity and feel. 3/8" is the standard for frameless enclosures and is what most Las Vegas bathrooms get — it holds its shape off wall-mounted hinges without a frame and keeps hardware costs down. 1/2" flexes less across a wide opening, swings with more weight behind it, and shows a thicker polished edge. Choose 1/2" for oversized or tall doors and long unsupported panels; 3/8" is the sensible choice everywhere else.',
  },
  {
    q: 'Are frameless glass shower doors safe?',
    a: 'Yes. Every panel we install is tempered safety glass, which is heat-treated so that it is several times stronger than ordinary glass and, in the rare event it does break, crumbles into small blunt pieces instead of shards. Tempering happens after the glass is cut and drilled, which is exactly why frameless glass has to be fabricated to a template and cannot be trimmed on site.',
  },
  {
    q: 'Can I get a frameless glass panel for a walk-in shower without a door?',
    a: 'Yes, and it is one of the most popular layouts we build. A single fixed panel — often called a shower screen or splash panel — stands at the open end of a walk-in and stops overspray while leaving the entry completely open. It needs no hinges, no handle and no sweep, so there is nothing to swing into a small bathroom and nothing to wipe out. Longer panels get a slim brace back to the wall or ceiling.',
  },
  {
    q: 'Can I replace my existing framed shower door with frameless glass?',
    a: 'Yes. Replacing a dated framed or sliding enclosure with frameless glass is a large share of the work we do. We remove and haul away the existing enclosure, then install your new frameless glass. The one thing worth knowing up front: the old frame usually hid the tile edge and the screw holes behind it, so during the measure we check whether your tile and curb will look right once that metal is gone, and we tell you before you commit rather than on install day.',
  },
  {
    q: 'Which glass should I pick for a Las Vegas bathroom?',
    a: 'Las Vegas water is hard, and hard water spots show most on clear glass. If low-maintenance matters more than a completely open view, rain or textured glass hides spotting noticeably better. If you want the open look, clear is still the right call — just plan on squeegeeing. Low-iron is worth the upgrade when your tile is white or pale, because standard clear glass casts a faint green over light stone.',
  },
  {
    q: 'What hardware finishes can I get on a frameless shower door?',
    a: 'Polished chrome, brushed nickel, matte black, oil-rubbed bronze and brass. Hinges, clamps, header bar and handle all come in the same finish so the enclosure reads as one piece. A practical note: brushed nickel and matte black hide water spotting and fingerprints better than polished chrome, which matters on the handle more than anywhere else.',
  },
  {
    q: 'Do frameless shower doors leak?',
    a: 'A correctly built one does not, but frameless works differently from framed. There is no perimeter channel catching water, so the enclosure relies on the door being hung true, the sweep sitting correctly on the curb, and the sealed joints being right. That is entirely a function of accurate measurement and installation — which is why we template the opening rather than fitting a stock size and hoping.',
  },
  {
    q: 'Can you build a frameless enclosure if my walls are not square?',
    a: 'Yes — almost no Las Vegas bathroom is perfectly square, and we measure for it. Every angle is captured at the template stage and the glass is cut to the real dimensions of your room. This is the main reason an off-the-shelf enclosure from a big-box store so often ends up with a visible gap on one side: it was cut to a nominal size, not to your opening.',
  },
  {
    q: 'How long does a frameless shower door take from quote to installed?',
    a: `Most projects run ${TOTAL_TIMELINE}. Fabrication is the bulk of it — 5 to 10 business days for your glass to be cut, polished, drilled and tempered. Installation itself is a single visit of about 2 to 4 hours. Nothing is ordered until you have approved an exact written quote.`,
  },
  {
    q: 'Do you install frameless shower doors outside Las Vegas proper?',
    a: `Yes — ${SERVICE_AREAS.join(', ')} and the surrounding Clark County communities. Our shop is at ${BUSINESS.street} in ${BUSINESS.city}, glass is fabricated there, and installs are done by our own crew rather than subcontractors, so the same people who built your enclosure are the ones who fit it.`,
  },
];

// ─── JSON-LD generation ──────────────────────────────────────────────────────
// Everything below is generated from the constants above. No hand-written
// JSON-LD lives in any component.

const postalAddress = () => ({
  '@type': 'PostalAddress',
  streetAddress: BUSINESS.street,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  postalCode: BUSINESS.postalCode,
  addressCountry: BUSINESS.country,
});

/**
 * The single LocalBusiness node for this page. It reuses the site-wide
 * `#localbusiness` @id so it is understood as the same entity rather than a
 * competing one.
 *
 * aggregateRating is intentionally absent: schema.org requires a review count
 * alongside a rating value, and the count is unresolved (see
 * TRUST.googleReviewCount). Publishing a guessed count in structured data is
 * worse than publishing none.
 */
export const localBusinessSchema = () => ({
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: BUSINESS.legalName,
  alternateName: BUSINESS.shortName,
  url: SITE_URL,
  telephone: BUSINESS.phoneDisplay,
  email: BUSINESS.email,
  image: BUSINESS.logo,
  logo: BUSINESS.logo,
  priceRange: '$$',
  address: postalAddress(),
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  hasMap: BUSINESS.mapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: BUSINESS.opensISO,
      closes: BUSINESS.closesISO,
    },
  ],
  areaServed: SCHEMA_AREAS.map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'State', name: 'Nevada' },
  })),
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'License',
      name: 'C8 Glass and Glazing License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada State Contractors Board',
      },
    },
  ],
  sameAs: [...BUSINESS.sameAs],
});

/** Service node for the page's core offering. */
export const serviceSchema = () => ({
  '@type': 'Service',
  '@id': `${LP_URL}#service`,
  name: 'Frameless Shower Door Installation',
  serviceType: 'Frameless Shower Door Installation',
  description:
    'Custom frameless glass shower doors, fixed walk-in panels and full enclosures for Las Vegas homes. Measured in your bathroom, fabricated from 3/8" or 1/2" tempered glass, and installed by our own crew.',
  url: LP_URL,
  provider: { '@id': `${SITE_URL}/#localbusiness` },
  areaServed: SCHEMA_AREAS.map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'State', name: 'Nevada' },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Frameless Glass Shower Door Options',
    itemListElement: [
      ...GLASS_THICKNESSES.map((t) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${t.size} frameless shower door glass`,
          description: t.bestFor,
        },
      })),
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Frameless walk-in shower panel',
          description:
            'Single fixed glass panel for a doorless walk-in shower, cut to the measured opening.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Shower door replacement',
          description:
            'Removal and haul-away of an existing framed or sliding enclosure, replaced with custom frameless glass.',
        },
      },
    ],
  },
});

export const faqPageSchema = (faqs: Faq[] = FAQS) => ({
  '@type': 'FAQPage',
  '@id': `${LP_URL}#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

/**
 * The page's complete JSON-LD payload: exactly one LocalBusiness, one Service,
 * one FAQPage, emitted as a single @graph so there is one script tag to audit.
 */
export const landingPageSchema = () =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema(), serviceSchema(), faqPageSchema()],
  });
