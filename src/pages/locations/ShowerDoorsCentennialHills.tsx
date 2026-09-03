import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ShieldCheck, Ruler } from "lucide-react";

const ShowerDoorsCentennialHills = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="absolute inset-0">
          <img
            src="/images/contemporary-frameless-shower-low-iron-glass.webp"
            alt="Custom frameless shower door installed in a Centennial Hills Las Vegas bathroom"
            className="w-full h-full object-cover opacity-75"
            width="1920"
            height="1080"
            fetchpriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Shower Doors in Centennial Hills</h1>
            <p className="text-xl mb-8 text-white/90">
              Custom frameless shower doors, measured in your home and installed by Baja Glass and Mirror — the shower door company Las Vegas homeowners have trusted since 2009.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (702) 383-0779 for a free in-home measure
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Shower door installation in Centennial Hills</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Our lead product is the custom <Link to="/shower-doors-las-vegas/frameless" className="text-primary underline hover:text-primary/80">frameless shower door</Link>: thick tempered glass, minimal hardware, and a clean, open look that suits the newer homes across Centennial Hills, Providence, and Skye Canyon. Every door starts with a free in-home laser measurement, because Centennial Hills bathrooms — like most — are rarely perfectly square, and frameless glass leaves no frame to hide a bad measurement behind.
            </p>
            <p>
              We fabricate each panel to your exact opening, then our own installers — never subcontractors — set, align, and seal the door for a watertight fit. Most standard installations are finished in a single visit. With 20+ years of combined glazing experience and 1,000+ shower doors installed across the valley, we know what holds up in Las Vegas homes.
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Frameless, sliding, and custom options</h2>
          <div className="space-y-4 text-lg text-muted-foreground mb-8">
            <p>
              Frameless is where we start, but it isn't the only fit for every bathroom. Sliding and bypass doors save space in tub enclosures and narrow bathrooms; custom enclosures handle corner, neo-angle, and walk-in layouts; and steam-ready enclosures seal the shower for spa-style heat. Whatever the configuration, the glass is tempered, the hardware is quality, and the measurement is precise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Frameless doors</h3>
                <p className="text-muted-foreground">Hinged and fixed-panel frameless systems in 3/8&quot; and 1/2&quot; tempered glass.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sliding doors</h3>
                <p className="text-muted-foreground">Smooth-glide bypass and sliding systems for tubs and tight spaces.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Custom enclosures</h3>
                <p className="text-muted-foreground">Corner, neo-angle, walk-in, and steam-ready enclosures built to your opening.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Replacement */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Shower door replacement (full upgrade, not repair)</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              If your builder-grade framed door is corroding, leaking, or simply dated, we replace it with brand-new custom glass. We remove and dispose of the old door, prepare the opening, and install a new frameless or sliding system built for your exact space. We design and install new glass only — we don&apos;t repair or service other brands&apos; hardware, because a full replacement is the fix that lasts.
            </p>
            <p>
              Learn more about how the process works on our <Link to="/shower-door-installation-las-vegas" className="text-primary underline hover:text-primary/80">shower door installation</Link> page, from the first measurement to the final seal.
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Why Centennial Hills homeowners pick Baja Glass and Mirror</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-accent mt-1 shrink-0" />
              <p className="text-lg text-muted-foreground">Locally owned since 2009 — and first-responder owned. We stand behind every install with a workmanship warranty.</p>
            </div>
            <div className="flex items-start gap-3">
              <Ruler className="h-6 w-6 text-accent mt-1 shrink-0" />
              <p className="text-lg text-muted-foreground">Free in-home laser measurement, so the glass fits your opening — not a stock size forced into it.</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-accent mt-1 shrink-0" />
              <p className="text-lg text-muted-foreground">Most installs completed in a single visit, with a 98% on-time completion record and thousands of happy customers.</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
              <p className="text-lg text-muted-foreground">Our own employees handle measurement, fabrication, and installation — never subcontractors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service area / NAP */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Serving Centennial Hills from our Reno Ave shop</h2>
          <div className="space-y-4 text-lg text-muted-foreground mb-8">
            <p>
              Baja Glass and Mirror fabricates and installs from our shop at 4280 W Reno Ave Ste A, Las Vegas, NV 89118 — a straight run up the 215 to Centennial Hills. We serve the whole area, including Providence, Skye Canyon, Tule Springs, and the neighborhoods around Centennial Center.
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <p className="font-semibold text-foreground mb-2">Baja Glass and Mirror</p>
              <p className="text-muted-foreground">4280 W Reno Ave Ste A, Las Vegas, NV 89118</p>
              <p className="text-muted-foreground">Mon–Fri 8am–4pm · Sat &amp; Sun closed</p>
              <p className="text-muted-foreground mt-2">
                <a href="tel:+17023830779" className="text-primary underline hover:text-primary/80">(702) 383-0779</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready for a new shower door?</h2>
          <p className="text-xl mb-8 text-white/90">
            Tell us about your bathroom and we&apos;ll schedule a free in-home measure at a time that works for you.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="tel:+17023830779" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call (702) 383-0779 for a free in-home measure
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ShowerDoorsCentennialHills;
