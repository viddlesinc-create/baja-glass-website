import { Helmet } from "react-helmet-async";

const BASE_URL = 'https://bajaglass.com';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Baja+Glass+%26+Mirror+LLC/@36.0977853,-115.1998091,17z';

// Curated reviews for rich snippets (matching Google reviews)
const curatedReviews = [
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
    reviewBody: "Absolutely love our new frameless shower door! The clarity of the glass is incredible and the hardware is top quality.",
    ratingValue: 5
  }
];

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  "name": "Baja Glass & Mirror LLC",
  "alternateName": ["Baja Glass", "Baja Glass and Mirror"],
  "image": `${BASE_URL}/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png`,
  "description": "Family-owned glass company specializing in custom frameless shower doors, mirrors, and interior glass installation in Las Vegas, Henderson, and Summerlin. First Responder Owned. Licensed, bonded, and insured.",
  "url": BASE_URL,
  "telephone": "(702) 383-0779",
  "email": "info@bajaglass.com",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check",
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
    "latitude": 36.097781,
    "longitude": -115.197234
  },
  "hasMap": GOOGLE_MAPS_URL,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  // Google Review Rich Snippets
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "27",
    "ratingCount": "27"
  },
  "review": curatedReviews.map(review => ({
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Glass Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Frameless Shower Doors",
          "description": "Custom frameless shower door installation with 3/8\" or 1/2\" tempered glass"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sliding Shower Doors",
          "description": "Space-saving sliding shower door installation for any bathroom"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Shower Enclosures",
          "description": "Made-to-measure shower enclosures including neo-angle, steam, and alcove designs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shower Glass Repair",
          "description": "Expert shower glass repair and replacement services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mirror Installation",
          "description": "Bathroom mirrors, gym mirrors installation and removal"
        }
      }
    ]
  },
  "areaServed": [
    { "@type": "City", "name": "Las Vegas", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "Henderson", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "Summerlin", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "Paradise", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "Spring Valley", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "Enterprise", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "North Las Vegas", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "Green Valley", "containedInPlace": { "@type": "State", "name": "Nevada" } }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(702) 383-0779",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    GOOGLE_MAPS_URL,
    "https://www.instagram.com/baja_glass_lv/",
    "https://www.facebook.com/people/Baja-Glass-and-Mirror/100033858206711/",
    "https://www.yelp.com/biz/baja-glass-and-mirror-las-vegas",
    "https://www.homeadvisor.com/rated.BajaGlassandMirror.33547383.html",
    "https://www.bbb.org/us/nv/las-vegas/profile/window-glass/baja-glass-and-mirror-llc-1086-90011741"
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Business Attribute",
      "value": "First Responder Owned"
    },
    {
      "@type": "PropertyValue",
      "name": "Experience",
      "value": "20+ Years"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "License",
      "name": "C8 Glass And Glazing License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Nevada State Contractors Board"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Insurance",
      "name": "Bonded & Insured"
    }
  ],
  "knowsAbout": [
    "Frameless Shower Doors",
    "Semi-Frameless Shower Doors",
    "Sliding Shower Doors",
    "Hinged Shower Doors",
    "Custom Shower Enclosures",
    "Steam Shower Enclosures",
    "Glass Repair",
    "Mirror Installation",
    "Low-Iron Glass",
    "Tempered Safety Glass"
  ]
};

const LocalBusinessSchema = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessData)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
