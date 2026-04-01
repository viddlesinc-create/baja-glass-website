import { SEOMeta } from './types';

const BASE_URL = 'https://bajaglass.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/lovable-uploads/favicon.png`;

export const seoConfig: Record<string, SEOMeta> = {
  // ===== Core Pages =====
  '/': {
    title: 'Baja Glass & Mirror | Shower Doors & Glass in Las Vegas',
    description: 'Local Las Vegas glass company. Frameless shower doors, custom enclosures and mirrors. Serving Henderson & Summerlin. Free estimates.',
    canonical: BASE_URL,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-las-vegas': {
    title: 'Custom Shower Doors Las Vegas | Frameless & Sliding Glass',
    description: 'Looking for shower doors in Las Vegas? Baja Glass designs and installs frameless, semi-frameless and sliding glass shower doors. Free in-home estimate, fast local installation.',
    canonical: `${BASE_URL}/shower-doors-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/glass-company-las-vegas': {
    title: 'Glass Company Las Vegas | Residential & Commercial Glass',
    description: 'Baja Glass & Mirror is a trusted glass company in Las Vegas for shower doors, mirrors, windows and commercial glass. Local, licensed and insured. Request a free quote.',
    canonical: `${BASE_URL}/glass-company-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/gallery': {
    title: 'Frameless Shower Door Gallery | Baja Glass & Mirror Las Vegas',
    description: 'View our frameless shower door gallery to see completed projects across Las Vegas. Get inspiration for your next custom glass shower or mirror installation with Baja Glass & Mirror.',
    canonical: `${BASE_URL}/gallery`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/reviews': {
    title: 'Customer Reviews | Baja Glass & Mirror Las Vegas',
    description: 'See why Las Vegas homeowners trust Baja Glass & Mirror for frameless shower doors and custom glass. Read real reviews from Henderson, Summerlin and Paradise customers.',
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
    title: 'Contact Baja Glass & Mirror | Frameless Shower Doors in Las Vegas',
    description: 'Request a free quote for frameless shower doors or custom glass in Las Vegas. Contact Baja Glass & Mirror today by phone or form to schedule your in-home measurement.',
    canonical: `${BASE_URL}/contact`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/about': {
    title: 'About Baja Glass & Mirror | Local Frameless Shower Door Experts in Las Vegas',
    description: 'Learn about Baja Glass & Mirror, a locally owned glass company in Las Vegas specializing in frameless shower doors and custom glass. Discover our experience, values, and team.',
    canonical: `${BASE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
  },

  // ===== Product Pages =====
  '/shower-doors-las-vegas/frameless': {
    title: 'Frameless Shower Doors Las Vegas NV | Installation & Replacement - Baja Glass',
    description: 'Premium frameless shower doors in Las Vegas, NV. Expert installation and replacement. Low-iron glass, modern hardware. Free quotes from licensed installers.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/frameless`,
    ogImage: `${BASE_URL}/lovable-uploads/dff9a879-f6db-4f4a-908d-2842b809c7e4.png`,
  },
  '/shower-doors-las-vegas/semi-frameless-framed': {
    title: 'Semi-Frameless & Framed Shower Doors Las Vegas | Baja Glass & Mirror',
    description: 'Professional semi-frameless and framed shower door installation in Las Vegas. Balanced style with strategic support. Multiple glass and hardware finish options.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/semi-frameless-framed`,
    ogImage: `${BASE_URL}/lovable-uploads/7d880084-fd2a-4d13-9b02-6bc5661be634.png`,
  },
  '/shower-doors-las-vegas/sliding': {
    title: 'Sliding Shower Doors Las Vegas | Bypass & Single Slide - Baja Glass & Mirror',
    description: 'Expert sliding shower door installation in Las Vegas. Smooth-glide systems with premium rollers. Single sliding and bypass options. Soft-close available.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/sliding`,
    ogImage: `${BASE_URL}/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png`,
  },
  '/shower-doors-las-vegas/hinged': {
    title: 'Hinged & Pivot Shower Doors Las Vegas | Classic Swing Doors - Baja Glass & Mirror',
    description: 'Expert hinged and pivot shower door installation in Las Vegas. Classic swing doors with precise alignment and quality hardware. Frameless and semi-frameless options.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/hinged`,
    ogImage: `${BASE_URL}/lovable-uploads/fb2b173a-c011-49f6-aba2-541dbd7b4387.png`,
  },
  '/shower-doors-las-vegas/custom-enclosures': {
    title: 'Custom Shower Enclosures Las Vegas | Neo-Angle & Corner - Baja Glass & Mirror',
    description: 'Custom shower enclosures in Las Vegas. Inline, corner, neo-angle, alcove, and steam designs made to precise measurements. Expert installation with quality hardware.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/custom-enclosures`,
    ogImage: `${BASE_URL}/lovable-uploads/d89fa07d-a693-478f-8b0d-e12f2607c1e7.png`,
  },
  '/shower-doors-las-vegas/steam-enclosures': {
    title: 'Steam Shower Enclosures Las Vegas | Spa-Like Glass Enclosures - Baja Glass & Mirror',
    description: 'Professional steam shower enclosure installation in Las Vegas. Sealed glass systems with operable transoms for temperature control. Transform your bathroom into a spa.',
    canonical: `${BASE_URL}/shower-doors-las-vegas/steam-enclosures`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-enclosures-las-vegas': {
    title: 'Shower Enclosures Las Vegas | Custom Glass Enclosures - Baja Glass',
    description: 'Custom glass shower enclosures in Las Vegas, NV. Inline, corner, neo-angle, and steam designs. Professional installation in Henderson, Summerlin. Free quotes.',
    canonical: `${BASE_URL}/shower-enclosures-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/glass-company-las-vegas/residential-glass-repair': {
    title: 'Residential Glass Replacement Las Vegas | Window & Mirror Services - Baja Glass & Mirror',
    description: 'Professional residential glass replacement in Las Vegas. Window upgrades, mirror services, glass table tops, and patio door replacement. 24/7 emergency service available.',
    canonical: `${BASE_URL}/glass-company-las-vegas/residential-glass-repair`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/glass-company-las-vegas/office-enclosures': {
    title: 'Office Glass Enclosures Las Vegas | Commercial Partitions - Baja Glass & Mirror',
    description: 'Commercial glass office enclosures in Las Vegas. Conference room partitions, private office walls, reception areas, and storefront systems. Acoustic and privacy options.',
    canonical: `${BASE_URL}/glass-company-las-vegas/office-enclosures`,
    ogImage: DEFAULT_OG_IMAGE,
  },

  // ===== Location Pages =====
  '/shower-doors-henderson-nv': {
    title: 'Shower Doors Henderson NV | Installation & Replacement - Baja Glass & Mirror',
    description: 'Shower door installation & replacement in Henderson, NV. Frameless shower doors, glass shower doors, custom enclosures. Serving Green Valley, Anthem, Seven Hills. Free quotes.',
    canonical: `${BASE_URL}/shower-doors-henderson-nv`,
    ogImage: `${BASE_URL}/lovable-uploads/9642038d-f5d9-4f9d-8096-46dc1eb70052.png`,
  },
  '/shower-doors-summerlin-nv': {
    title: 'Shower Doors Summerlin NV | Luxury Glass Installation - Baja Glass & Mirror',
    description: 'Luxury shower door installations in Summerlin. Serving The Ridges, Red Rock Country Club, and all Summerlin neighborhoods. Premium frameless and custom enclosures.',
    canonical: `${BASE_URL}/shower-doors-summerlin-nv`,
    ogImage: `${BASE_URL}/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png`,
  },
  '/shower-doors-paradise-nv': {
    title: 'Shower Doors Paradise NV | Custom Glass Installation - Baja Glass & Mirror',
    description: 'Professional shower door installation in Paradise, NV. Frameless, sliding, and custom enclosures near the Las Vegas Strip. Quality craftsmanship guaranteed.',
    canonical: `${BASE_URL}/shower-doors-paradise-nv`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-spring-valley-nv': {
    title: 'Shower Doors Spring Valley NV | Local Glass Experts - Baja Glass & Mirror',
    description: 'Shower door installation in Spring Valley, NV. Frameless, semi-frameless, and custom shower enclosures. Local experts serving Southwest Las Vegas.',
    canonical: `${BASE_URL}/shower-doors-spring-valley-nv`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-enterprise-nv': {
    title: 'Shower Doors Enterprise NV | Premium Glass Installation - Baja Glass & Mirror',
    description: 'Custom shower doors in Enterprise, NV. Frameless designs, modern hardware finishes, and expert installation. Serving Southern Highlands and Enterprise area.',
    canonical: `${BASE_URL}/shower-doors-enterprise-nv`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-green-valley-nv': {
    title: 'Shower Doors Green Valley NV | Frameless & Custom - Baja Glass & Mirror',
    description: 'Expert shower door installation in Green Valley, NV. Part of Henderson, we serve all Green Valley neighborhoods with frameless and custom glass solutions.',
    canonical: `${BASE_URL}/shower-doors-green-valley-nv`,
    ogImage: DEFAULT_OG_IMAGE,
  },

  // ===== Blog Pages =====
  '/blog/glass-care-guide': {
    title: 'Shower Glass Care Guide | Cleaning Tips & Maintenance - Baja Glass & Mirror',
    description: 'Learn professional shower glass cleaning tips and maintenance techniques. Water spot prevention, protective coatings, and daily care routines for crystal clear glass.',
    canonical: `${BASE_URL}/blog/glass-care-guide`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/choosing-right-door': {
    title: 'How to Choose the Right Shower Door | Complete Guide - Baja Glass & Mirror',
    description: 'Expert guide to selecting the perfect shower door. Compare frameless vs framed, glass thickness options, hardware finishes, and space considerations.',
    canonical: `${BASE_URL}/blog/choosing-right-door`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/installation-process': {
    title: 'Shower Door Installation Process | What to Expect - Baja Glass & Mirror',
    description: 'Complete guide to shower door installation from consultation to final inspection. Learn preparation steps, timeline, and what to expect during professional installation.',
    canonical: `${BASE_URL}/blog/installation-process`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/warranty-information': {
    title: 'Shower Door Warranty Information | Coverage & Terms - Baja Glass & Mirror',
    description: 'Complete guide to shower door warranty coverage. Learn about materials, installation terms, maintenance requirements, and how to request warranty service.',
    canonical: `${BASE_URL}/blog/warranty-information`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/shower-door-installation-cost-las-vegas': {
    title: 'Shower Door Cost Las Vegas 2026 | Pricing Guide',
    description: 'How much does shower door installation cost in Las Vegas? See 2026 price ranges for frameless, semi-frameless and sliding glass shower doors, plus cost factors.',
    canonical: `${BASE_URL}/blog/shower-door-installation-cost-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/frameless-vs-semi-frameless-shower-doors': {
    title: 'Frameless vs Semi-Frameless Shower Doors | Comparison Guide - Baja Glass & Mirror',
    description: 'Compare frameless, semi-frameless, and framed shower doors. Learn about aesthetics, pricing, maintenance, and which style is best for Las Vegas homes.',
    canonical: `${BASE_URL}/blog/frameless-vs-semi-frameless-shower-doors`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog/las-vegas-water-quality-shower-glass-hard-water-solutions': {
    title: 'Las Vegas Hard Water Solutions for Shower Glass - Baja Glass & Mirror',
    description: 'Combat Las Vegas hard water damage on shower glass. Learn about water softeners, hydrophobic coatings, daily care routines, and professional solutions.',
    canonical: `${BASE_URL}/blog/las-vegas-water-quality-shower-glass-hard-water-solutions`,
    ogImage: DEFAULT_OG_IMAGE,
  },

  // ===== Index Pages =====
  '/blog': {
    title: 'Shower Door Blog | Tips, Guides & Industry Insights - Baja Glass & Mirror',
    description: 'Expert articles on shower doors, glass care, installation tips, and cost guides for Las Vegas homeowners. Stay informed with Baja Glass & Mirror.',
    canonical: `${BASE_URL}/blog`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/faq': {
    title: 'Shower Door FAQ | Common Questions Answered - Baja Glass & Mirror',
    description: 'Get answers to frequently asked questions about shower doors, glass installation, pricing, and maintenance from Baja Glass & Mirror in Las Vegas.',
    canonical: `${BASE_URL}/faq`,
    ogImage: DEFAULT_OG_IMAGE,
  },

  // ===== Utility Pages =====
  '/resources': {
    title: 'Shower Door Resources & Guides | Baja Glass & Mirror Las Vegas',
    description: 'Helpful resources for shower door selection, glass care, and installation. Guides on glass types, hardware finishes, and maintenance tips from Baja Glass.',
    canonical: `${BASE_URL}/resources`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/sitemap': {
    title: 'Sitemap | Baja Glass & Mirror Las Vegas',
    description: 'Complete sitemap of Baja Glass website. Find all pages including shower doors, glass services, locations, gallery, blog, and contact information.',
    canonical: `${BASE_URL}/sitemap`,
    ogImage: DEFAULT_OG_IMAGE,
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
