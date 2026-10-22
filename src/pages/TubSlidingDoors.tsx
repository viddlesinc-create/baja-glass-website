import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Body copy is not yet approved. Every COPY marker below is a placeholder that must be
// replaced with approved text before this page can merge.
const TubSlidingDoors = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sliding Glass Shower Door Installation for Tubs",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Las Vegas",
                "containedIn": "Clark County, NV"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/bypass-sliding-glass-doors-3.webp"
            alt="Sliding glass shower doors installed on a bathtub"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            fetchpriority="high"
            loading="eager"
            decoding="sync"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative container mx-auto px-4 py-20 z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Sliding Glass Shower Doors for Your Existing Tub in Las Vegas</h1>
            <p className="text-xl text-white/90">[COPY: hero subhead]</p>
          </div>
        </div>
      </section>

      {/* 1 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Turn Your Tub Into a Shower With Sliding Glass Doors</h2>
            <p className="text-lg text-muted-foreground mb-4">[COPY: Turn Your Tub Into a Shower With Sliding Glass Doors]</p>
            <p>
              <Link to="/shower-enclosures-las-vegas" className="text-primary hover:underline font-medium" onClick={() => window.scrollTo(0, 0)}>
                Custom shower enclosures in Las Vegas
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Glass Only: We Install on Your Existing Tub (no tub removal, tile or plumbing)</h2>
            <p className="text-lg text-muted-foreground">[COPY: Glass Only: We Install on Your Existing Tub]</p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Frameless, Semi-Frameless and Framed Sliding Tub Doors</h2>
            <p className="text-lg text-muted-foreground mb-4">[COPY: Frameless, Semi-Frameless and Framed Sliding Tub Doors]</p>
            <p>
              <Link to="/shower-doors-las-vegas/sliding" className="text-primary hover:underline font-medium" onClick={() => window.scrollTo(0, 0)}>
                Sliding shower doors in Las Vegas
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Glass, Hardware and Coatings for Las Vegas Hard Water</h2>
            <p className="text-lg text-muted-foreground mb-6">[COPY: Glass, Hardware and Coatings for Las Vegas Hard Water]</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 3/8" or 1/2" tempered glass</li>
              <li>• Low-iron glass</li>
              <li>• Hydrophobic coatings</li>
              <li>• Finishes: polished chrome, matte black, brushed nickel, brass</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Process: Measure, Fabricate, Install</h2>
            <p className="text-lg text-muted-foreground mb-6">[COPY: Our Process: Measure, Fabricate, Install]</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Free in-home measurement</li>
              <li>• About 2 weeks from measure to install</li>
              <li>• Install usually 4–6 hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Serving Las Vegas Since 2010</h2>
            <p className="text-lg text-muted-foreground mb-6">[COPY: Serving Las Vegas Since 2010]</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Licensed, bonded, insured</li>
              <li>• Warranty: 1-Year Parts & Labor + lifetime hardware</li>
            </ul>
            <div className="bg-background p-6 rounded-lg inline-block">
              <p className="font-semibold">Baja Glass & Mirror LLC</p>
              <p className="text-muted-foreground">4280 W Reno Ave, Ste A, Las Vegas, NV 89118</p>
              <p className="text-muted-foreground">(702) 383-0779</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">FAQ</h2>
            <p className="text-lg text-muted-foreground">[COPY: FAQ — questions and answers about the glass only]</p>
          </div>
        </div>
      </section>

      {/* Single CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Button variant="glass" size="lg" asChild>
            <a href="tel:+17023830779" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Book a free in-home glass measurement
            </a>
          </Button>
          <p className="mt-4 text-primary-foreground/80">Call (702) 383-0779 · Mon–Fri 8–4</p>
        </div>
      </section>
    </div>
  );
};

export default TubSlidingDoors;
