import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, Star, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PhoneNumber from "@/components/PhoneNumber";
import ServiceAreasBlock from "@/components/ServiceAreasBlock";
import FramelessQualification from "@/components/FramelessQualification";
import StickyMobileCallBar from "@/components/StickyMobileCallBar";

const ShowerEnclosuresLasVegas = () => {
  const enclosureTypes = [
    {
      title: "Inline Shower Enclosures",
      description: "Clean, straight-line designs with door and fixed panels for standard and oversized openings.",
      features: ["Perfect for tub-to-shower conversions", "Multiple panel configurations", "Frameless or semi-frameless options"],
      href: "/shower-doors-las-vegas/frameless"
    },
    {
      title: "Corner Shower Enclosures",
      description: "Space-efficient designs that maximize bathroom layout with two glass walls meeting at a corner.",
      features: ["90-degree and neo-angle options", "Sliding or hinged door choices", "Custom sizing available"],
      href: "/shower-doors-las-vegas/custom-enclosures"
    },
    {
      title: "Neo-Angle Shower Enclosures",
      description: "Diamond-shaped enclosures with angled entry—ideal for corner installations with unique appeal.",
      features: ["Maximizes corner space", "Dramatic visual impact", "Multiple hardware finishes"],
      href: "/shower-doors-las-vegas/custom-enclosures"
    },
    {
      title: "Steam Shower Enclosures",
      description: "Fully sealed enclosures with ceiling panels and transoms for spa-like steam experiences.",
      features: ["Complete steam containment", "Operable transoms for ventilation", "Premium gasketing systems"],
      href: "/shower-doors-las-vegas/steam-enclosures"
    },
    {
      title: "Walk-In Shower Enclosures",
      description: "Open-concept designs with minimal barriers for modern, accessible shower experiences.",
      features: ["Curbless entry options", "ADA-compliant configurations", "Sleek, contemporary aesthetic"],
      href: "/shower-doors-las-vegas/frameless"
    },
    {
      title: "Alcove Shower Enclosures",
      description: "Three-wall installations with a single glass door or panel—the most common bathroom configuration.",
      features: ["Cost-effective solution", "Wide style variety", "Quick installation"],
      href: "/shower-doors-las-vegas/sliding"
    }
  ];

  const faqs = [
    {
      question: "What types of shower enclosures are available in Las Vegas?",
      answer: "We offer inline, corner, neo-angle, steam, walk-in, and alcove shower enclosures in Las Vegas. Each type comes in frameless, semi-frameless, or framed options with various glass thicknesses and hardware finishes."
    },
    {
      question: "How much do glass shower enclosures cost in Las Vegas, NV?",
      answer: "Glass shower enclosures in Las Vegas range from $800 for basic semi-frameless alcove units to $4,500+ for custom frameless steam enclosures. Pricing depends on size, glass type, hardware finish, and configuration complexity."
    },
    {
      question: "Can you install custom shower enclosures for unusual bathroom layouts?",
      answer: "Absolutely! We specialize in custom shower enclosures for non-standard spaces including angled walls, kneewalls, benches, and unique architectural features throughout Henderson, Summerlin, and Las Vegas."
    },
    {
      question: "What's the best shower enclosure for a small bathroom?",
      answer: "Corner and neo-angle shower enclosures maximize space in smaller bathrooms. Sliding doors also work well as they don't require door swing clearance. Frameless glass creates an open feel that makes small bathrooms appear larger."
    },
    {
      question: "Do you offer shower enclosure installation in Henderson and Summerlin?",
      answer: "Yes! We install shower enclosures throughout the Las Vegas Valley including Henderson, Summerlin, Paradise, Spring Valley, Enterprise, Green Valley, and North Las Vegas."
    },
    {
      question: "How long does shower enclosure installation take?",
      answer: "Most standard shower enclosure installations are completed in 2-4 hours. Custom enclosures with multiple panels or complex configurations may take 4-6 hours. We complete most projects in a single visit."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Self-referencing canonical. Previously pointed at /shower-doors-las-vegas/custom-enclosures,
            but GSC URL Inspection reports googleCanonical as this URL itself and the page as
            "Submitted and indexed" — Google rejected the cross-canonical. The two pages also win
            different queries, so they are not duplicates. */}
        <link rel="canonical" href="https://bajaglass.com/shower-enclosures-las-vegas" />
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Shower Enclosure Installation",
            "name": "Shower Enclosures Las Vegas",
            "description": "Professional shower enclosure installation in Las Vegas. Custom glass shower enclosures including inline, corner, neo-angle, and steam designs.",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "areaServed": [
              { "@type": "City", "name": "Las Vegas" },
              { "@type": "City", "name": "Henderson" },
              { "@type": "City", "name": "Summerlin" },
              { "@type": "City", "name": "Paradise" },
              { "@type": "City", "name": "Spring Valley" }
            ],
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "800",
              "highPrice": "4500",
              "priceCurrency": "USD"
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
        <div className="absolute inset-0">
          <img 
            src="/images/custom-frameless-shower-door-installation.webp" 
            alt="Custom glass shower enclosure installation Las Vegas with modern hardware"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-primary/60 to-charcoal/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white">Custom Glass Enclosures</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shower Enclosures Las Vegas | Custom Glass Shower Enclosures</h1>
            <p className="text-xl mb-8 text-white/90">
              Premium glass shower enclosures for Las Vegas homes. Inline, corner, neo-angle, and steam designs custom-built to your exact specifications.
            </p>
            <div className="flex items-center gap-2 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 ml-2">Trusted by homeowners across the Las Vegas Valley</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <PhoneNumber 
                  location="enclosures_hero"
                  showIcon={true}
                  showPrefix={true}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FramelessQualification />

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Glass Shower Enclosures in Las Vegas, NV</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Transform your bathroom with custom <strong>shower enclosures in Las Vegas</strong>. At Baja Glass, we design, fabricate, and install premium glass enclosures tailored to your space—from sleek inline configurations to elaborate steam shower systems.
            </p>
            <p className="text-muted-foreground mb-6">
              Looking for professional shower door services? Explore our full range of <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower doors in Las Vegas</Link>, including custom designs made-to-measure for unique spaces.
            </p>
            <p className="text-muted-foreground">
              Serving <strong>Henderson</strong>, <strong>Summerlin</strong>, <strong>Paradise</strong>, <strong>Spring Valley</strong>, and the entire Las Vegas Valley with expert measurement, precise fabrication, and professional installation.
            </p>
          </div>
        </div>
      </section>

      {/* Enclosure Types */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Types of Shower Enclosures We Install</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our range of <strong>glass shower enclosures in Las Vegas, NV</strong>. Each style can be customized with your choice of glass type and hardware finish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enclosureTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={type.href} onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Baja Glass for Your Shower Enclosure?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Precision Measurement", desc: "Laser-accurate measurements ensure a perfect fit" },
              { title: "Premium Materials", desc: "Thick tempered glass and quality hardware" },
              { title: "Expert Installation", desc: "Licensed, experienced installers" },
              { title: "Local Service", desc: "Based in Las Vegas, serving the entire valley" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Options */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Glass & Hardware Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4">Glass Types</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Clear tempered glass (3/8" or 1/2")</li>
                <li>• Low-iron ultra-clear for minimal green tint</li>
                <li>• Frosted and rain patterns for privacy</li>
                <li>• Hydrophobic protective coatings</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4">Hardware Finishes</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Polished chrome (standard)</li>
                <li>• Brushed nickel</li>
                <li>• Matte black</li>
                <li>• Brass and gold options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Shower Enclosure Installation Across Las Vegas</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We install custom <strong>glass shower enclosures</strong> throughout the Las Vegas Valley:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {["Las Vegas", "Henderson", "Summerlin", "Paradise", "Spring Valley", "Enterprise", "Green Valley", "North Las Vegas"].map(area => (
              <Badge key={area} variant="secondary" className="text-sm px-4 py-2">{area}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shower Enclosure FAQs</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link to="/shower-doors-las-vegas/frameless" className="bg-secondary/30 p-6 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
              <h3 className="font-semibold mb-2">Frameless Doors</h3>
              <p className="text-sm text-muted-foreground">Modern, minimal design</p>
            </Link>
            <Link to="/shower-doors-las-vegas/sliding" className="bg-secondary/30 p-6 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
              <h3 className="font-semibold mb-2">Sliding Doors</h3>
              <p className="text-sm text-muted-foreground">Space-saving solutions</p>
            </Link>
            <Link to="/shower-doors-las-vegas/steam-enclosures" className="bg-secondary/30 p-6 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
              <h3 className="font-semibold mb-2">Steam Enclosures</h3>
              <p className="text-sm text-muted-foreground">Spa-like experience</p>
            </Link>
            <Link to="/gallery" className="bg-secondary/30 p-6 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
              <h3 className="font-semibold mb-2">Gallery</h3>
              <p className="text-sm text-muted-foreground">View our work</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Custom Shower Enclosure?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Get a free quote for glass shower enclosures in Las Vegas. Professional measurement, fabrication, and installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Quote</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (702) 383-0779
              </a>
            </Button>
          </div>
        </div>
      </section>
      <ServiceAreasBlock />
      <StickyMobileCallBar />
    </div>
  );
};

export default ShowerEnclosuresLasVegas;
