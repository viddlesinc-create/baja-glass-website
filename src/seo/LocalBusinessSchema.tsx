import { Helmet } from "react-helmet-async";

const BASE_URL = 'https://bajaglass.com';

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  "name": "Baja Glass and Mirror",
  "legalName": "Baja Glass and Mirror LLC",
  "alternateName": ["Baja Glass"],
  "image": `${BASE_URL}/images/baja-glass-mirror-logo.webp`,
  "logo": `${BASE_URL}/images/baja-glass-mirror-logo.webp`,
  "foundingDate": "2009",
  "description": "Shower door company in Las Vegas specializing in custom frameless shower doors, sliding and semi-frameless doors, custom and steam shower enclosures, and full shower door replacements. First responder owned. Serving Las Vegas and Henderson since 2009. Licensed, bonded, and insured.",
  "url": BASE_URL,
  "telephone": "+17023830779",
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
    "latitude": 36.09774,
    "longitude": -115.197267
  },
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
    "name": "Shower Door Services",
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
          "description": "Space-saving sliding and bypass shower door installation for tubs and showers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Semi-Frameless Shower Doors",
          "description": "Semi-frameless and framed shower door installation with multiple hardware finishes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hinged Shower Doors",
          "description": "Hinged and pivot shower door installation with precise alignment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Shower Enclosures",
          "description": "Made-to-measure shower enclosures including walk-in, corner, neo-angle, and alcove designs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Steam Shower Enclosures",
          "description": "Fully sealed steam shower enclosures with operable transoms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shower Door Replacement",
          "description": "Full replacement of framed and builder-grade shower doors with new custom glass"
        }
      }
    ]
  },
  "areaServed": [
    { "@type": "City", "name": "Las Vegas", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "Henderson", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "Place", "name": "Summerlin", "containedInPlace": { "@type": "City", "name": "Las Vegas" } },
    { "@type": "City", "name": "Paradise", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "Spring Valley", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "City", "name": "Enterprise", "containedInPlace": { "@type": "State", "name": "Nevada" } },
    { "@type": "Place", "name": "Green Valley", "containedInPlace": { "@type": "City", "name": "Henderson" } }
  ],
  "sameAs": [
    "https://maps.apple.com/place?place-id=I3B0F0891DD44D2AD",
    "https://www.bing.com/maps?ss=ypid.YNA3A22CB0424DCE0B",
    "https://www.yelp.com/biz/baja-glass-and-mirror-las-vegas",
    "https://www.bbb.org/us/nv/las-vegas/profile/window-glass/baja-glass-and-mirror-llc-1086-90011741",
    "https://702alliance.com/members/baja-glass-mirror/"
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
    "Shower Door Replacement",
    "Tempered Safety Glass",
    "Low-Iron Glass",
    "Glass Replacement"
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
