import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, Home, Shield, Clock, CheckCircle, Star, Wrench } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ResidentialGlassRepair = () => {
  const services = [
    {
      title: "Window Glass Replacement",
      description: "Replace broken or cracked residential windows with energy-efficient, properly sealed glass.",
      features: ["Single & double pane windows", "Energy-efficient glass options", "Weather sealing & caulking", "Frame repair when needed"]
    },
    {
      title: "Mirror Services",
      description: "Custom mirrors, vanity mirrors, and decorative mirrors cut to size with polished edges.",
      features: ["Bathroom vanity mirrors", "Wall mirrors & decorative glass", "Safety backing application", "Professional mounting"]
    },
    {
      title: "Glass Table Tops",
      description: "Custom glass table tops with tempered safety glass and polished edges.",
      features: ["Round, square & custom shapes", "Tempered safety glass", "Polished edges", "Various thickness options"]
    },
    {
      title: "Patio Door Glass",
      description: "Sliding glass door repairs and replacements for patios and balconies.",
      features: ["Sliding door glass panels", "Track cleaning & repair", "Weather stripping replacement", "Lock & handle servicing"]
    }
  ];

  const emergencyServices = [
    "24/7 emergency glass repair",
    "Board-up services for security",
    "Same-day service available",
    "Insurance claim assistance"
  ];

  const repairTypes = [
    {
      title: "Cracked Glass Repair",
      description: "Professional assessment and replacement of cracked residential glass.",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: "Foggy Window Repair", 
      description: "Seal replacement for double-pane windows with failed seals.",
      icon: <Home className="h-6 w-6" />
    },
    {
      title: "Glass Door Repair",
      description: "Sliding glass doors, French doors, and entry door glass replacement.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const processSteps = [
    {
      title: "Priority",
      description: "Quick response for urgent repairs with temporary security solutions if needed."
    },
    {
      title: "Assessment & Measurement", 
      description: "Detailed inspection of damage and precise measurements for replacement glass."
    },
    {
      title: "Glass Fabrication",
      description: "Custom cutting of replacement glass with proper safety ratings and finishes."
    },
    {
      title: "Professional Installation",
      description: "Expert installation with proper sealing, security, and energy efficiency."
    },
    {
      title: "Quality Check & Cleanup",
      description: "Final inspection, cleanup of work area, and care instructions."
    }
  ];

  const faqs = [
    {
      question: "Do you handle emergency glass repairs?",
      answer: "Yes, we provide 24/7 emergency glass repair services with same-day response for urgent situations. We can board up broken windows for immediate security."
    },
    {
      question: "What types of residential glass do you repair?",
      answer: "We repair all types of residential glass including windows, mirrors, glass table tops, patio doors, entry doors, and decorative glass panels."
    },
    {
      question: "Can you match existing glass in my home?",
      answer: "Absolutely. We can match glass thickness, tint, texture, and energy efficiency ratings to ensure seamless integration with your existing windows."
    },
    {
      question: "Do you work with homeowner's insurance?",
      answer: "Yes, we work directly with insurance companies and can help with claims documentation and direct billing when approved."
    },
    {
      question: "How quickly can you replace broken residential glass?",
      answer: "Most residential glass repairs can be completed within 24-48 hours. Emergency repairs and board-up services are available same-day."
    },
    {
      question: "What safety standards do you follow?",
      answer: "All replacement glass meets or exceeds safety codes, including tempered glass where required and proper installation techniques for security and energy efficiency."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Residential Glass Repair Las Vegas | Home Window & Mirror Repair | Baja Glass</title>
        <meta name="description" content="Expert residential glass repair in Las Vegas. Emergency window repair, mirror replacement, glass table tops, and patio door glass. 24/7 service available." />
        <meta name="keywords" content="residential glass repair Las Vegas, window glass replacement, mirror repair, emergency glass repair, home glass repair" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/bf541daa-269d-4a2f-88a1-ade3c731b28b.png" 
            alt="Residential glass repair services - broken window and mirror repair in Las Vegas homes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-primary/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Residential Glass Repair & Replacement in Las Vegas</h1>
            <p className="text-xl mb-8 text-white/90">Emergency glass repair, window replacement, mirrors, and custom glass solutions for your home.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Get Emergency Repair</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  24/7 Emergency: (702) 383-0779
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Residential Glass Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Emergency Glass Repair Services</h2>
            <p className="text-lg text-muted-foreground mb-8">
              When glass breaks, security and safety are immediate concerns. Our emergency response team provides fast, professional solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencyServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2 p-4 bg-background rounded-lg">
                  <Badge variant="destructive" className="rounded-full w-2 h-2 p-0"></Badge>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Residential Glass Repairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {repairTypes.map((type, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {type.icon}
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Repair Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
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

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Emergency Glass Repair?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Don't wait - broken glass compromises security and safety. Call now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (702) 383-0779
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Schedule Repair Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialGlassRepair;