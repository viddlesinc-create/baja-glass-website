import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronDown, ChevronUp } from "lucide-react";
import { ProductLedHero } from "@/components/landing/ProductLedHero";
import { ProblemAgitate } from "@/components/landing/ProblemAgitate";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { MaterialsOptions } from "@/components/landing/MaterialsOptions";
import { PricingTransparency } from "@/components/landing/PricingTransparency";
import { FeaturedReviews, ReviewCarousel } from "@/components/landing/LandingReviews";
import { ProcessSteps } from "@/components/landing/ProcessSteps";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { trackCTAClick } from "@/lib/analytics";

const COMPANY_PHONE = "+17023830779";
const COMPANY_PHONE_DISPLAY = "(702) 383-0779";

// ─── Trust Bar ───────────────────────────────────────────────────────────────
const TrustBar = () => (
  <section className="bg-charcoal text-white py-4 border-y border-white/10">
    <div className="container mx-auto px-4">
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:text-base text-white/90 text-center">
        <li className="font-medium">Licensed &amp; Insured Since 1999</li>
        <li className="hidden md:inline text-white/30">·</li>
        <li className="font-medium">First Responder Owned</li>
        <li className="hidden md:inline text-white/30">·</li>
        <li className="font-medium">Custom Glass</li>
        <li className="hidden md:inline text-white/30">·</li>
        <li className="font-medium">Free In-Home Quote</li>
        <li className="hidden md:inline text-white/30">·</li>
        <li className="font-medium">90-Day Lead Growth Guarantee</li>
      </ul>
    </div>
  </section>
);

// ─── Sticky Header ───────────────────────────────────────────────────────────
const StickyHeader = () => (
  <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border shadow-sm">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" className="flex items-center gap-2" aria-label="Baja Glass &amp; Mirror home">
        <img
          src="/images/logo-160.webp"
          alt="Baja Glass &amp; Mirror"
          width={120}
          height={36}
          className="h-9 w-auto"
        />
      </a>
      <a
        href={`tel:${COMPANY_PHONE}`}
        onClick={() => trackCTAClick("call", "sticky_header")}
        aria-label={`Call Baja Glass at ${COMPANY_PHONE_DISPLAY}`}
        className="flex items-center gap-2 text-charcoal hover:text-red-accent font-semibold transition-colors"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">{COMPANY_PHONE_DISPLAY}</span>
        <span className="sm:hidden">Call</span>
      </a>
    </div>
  </header>
);

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How long does a frameless shower door installation take?",
    a: "Most installations take 2 to 4 hours on install day. From the moment you request a quote, expect about 3–4 weeks total: free measurement in week 1, custom fabrication in weeks 2–3, and installation in week 3 or 4.",
  },
  {
    q: "What thickness of glass should I choose?",
    a: "Most frameless installs use 3/8\" tempered glass, which is plenty strong and gives the classic frameless look. 1/2\" is a step up — heavier, more substantial feel, and better for very large doors. We'll recommend the right thickness based on your door size and how the door swings.",
  },
  {
    q: "Do frameless shower doors leak?",
    a: "Properly installed frameless doors are designed to keep water inside the shower. We use a small clear seal along the bottom and at hinge points to direct water back into the pan. With correct in-swing or out-swing orientation and a properly sloped pan, leaks are not an issue.",
  },
  {
    q: "Can you install frameless doors in any bathroom?",
    a: "Almost always, yes — but the wall has to be plumb (straight up and down) and the curb or pan has to be level. If a wall is significantly out of plumb, we can shim, use a notched panel, or recommend a header bar. We confirm all of this at the free measurement appointment before fabrication.",
  },
  {
    q: "How do I clean and maintain frameless shower glass?",
    a: "Squeegee the glass after each shower — that one habit prevents 90% of hard-water spotting. For weekly cleaning, a 50/50 vinegar and water spray works well. Avoid abrasive scrubbers and ammonia-based cleaners. If you opt for ShowerGuard coating, maintenance is even easier.",
  },
  {
    q: "What's the warranty?",
    a: "We provide a lifetime warranty on all hardware. The tempered glass carries the manufacturer's warranty. If anything isn't right after installation, we come back and fix it at no charge.",
  },
  {
    q: "How is pricing determined?",
    a: "Three things drive price: glass thickness (3/8\" vs 1/2\"), hardware finish (chrome and brushed nickel are baseline; matte black, oil-rubbed bronze, and brass are step-ups), and site conditions (wall straightness, hardware accessibility, any custom cuts). We give you a firm price after the free in-home measurement.",
  },
  {
    q: "Do you offer financing?",
    a: "We do not offer in-house financing. Most customers pay by check, card, or bank transfer. Many home equity lines and credit cards offer 0% intro periods that work well for bathroom upgrades — ask us and we'll point you to options that have worked for past clients.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            The questions we hear most often before a frameless shower install.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-background rounded-lg shadow-sm overflow-hidden border border-border"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-foreground hover:bg-secondary/30 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-red-accent" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    className="px-6 pb-5 text-muted-foreground leading-relaxed"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────
const FramelessShowerLanding = () => {
  const finalCTARef = useRef<HTMLDivElement>(null);

  const scrollToQuote = () => {
    finalCTARef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bajaglass.com/lp/frameless-shower-doors#service",
        "name": "Frameless Shower Door Fabrication and Installation",
        "description":
          "Custom-built frameless shower doors and enclosures. Heavy tempered glass, polished edges, professional installation, lifetime hardware warranty.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://bajaglass.com/#localbusiness",
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Las Vegas, NV",
        },
        "serviceType": "Frameless Shower Door Installation",
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
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.097781,
          "longitude": -115.197234,
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "27",
        },
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00",
          },
        ],
      },
      {
        "@type": "Product",
        "@id": "https://bajaglass.com/lp/frameless-shower-doors#product",
        "name": "Frameless Shower Doors",
        "description":
          "Custom-fabricated frameless shower doors and enclosures with 3/8\" or 1/2\" tempered glass and premium hardware.",
        "brand": {
          "@type": "Brand",
          "name": "Baja Glass & Mirror",
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "1500",
          "highPrice": "5500",
          "availability": "https://schema.org/InStock",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "27",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Frameless Shower Doors — Custom Built &amp; Installed | Baja Glass</title>
        <meta
          name="description"
          content="Heavy-glass frameless shower doors, custom-fabricated and professionally installed. Free in-home measurement. Licensed since 1999. Call (702) 383-0779."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://bajaglass.com/lp/frameless-shower-doors" />

        <meta
          property="og:title"
          content="Frameless Shower Doors — Custom Built & Installed | Baja Glass"
        />
        <meta
          property="og:description"
          content="Heavy-glass frameless shower doors, custom-fabricated and professionally installed. Free in-home measurement."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/lp/frameless-shower-doors" />
        <meta
          property="og:image"
          content="https://bajaglass.com/images/hero-shower-door-main.webp"
        />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-red-accent text-white px-4 py-2 rounded"
      >
        Skip to content
      </a>

      <div className="min-h-screen bg-background">
        {/* Section 1: Sticky header */}
        <StickyHeader />

        <main id="main-content">
          {/* Section 2: Hero */}
          <ProductLedHero onQuoteClick={scrollToQuote} />

          {/* Section 3: Trust bar */}
          <TrustBar />

          {/* Section 4: Problem / agitate */}
          <ProblemAgitate />

          {/* Section 5: Product showcase */}
          <ProductShowcase />

          {/* Section 6: Process */}
          <ProcessSteps />

          {/* Section 7: Social proof */}
          <FeaturedReviews />

          {/* Section 8: Materials & options */}
          <MaterialsOptions />

          {/* Section 9: Pricing transparency */}
          <PricingTransparency />

          {/* Carousel — additional social proof */}
          <ReviewCarousel />

          {/* Section 10: FAQ */}
          <FAQSection />

          {/* Section 11: Final CTA + form */}
          <div ref={finalCTARef}>
            <FinalCTA
              formspreeUrl="https://formspree.io/f/xqaydjpg"
              requireAllFields
            />
          </div>
        </main>

        {/* Section 12: Sticky mobile CTA */}
        <StickyMobileCTA onQuoteClick={scrollToQuote} />

        <footer className="bg-charcoal text-white/70 py-6 text-center text-sm">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Baja Glass &amp; Mirror LLC. All rights reserved.</p>
            <p className="mt-1">
              4280 W Reno Ave Ste A, Las Vegas, NV 89118 | (702) 383-0779
            </p>
            <p className="mt-1">
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              {" · "}
              <a href="/" className="hover:text-white transition-colors">
                Baja Glass Home
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FramelessShowerLanding;
