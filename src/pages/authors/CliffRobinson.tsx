import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PhoneNumber from "@/components/PhoneNumber";

const AUTHOR_URL = "https://bajaglass.com/authors/cliff-robinson";

/**
 * Author entity page. Blog posts previously credited "Baja Glass & Mirror" — an
 * Organization where schema.org expects a Person — so the site had no author entity at all.
 * This gives the byline something real to point at.
 *
 * Biographical detail beyond what the owner has confirmed (founded the company in 2009) is
 * deliberately left as TODO rather than invented.
 */
const CliffRobinson = () => (
  <div className="min-h-screen">
    <Helmet>
      <link rel="canonical" href={AUTHOR_URL} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${AUTHOR_URL}#person`,
          name: "Cliff Robinson",
          jobTitle: "Owner",
          url: AUTHOR_URL,
          worksFor: { "@type": "Organization", "@id": "https://bajaglass.com/#localbusiness" },
          knowsAbout: [
            "Frameless shower door installation",
            "Custom glass shower enclosures",
            "Glass measuring and fabrication",
            "Hard water damage on shower glass",
          ],
        })}
      </script>
    </Helmet>

    <section className="py-16 bg-gradient-to-br from-charcoal to-primary text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-serif font-bold mb-3">Cliff Robinson</h1>
        <p className="text-lg text-white/90">Owner, Baja Glass &amp; Mirror LLC — Las Vegas, NV</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p>
          Cliff Robinson founded Baja Glass &amp; Mirror in 2009 and has run it in Las Vegas
          ever since. He and his team measure, fabricate and install custom shower doors and
          glass across the valley — from Summerlin and Henderson to Paradise and Enterprise.
        </p>
        <p className="text-muted-foreground">
          {/* TODO(owner): Cliff to supply — years in the glazing trade before founding the
              company, trade certifications held, and a headshot for the byline. Nothing here
              is invented; this paragraph stays short until those details are confirmed. */}
          Baja Glass &amp; Mirror holds a C8 Glass and Glazing license with the Nevada State
          Contractors Board and is bonded and insured.
        </p>
        <div className="not-prose mt-8 flex flex-wrap gap-4">
          <Button asChild variant="cta">
            <PhoneNumber location="author_page" showIcon />
          </Button>
          <Button asChild variant="outline">
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Baja Glass &amp; Mirror</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default CliffRobinson;
