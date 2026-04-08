import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Clock, Shield, Wrench, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PhoneNumber from "@/components/PhoneNumber";
import { trackPhoneClick } from "@/lib/analytics";

const ShowerDoorInstallationLasVegas = () => {
  const faqs = [
    {
      question: "How much does shower door installation cost in Las Vegas?",
      answer: "Shower door installation costs in Las Vegas range from $600-$3,000+ depending on door type, glass thickness, and configuration. Frameless doors typically cost more than semi-frameless or framed options. We provide free in-home quotes with exact pricing. See our full pricing guide for detailed breakdowns."
    },
    {
      question: "How long does professional shower door installation take?",
      answer: "Most single shower door installations take 1-2 hours. Full enclosures may take 2-4 hours. Custom and complex installations could require 4-6 hours. We complete most jobs in a single visit."
    },
    {
      question: "Do you remove old shower doors?",
      answer: "Yes! We handle complete removal of your old shower door or enclosure, including safe disposal of glass and hardware. Old door removal is included in our installation service."
    },
    {
      question: "Do you install frameless, semi-frameless, and sliding doors?",
      answer: "Absolutely. We install all types including frameless, semi-frameless, framed, sliding/bypass, hinged/pivot, and custom enclosures. Our installers are experienced with every configuration."
    },
    {
      question: "Where can I find frameless shower door installers near me?",
      answer: "Baja Glass provides professional frameless shower door installation throughout Las Vegas, Henderson, Summerlin, and the entire valley. We're locally owned and operated with over 20 years of experience. Call (702) 383-0779 for a free quote."
    },
    {
      question: "Are your shower door installers licensed and insured?",
      answer: "Yes! Baja Glass is fully licensed, bonded, and insured in Nevada. Our installers are trained professionals with years of experience in shower door and glass enclosure installation."
    }
  ];

  const installationTypes = [
    {
      title: "Frameless Shower Door Installation",
      description: "Premium frameless doors with 3/8\" or 1/2\" tempered glass. Minimal hardware for a modern, open look.",
      href: "/shower-doors-las-vegas/frameless"
    },
    {
      title: "Semi-Frameless Installation",
      description: "Balanced style with strategic metal support. Quality glass with enhanced stability.",
      href: "/shower-doors-las-vegas/semi-frameless-framed"
    },
    {
      title: "Sliding Door Installation",
      description: "Space-saving bypass and single-slide systems. Smooth rollers and proper track alignment.",
      href: "/shower-doors-las-vegas/sliding"
    },
    {
      title: "Glass Shower Enclosure Installation",
      description: "Complete enclosure systems including inline, corner, and neo-angle configurations.",
      href: "/shower-enclosures-las-vegas"
    },
    {
      title: "Custom Door Installation",
      description: "Made-to-measure doors for unique spaces. Angled cuts, notches, and non-standard sizes.",
      href: "/shower-doors-las-vegas/custom-enclosures"
    },
    {
      title: "Shower Door Replacement",
      description: "Replace old, damaged, or outdated shower doors with modern upgrades.",
      href: "/shower-doors-las-vegas/repair"
    }
  ];

  const serviceAreas = [
    { name: "Las Vegas", url: "/shower-doors-las-vegas" },
    { name: "Henderson", url: "/shower-doors-henderson-nv" },
    { name: "Summerlin", url: "/shower-doors-summerlin-nv" },
    { name: "Paradise", url: "/shower-doors-paradise-nv" },
    { name: "Spring Valley", url: "/shower-doors-spring-valley-nv" },
    { name: "Enterprise", url: "/shower-doors-enterprise-nv" },
    { name: "Green Valley", url: "/shower-doors-green-valley-nv" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Shower Door Installation",
            "name": "Shower Door Installation Las Vegas",
            "description": "Professional shower door installation in Las Vegas. Frameless, sliding, and custom glass enclosure installation by licensed experts.",
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
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "36.1215",
                "longitude": "-115.2269"
              },
              "priceRange": "$$"
            },
            "areaServed": [
              { "@type": "City", "name": "Las Vegas", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Henderson", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Summerlin", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Paradise", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Spring Valley", "containedIn": "Clark County, NV" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Shower Door Installation Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Frameless Shower Door Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Shower Enclosure Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sliding Shower Door Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Shower Door Installation" } }
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-primary to-charcoal text-white">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/9cfdfabc-5ef4-4012-b9f5-01271979a5c7.png" 
            alt="Professional shower door installation in Las Vegas home"
            className="w-full h-full object-cover opacity-75"
            width="1920"
            height="1080"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-primary/30 to-charcoal/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30 mb-4">
              Licensed & Insured Installers
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Shower Door Installation in Las Vegas
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl">
              Professional shower door and glass enclosure installation throughout Las Vegas Valley. Frameless, sliding, and custom configurations by licensed experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Installation Quote</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <PhoneNumber 
                  location="installation_hero"
                  showIcon={true}
                  showPrefix={true}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="font-semibold">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="font-semibold">20+ Years Experience</p>
            </div>
            <div className="text-center">
              <Wrench className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="font-semibold">Expert Installers</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="font-semibold">Locally Owned</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Shower Door Installation Services in Las Vegas</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Looking for <strong>shower door installation in Las Vegas</strong>? Baja Glass provides expert installation for frameless, semi-frameless, sliding, and custom shower doors. Our licensed installers handle everything from single door replacements to complete <Link to="/shower-enclosures-las-vegas" className="text-primary underline hover:text-primary/80">glass shower enclosure installation</Link>.
            </p>
            <p className="text-muted-foreground mb-4">
              Whether you need <strong>frameless shower door installers near me</strong> or <strong>shower glass installation near me</strong>, our local team delivers precision installation with quality materials and professional service.
            </p>
            <p className="text-muted-foreground">
              Wondering about pricing? Read our <Link to="/blog/shower-door-installation-cost-las-vegas" className="text-primary underline hover:text-primary/80">Shower Door Cost Guide</Link> for detailed 2026 pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Types of Shower Doors We Install</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            From single door installations to complete enclosure systems, we provide professional installation for all shower glass types.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {installationTypes.map((type) => (
              <Card key={type.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={type.href} onClick={() => window.scrollTo(0, 0)}>
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Installation Costs & Estimates</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our proven installation process ensures every shower door fits perfectly and functions flawlessly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", description: "We discuss your needs and assess your space" },
              { step: "2", title: "Precision Measurement", description: "Laser-accurate measurements for perfect fit" },
              { step: "3", title: "Custom Fabrication", description: "Glass cut and finished to exact specifications" },
              { step: "4", title: "Professional Installation", description: "Expert installation with quality hardware" },
              { step: "5", title: "Final Walkthrough", description: "We ensure everything meets our standards" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Baja Glass for Installation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-muted-foreground">Fully licensed, bonded, and insured for your protection and peace of mind.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">20+ Years Experience</h3>
                <p className="text-muted-foreground">Thousands of installations completed across the Las Vegas Valley.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Quality Materials</h3>
                <p className="text-muted-foreground">Premium tempered glass and professional-grade hardware only.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Precision Installation</h3>
                <p className="text-muted-foreground">Laser measurements and expert fitting for perfect results.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Strong Warranty</h3>
                <p className="text-muted-foreground">Comprehensive warranty on materials and workmanship.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Clean, Professional Work</h3>
                <p className="text-muted-foreground">We respect your home and leave the workspace clean.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Shower Door Installation Service Areas</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We provide professional shower door installation throughout the Las Vegas Valley. Find <strong>shower door installers near me</strong> in your area.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <Button key={area.name} variant="outline" asChild className="justify-start">
                <Link to={area.url} onClick={() => window.scrollTo(0, 0)}>
                  <MapPin className="h-4 w-4 mr-2" />
                  {area.name}
                </Link>
              </Button>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-secondary/50 p-6 rounded-lg inline-block">
              <p className="font-semibold">Baja Glass & Mirror LLC</p>
              <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
              <p className="text-muted-foreground">(702) 383-0779</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shower Door Installation FAQs</h2>
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

      {/* Related Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Learn More About Shower Doors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Installation Cost Guide</CardTitle>
                <CardDescription>2026 pricing for Las Vegas shower door installation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/blog/shower-door-installation-cost-las-vegas" onClick={() => window.scrollTo(0, 0)}>
                    Read Guide →
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Frameless vs Semi-Frameless</CardTitle>
                <CardDescription>Compare door types to find your best option</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/blog/frameless-vs-semi-frameless-shower-doors" onClick={() => window.scrollTo(0, 0)}>
                    Compare Options →
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Installation Process</CardTitle>
                <CardDescription>What to expect during your installation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/blog/installation-process" onClick={() => window.scrollTo(0, 0)}>
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Professional Installation?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get a free quote for shower door installation in Las Vegas. Licensed experts, quality materials, precision installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Quote</Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2" onClick={() => trackPhoneClick("installation_lv")}>
                <Phone className="h-5 w-5" />
                Call: (702) 383-0779
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowerDoorInstallationLasVegas;
