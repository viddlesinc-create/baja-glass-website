import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PhoneNumber from "@/components/PhoneNumber";
import ProductGallery from "@/components/ProductGallery";
import ServiceAreasBlock from "@/components/ServiceAreasBlock";

const CustomEnclosures = () => {
  const customEnclosureImages = [
    {
      src: "/lovable-uploads/d89fa07d-a693-478f-8b0d-e12f2607c1e7.png",
      alt: "Custom frameless shower enclosure with sliding doors and stone tile walls",
      caption: "Frameless sliding enclosure - Spring Valley"
    },
    {
      src: "/lovable-uploads/22adea8d-10a9-4780-8904-b61e4a017de8.png",
      alt: "Under-stair custom shower installation with frameless glass door",
      caption: "Custom under-stair enclosure - Las Vegas"
    },
    {
      src: "/lovable-uploads/70012b37-e3d6-4261-b567-0a42b8632737.png",
      alt: "Custom corner shower enclosure with clear glass panels",
      caption: "Corner enclosure modernization - Spring Valley"
    },
    {
      src: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png",
      alt: "Large walk-in shower with custom frameless glass panels",
      caption: "Walk-in custom enclosure - Enterprise"
    },
    {
      src: "/lovable-uploads/965cff5c-c7a5-4e41-b978-72fc31a0550e.png",
      alt: "Corner shower enclosure with black hardware and built-in seating",
      caption: "Neo-angle with bench - Henderson"
    },
    {
      src: "/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png",
      alt: "Custom shower with pebble accent strip and frameless glass enclosure",
      caption: "Custom inline enclosure - Summerlin"
    }
  ];
  const faqs = [
    {
      question: "Can you handle neo‑angle and steam enclosures?",
      answer: "Absolutely! We specialize in complex layouts including neo‑angle corners, steam-ready designs with proper sealing, and unique architectural challenges."
    },
    {
      question: "What glass thickness should I consider?",
      answer: "For most custom enclosures, 3/8\" provides excellent strength. For larger spans or steam applications, 1/2\" offers added rigidity and premium feel."
    },
    {
      question: "How do you manage uneven walls or kneewalls?",
      answer: "We use precise laser measurement and custom templating to account for out-of-plumb walls, varying heights, and unique structural elements."
    },
    {
      question: "Are there hardware finish and handle options?",
      answer: "Yes! We offer matte black, polished chrome, brushed nickel, and brass finishes with various handle styles to match your design preferences."
    },
    {
      question: "What's included in the measurement and installation process?",
      answer: "We provide complete service: initial consultation, precise measurement, custom fabrication, professional installation, and final walkthrough with care instructions."
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
            "serviceType": "Custom Shower Enclosure Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baja Glass & Mirror LLC",
              "areaServed": {
                "@type": "State",
                "name": "Nevada"
              }
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
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom Shower Enclosures",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Neo-Angle Shower Enclosures"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Steam Shower Enclosures"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Inline Shower Enclosures"
                  }
                }
              ]
            }
          })}
        </script>
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Custom Shower Enclosure",
            "description": "Custom shower enclosures including neo-angle, corner, inline, and steam designs. Made to precise measurements for Las Vegas homes.",
            "brand": { "@type": "Brand", "name": "Baja Glass & Mirror" },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "1500",
              "highPrice": "4000",
              "offerCount": "6",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "27",
              "bestRating": "5",
              "worstRating": "1"
            }
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/d89fa07d-a693-478f-8b0d-e12f2607c1e7.png" 
            alt="Custom frameless shower enclosure with sliding doors and stone tile walls - professional installation by Baja Glass Las Vegas"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-primary/50 to-charcoal/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Custom Shower Enclosures in Enterprise & Spring Valley</h1>
            <p className="text-xl mb-8 text-white/90">Inline, corner, neo‑angle, alcove, and steam—made to measure for a perfect fit.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <PhoneNumber 
                  location="custom_enclosures_hero"
                  showIcon={true}
                  showPrefix={true}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-6">
              From complex angles to steam‑ready designs, custom enclosures demand precision. We measure, fabricate, and install to your layout for a polished fit and clean finishes.
            </p>
            <p className="text-center text-muted-foreground">
              Explore our full range of <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower doors in Las Vegas</Link> including made-to-measure door solutions. Our expert team handles projects of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Enclosures Gallery */}
      <ProductGallery
        title="Custom Enclosure Projects"
        description="Browse our portfolio of custom shower enclosures, from neo-angle corners to steam-ready designs, installed throughout the Las Vegas Valley."
        images={customEnclosureImages}
      />

      {/* Clark County Geographic Qualifier */}
      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Serving the entire Las Vegas valley, Baja Glass is the premier specialist for <strong className="text-foreground">custom shower enclosures in Clark County, NV</strong>. We take pride in delivering bespoke solutions that perfectly match your vision and space. Our process is designed to provide homeowners throughout the region with the highest quality <strong className="text-foreground">custom glass shower enclosures in Clark County, NV</strong>, from initial design consultation to professional installation and final walkthrough.
            </p>
          </div>
        </div>
      </section>

      {/* Layouts & Configurations */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Enclosure Types We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Layout Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Inline and panel‑door combinations</li>
                <li>• Neo‑angle and corner enclosures</li>
                <li>• Alcove and tub‑to‑shower conversions</li>
                <li>• Steam shower configurations with transoms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Special Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom cutouts for fixtures and benches</li>
                <li>• Angled walls and unique measurements</li>
                <li>• Multiple panel configurations</li>
                <li>• Integrated storage solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Glass & Hardware</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 3/8" and 1/2" tempered glass options</li>
                <li>• Clear, low‑iron, and patterned glass</li>
                <li>• Full range of hardware finishes</li>
                <li>• Custom handle and hinge placement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Installation Expertise</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Precise measurement and templating</li>
                <li>• Clean edge polishing and finishing</li>
                <li>• Proper sealing and water management</li>
                <li>• Code-compliant professional installation</li>
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

      {/* Technical Excellence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Built to Your Space</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              We account for out‑of‑square walls, benches, niches, and unique cutouts. Edges are polished, reveals are even, and hardware is positioned for both function and aesthetics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Accurate Cuts</h3>
                <p className="text-sm text-muted-foreground">Precise angle and notch fabrication</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Clean Lines</h3>
                <p className="text-sm text-muted-foreground">Professional silicone and sealing work</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Proper Pitch</h3>
                <p className="text-sm text-muted-foreground">Water management and threshold solutions</p>
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

      {/* Materials & Finishes */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Materials & Finish Options</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Glass Options</h3>
                <p className="text-muted-foreground">Clear and low‑iron; frosted, rain, and specialty patterns available in 3/8" or 1/2" tempered thickness.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Hardware Finishes</h3>
                <p className="text-muted-foreground">Matte black, polished chrome, brushed nickel, brass—hinges, handles, clips, and channels to match your style.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Protective Coatings</h3>
                <p className="text-muted-foreground">Optional hydrophobic coatings help repel water spots and simplify routine cleaning maintenance.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Custom Features</h3>
                <p className="text-muted-foreground">Transoms for steam, integrated shelving, towel bars, and unique architectural accommodations.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>See What's Possible in Our Gallery →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Service */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Installed Across the Las Vegas Valley</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Serving Enterprise, Spring Valley, and the entire Las Vegas Valley with precise custom shower enclosure measurement, planning, and installation for unique applications.
          </p>
          <div className="bg-secondary/50 p-6 rounded-lg inline-block">
            <p className="font-semibold">Baja Glass & Mirror LLC</p>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Frameless Doors</CardTitle>
                <CardDescription>Minimal metal for a clean, modern aesthetic</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/frameless" onClick={() => window.scrollTo(0, 0)}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Semi-Frameless Doors</CardTitle>
                <CardDescription>Balanced style with strategic support</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/semi-frameless-framed" onClick={() => window.scrollTo(0, 0)}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Hinged Doors</CardTitle>
                <CardDescription>Classic swing doors with precise alignment</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/hinged" onClick={() => window.scrollTo(0, 0)}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Steam Enclosures</CardTitle>
                <CardDescription>Sealed systems for spa-like experience</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/steam-enclosures" onClick={() => window.scrollTo(0, 0)}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Sliding Doors</CardTitle>
                <CardDescription>Space-saving bypass systems</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/sliding" onClick={() => window.scrollTo(0, 0)}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Shower Glass Repair</CardTitle>
                <CardDescription>Professional repair and replacement</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas" onClick={() => window.scrollTo(0, 0)}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Custom Enclosure FAQs</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-background p-6 rounded-lg">
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
          <h2 className="text-3xl font-bold mb-4">Let's Design Your Perfect Enclosure</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Transform your unique space with a custom-built shower enclosure that fits perfectly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
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

export default CustomEnclosures;