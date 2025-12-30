import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, Building, Users, Eye, CheckCircle, Star, Briefcase } from "lucide-react";
import { Helmet } from "react-helmet-async";

const OfficeEnclosures = () => {
  const services = [
    {
      title: "Conference Room Partitions",
      description: "Glass walls and partitions for meeting rooms with acoustic and privacy options.",
      features: ["Soundproof glass options", "Sliding and fixed panels", "Integrated door systems", "Smart glass technology available"]
    },
    {
      title: "Private Office Walls",
      description: "Floor-to-ceiling glass walls that maintain openness while providing privacy.",
      features: ["Clear and frosted glass combinations", "Modular systems", "Wire management integration", "Fire-rated options"]
    },
    {
      title: "Reception Area Glass",
      description: "Impressive entrance solutions with custom glass features and branding opportunities.",
      features: ["Logo etching and branding", "Security glazing options", "Curved and angled designs", "LED integration possible"]
    },
    {
      title: "Storefront Systems", 
      description: "Commercial storefront glass with energy efficiency and security features.",
      features: ["Energy-efficient glazing", "Security laminated options", "Custom framing systems", "ADA compliant entrances"]
    }
  ];

  const glassTypes = [
    {
      title: "Clear Glass",
      description: "Maximum transparency for open, collaborative environments"
    },
    {
      title: "Frosted Glass",
      description: "Privacy while maintaining light transmission"
    },
    {
      title: "Etched Glass",
      description: "Custom patterns, logos, and decorative elements"
    },
    {
      title: "Smart Glass", 
      description: "Switchable privacy glass controlled electronically"
    }
  ];

  const benefits = [
    {
      title: "Increased Natural Light",
      description: "Glass partitions allow light to flow throughout the office space.",
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Flexible Space Design",
      description: "Easily reconfigure spaces as business needs change.",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Professional Appearance",
      description: "Modern glass creates an upscale, professional environment.",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Cost-Effective Solution",
      description: "More affordable than traditional construction with faster installation.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const processSteps = [
    {
      title: "Space Planning Consultation",
      description: "We assess your office layout and discuss functionality, privacy, and aesthetic goals."
    },
    {
      title: "Design & Engineering",
      description: "Custom design with structural calculations, code compliance, and material specifications."
    },
    {
      title: "Fabrication & Preparation",
      description: "Precision cutting, tempering, and hardware preparation in our workshop."
    },
    {
      title: "Installation Coordination",
      description: "Scheduled installation with minimal disruption to business operations."
    },
    {
      title: "Quality Assurance & Training",
      description: "Final inspection, cleanup, and staff training on any operable elements."
    }
  ];

  const faqs = [
    {
      question: "Can office glass partitions be soundproof?",
      answer: "Yes, we offer acoustic glass solutions including laminated glass and specialized glazing systems that significantly reduce sound transmission between spaces."
    },
    {
      question: "What are the fire safety requirements for glass office partitions?",
      answer: "We ensure all installations meet local fire codes, including fire-rated glass options and proper egress requirements. Our team handles all permitting and inspections."
    },
    {
      question: "Can you integrate technology into glass office systems?",
      answer: "Absolutely. We can incorporate smart glass, LED lighting, integrated screens, and wire management systems into custom glass partition designs."
    },
    {
      question: "How do you minimize business disruption during installation?",
      answer: "We work with your schedule to install during off-hours or weekends when possible, and our efficient installation process minimizes noise and workspace disruption."
    },
    {
      question: "What maintenance is required for office glass systems?",
      answer: "Glass partitions require minimal maintenance - regular cleaning and occasional hardware adjustments. We provide maintenance schedules and can offer ongoing service contracts."
    },
    {
      question: "Can glass office partitions be reconfigured later?",
      answer: "Yes, many of our systems are designed with modularity in mind, allowing for future reconfigurations as your office needs evolve."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* No JSON-LD schema needed - SEOHead handles basic SEO */}
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/beffc522-39a0-4b73-954d-5be7a6c03e82.png" 
            alt="Modern office glass partitions and conference room enclosures in Las Vegas commercial space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-primary/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Office Glass Enclosures & Commercial Partitions in Las Vegas</h1>
            <p className="text-xl mb-8 text-white/90">Professional glass solutions for modern workspaces - conference rooms, private offices, and commercial storefronts.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Commercial Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call: (702) 383-0779
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
            <p className="text-lg text-muted-foreground">
              Transform your workspace with custom glass office enclosures that maximize natural light, create flexible layouts, and project a professional image. From conference room partitions to full storefront systems, we deliver commercial glass solutions that enhance productivity and aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Commercial Glass Services</h2>
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

      {/* Glass Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Glass Options for Office Environments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {glassTypes.map((type, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Glass Office Enclosures?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Professional Office Transformation</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  This Las Vegas office renovation utilized floor-to-ceiling glass partitions to create private meeting spaces while maintaining an open, collaborative feel. The frosted glass provides privacy during confidential meetings while allowing natural light to flow throughout the workspace.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Acoustic glass for sound privacy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Integrated sliding door system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Custom etched company logo</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>View More Projects</Link>
                </Button>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/39961667-9133-43a9-af6d-ddf507a69690.png" 
                  alt="Modern office with glass conference room partitions and professional interior design"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Installation Process</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Commercial Glass FAQs</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Office Space?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact us for a consultation and discover how glass enclosures can enhance your workplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (702) 383-0779
              </a>
            </Button>
            <Button variant="destructive" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request Commercial Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeEnclosures;