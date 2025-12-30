import { Helmet } from "react-helmet-async";

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bajaglass.com/#localbusiness",
  "name": "Baja Glass & Mirror LLC",
  "image": "https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png",
  "description": "Baja Glass & Mirror is a family-owned glass company specializing in custom shower doors, mirrors, and interior glass installation in Las Vegas.",
  "url": "https://bajaglass.com",
  "telephone": "(702) 383-0779",
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
    "latitude": 36.1215,
    "longitude": -115.2269
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "27"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Glass Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Frameless Shower Doors",
          "description": "Custom frameless shower door installation and repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sliding Shower Doors",
          "description": "Space-saving sliding shower door installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Shower Enclosures",
          "description": "Made-to-measure shower enclosures for any space"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Glass Repair",
          "description": "Shower glass repair and replacement services"
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
  "areaServed": {
    "@type": "Place",
    "name": "Las Vegas Valley"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(702) 383-0779",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": ["https://bajaglass.com"]
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
