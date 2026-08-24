import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Check,
  Star,
  Shield,
  Ruler,
  PencilRuler,
  Factory,
  Wrench,
  Camera,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import { trackFormSubmission, trackPhoneCall, trackCTAClick } from "@/lib/analytics";
import { BUSINESS, buildPageSchema, type Faq } from "@/data/business";

const PAGE_URL = "https://bajaglass.com/lp/frameless-shower-doors-lv";
const FORMSPREE = "https://formspree.io/f/xqaydjpg";
const MAKE_HOOK = "https://hook.us2.make.com/gfxiblklsuwae888toxx4nue58bgte6w";

// ─── Photography ─────────────────────────────────────────────────────────────
// All images are Baja Glass jobs. The three replacement pairs below were shot in
// the same bathrooms before and after — matching wallpaper, floor tile and robe
// hooks confirm it — which is why they can honestly be labelled before/after.

const HERO_IMAGE = "/lovable-uploads/2705e428-6ba5-4a64-91cc-bff916c3b8a6.png";
const HERO_SIZES = "(min-width: 1024px) 45vw, 100vw";

const replacementPairs = [
  {
    before: "/lovable-uploads/d11634ec-aaaf-4b5a-8965-c55508271ba6.png",
    beforeAlt:
      "Framed chrome shower door with obscure glass, before Baja Glass replaced it",
    after: "/lovable-uploads/80bee4d9-c735-44e2-a119-af93a8fb3b42.png",
    afterAlt:
      "The same bathroom after installation of a frameless rain glass shower door with matte black hardware",
    note: "Framed chrome and obscure glass swapped for a frameless rain glass door and panel on matte black clips.",
  },
  {
    before: "/lovable-uploads/f19ca6d2-815b-4ab6-a382-98fd01aa5aa8.png",
    beforeAlt:
      "Narrow framed shower door with pebbled obscure glass, before replacement by Baja Glass",
    after: "/lovable-uploads/e506c19b-db1e-4646-b5ad-edf8294038e6.png",
    afterAlt:
      "The same shower opening after installation of a frameless rain glass door on matte black hinges",
    note: "A single narrow opening — the frameless door reuses the same opening with no tile work.",
  },
  {
    before: "/lovable-uploads/2e898825-142f-4567-9fc4-5a925964be11.png",
    beforeAlt:
      "Framed chrome sliding shower door on a white surround, before replacement by Baja Glass",
    after: "/lovable-uploads/2ba2e0bd-d607-42f6-a362-4d8b14a39093.png",
    afterAlt:
      "The same alcove after installation of a frameless clear glass shower door and inline panel with chrome hardware",
    note: "Sliding tracks removed entirely and replaced with a clear frameless door and inline panel.",
  },
];

const galleryImages = [
  {
    src: "/lovable-uploads/432cd1dc-d89c-47a1-a43e-f3bdd4224115.png",
    alt: "Frameless corner shower enclosure with matte black hardware and a tiled bench, installed in Las Vegas",
    caption: "Frameless corner, matte black hardware",
  },
  {
    src: "/lovable-uploads/a50691ba-4b24-4d5c-a2be-06218e1dc667.png",
    alt: "Frameless clear glass shower door and inline panel with chrome hardware over a white shower pan",
    caption: "Clear glass door and inline panel",
  },
  {
    src: "/lovable-uploads/80bee4d9-c735-44e2-a119-af93a8fb3b42.png",
    alt: "Frameless rain glass shower door and panel on matte black clips",
    caption: "Rain glass, matte black clips",
  },
  {
    src: "/lovable-uploads/2705e428-6ba5-4a64-91cc-bff916c3b8a6.png",
    alt: "Frameless fixed glass panel on a walk-in shower with marble tile and a linear drain",
    caption: "Walk-in fixed panel, no door",
  },
  {
    src: "/lovable-uploads/e506c19b-db1e-4646-b5ad-edf8294038e6.png",
    alt: "Frameless rain glass shower door on matte black hinges in a Las Vegas bathroom",
    caption: "Rain glass on black hinges",
  },
  {
    src: "/lovable-uploads/2ba2e0bd-d607-42f6-a362-4d8b14a39093.png",
    alt: "Frameless clear glass shower door and panel with chrome clips above a low shower curb",
    caption: "Clear glass, chrome clips",
  },
];

// ─── Product data ────────────────────────────────────────────────────────────

const glassThickness = [
  {
    size: '3/8"',
    label: "Three-eighths inch",
    body: "The standard for frameless doors and the most common choice in Las Vegas homes. Rigid enough to hang from clips and hinges without a frame, light enough that a standard stud wall carries it with normal blocking. Suits most alcove and inline openings.",
    best: "Most standard openings up to roughly a single door plus one panel.",
  },
  {
    size: '1/2"',
    label: "Half inch",
    body: "Noticeably heavier and stiffer in the hand — the panel barely flexes when you swing the door. The extra mass is what people mean when they say a door feels expensive. It needs solid backing behind the tile, which is worth confirming at the measure rather than on install day.",
    best: "Wide openings, tall panels, and steam-height glass where stiffness matters.",
  },
];

const glassTypes = [
  { name: "Clear", body: "Maximum light and the fully open look. Shows hard water most readily, so pair it with a protective coating in the valley." },
  { name: "Low-iron", body: "Clear glass with the green edge tint removed. The difference is obvious against white tile and at the exposed edges." },
  { name: "Rain", body: "Textured on one face. Obscures the shower interior while still passing light — the two black-hardware doors above use it." },
  { name: "Frosted / obscure", body: "Acid-etched or pebbled for full privacy. Common on doors that open toward a bedroom or a shared bathroom." },
];

const hardwareFinishes = [
  { name: "Chrome", swatch: "linear-gradient(140deg,#f4f6f8 0%,#c8ced4 38%,#8e979f 62%,#e8ecef 100%)", body: "Bright and reflective. Matches most existing valve trim in Las Vegas builder homes." },
  { name: "Brushed nickel", swatch: "linear-gradient(140deg,#e5e2dc 0%,#bfbab1 45%,#97918a 70%,#d8d4cd 100%)", body: "Warmer and softer than chrome, and far more forgiving of water spotting." },
  { name: "Matte black", swatch: "linear-gradient(140deg,#4a4a4a 0%,#232323 45%,#101010 75%,#3a3a3a 100%)", body: "High contrast against light tile. The most requested finish on our recent installs." },
];

const comparisonRows = [
  { feature: "Metal frame around the glass", frameless: "None — glass hangs on clips and hinges", semi: "Frame on the stationary panel and perimeter" },
  { feature: "Typical glass thickness", frameless: '3/8" or 1/2" tempered', semi: '3/16" or 1/4" tempered' },
  { feature: "How water is held in", frameless: "Precise fit, seals and a measured slope", semi: "Frame channels catch and drain water" },
  { feature: "Cleaning", frameless: "Open edges, no tracks to scrub", semi: "Frame channels collect water and residue" },
  { feature: "Relative cost", frameless: "Higher — heavier glass, more hardware", semi: "Lower for the same opening" },
  { feature: "Wall requirements", frameless: "Needs solid blocking behind the tile", semi: "Frame spreads load across the opening" },
  { feature: "Look", frameless: "Glass and hardware only", semi: "Visible metal edge on the fixed panel" },
];

const timeline = [
  { icon: Ruler, step: "Free in-home measure", body: "We measure the actual opening in your bathroom — including how far out of plumb the walls sit, which is what decides whether a frameless door will seal. You get a written quote for your exact opening." },
  { icon: PencilRuler, step: "Template and approval", body: "Glass thickness, glass type, hardware finish and door swing get confirmed in writing before anything is cut. Nothing is ordered until you approve it." },
  { icon: Factory, step: "Fabrication", body: "Your glass is cut, tempered and edge-polished to the measured dimensions, and the hardware cut-outs are made at the same time. Tempered glass cannot be trimmed afterwards, which is why the measure matters." },
  { icon: Wrench, step: "Installation", body: "Our own installers set the panels, hang the door, seal it and clean up. Most doors are installed 7–14 days after the measure. Leave the silicone to cure before the first shower." },
];

const faqs: Faq[] = [
  {
    q: "What is the difference between a frameless and a semi-frameless shower door?",
    a: "A frameless door has no metal frame around the glass — it hangs from wall-mounted hinges or clips, using 3/8\" or 1/2\" tempered glass thick enough to be structural on its own. A semi-frameless door keeps a metal frame around the stationary panel and perimeter, and uses thinner 3/16\" or 1/4\" glass. Frameless costs more and needs solid blocking behind the tile; semi-frameless is more forgiving of walls that are out of plumb because the frame absorbs the gap.",
  },
  {
    q: "What glass thickness should I choose for a frameless shower door?",
    a: "3/8\" tempered is the standard for frameless doors and is the right answer for most Las Vegas openings. 1/2\" is heavier and stiffer — the panel barely flexes when the door swings — and is worth it on wide openings and tall panels. The practical constraint is what is behind your tile: 1/2\" glass needs solid backing, which we confirm during the in-home measure rather than on install day.",
  },
  {
    q: "Can I replace an existing framed shower door with a frameless one?",
    a: "Usually yes, and it is one of the most common jobs we do. The old framed unit and its tracks come out, the opening gets measured as it actually sits, and the new frameless glass is fabricated to those dimensions. In most cases the existing tile and pan stay exactly as they are. What we check first is whether there is solid blocking behind the tile to carry the heavier glass, and how far out of plumb the walls are.",
  },
  {
    q: "Do frameless shower doors leak?",
    a: "A correctly measured and installed frameless door does not leak in normal use, but it is less tolerant of a sloppy measure than a framed one, because there is no frame channel to catch stray water. Containment comes from the fit itself — the gap at the hinge side, the sweep at the bottom, the seal along the strike jamb, and the slope of the pan. This is exactly why we measure in your bathroom rather than quoting from dimensions over the phone.",
  },
  {
    q: "What hardware finishes can I get?",
    a: "Chrome, brushed nickel and matte black. Chrome is bright and matches most existing valve trim in Las Vegas builder homes. Brushed nickel is warmer and hides water spotting best. Matte black gives the most contrast against light tile and is the most requested finish on our recent installs. Hinges, handle, clips and the header bar all come in the finish you pick.",
  },
  {
    q: "How do frameless shower doors hold up to Las Vegas hard water?",
    a: "Valley water is hard, and untreated clear glass will show spotting sooner than you would like. Two things help: choosing a glass type that hides mineral deposits — rain and frosted glass disguise them far better than clear — and squeegeeing the glass after each shower. A protective coating applied to the glass makes the spotting easier to wipe away. We go through the trade-offs at the measure so you can weigh looks against upkeep.",
  },
  {
    q: "Can a frameless glass panel be installed without a door at all?",
    a: "Yes — a single fixed panel on a walk-in shower, sometimes called a walk-in screen. There is no door, no hinges and no handle: one piece of tempered glass anchored to the wall and the curb, with an open entry. It needs a pan or floor that slopes correctly and enough distance between the panel and the shower head, which is what we check on site.",
  },
  {
    q: "How long does the whole process take?",
    a: "Most doors are installed 7–14 days after the in-home measure. The measure itself takes well under an hour, fabrication accounts for most of the wait because the glass is cut and tempered to your dimensions, and the installation itself is typically a half day. Tempered glass cannot be cut after it is tempered, so the schedule is driven by fabrication rather than by our calendar.",
  },
  {
    q: "Do you use subcontractors?",
    a: "No. The people who measure and install your door work for Baja Glass. We have been owner-operated since 1999, and we are family owned and first-responder owned.",
  },
  {
    q: "Are you licensed and insured?",
    a: `Yes. Baja Glass & Mirror LLC holds a ${BUSINESS.licenseType} license issued by the ${BUSINESS.licenseAuthority} (license number ${BUSINESS.licenseNumber}), and we are bonded and carry general liability insurance. We can send documentation before any work begins.`,
  },
];

// ─── Quote form ──────────────────────────────────────────────────────────────

function QuoteForm({ id, compact = false }: { id: string; compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileNames(Array.from(e.target.files ?? []).slice(0, 5).map((f) => f.name));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    try {
      await fetch(FORMSPREE, { method: "POST", body: data, headers: { Accept: "application/json" } });
      fetch(MAKE_HOOK, { method: "POST", body: data, headers: { Accept: "application/json" } }).catch(() => {});
      const { fbq } = window as Window & { fbq?: (...args: unknown[]) => void };
      if (typeof fbq === "function") fbq("track", "Lead");
      // Fires `lp_form_submission` → Google Ads "LP Form Submission".
      trackFormSubmission({ source: "lp_frameless_shower_doors_lv", projectType: "frameless_shower_door" });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 px-4" role="status">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-7 w-7 text-emerald-700" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-charcoal mb-2">Quote request received</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          We&rsquo;ll call to book your free in-home measure. Bring us your opening — we&rsquo;ll bring the numbers.
        </p>
        <a
          href={BUSINESS.phoneHref}
          onClick={() => trackPhoneCall("frameless_lv_form_success")}
          className="text-red-700 font-bold text-lg underline underline-offset-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
        >
          {BUSINESS.phoneDisplay}
        </a>
      </div>
    );
  }

  const field =
    "w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-white text-charcoal placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:border-charcoal";

  return (
    <form id={id} onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${id}-name`} className="block text-sm font-medium text-charcoal mb-1">
            Name <span aria-hidden="true">*</span>
          </label>
          <input id={`${id}-name`} name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="block text-sm font-medium text-charcoal mb-1">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(702) 000-0000"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-zip`} className="block text-sm font-medium text-charcoal mb-1">
          ZIP code <span aria-hidden="true">*</span>
        </label>
        <input
          id={`${id}-zip`}
          name="zip"
          required
          inputMode="numeric"
          autoComplete="postal-code"
          pattern="[0-9]{5}"
          maxLength={5}
          placeholder="89118"
          aria-describedby={`${id}-zip-help`}
          className={field}
        />
        <p id={`${id}-zip-help`} className="mt-1 text-xs text-muted-foreground">
          Five digits — tells us which part of the valley you&rsquo;re in.
        </p>
      </div>

      <div>
        <span className="block text-sm font-medium text-charcoal mb-1">Photo of your shower (optional)</span>
        <label
          htmlFor={`${id}-photos`}
          className="flex flex-col items-center justify-center gap-1.5 border-2 border-dashed border-border rounded-lg px-4 py-4 cursor-pointer hover:border-charcoal/50 hover:bg-secondary/30 transition-colors focus-within:ring-2 focus-within:ring-charcoal"
        >
          <Camera className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          <span className="text-sm text-charcoal font-medium">Add a photo</span>
          <span className="text-xs text-muted-foreground">A photo of the opening speeds up the quote</span>
          <input
            id={`${id}-photos`}
            name="shower_photos"
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
        {fileNames.length > 0 && (
          <p className="mt-1.5 text-xs text-muted-foreground">{fileNames.length} photo(s) attached</p>
        )}
      </div>

      <input type="hidden" name="_subject" value="Frameless Shower Doors LV — Quote Request" />
      <input type="hidden" name="source_lp" value="/lp/frameless-shower-doors-lv" />

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-red-700 hover:bg-red-800 text-white text-base font-semibold py-6 rounded-lg shadow-lg"
      >
        {loading ? "Sending…" : "Get My Free Quote"}
      </Button>
      <p className={`text-xs text-center text-muted-foreground ${compact ? "" : "pt-1"}`}>
        No obligation. We call to book the free in-home measure.
      </p>
    </form>
  );
}

// ─── Shared bits ─────────────────────────────────────────────────────────────

function CallButton({ where, className = "" }: { where: string; className?: string }) {
  return (
    <a
      href={BUSINESS.phoneHref}
      onClick={() => trackPhoneCall(where)}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-charcoal ${className}`}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      Call {BUSINESS.phoneDisplay}
    </a>
  );
}

function SectionHeading({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <>
      <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb-3">{kicker}</p>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">{children}</h2>
    </>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const FramelessShowerDoorsLVLanding = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const scrollToQuote = () => {
    trackCTAClick("get_quote", "frameless_lv");
    quoteRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const schema = buildPageSchema(PAGE_URL, faqs);

  return (
    <>
      <Helmet>
        <title>Frameless Shower Doors Las Vegas | Free In-Home Measure | Baja Glass</title>
        <meta
          name="description"
          content="Custom frameless glass shower doors for Las Vegas homes. 3/8&quot; and 1/2&quot; tempered glass, chrome, brushed nickel or matte black hardware. Free in-home measure, installed by our own crew. Call (702) 383-0779."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Frameless Shower Doors Las Vegas | Baja Glass" />
        <meta
          property="og:description"
          content="Custom frameless glass shower doors, measured in your bathroom and installed by our own crew. Free in-home measure."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`https://bajaglass.com${HERO_IMAGE}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <main>
        {/* ── Hero: text-first so the H1 is the mobile LCP element ───────── */}
        <section aria-label="Frameless shower doors in Las Vegas" className="bg-gradient-to-br from-charcoal via-charcoal to-[#1c1c1c]">
          <div className="container mx-auto px-4 py-10 lg:py-16">
            {/* Mobile order: headline → form → photo. Keeping the photo out of
                the first viewport leaves the H1 as the LCP element and puts the
                form higher up the page. On lg the photo returns to the left
                column under the copy, with the form sticky alongside. */}
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-14 lg:gap-y-8 items-start max-w-6xl mx-auto">
              <div className="order-1 lg:col-start-1 lg:row-start-1 text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-5">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  <span className="text-sm font-medium text-white">
                    {BUSINESS.rating.value} from {BUSINESS.rating.count} Google reviews
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold leading-[1.1] mb-4">
                  Frameless Shower Doors in Las Vegas
                </h1>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 max-w-xl">
                  Custom tempered glass, measured to your opening and installed by our own crew —
                  not a subcontractor.
                </p>

                <ul className="space-y-2 mb-7 text-white/85">
                  {[
                    `${BUSINESS.licenseType} licensed, bonded and insured`,
                    "Free in-home measure with a written quote",
                    "Most doors installed 7–14 days after the measure",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <CallButton
                  where="frameless_lv_hero"
                  className="w-full sm:w-auto bg-white text-charcoal hover:bg-white/90 text-base px-7 py-4 focus-visible:ring-offset-charcoal"
                />

              </div>

              {/* Quote form — first screen on both mobile and desktop. */}
              <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 bg-white rounded-2xl p-6 shadow-2xl lg:sticky lg:top-6">
                <h2 className="text-xl font-bold text-charcoal mb-1">Get your free quote</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Tell us where you are and we&rsquo;ll book the in-home measure.
                </p>
                <QuoteForm id="frameless-lv-hero-form" compact />
              </div>

              {/* Below the fold on mobile, so it stays lazy and does not compete
                  with the fonts and CSS during the LCP window. */}
              <div className="order-3 lg:col-start-1 lg:row-start-2 rounded-xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Frameless fixed glass panel on a walk-in shower with marble tile and matte black fixtures, installed by Baja Glass in Las Vegas"
                  width={760}
                  height={620}
                  sizes={HERO_SIZES}
                  className="w-full h-[240px] sm:h-[320px] lg:h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust bar ──────────────────────────────────────────────────── */}
        <section aria-label="Credentials" className="bg-[#f6f6f6] border-y border-border py-4">
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-charcoal">
              <li className="font-semibold">{BUSINESS.licenseType} licensed</li>
              <li aria-hidden="true" className="text-border">|</li>
              <li>Bonded &amp; insured</li>
              <li aria-hidden="true" className="text-border">|</li>
              <li>Owner-operated since {BUSINESS.founded}</li>
              <li aria-hidden="true" className="text-border">|</li>
              <li>{BUSINESS.hardwareWarranty}</li>
              <li aria-hidden="true" className="text-border">|</li>
              <li>In-house installers</li>
            </ul>
          </div>
        </section>

        {/* ── 1. Frameless shower doors — the core product ───────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading kicker="The product">Frameless Shower Doors</SectionHeading>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                A frameless shower door is a single piece of tempered glass thick enough to be
                structural on its own. There is no metal frame around the edge — the glass hangs
                from wall-mounted hinges or sits on clips, and the only hardware you see is the
                hinge, the handle and the clips holding the fixed panel.
              </p>
              <p>
                That is also why it is not an off-the-shelf product. The glass is cut and tempered
                to the dimensions of your opening, and once tempered it cannot be trimmed. Walls in
                Las Vegas homes are rarely perfectly plumb, so the measure has to capture how far
                out they actually sit. Get that right and the door seals and swings correctly for
                years; guess at it and no amount of sealant compensates.
              </p>
              <p className="text-charcoal font-medium">
                Every door we sell is measured in your bathroom by the people who will install it.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Glass options ───────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/25">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeading kicker="Specification">Glass Shower Doors — Options and Glass Types</SectionHeading>
            <p className="text-muted-foreground text-lg mb-10 max-w-3xl">
              Two decisions drive how a glass shower door looks, feels and holds up: how thick the
              glass is, and what type of glass it is.
            </p>

            <h3 className="text-xl font-bold text-charcoal mb-4">Glass thickness</h3>
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {glassThickness.map((g) => (
                <div key={g.size} className="bg-background rounded-xl p-6 border border-border shadow-sm">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-3xl font-serif font-bold text-charcoal">{g.size}</span>
                    <span className="text-sm text-muted-foreground">{g.label}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{g.body}</p>
                  <p className="text-sm text-charcoal">
                    <span className="font-semibold">Best for: </span>
                    {g.best}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-charcoal mb-4">Glass types</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {glassTypes.map((g) => (
                <div key={g.name} className="bg-background rounded-xl p-5 border border-border">
                  <p className="font-semibold text-charcoal mb-1.5">{g.name}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{g.body}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-charcoal mt-12 mb-4">Hardware finishes</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {hardwareFinishes.map((h) => (
                <div key={h.name} className="bg-background rounded-xl p-5 border border-border">
                  <div
                    className="w-full h-14 rounded-lg mb-3 border border-black/10"
                    style={{ background: h.swatch }}
                    role="img"
                    aria-label={`${h.name} finish swatch`}
                  />
                  <p className="font-semibold text-charcoal mb-1.5">{h.name}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Walk-in showers and fixed panels ────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeading kicker="No door at all">
              Frameless Walk-In Showers and Fixed Glass Panels
            </SectionHeading>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A frameless walk-in shower replaces the door with a single fixed panel — sometimes
                  called a walk-in screen. No hinges, no handle, no door to swing into a small
                  bathroom. One piece of tempered glass anchored to the wall and the curb, with an
                  open entry beside it.
                </p>
                <p>
                  It only works if the geometry cooperates. The pan or floor has to slope correctly,
                  and there has to be enough distance between the panel and the shower head that
                  water does not carry past the opening. Both are things we check on site rather
                  than assume.
                </p>
                <p className="text-charcoal font-medium">
                  A fixed panel is also the simplest way to open up a narrow bathroom without moving
                  any plumbing.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <OptimizedImage
                  src="/lovable-uploads/2705e428-6ba5-4a64-91cc-bff916c3b8a6.png"
                  alt="Frameless fixed glass panel on a walk-in shower with white marble tile, hexagon mosaic floor and a linear drain"
                  width={720}
                  height={560}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="w-full h-[340px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Replacement — before/after ──────────────────────────────── */}
        <section className="py-16 bg-secondary/25">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeading kicker="Replacing what you have">
              Shower Door Replacement — Swapping an Existing Enclosure
            </SectionHeading>
            <p className="text-muted-foreground text-lg mb-4 max-w-3xl">
              Most of the frameless doors we install go into openings that already have a framed or
              sliding unit in them. The old door and its tracks come out, we measure the opening as
              it actually sits, and the new glass is fabricated to those dimensions. In most cases
              your existing tile and pan stay exactly as they are.
            </p>
            <p className="text-muted-foreground text-lg mb-10 max-w-3xl">
              Two things get checked before we quote a replacement: whether there is solid blocking
              behind the tile to carry heavier frameless glass, and how far out of plumb the walls
              are. Both are answerable in about ten minutes during the in-home measure.
            </p>

            <h3 className="text-xl font-bold text-charcoal mb-5">Three of our replacements</h3>
            <div className="space-y-8">
              {replacementPairs.map((pair) => (
                <div key={pair.after} className="bg-background rounded-2xl border border-border p-5 shadow-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <figure>
                      <div className="rounded-lg overflow-hidden bg-secondary/40 aspect-[3/4]">
                        <OptimizedImage
                          src={pair.before}
                          alt={pair.beforeAlt}
                          width={560}
                          height={745}
                          sizes="(min-width: 640px) 30vw, 45vw"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <figcaption className="mt-2 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        Before
                      </figcaption>
                    </figure>
                    <figure>
                      <div className="rounded-lg overflow-hidden bg-secondary/40 aspect-[3/4]">
                        <OptimizedImage
                          src={pair.after}
                          alt={pair.afterAlt}
                          width={560}
                          height={745}
                          sizes="(min-width: 640px) 30vw, 45vw"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <figcaption className="mt-2 text-xs font-semibold tracking-wider uppercase text-red-700">
                        After
                      </figcaption>
                    </figure>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{pair.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Comparison ──────────────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading kicker="Deciding">Frameless vs Semi-Frameless</SectionHeading>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
              Semi-frameless is not a lesser product — it is a different trade-off. If your walls
              are significantly out of plumb, the frame is genuinely more forgiving.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm border-collapse bg-background">
                <caption className="sr-only">
                  Comparison of frameless and semi-frameless shower doors
                </caption>
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th scope="col" className="text-left py-3 px-4 font-semibold w-1/3">Feature</th>
                    <th scope="col" className="text-left py-3 px-4 font-semibold">Frameless</th>
                    <th scope="col" className="text-left py-3 px-4 font-semibold">Semi-frameless</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-secondary/25" : "bg-background"}>
                      <th scope="row" className="text-left py-3 px-4 font-medium text-charcoal align-top">
                        {row.feature}
                      </th>
                      <td className="py-3 px-4 text-charcoal align-top">{row.frameless}</td>
                      <td className="py-3 px-4 text-muted-foreground align-top">{row.semi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 6. Timeline ────────────────────────────────────────────────── */}
        <section className="py-16 bg-charcoal text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-sm font-semibold tracking-widest text-white/60 uppercase mb-3">
              What happens next
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">
              From Free Measure to Installed Door
            </h2>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map(({ icon: Icon, step, body }, i) => (
                <li key={step} className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-white/50 text-sm font-bold">Step {i + 1}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2">{step}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-white/60 text-sm">
              Timings describe a typical door. Steam-height glass and multi-panel builds take longer.
            </p>
          </div>
        </section>

        {/* ── 7. Gallery ─────────────────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading kicker="Our work">Recent Frameless Installs</SectionHeading>
            <p className="text-muted-foreground text-lg mb-10">
              Photographs of doors we fabricated and installed — not stock photography.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img) => (
                <figure key={img.caption} className="group">
                  <div className="rounded-xl overflow-hidden shadow-md bg-secondary/40 aspect-[3/4]">
                    <OptimizedImage
                      src={img.src}
                      alt={img.alt}
                      width={640}
                      height={800}
                      sizes="(min-width: 768px) 30vw, 45vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-muted-foreground">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. Service area ────────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/25">
          <div className="container mx-auto px-4 max-w-4xl">
            <MapPin className="h-9 w-9 text-red-700 mb-4" aria-hidden="true" />
            <SectionHeading kicker="Where we install">
              Serving Las Vegas, Summerlin, Henderson, North Las Vegas and Spring Valley
            </SectionHeading>
            <p className="text-muted-foreground text-lg mb-6">
              We fabricate in our Las Vegas shop on {BUSINESS.address.street} and install across the
              valley. Hard water and the hardware finishes that hide it come up on nearly every
              measure, wherever in Clark County you are.
            </p>
            <ul className="flex flex-wrap gap-2 mb-8">
              {BUSINESS.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="bg-background text-charcoal text-sm font-medium px-4 py-2 rounded-full border border-border"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              Not sure we reach your ZIP?{" "}
              <a
                href={BUSINESS.phoneHref}
                onClick={() => trackPhoneCall("frameless_lv_service_area")}
                className="text-red-700 font-semibold underline underline-offset-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
              >
                Call {BUSINESS.phoneDisplay}
              </a>{" "}
              — if you&rsquo;re in Clark County, we most likely do.
            </p>
          </div>
        </section>

        {/* ── 9. Related pages ───────────────────────────────────────────── */}
        <section className="py-14 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-2">
              Looking for something more specific?
            </h2>
            <p className="text-muted-foreground mb-6">
              This page covers frameless doors as a product. Two neighbors cover the rest.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/lp/shower-door-installation-near-me"
                className="group block bg-secondary/30 rounded-xl p-5 border border-border hover:border-charcoal/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
              >
                <p className="font-semibold text-charcoal mb-1.5 flex items-center gap-2">
                  Installation and scheduling
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </p>
                <p className="text-sm text-muted-foreground">
                  Questions about installers, appointment windows and how the install day runs.
                </p>
              </a>
              <a
                href="/lp/custom-shower-enclosures-lv"
                className="group block bg-secondary/30 rounded-xl p-5 border border-border hover:border-charcoal/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
              >
                <p className="font-semibold text-charcoal mb-1.5 flex items-center gap-2">
                  Custom fabrication and enclosures
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </p>
                <p className="text-sm text-muted-foreground">
                  Multi-panel enclosures, neo-angles and one-off glass built to a drawing.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ────────────────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/25">
          <div className="container mx-auto px-4 max-w-3xl">
            <SectionHeading kicker="Before you buy">Frameless Shower Door Questions</SectionHeading>
            <div className="space-y-3 mt-8">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-background rounded-xl border border-border overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-charcoal flex items-start justify-between gap-4 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-charcoal">
                    <span>{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 text-xl font-light text-red-700 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-muted-foreground leading-relaxed border-t border-border">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. Trust + final quote form ───────────────────────────────── */}
        <section ref={quoteRef} className="py-16 bg-charcoal text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm font-semibold tracking-widest text-white/60 uppercase mb-3">
                  Who you&rsquo;re dealing with
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Book Your Free In-Home Measure
                </h2>

                <dl className="space-y-4 mb-8">
                  {[
                    { t: "License", d: `${BUSINESS.licenseType}, ${BUSINESS.licenseAuthority} — number ${BUSINESS.licenseNumber}` },
                    { t: "Insurance", d: BUSINESS.insured },
                    { t: "Warranty", d: `${BUSINESS.hardwareWarranty}. ${BUSINESS.glassWarranty}. ${BUSINESS.workmanshipWarranty}. Parts and labor term: ${BUSINESS.laborWarrantyTerm}` },
                    { t: "Google rating", d: `${BUSINESS.rating.value} out of 5 from ${BUSINESS.rating.count} reviews` },
                    { t: "In business", d: `Owner-operated since ${BUSINESS.founded}` },
                    { t: "Ownership", d: BUSINESS.ownership },
                    { t: "Crew", d: BUSINESS.crew },
                  ].map(({ t, d }) => (
                    <div key={t} className="border-l-2 border-white/20 pl-4">
                      <dt className="text-xs uppercase tracking-wider text-white/50 mb-0.5">{t}</dt>
                      <dd className="text-white/90 leading-relaxed">{d}</dd>
                    </div>
                  ))}
                </dl>

                <div className="flex items-center gap-3 text-white/80">
                  <Shield className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm">
                    Mon–Fri, 8:00 AM – 4:00 PM · {BUSINESS.address.street}, {BUSINESS.address.city},{" "}
                    {BUSINESS.address.region} {BUSINESS.address.postalCode}
                  </p>
                </div>

                <CallButton
                  where="frameless_lv_final"
                  className="mt-6 w-full sm:w-auto border border-white/40 text-white hover:bg-white/10 text-base px-7 py-4 focus-visible:ring-offset-charcoal"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-charcoal mb-1">Get your free quote</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  We&rsquo;ll call to book the measure — usually the same business day.
                </p>
                <QuoteForm id="frameless-lv-final-form" />
              </div>
            </div>
          </div>
        </section>

        </main>

        {/* ── Sticky mobile call bar ─────────────────────────────────────── */}
        <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-charcoal/95 backdrop-blur border-t border-white/15 px-3 py-2.5 flex gap-2">
          <CallButton
            where="frameless_lv_sticky"
            className="flex-1 bg-white text-charcoal text-sm py-3 focus-visible:ring-offset-charcoal"
          />
          <button
            type="button"
            onClick={scrollToQuote}
            className="flex-1 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold rounded-lg py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-charcoal"
          >
            Free quote
          </button>
        </div>

        <footer className="bg-charcoal border-t border-white/10 text-white/60 py-6 pb-24 lg:pb-6 text-center text-xs">
          <div className="container mx-auto px-4">
            <p>
              © {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.licenseType} licensed ·{" "}
              {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.region}{" "}
              {BUSINESS.address.postalCode} · {BUSINESS.phoneDisplay}
            </p>
            <p className="mt-1.5">
              <a href="/privacy-policy" className="hover:text-white underline-offset-2 hover:underline">
                Privacy Policy
              </a>
              {" · "}
              <a href="/terms-of-service" className="hover:text-white underline-offset-2 hover:underline">
                Terms of Service
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FramelessShowerDoorsLVLanding;
