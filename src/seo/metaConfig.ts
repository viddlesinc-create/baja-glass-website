import { SEOMeta } from './types';

const BASE_URL = 'https://bajaglass.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/lovable-uploads/favicon.png`;

export const seoConfig: Record<string, SEOMeta> = {
  '/': {
    title: 'Frameless Shower Doors & Custom Glass in Las Vegas | Baja Glass & Mirror',
    description: 'Upgrade your bathroom with frameless shower doors and custom glass in Las Vegas. Baja Glass & Mirror installs modern, high-quality glass with expert craftsmanship. Call today!',
    canonical: BASE_URL,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/shower-doors-las-vegas': {
    title: 'Frameless Shower Doors in Las Vegas | Custom Glass Showers – Baja Glass & Mirror',
    description: 'Looking for frameless shower doors in Las Vegas? Baja Glass & Mirror designs and installs custom glass showers with modern hardware and precise installation. Get a free quote!',
    canonical: `${BASE_URL}/shower-doors-las-vegas`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/glass-company-las-vegas': {
    title: 'Glass Company in Las Vegas | Residential & Commercial Glass – Baja Glass & Mirror',
    description: 'Baja Glass & Mirror is a trusted glass company in Las Vegas, offering frameless shower doors, mirrors, and custom glass solutions for homes and businesses. Schedule a consultation today.',
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
    title: 'Baja Glass & Mirror Reviews | Frameless Shower Doors in Las Vegas',
    description: 'See why Las Vegas homeowners trust Baja Glass & Mirror for frameless shower doors and custom glass. Read real customer reviews and learn about our quality, service, and reliability.',
    canonical: `${BASE_URL}/reviews`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/areas-served': {
    title: 'Frameless Shower Doors in Las Vegas & Surrounding Areas | Baja Glass & Mirror',
    description: 'Baja Glass & Mirror provides frameless shower doors and custom glass installations in Las Vegas, Henderson, Summerlin, and nearby areas. Check if we serve your neighborhood.',
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
};

export const defaultSEO: SEOMeta = {
  title: 'Baja Glass & Mirror | Frameless Shower Doors in Las Vegas',
  description: 'Baja Glass & Mirror specializes in frameless shower doors, custom glass installations, and mirror services in Las Vegas. Expert craftsmanship with modern designs.',
  canonical: BASE_URL,
  ogImage: DEFAULT_OG_IMAGE,
};

export function getSEOConfig(path: string): SEOMeta {
  return seoConfig[path] || defaultSEO;
}
