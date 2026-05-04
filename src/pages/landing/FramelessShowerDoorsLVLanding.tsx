import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, CheckCircle, ChevronDown, ChevronUp, Star, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingHero } from "@/components/landing/LandingHero";
import { FeaturedReviews, ReviewCarousel } from "@/components/landing/LandingReviews";
import { LandingGallery } from "@/components/landing/LandingGallery";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { ProcessSteps } from "@/components/landing/ProcessSteps";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { trackCTAClick } from "@/lib/analytics";

// ─── Mid-Page CTA ────────────────────────────────────────────────────────────
const MidPageCTA = ({ onQuoteClick }: { onQuoteClick: () => void }) => (
  <section className="py-14 bg-charcoal text-white">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="ml-2 text-white/90 font-semibold text-lg">4.6 / 5 — 27 Google Reviews</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
        Ready to See Your Custom Quote?
      </h2>
      <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
        No pressure. No commitment. We'll measure your space and give you an exact price — free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => { trackCTAClick("get_quote", "mid_page_cta"); onQuoteClick(); }}
          size="lg"
          className="bg-red-accent hover:bg-red-accent-light text-white text-lg px-10 py-6"
        >
          Get My Free Quote
        </Button>
        <Button asChild size="lg" variant="outline"
          className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal text-lg px-10 py-6"
        >
          <a href="tel:+17023830779" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Call (702) 383-0779
          </a>
        </Button>
      </div>
      <p className="text-white/50 text-sm mt-6">
        <Clock className="inline h-4 w-4 mr-1" />
        Same-day response · Mon–Fri 8am–4pm
      </p>
    </div>
  </section>
);

// ─── What's Included ─────────────────────────────────────────────────────────
const included = [
  "Free in-home measurement by a licensed technician",
  "Custom fabrication to your exact bathroom dimensions",
  "3/8\" or 1/2\" tempered safety glass — your choice",
  "Premium hardware in chrome, brushed nickel, or matte black",
  "Professional installation by our in-house crew",
  "Full site cleanup after installation",
  "Walkthrough and glass care instructions",
  "Lifetime warranty on all hardware",
];

const WhatIsIncluded = () => (
  <section className="py-16 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Everything Included — No Hidden Fees
          </h2>
          <p className="text-muted-foreground text-lg">
            One quote covers everything from measurement to cleanup. Here's exactly what you get:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {included.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-background rounded-lg p-4 shadow-sm">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8 text-sm">
          <Shield className="inline h-4 w-4 mr-1" />
          Licensed & Insured · Nevada Contractor's License · 20+ Years in Las Vegas
        </p>
      </div>
    </div>
  </section>
);

// ─── Comparison Table ────────────────────────────────────────────────────────
type CheckOrX = "✓" | "✕";

interface ComparisonRow {
  feature: string;
  baja: CheckOrX;
  bigBox: CheckOrX;
  generic: CheckOrX;
}

const comparisonRows: ComparisonRow[] = [
  { feature: "Custom-measured fit", baja: "✓", bigBox: "✕", generic: "✕" },
  { feature: "Licensed & insured installers", baja: "✓", bigBox: "✕", generic: "✕" },
  { feature: "Lifetime hardware warranty", baja: "✓", bigBox: "✕", generic: "✕" },
  { feature: "Tempered safety glass (3/8\" or 1/2\")", baja: "✓", bigBox: "✕", generic: "✕" },
  { feature: "Local Las Vegas company", baja: "✓", bigBox: "✕", generic: "✓" },
  { feature: "20+ years experience", baja: "✓", bigBox: "✕", generic: "✕" },
  { feature: "Free in-home measurement", baja: "✓", bigBox: "✕", generic: "✕" },
  { feature: "Same-week quote response", baja: "✓", bigBox: "✕", generic: "✓" },
];

const ComparisonTable = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Why Baja Glass Beats the Alternatives
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Big-box stores sell off-the-shelf. Generic contractors cut corners. We custom-build every door for your exact space.
        </p>
      </div>
      <div className="max-w-3xl mx-auto overflow-x-auto">
        <table className="w-full text-sm md:text-base border-collapse">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-foreground border-b-2 border-border w-1/2"></th>
              <th className="text-center py-3 px-4 font-bold text-white bg-charcoal rounded-t-lg border-b-2 border-red-accent">
                Baja Glass
              </th>
              <th className="text-center py-3 px-4 font-semibold text-muted-foreground border-b-2 border-border">
                Big-Box Store
              </th>
              <th className="text-center py-3 px-4 font-semibold text-muted-foreground border-b-2 border-border">
                Generic Contractor
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-secondary/20" : "bg-background"}>
                <td className="py-3 px-4 text-foreground font-medium">{row.feature}</td>
                <td className="py-3 px-4 text-center bg-charcoal/5">
                  <span className={`text-xl font-bold ${row.baja === "✓" ? "text-green-600" : "text-red-500"}`}>
                    {row.baja}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className={`text-xl font-bold ${row.bigBox === "✓" ? "text-green-600" : "text-red-400"}`}>
                    {row.bigBox}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className={`text-xl font-bold ${row.generic === "✓" ? "text-green-600" : "text-red-400"}`}>
                    {row.generic}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How much does a frameless shower door cost in Las Vegas?",
    a: "Most frameless shower door projects in Las Vegas range from $800–$2,500 depending on size, glass thickness, and hardware finish. Every project is custom, so we give you an exact price after a free in-home measurement — no guessing, no surprises."
  },
  {
    q: "How long does installation take from quote to completion?",
    a: "Typically 1–2 weeks. We respond to quote requests the same business day, come out for a free measurement within 2–3 days, then fabricate your custom door. Installation itself usually takes 2–4 hours."
  },
  {
    q: "What warranty do you offer?",
    a: "We provide a lifetime warranty on all hardware. The glass itself carries a manufacturer warranty. If anything isn't right after installation, we come back and fix it — no charge."
  },
  {
    q: "Do I need to be home for the measurement visit?",
    a: "Yes, someone needs to be home so our technician can accurately measure your shower space and discuss glass and hardware options with you. We work around your schedule, including early morning appointments."
  },
  {
    q: "What glass thickness options are available?",
    a: "We offer 3/8\" and 1/2\" tempered safety glass. The 1/2\" is heavier and gives a more luxurious feel; 3/8\" is the most popular for standard frameless installs. We'll recommend the right option for your door size and style."
  },
  {
    q: "Do you serve areas outside Las Vegas proper?",
    a: "Yes — we serve the entire Las Vegas Valley including Henderson, Summerlin, Spring Valley, Paradise, Enterprise, Green Valley, and North Las Vegas. If you're in Clark County, we can help."
  },
  {
    q: "Is Baja Glass licensed and insured?",
    a: "Yes. We are fully licensed (Nevada Contractor's License) and carry general liability insurance. You can request our license number and proof of insurance at any time."
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
            Everything Las Vegas homeowners ask before getting their frameless shower door.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-background rounded-lg shadow-sm overflow-hidden border border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-foreground hover:bg-secondary/30 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                {openIndex === i
                  ? <ChevronUp className="h-5 w-5 flex-shrink-0 text-red-accent" />
                  : <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                }
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const FramelessShowerDoorsLVLanding = () => {
  const finalCTARef = useRef<HTMLDivElement>(null);

  const scrollToQuote = () => {
    finalCTARef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bajaglass.com/lp/frameless-shower-doors-lv#service",
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
        "@id": "https://bajaglass.com/lp/frameless-shower-doors-lv#product",
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Frameless Shower Doors Las Vegas NV | Free Quote | Baja Glass</title>
        <meta
          name="description"
          content="Transform your bathroom with premium frameless shower doors. Expert installation in Las Vegas. Free in-home measurement. Lifetime hardware warranty. Call (702) 383-0779."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://bajaglass.com/lp/frameless-shower-doors-lv" />

        <meta property="og:title" content="Frameless Shower Doors Las Vegas NV | Free Quote | Baja Glass" />
        <meta property="og:description" content="Transform your bathroom with premium frameless shower doors. Expert installation in Las Vegas. Free in-home measurement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/lp/frameless-shower-doors-lv" />
        <meta property="og:image" content="https://bajaglass.com/lovable-uploads/22e931d0-6005-492b-ba38-baab99486f52.png" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Section 1: Hero + Proof Bar */}
        <LandingHero />

        {/* Section 7a: Social Proof — Featured Reviews */}
        <FeaturedReviews />

        {/* Section 5: Mid-Page CTA + Proof */}
        <MidPageCTA onQuoteClick={scrollToQuote} />

        {/* Section 11: Image Strip */}
        <LandingGallery />

        {/* Section 4: Features (scannable) */}
        <WhyChooseUs />

        {/* Section 6: What's Included */}
        <WhatIsIncluded />

        {/* Section 2: Transformation (process) */}
        <ProcessSteps />

        {/* Section 9: Comparison Table */}
        <ComparisonTable />

        {/* Section 7b: Social Proof — Review Carousel */}
        <ReviewCarousel />

        {/* Section 10: FAQ (objection handling) */}
        <FAQSection />

        {/* Section 12: Final CTA (emotive close) */}
        <div ref={finalCTARef}>
          <FinalCTA />
        </div>

        <StickyMobileCTA onQuoteClick={scrollToQuote} />

        <footer className="bg-charcoal text-white/70 py-6 text-center text-sm">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Baja Glass & Mirror LLC. All rights reserved.</p>
            <p className="mt-1">4280 W Reno Ave Ste A, Las Vegas, NV 89118 | (702) 383-0779</p>
            <p className="mt-1">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              {" · "}
              <a href="/" className="hover:text-white transition-colors">Baja Glass Home</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FramelessShowerDoorsLVLanding;
