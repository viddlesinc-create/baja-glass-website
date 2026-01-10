import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Ruler, Palette, Settings, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ProductGallery from "@/components/ProductGallery";
import PhoneNumber from "@/components/PhoneNumber";

const customDoorsGalleryImages = [
  { src: "/lovable-uploads/d89fa07d-a693-478f-8b0d-e12f2607c1e7.png", alt: "Custom frameless shower door with sliding mechanism", caption: "Custom Sliding Design" },
  { src: "/lovable-uploads/22adea8d-10a9-4780-8904-b61e4a017de8.png", alt: "Under-stair custom shower door installation", caption: "Unique Space Solution" },
  { src: "/lovable-uploads/70012b37-e3d6-4261-b567-0a42b8632737.png", alt: "Custom corner shower door with clear glass", caption: "Corner Configuration" },
  { src: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png", alt: "Large custom walk-in shower door", caption: "Walk-In Design" },
  { src: "/lovable-uploads/965cff5c-c7a5-4e41-b978-72fc31a0550e.png", alt: "Neo-angle custom shower door with black hardware", caption: "Neo-Angle Custom" },
  { src: "/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png", alt: "Custom inline shower door with pebble accents", caption: "Inline Custom Design" },
];

const CustomShowerDoorsLasVegas = () => {
  const faqs = [
    {
      question: "How do I find custom shower doors near me in Las Vegas?",
      answer: "Baja Glass provides custom shower door design and installation throughout Las Vegas, Henderson, Summerlin, and the entire valley. We offer free in-home consultations where we measure your space and discuss design options. Call (702) 383-0779 to schedule."
    },
    {
      question: "What makes a shower door 'custom' vs. standard?",
      answer: "Custom shower doors are made-to-measure for your specific space, unlike pre-fabricated standard sizes. This includes unique dimensions, angled cuts, notches for fixtures, and specialized hardware placement to fit your bathroom perfectly."
    },
    {
      question: "How long does custom shower door installation take?",
      answer: "From measurement to installation, custom shower doors typically take 2-3 weeks. The initial consultation is 30-45 minutes, fabrication takes 7-14 days, and installation is usually completed in 2-4 hours."
    },
    {
      question: "Can you create custom shower doors for unusual bathroom layouts?",
      answer: "Absolutely! We specialize in custom solutions for non-standard spaces including angled walls, kneewalls, benches, sloped ceilings, and unique architectural features throughout Las Vegas homes."
    },
    {
      question: "What's the cost of custom shower doors in Las Vegas?",
      answer: "Custom shower doors in Las Vegas range from $1,200-$4,500+ depending on size, glass type, and hardware. Frameless custom doors with low-iron glass and premium hardware are at the higher end. We provide free detailed quotes."
    },
    {
      question: "Do you offer custom shower door glass types and finishes?",
      answer: "Yes! We offer clear, low-iron (ultra-clear), frosted, rain, and patterned glass options. Hardware finishes include matte black, polished chrome, brushed nickel, and brass to match your bathroom design."
    }
  ];

  const customizationOptions = [
    {
      icon: Ruler,
      title: "Made-to-Measure Sizing",
      description: "Precise laser measurements ensure your custom door fits perfectly, even for non-standard openings and unique spaces."
    },
    {
      icon: Palette,
      title: "Glass Selection",
      description: "Choose from clear, low-iron ultra-clear, frosted, rain, and decorative patterns in 3/8\" or 1/2\" tempered glass."
    },
    {
      icon: Settings,
      title: "Hardware Customization",
      description: "Select from matte black, chrome, brushed nickel, and brass finishes with various handle styles and hinge placements."
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
            "serviceType": "Custom Shower Door Installation",
            "name": "Custom Shower Doors Las Vegas",
            "description": "Made-to-measure custom shower doors in Las Vegas. Frameless, sliding, hinged designs with premium glass and hardware options.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baja Glass & Mirror LLC",
              "telephone": "(702) 383-0779",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4280 Reno Ave, Ste A",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89118"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Las Vegas", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Henderson", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Summerlin", "containedIn": "Clark County, NV" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom Shower Door Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Frameless Shower Doors" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Made-to-Measure Glass Doors" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Shower Door Design" } }
              ]
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
            src="/lovable-uploads/d89fa07d-a693-478f-8b0d-e12f2607c1e7.png" 
            alt="Custom shower doors Las Vegas - made-to-measure glass door installation by Baja Glass"
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
            <h1 className="text-5xl font-bold mb-6">Custom Shower Doors Las Vegas</h1>
            <p className="text-xl mb-4 text-white/90">Made-to-measure glass doors designed and fabricated for your unique bathroom space.</p>
            <p className="text-lg mb-8 text-white/80">
              From non-standard openings to specialty configurations, we create custom shower doors that fit perfectly and look stunning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Design Consultation</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <PhoneNumber 
                  location="custom_doors_hero"
                  showIcon={true}
                  showPrefix={true}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Made-to-Measure Shower Door Installation</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Baja Glass, we specialize in <strong>custom shower doors in Las Vegas</strong> that are designed, fabricated, and installed to your exact specifications. Whether you need a door for an unusual opening, angled walls, or a unique bathroom layout, our team creates solutions that standard doors can't match.
            </p>
            <p className="text-muted-foreground">
              Looking for professional installation? Learn about our <Link to="/shower-door-installation-las-vegas" className="text-primary underline hover:text-primary/80">shower door installation process</Link> or explore <Link to="/shower-doors-las-vegas/frameless" className="text-primary underline hover:text-primary/80">frameless shower door options</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Custom Glass Shower Doors - Your Design, Your Way</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Every custom shower door starts with understanding your space and vision. We offer complete customization across sizing, glass, and hardware.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {customizationOptions.map((option) => (
              <Card key={option.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-4">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Door Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Custom Shower Door Configurations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Door Styles We Custom Build</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Frameless custom doors for maximum openness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Semi-frameless with strategic metal accents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Hinged/pivot doors with custom swing angles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Sliding doors for space-constrained bathrooms</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Special Custom Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Angled cuts for sloped ceilings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Notches for benches and fixtures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Non-standard heights and widths</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Integrated towel bars and handles</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule Custom Measurement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ProductGallery
        title="Custom Shower Door Projects"
        description="Browse our portfolio of custom shower doors installed throughout Las Vegas, Henderson, and Summerlin. Each project showcases our precision craftsmanship for unique spaces."
        images={customDoorsGalleryImages}
      />

      {/* Process Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Professional Custom Shower Door Installation Las Vegas NV</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our custom door process ensures a perfect fit every time, from initial design to final installation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-sm text-muted-foreground">We discuss your vision and assess your bathroom</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Precision Measurement</h3>
              <p className="text-sm text-muted-foreground">Laser-accurate measurements of your space</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Custom Fabrication</h3>
              <p className="text-sm text-muted-foreground">Your door is built to exact specifications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Expert Installation</h3>
              <p className="text-sm text-muted-foreground">Professional installation with clean finishes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Custom Shower Doors Throughout Las Vegas Valley</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We design and install custom shower doors across the entire Las Vegas Valley, including Henderson, Summerlin, Paradise, Spring Valley, Enterprise, and Green Valley.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/shower-doors-henderson-nv" className="text-primary hover:underline">Henderson</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/shower-doors-summerlin-nv" className="text-primary hover:underline">Summerlin</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/shower-doors-paradise-nv" className="text-primary hover:underline">Paradise</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/shower-doors-spring-valley-nv" className="text-primary hover:underline">Spring Valley</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/shower-doors-enterprise-nv" className="text-primary hover:underline">Enterprise</Link>
          </div>
          <div className="bg-secondary/50 p-6 rounded-lg inline-block">
            <p className="font-semibold">Baja Glass & Mirror LLC</p>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Custom Door Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Shower Door Installation</CardTitle>
                <CardDescription>Professional installation services for all door types</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-door-installation-las-vegas" onClick={() => window.scrollTo(0, 0)}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Custom Enclosures</CardTitle>
                <CardDescription>Complete enclosure solutions for unique spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/custom-enclosures" onClick={() => window.scrollTo(0, 0)}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Frameless Doors</CardTitle>
                <CardDescription>Premium frameless options for modern bathrooms</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/frameless" onClick={() => window.scrollTo(0, 0)}>
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
          <h2 className="text-3xl font-bold text-center mb-12">Custom Shower Doors Las Vegas - FAQs</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready for Custom Shower Doors?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Get a free design consultation and quote for your custom shower door project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Consultation</Link>
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
    </div>
  );
};

export default CustomShowerDoorsLasVegas;
