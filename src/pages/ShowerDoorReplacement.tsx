import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle, Wrench, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServiceAreasBlock from "@/components/ServiceAreasBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ShowerDoorReplacement = () => {
  const signs = [
    { icon: AlertTriangle, title: "Cracked or Chipped Glass", description: "Damaged glass is a safety hazard and can worsen over time. Replacement restores both function and appearance." },
    { icon: Wrench, title: "Outdated Hardware & Frames", description: "Corroded tracks, bent frames, or worn-out rollers make doors difficult to open and close properly." },
    { icon: Clock, title: "Persistent Leaks", description: "Worn seals and warped frames allow water to escape, causing floor damage and mold risk." },
    { icon: CheckCircle, title: "Hard Water Damage", description: "Severe mineral buildup that won't clean off. A new door with hydrophobic coating prevents future staining." },
  ];

  const replacementOptions = [
    { title: "Frameless Shower Doors", description: "Clean, modern lines with thick tempered glass and minimal hardware. Our most popular replacement upgrade.", href: "/shower-doors-las-vegas/frameless", popular: true },
    { title: "Semi-Frameless Doors", description: "Balanced style with strategic metal support. A cost-effective upgrade from fully framed doors.", href: "/shower-doors-las-vegas/semi-frameless-framed" },
    { title: "Sliding Shower Doors", description: "Space-saving bypass or single-slide systems. Ideal replacements for tight bathrooms.", href: "/shower-doors-las-vegas/sliding" },
    { title: "Hinged & Pivot Doors", description: "Classic swing doors with precise alignment. Great for replacing old pivot-style enclosures.", href: "/shower-doors-las-vegas/hinged" },
    { title: "Custom Enclosures", description: "Made-to-measure solutions for neo-angle, corner, and unique layouts. Replace any configuration.", href: "/shower-doors-las-vegas/custom-enclosures" },
    { title: "Steam Enclosures", description: "Sealed, steam-ready systems with transoms. The ultimate bathroom upgrade.", href: "/shower-doors-las-vegas/steam-enclosures" },
  ];

  const faqs = [
    { question: "How much does shower door replacement cost in Las Vegas?", answer: "Shower door replacement in Las Vegas typically ranges from $800 to $3,000+ depending on size, glass type, and hardware. Frameless replacements are on the higher end. We provide free in-home quotes with exact pricing—no hidden fees." },
    { question: "How long does a shower door replacement take?", answer: "Most replacements are completed in 2-3 weeks from measurement to installation. The actual installation typically takes 2-4 hours. We handle removal of the old door, surface prep, and new door installation in a single visit." },
    { question: "Can you replace just the glass without changing the frame?", answer: "In some cases, yes. If the existing frame and hardware are in good condition, we can replace only the glass panels. However, upgrading to a frameless system often provides better long-term value and aesthetics." },
    { question: "Do you remove and dispose of the old shower door?", answer: "Yes. Our replacement service includes complete removal and disposal of your old shower door, glass, and hardware. We leave your bathroom clean and ready for the new installation." },
    { question: "What's the best replacement for an old sliding shower door?", answer: "Many homeowners upgrade from old sliding doors to frameless hinged or pivot doors for a modern look. If space is limited, a new bypass sliding system with smooth rollers and updated glass is an excellent option." },
  ];

  const steps = [
    { num: 1, title: "Inspect & Consult", description: "We assess your current door, discuss your goals, and recommend the best replacement option for your space and budget." },
    { num: 2, title: "Precise Measurement", description: "Laser-accurate measurements account for out-of-plumb walls, existing tile work, and fixture placement." },
    { num: 3, title: "Remove Old Door", description: "Careful removal of existing glass, hardware, tracks, and seals. We clean and prep the opening for a fresh start." },
    { num: 4, title: "Install New Door", description: "Your new shower door is installed with premium hardware, clean silicone lines, and a final walkthrough to ensure everything is perfect." },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Shower Door Replacement",
            "name": "Shower Door Replacement Las Vegas",
            "description": "Professional shower door replacement services in Las Vegas. Remove old doors and install modern frameless, sliding, or custom shower doors.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baja Glass & Mirror LLC",
              "telephone": "(702) 383-0779",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4280 W Reno Ave Ste A",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89118",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "36.0977853",
                "longitude": "-115.1998091"
              },
              "priceRange": "$$"
            },
            "areaServed": [
              { "@type": "City", "name": "Las Vegas", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Henderson", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Summerlin", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Paradise", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Spring Valley", "containedIn": "Clark County, NV" },
              { "@type": "City", "name": "Enterprise", "containedIn": "Clark County, NV" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bajaglass.com/" },
              { "@type": "ListItem", "position": 2, "name": "Shower Doors", "item": "https://bajaglass.com/shower-doors-las-vegas" },
              { "@type": "ListItem", "position": 3, "name": "Shower Door Replacement", "item": "https://bajaglass.com/shower-door-replacement-las-vegas" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/5691175d-8fb2-4e96-9445-987ca41039fb.png"
            alt="Shower door replacement in Las Vegas — before and after transformation by Baja Glass"
            className="w-full h-full object-cover opacity-70"
            width="1920"
            height="1080"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-primary/20 to-charcoal/50"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shower Door Replacement Las Vegas</h1>
            <p className="text-xl mb-4 text-white/90">
              Cracked glass? Outdated frame? We remove old shower doors and install modern, high-quality replacements — frameless, sliding, or custom — with a fast turnaround.
            </p>
            <p className="text-lg mb-8 text-white/80">
              Serving Las Vegas, Henderson, Summerlin, and the entire valley. Free in-home estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Free Replacement Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Professional Shower Door Replacement Near You</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Whether your shower door is cracked, leaking, or simply outdated, Baja Glass provides full <strong>shower door replacement</strong> services across the Las Vegas valley. We handle everything — removal of the old door, surface preparation, and precision installation of your new glass system.
            </p>
            <p className="text-muted-foreground mb-4">
              Not sure what style to choose? Browse our <Link to="/gallery" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>completed project gallery</Link> or explore all <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>shower door options in Las Vegas</Link>.
            </p>
            <p className="text-muted-foreground">
              Wondering about cost? See our detailed <Link to="/blog/shower-door-installation-cost-las-vegas" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>shower door pricing guide for 2026</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Signs You Need a Shower Door Replacement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {signs.map((sign) => (
              <Card key={sign.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <sign.icon className="h-10 w-10 text-accent mx-auto mb-2" aria-hidden="true" />
                  <CardTitle className="text-lg">{sign.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{sign.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Replacement Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Replacement Process</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">From inspection to installation, we make shower door replacement simple and stress-free.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-accent to-charcoal text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto shadow-lg">
                    {step.num}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-7 left-full w-full h-0.5 bg-gradient-to-r from-red-accent/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule My Replacement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Replacement Options */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Shower Door Replacement Options</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Choose from a range of styles to upgrade your bathroom.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {replacementOptions.map((option) => (
              <Card key={option.title} className="relative hover:shadow-lg transition-shadow">
                {option.popular && (
                  <span className="absolute -top-2 left-4 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{option.description}</CardDescription>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={option.href} onClick={() => window.scrollTo(0, 0)}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shower Door Replacement FAQs</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Replace Your Shower Door?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Get a free in-home estimate. We'll measure, recommend the best option, and handle the entire replacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get My Free Quote</Link>
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

export default ShowerDoorReplacement;
