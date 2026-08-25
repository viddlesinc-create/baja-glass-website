import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Phone,
  ShieldCheck,
  Star,
  Ruler,
  Users,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import { FramelessQuoteForm } from "@/components/landing/FramelessQuoteForm";
import { trackPhoneCall } from "@/lib/analytics";
import {
  BUSINESS,
  FAQS,
  FRAMELESS_COMPARISON,
  GALLERY,
  GLASS_OPTIONS,
  GLASS_THICKNESSES,
  HARDWARE_FINISHES,
  HERO_IMAGE,
  LP_URL,
  SERVICE_AREAS,
  TIMELINE,
  TOTAL_TIMELINE,
  TRUST,
  landingPageSchema,
} from "@/data/business";

/**
 * /lp/frameless-shower-doors-lv — PRODUCT intent.
 *
 * This page owns "frameless glass shower doors as a purchase decision": what
 * the product is, what glass and hardware you choose between, and what it costs
 * you in time to get one. It deliberately shares no layout components, imagery
 * or copy with its two siblings:
 *   /lp/shower-door-installation-near-me  -> install service and scheduling
 *   /lp/custom-shower-enclosures-lv       -> custom fabrication and enclosures
 * Visitors with those intents are routed there by the internal links below.
 *
 * Every factual claim traces to the live site via `src/data/business.ts`.
 * Unresolved or self-contradicting claims render a `{{TODO: confirm with
 * Cliff}}` marker rather than a guessed number.
 */

const CallButton = ({
  location,
  className = "",
  variant = "solid",
}: {
  location: string;
  className?: string;
  variant?: "solid" | "outline";
}) => (
  <a
    href={`tel:${BUSINESS.phoneE164}`}
    onClick={() => trackPhoneCall(location)}
    className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold h-14 px-7 text-lg transition-colors
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      ${
        variant === "solid"
          ? "bg-red-accent text-white hover:bg-red-accent-light focus-visible:ring-red-accent"
          : "border-2 border-white text-white hover:bg-white hover:text-charcoal focus-visible:ring-white focus-visible:ring-offset-charcoal"
      } ${className}`}
  >
    <Phone className="h-5 w-5" aria-hidden="true" />
    Call {BUSINESS.phoneDisplay}
  </a>
);

const SectionHeading = ({
  id,
  children,
  lead,
}: {
  id: string;
  children: React.ReactNode;
  lead?: string;
}) => (
  <div className="max-w-3xl mb-8">
    <h2
      id={id}
      className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight"
    >
      {children}
    </h2>
    {lead && <p className="mt-4 text-lg text-muted-foreground">{lead}</p>}
  </div>
);

const FramelessShowerDoorsLVLanding = () => {
  const metaTitle =
    "Frameless Shower Doors Las Vegas | Custom Glass Shower Doors | Baja Glass";
  const metaDescription =
    "Custom frameless glass shower doors for Las Vegas homes. Choose 3/8\" or 1/2\" tempered glass, five hardware finishes, walk-in panels or a full enclosure. Free in-home measure.";

  return (
    <>
      {/* NB: no `prioritizeSeoTags` — it diverts link/meta/script into
          helmetContext.helmet.priority, which scripts/prerender.js does not
          read, and the canonical + JSON-LD would silently vanish from the
          prerendered HTML. */}
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={LP_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={LP_URL} />
        <meta
          property="og:image"
          content="https://bajaglass.com/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />

        {/* Exactly one JSON-LD block: LocalBusiness + Service + FAQPage,
            generated from src/data/business.ts. */}
        <script type="application/ld+json">{landingPageSchema()}</script>
      </Helmet>

      <a
        href="#quote"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:bg-white focus:text-charcoal focus:px-4 focus:py-2 focus:rounded focus:ring-2 focus:ring-red-accent"
      >
        Skip to the quote form
      </a>

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        {/* ── Masthead ─────────────────────────────────────────────────── */}
        <header className="bg-charcoal text-white">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
              <img
                src="/images/logo-160.webp"
                alt="Baja Glass & Mirror"
                width={120}
                height={38}
                className="h-9 w-auto"
              />
            </a>
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              onClick={() => trackPhoneCall("masthead")}
              className="hidden sm:inline-flex items-center gap-2 font-semibold text-white hover:text-red-accent-light transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </header>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal text-white"
          aria-labelledby="page-title"
        >
          <div className="container mx-auto px-4 py-10 md:py-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <h1
                  id="page-title"
                  className="text-4xl md:text-5xl font-serif font-bold leading-tight"
                >
                  Frameless Shower Doors in Las Vegas
                </h1>
                <p className="mt-4 text-xl text-white/90 max-w-xl">
                  Custom-cut tempered glass, measured in your bathroom and
                  installed by our own crew — {TOTAL_TIMELINE}.
                </p>

                <ul className="mt-6 space-y-2.5 text-white/90">
                  <li className="flex items-start gap-2.5">
                    <Ruler className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>
                      3/8" or 1/2" tempered glass, cut to your opening — not a
                      stock size
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>
                      Licensed C8 glass and glazing contractor, bonded and insured
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Users className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{TRUST.ownInstallers}</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <CallButton location="hero" />
                  <p className="mt-3 text-white/80 text-sm flex items-center gap-1.5">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {BUSINESS.hoursDisplay}
                  </p>
                </div>

                {/* Desktop-only supporting photo. Hidden and lazy on mobile so it
                    never competes with the H1 for LCP on a phone. */}
                <div className="hidden lg:block mt-10 rounded-xl overflow-hidden">
                  <OptimizedImage
                    src={HERO_IMAGE.src}
                    alt={HERO_IMAGE.alt}
                    width={800}
                    height={600}
                    sizes="(min-width: 1024px) 40vw, 0px"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div id="quote" className="scroll-mt-4">
                <FramelessQuoteForm
                  source="lp_frameless_hero"
                  tone="dark"
                  heading="Get your free quote"
                  subheading="Tell us where you are and we'll book a free in-home measure. Add a photo if you have one handy."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ──────────────────────────────────────────────── */}
        <section aria-label="Credentials at a glance" className="bg-secondary/40 border-b border-border">
          <div className="container mx-auto px-4 py-5">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-foreground">
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-red-accent" aria-hidden="true" />
                {TRUST.googleRating.value} Google rating
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-red-accent" aria-hidden="true" />
                Licensed, bonded and insured
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4 text-red-accent" aria-hidden="true" />
                Family and first-responder owned
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-accent" aria-hidden="true" />
                {BUSINESS.city} shop, valley-wide installs
              </li>
            </ul>
          </div>
        </section>

        <main>
          {/* ── 1. Frameless shower doors ─────────────────────────────── */}
          <section className="container mx-auto px-4 py-14 md:py-20" aria-labelledby="frameless">
            <SectionHeading
              id="frameless"
              lead="A frameless door has no metal channel around it. The glass itself is the structure — it hangs off wall-mounted hinges and the thickness of the panel is what holds it rigid. That single fact drives every decision below."
            >
              Frameless shower doors
            </SectionHeading>

            <div className="max-w-3xl space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Because there is no frame to hide behind, a frameless enclosure
                is only as good as its measurements. The glass is cut, polished
                and drilled to your exact opening, then tempered — and tempered
                glass cannot be trimmed afterwards. There is no adjusting it on
                site. That is why every quote we write starts with someone
                standing in your bathroom with a level, not with a photo and a
                price list.
              </p>
              <p>
                What you get for that is a shower that reads as one continuous
                surface. No channel collecting water along the bottom, no metal
                interrupting the tile you paid for, and nothing to wipe out
                except the door sweep.
              </p>
            </div>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-6 text-foreground">
              Glass thickness: 3/8" or 1/2"
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {GLASS_THICKNESSES.map((t) => (
                <article
                  key={t.size}
                  className="rounded-xl border border-border bg-background p-6 shadow-sm"
                >
                  <h4 className="text-xl font-bold text-foreground">{t.size}</h4>
                  <p className="text-sm font-semibold text-red-accent mt-1">
                    {t.weightNote}
                  </p>
                  <p className="mt-4 text-foreground/90 leading-relaxed">
                    {t.detail}
                  </p>
                  <p className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Best for: </span>
                    {t.bestFor}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ── 2. Glass shower doors — options and glass types ───────── */}
          <section className="bg-secondary/30 border-y border-border" aria-labelledby="glass-options">
            <div className="container mx-auto px-4 py-14 md:py-20">
              <SectionHeading
                id="glass-options"
                lead="Every glass shower door we build is tempered safety glass. What changes is the surface — how much you see through it, how much colour it casts, and how visible Las Vegas hard water will be on it a year from now."
              >
                Glass shower doors — options and glass types
              </SectionHeading>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {GLASS_OPTIONS.map((g) => (
                  <article
                    key={g.name}
                    className="rounded-xl overflow-hidden bg-background border border-border shadow-sm flex flex-col"
                  >
                    <OptimizedImage
                      src={g.image}
                      alt={g.alt}
                      width={600}
                      height={450}
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="p-5 flex-1">
                      <h3 className="text-lg font-bold text-foreground">{g.name}</h3>
                      <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
                        {g.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <h3 className="text-2xl font-serif font-bold mt-14 mb-2 text-foreground">
                Hardware finishes
              </h3>
              <p className="text-muted-foreground max-w-3xl mb-6">
                Hinges, clamps, header bar and handle all come in the same finish
                so the enclosure reads as one piece.
              </p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {HARDWARE_FINISHES.map((f) => (
                  <li
                    key={f.name}
                    className="rounded-xl bg-background border border-border p-4 shadow-sm"
                  >
                    <span
                      className="block w-full h-12 rounded-md border border-black/25"
                      style={{ background: f.swatch }}
                      aria-hidden="true"
                    />
                    <h4 className="mt-3 font-bold text-foreground">{f.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{f.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── 3. Walk-in showers and fixed panels ───────────────────── */}
          <section className="container mx-auto px-4 py-14 md:py-20" aria-labelledby="walk-in">
            <SectionHeading
              id="walk-in"
              lead="Not every frameless shower needs a door. A walk-in layout uses one or two fixed panels of glass and leaves the entry open."
            >
              Frameless walk-in showers and fixed glass panels
            </SectionHeading>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  A frameless walk-in shower is the simplest thing we build and
                  often the best answer in a small Las Vegas bathroom. A single
                  fixed panel — a shower screen, sometimes called a splash panel
                  — stands at the open end of the shower and stops overspray.
                  There is no door to swing into the room, no hinges, no handle
                  and no sweep to wipe.
                </p>
                <p>
                  A frameless glass panel for a shower still has to be measured
                  properly. The panel is usually clamped to the wall at two
                  points and, once it gets tall or long, braced back to the wall
                  or ceiling with a slim support bar. Where the panel stops
                  relative to the shower head decides whether water stays in, so
                  that placement is worked out on site rather than assumed.
                </p>
                <p>
                  Layouts we build most often: a single entry panel; a panel plus
                  a short return; and a panel with a swinging frameless door beside
                  it, which is the middle ground between fully open and fully
                  enclosed.
                </p>
                <p className="pt-2">
                  Planning something more involved — a neo-angle, a steam room, or
                  glass wrapping more than two walls?{" "}
                  <Link
                    to="/lp/custom-shower-enclosures-lv"
                    className="text-red-accent font-semibold underline underline-offset-2 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-accent rounded"
                  >
                    See custom shower enclosures
                  </Link>
                  .
                </p>
              </div>

              <OptimizedImage
                src={GALLERY[1].src}
                alt={GALLERY[1].alt}
                width={900}
                height={700}
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </section>

          {/* ── 4. Replacement ────────────────────────────────────────── */}
          <section className="bg-secondary/30 border-y border-border" aria-labelledby="replacement">
            <div className="container mx-auto px-4 py-14 md:py-20">
              <SectionHeading
                id="replacement"
                lead="Most of the frameless glass we install goes into a shower that already has an enclosure in it. Swapping a dated framed or sliding unit for frameless glass is the single most common project we take on."
              >
                Shower door replacement — replacing an existing enclosure
              </SectionHeading>

              <div className="grid md:grid-cols-3 gap-6">
                <article className="rounded-xl bg-background border border-border p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">
                    The old unit leaves with us
                  </h3>
                  <p className="mt-3 text-foreground/90 leading-relaxed">
                    Removal and haul-away of your existing framed, semi-frameless
                    or sliding enclosure is part of the job, not a line item you
                    find later. You do not need to get it out yourself and you do
                    not need to arrange disposal.
                  </p>
                </article>
                <article className="rounded-xl bg-background border border-border p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">
                    What the old frame was hiding
                  </h3>
                  <p className="mt-3 text-foreground/90 leading-relaxed">
                    This is the part worth knowing before you commit. A metal
                    frame covers the cut edge of your tile and the anchors behind
                    it. Take it away and that edge is on show. We check it during
                    the measure and tell you what your curb and tile will look
                    like frameless — before you order, not on install day.
                  </p>
                </article>
                <article className="rounded-xl bg-background border border-border p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">
                    Replacing glass in the same footprint
                  </h3>
                  <p className="mt-3 text-foreground/90 leading-relaxed">
                    If your layout works and you simply want new glass — a
                    thicker panel, a different finish, clear instead of obscure —
                    we can replace the glass and hardware within the existing
                    opening. It is still measured and fabricated to your
                    dimensions.
                  </p>
                </article>
              </div>

              {/* ── Frameless vs semi-frameless ─────────────────────────── */}
              <h3 className="text-2xl font-serif font-bold mt-14 mb-2 text-foreground">
                Frameless vs semi-frameless
              </h3>
              <p className="text-muted-foreground max-w-3xl mb-6">
                Worth settling before the measure, because it changes the glass,
                the hardware and the price.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border bg-background">
                <table className="w-full min-w-[640px] text-left border-collapse">
                  <caption className="sr-only">
                    Comparison of frameless and semi-frameless shower enclosures
                    across glass thickness, visible metal, appearance, cleaning,
                    tolerance for out-of-square walls, and cost.
                  </caption>
                  <thead>
                    <tr className="bg-charcoal text-white">
                      <th scope="col" className="py-3 px-4 font-semibold w-1/4">
                        &nbsp;
                      </th>
                      <th scope="col" className="py-3 px-4 font-semibold">
                        Frameless
                      </th>
                      <th scope="col" className="py-3 px-4 font-semibold">
                        Semi-frameless
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {FRAMELESS_COMPARISON.map((row, i) => (
                      <tr
                        key={row.attribute}
                        className={i % 2 === 0 ? "bg-secondary/25" : "bg-background"}
                      >
                        <th
                          scope="row"
                          className="py-3 px-4 font-semibold text-foreground align-top"
                        >
                          {row.attribute}
                        </th>
                        <td className="py-3 px-4 text-foreground/90 align-top">
                          {row.frameless}
                        </td>
                        <td className="py-3 px-4 text-foreground/90 align-top">
                          {row.semiFrameless}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── 5. Timeline ───────────────────────────────────────────── */}
          <section className="container mx-auto px-4 py-14 md:py-20" aria-labelledby="timeline">
            <SectionHeading
              id="timeline"
              lead={`${TOTAL_TIMELINE}. Here is where that time actually goes, so you can plan the rest of the bathroom around it.`}
            >
              From free in-home measure to installed glass
            </SectionHeading>

            <ol className="space-y-5 max-w-4xl">
              {TIMELINE.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-5 rounded-xl border border-border bg-background p-6 shadow-sm"
                >
                  <span
                    className="shrink-0 h-11 w-11 rounded-full bg-charcoal text-white font-bold grid place-items-center text-lg"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-red-accent mt-0.5">
                      {step.duration}
                    </p>
                    <p className="mt-3 text-foreground/90 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-4xl text-foreground/90">
              Questions about scheduling, access, or how installers work around a
              bathroom that is mid-remodel?{" "}
              <Link
                to="/lp/shower-door-installation-near-me"
                className="text-red-accent font-semibold underline underline-offset-2 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-accent rounded"
              >
                See shower door installation details
              </Link>
              .
            </p>
          </section>

          {/* ── 6. Gallery ────────────────────────────────────────────── */}
          <section className="bg-secondary/30 border-y border-border" aria-labelledby="gallery">
            <div className="container mx-auto px-4 py-14 md:py-20">
              <SectionHeading
                id="gallery"
                lead="Frameless doors, walk-in panels and full enclosures Baja Glass has measured, fabricated and installed in Las Vegas Valley homes."
              >
                Recent installs across the valley
              </SectionHeading>

              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {GALLERY.map((img) => (
                  <li key={img.src}>
                    <figure className="rounded-xl overflow-hidden bg-background border border-border shadow-sm h-full">
                      <OptimizedImage
                        src={img.src}
                        alt={img.alt}
                        width={600}
                        height={450}
                        sizes="(min-width: 1024px) 22vw, 45vw"
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <figcaption className="px-3 py-2.5 text-sm text-muted-foreground">
                        {img.caption}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── 7. Service areas ──────────────────────────────────────── */}
          <section className="container mx-auto px-4 py-14 md:py-20" aria-labelledby="areas">
            <SectionHeading
              id="areas"
              lead={`Glass is fabricated at our shop at ${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postalCode}, and installed by our own crew across the valley.`}
            >
              Serving {SERVICE_AREAS.join(", ")}
            </SectionHeading>

            <div className="grid md:grid-cols-2 gap-10">
              <ul className="space-y-4">
                <li className="text-foreground/90 leading-relaxed">
                  <span className="font-bold text-foreground">Las Vegas — </span>
                  the whole city, from the older ranch homes off Rancho with
                  small square alcoves to newer builds with oversized openings
                  that need 1/2" glass.
                </li>
                <li className="text-foreground/90 leading-relaxed">
                  <span className="font-bold text-foreground">Summerlin — </span>
                  large master baths where a long fixed panel plus a door is the
                  usual layout, and where low-iron glass earns its keep against
                  pale stone tile.
                </li>
                <li className="text-foreground/90 leading-relaxed">
                  <span className="font-bold text-foreground">Henderson — </span>
                  including Green Valley and Anthem. A steady stream of framed
                  and sliding enclosures from the 1990s and 2000s being replaced
                  with frameless glass.
                </li>
                <li className="text-foreground/90 leading-relaxed">
                  <span className="font-bold text-foreground">
                    North Las Vegas —{" "}
                  </span>
                  guest and secondary baths where a frameless walk-in panel opens
                  up a tight footprint better than a swinging door does.
                </li>
                <li className="text-foreground/90 leading-relaxed">
                  <span className="font-bold text-foreground">
                    Spring Valley —{" "}
                  </span>
                  and the surrounding Clark County communities, including Paradise
                  and Enterprise.
                </li>
              </ul>

              <div className="rounded-xl border border-border bg-secondary/30 p-6">
                <h3 className="text-xl font-bold text-foreground">
                  One thing every Las Vegas shower has in common
                </h3>
                <p className="mt-3 text-foreground/90 leading-relaxed">
                  Hard water. Valley water leaves mineral deposits on glass faster
                  than most of the country, and it shows up worst on large clear
                  panels. It is the reason we raise textured and rain glass with
                  homeowners who say cleaning is their main worry, and the reason
                  a protective glass coating comes up at nearly every measure. It
                  is not an upsell we lead with — it is just the local reality of
                  owning a glass shower here.
                </p>
              </div>
            </div>
          </section>

          {/* ── 8. Trust ──────────────────────────────────────────────── */}
          <section className="bg-charcoal text-white" aria-labelledby="trust">
            <div className="container mx-auto px-4 py-14 md:py-20">
              <h2
                id="trust"
                className="text-3xl md:text-4xl font-serif font-bold leading-tight max-w-3xl"
              >
                Who you're actually hiring
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-3xl">
                {BUSINESS.legalName}, {BUSINESS.street}, {BUSINESS.city},{" "}
                {BUSINESS.region} {BUSINESS.postalCode}. {BUSINESS.hoursDisplay}.
              </p>

              <dl className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7">
                <div>
                  <dt className="font-bold text-white">Licence</dt>
                  <dd className="mt-1 text-white/90">
                    {TRUST.licenseCategory}. Licence number:{" "}
                    {TRUST.licenseNumber.value}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Insurance</dt>
                  <dd className="mt-1 text-white/90">{TRUST.insurance}</dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Warranty</dt>
                  <dd className="mt-1 text-white/90">{TRUST.warrantyTerms.value}</dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Google rating</dt>
                  <dd className="mt-1 text-white/90">
                    {TRUST.googleRating.value} out of 5. Number of reviews:{" "}
                    {TRUST.googleReviewCount.value}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Years in business</dt>
                  <dd className="mt-1 text-white/90">
                    {TRUST.yearsInBusiness.value}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Ownership</dt>
                  <dd className="mt-1 text-white/90">{TRUST.ownership}</dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Who does the work</dt>
                  <dd className="mt-1 text-white/90">{TRUST.ownInstallers}</dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Quotes</dt>
                  <dd className="mt-1 text-white/90">{TRUST.freeMeasure}</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* ── 9. FAQ ────────────────────────────────────────────────── */}
          <section className="container mx-auto px-4 py-14 md:py-20" aria-labelledby="faq">
            <SectionHeading
              id="faq"
              lead="The questions Las Vegas homeowners ask us before they order glass."
            >
              Frameless shower door questions
            </SectionHeading>

            {/* Native <details> so every answer is in the served HTML and the
                accordion works with zero JavaScript. */}
            <div className="max-w-3xl space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-border bg-background shadow-sm open:shadow-md"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-bold text-foreground flex items-start justify-between gap-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-accent">
                    <h3 className="text-base md:text-lg font-bold">{faq.q}</h3>
                    <span
                      className="shrink-0 text-red-accent text-2xl leading-none mt-0.5 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 -mt-1 text-foreground/90 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── 10. Closing CTA ───────────────────────────────────────── */}
          <section
            className="bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal text-white"
            aria-labelledby="closing"
          >
            <div className="container mx-auto px-4 py-14 md:py-20">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <div>
                  <h2
                    id="closing"
                    className="text-3xl md:text-4xl font-serif font-bold leading-tight"
                  >
                    Ready for an exact number on your frameless door?
                  </h2>
                  <p className="mt-4 text-lg text-white/90">
                    Send your details and we'll book the free in-home measure.
                    You get a written price for your opening, your glass and your
                    hardware — not a range that moves later.
                  </p>
                  <div className="mt-8">
                    <CallButton location="closing_cta" variant="outline" />
                  </div>
                  <p className="mt-4 text-white/80 flex items-center gap-2">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region}{" "}
                    {BUSINESS.postalCode}
                  </p>
                </div>

                <FramelessQuoteForm
                  source="lp_frameless_closing"
                  tone="dark"
                  heading="Get your free quote"
                  headingLevel="h3"
                  subheading="Name, phone and ZIP is all we need to get started."
                />
              </div>
            </div>
          </section>
        </main>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <footer className="bg-charcoal text-white/80 border-t border-white/15">
          <div className="container mx-auto px-4 py-8 text-sm space-y-2">
            <p className="font-semibold text-white">{BUSINESS.legalName}</p>
            <p>
              {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region}{" "}
              {BUSINESS.postalCode} ·{" "}
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                onClick={() => trackPhoneCall("footer")}
                className="underline underline-offset-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </p>
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="/" className="underline underline-offset-2 hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Baja Glass home
              </a>
              <Link to="/lp/shower-door-installation-near-me" className="underline underline-offset-2 hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Shower door installation
              </Link>
              <Link to="/lp/custom-shower-enclosures-lv" className="underline underline-offset-2 hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Custom shower enclosures
              </Link>
              <a href="/privacy-policy" className="underline underline-offset-2 hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Privacy policy
              </a>
            </p>
            <p className="pt-2 text-white/70">
              © {new Date().getFullYear()} {BUSINESS.legalName}. All rights
              reserved.
            </p>
          </div>
        </footer>

        {/* ── Sticky mobile call bar ───────────────────────────────────── */}
        <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-red-accent text-white shadow-[0_-2px_12px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-2">
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              onClick={() => trackPhoneCall("sticky_mobile_bar")}
              className="flex items-center justify-center gap-2 py-4 font-bold border-r border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call now
            </a>
            <a
              href="#quote"
              className="flex items-center justify-center gap-2 py-4 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            >
              Free quote
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FramelessShowerDoorsLVLanding;
