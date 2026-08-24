import { useRef, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Star,
  Check,
  Shield,
  Award,
  Layers,
  Ruler,
  Image as ImageIcon,
  Sparkles,
  Wrench,
  Camera,
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

const portfolio = [
  {
    src: "/lovable-uploads/dff9a879-f6db-4f4a-908d-2842b809c7e4.png",
    alt: "Custom walk-in shower enclosure with freestanding tub — Baja Glass Las Vegas",
    type: "Walk-In",
    caption: "Walk-in enclosure, frameless inline panel",
  },
  {
    src: "/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png",
    alt: "Custom neo-angle shower enclosure — Baja Glass",
    type: "Neo-Angle",
    caption: "Neo-angle, low-iron glass, polished chrome",
  },
  {
    src: "/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png",
    alt: "Custom alcove shower enclosure with low-iron glass — Baja Glass Las Vegas",
    type: "Alcove",
    caption: "Alcove enclosure, ultra-clear low-iron glass",
  },
  {
    src: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png",
    alt: "Custom corner shower enclosure with brushed nickel hardware — Baja Glass",
    type: "Corner",
    caption: "Corner enclosure, brushed nickel, 1/2\" tempered",
  },
  {
    src: "/lovable-uploads/b7a46310-552a-43ed-9ed5-89fb8e2cd2b0.png",
    alt: "Custom shower enclosure with matte black hardware and built-in bench — Baja Glass Las Vegas",
    type: "Walk-In",
    caption: "Walk-in with matte black hardware + built-in bench",
  },
  {
    src: "/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png",
    alt: "Custom inline shower enclosure with pebble accent — Baja Glass",
    type: "Inline",
    caption: "Frameless inline, pebble accent detail",
  },
];

const fitFeatures = [
  {
    icon: Ruler,
    title: "Measured to Your Bathroom — Not a Catalog",
    body: "Every wall in Las Vegas is a little out of square, every floor a little out of level, every ceiling a little different. We measure your actual space — including the angles nobody else checks — and fabricate to fit it. No shims, no caulk-to-fill-the-gap.",
  },
  {
    icon: Layers,
    title: "Heavy 3/8\" or 1/2\" Tempered Glass",
    body: "No 5/16\" \"good enough\" big-box glass. The glass that matters in a custom enclosure is heavy enough to feel like architecture — and stable enough to span large openings without flex.",
  },
  {
    icon: Sparkles,
    title: "Hand-Polished Edges Standard",
    body: "Every visible edge is hand-polished to a true flat polish — not the cheap arris bevel mass-production shops use. You feel the difference the first time you run a hand along the edge.",
  },
  {
    icon: Shield,
    title: "Lifetime Hardware Warranty",
    body: "Hinges, handles, clips, brackets — every piece of hardware we install carries a lifetime warranty. We can do that because we don't install economy hardware to begin with.",
  },
];

const includedItems = [
  "Free on-site measurement (no obligation)",
  "Send-us-photos quote option for fast preliminary pricing",
  "Custom CAD layout drawing of your enclosure",
  "Heavy 3/8\" or 1/2\" tempered glass",
  "Hand-polished edges on every visible surface",
  "Hardware finish matching to your existing fixtures",
  "Low-iron glass option (no green tint)",
  "Hydrophobic coating option (Las Vegas hard-water defense)",
  "Professional licensed installation",
  "Caulking, sealing, full site cleanup",
  "1-year parts & labor warranty",
  "Lifetime hardware warranty",
];

const reviews = [
  {
    name: "Robert Chen",
    location: "Las Vegas, NV",
    service: "Custom Shower Enclosure",
    rating: 5,
    text: "We hired Baja Glass for our bathroom remodel. The custom enclosure they designed fits perfectly and the matte black hardware matches our fixtures exactly. Great communication throughout — they understood exactly what the space needed.",
  },
  {
    name: "David Kim",
    location: "Las Vegas, NV",
    service: "Custom Enclosure",
    rating: 5,
    text: "Old bathroom had walls that were way out of square. They measured every angle, fabricated glass that fit perfectly, and the install looked like the bathroom was built around the glass. Worth every penny.",
  },
  {
    name: "Jennifer Martinez",
    location: "Henderson, NV",
    service: "Custom Walk-In",
    rating: 5,
    text: "The low-iron glass they recommended makes the tile work look incredible — you really notice the difference. Highly recommend.",
  },
];

const faqs = [
  {
    q: "What makes a shower enclosure \"custom\"?",
    a: "Three things: (1) the glass is cut to your exact opening, not an off-the-shelf size, (2) the configuration — inline, corner, neo-angle, walk-in, alcove — is whatever fits your bathroom rather than whatever's on the shelf, and (3) hardware finish, glass type, and door swing are selected to match your design. Nothing about a custom enclosure is pulled from a box.",
  },
  {
    q: "Can you build to an irregular space?",
    a: "Yes — that's most of what we do. Out-of-square walls, sloped ceilings, knee walls, half-walls, awkward plumbing locations. We template the actual space (or send photos for a preliminary look) and fabricate the glass to match. Templates fail in old Las Vegas bathrooms; custom fabrication doesn't.",
  },
  {
    q: "How much do custom enclosures cost?",
    a: "Most custom enclosures run $2,500–$6,500 depending on size, glass thickness, hardware finish, and any specialty glass options (low-iron, hydrophobic coating). Larger walk-in installs with heavy 1/2\" glass and premium hardware run $6,500–$12,000. We give you an exact written quote — no ballparks.",
  },
  {
    q: "How long from measure to install?",
    a: "Typically 10–14 business days. We measure on-site, fabricate the glass in our Las Vegas shop (5–10 days depending on glass type), and schedule installation at your convenience. Installation itself takes a single half-day for most enclosures.",
  },
  {
    q: "Can I just text you photos for a quote?",
    a: "Yes. For preliminary pricing, send us photos of your space using the form below or text them to (702) 383-0779. We can usually give you a price range within a business day. For a final quote, we still need to measure on-site — but the photo step lets you decide whether to schedule that measurement.",
  },
  {
    q: "What hardware finishes are available?",
    a: "Matte black, brushed nickel, polished chrome, satin brass, unlacquered brass, oil-rubbed bronze, and custom powder coat finishes. Every hinge, handle, clip, and towel bar is selected individually to match your existing plumbing fixtures and interior metalwork.",
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

function PhotoQuoteForm({ id }: { id: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileNames(Array.from(e.target.files ?? []).map((f) => f.name));
  };

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
        headers: { Accept: "application/json" },
      }).catch(() => {});
      if (typeof (window as any).fbq === "function") (window as any).fbq("track", "Lead");
      trackFormSubmission({ source: "lp_custom_shower_enclosures_lv", projectType: "custom_enclosure" });
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
        <h3 className="text-xl font-bold text-charcoal mb-2">Quote Request Received</h3>
        <p className="text-muted-foreground mb-4">
          We'll review your photos and reply with a preliminary quote within one business day.
        </p>
        <p className="text-charcoal font-semibold">Or text photos directly to:</p>
        <a href={PHONE_HREF} onClick={() => trackPhoneCall("form_success")} className="text-red-600 font-bold text-lg hover:underline">{PHONE}</a>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
          <input name="name" required placeholder="Your name" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-white text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-charcoal" />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Phone *</label>
          <input name="phone" type="tel" required placeholder="(702) 000-0000" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-white text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-charcoal" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Email *</label>
        <input name="email" type="email" required placeholder="you@email.com" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-white text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-charcoal" />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Bathroom Photos (optional, up to 5)</label>
        <label htmlFor={`${id}-files`} className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg px-4 py-6 cursor-pointer hover:border-charcoal/40 hover:bg-secondary/20 transition-colors">
          <Camera className="h-6 w-6 text-muted-foreground" />
          <span className="text-sm text-charcoal font-medium">Tap to add photos</span>
          <span className="text-xs text-muted-foreground">JPG, PNG, HEIC — up to 5 images</span>
          <input
            id={`${id}-files`}
            name="bathroom_photos"
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
        {fileNames.length > 0 && (
          <div className="mt-2 text-xs text-muted-foreground">
            <p className="font-semibold text-charcoal mb-1">{fileNames.length} photo(s) attached:</p>
            <ul className="list-disc list-inside space-y-0.5">
              {fileNames.map((n) => (<li key={n}>{n}</li>))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Tell us about the space *</label>
        <textarea name="message" rows={3} required placeholder="Approximate opening size, current state (new build, remodel, replacing existing), hardware finish you're considering…" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-white text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-charcoal resize-none" />
      </div>
      <input type="hidden" name="_subject" value="Custom Enclosure Photo Quote Request" />
      <input type="hidden" name="source_lp" value="/lp/custom-shower-enclosures-lv" />
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-charcoal hover:bg-charcoal/90 text-white text-base font-semibold py-6 rounded-lg shadow-lg transition-all duration-200"
      >
        {loading ? "Sending…" : "Send Photos, Get a Quote"}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        Prefer to text? Send photos to <a href={PHONE_HREF} onClick={() => trackPhoneCall("form_text_photos")} className="font-semibold text-charcoal hover:underline">{PHONE}</a>
      </p>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const CustomShowerEnclosuresLVLanding = () => {
  const finalCTARef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToForm = () => finalCTARef.current?.scrollIntoView({ behavior: "smooth" });
  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + portfolio.length) % portfolio.length));
  const nextImage = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % portfolio.length));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bajaglass.com/lp/custom-shower-enclosures-lv#service",
        name: "Custom Shower Enclosure Fabrication & Installation",
        description:
          "Custom-built shower enclosures in Las Vegas. Heavy tempered glass, hand-polished edges, hardware finish matching, fabricated to your bathroom. C8 licensed.",
        serviceType: "Custom Shower Enclosure",
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
            minPrice: "2500",
            maxPrice: "12000",
          },
        },
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
          addressCountry: "US",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          bestRating: "5",
          worstRating: "1",
          reviewCount: "42",
        },
        priceRange: "$$$",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Custom Shower Enclosures, Las Vegas — Built to Your Bathroom | Baja Glass</title>
        <meta
          name="description"
          content="Custom-built shower enclosures in Las Vegas — no off-the-shelf sizes. Heavy tempered glass, hand-polished edges, hardware finish matching. Send photos for a quote. Call (702) 383-0779."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://bajaglass.com/lp/custom-shower-enclosures-lv" />
        <meta property="og:title" content="Custom Shower Enclosures, Las Vegas | Baja Glass" />
        <meta property="og:description" content="Built to your bathroom. No off-the-shelf sizes. Heavy glass, hand-polished, lifetime hardware warranty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/lp/custom-shower-enclosures-lv" />
        <meta property="og:image" content="https://bajaglass.com/lovable-uploads/dff9a879-f6db-4f4a-908d-2842b809c7e4.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <HeroImagePreload src="/lovable-uploads/dff9a879-f6db-4f4a-908d-2842b809c7e4.png" width={1414} />
            <OptimizedImage
              src="/lovable-uploads/dff9a879-f6db-4f4a-908d-2842b809c7e4.png"
              alt="Custom shower enclosure built to fit a Las Vegas bathroom — Baja Glass"
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
                  C8 Licensed · No Off-the-Shelf Sizes
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-xl">
                Custom Shower Enclosures, Las Vegas
                <span className="block text-white/90 mt-2 text-3xl md:text-4xl lg:text-5xl">
                  Built to Your Bathroom
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-4 max-w-xl">
                Made to fit your bathroom. No off-the-shelf sizes, no template installs, no caulking-to-fill-the-gap. Heavy tempered glass, hand-polished edges, hardware finish matched to your fixtures.
              </p>
              <p className="text-base text-white/70 mb-10 max-w-xl">
                Send us photos for a preliminary quote — or schedule a free on-site measure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToForm}
                  className="bg-white text-charcoal hover:bg-white/90 font-semibold text-base px-8 py-6 rounded-lg shadow-xl transition-all duration-200 hover:shadow-2xl"
                >
                  Send Photos, Get a Quote
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
                <span className="font-semibold">4.7 Rated</span>
                <span className="text-white/50">· 42 Reviews</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>C8 Licensed Glass &amp; Glazing</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>20+ Years in Las Vegas</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span>Lifetime Hardware Warranty</span>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="text-white/60 text-xs">Serving Las Vegas &amp; Henderson</span>
            </div>
          </div>
        </section>

        {/* ── 3. PORTFOLIO ────────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Every Style. Every Configuration. Every Time Custom.
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Walk-in, corner, neo-angle, alcove, inline — whatever your bathroom needs. Click any image to view full size.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {portfolio.map((img, i) => (
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
                images={portfolio}
                index={lightboxIndex}
                onClose={closeLightbox}
                onPrev={prevImage}
                onNext={nextImage}
              />
            </Suspense>
          )}
        </section>

        {/* ── 4. MADE-TO-FIT FEATURES ─────────────────────────────────────── */}
        <section className="py-4 bg-secondary/20">
          {fitFeatures.map((f, idx) => (
            <div key={f.title} className={`py-16 ${idx % 2 === 0 ? "bg-secondary/20" : "bg-background"}`}>
              <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto`}>
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                      <OptimizedImage src={portfolio[idx % portfolio.length].src} alt={portfolio[idx % portfolio.length].alt} width={800} height={600} sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                    </div>
                  </div>
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center">
                        <f.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-red-600 uppercase">
                        {String(idx + 1).padStart(2, "0")} / 04
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-5 leading-tight">{f.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">{f.body}</p>
                    <Button
                      onClick={scrollToForm}
                      className="bg-charcoal hover:bg-charcoal/90 text-white font-semibold px-8 py-5 rounded-lg shadow-lg transition-all duration-200"
                    >
                      Send Photos, Get a Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── 5. WHAT'S INCLUDED ──────────────────────────────────────────── */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-3">What's Included</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Every Custom Enclosure Includes</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includedItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white/5 rounded-xl p-5 border border-white/10">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-white/90 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. REVIEWS ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">Client Stories</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Real Las Vegas Customers
              </h2>
              <div className="flex items-center justify-center gap-2">
                <Stars />
                <span className="font-semibold text-charcoal">4.7 / 5</span>
                <span className="text-muted-foreground">· 42 verified reviews</span>
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

        {/* ── 7. FAQ ──────────────────────────────────────────────────────── */}
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

        {/* ── 8. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          ref={finalCTARef}
          className="py-24 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div>
                <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">Send Photos, Get a Quote</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-6">
                  Skip the Estimator Visit. Start with Photos.
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Snap a few photos of your bathroom, attach them below (or text them to {PHONE}), and we'll send back a preliminary quote with options for glass thickness, hardware finish, and configuration. If the numbers work, we schedule a free on-site measure to finalize.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {["C8 Licensed", "Bonded & Insured", "Lifetime Hardware Warranty", "Hand-Polished Edges"].map((badge) => (
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
                      <p className="text-xs text-white/50 uppercase tracking-wide">Call or Text Photos</p>
                      <p className="font-semibold">{PHONE}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-white/70">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wide">Photo Quote Turnaround</p>
                      <p className="font-medium">Within one business day</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-charcoal mb-2 text-center">Send Photos, Get a Quote</h3>
                <p className="text-sm text-muted-foreground text-center mb-6">Preliminary quote within one business day.</p>
                <PhotoQuoteForm id="custom-encl-lp-final-form" />
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

export default CustomShowerEnclosuresLVLanding;
