import { useRef, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Star,
  Check,
  Shield,
  Award,
  Clock,
  Droplets,
  Layers,
  Wrench,
  Zap,
  Thermometer,
  Ruler,
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
    alt: "Custom steam shower enclosure with frameless glass — Baja Glass Las Vegas",
    caption: "Finished steam enclosure — frameless, vapor-tight"
  },
  {
    src: "/images/bypass-sliding-shower-doors-completed-project-2.webp",
    alt: "Steam shower with low-iron ultra-clear glass — Baja Glass",
    caption: "Low-iron glass keeps the tile work visible through steam"
  },
  {
    src: "/images/custom-corner-shower-enclosure-brushed-nickel.webp",
    alt: "Custom steam shower with built-in bench — Baja Glass Las Vegas",
    caption: "Built-in bench, sloped ceiling, matte black hardware"
  },
  {
    src: "/images/corner-shower-enclosure-black-hardware.webp",
    alt: "Neo-angle steam enclosure with full ceiling panel — Baja Glass",
    caption: "Neo-angle enclosure with full ceiling panel"
  },
  {
    src: "/images/completed-steam-shower-enclosure-3.webp",
    alt: "Steam shower glass door with brushed nickel transom — Baja Glass",
    caption: "Brushed nickel transom + gasketed steam door"
  },
  {
    src: "/images/bypass-sliding-glass-doors.webp",
    alt: "Frameless steam shower enclosure detail — Baja Glass",
    caption: "Vapor-tight seal detail"
  },
];

const buildSpecs = [
  {
    icon: Layers,
    title: "Vapor-tight frameless glass enclosure",
    body: "Full ceiling panel, heavy 3/8\" or 1/2\" tempered glass, vapor-rated gasketing on every edge. Steam stays in, hardware stays dry."
  },
  {
    icon: Zap,
    title: "Steam generator placement + sizing",
    body: "Generator KW is sized to your room's cubic footage and tile R-value. We coordinate placement — closet, vanity bay, attic — for short pipe runs and quiet operation."
  },
  {
    icon: Thermometer,
    title: "Ceiling slope for condensation control",
    body: "Steam ceilings need a 2-inch slope per foot so condensation runs off instead of dripping on you. We coordinate this with the tile installer before glass is fabricated."
  },
  {
    icon: Droplets,
    title: "Tile waterproofing + pan",
    body: "Schluter Kerdi or equivalent waterproof membrane behind every tile, sloped curbless or low-curb pan, properly flashed niches. The glass is only as good as the box it seals."
  },
  {
    icon: Wrench,
    title: "Electrical + plumbing integration",
    body: "240V circuit for the generator, dedicated water line, condensate drain, control valve and aromatherapy port locations. We coordinate directly with your electrician and plumber."
  },
];

const caseStudy = {
  location: "Summerlin, Las Vegas",
  size: "5' × 7' walk-in",
  generator: "9 KW SteamSpa",
  finalCost: "$11,400",
  photos: [
    { src: "/images/custom-corner-shower-enclosure-brushed-nickel.webp", caption: "Rough-in: 240V circuit, water line, condensate drain" },
    { src: "/images/bypass-sliding-shower-doors-completed-project-2.webp", caption: "Waterproofing: Schluter Kerdi behind every tile" },
    { src: "/images/corner-shower-enclosure-black-hardware.webp", caption: "Tile-set with sloped ceiling for condensation control" },
    { src: "/images/custom-neo-angle-shower-enclosure.webp", caption: "Generator installed in adjacent linen closet" },
    { src: "/images/bypass-sliding-glass-doors.webp", caption: "Frameless glass with full ceiling panel + transom" },
    { src: "/images/completed-steam-shower-enclosure-3.webp", caption: "Beauty shot: matte black hardware, low-iron glass" },
  ],
};

const timelineSteps = [
  { range: "Days 1–3", title: "Design + Quote", desc: "On-site assessment with your contractor. Generator sizing, ceiling slope plan, glass spec. Written quote." },
  { range: "Days 4–10", title: "Rough-in", desc: "Electrician runs 240V circuit, plumber sets water + condensate lines, framer adjusts ceiling slope." },
  { range: "Days 11–16", title: "Waterproof + Tile", desc: "Schluter membrane, sloped pan, tile-set. Niches flashed, curb (or curbless) detail finished." },
  { range: "Days 17–18", title: "Generator + Mech", desc: "Steam generator mounted, plumbed, wired. Control valve, aromatherapy port, light installed." },
  { range: "Days 19–20", title: "Glass Template + Fab", desc: "We template the finished tile to the millimeter. Custom glass + ceiling panel cut, tempered, gasketed in our LV shop." },
  { range: "Day 21", title: "Install + Commission", desc: "Glass + ceiling install, vapor-tight seal, generator commissioning, your first 30-minute test run. Done." },
];

const includedItems = [
  "Design consultation with your GC and tile installer",
  "Steam generator sizing (KW calculation by cubic ft + tile R-value)",
  "Generator placement plan (short runs, quiet operation)",
  "Custom heavy-glass enclosure with full ceiling panel",
  "Vapor-rated gasketing on every panel edge",
  "Transom + steam-rated hinges and hardware",
  "Coordination with your electrician + plumber",
  "Permit handling with Clark County when required",
  "On-site commissioning + 30-minute test run",
  "1-year parts & labor warranty",
  "Lifetime hardware warranty",
];

const faqs = [
  {
    q: "Is my bathroom big enough for a steam shower?",
    a: "Most steam showers work in a footprint of 30 cubic feet or more — roughly a 3' × 3' × 7' enclosure at minimum. We measure your space, calculate cubic footage, and confirm whether your room can hold steam properly before quoting. If it's tight, we'll tell you up front — we don't build steam rooms that won't work."
  },
  {
    q: "Do I need new plumbing for a steam shower?",
    a: "Yes — typically. A steam generator requires a dedicated cold water line, a condensate drain, and access to the existing hot/cold mixing valve. We coordinate directly with your plumber so the rough-in is right the first time. If your bathroom is being remodeled, this is the right moment to do it."
  },
  {
    q: "How long does the install take?",
    a: "From rough-in to commissioning, a full steam shower build runs about 21 days — the bulk of which is tile + waterproofing work. Our part (glass templating, fabrication, install, and generator commissioning) is the last 3–4 days of that timeline. Standalone retrofits (everything else is done) take about 5 working days."
  },
  {
    q: "What permits are needed?",
    a: "Steam shower installs in Clark County typically require electrical and plumbing permits — the 240V circuit for the generator and the water/condensate work both trigger inspections. We handle permit pulling and inspection scheduling. Glass installation itself doesn't require a separate permit."
  },
  {
    q: "What does a typical steam shower cost?",
    a: "Most steam showers install for $5,000–$12,000 depending on size, generator KW, tile complexity, and finish selections. Larger custom builds with full ceiling panels, aromatherapy, chromotherapy lighting, and high-end fixtures run $12,000–$18,000. Your written quote breaks every line item out — no ballparks."
  },
  {
    q: "Can you do this as a retrofit, or only in a full remodel?",
    a: "Both. The cleanest path is during a full bathroom remodel — that's when waterproofing, ceiling slope, and electrical can all be done right. But if your bathroom is already tiled and watertight, we can often retrofit a steam enclosure and generator with minimal demo. We'll tell you which path makes sense after the on-site measure."
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

function ConsultForm({ id }: { id: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch(FORMSPREE, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (response.ok) {
        fetch("https://hook.us2.make.com/gfxiblklsuwae888toxx4nue58bgte6w", {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        }).catch(() => {});
        if (typeof (window as any).fbq === "function") (window as any).fbq("track", "Lead");
        trackFormSubmission({ source: "lp_steam_shower_installation_lv", projectType: "steam_shower" });
      }
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
        <h3 className="text-xl font-bold text-charcoal mb-2">Design Consult Request Received</h3>
        <p className="text-muted-foreground mb-4">
          We'll call within one business day to schedule your on-site assessment.
        </p>
        <p className="text-charcoal font-semibold">Questions in the meantime?</p>
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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">ZIP *</label>
          <input name="zip" required placeholder="89118" maxLength={5} pattern="[0-9]{5}" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal" />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Project Type *</label>
          <select name="project_type" required className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal bg-background">
            <option value="">Select…</option>
            <option value="new_remodel">New bathroom remodel</option>
            <option value="retrofit">Retrofit into existing bathroom</option>
            <option value="not_sure">Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Project Description *</label>
        <textarea name="message" rows={3} required placeholder="Approximate size, current state, timeline, anything else we should know…" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal resize-none" />
      </div>
      <input type="hidden" name="_subject" value="Steam Shower Design Consult Request" />
      <input type="hidden" name="source_lp" value="/lp/steam-shower-installation-lv" />
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-charcoal hover:bg-charcoal/90 text-white text-base font-semibold py-6 rounded-lg shadow-lg transition-all duration-200"
      >
        {loading ? "Sending…" : "Schedule My Free Design Consult"}
      </Button>
      <p className="text-xs text-center text-muted-foreground">We respond within one business day.</p>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const SteamShowerInstallationLVLanding = () => {
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
        "@id": "https://bajaglass.com/lp/steam-shower-installation-lv#service",
        name: "Custom Steam Shower Installation",
        description:
          "Custom steam shower design and installation in Las Vegas. Vapor-tight frameless glass enclosures, generator sizing, full mechanical coordination. C8 licensed.",
        serviceType: "Steam Shower Installation",
        provider: { "@type": "LocalBusiness", "@id": "https://bajaglass.com/#localbusiness" },
        areaServed: [
          { "@type": "Place", name: "Las Vegas, NV" },
          { "@type": "Place", name: "Henderson, NV" },
          { "@type": "Place", name: "Summerlin, Las Vegas, NV" },
        ],
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: "5000",
            maxPrice: "18000"
          },
        }
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
        priceRange: "$$$"
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
        <title>Custom Steam Shower Installation, Las Vegas | From $5,000 | Baja Glass</title>
        <meta
          name="description"
          content="Las Vegas custom steam shower installation. Vapor-tight frameless glass, generator sizing, full mechanical coordination. Most install for $5,000–$12,000. Call (702) 383-0779."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://bajaglass.com/lp/steam-shower-installation-lv" />
        <meta property="og:title" content="Custom Steam Shower Installation, Las Vegas | Baja Glass" />
        <meta property="og:description" content="Vapor-tight frameless steam enclosures. Generator sizing, ceiling slope, waterproofing. From $5,000." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/lp/steam-shower-installation-lv" />
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
              alt="Custom steam shower installation with vapor-tight frameless glass — Baja Glass Las Vegas"
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
                  C8 Licensed · Steam-Rated Glazing Specialists
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-xl">
                Custom Steam Shower Installation, Las Vegas
                <span className="block text-white/90 mt-2 text-2xl md:text-3xl lg:text-4xl">
                  From Design to Tile-Set
                </span>
              </h1>

              <div className="inline-block bg-red-600/95 text-white text-base md:text-lg font-bold px-5 py-2.5 rounded-lg mb-6 shadow-lg">
                Most steam showers install for $5,000–$12,000
              </div>

              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-xl">
                Full-build steam showers — vapor-tight frameless glass, generator sizing, ceiling slope, waterproofing, electrical and plumbing coordination. One specialist managing every spec that has to be right.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToForm}
                  className="bg-white text-charcoal hover:bg-white/90 font-semibold text-base px-8 py-6 rounded-lg shadow-xl transition-all duration-200 hover:shadow-2xl"
                >
                  Schedule My Free Design Consult
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
              <span>Steam-Rated Hardware</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>Permits Handled</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="text-white/60 text-xs">Serving Las Vegas &amp; Henderson</span>
            </div>
          </div>
        </section>

        {/* ── 3. BUILD SPECS ──────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">What We Build</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Five Specs That Have to Be Right
              </h2>
              <p className="text-muted-foreground text-lg">
                A steam shower fails or holds together based on five interlocking systems. We coordinate all five — most contractors leave at least two to chance.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {buildSpecs.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="flex items-start gap-5 bg-secondary/20 rounded-2xl p-6 border border-border">
                  <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center text-white font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <h3 className="text-lg font-serif font-bold text-charcoal leading-snug">{title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CASE STUDY ───────────────────────────────────────────────── */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Recent Project</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                  Summerlin Steam Build — From Rough-In to Test Run
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-background rounded-2xl p-6 border border-border">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                  <p className="font-bold text-charcoal">{caseStudy.location}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Size</p>
                  <p className="font-bold text-charcoal">{caseStudy.size}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Generator</p>
                  <p className="font-bold text-charcoal">{caseStudy.generator}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Final Cost</p>
                  <p className="font-bold text-red-600 text-lg">{caseStudy.finalCost}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. BUILD TIMELINE ───────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">21-Day Build</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Sample Build Timeline
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                A clean steam shower retrofit runs 21 working days. Full bathroom remodels run longer — we sequence around your other trades.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-3">
              {timelineSteps.map(({ range, title, desc }, i) => (
                <div key={range} className="flex items-start gap-4 bg-secondary/20 rounded-xl p-5 border border-border">
                  <div className="flex-shrink-0">
                    <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full whitespace-nowrap">
                      {range}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-charcoal mb-1">
                      <span className="text-red-600 font-mono mr-2">{String(i + 1).padStart(2, "0")}.</span>
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. WHAT'S INCLUDED ──────────────────────────────────────────── */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">No Surprises</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">What Every Steam Project Includes</h2>
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

        {/* ── 7. WHY BAJA — feature grid ──────────────────────────────────── */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-3">Why Baja Glass</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                The Right Specialist for Steam
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, label: "C8 Licensed", sub: "Nevada State Contractors Board" },
                { icon: Award, label: "Bonded & Insured", sub: "Full coverage on every build" },
                { icon: Layers, label: "Heavy Glass + Ceiling Panels", sub: "3/8\" or 1/2\" tempered" },
                { icon: Zap, label: "Generator Sizing Done Right", sub: "KW by cubic ft + R-value" },
                { icon: Thermometer, label: "Vapor-Rated Hardware", sub: "Hinges and gasketing built for steam" },
                { icon: Droplets, label: "Waterproofing Coordination", sub: "Schluter Kerdi standard" },
                { icon: Ruler, label: "Custom Templated", sub: "Glass measured to the millimeter" },
                { icon: Star, label: "Las Vegas Since 2009", sub: "Licensed, bonded and insured" },
              ].map(({ icon: Icon, label, sub }) => (
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

        {/* ── 8. GALLERY ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Our Work</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Steam Builds Across Las Vegas
              </h2>
              <p className="text-muted-foreground text-lg">Click any image to view full size.</p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium leading-snug">{img.caption}</p>
                  </div>
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

        {/* ── 9. FAQ ──────────────────────────────────────────────────────── */}
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

        {/* ── 10. FINAL CTA ───────────────────────────────────────────────── */}
        <section
          ref={finalCTARef}
          className="py-24 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div>
                <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">Free Design Consult</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-6">
                  Build the Steam Shower Right the First Time
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  We'll come out, measure the space, calculate generator KW, review your existing waterproofing and ceiling, and give you a written quote with every line item visible.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {["C8 Licensed", "Bonded & Insured", "Permits Handled", "21-Day Builds"].map((badge) => (
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
                <h3 className="text-xl font-bold text-charcoal mb-2 text-center">Schedule My Free Design Consult</h3>
                <p className="text-sm text-muted-foreground text-center mb-6">We respond within one business day.</p>
                <ConsultForm id="steam-lp-final-form" />
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

export default SteamShowerInstallationLVLanding;
