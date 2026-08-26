import { useRef, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Star, Check, Shield, Award, Clock, Droplets, Layers, Ruler, Wrench, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import HeroImagePreload from "@/components/HeroImagePreload";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

const PortfolioLightbox = lazy(() => import("@/components/landing/PortfolioLightbox"));

// ─── Data ────────────────────────────────────────────────────────────────────

const PHONE = "(702) 383-0779";
const PHONE_HREF = "tel:+17023830779";
const FORMSPREE = "https://formspree.io/f/xqaydjpg";

const galleryImages = [
  {
    src: "/images/custom-neo-angle-shower-enclosure.webp",
    alt: "Luxury frameless shower enclosure with freestanding tub — Baja Glass Las Vegas",
    caption: "Frameless enclosure with freestanding soaking tub — low-iron glass"
  },
  {
    src: "/images/corner-shower-enclosure-black-hardware.webp",
    alt: "Custom neo-angle shower enclosure — Baja Glass",
    caption: "Custom neo-angle enclosure, low-iron glass"
  },
  {
    src: "/images/bypass-sliding-shower-doors-completed-project-2.webp",
    alt: "Ultra-clear low-iron glass frameless shower — Baja Glass Las Vegas",
    caption: "Ultra-clear glass with chrome hardware"
  },
  {
    src: "/images/completed-steam-shower-enclosure-3.webp",
    alt: "Frameless shower door with brushed nickel — Baja Glass",
    caption: "Brushed nickel finish, 1/2\" tempered glass"
  },
  {
    src: "/images/custom-corner-shower-enclosure-brushed-nickel.webp",
    alt: "Luxury marble shower with matte black hardware and built-in bench — Baja Glass Las Vegas",
    caption: "Marble surround, matte black hardware, built-in bench"
  },
  {
    src: "/images/bypass-sliding-glass-doors.webp",
    alt: "Frameless shower enclosure with pebble accent strip — Baja Glass Las Vegas",
    caption: "Frameless inline enclosure with pebble accent detail"
  },
];

// TODO(owner): repopulate with REAL verified Google reviews. The previous entries
// were placeholder copy, not genuine customer reviews, and were removed.
const testimonials: Array<{ name: string; location?: string; rating?: number; service?: string; text?: string; quote?: string; city?: string }> = [];

const features = [
  { icon: Shield, label: "C8 Glass & Glazing License", sub: "Nevada State Contractors Board" },
  { icon: Award, label: "Bonded & Insured", sub: "Full coverage on every project" },
  { icon: Star, label: "First Responder Owned", sub: "Serving those who serve Las Vegas" },
  { icon: Clock, label: "20+ Years Experience", sub: "Thousands of Las Vegas installations" },
  { icon: Layers, label: "Low-Iron Ultra-Clear Glass", sub: "No green tint — pure transparency" },
  { icon: Droplets, label: "Hydrophobic Glass Coating", sub: "Water beads off — less mineral buildup" },
  { icon: Ruler, label: "Custom Fabrication Only", sub: "No off-the-shelf doors — ever" },
  { icon: Home, label: "Free On-Site Measurement", sub: "We come to you, at your convenience" },
];

const included = [
  "Free on-site measurement & consultation",
  "Custom glass fabrication (3/8\" or 1/2\" tempered)",
  "Hardware finish selection & matching",
  "Professional licensed installation",
  "Full cleanup & final walkthrough",
  "Strong workmanship warranty",
  "Hydrophobic coating available",
  "Low-iron ultra-clear glass available",
];

const comparisonRows = [
  { feature: "Custom fabricated to your exact space", baja: true, bigBox: false, generic: "Sometimes" },
  { feature: "Licensed C8 Glazing contractor", baja: true, bigBox: false, generic: "Rarely" },
  { feature: "Low-iron ultra-clear glass", baja: true, bigBox: false, generic: "Rarely" },
  { feature: "Hydrophobic glass coating", baja: true, bigBox: false, generic: false },
  { feature: "Hardware finish matching", baja: true, bigBox: "Limited", generic: "Limited" },
  { feature: "Free on-site consultation", baja: true, bigBox: false, generic: "Sometimes" },
  { feature: "First Responder owned", baja: true, bigBox: false, generic: false },
  { feature: "Las Vegas owned since 2009", baja: true, bigBox: "N/A", generic: "Varies" },
];

const faqs = [
  {
    q: "How long does the process take from consultation to installation?",
    a: "Most projects run 7–14 days from initial measurement to final installation. We schedule your on-site consultation first, then fabricate your custom glass panels in our Las Vegas shop — typically 5–10 business days depending on complexity. Installation itself is completed in a single visit, usually 2–4 hours for a standard enclosure."
  },
  {
    q: "What glass thickness do you recommend for luxury installations?",
    a: "We recommend 1/2\" tempered glass for most luxury installations. It provides a more substantial feel, superior rigidity across larger panel spans, and a premium aesthetic that 3/8\" glass simply can't match. For frameless pivot and hinged doors, 1/2\" is our standard."
  },
  {
    q: "Do you work with interior designers and general contractors?",
    a: "Yes — and we prefer it. Working with your designer or contractor early means we can align hardware finishes, glass type, and configuration with the broader project before anything is fabricated. We're comfortable reading architectural drawings and coordinating with tile installers and plumbers."
  },
  {
    q: "Is the hydrophobic coating included or an add-on?",
    a: "The hydrophobic coating is an add-on that we strongly recommend for Las Vegas bathrooms due to the area's hard water. It creates an invisible barrier that causes water to bead and roll off the glass surface, dramatically reducing mineral deposits and cleaning time. We'll walk you through the options during your consultation."
  },
  {
    q: "What hardware finishes are available?",
    a: "We offer matte black, brushed nickel, polished chrome, satin brass, unlacquered brass, oil-rubbed bronze, and custom powder coat finishes. Every hinge, handle, clip, and towel bar is selected to match your existing plumbing fixtures and interior metalwork precisely."
  },
  {
    q: "What does your warranty cover?",
    a: "Our warranty covers workmanship on the installation — including any issues with seals, alignment, hardware function, and glass fit. Glass itself is covered under manufacturer warranty against defects. We stand behind our work and will return to address any issues that arise from our installation."
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-emerald-600 font-bold text-lg">✓</span>;
  if (value === false) return <span className="text-red-400 font-bold text-lg">✗</span>;
  return <span className="text-muted-foreground text-sm">{value}</span>;
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ConsultationForm({ id }: { id: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch(FORMSPREE, { method: "POST", body: data, headers: { Accept: "application/json" } });
      fetch("https://hook.us2.make.com/gfxiblklsuwae888toxx4nue58bgte6w", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      }).catch(() => {});
      if (typeof (window as any).fbq === "function") (window as any).fbq("track", "Lead");
      setSubmitted(true);
    } catch {
      // silent — still show success to not block leads
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 px-6">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-2">Consultation Request Received</h3>
        <p className="text-muted-foreground mb-4">We'll contact you within one business day to schedule your on-site visit.</p>
        <p className="text-charcoal font-semibold">Questions in the meantime?</p>
        <a href={PHONE_HREF} className="text-red-600 font-bold text-lg hover:underline">{PHONE}</a>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
          <input name="name" required placeholder="Your name" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal" />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Phone *</label>
          <input name="phone" type="tel" required placeholder="(702) 000-0000" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
        <input name="email" type="email" placeholder="you@email.com" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal" />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">ZIP Code</label>
        <input name="zip" placeholder="89118" maxLength={5} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal" />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Project Description</label>
        <textarea name="message" rows={3} placeholder="Tell us about your bathroom — enclosure type, hardware preferences, timeline..." className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal resize-none" />
      </div>
      <input type="hidden" name="_subject" value="Luxury Shower Enclosure Consultation Request" />
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-charcoal hover:bg-charcoal/90 text-white text-base font-semibold py-6 rounded-lg shadow-lg transition-all duration-200"
      >
        {loading ? "Sending…" : "Schedule My Private Consultation"}
      </Button>
      <p className="text-xs text-center text-muted-foreground">We respond within one business day. No spam, ever.</p>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const LuxuryShowerEnclosuresLanding = () => {
  const finalCTARef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToConsultation = () => {
    finalCTARef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));
  const nextImage = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % galleryImages.length));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bajaglass.com/lp/luxury-shower-enclosures#service",
        "name": "Luxury Custom Shower Enclosure Installation",
        "description": "Custom luxury glass shower enclosures in Las Vegas. Low-iron glass, designer hardware finishes, C8 licensed installation.",
        "provider": { "@type": "LocalBusiness", "@id": "https://bajaglass.com/#localbusiness" },
        "areaServed": [
          { "@type": "Place", "name": "Las Vegas, NV" },
          { "@type": "Place", "name": "Henderson, NV" },
          { "@type": "Place", "name": "Summerlin, Las Vegas, NV" },
        ],
        "serviceType": "Custom Shower Enclosure Installation"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://bajaglass.com/#localbusiness",
        "name": "Baja Glass & Mirror LLC",
        "url": "https://bajaglass.com",
        "telephone": PHONE,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4280 W Reno Ave Ste A",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89118",
          "addressCountry": "US"
        },
        "priceRange": "$$$"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Luxury Shower Enclosures Las Vegas | Custom Glass | Baja Glass</title>
        <meta name="description" content="Custom luxury shower enclosures in Las Vegas. Low-iron glass, designer hardware, C8 licensed installation. Serving Las Vegas and Henderson." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://bajaglass.com/lp/luxury-shower-enclosures" />
        <meta property="og:title" content="Luxury Shower Enclosures Las Vegas | Baja Glass & Mirror" />
        <meta property="og:description" content="Custom glass shower enclosures crafted for Las Vegas bathrooms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/lp/luxury-shower-enclosures" />
        <meta property="og:image" content="https://bajaglass.com/images/custom-neo-angle-shower-enclosure.webp" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <HeroImagePreload src="/images/custom-neo-angle-shower-enclosure.webp" width={1414} />
            <OptimizedImage
              src="/images/custom-neo-angle-shower-enclosure.webp"
              alt="Luxury frameless shower enclosure with freestanding tub — Baja Glass Las Vegas"
              width={1414}
              height={1650}
              sizes="100vw"
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />
          </div>

          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-2xl">
              {/* Pre-headline badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-white/90 text-sm font-medium tracking-wide">Nevada's Premier Glazing Specialists · C8 Licensed</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-xl">
                Luxury Shower Enclosures in Las Vegas
                <span className="block text-white/90 mt-1">Crafted for the Most Distinguished Bathrooms</span>
              </h1>

              {/* Sub */}
              <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-4 max-w-xl">
                Custom glass shower enclosures designed, measured, fabricated, and installed by licensed glazing specialists working in the Las Vegas Valley since 2009.
              </p>
              <p className="text-base text-white/70 mb-10 max-w-xl">
                Not labor-only. Not off-the-shelf. Every panel is custom-fabricated to your bathroom's exact specifications.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToConsultation}
                  className="bg-white text-charcoal hover:bg-white/90 font-semibold text-base px-8 py-6 rounded-lg shadow-xl transition-all duration-200 hover:shadow-2xl"
                >
                  Schedule Your Private Consultation
                </Button>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 font-medium text-base px-8 py-6 rounded-lg transition-all duration-200 backdrop-blur-sm"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-1">
            <span className="text-white/50 text-xs tracking-widest uppercase">Explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </section>

        {/* ── 2. PROOF BAR ────────────────────────────────────────────────── */}
        <section className="bg-charcoal py-5 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="font-semibold">Since 2009</span>
                <span className="text-white/50">· 27 Reviews</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>C8 Licensed Glass &amp; Glazing</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>20+ Years in Las Vegas</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>First Responder Owned</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>Bonded &amp; Insured</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="text-white/60 text-xs">Serving Las Vegas & Henderson</span>
            </div>
          </div>
        </section>

        {/* ── 3. TRANSFORMATION — 3-step process ──────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">The Process</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Three Steps. Zero Compromise.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                From the first conversation to the final walkthrough, every step is designed around your bathroom — not our inventory.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "We Come to You",
                  desc: "Your on-site consultation happens at your convenience. We assess your space, review your existing fixtures, and discuss every option — no showroom visit required.",
                  icon: Home
                },
                {
                  step: "02",
                  title: "Designed to Your Space",
                  desc: "Glass thickness, hardware finish, and configuration are selected to complement your architect's vision and your interior palette. We coordinate with your designer or contractor if needed.",
                  icon: Ruler
                },
                {
                  step: "03",
                  title: "Installed to Perfection",
                  desc: "Our licensed crew completes most installations in a single day, leaving your space spotless. Every seal, hinge, and panel is inspected before we leave.",
                  icon: Wrench
                },
              ].map(({ step, title, desc, icon: Icon }) => (
                <div key={step} className="relative text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-charcoal rounded-2xl mb-6 shadow-lg group-hover:bg-charcoal/80 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white border-2 border-charcoal text-charcoal text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center">
                    {step}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. BENEFITS — alternating image + text ──────────────────────── */}
        <section className="py-4 bg-secondary/20">
          {[
            {
              image: "/images/bypass-sliding-shower-doors-completed-project-2.webp",
              alt: "Ultra-clear low-iron glass frameless shower enclosure — Baja Glass Las Vegas",
              headline: "Pure Clarity — No Green Tint",
              body: "Standard glass carries a subtle green cast that becomes visible along every edge — competing with your tile work and fixtures. Low-iron glass eliminates it entirely. The result is crystal-clear transparency that lets your stone, marble, and hardware speak for themselves, exactly as your designer intended.",
              badge: "Low-Iron Glass",
              reverse: false
            },
            {
              image: "/images/completed-steam-shower-enclosure-3.webp",
              alt: "Frameless shower door with brushed nickel hardware — Baja Glass Henderson",
              headline: "Hardware That Matches Your Space, Not a Catalog",
              body: "We offer matte black, brushed nickel, polished chrome, satin brass, unlacquered brass, and oil-rubbed bronze. Every hinge, handle, clip, and towel bar is individually selected to complement your existing plumbing fixtures and interior metalwork — not what happened to be in stock.",
              badge: "Designer Hardware",
              reverse: true
            },
            {
              image: "/images/corner-shower-enclosure-black-hardware.webp",
              alt: "Custom neo-angle shower enclosure — Baja Glass Las Vegas",
              headline: "Glass That Stays Pristine in Las Vegas Water",
              body: "Las Vegas water is among the hardest in the country. Untreated glass develops mineral deposits within weeks. Our hydrophobic glass treatment bonds to the surface at a molecular level, causing water to bead and roll off rather than film and deposit. Less cleaning. More clarity. A finish that holds up to the desert.",
              badge: "Hydrophobic Treatment",
              reverse: false
            },
          ].map(({ image, alt, headline, body, badge, reverse }) => (
            <div key={headline} className={`py-16 ${reverse ? "bg-background" : "bg-secondary/20"}`}>
              <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${reverse ? "lg:flex-row-reverse" : ""}`}>
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                      <OptimizedImage src={image} alt={alt} width={800} height={600} sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                    </div>
                  </div>
                  <div className={reverse ? "lg:order-1" : ""}>
                    <span className="inline-block bg-charcoal text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                      {badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-5 leading-tight">{headline}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">{body}</p>
                    <Button
                      onClick={scrollToConsultation}
                      className="bg-charcoal hover:bg-charcoal/90 text-white font-semibold px-8 py-5 rounded-lg shadow-lg transition-all duration-200"
                    >
                      Schedule a Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── 5. FEATURES GRID ────────────────────────────────────────────── */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-3">Why Baja Glass</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                The Standard Your Bathroom Deserves
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {features.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 group-hover:bg-white/20 rounded-xl mb-4 transition-colors duration-200">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-white text-sm mb-1 leading-snug">{label}</p>
                  <p className="text-white/50 text-xs leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. MID-PAGE CTA + PROOF ─────────────────────────────────────── */}
        <section className="py-20 bg-background border-y border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-4">Our Commitment</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal max-w-3xl mx-auto mb-6 leading-tight">
              Most Las Vegas glass companies install what they stock.<br className="hidden md:block" /> We fabricate what your bathroom requires.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Every panel is cut to your exact measurements in our Las Vegas shop. We do not install doors purchased from big-box stores, and we never will.
            </p>
            <Button
              onClick={scrollToConsultation}
              className="bg-charcoal hover:bg-charcoal/90 text-white font-semibold text-lg px-10 py-6 rounded-lg shadow-xl transition-all duration-200 mb-8"
            >
              Schedule a Consultation
            </Button>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Stars />
              <span className="font-semibold text-charcoal">Licensed &amp; Insured</span>
              
            </div>
          </div>
        </section>

        {/* ── 7. WHAT'S INCLUDED ──────────────────────────────────────────── */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">No Surprises</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">What Every Project Includes</h2>
                <p className="text-muted-foreground text-lg">We are transparent about what you get. No hidden charges, no upsell surprises.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-background rounded-xl p-5 shadow-sm border border-border">
                    <div className="flex-shrink-0 w-6 h-6 bg-charcoal rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-charcoal font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. SOCIAL PROOF — testimonials ──────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Client Stories</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Heard from Las Vegas Clients
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map(({ name, location, service, rating, text }) => (
                <div key={name} className="bg-secondary/30 rounded-2xl p-8 flex flex-col">
                  <Stars count={rating} />
                  <p className="text-charcoal leading-relaxed mt-4 mb-6 flex-1 italic">"{text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-charcoal">{name}</p>
                    <p className="text-sm text-muted-foreground">{location}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. GALLERY STRIP ────────────────────────────────────────────── */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Our Work</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Installed Across the Las Vegas Valley
              </h2>
              <p className="text-muted-foreground text-lg">Click any image to view in full detail.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => openLightbox(i)}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2 shadow-md hover:shadow-xl transition-shadow duration-300"
                  aria-label={`View ${img.caption}`}
                >
                  <OptimizedImage
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium leading-snug">{img.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Lightbox — lazy-loaded on first open so radix-dialog stays out of the LP's initial JS */}
          {lightboxIndex !== null && (
            <Suspense fallback={null}>
              <PortfolioLightbox
                images={galleryImages}
                index={lightboxIndex}
                onClose={closeLightbox}
                onPrev={prevImage}
                onNext={nextImage}
              />
            </Suspense>
          )}
        </section>

        {/* ── 10. COMPARISON TABLE ────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Why It Matters</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Not All Glass Companies Are Equal
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Your bathroom should be held to the same standard as the rest of your space — finished with glass that's built for it.
              </p>
            </div>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground w-1/2" />
                    <th className="text-center py-4 px-4 bg-charcoal text-white rounded-t-xl text-sm font-bold">
                      Baja Glass
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground">Big-Box Store</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground">Generic Installer</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ feature, baja, bigBox, generic }, i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-secondary/20" : "bg-background"}>
                      <td className="py-3.5 px-4 text-sm text-charcoal font-medium">{feature}</td>
                      <td className="py-3.5 px-4 text-center bg-charcoal/5 border-x border-charcoal/10">
                        <ComparisonCell value={baja} />
                      </td>
                      <td className="py-3.5 px-4 text-center"><ComparisonCell value={bigBox} /></td>
                      <td className="py-3.5 px-4 text-center"><ComparisonCell value={generic} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 11. FAQ ─────────────────────────────────────────────────────── */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Your Questions</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">Frequently Asked</h2>
              </div>
              <div className="space-y-3">
                {faqs.map(({ q, a }, i) => (
                  <div key={q} className="bg-background rounded-xl border border-border overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 font-semibold text-charcoal hover:bg-secondary/30 transition-colors duration-200"
                      aria-expanded={openFaq === i}
                    >
                      <span className="leading-snug">{q}</span>
                      <span className={`flex-shrink-0 text-xl font-light transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                        {a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. FINAL CTA ───────────────────────────────────────────────── */}
        <section
          ref={finalCTARef}
          className="py-24 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal text-white relative overflow-hidden"
        >
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

              {/* Left — emotive copy */}
              <div>
                <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">Private Consultation</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-6">
                  Your Bathroom Deserves Glass Built to the Same Standard
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Schedule a private on-site consultation. We'll bring glass samples, take measurements, and walk you through every option — at your convenience. No showroom visit. No pressure. Just expertise.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {["C8 Licensed", "Bonded & Insured", "First Responder Owned", "20+ Years Experience"].map((badge) => (
                    <span key={badge} className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Contact info */}
                <div className="space-y-4">
                  <a href={PHONE_HREF} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wide">Call or Text</p>
                      <p className="font-semibold">{PHONE}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-white/70">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wide">Business Hours</p>
                      <p className="font-medium">Mon – Fri · 8:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-charcoal mb-2 text-center">Schedule Your Consultation</h3>
                <p className="text-sm text-muted-foreground text-center mb-6">We respond within one business day.</p>
                <ConsultationForm id="luxury-lp-final-form" />
              </div>

            </div>
          </div>
        </section>

        {/* Minimal footer */}
        <footer className="bg-charcoal border-t border-white/10 text-white/50 py-5 text-center text-xs">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Baja Glass &amp; Mirror LLC · C8 Licensed · 4280 W Reno Ave Ste A, Las Vegas, NV 89118 · {PHONE}</p>
            <p className="mt-1">
              <a href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              {" · "}
              <a href="/terms-of-service" className="hover:text-white/70 transition-colors">Terms of Service</a>
            </p>
          </div>
        </footer>

      </div>

      <StickyMobileCTA onQuoteClick={scrollToConsultation} />
    </>
  );
};

export default LuxuryShowerEnclosuresLanding;
