import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, Images } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ProductGallery from "@/components/ProductGallery";
import ServiceAreasBlock from "@/components/ServiceAreasBlock";

const framelessGalleryImages = [
  { src: "/lovable-uploads/dff9a879-f6db-4f4a-908d-2842b809c7e4.png", alt: "Luxury frameless glass shower door with freestanding tub", caption: "Modern Frameless Design" },
  { src: "/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png", alt: "Frameless shower enclosure with chrome hardware", caption: "Chrome Hardware Finish" },
  { src: "/lovable-uploads/fe18e70d-a2bb-43a7-9636-2077c7e662b9.png", alt: "Elegant frameless walk-in shower", caption: "Walk-In Elegance" },
  { src: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png", alt: "Large frameless glass shower enclosure", caption: "Spacious Enclosure" },
  { src: "/lovable-uploads/5691175d-8fb2-4e96-9445-987ca41039fb.png", alt: "Frameless shower door upgrade result", caption: "Complete Transformation" },
  { src: "/lovable-uploads/9642038d-f5d9-4f9d-8096-46dc1eb70052.png", alt: "Contemporary frameless shower design", caption: "Contemporary Style" },
];

const FramelessShowerDoors = () => {
  const faqs = [
    {
      question: "What makes a shower door 'frameless'?",
      answer: "Frameless doors use thicker tempered glass (3/8\" or 1/2\") with minimal metal hardware—just clips, hinges, and handles—creating a clean, open look without full metal framing."
    },
    {
      question: "Is 3/8\" or 1/2\" glass better for my shower?",
      answer: "3/8\" offers excellent strength and clarity for most doors. 1/2\" adds rigidity and a luxury feel—especially useful for larger spans and when you want maximum durability."
    },
    {
      question: "Do frameless doors leak?",
      answer: "When properly measured and installed with correct seals and sweeps, frameless doors are very effective at containing water. We focus on precise fit and quality sealing."
    },
    {
      question: "Can I get low-iron glass for clearer edges?",
      answer: "Yes! Low-iron glass reduces the green tint you see on standard glass edges, creating an ultra-clear, premium appearance that many homeowners prefer."
    },
    {
      question: "How do you keep the door from hitting fixtures?",
      answer: "During measurement, we account for all fixtures, handles, and obstacles to ensure proper door swing clearance and optimal placement of hardware."
    },
    {
      question: "Do you handle custom angles and notches?",
      answer: "Absolutely. We can create custom cutouts, notches, and angled cuts for towel bars, fixtures, benches, and unique architectural features."
    },
    {
      question: "What is the cost of frameless shower door installation in Las Vegas?",
      answer: "Frameless shower door installation in Las Vegas typically ranges from $1,200-$3,000+ depending on size, glass thickness, and hardware. We provide free in-home quotes with exact pricing."
    },
    {
      question: "Do you offer frameless shower door replacement in Las Vegas?",
      answer: "Yes! We replace old, damaged, or outdated shower doors with new frameless designs. Replacement includes removing the old door, preparing the opening, and installing your new frameless door with quality hardware."
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
            "serviceType": "Frameless Shower Door Installation",
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
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Frameless Shower Door",
            "description": "Custom frameless shower doors with premium tempered glass (3/8\" or 1/2\") and quality hardware. Professional installation in Las Vegas.",
            "brand": { "@type": "Brand", "name": "Baja Glass & Mirror" },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "1200",
              "highPrice": "3000",
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-charcoal to-primary text-white">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/dff9a879-f6db-4f4a-908d-2842b809c7e4.png" 
            alt="Modern luxury bathroom with frameless glass shower door and freestanding tub - professional glass installation Las Vegas"
            className="w-full h-full object-cover opacity-75"
            width="1920"
            height="1080"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Frameless Shower Doors Las Vegas NV</h1>
            <p className="text-xl mb-8 text-white/90">Minimal metal, maximum openness—custom glass measured precisely and installed by experts.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
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
            <h2 className="text-3xl font-bold text-center mb-6">Professional Frameless Shower Door Installation</h2>
            <p className="text-lg text-muted-foreground text-center mb-4">
              Frameless shower doors offer a clean, modern look that makes bathrooms feel bigger and brighter. At Baja Glass, we measure, fabricate, and install frameless systems with thick tempered glass, premium hardware, and tight, clean finishes for a leak-resistant fit.
            </p>
            <p className="text-center text-muted-foreground mb-6">
              Need shower doors? Explore all our <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower door options in Las Vegas</Link>. Our expert team handles everything from measurement to final walkthrough.
            </p>
            <p className="text-center text-muted-foreground">
              Learn more about <Link to="/blog/frameless-vs-semi-frameless-shower-doors" className="text-primary underline hover:text-primary/80">comparing frameless and semi-frameless options</Link> or explore our <Link to="/blog/shower-door-installation-cost-las-vegas" className="text-primary underline hover:text-primary/80">complete pricing guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Frameless Shower Door Replacement Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Frameless Shower Door Replacement Las Vegas</h2>
            <p className="text-lg text-muted-foreground text-center mb-6">
              Is your existing shower door outdated, damaged, or no longer functioning properly? Our <strong>frameless shower door replacement</strong> service transforms your bathroom with modern, high-quality glass. We remove your old door, prepare the opening, and install a new frameless system with precision hardware.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">When to Replace</h3>
                <p className="text-sm text-muted-foreground">Cracked glass, worn seals, outdated style, or persistent leaking</p>
              </div>
              <div className="bg-background p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Upgrade Benefits</h3>
                <p className="text-sm text-muted-foreground">Modern aesthetics, better sealing, increased home value</p>
              </div>
              <div className="bg-background p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Fast Turnaround</h3>
                <p className="text-sm text-muted-foreground">Most replacements completed in 2-3 weeks from measurement</p>
              </div>
            </div>
            <div className="text-center">
              <Button variant="cta" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Replacement Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frameless Shower Doors Las Vegas - Design Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Door Types</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Inline, corner, neo‑angle, alcove configurations</li>
                <li>• Steam shower-ready designs</li>
                <li>• Single and multiple panel layouts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Glass Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 3/8" or 1/2" tempered safety glass</li>
                <li>• Clear or low‑iron (ultra‑clear) options</li>
                <li>• Frosted and patterned glass available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hardware Finishes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Matte black, polished chrome</li>
                <li>• Brushed nickel, brass tones</li>
                <li>• Custom handle styles and placements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Mounting Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Low-profile clips for minimal look</li>
                <li>• Structural channels where needed</li>
                <li>• Precision hinge placement</li>
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

      {/* Craftsmanship */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Beauty and Durability</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Precise laser measurements and expert edge polishing create seamless alignment and consistent reveals. We address out‑of‑plumb walls, kneewalls, and custom cutouts to ensure doors close cleanly and seals sit properly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Clean Silicone Lines</h3>
                <p className="text-sm text-muted-foreground">Minimal, precise sealing for a refined finish</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Proper Pitch</h3>
                <p className="text-sm text-muted-foreground">Designed to help mitigate water splash</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Hardware Alignment</h3>
                <p className="text-sm text-muted-foreground">Careful torque and positioning for smooth operation</p>
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

      {/* Frameless Shower Door Gallery */}
      <ProductGallery
        title="Frameless Shower Door Gallery"
        description="Browse our recent frameless shower door installations across Las Vegas, Henderson, and Summerlin. Each project showcases our precision craftsmanship and attention to detail."
        images={framelessGalleryImages}
      />
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Installed by Local Experts</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Serving Henderson, Summerlin, and the entire Las Vegas Valley with precision frameless shower door installation. Expect clean, careful work and clear communication from our local team.
          </p>
          <div className="bg-background p-6 rounded-lg inline-block">
            <p className="font-semibold">Baja Glass & Mirror LLC</p>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* Popular in Las Vegas Valley */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Popular in Las Vegas Valley</h3>
            <p className="text-muted-foreground mb-6">
              Frameless shower doors are especially popular in{" "}
              <Link to="/shower-doors-henderson-nv" className="text-primary font-semibold hover:underline">
                Henderson
              </Link>
              ,{" "}
              <Link to="/shower-doors-summerlin-nv" className="text-primary font-semibold hover:underline">
                Summerlin
              </Link>
              , and{" "}
              <Link to="/shower-doors-paradise-nv" className="text-primary font-semibold hover:underline">
                Paradise
              </Link>
              {" "}homes. Our team has completed hundreds of installations across these neighborhoods.
            </p>
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
                <CardTitle className="text-lg">Semi-Frameless Doors</CardTitle>
                <CardDescription>Balanced style with strategic metal support for added durability</CardDescription>
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
                <CardTitle className="text-lg">Sliding Doors</CardTitle>
                <CardDescription>Space-saving systems with smooth-glide performance</CardDescription>
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
                <CardTitle className="text-lg">Custom Enclosures</CardTitle>
                <CardDescription>Neo-angle and alcove designs for unique spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/custom-enclosures" onClick={() => window.scrollTo(0, 0)}>
                    Learn More
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
          <h2 className="text-3xl font-bold text-center mb-12">Frameless Shower Door FAQs</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready for a Frameless Upgrade?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Get expert advice and a precise measurement from our experienced team.</p>
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

export default FramelessShowerDoors;