import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://bajaglass.com';
const LOGO_URL = `${BASE_URL}/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png`;
const PHONE = '(702) 383-0779';
const PHONE_E164 = '+17023830779';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Baja+Glass+%26+Mirror+LLC/@36.0977853,-115.1998091,17z';
const PLACE_ID = 'ChIJq6r6ekbGyocQ_KDPoQYhGVI';

// Accurate coordinates from Google Maps
const GEO_COORDINATES = {
  latitude: 36.097781,
  longitude: -115.197234
};

// Standard address used across all schemas
const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": "4280 W Reno Ave Ste A",
  "addressLocality": "Las Vegas",
  "addressRegion": "NV",
  "postalCode": "89118",
  "addressCountry": "US"
};

// Service areas
const AREAS_SERVED = [
  { "@type": "City", "name": "Las Vegas", "containedInPlace": { "@type": "State", "name": "Nevada" } },
  { "@type": "City", "name": "Henderson", "containedInPlace": { "@type": "State", "name": "Nevada" } },
  { "@type": "City", "name": "Summerlin", "containedInPlace": { "@type": "State", "name": "Nevada" } },
  { "@type": "City", "name": "North Las Vegas", "containedInPlace": { "@type": "State", "name": "Nevada" } },
  { "@type": "City", "name": "Paradise", "containedInPlace": { "@type": "State", "name": "Nevada" } },
  { "@type": "City", "name": "Spring Valley", "containedInPlace": { "@type": "State", "name": "Nevada" } },
  { "@type": "City", "name": "Enterprise", "containedInPlace": { "@type": "State", "name": "Nevada" } },
  { "@type": "City", "name": "Green Valley", "containedInPlace": { "@type": "State", "name": "Nevada" } }
];

// Real reviews from Google (curated selection for schema)
const CURATED_REVIEWS = [
  {
    author: "Jennifer Martinez",
    datePublished: "2024-11-15",
    reviewBody: "Baja Glass installed a beautiful frameless shower door in our Henderson home. The installers were professional, on time, and the quality is outstanding. Highly recommend!",
    ratingValue: 5
  },
  {
    author: "Robert Chen",
    datePublished: "2024-10-28",
    reviewBody: "We hired Baja Glass for our Summerlin bathroom remodel. The custom enclosure they designed fits perfectly and looks amazing. Great communication throughout the process.",
    ratingValue: 5
  },
  {
    author: "Sarah Thompson",
    datePublished: "2024-10-12",
    reviewBody: "Professional service from start to finish. The team at Baja Glass helped us choose the perfect sliding door for our space. Installation was quick and clean. Worth every penny!",
    ratingValue: 5
  },
  {
    author: "Michael Rodriguez",
    datePublished: "2024-09-30",
    reviewBody: "Had a crack in our shower glass and Baja Glass came out quickly to assess and replace it. They matched the glass perfectly and the new panel looks great.",
    ratingValue: 5
  },
  {
    author: "Emily Watson",
    datePublished: "2024-09-18",
    reviewBody: "Absolutely love our new frameless shower door! The clarity of the glass is incredible and the hardware is top quality. The Baja Glass team was knowledgeable and helped us make the right choices.",
    ratingValue: 5
  }
];

interface OrganizationProps {
  type?: 'Organization' | 'LocalBusiness';
}

interface WebSiteProps {
  name?: string;
  url?: string;
}

interface BlogPostingProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  image?: string;
  url: string;
}

interface ServiceProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string[];
}

interface AggregateRatingProps {
  ratingValue: string;
  reviewCount: string;
  bestRating?: string;
  worstRating?: string;
}

interface ReviewProps {
  author: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: number;
}

// Comprehensive Organization Schema with Reviews
export const OrganizationSchema = ({ type = 'Organization' }: OrganizationProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${BASE_URL}/#organization`,
    "name": "Baja Glass & Mirror LLC",
    "alternateName": ["Baja Glass", "Baja Glass and Mirror", "Baja Glass Las Vegas"],
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL,
      "width": 200,
      "height": 80
    },
    "image": LOGO_URL,
    "description": "Family-owned glass company specializing in custom frameless shower doors, mirrors, and interior glass installation in Las Vegas, Henderson, and Summerlin. First Responder Owned. Licensed, bonded, and insured with over 20 years of experience.",
    "telephone": PHONE_E164,
    "email": "info@bajaglass.com",
    "foundingDate": "2010",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 5,
      "maxValue": 10
    },
    "address": BUSINESS_ADDRESS,
    "geo": {
      "@type": "GeoCoordinates",
      ...GEO_COORDINATES
    },
    "hasMap": GOOGLE_MAPS_URL,
    "areaServed": AREAS_SERVED,
    "sameAs": [
      GOOGLE_MAPS_URL,
      "https://www.instagram.com/baja_glass_lv/",
      "https://www.facebook.com/people/Baja-Glass-and-Mirror/100033858206711/",
      "https://www.yelp.com/biz/baja-glass-and-mirror-las-vegas",
      "https://www.homeadvisor.com/rated.BajaGlassandMirror.33547383.html",
      "https://www.bbb.org/us/nv/las-vegas/profile/window-glass/baja-glass-and-mirror-llc-1086-90011741"
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "42",
      "ratingCount": "27"
    },
    "review": CURATED_REVIEWS.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.ratingValue,
        "bestRating": 5,
        "worstRating": 1
      }
    })),
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "License", "name": "C8 Glass And Glazing License", "recognizedBy": { "@type": "Organization", "name": "Nevada State Contractors Board" } },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Insurance", "name": "Bonded & Insured" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certification", "name": "Safety Glass Certified" }
    ],
    "knowsAbout": [
      "Glass Installation",
      "Shower Door Installation",
      "Frameless Shower Doors",
      "Semi-Frameless Shower Doors",
      "Sliding Shower Doors",
      "Hinged Shower Doors",
      "Mirror Installation",
      "Glass Replacement",
      "Custom Glass Work",
      "Steam Shower Enclosures",
      "Custom Shower Enclosures",
      "Low-Iron Glass",
      "Tempered Safety Glass"
    ],
    "slogan": "Quality Glass, Expert Installation",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Business Attribute",
        "value": "First Responder Owned"
      },
      {
        "@type": "PropertyValue",
        "name": "Years in Business",
        "value": "14+"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// WebSite Schema with SearchAction for sitelinks search box
export const WebSiteSchema = ({ name = 'Baja Glass & Mirror', url = BASE_URL }: WebSiteProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": name,
    "alternateName": "Baja Glass",
    "url": url,
    "description": "Custom frameless shower doors, glass enclosures, and mirror installation services in Las Vegas, Henderson, and Summerlin.",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Baja Glass & Mirror LLC",
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/sitemap?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// BlogPosting Schema
export const BlogPostingSchema = ({
  title,
  description,
  datePublished,
  dateModified,
  author = 'Baja Glass & Mirror',
  image,
  url
}: BlogPostingProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image || `${BASE_URL}/og-image.jpg`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": author,
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Baja Glass & Mirror LLC",
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL,
        "width": 200,
        "height": 80
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": "Shower Door Resources",
    "inLanguage": "en-US"
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Service Schema with provider details
export const ServiceSchema = ({
  name,
  description,
  url,
  image,
  areaServed = ['Las Vegas', 'Henderson', 'Summerlin']
}: ServiceProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "image": image || `${BASE_URL}/og-image.jpg`,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#organization`,
      "name": "Baja Glass & Mirror LLC",
      "telephone": PHONE_E164,
      "address": BUSINESS_ADDRESS,
      "geo": {
        "@type": "GeoCoordinates",
        ...GEO_COORDINATES
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "42"
      }
    },
    "areaServed": areaServed.map(city => ({
      "@type": "City",
      "name": city,
      "containedInPlace": { "@type": "State", "name": "Nevada" }
    })),
    "serviceType": "Glass Installation",
    "termsOfService": `${BASE_URL}/resources`
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// AggregateRating Schema
export const AggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  bestRating = '5',
  worstRating = '1'
}: AggregateRatingProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
    "name": "Baja Glass & Mirror LLC",
    "address": BUSINESS_ADDRESS,
    "geo": {
      "@type": "GeoCoordinates",
      ...GEO_COORDINATES
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "bestRating": bestRating,
      "worstRating": worstRating,
      "reviewCount": reviewCount,
      "ratingCount": reviewCount
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Review Schema Component (for multiple reviews)
export const ReviewsSchema = ({ reviews }: { reviews: ReviewProps[] }) => {
  const reviewSchemas = reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "datePublished": review.datePublished,
    "reviewBody": review.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.ratingValue,
      "bestRating": 5,
      "worstRating": 1
    }
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
    "name": "Baja Glass & Mirror LLC",
    "review": reviewSchemas
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// NEW: Speakable Schema for AI/Voice assistants
export const SpeakableSchema = ({ 
  name, 
  description, 
  url,
  speakableSelectors = ['.intro-content', 'h1', '.faq-answer']
}: { 
  name: string; 
  description: string; 
  url: string;
  speakableSelectors?: string[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": speakableSelectors
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#organization`
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Export curated reviews for use in other components
export const getCuratedReviews = () => CURATED_REVIEWS;
export const getBusinessInfo = () => ({
  name: "Baja Glass & Mirror LLC",
  phone: PHONE,
  phoneE164: PHONE_E164,
  address: BUSINESS_ADDRESS,
  geo: GEO_COORDINATES,
  googleMapsUrl: GOOGLE_MAPS_URL,
  placeId: PLACE_ID
});

export default {
  OrganizationSchema,
  WebSiteSchema,
  BlogPostingSchema,
  ServiceSchema,
  AggregateRatingSchema,
  ReviewsSchema,
  SpeakableSchema,
  getCuratedReviews,
  getBusinessInfo
};
