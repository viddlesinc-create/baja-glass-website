import { Button } from "@/components/ui/button";
import ArticleByline from "@/components/ArticleByline";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const HowLongShowerDoorInstallation = () => {
  return (
    <>
      <Helmet>
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How Long Does Shower Door Installation Take?",
            "description": "The real timeline for a custom shower door in Las Vegas: measurement, fabrication lead time, and what happens on install day.",
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
            "image": "https://bajaglass.com/images/installation-process.jpg",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bajaglass.com/blog/how-long-does-shower-door-installation-take"
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
              How Long Does Shower Door Installation Take?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              The honest timeline from your first phone call to a finished, watertight shower door — including the waiting parts nobody mentions.
            </p>
            <ArticleByline datePublished="2026-09-02" dateModified="2026-09-02" wordCount={833} />
          </div>
        </header>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <img
              src="/images/installation-process.jpg"
              alt="Installer fitting a custom frameless shower door during a Las Vegas installation"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-6 text-lg leading-relaxed">
              <p>
                <strong>The install itself usually takes a few hours. The full process — from first call to finished door — takes a few weeks.</strong> The
                difference between those two numbers is where most of the confusion (and most of the disappointment with other shops) comes from,
                so let&apos;s walk through the whole timeline honestly, stage by stage.
              </p>

              <h2 className="text-3xl font-bold pt-4">Stage 1: The in-home measurement</h2>
              <p>
                Everything starts with a measurement visit, and it&apos;s the stage that determines whether the rest of the project goes smoothly.
                At Baja Glass and Mirror we schedule a free in-home measure at your convenience — the appointment itself typically takes well under
                an hour. Our installer laser-measures the opening, checks the walls and curb for plumb and level, and talks through glass
                thickness, hardware finish, and door swing with you on the spot.
              </p>
              <p>
                Why so much fuss over measuring? Because almost no shower opening is perfectly square. Walls lean a few degrees, curbs slope
                toward the drain, and tile adds thickness unevenly. A frameless door has no frame to hide those imperfections behind — the glass
                must be cut to match the opening exactly. Measuring is the cheapest stage of the project and the most expensive one to get wrong.
              </p>

              <h2 className="text-3xl font-bold pt-4">Stage 2: Fabrication — the waiting part</h2>
              <p>
                Once you approve the quote, your glass goes into fabrication. This is the stage people rarely budget time for: every panel is cut,
                polished, drilled for hardware, and then tempered to order. Tempering is a heat-treating process that makes the glass several
                times stronger than ordinary glass, and it has to happen <em>after</em> cutting — tempered glass cannot be cut or drilled later.
                That is also why there is no rushing this stage: the glass literally does not exist until it is made for your opening.
              </p>
              <p>
                Fabrication lead times vary with the complexity of the enclosure, the glass type, and how busy the tempering schedule is. A simple
                single door moves faster than a multi-panel steam enclosure with low-iron glass and custom-drilled hardware. When we quote your
                project, we give you the current lead time for your specific configuration rather than a one-size-fits-all promise.
              </p>

              <h2 className="text-3xl font-bold pt-4">Stage 3: Install day</h2>
              <p>
                This is the part that surprises people in a good way. Most standard <Link to="/shower-door-installation-las-vegas" className="text-primary underline hover:text-primary/80">shower door installations</Link> are
                completed in a single visit of roughly two to four hours. The crew protects your floors, sets and shims the fixed panels, hangs
                the door, aligns the hardware, and seals the perimeter. Larger custom or steam enclosures can take longer, but even those are
                usually done within a day.
              </p>
              <p>
                One caveat worth knowing: silicone sealant needs time to cure before the shower gets wet. Plan on keeping the new enclosure dry
                for about 24 hours after installation. It&apos;s a small wait at the end of the project, and skipping it is the classic way to
                compromise an otherwise perfect seal.
              </p>

              <h2 className="text-3xl font-bold pt-4">What can stretch the timeline?</h2>
              <p>
                A few things legitimately add time, and it&apos;s better to know them up front. If your bathroom is mid-remodel, we can&apos;t
                measure until the tile is finished — measurements taken off bare backer board become wrong the moment tile goes on. Out-of-stock
                hardware finishes can add days. And if a panel arrives from tempering with a flaw, we reject it and have it remade rather than
                install glass we wouldn&apos;t put in our own homes. After 1,000+ installations across the Las Vegas valley, we&apos;ve learned
                that a short delay beats a permanent compromise every time.
              </p>

              <h2 className="text-3xl font-bold pt-4">How to keep your project on schedule</h2>
              <p>
                You control more of the timeline than you might think. Finish tile work before booking the measure. Pick your hardware finish
                early — it&apos;s the decision people most often revisit, and changes after fabrication starts mean starting over. Clear a path to
                the bathroom on install day. And if you&apos;re replacing an old <Link to="/shower-doors-las-vegas/frameless" className="text-primary underline hover:text-primary/80">framed door with frameless glass</Link>,
                let us handle the tear-out — we remove and dispose of the old door as part of the job, which is faster and safer than doing it
                yourself.
              </p>

              <h2 className="text-3xl font-bold pt-4">The bottom line</h2>
              <p>
                Budget a few weeks from first call to finished shower, with only a couple of hours of actual disruption in your home. The
                measurement is quick, the fabrication is the wait, and the install is a single visit with a 24-hour cure at the end. That&apos;s
                the whole story — any shop promising dramatically faster is either stocking generic sizes that won&apos;t fit your opening
                precisely, or skipping steps you&apos;ll pay for later.
              </p>
            </div>

            <div className="mt-12 p-8 bg-secondary/50 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-3">Ready to start the clock?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Baja Glass and Mirror measures, fabricates, and installs custom shower doors across the Las Vegas valley — most installs done in one visit.
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

export default HowLongShowerDoorInstallation;
