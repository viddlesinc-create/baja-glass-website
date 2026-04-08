import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Images } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ProductGallery from "@/components/ProductGallery";
import ServiceAreasBlock from "@/components/ServiceAreasBlock";
import { trackPhoneClick } from "@/lib/analytics";

const slidingGalleryImages = [
  { src: "/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png", alt: "Sliding glass shower door installation", caption: "Smooth-Glide System" },
  { src: "/lovable-uploads/2145af91-ce61-458d-a311-72b26193aeb2.png", alt: "Bypass sliding shower doors completed project", caption: "Bypass Configuration" },
  { src: "/lovable-uploads/cd86f335-efa7-4203-92ce-e32d77e9b26b.png", alt: "Sliding shower door before installation", caption: "Before Upgrade" },
  { src: "/lovable-uploads/7d880084-fd2a-4d13-9b02-6bc5661be634.png", alt: "Sliding doors on bathtub enclosure", caption: "Tub Enclosure" },
  { src: "/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png", alt: "Bypass sliding glass doors", caption: "Space-Saving Design" },
  { src: "/lovable-uploads/92357ff9-fc77-40cb-b708-fb8fe634aa42.png", alt: "Modern sliding shower system", caption: "Modern Aesthetics" },
];

const SlidingShowerDoors = () => {
  const faqs = [
    {
      question: "What's the difference between single sliding and bypass?",
      answer: "Single sliding has one moving panel that slides along a fixed panel. Bypass systems have two panels that slide past each other, providing wider access options."
    },
    {
      question: "Can sliding doors work on tubs and showers?",
      answer: "Yes! We install sliding systems on both shower-only and tub/shower combinations, with proper sealing and hardware for each application."
    },
    {
      question: "Do sliding doors seal as well as hinged doors?",
      answer: "When properly installed with quality rollers, tracks, and seals, sliding doors provide excellent water containment and smooth operation."
    },
    {
      question: "Are soft-close systems available?",
      answer: "Yes, we offer soft-close roller systems that prevent slamming and provide smooth, controlled door movement for a premium feel."
    },
    {
      question: "Can I choose different handle styles?",
      answer: "Absolutely! We offer various handle styles including ladder pulls, compact handles, and integrated towel bars in multiple finishes."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sliding Shower Door Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baja Glass & Mirror LLC"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Las Vegas",
                "containedIn": "Clark County, NV"
              },
              {
                "@type": "City",
                "name": "Henderson",
                "containedIn": "Clark County, NV"
              }
            ]
          })}
        </script>
        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png"
            alt="Sliding glass shower door installation with smooth-glide system - professional Las Vegas installation"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative container mx-auto px-4 py-20 z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Sliding Shower Doors Las Vegas</h1>
            <p className="text-xl mb-8 text-white/90">Smooth‑glide systems that save space and elevate your bath.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2" onClick={() => trackPhoneClick("sliding_doors")}>
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="#gallery" className="flex items-center gap-2">
                  <Images className="h-5 w-5" />
                  View Gallery
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center">
              Sliding shower doors deliver space‑saving performance with sleek style. We install high‑quality roller and track systems, align panels for smooth operation, and seal edges for dependable splash control.
            </p>
          </div>
        </div>
      </section>

      {/* System Options */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sliding Configurations & Finishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">System Types</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Single sliding door systems</li>
                <li>• Bypass (two-panel) configurations</li>
                <li>• Soft‑close roller systems available</li>
                <li>• Heavy-duty tracks for large panels</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hardware Finishes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Matte black for modern appeal</li>
                <li>• Polished chrome for classic look</li>
                <li>• Brushed nickel for warm tones</li>
                <li>• Brass accents available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Glass Compatibility</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Clear and low‑iron options</li>
                <li>• Select patterned and frosted glass</li>
                <li>• 3/8" and 1/2" thickness options</li>
                <li>• Custom sizing for any opening</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Handle Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ladder pulls in various lengths</li>
                <li>• Compact handles for tight spaces</li>
                <li>• Integrated towel bar handles</li>
                <li>• Custom placement options</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule My Measurement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Glide Performance You Can Feel</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              We align tracks and rollers precisely so doors slide smoothly and close cleanly. Careful tolerance, seal placement, and track leveling help reduce splashing and sticking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">True Alignment</h3>
                <p className="text-sm text-muted-foreground">Even reveals and consistent gaps</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Quality Rollers</h3>
                <p className="text-sm text-muted-foreground">High-grade bearings and brackets</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Seal Placement</h3>
                <p className="text-sm text-muted-foreground">Accurate seals and sweeps for water control</p>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="cta" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Shower Door Gallery */}
      <ProductGallery
        title="Sliding Shower Door Gallery"
        description="See our sliding door installations featuring smooth-glide systems, bypass configurations, and space-saving designs throughout the Las Vegas Valley."
        images={slidingGalleryImages}
      />

      {/* Local Service */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Installed by Local Experts</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Proudly serving Henderson and the entire Las Vegas Valley with expert sliding shower door installation. Expect clean, careful work and clear communication from our experienced team.
          </p>
          <div className="bg-background p-6 rounded-lg inline-block">
            <p className="font-semibold">Baja Glass & Mirror LLC</p>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Other Shower Door Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Frameless Doors</CardTitle>
                <CardDescription>Modern, minimal metal design for open feel</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/frameless" onClick={() => window.scrollTo(0, 0)}>
                    Explore Frameless
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Hinged Doors</CardTitle>
                <CardDescription>Classic swing doors with wide opening</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/hinged" onClick={() => window.scrollTo(0, 0)}>
                    Explore Hinged
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Semi-Frameless</CardTitle>
                <CardDescription>Balanced design with strategic support</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/semi-frameless-framed" onClick={() => window.scrollTo(0, 0)}>
                    Explore Semi-Frameless
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sliding Shower Door FAQs</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Upgrade to Smooth‑Glide Sliding Doors</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Experience the convenience and style of professionally installed sliding shower doors.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2" onClick={() => trackPhoneClick("sliding_doors")}>
                <Phone className="h-5 w-5" />
                Call Now: (702) 383-0779
              </a>
            </Button>
          </div>
        </div>
      </section>
      <ServiceAreasBlock />
    </div>
  );
};

export default SlidingShowerDoors;