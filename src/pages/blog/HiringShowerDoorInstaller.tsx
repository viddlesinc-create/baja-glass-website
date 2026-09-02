import { Button } from "@/components/ui/button";
import ArticleByline from "@/components/ArticleByline";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const HiringShowerDoorInstaller = () => {
  return (
    <>
      <Helmet>
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "What to Ask Before Hiring a Shower Door Shop",
            "description": "Seven questions that separate professional shower door shops from the rest — licensing, glass specs, measuring, warranties, and who does the work.",
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
            "image": "https://bajaglass.com/images/professional-shower-door-installation-gallery-showcase.webp",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bajaglass.com/blog/what-to-ask-before-hiring-shower-door-installer"
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
              What to Ask Before Hiring a Shower Door Shop
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Seven questions that separate a professional glass shop from a handyman with a glass supplier — and the answers you should expect to hear.
            </p>
            <ArticleByline datePublished="2026-09-02" dateModified="2026-09-02" wordCount={817} />
          </div>
        </header>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <img
              src="/images/professional-shower-door-installation-gallery-showcase.webp"
              alt="Professionally installed custom frameless shower door in a Las Vegas bathroom"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-6 text-lg leading-relaxed">
              <p>
                <strong>A shower door is heavy tempered glass hanging on hinges in the wettest room of your house.</strong> Done right,
                it&apos;s a decade-plus of trouble-free showers. Done wrong, it leaks into your walls, sags out of alignment, or fails
                outright. The good news: a few direct questions before you hire will tell you nearly everything. Here are the seven we&apos;d
                ask — and, since we answer them ourselves every week at Baja Glass and Mirror, the answers a good shop should give.
              </p>

              <h2 className="text-3xl font-bold pt-4">1. Are you licensed and insured for glazing work?</h2>
              <p>
                In Nevada, glass and glazing work is licensed by the State Contractors Board, and any legitimate shop will hand over its
                license number without hesitation — you can verify it on the Board&apos;s website in about a minute. Insurance matters just
                as much: an uninsured installer who drops a panel or floods a wall cavity becomes your problem, not theirs. Treat any
                hesitation on this question as your answer.
              </p>

              <h2 className="text-3xl font-bold pt-4">2. Who actually does the installation?</h2>
              <p>
                Some outfits sell the job and subcontract the work to whoever is available that week. That&apos;s not automatically bad, but
                it means the person in your bathroom may not be the person whose reputation is on the invoice. Ask directly: employees or
                subs? At our shop, the answer is our own installers, every job — the same team that measured your opening is accountable for
                how the glass fits it.
              </p>

              <h2 className="text-3xl font-bold pt-4">3. How do you measure, and is the glass custom-fabricated?</h2>
              <p>
                The difference between a custom shop and a stock-door reseller shows up at this question. Walls lean and curbs slope in
                nearly every bathroom; a professional laser-measures the opening and fabricates glass to match it, while a stock door gets
                shimmed and caulked until the gaps mostly hide. Ask whether the glass is cut and tempered for your opening specifically.
                For a <Link to="/shower-doors-las-vegas/frameless" className="text-primary underline hover:text-primary/80">frameless shower door</Link> especially,
                there is no frame to hide sloppy measurement — custom fabrication isn&apos;t a luxury, it&apos;s the product.
              </p>

              <h2 className="text-3xl font-bold pt-4">4. What glass and hardware will you use?</h2>
              <p>
                You want specifics, not adjectives. Expect to hear tempered safety glass in a named thickness — 3/8&quot; or 1/2&quot; for
                frameless work — and hardware brands the shop will stand behind, in finishes you choose. If the answer is vague
                (&quot;good glass, don&apos;t worry&quot;), the materials will be whatever was cheapest that month. A shop proud of its
                materials will happily bore you with details.
              </p>

              <h2 className="text-3xl font-bold pt-4">5. What does the warranty cover — glass, hardware, and labor?</h2>
              <p>
                Get the warranty terms in writing and note what&apos;s covered: the glass, the hardware, and — critically — the workmanship.
                A leak six months in is almost always an installation issue, not a product issue, so a warranty that covers parts but not
                labor covers very little. Ask how warranty service works too: a local shop with its own installers can come back and fix
                something; a broker has to find someone willing.
              </p>

              <h2 className="text-3xl font-bold pt-4">6. Can I see recent local work and reviews?</h2>
              <p>
                Photos of the shop&apos;s own installations — not manufacturer stock imagery — and a trail of local reviews tell you what
                the finished work actually looks like in homes like yours. Look for volume and consistency over time rather than a perfect
                score with a handful of ratings. A shop that has been installing in the same city for years, under the same name, has
                nowhere to hide, and that&apos;s exactly what you want.
              </p>

              <h2 className="text-3xl font-bold pt-4">7. What happens on install day — and what does the quote include?</h2>
              <p>
                A professional quote is boring in the best way: measurement, fabrication, removal and disposal of the old door, installation,
                sealing, and cleanup, each accounted for, with no &quot;we&apos;ll see&quot; line items. Ask how long the install takes
                (a few hours for most standard doors), whether the crew protects floors and fixtures, and when the shower can get wet again
                (about 24 hours, while the silicone cures). Our <Link to="/shower-door-installation-las-vegas" className="text-primary underline hover:text-primary/80">shower door installation</Link> page
                walks through what that day looks like when it&apos;s done properly.
              </p>

              <h2 className="text-3xl font-bold pt-4">The pattern behind all seven</h2>
              <p>
                Every question above is really the same question: does this shop control its own work? Licensed, insured, measuring with its
                own people, fabricating for your opening, standing behind the result in writing. Ask all seven and you&apos;ll rarely be
                surprised by the answer to the eighth — how the door looks in ten years.
              </p>
            </div>

            <div className="mt-12 p-8 bg-secondary/50 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-3">Ask us all seven</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Baja Glass and Mirror has been measuring, fabricating, and installing custom shower doors in Las Vegas since 2009 — and we like these questions.
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

export default HiringShowerDoorInstaller;
