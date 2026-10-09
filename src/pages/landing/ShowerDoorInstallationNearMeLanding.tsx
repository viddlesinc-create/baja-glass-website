import { useRef, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Star,
  Check,
  Shield,
  Award,
  Clock,
  MapPin,
  Ruler,
  FileText,
  Wrench,
  Hammer,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import HeroImagePreload from "@/components/HeroImagePreload";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
const PortfolioLightbox = lazy(() => import("@/components/landing/PortfolioLightbox"));
import { trackFormSubmission, trackPhoneCall } from "@/lib/analytics";

// ─── Data ────────────────────────────────────────────────────────────────────

const PHONE = "(702) 383-0779";
const PHONE_HREF = "tel:+17023830779";
const FORMSPREE = "https://formspree.io/f/xqaydjpg";

const galleryImages = [
  {
    src: "/images/custom-neo-angle-shower-enclosure.webp",
    alt: "Frameless shower door installation by Baja Glass — Las Vegas",
    caption: "Frameless install — Las Vegas"
  },
  {
    src: "/images/corner-shower-enclosure-black-hardware.webp",
    alt: "Custom neo-angle shower install — Baja Glass Las Vegas",
    caption: "Custom neo-angle install"
  },
  {
    src: "/images/bypass-sliding-shower-doors-completed-project-2.webp",
    alt: "Frameless shower door install with low-iron glass — Baja Glass",
    caption: "Low-iron glass, completed install"
  },
  {
    src: "/images/completed-steam-shower-enclosure-3.webp",
    alt: "Frameless shower door with brushed nickel hardware — installed by Baja Glass",
    caption: "Brushed nickel — installed in Henderson"
  },
  {
    src: "/images/custom-corner-shower-enclosure-brushed-nickel.webp",
    alt: "Matte black shower hardware install — Baja Glass Las Vegas",
    caption: "Matte black hardware install"
  },
  {
    src: "/images/bypass-sliding-glass-doors.webp",
    alt: "Frameless inline shower install — Baja Glass",
    caption: "Frameless inline panel install"
  },
];

// TODO(owner): repopulate with REAL verified Google reviews. The previous entries
// were placeholder copy, not genuine customer reviews, and were removed.
const reviews: Array<{ name: string; location?: string; rating?: number; service?: string; text?: string; quote?: string; city?: string }> = [];

const features = [
  { icon: Shield, label: "C8 Glass & Glazing License", sub: "Nevada State Contractors Board" },
  { icon: Award, label: "Bonded & Insured", sub: "Full coverage on every install" },
  { icon: UserCheck, label: "Licensed Installer On-Site", sub: "Not a contractor — the installer" },
  { icon: Clock, label: "Free On-Site Measure in 24h", sub: "Most days, same-week appointments" },
  { icon: MapPin, label: "Local to Las Vegas + Henderson", sub: "15-minute callbacks, not 3 weeks" },
  { icon: Wrench, label: "One-Day Install", sub: "Standard doors finished in half a day" },
  { icon: Star, label: "Las Vegas Since 2009", sub: "Licensed, bonded and insured" },
  { icon: Shield, label: "1-Year Parts & Labor Warranty", sub: "Plus lifetime hardware warranty" },
];

const includedItems = [
  "Free on-site measurement (no obligation)",
  "Exact written quote — no ballpark, no surprises",
  "Custom glass fabrication in our Las Vegas shop",
  "All hardware: hinges, handles, clips, U-channel",
  "Professional installation by a licensed installer",
  "Caulking, sealing, and waterproofing",
  "Removal & disposal of old shower door",
  "Full site cleanup",
  "Walkthrough of operation + glass-care instructions",
  "1-year parts & labor warranty",
  "Lifetime hardware warranty",
  "Permits handled when required",
];

const faqs = [
  {
    q: "How long does installation take?",
    a: "Most standard shower door installations take a single half-day on site — usually 2 to 4 hours from the moment we arrive to the final cleanup. Steam enclosures and large multi-panel custom builds may take a full day. You'll have a fully functional, installed shower door before our crew leaves."
  },
  {
    q: "Do you handle permits?",
    a: "Yes — when permits are required for your project (typically for steam shower installs and certain new-construction situations), we handle the permitting process with Clark County or the appropriate jurisdiction. For straightforward replacement installs, no permit is required in most cases. We confirm permitting needs during your free on-site measure."
  },
  {
    q: "What's included in the quote?",
    a: "Everything. Custom glass fabrication, all hardware, professional installation, caulking and waterproofing, removal of your old shower door, full site cleanup, and a written 1-year parts and labor warranty. No hidden upsells, no day-of-install surprises. The number on your quote is the number you pay."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Baja Glass & Mirror LLC holds a C8 Glass and Glazing license from the Nevada State Contractors Board, and we carry general liability and workers' compensation insurance. We provide documentation before any job starts — ask and we'll send it over."
  },
  {
    q: "How fast can you come measure?",
    a: "Most on-site measurement appointments are scheduled within 24 hours of your first call. Same-week installation slots are typically available Monday through Friday."
  },
  {
    q: "What areas do you serve?",
    a: "Las Vegas, Henderson, Summerlin, North Las Vegas, Boulder City, Paradise, Spring Valley, Enterprise, and Green Valley. If you're in Clark County, call us — we likely cover your area."
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

// ─── Contact Form ─────────────────────────────────────────────────────────────

function MeasureForm({ id }: { id: string }) {
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
      trackFormSubmission({ source: "lp_shower_door_installation_near_me" });
      setSubmitted(true);
    } catch {
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
        <h3 className="text-xl font-bold text-charcoal mb-2">Measure Request Received</h3>
        <p className="text-muted-foreground mb-4">
          A licensed installer (not a salesperson) will call you to confirm your on-site measure within 4 business hours.
        </p>
        <p className="text-charcoal font-semibold">Need to talk now?</p>
        <a href={PHONE_HREF} onClick={() => trackPhoneCall("form_success")} className="text-red-600 font-bold text-lg hover:underline">{PHONE}</a>
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
        <label className="block text-sm font-medium text-charcoal mb-1">Email *</label>
        <input name="email" type="email" required placeholder="you@email.com" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal" />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">ZIP Code *</label>
        <input name="zip" required placeholder="89118" maxLength={5} pattern="[0-9]{5}" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal" />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">What needs installing? *</label>
        <textarea name="message" rows={3} required placeholder="e.g. Frameless shower door, replacing an old framed door, custom enclosure for a remodel..." className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal resize-none" />
      </div>
      <input type="hidden" name="_subject" value="Free On-Site Measure Request — Near-Me LP" />
      <input type="hidden" name="source_lp" value="/lp/shower-door-installation-near-me" />
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-charcoal hover:bg-charcoal/90 text-white text-base font-semibold py-6 rounded-lg shadow-lg transition-all duration-200"
      >
        {loading ? "Sending…" : "Schedule My Free Measure"}
      </Button>
      <p className="text-xs text-center text-muted-foreground">Licensed installer calls back within 4 business hours.</p>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const ShowerDoorInstallationNearMeLanding = () => {
  const finalCTARef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToForm = () => finalCTARef.current?.scrollIntoView({ behavior: "smooth" });
  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));
  const nextImage = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % galleryImages.length));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bajaglass.com/lp/shower-door-installation-near-me#service",
        name: "Shower Door Installation",
        description:
          "Local Las Vegas shower door installation by licensed, insured installers. Free on-site measurement in 24 hours, custom fabrication, one-day install.",
        serviceType: "Shower Door Installation",
        provider: { "@type": "LocalBusiness", "@id": "https://bajaglass.com/#localbusiness" },
        areaServed: [
          { "@type": "City", name: "Las Vegas", addressRegion: "NV" },
          { "@type": "City", name: "Henderson", addressRegion: "NV" },
          { "@type": "City", name: "Summerlin", addressRegion: "NV" },
          { "@type": "City", name: "North Las Vegas", addressRegion: "NV" },
          { "@type": "City", name: "Paradise", addressRegion: "NV" },
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://bajaglass.com/#localbusiness",
        name: "Baja Glass & Mirror LLC",
        url: "https://bajaglass.com",
        telephone: PHONE,
        address: {
          "@type": "PostalAddress",
          streetAddress: "4280 W Reno Ave Ste A",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89118",
          addressCountry: "US"
        },
        geo: { "@type": "GeoCoordinates", latitude: 36.097781, longitude: -115.197234 },
        priceRange: "$$"
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a }
        }))
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Las Vegas Shower Door Installation — Free On-Site Measure in 24h | Baja Glass</title>
        <meta
          name="description"
          content="Local Las Vegas shower door installers. Free on-site measure in 24 hours, exact written quote, one-day install. Licensed C8, bonded & insured. Call (702) 383-0779."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://bajaglass.com/lp/shower-door-installation-near-me" />
        <meta property="og:title" content="Las Vegas Shower Door Installation — Free On-Site Measure | Baja Glass" />
        <meta property="og:description" content="Licensed local installers. Free on-site measure in 24 hours. Call (702) 383-0779." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/lp/shower-door-installation-near-me" />
        <meta property="og:image" content="https://bajaglass.com/images/custom-neo-angle-shower-enclosure.webp" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <HeroImagePreload src="/images/custom-neo-angle-shower-enclosure.webp" width={1414} />
            <OptimizedImage
              src="/images/custom-neo-angle-shower-enclosure.webp"
              alt="Las Vegas shower door installation in progress — Baja Glass licensed installer"
              width={1414}
              height={1650}
              sizes="100vw"
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/40" />
          </div>

          <div className="relative container mx-auto px-4 py-20 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  Licensed Installer · Local to Las Vegas · Since 2009
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-xl">
                Las Vegas Shower Door Installation
                <span className="block text-white/90 mt-2 text-3xl md:text-4xl lg:text-5xl">
                  Free On-Site Measure in 24h
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-4 max-w-xl">
                A licensed installer — not a salesperson — comes to your bathroom, measures the actual space, and leaves you with an exact written quote.
              </p>
              <p className="text-base text-white/70 mb-10 max-w-xl">
                Most standard doors installed in a single half-day. Serving Las Vegas, Henderson, and the entire Clark County valley.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToForm}
                  className="bg-white text-charcoal hover:bg-white/90 font-semibold text-base px-8 py-6 rounded-lg shadow-xl transition-all duration-200 hover:shadow-2xl"
                >
                  Schedule My Free Measure
                </Button>
                <a
                  href={PHONE_HREF}
                  onClick={() => trackPhoneCall("hero")}
                  className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 font-medium text-base px-8 py-6 rounded-lg transition-all duration-200 backdrop-blur-sm"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. PROOF BAR ────────────────────────────────────────────────── */}
        <section className="bg-charcoal py-5 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="font-semibold">Since 2009</span>
                <span className="text-white/50">· 4.7★ on Google</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>C8 Licensed Glass &amp; Glazing</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>Bonded &amp; Insured</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>Local Since 2009</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="text-white/60 text-xs">Serving Las Vegas &amp; Henderson</span>
            </div>
          </div>
        </section>

        {/* ── 3. PROCESS — 4-step timeline ────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">The Process</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                How Our Installation Process Works
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                From your first call to a finished, watertight install — here's exactly how it runs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { day: "Day 1", title: "Measure", desc: "Licensed installer visits your bathroom. Exact written quote — no ballpark, no surprises.", icon: Ruler },
                { day: "Day 3", title: "Quote", desc: "Quote in hand. Approve it, and we order glass + lock in your install date.", icon: FileText },
                { day: "Day 7", title: "Fabricate", desc: "Your custom glass is cut, tempered, and polished in our Las Vegas shop.", icon: Hammer },
                { day: "Day 10", title: "Install", desc: "One half-day install. Caulked, sealed, cleaned up — fully usable that night.", icon: Wrench },
              ].map(({ day, title, desc, icon: Icon }, i) => (
                <div key={day} className="relative text-center">
                  <div className="bg-red-600 text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full inline-block mb-4">
                    {day}
                  </div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal rounded-2xl mb-4 shadow-lg">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-charcoal mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-20 left-full w-6 border-t-2 border-dashed border-border -translate-x-3 -translate-y-0.5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SERVICE AREA ─────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <MapPin className="h-10 w-10 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Serving Las Vegas &amp; Henderson
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                We install across the entire Las Vegas valley — most appointments scheduled within 24 hours of your first call.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-3xl mx-auto">
                {[
                  "Las Vegas",
                  "Henderson",
                  "Summerlin",
                  "North Las Vegas",
                  "Paradise",
                  "Spring Valley",
                  "Enterprise",
                  "Green Valley",
                  "Boulder City",
                ].map((city) => (
                  <span key={city} className="bg-secondary/40 text-charcoal text-sm font-medium px-4 py-2 rounded-full border border-border">
                    {city}
                  </span>
                ))}
              </div>
              <div className="aspect-[16/8] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d206607.21358928223!2d-115.31163485!3d36.12164395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1710000000000"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baja Glass service area — Las Vegas and Henderson"
                />
              </div>
              <p className="mt-6 text-muted-foreground">
                Not sure if we cover your ZIP? Call{" "}
                <a href={PHONE_HREF} className="text-red-600 font-semibold hover:underline">{PHONE}</a>
                {" "}— if you're in Clark County, we likely do.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. WHAT'S INCLUDED ──────────────────────────────────────────── */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">No Surprises</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">What Every Install Includes</h2>
                <p className="text-muted-foreground text-lg">
                  The number on your quote is the number you pay. Period.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includedItems.map((item) => (
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

        {/* ── 7. FEATURES GRID ────────────────────────────────────────────── */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-3">Why Baja Glass</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Local Installers, Real Accountability
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

        {/* ── 8. REVIEWS ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Real Reviews</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                What Las Vegas Customers Say
              </h2>
              <div className="flex items-center justify-center gap-2">
                <Stars />
                <span className="font-semibold text-charcoal">Licensed &amp; Insured</span>
                
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map(({ name, location, service, rating, text }) => (
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

        {/* ── 9. GALLERY ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Recent Installs</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Installed Across the Valley
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
                  <OptimizedImage src={img.src} alt={img.alt} width={800} height={600} sizes="(min-width: 768px) 33vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </button>
              ))}
            </div>
          </div>

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

        {/* ── 10. FAQ ─────────────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Your Questions</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">Frequently Asked</h2>
              </div>
              <div className="space-y-3">
                {faqs.map(({ q, a }, i) => (
                  <div key={q} className="bg-secondary/20 rounded-xl border border-border overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 font-semibold text-charcoal hover:bg-secondary/40 transition-colors duration-200"
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

        {/* ── 11. FINAL CTA ───────────────────────────────────────────────── */}
        <section
          ref={finalCTARef}
          className="py-24 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div>
                <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">Free On-Site Measure</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-6">
                  Get an Exact, Written Quote — Usually Same Week
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Submit the form or call us directly. A licensed installer (not a salesperson) will be at your bathroom within 24 hours to measure and quote — at no cost, with no obligation.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {["C8 Licensed", "Bonded & Insured", "Serving Las Vegas Since 2009", "First Responder Owned"].map((badge) => (
                    <span key={badge} className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <a href={PHONE_HREF} onClick={() => trackPhoneCall("final_cta")} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
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

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-charcoal mb-2 text-center">Schedule My Free Measure</h3>
                <p className="text-sm text-muted-foreground text-center mb-6">Installer calls back within 4 business hours.</p>
                <MeasureForm id="near-me-lp-final-form" />
              </div>
            </div>
          </div>
        </section>

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

      <StickyMobileCTA onQuoteClick={scrollToForm} />
    </>
  );
};

export default ShowerDoorInstallationNearMeLanding;
