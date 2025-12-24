import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Droplets, Images } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ProductGallery from "@/components/ProductGallery";

const steamGalleryImages = [
  { src: "/lovable-uploads/63a30f9e-c80e-421e-9968-d4ed286876f4.png", alt: "Steam shower before installation", caption: "Before Upgrade" },
  { src: "/lovable-uploads/70012b37-e3d6-4261-b567-0a42b8632737.png", alt: "Completed steam shower enclosure", caption: "After Installation" },
  { src: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png", alt: "Large walk-in steam enclosure", caption: "Walk-In Design" },
  { src: "/lovable-uploads/965cff5c-c7a5-4e41-b978-72fc31a0550e.png", alt: "Corner steam shower configuration", caption: "Corner Configuration" },
  { src: "/lovable-uploads/22e931d0-6005-492b-ba38-baab99486f52.png", alt: "Custom steam shower enclosure", caption: "Custom Enclosure" },
  { src: "/lovable-uploads/30ead577-c1b4-4057-a808-f7d0d612125f.png", alt: "Steam enclosure with transom", caption: "Transom Design" },
];

const SteamShowerEnclosures = () => {
  const faqs = [
    {
      question: "Do I need an operable transom on a steam shower?",
      answer: "Yes, an operable transom window is essential for steam showers. It allows you to control ventilation, release excess steam, and regulate temperature for comfort and safety."
    },
    {
      question: "How do you keep steam from escaping around the door?",
      answer: "We use specialized clear gaskets, precise door alignment, and comprehensive sealing around all edges. The enclosure is designed as a complete system to contain steam effectively."
    },
    {
      question: "What glass thickness is recommended for steam enclosures?",
      answer: "We typically recommend 1/2\" tempered glass for steam applications due to the larger spans often required and the additional structural integrity needed for steam containment."
    },
    {
      question: "Can you use low‑iron glass in a steam shower?",
      answer: "Absolutely! Low‑iron glass provides exceptional clarity and works perfectly in steam applications. The ultra-clear appearance enhances the spa-like experience."
    },
    {
      question: "How are gaskets and seals maintained over time?",
      answer: "Steam shower seals should be inspected periodically and cleaned with mild soap. We provide detailed maintenance instructions and can replace seals as needed to maintain optimal performance."
    },
    {
      question: "Can you convert my existing shower into a steam shower enclosure?",
      answer: "In many cases, yes! We evaluate the existing space, plumbing, and structural requirements to determine feasibility and provide solutions for steam shower conversion."
    }
  ];

  const steamFeatures = [
    {
      title: "Tight Perimeter Sealing",
      description: "Clear gaskets and sweeps strategically placed to retain steam while maintaining clean aesthetics"
    },
    {
      title: "Operable Transom Windows",
      description: "Ventilation control and temperature management with smooth operation and proper sealing"
    },
    {
      title: "Precision Door Alignment",
      description: "Exact door undercuts and thresholds planned for optimal steam containment"
    },
    {
      title: "Premium Glass Options", 
      description: "Tempered and low‑iron glass selections for clarity, safety, and spa-like ambiance"
    },
    {
      title: "Condensate Management",
      description: "Hardware placement and slopes designed to handle moisture and condensation effectively"
    },
    {
      title: "Complete System Integration",
      description: "Fixed panels and doors coordinated for total steam integrity and reliable performance"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Steam Shower Enclosures Boulder City & Paradise | Sealed Glass Systems | Baja Glass</title>
        <meta name="description" content="Professional steam shower enclosures in Boulder City, Paradise & Las Vegas Valley. Sealed systems with operable transoms, precise gasketing, and premium tempered glass for luxury spa-like experience at home." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://bajaglass.com/shower-doors-las-vegas/steam-enclosures" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Steam Shower Enclosures Boulder City & Paradise | Sealed Glass Systems | Baja Glass" />
        <meta property="og:description" content="Professional steam shower enclosures in Boulder City, Paradise & Las Vegas Valley. Sealed systems with operable transoms and precise gasketing for spa-like experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/shower-doors-las-vegas/steam-enclosures" />
        <meta property="og:image" content="https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" />
        <meta property="og:site_name" content="Baja Glass" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Steam Shower Enclosures Boulder City & Paradise | Sealed Glass Systems | Baja Glass" />
        <meta name="twitter:description" content="Professional steam shower enclosures in Boulder City, Paradise & Las Vegas Valley. Sealed systems with operable transoms for spa-like experience." />
        <meta name="twitter:image" content="https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Steam Shower Enclosure Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baja Glass"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Las Vegas",
                "containedIn": "Clark County, NV"
              },
              {
                "@type": "City",
                "name": "Boulder City",
                "containedIn": "Clark County, NV"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/custom-enclosure.jpg" 
            alt="Custom steam shower enclosure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-primary/60 to-charcoal/80"></div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)]"></div>
        </div>
        
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Boulder City & Paradise
                <span className="block bg-gradient-to-r from-white via-chrome-light to-white bg-clip-text text-transparent animate-glow drop-shadow-2xl">
                  Steam Enclosures
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-white/95 mb-6 max-w-2xl leading-relaxed font-light drop-shadow-lg">
                Sealed, steam-ready enclosures with precise gasketing, transoms, and premium glass—designed for comfort and performance.
              </p>
            </div>

            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 text-left md:justify-center lg:justify-start lg:ml-16" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="lg" asChild className="shadow-xl">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="shadow-xl">
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild className="shadow-xl">
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
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block p-4 rounded-full bg-red-accent/10 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-accent/20 flex items-center justify-center">
                <Droplets className="h-6 w-6 text-red-accent" />
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Create a spa-like experience at home with a custom steam shower enclosure. Baja Glass designs, measures, and installs steam-ready systems with tight sealing, durable tempered glass, and carefully placed hardware to contain steam and moisture while maintaining a clean, modern look.
            </p>
          </div>
        </div>
      </section>

      {/* Steam-Specific Features */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Built for Steam, Designed for Comfort</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steamFeatures.map((feature, index) => (
              <div 
                key={feature.title} 
                className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold mb-3 text-lg">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 animate-fade-in">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule My Measurement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">Custom Layouts for Any Bath</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4">Configuration Options</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Inline, corner, neo‑angle, and alcove configurations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fixed panels and doors planned for steam integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Operable transom windows for ventilation control</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Custom cutouts for fixtures and steam equipment</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-4">Glass & Hardware</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>3/8" or 1/2" glass thickness based on span and design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tempered and low‑iron glass options for clarity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Matte black, chrome, brushed nickel, brass finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Optional hydrophobic coatings for easier cleaning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & Sealing */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">Precision Sealing and Clean Installation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Steam enclosures demand precise measurement, thoughtful gasketing, and clean silicone lines. We balance containment with everyday usability, ensuring doors swing or slide smoothly and seals remain discreet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-red-accent to-charcoal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Steam Containment</h3>
              <p className="text-sm text-muted-foreground">Even reveals and true plumb for reliable closure</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-accent to-charcoal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">◊</span>
              </div>
              <h3 className="font-semibold mb-2">Clear Gaskets</h3>
              <p className="text-sm text-muted-foreground">Precise gaskets, sweeps, and transom seals</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-accent to-charcoal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Refined Look</h3>
              <p className="text-sm text-muted-foreground">Clean, minimal silicone work for elegance</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="phone" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: (702) 383-0779
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Steam Enclosure Gallery */}
      <ProductGallery
        title="Steam Shower Enclosure Gallery"
        description="Browse our steam shower installations featuring sealed systems, operable transoms, and precision gasketing for spa-like luxury at home."
        images={steamGalleryImages}
      />

      {/* Local Service */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Installed Across the Las Vegas Valley</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Serving Boulder City, Paradise, and the entire Las Vegas Valley with careful measurement, planning, and installation for luxury steam shower applications.
          </p>
          <div className="bg-secondary/50 p-6 rounded-lg inline-block shadow-lg">
            <div className="flex items-center gap-3 justify-center mb-4">
              <img 
                src="/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" 
                alt="Baja Glass — Shower Doors & Glass in Las Vegas"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore More Shower Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Frameless Doors</CardTitle>
                <CardDescription>Modern minimalist designs with thick glass</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/frameless" onClick={() => window.scrollTo(0, 0)}>
                    View Frameless
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Custom Enclosures</CardTitle>
                <CardDescription>Tailored solutions for unique spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/custom-enclosures" onClick={() => window.scrollTo(0, 0)}>
                    View Custom
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
                    View Semi-Frameless
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">Steam Shower FAQs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="bg-background p-6 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Build Your Steam Oasis?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Transform your bathroom into a luxury spa experience with a custom steam shower enclosure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
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

export default SteamShowerEnclosures;