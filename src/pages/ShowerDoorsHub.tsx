import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero-shower-door.jpg";
import { Helmet } from "react-helmet-async";

const ShowerDoorsHub = () => {
  const services = [
    {
      title: "Frameless Shower Doors",
      description: "Clean, modern lines with minimal metal and thick tempered glass for an open, airy feel. Precision-measured and expertly installed for a tight, leak-resistant fit.",
      href: "/shower-doors-las-vegas/frameless",
      popular: true
    },
    {
      title: "Semi-Frameless & Framed Doors",
      description: "Balanced style and support with strategic metal accents (semi‑frameless) or classic full framing. A durable, polished look that suits a wide range of bathrooms.",
      href: "/shower-doors-las-vegas/semi-frameless-framed"
    },
    {
      title: "Sliding Shower Doors",
      description: "Space-saving performance with smooth, reliable rollers and sturdy tracks. Ideal for tight bathrooms or where a swinging door isn't practical.",
      href: "/shower-doors-las-vegas/sliding"
    },
    {
      title: "Hinged/Pivot Doors",
      description: "Classic swing doors with precise alignment for clean closure and dependable seals. Hinged and pivot options complement both frameless and semi-frameless designs.",
      href: "/shower-doors-las-vegas/hinged"
    },
    {
      title: "Custom Shower Enclosures",
      description: "Inline, neo-angle, alcove configurations tailored to your space. We handle out-of-plumb walls, kneewalls, and unique layouts with accuracy.",
      href: "/shower-doors-las-vegas/custom-enclosures"
    },
    {
      title: "Steam Shower Enclosures",
      description: "Sealed, steam‑ready enclosures with transoms and precise gasketing. Create a spa-like experience with premium glass and carefully fitted hardware.",
      href: "/shower-doors-las-vegas/steam-enclosures"
    },
  ];

  const faqs = [
    {
      question: "What's the difference between frameless, semi-frameless, and framed?",
      answer: "Frameless uses thicker glass with minimal metal for a clean, modern look. Semi-frameless balances openness with additional metal support. Framed uses full metal framing for a classic outline."
    },
    {
      question: "How do I decide between sliding and hinged doors?",
      answer: "Sliding systems save space and work well in tighter bathrooms. Hinged/pivot doors provide a wide, open feel where there's room for door swing."
    },
    {
      question: "Do you offer low-iron glass and protective coatings?",
      answer: "Yes. Low-iron reduces the green tint for clearer edges, and hydrophobic coatings help repel water spots and make cleaning easier."
    },
    {
      question: "Can you handle custom layouts like neo-angle or steam showers?",
      answer: "Absolutely. We measure and fabricate for inline, neo-angle, alcove, and steam configurations, including unique cutouts and angled walls."
    },
    {
      question: "Do you replace existing shower doors?",
      answer: "Yes. We specialize in full shower door replacements and upgrades—swapping out old glass, hardware, and seals for a modern, leak-free result."
    },
    {
      question: "What areas do you serve?",
      answer: "Las Vegas, Henderson, Summerlin, North Las Vegas, Paradise, Spring Valley, Enterprise, Boulder City, and nearby communities."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Shower Doors Las Vegas",
            "description": "Professional shower door installation and replacement services in Las Vegas. Custom frameless, sliding, hinged doors and enclosures.",
            "url": "https://bajaglass.com/shower-doors-las-vegas/",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Baja Glass & Mirror LLC",
              "image": "https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4280 Reno Ave, Ste A",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89118",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "36.1215",
                "longitude": "-115.2269"
              },
              "telephone": "(702) 383-0779",
              "url": "https://bajaglass.com",
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Shower Door Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Frameless Shower Doors",
                      "description": "Custom frameless shower door installation with premium tempered glass",
                      "provider": { "@type": "LocalBusiness", "name": "Baja Glass & Mirror LLC" }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sliding Shower Doors",
                      "description": "Space-saving sliding shower door installation and replacement",
                      "provider": { "@type": "LocalBusiness", "name": "Baja Glass & Mirror LLC" }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hinged Shower Doors",
                      "description": "Classic hinged and pivot shower door installation",
                      "provider": { "@type": "LocalBusiness", "name": "Baja Glass & Mirror LLC" }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Shower Enclosures",
                      "description": "Made-to-measure shower enclosures for unique spaces",
                      "provider": { "@type": "LocalBusiness", "name": "Baja Glass & Mirror LLC" }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shower Glass Repair",
                      "description": "Professional shower glass repair and replacement services",
                      "provider": { "@type": "LocalBusiness", "name": "Baja Glass & Mirror LLC" }
                    }
                  }
                ]
              },
              "areaServed": {
                "@type": "Place",
                "name": "Las Vegas Valley",
                "containsPlace": [
                  { "@type": "Place", "name": "Las Vegas, NV" },
                  { "@type": "Place", "name": "Henderson, NV" },
                  { "@type": "Place", "name": "Summerlin, NV" },
                  { "@type": "Place", "name": "Paradise, NV" },
                  { "@type": "Place", "name": "Spring Valley, NV" },
                  { "@type": "Place", "name": "Enterprise, NV" }
                ]
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bajaglass.com/" },
                { "@type": "ListItem", "position": 2, "name": "Shower Doors Las Vegas", "item": "https://bajaglass.com/shower-doors-las-vegas/" }
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-primary to-charcoal">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        {/* Hero Image */}
        <div className="absolute inset-0">
           <img 
            src="/lovable-uploads/9cfdfabc-5ef4-4012-b9f5-01271979a5c7.png" 
            alt="Custom frameless shower door installation in Las Vegas"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>


        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading */}
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Custom Shower Doors in 
                <span className="block bg-gradient-to-r from-white via-chrome-light to-white bg-clip-text text-transparent animate-glow drop-shadow-2xl">
                  Las Vegas
                </span>
                <span className="block text-2xl md:text-3xl font-normal mt-2 text-white/90">
                  Frameless & Sliding Glass Options
                </span>
              </h1>
            </div>
            
            {/* Above-fold service bullets */}
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16" style={{ animationDelay: '0.15s' }}>
              <ul className="text-white/90 text-lg space-y-1 mb-6 max-w-2xl">
                <li>✓ Custom frameless shower doors</li>
                <li>✓ Sliding glass shower doors</li>
                <li>✓ Shower door replacement & repair</li>
                <li>✓ Serving Las Vegas, Henderson, Summerlin & nearby areas</li>
              </ul>
            </div>

            {/* Subheading */}
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-white/95 mb-6 max-w-2xl leading-relaxed font-light drop-shadow-lg">
                Expertly crafted shower doors featuring premium glass, precision hardware, and professional installation.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="animate-fade-in-up mb-8 text-left md:text-center lg:text-left lg:ml-16" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 ml-2 text-lg">Trusted by homeowners across the Las Vegas Valley</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 text-left md:justify-center lg:justify-start lg:ml-16 mb-8" style={{ animationDelay: '0.6s' }}>
              <Button variant="hero" size="lg" asChild className="animate-scale-in">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get My Free Shower Door Estimate</Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>

            {/* Badges */}
            <div className="animate-fade-in-up flex flex-wrap gap-3 text-left md:justify-center lg:justify-start lg:ml-16" style={{ animationDelay: '0.8s' }}>
              {['Licensed', 'Bonded', 'Insured', 'Local Team', 'Strong Warranty'].map((badge) => (
                <Badge 
                  key={badge} 
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs px-3 py-1 hover:bg-white/20 transition-all duration-300"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block p-4 rounded-full bg-accent/10 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Star className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6">Professional Shower Door Installation in Las Vegas</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              At Baja Glass, we design, fabricate, and install shower doors that fit your space and style. From minimalist frameless designs to space‑saving sliders and <Link to="/shower-enclosures-las-vegas" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>custom shower enclosures</Link>, every detail is measured and installed for a tight, leak‑resistant fit.
            </p>
            <p className="text-muted-foreground mb-6">
              Our expert <strong>frameless shower door installers</strong> handle everything from measurement to final walkthrough—delivering precision fit, clean silicone work, and dependable performance.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Rated 4.9/5 by Las Vegas homeowners</strong> – <Link to="/reviews" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>Read our customer reviews</Link>.
            </p>
            <p className="text-muted-foreground">
              Wondering about pricing? See our full guide on <Link to="/blog/shower-door-installation-cost-las-vegas" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>shower door installation cost in Las Vegas</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-to-br from-secondary/20 via-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Shower Door Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="relative hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/20 border-0 shadow-lg animate-scale-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {service.popular && (
                  <Badge className="absolute -top-1 left-4 bg-gradient-to-r from-accent to-charcoal text-white border-0 shadow-lg animate-glow">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="relative">
                  <CardTitle className="text-xl font-serif group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="mb-6 text-base leading-relaxed">{service.description}</CardDescription>
                  <Button variant="outline" asChild className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                    <Link to={service.href} onClick={() => window.scrollTo(0, 0)}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-charcoal mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">From consultation to installation, we ensure every step is perfectly executed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { title: "Consultation & Measurement", description: "We visit your home, confirm opening specs, and review styles and finishes." },
              { title: "Design & Recommendations", description: "Clear options tailored to your space and timeline." },
              { title: "Fabrication", description: "Tempered glass cut to size; edges polished; hardware prepared." },
              { title: "Professional Installation", description: "Clean, careful, code‑compliant. Most installs completed in a single day." },
              { title: "Final Walkthrough & Warranty", description: "Care tips and a strong guarantee for peace of mind." }
            ].map((step, index) => (
              <div key={step.title} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-accent to-charcoal text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg animate-glow">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red-accent/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="font-semibold mb-3 text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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

      {/* FAQs */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shower Door FAQs</h2>
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

      {/* Trusted Shower Door Installers Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Trusted Shower Door Installers in Las Vegas</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Looking for reliable <strong>shower door installers in Las Vegas</strong>? Our licensed, insured team has installed thousands of shower doors across the valley. We serve homeowners in <Link to="/shower-doors-henderson-nv" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>Henderson</Link>, <Link to="/shower-doors-summerlin-nv" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>Summerlin</Link>, <Link to="/shower-doors-paradise-nv" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>Paradise</Link>, and throughout Clark County.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/shower-enclosures-las-vegas" className="bg-secondary/30 p-4 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
                <span className="font-medium">Shower Enclosures</span>
              </Link>
              <Link to="/gallery" className="bg-secondary/30 p-4 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
                <span className="font-medium">Gallery</span>
              </Link>
              <Link to="/shower-doors-las-vegas/frameless" className="bg-secondary/30 p-4 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
                <span className="font-medium">Frameless Doors</span>
              </Link>
              <Link to="/shower-doors-las-vegas/custom-enclosures" className="bg-secondary/30 p-4 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
                <span className="font-medium">Custom Designs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Better Shower Door?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Start with a professional measurement and tailored recommendations from the Baja Glass team.</p>
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
    </div>
  );
};

export default ShowerDoorsHub;