import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, CheckCircle, MapPin } from "lucide-react";
import { HeroInstallerLocal } from "@/components/landing/HeroInstallerLocal";
import OptimizedImage from "@/components/OptimizedImage";
import { TrustBar } from "@/components/landing/TrustBar";
import { QuickQuoteForm } from "@/components/landing/QuickQuoteForm";
import { FAQAccordion, FAQItem } from "@/components/landing/FAQAccordion";
import { PricingTransparency } from "@/components/landing/PricingTransparency";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { LandingGallery } from "@/components/landing/LandingGallery";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// ─── Why Local Installer ──────────────────────────────────────────────────────
const whyColumns = [
  {
    title: "Site-Specific Fit",
    body: "Every Las Vegas bathroom is different — older homes, custom tile patterns, sloped pans. Template installs fail; in-home measurement doesn't. We fabricate to your exact dimensions."
  },
  {
    title: "Same-Day Re-Visit",
    body: "If the install reveals an issue, we're 15 minutes away, not 3 weeks out. Being local means we can stand behind our work in a way out-of-town crews never could."
  },
  {
    title: "Real Warranty",
    body: "1 year parts and labor, plus a lifetime hardware warranty. We honor it because we live here. Our reputation in this city is worth more than the cost of any callback."
  },
  {
    title: "No Middleman",
    body: "You're hiring the company that fabricates the glass — not a subcontractor. Direct accountability. If something's wrong, the same hands that built it come fix it."
  },
];

const WhyLocalInstaller = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Why Hire a Local Las Vegas Installer?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The installer matters as much as the glass. Here's what you get when you hire local.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {whyColumns.map((col, i) => (
          <div key={i} className="bg-secondary/20 rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-3">{col.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{col.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── What's Included ──────────────────────────────────────────────────────────
const includedItems = [
  "Free in-home measurement (no obligation)",
  "Custom glass fabrication in our Las Vegas shop",
  "All hardware — hinges, handles, clips, U-channel",
  "Professional installation by a licensed installer",
  "Caulking and waterproofing",
  "Full site cleanup",
  "Demonstration of operation and glass care instructions",
  "1-year parts and labor warranty",
];

const WhatsIncluded = () => (
  <section className="py-16 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What's Included in Every Install
          </h2>
          <p className="text-muted-foreground text-lg">
            One price covers everything from measure to cleanup. No hidden add-ons.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {includedItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-background rounded-lg p-4 shadow-sm">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Service Area ─────────────────────────────────────────────────────────────
const serviceZips = [
  "89101","89102","89103","89104","89108","89109","89113","89118",
  "89119","89120","89128","89129","89130","89134","89135","89139",
  "89141","89144","89146","89147","89002","89005","89014","89015",
  "89052","89074",
];

const ServiceArea = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <MapPin className="h-10 w-10 text-red-accent mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          We Install Across the Las Vegas Valley
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          Cities served: <strong>Las Vegas, Henderson, Summerlin, North Las Vegas, Boulder City, and Paradise.</strong>
        </p>
        <p className="text-sm text-muted-foreground mb-2">ZIP codes served:</p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {serviceZips.join(", ")}
        </p>
        <p className="mt-6 text-muted-foreground">
          Not sure if we cover your area? Call <a href="tel:+17023830779" className="text-red-accent font-semibold hover:underline">(702) 383-0779</a> — if you're in Clark County, we likely can help.
        </p>
      </div>
    </div>
  </section>
);

// ─── Process Timeline ─────────────────────────────────────────────────────────
const timelineSteps = [
  {
    label: "Today",
    title: "Call or submit the form",
    body: "We schedule your free in-home measurement within 48 hours."
  },
  {
    label: "Week 1",
    title: "Free in-home measurement",
    body: "A licensed installer visits your bathroom. You get an exact written quote — no ballpark, no surprises."
  },
  {
    label: "Weeks 3–4",
    title: "Glass fabricated in our LV shop",
    body: "Your custom glass is cut, tempered, and finished here in Las Vegas. Install is scheduled at your convenience."
  },
  {
    label: "Install Day",
    title: "One half-day. Done.",
    body: "Professional installation, site cleanup, and a full walkthrough. Your bathroom is ready that evening."
  },
];

const ProcessTimeline = () => (
  <section className="py-16 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          How the Install Process Works
        </h2>
        <p className="text-muted-foreground text-lg">
          From your first call to finished install — here's the timeline.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {timelineSteps.map((step, i) => (
          <div key={i} className="relative">
            <div className="bg-red-accent text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
              {step.label}
            </div>
            <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
            {i < timelineSteps.length - 1 && (
              <div className="hidden md:block absolute top-4 left-full w-6 border-t-2 border-dashed border-border -translate-y-0.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Installer Credentials ────────────────────────────────────────────────────

// ─── Installer-Tone Reviews ───────────────────────────────────────────────────
// TODO(owner): repopulate with REAL verified Google reviews. The previous entries
// were placeholder copy, not genuine customer reviews, and were removed.
const installerReviews: Array<{ name: string; location?: string; rating?: number; service?: string; text?: string; quote?: string; city?: string }> = [];

const InstallerReviews = () => installerReviews.length === 0 ? null : (
  <section className="py-16 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          What Customers Say About Our Installers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {installerReviews.map((review, i) => (
          <Card key={i} className="border-0 shadow-lg bg-background relative overflow-hidden">
            <Quote className="absolute top-4 right-4 h-10 w-10 text-muted/20" />
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{review.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
                <p className="text-xs text-muted-foreground mt-1">{review.service}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// ─── FAQ Items ────────────────────────────────────────────────────────────────
const faqs: FAQItem[] = [
  {
    q: "How quickly can you come measure?",
    a: "We typically schedule free in-home measurements within 48 hours of your first contact. Same-week appointments are usually available Monday through Friday."
  },
  {
    q: "Do you charge for the measurement visit?",
    a: "No. The in-home measurement is completely free with no obligation. You'll receive an exact written quote — no pressure to proceed."
  },
  {
    q: "How long does the actual install take?",
    a: "Most shower door installs take one half-day. You'll have a fully functional, installed shower door before the crew leaves. Steam enclosures may take a full day."
  },
  {
    q: "What if there's a problem after the install?",
    a: "We back every install with a 1-year parts and labor warranty. We're local — if something isn't right, we come back and fix it. Lifetime warranty on all hardware."
  },
  {
    q: "Are you licensed and insured? Can I see proof?",
    a: "Yes. We hold a C8 Glass & Glazing license from the Nevada State Contractors Board and carry general liability and workers' compensation insurance. We provide documentation before any job starts — just ask."
  },
  {
    q: "Will my bathroom be a mess afterward?",
    a: "No. Full site cleanup is included in every install. We haul away packaging, old hardware, and debris. Your bathroom is move-in ready when we leave."
  },
  {
    q: "Do you remove the old shower door?",
    a: "Yes. Removal and disposal of your existing shower door or curtain rod is included at no extra charge."
  },
  {
    q: "What if my walls aren't perfectly square?",
    a: "That's exactly why in-home measurement matters. Our installers measure the actual angles of your space — including any out-of-square walls — and we custom-fabricate the glass to fit. Templates fail here; custom fabrication doesn't."
  },
];

// ─── Structured Data ──────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bajaglass.com/lp/shower-door-installation-lv#service",
      name: "Shower Door Installation",
      description:
        "Professional shower door installation in Las Vegas by licensed, insured, owner-operated installers. Free in-home measurement, custom fabrication, and full site cleanup.",
      serviceType: "Shower Door Installation",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://bajaglass.com/#localbusiness"
      },
      areaServed: [
        { "@type": "City", name: "Las Vegas", addressRegion: "NV" },
        { "@type": "City", name: "Henderson", addressRegion: "NV" },
        { "@type": "City", name: "Summerlin", addressRegion: "NV" },
        { "@type": "City", name: "North Las Vegas", addressRegion: "NV" },
        { "@type": "City", name: "Boulder City", addressRegion: "NV" },
        { "@type": "City", name: "Paradise", addressRegion: "NV" },
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD"
        },
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://bajaglass.com/#localbusiness",
      name: "Baja Glass & Mirror LLC",
      url: "https://bajaglass.com",
      telephone: "(702) 383-0779",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4280 W Reno Ave Ste A",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89118",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.097781,
        longitude: -115.197234
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00"
        },
      ]
    },
  ],
};

// ─── Page ──────────────────────────────────────────────────────────────────────
const ShowerDoorInstallationLVLanding = () => {
  const quoteRef = useRef<HTMLDivElement>(null);

  const scrollToQuote = () => {
    quoteRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Shower Door Installation Las Vegas — Licensed Installers | Baja Glass</title>
        <meta
          name="description"
          content="Las Vegas shower door installation by licensed, insured installers. Free in-home measure. Same-week scheduling. Call (702) 383-0779 — owner-operated since 1999."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://bajaglass.com/lp/shower-door-installation-lv" />
        <meta
          property="og:title"
          content="Shower Door Installation Las Vegas — Licensed Installers | Baja Glass"
        />
        <meta
          property="og:description"
          content="Las Vegas shower door installation by licensed, insured installers. Free in-home measure. Same-week scheduling. Call (702) 383-0779."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/lp/shower-door-installation-lv" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Sticky header */}
        <header className="sticky top-0 z-50 bg-charcoal shadow-md">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" aria-label="Baja Glass Home">
              <OptimizedImage
                src="/images/baja-glass-mirror-logo.webp"
                alt="Baja Glass & Mirror"
                width={160}
                height={159}
                priority
                className="h-10 w-auto"
              />
            </a>
            <a
              href="tel:+17023830779"
              className="flex items-center gap-2 text-white font-semibold hover:text-red-accent transition-colors text-sm md:text-base"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              (702) 383-0779
            </a>
          </div>
        </header>

        {/* Hero */}
        <HeroInstallerLocal onScrollToQuote={scrollToQuote} />

        {/* Trust bar */}
        <TrustBar
          badges={[
            "Licensed & Insured",
            "Owner-Operated Since 1999",
            "First Responder Owned",
            "Same-Week Measurement Available",
          ]}
        />

        {/* Why local installer */}
        <WhyLocalInstaller />

        {/* What's included */}
        <WhatsIncluded />

        {/* Service area */}
        <ServiceArea />

        {/* Process timeline */}
        <ProcessTimeline />

        {/* Reviews */}
        <InstallerReviews />

        {/* Gallery */}
        <LandingGallery />

        {/* Pricing */}
        <PricingTransparency />

        {/* FAQ */}
        <FAQAccordion items={faqs} />

        {/* Quote form */}
        <div ref={quoteRef} id="quote-form">
          <QuickQuoteForm
            successMessage="Thanks. An installer (not a salesperson) will call you within 4 business hours."
          />
        </div>

        {/* Sticky mobile footer */}
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

export default ShowerDoorInstallationLVLanding;
