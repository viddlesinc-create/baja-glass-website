import { Helmet } from "react-helmet-async";

const BASE_URL = 'https://bajaglass.com';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Baja+Glass+%26+Mirror+LLC/@36.0977853,-115.1998091,17z';


const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  "name": "Baja Glass & Mirror LLC",
  "alternateName": ["Baja Glass", "Baja Glass and Mirror"],
  "image": `${BASE_URL}/images/baja-glass-mirror-logo.webp`,
  "logo": `${BASE_URL}/images/baja-glass-mirror-logo.webp`,
  "foundingDate": "2009",
  "description": "Family-owned glass company specializing in custom frameless shower doors, mirrors, and interior glass installation in Las Vegas, Henderson, and Summerlin. First Responder Owned. Licensed, bonded, and insured.",
  "url": BASE_URL,
  "telephone": "+17023830779",
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
          "name": "Shower Door Replacement",
          "description": "Expert shower door replacement and upgrade services"
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
    "telephone": "+17023830779",
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
      "value": "Serving Las Vegas since 2009"
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
    "Glass Replacement",
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
