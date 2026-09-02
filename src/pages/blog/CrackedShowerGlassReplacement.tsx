import { Button } from "@/components/ui/button";
import ArticleByline from "@/components/ArticleByline";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CrackedShowerGlassReplacement = () => {
  return (
    <>
      <Helmet>
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Cracked Shower Glass Replacement in Las Vegas",
            "description": "What to do when a shower door panel cracks or shatters: why it happens, why the fix is a new custom panel, and how replacement works.",
            "author": {
              "@type": "Person",
              "@id": "https://bajaglass.com/authors/cliff-robinson#person",
              "name": "Cliff Robinson",
              "url": "https://bajaglass.com/authors/cliff-robinson"
            },
            "publisher": {
              "@type": "Organization",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "datePublished": "2026-09-02",
            "dateModified": "2026-09-02",
            "image": "https://bajaglass.com/images/damaged-shower-glass.jpg",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bajaglass.com/blog/cracked-shower-glass-replacement-las-vegas"
            }
          })}
        </script>
      </Helmet>

      <article className="min-h-screen">
        <header className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Cracked Shower Glass Replacement in Las Vegas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A cracked or shattered shower door panel can&apos;t be patched — here&apos;s why it happens, what to do right now, and how a proper replacement works.
            </p>
            <ArticleByline datePublished="2026-09-02" dateModified="2026-09-02" wordCount={857} />
          </div>
        </header>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <img
              src="/images/damaged-shower-glass.jpg"
              alt="Damaged shower door glass panel awaiting replacement in a Las Vegas home"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-6 text-lg leading-relaxed">
              <p>
                <strong>Cracked shower glass has exactly one safe fix: a new panel.</strong> Unlike a chipped windshield, a shower door panel
                can&apos;t be resin-filled, taped, or &quot;monitored.&quot; Here&apos;s why that is, what to do in the first hour after you
                notice damage, and what a proper replacement looks like. One note on scope before we start: this article is about shower door
                and enclosure panels — the tempered glass in your bathroom — not window glass, which is a different product entirely.
              </p>

              <h2 className="text-3xl font-bold pt-4">Why shower glass cracks — or explodes</h2>
              <p>
                Shower doors are made of tempered safety glass. Tempering locks the panel in permanent internal tension: the surface is
                compressed, the core is stretched. That tension is what makes tempered glass strong and what makes it crumble into small,
                relatively blunt pebbles instead of dagger-like shards when it fails. But it also means the glass has no &quot;partially
                broken&quot; state. Once a crack starts, the stored tension releases through the whole panel — sometimes instantly, sometimes
                hours later, occasionally with the dramatic bang homeowners describe as the door &quot;exploding for no reason.&quot;
              </p>
              <p>
                The usual triggers: a hard knock on the vulnerable edge of the glass, hardware screwed down too tight or worked loose so the
                glass bears on metal, a house settling until the opening pinches the panel, or a nick from installation that finally gives.
                Las Vegas adds its own stress — big temperature swings between a cold bathroom and hot shower water make the glass expand and
                contract daily. And in rare cases a tiny nickel-sulfide inclusion inside the glass itself expands over years until the panel
                fails spontaneously. Whatever the trigger, the outcome is the same: the panel is done.
              </p>

              <h2 className="text-3xl font-bold pt-4">What to do right now</h2>
              <p>
                If the panel has shattered, don&apos;t grab a bare broom right away. Put on shoes and gloves — tempered pebbles are blunter
                than plate glass shards but they still cut, and they travel astonishingly far. Clear a walking path, check nearby rugs and
                drains, and expect to find pieces for days. If the panel is cracked but still standing, keep everyone away from it and
                don&apos;t touch or lean anything against it: a cracked tempered panel can complete its failure at any moment. Don&apos;t try
                to remove it yourself — a panel held by hinges or channel can let go all at once when the hardware is loosened. This is a
                job where professional removal genuinely earns its keep.
              </p>

              <h2 className="text-3xl font-bold pt-4">Why you can&apos;t just order a matching panel</h2>
              <p>
                Here&apos;s the part that surprises people: there is no shelf of replacement shower panels waiting somewhere. Tempered glass
                cannot be cut or drilled after tempering, so every replacement panel must be fabricated from scratch — cut to your opening,
                drilled for your exact hinge and handle positions, polished, then tempered. That&apos;s true even if your enclosure is only a
                few years old. The upside is that the new panel is made for your opening as it is today, not as the builder&apos;s spec sheet
                said it was. If your enclosure came with the house, this is also the natural moment to consider upgrading the whole door — a
                dated framed unit with one dead panel is often better replaced as a set with new <Link to="/shower-doors-las-vegas/frameless" className="text-primary underline hover:text-primary/80">frameless glass</Link> than
                patched panel by panel.
              </p>

              <h2 className="text-3xl font-bold pt-4">How replacement works with Baja Glass and Mirror</h2>
              <p>
                We treat a cracked-panel job like any custom fabrication, because that&apos;s what it is. First, a free in-home visit: we
                safely remove and dispose of the damaged glass, laser-measure the opening, and check the hardware and surrounding panels for
                stress the failure may have caused. Then your new panel is fabricated and tempered to order. On install day we set, align,
                and seal the new glass — most panel replacements are finished in a single short visit. Every step is handled by our own
                installers, the same team behind 1,000+ <Link to="/shower-enclosures-las-vegas" className="text-primary underline hover:text-primary/80">shower doors and enclosures</Link> across
                the Las Vegas valley since 2009.
              </p>
              <p>
                One boundary we&apos;re upfront about: we build and install new glass. We don&apos;t repair other brands&apos; rollers,
                hinges, or frames around a surviving panel — half-fixes on failed enclosures are how people end up paying twice.
              </p>

              <h2 className="text-3xl font-bold pt-4">Can you prevent the next one?</h2>
              <p>
                Mostly, yes. Never let the door slam — soft-close hardware is worth it. Don&apos;t hang wet towels or lean bath toys against
                panels. If a door starts dragging, grinding, or rattling, have it looked at before the glass starts absorbing impacts it was
                never meant to take. And check hinges and clips occasionally: hardware that loosens over time is one of the most common
                slow-motion causes of edge damage.
              </p>
            </div>

            <div className="mt-12 p-8 bg-secondary/50 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-3">Cracked panel? Don&apos;t risk it.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Baja Glass and Mirror removes the damaged glass safely and replaces it with new custom tempered glass, fabricated for your exact opening.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2 justify-center">
                  <Phone className="h-5 w-5" />
                  Call (702) 383-0779 for a free in-home measure
                </a>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default CrackedShowerGlassReplacement;
