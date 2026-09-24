import { SEOMeta } from './types';

const BASE_URL = 'https://bajaglass.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const seoConfig: Record<string, SEOMeta> = {
  // ===== Core Pages =====
  '/': {
    title: 'Custom Shower Doors Las Vegas | Baja Glass and Mirror',
    description: 'Custom shower doors Las Vegas — frameless, sliding, and enclosures by Baja Glass and Mirror. Call (702) 383-0779.',
    canonical: BASE_URL,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-las-vegas': {
    title: 'Shower Doors Las Vegas | Frameless, Sliding & Custom Glass',
    description: "Custom glass shower doors in Las Vegas — frameless, semi-frameless & sliding. Free in-home measurement. We build & install, not repair. (702) 383-0779.",
    canonical: `${BASE_URL}/shower-doors-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/glass-company-las-vegas': {
    title: 'Mirrors, Windows & Commercial Glass in Las Vegas NV',
    description: 'Custom mirrors, window glass replacement and commercial office glass in Las Vegas. Measured and installed by licensed glaziers since 2009. Call for a quote.',
    canonical: `${BASE_URL}/glass-company-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/gallery': {
    title: 'Shower Door Gallery Las Vegas | Real Frameless Installs',
    description: 'Browse frameless shower doors and custom glass enclosures we have installed across Las Vegas. See finishes and layouts in real bathrooms, then get a quote.',
    canonical: `${BASE_URL}/gallery`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/reviews': {
    title: 'Shower Door Reviews Las Vegas | Baja Glass and Mirror',
    description: 'Shower door reviews for Baja Glass and Mirror in Las Vegas. Call (702) 383-0779.',
    canonical: `${BASE_URL}/reviews`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/areas-served': {
    title: 'Shower Door & Glass Services Near You | Las Vegas Area',
    description: 'Baja Glass provides shower doors, glass replacement and custom enclosures near you in Las Vegas, Henderson, Summerlin, Paradise and surrounding areas.',
    canonical: `${BASE_URL}/areas-served`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/contact': {
    title: 'Contact Baja Glass and Mirror | Free Shower Door Quotes',
    description: 'Free shower door quotes in Las Vegas. Mon–Fri 8am–4pm; Sat–Sun closed. Call (702) 383-0779. Suite A.',
    canonical: `${BASE_URL}/contact`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/about': {
    title: 'About Baja Glass and Mirror | Las Vegas Shower Door Company',
    description: 'Baja Glass and Mirror — Las Vegas shower door company since 2009. Suite A. Call (702) 383-0779.',
    canonical: `${BASE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
  },

  // ===== Product Pages =====
  '/shower-doors-las-vegas/frameless': {
    title: 'Frameless Shower Doors Las Vegas | Installs & Upgrades',
    description: 'Frameless shower doors Las Vegas — custom installs and framed-to-frameless upgrades by Baja Glass and Mirror. Call (702) 383-0779.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/frameless`,
    ogImage: `${BASE_URL}/images/custom-neo-angle-shower-enclosure.webp`,
  },
  '/shower-doors-las-vegas/semi-frameless-framed': {
    title: 'Semi-Frameless & Framed Shower Doors in Las Vegas NV',
    description: 'Semi-frameless and framed shower doors installed in Las Vegas. Balanced style at a lower cost than frameless, with multiple finishes. Book a free measure.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/semi-frameless-framed`,
    ogImage: `${BASE_URL}/images/bypass-sliding-glass-doors-3.webp`,
  },
  '/shower-doors-las-vegas/sliding': {
    title: 'Sliding Shower Doors Las Vegas | Bypass & Soft-Close',
    description: 'Sliding and bypass shower doors installed in Las Vegas. Smooth-glide rollers, soft-close options and custom widths. Call (702) 383-0779 for a free quote.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/sliding`,
    ogImage: `${BASE_URL}/images/bypass-sliding-shower-doors-completed-project-2.webp`,
  },
  '/shower-doors-las-vegas/hinged': {
    title: 'Hinged & Pivot Shower Doors in Las Vegas | Free Quote',
    description: 'Hinged and pivot shower doors installed in Las Vegas. Precise alignment, quality hardware, frameless and semi-frameless options. Book a free in-home measure.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/hinged`,
    ogImage: `${BASE_URL}/images/corner-hinged-shower-enclosure.webp`,
  },
  '/shower-doors-las-vegas/custom-enclosures': {
    title: 'Custom Shower Enclosures Las Vegas | Walk-In & Steam',
    description: 'Custom glass shower enclosures for Las Vegas & Clark County — walk-in, corner, neo-angle, alcove & steam, built to precise measurements. Free quotes.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/custom-enclosures`,
    ogImage: `${BASE_URL}/images/custom-frameless-shower-enclosure-sliding-doors.webp`,
  },
  '/shower-doors-las-vegas/steam-enclosures': {
    title: 'Steam Shower Enclosures Las Vegas | Custom Sealed Glass',
    description: 'Steam shower enclosures Las Vegas — sealed custom glass by Baja Glass and Mirror. Call (702) 383-0779.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/steam-enclosures`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-enclosures-las-vegas': {
    title: 'Custom Glass Shower Enclosures Las Vegas | Baja Glass',
    description: 'Custom frameless glass shower enclosures in Las Vegas, Henderson & Summerlin — walk-in, corner, neo-angle & steam. Free measurement. (702) 383-0779.',
    canonical: `${BASE_URL}/shower-enclosures-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/glass-company-las-vegas/residential-glass-replacement': {
    title: 'Residential Glass Replacement Las Vegas | Free Quote',
    description: 'Residential glass replacement in Las Vegas: windows, mirrors, table tops and patio doors. Measured and installed by licensed glaziers. Call for a free quote.',
    canonical: `${BASE_URL}/glass-company-las-vegas/residential-glass-replacement`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/glass-company-las-vegas/office-enclosures': {
    title: 'Office Glass Partitions & Enclosures Las Vegas | Quote',
    description: 'Commercial office glass in Las Vegas: conference room partitions, private office walls and reception glass. Acoustic and privacy options. Get a free quote.',
    canonical: `${BASE_URL}/glass-company-las-vegas/office-enclosures`,
    ogImage: DEFAULT_OG_IMAGE,
  },

  // ===== Location Pages =====
  '/shower-doors-henderson-nv': {
    title: 'Shower Doors Henderson NV | Frameless Install & Replace',
    description: 'Shower doors Henderson NV — frameless installs and full replacements by Baja Glass and Mirror. Free quotes for Green Valley and Anthem. Call (702) 383-0779.',
    canonical: `${BASE_URL}/shower-doors-henderson-nv`,
    ogImage: `${BASE_URL}/images/contemporary-frameless-shower-design-2.webp`,
  },
  '/shower-doors-summerlin-nv': {
    title: 'Shower Doors Summerlin NV | Frameless & Custom Glass',
    description: 'Frameless and custom shower doors installed across Summerlin NV, including The Ridges and Red Rock Country Club. Book a free in-home measurement this week.',
    canonical: `${BASE_URL}/shower-doors-summerlin-nv`,
    ogImage: `${BASE_URL}/images/corner-shower-enclosure-black-hardware.webp`,
  },
  '/shower-doors-paradise-nv': {
    title: 'Shower Doors Paradise NV | Custom Glass Installation',
    description: 'Frameless, sliding and custom shower enclosures installed in Paradise NV near the Las Vegas Strip. Measured and fitted by licensed glaziers. Free quotes.',
    canonical: `${BASE_URL}/shower-doors-paradise-nv`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-spring-valley-nv': {
    title: 'Shower Doors Spring Valley NV | Frameless Install & Replace',
    description: 'Shower doors Spring Valley NV — frameless installs and replacements by Baja Glass and Mirror. Call (702) 383-0779.',
    canonical: `${BASE_URL}/shower-doors-spring-valley-nv`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-enterprise-nv': {
    title: 'Shower Doors Enterprise NV | Custom Frameless Glass',
    description: 'Custom frameless shower doors installed in Enterprise NV and Southern Highlands. Modern hardware finishes, measured and fitted in one visit. Free quotes.',
    canonical: `${BASE_URL}/shower-doors-enterprise-nv`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-green-valley-nv': {
    title: 'Shower Doors Green Valley NV | Custom Frameless Glass',
    description: 'Frameless and custom shower doors installed throughout Green Valley in Henderson NV. Precise measuring and clean installation. Call for a free quote today.',
    canonical: `${BASE_URL}/shower-doors-green-valley-nv`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-centennial-hills-nv': {
    title: 'Shower Doors Centennial Hills NV | Frameless Glass Installation',
    description: 'Shower doors in Centennial Hills NV — custom frameless installs, sliding doors and full replacements by Baja Glass and Mirror. Call (702) 383-0779.',
    canonical: `${BASE_URL}/shower-doors-centennial-hills-nv`,
    ogImage: `${BASE_URL}/images/contemporary-frameless-shower-low-iron-glass.webp`,
  },

  // ===== Blog Pages =====
  '/blog/glass-care-guide': {
    title: 'Shower Glass Care Guide | Cleaning & Hard Water Tips',
    description: 'How to keep shower glass clear in Las Vegas: daily routines, hard water spot removal and protective coatings that actually last. Practical advice from glaziers.',
    canonical: `${BASE_URL}/blog/glass-care-guide`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/choosing-right-door': {
    title: 'How to Choose a Shower Door | Las Vegas Buyer\'s Guide',
    description: 'Frameless vs framed, glass thickness, hardware finishes and space limits, compared for Las Vegas bathrooms so you can pick the right shower door first time.',
    canonical: `${BASE_URL}/blog/choosing-right-door`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/installation-process': {
    title: 'Shower Door Installation Process | Step-by-Step Guide',
    description: 'What happens during a shower door installation, from measuring to final inspection: preparation, timeline and what to expect on the day, from our installers.',
    canonical: `${BASE_URL}/blog/installation-process`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/warranty-information': {
    title: 'Shower Door Warranty Information | Coverage & Claims',
    description: 'What a shower door warranty covers in materials and labour, the maintenance it requires, and how to make a claim with Baja Glass & Mirror here in Las Vegas.',
    canonical: `${BASE_URL}/blog/warranty-information`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/shower-door-installation-cost-las-vegas': {
    title: 'Frameless Shower Door Cost Las Vegas | 2026 Price Guide',
    description: 'Frameless shower door cost Las Vegas — 2026 ranges: frameless $1,200–$2,800, framed from $400, semi-frameless from $800. Free quote (702) 383-0779.',
    canonical: `${BASE_URL}/blog/shower-door-installation-cost-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/frameless-vs-semi-frameless-shower-doors': {
    title: 'Frameless vs Framed vs Semi-Frameless Shower Doors (2026)',
    description: 'Frameless vs framed vs semi-frameless shower doors compared: price ($400–$2,800), looks, cleaning & durability — plus which is best for Las Vegas homes.',
    canonical: `${BASE_URL}/blog/frameless-vs-semi-frameless-shower-doors`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/las-vegas-water-quality-shower-glass-hard-water-solutions': {
    title: 'Las Vegas Hard Water Shower Glass | Care & Coatings',
    description: 'Las Vegas hard water shower glass care — coatings and daily squeegee tips. Call (702) 383-0779.',
    canonical: `${BASE_URL}/blog/las-vegas-water-quality-shower-glass-hard-water-solutions`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/how-long-does-shower-door-installation-take': {
    title: 'How Long Does Shower Door Installation Take? | Baja Glass and Mirror',
    description: 'How long does shower door installation take? Typical timelines from measure to install day for frameless and sliding doors in Las Vegas, from our installers.',
    canonical: `${BASE_URL}/blog/how-long-does-shower-door-installation-take`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/cracked-shower-glass-replacement-las-vegas': {
    title: 'Cracked Shower Glass Replacement in Las Vegas | Baja Glass and Mirror',
    description: 'Cracked shower glass in Las Vegas? We replace broken shower door panels with new custom tempered glass — full panel replacement, done safely. (702) 383-0779.',
    canonical: `${BASE_URL}/blog/cracked-shower-glass-replacement-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/shower-door-hardware-finishes-desert': {
    title: 'Shower Door Hardware Finishes for the Desert | Baja Glass and Mirror',
    description: 'Which shower door hardware finishes hold up in the desert? Chrome, brushed nickel and matte black compared for Las Vegas heat, sun and hard water.',
    canonical: `${BASE_URL}/blog/shower-door-hardware-finishes-desert`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/steam-vs-standard-shower-enclosures': {
    title: 'Steam Shower vs Standard Frameless Enclosure | Baja Glass and Mirror',
    description: 'Steam shower vs standard frameless enclosure: sealed glass, transoms, ventilation and cost factors compared so you can pick the right build for your bathroom.',
    canonical: `${BASE_URL}/blog/steam-vs-standard-shower-enclosures`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/what-to-ask-before-hiring-shower-door-installer': {
    title: 'What to Ask Before Hiring a Shower Door Shop | Baja Glass and Mirror',
    description: 'Seven questions to ask before hiring a shower door shop in Las Vegas — licensing, tempered glass, measuring, warranties and who actually does the install.',
    canonical: `${BASE_URL}/blog/what-to-ask-before-hiring-shower-door-installer`,
    ogImage: DEFAULT_OG_IMAGE,
  },

  // ===== Index Pages =====
  '/blog': {
    title: 'Shower Door Blog | Las Vegas Guides, Tips and Costs',
    description: 'Shower door guides, cost breakdowns, hard water tips and maintenance advice from Baja Glass, a Las Vegas glass company installing custom doors since 2009.',
    canonical: `${BASE_URL}/blog`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/faq': {
    title: 'Shower Door FAQs Las Vegas | Costs, Glass & Install',
    description: 'Answers on shower door cost, glass thickness, hardware, lead times and installation in Las Vegas. Still unsure? Call (702) 383-0779 for a free consultation.',
    canonical: `${BASE_URL}/faq`,
    ogImage: DEFAULT_OG_IMAGE,
  },

  // ===== Utility Pages =====
  '/resources': {
    title: 'Shower Door Care & Installation Guides in Las Vegas',
    description: 'Guides on shower door care, glass types, hardware finishes, installation and warranty from Baja Glass in Las Vegas. Call (702) 383-0779 with any question.',
    canonical: `${BASE_URL}/resources`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/sitemap': {
    title: 'Sitemap | Baja Glass & Mirror Las Vegas Glass Company',
    description: 'Every page on the Baja Glass & Mirror site: shower doors, glass services, service areas, gallery, blog and contact details for our Las Vegas glass company.',
    canonical: `${BASE_URL}/sitemap`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Baja Glass & Mirror LLC, Las Vegas',
    description: 'How Baja Glass & Mirror LLC of Las Vegas collects, uses, stores and protects the personal information you share with us, and how to contact us about it.',
    canonical: `${BASE_URL}/privacy-policy`,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  },
  '/authors/cliff-robinson': {
    title: 'Cliff Robinson, Owner | Baja Glass & Mirror Las Vegas',
    description: 'Cliff Robinson founded Baja Glass & Mirror in 2009 and installs custom shower doors and glass across Las Vegas. Read about the team behind the work.',
    canonical: `${BASE_URL}/authors/cliff-robinson`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/terms-of-service': {
    title: 'Terms of Service | Baja Glass & Mirror LLC, Las Vegas',
    description: 'Terms of service for Baja Glass & Mirror LLC in Las Vegas: quotes, deposits, scheduling, warranty coverage and policies for our glass and shower door work.',
    canonical: `${BASE_URL}/terms-of-service`,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  },
  '/shower-door-installation-las-vegas': {
    title: 'Shower Door Installation Las Vegas | Frameless Specialists',
    description: "Professional shower door installation in Las Vegas, Henderson & Summerlin. Custom frameless glass, installed in one visit. Free measurement. (702) 383-0779.",
    canonical: `${BASE_URL}/shower-door-installation-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-door-replacement-las-vegas': {
    title: 'Shower Door Replacement Las Vegas & Henderson | Baja Glass',
    description: 'Full shower door replacement or cracked glass panel replacement across Las Vegas & Henderson. Free in-home measure. Call (702) 383-0779.',
    canonical: `${BASE_URL}/shower-door-replacement-las-vegas`,
    ogImage: `${BASE_URL}/images/custom-frameless-shower-door-installation.webp`,
  },
};

export const defaultSEO: SEOMeta = {
  title: 'Baja Glass & Mirror | Frameless Shower Doors in Las Vegas',
  description: 'Baja Glass & Mirror specializes in frameless shower doors, custom glass installations, and mirror services in Las Vegas. Expert craftsmanship with modern designs.',
  canonical: BASE_URL,
  ogImage: DEFAULT_OG_IMAGE,
};

export function getSEOConfig(path: string): SEOMeta {
  const normalized =
    path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  return seoConfig[normalized] || defaultSEO;
}
