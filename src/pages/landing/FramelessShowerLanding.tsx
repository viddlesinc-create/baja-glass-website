import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { LandingHero } from "@/components/landing/LandingHero";
import { FeaturedReviews, ReviewCarousel } from "@/components/landing/LandingReviews";
import { LandingGallery } from "@/components/landing/LandingGallery";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { ProcessSteps } from "@/components/landing/ProcessSteps";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

const FramelessShowerLanding = () => {
  const finalCTARef = useRef<HTMLDivElement>(null);

  const scrollToQuote = () => {
    finalCTARef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Structured Data for the landing page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bajaglass.com/lp/frameless-shower-doors#service",
        "name": "Frameless Shower Door Installation",
        "description": "Premium frameless shower door installation services in Las Vegas. Custom-fitted, tempered safety glass with professional installation and lifetime hardware warranty.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://bajaglass.com/#localbusiness"
        },
        "areaServed": {
          "@type": "City",
          "name": "Las Vegas",
          "addressRegion": "NV"
        },
        "serviceType": "Frameless Shower Door Installation",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://bajaglass.com/#localbusiness",
        "name": "Baja Glass & Mirror LLC",
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
          "latitude": 36.097781,
          "longitude": -115.197234
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "27"
        },
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://bajaglass.com/lp/frameless-shower-doors#product",
        "name": "Frameless Shower Door",
        "description": "Custom frameless shower doors with premium tempered glass and quality hardware",
        "brand": {
          "@type": "Brand",
          "name": "Baja Glass & Mirror"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "27"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Frameless Shower Doors Las Vegas | Free Quote | Baja Glass</title>
        <meta 
          name="description" 
          content="Transform your bathroom with premium frameless shower doors. Expert installation in Las Vegas. Free in-home measurement. Lifetime hardware warranty. Call (702) 383-0779." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bajaglass.com/lp/frameless-shower-doors" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Frameless Shower Doors Las Vegas | Free Quote | Baja Glass" />
        <meta property="og:description" content="Transform your bathroom with premium frameless shower doors. Expert installation in Las Vegas. Free in-home measurement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/lp/frameless-shower-doors" />
        <meta property="og:image" content="https://bajaglass.com/lovable-uploads/22e931d0-6005-492b-ba38-baab99486f52.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Standalone page - no header/footer */}
      <div className="min-h-screen bg-background">
        <LandingHero />
        <FeaturedReviews />
        <LandingGallery />
        <WhyChooseUs />
        <ProcessSteps />
        <ReviewCarousel />
        <div ref={finalCTARef}>
          <FinalCTA />
        </div>
        <StickyMobileCTA onQuoteClick={scrollToQuote} />
        
        {/* Minimal Footer - Just essentials */}
        <footer className="bg-charcoal text-white/70 py-6 text-center text-sm">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Baja Glass & Mirror LLC. All rights reserved.</p>
            <p className="mt-1">4280 W Reno Ave Ste A, Las Vegas, NV 89118 | (702) 383-0779</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FramelessShowerLanding;
