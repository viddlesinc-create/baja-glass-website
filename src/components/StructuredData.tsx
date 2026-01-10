import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://bajaglass.com';
const LOGO_URL = `${BASE_URL}/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png`;
const PHONE = '(702) 383-0779';
const PHONE_E164 = '+17023830779';

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

// Organization Schema Component
export const OrganizationSchema = ({ type = 'Organization' }: OrganizationProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "Baja Glass & Mirror LLC",
    "alternateName": "Baja Glass",
    "url": BASE_URL,
    "logo": LOGO_URL,
    "image": LOGO_URL,
    "description": "Family-owned glass company specializing in custom frameless shower doors, mirrors, and interior glass installation in Las Vegas. First Responder Owned.",
    "telephone": PHONE_E164,
    "email": "info@bajaglass.com",
    "foundingDate": "2010",
    "numberOfEmployees": "5-10",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4280 W Reno Ave Ste A",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89118",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1027",
      "longitude": "-115.2074"
    },
    "areaServed": [
      { "@type": "City", "name": "Las Vegas" },
      { "@type": "City", "name": "Henderson" },
      { "@type": "City", "name": "Summerlin" },
      { "@type": "City", "name": "North Las Vegas" },
      { "@type": "City", "name": "Paradise" },
      { "@type": "City", "name": "Spring Valley" },
      { "@type": "City", "name": "Enterprise" },
      { "@type": "City", "name": "Green Valley" }
    ],
    "sameAs": [
      "https://www.instagram.com/baja_glass_lv/",
      "https://www.facebook.com/people/Baja-Glass-and-Mirror/100033858206711/",
      "https://www.yelp.com/biz/baja-glass-and-mirror-las-vegas",
      "https://www.homeadvisor.com/rated.BajaGlassandMirror.33547383.html",
      "https://www.bbb.org/us/nv/las-vegas/profile/window-glass/baja-glass-and-mirror-llc-1086-90011741"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "License", "name": "C8 Glass And Glazing License" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Insurance", "name": "Bonded & Insured" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certification", "name": "Safety Glass Certified" }
    ],
    "knowsAbout": [
      "Glass Installation",
      "Shower Door Installation",
      "Frameless Shower Doors",
      "Mirror Installation",
      "Glass Repair",
      "Custom Glass Work",
      "Steam Shower Enclosures"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// WebSite Schema Component
export const WebSiteSchema = ({ name = 'Baja Glass & Mirror', url = BASE_URL }: WebSiteProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "alternateName": "Baja Glass",
    "url": url,
    "publisher": {
      "@type": "Organization",
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

// BlogPosting Schema Component
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
      "name": author,
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
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

// Service Schema Component
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
      "name": "Baja Glass & Mirror LLC",
      "telephone": PHONE_E164,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4280 W Reno Ave Ste A",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89118",
        "addressCountry": "US"
      }
    },
    "areaServed": areaServed.map(city => ({
      "@type": "City",
      "name": city
    })),
    "serviceType": "Glass Installation"
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// AggregateRating Schema Component
export const AggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  bestRating = '5',
  worstRating = '1'
}: AggregateRatingProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Baja Glass & Mirror LLC",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4280 W Reno Ave Ste A",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89118",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "bestRating": bestRating,
      "worstRating": worstRating,
      "reviewCount": reviewCount
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
      "bestRating": 5
    }
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Baja Glass & Mirror LLC",
    "review": reviewSchemas
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default {
  OrganizationSchema,
  WebSiteSchema,
  BlogPostingSchema,
  ServiceSchema,
  AggregateRatingSchema,
  ReviewsSchema
};
