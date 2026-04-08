import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Phone, Clock, Award, Shield, Users, CheckCircle, Instagram, Facebook } from "lucide-react";
import heroImage from "/lovable-uploads/1097be0e-6f50-458e-9cc0-56a340dec89f.png";
const slidingDoors = "/images/sliding-doors.jpg";
const customEnclosure = "/images/custom-enclosure.jpg";
const hardwareFinishes = "/images/hardware-finishes.jpg";
import { Helmet } from "react-helmet-async";
import ServiceAreasBlock from "@/components/ServiceAreasBlock";
import { trackPhoneClick } from "@/lib/analytics";

const GlassCompanyLasVegas = () => {
  const services = [
    {
      title: "Shower Doors & Enclosures",
      description: "Frameless, sliding, hinged/pivot, custom, and steam‑ready designs. Precise measurements, quality hardware, and leak‑mitigating installation.",
      bullets: [
        "Frameless, semi‑frameless, and framed options",
        "Inline, corner, neo‑angle, alcove, steam",
        "Replacements: panels, rollers, hinges, seals, upgrades"
      ],
      href: "/shower-doors-las-vegas",
      image: "/lovable-uploads/e0470406-f3bb-4471-83cf-84adb149756b.png"
    },
    {
      title: "Office Glass Enclosures",
      description: "From conference room partitions to private office walls and reception areas, we cut and finish glass to size, with polished edges and secure mounting.",
      bullets: [
        "Conference rooms, private offices, and reception areas",
        "Frosted, clear, and etched glass options",
        "Safety backing and professional mounting"
      ],
      href: "/glass-company-las-vegas/office-enclosures",
      image: "/lovable-uploads/beffc522-39a0-4b73-954d-5be7a6c03e82.png"
    },
    {
      title: "Residential Glass Replacement",
      description: "Emergency glass replacement for homes including windows, mirrors, patio doors, and custom glass solutions with 24/7 service availability.",
      bullets: [
        "Window glass replacement and upgrades",
        "Mirror installation and replacement",
        "Patio door glass and emergency services"
      ],
      href: "/glass-company-las-vegas/residential-glass-repair",
      image: "/lovable-uploads/bf541daa-269d-4a2f-88a1-ade3c731b28b.png"
    }
  ];

  const whyChooseUs = [
    {
      title: "Precision Measurements",
      description: "Laser‑accurate for tight fit and clean lines"
    },
    {
      title: "Premium Materials", 
      description: "Tempered glass, pro‑grade hardware, polished edges"
    },
    {
      title: "Fast, Reliable Scheduling",
      description: "Local team and organized installs"
    },
    {
      title: "In‑House Installers",
      description: "Trained, background‑checked professionals"
    },
    {
      title: "Clean, Careful Work",
      description: "Minimal disruption and spotless finish"
    },
    {
      title: "Strong Warranty",
      description: "Confidence in craftsmanship and materials"
    }
  ];

  const materials = [
    {
      title: "Glass Types",
      description: "Clear and low‑iron; frosted, rain, and specialty patterns for showers and office enclosures"
    },
    {
      title: "Thickness & Edges", 
      description: "3/8\" and 1/2\" for showers; polished edges and clean cuts for office enclosures"
    },
    {
      title: "Hardware & Finishes",
      description: "Matte black, polished chrome, brushed nickel, brass—hinges, handles, clips, channels, brackets"
    },
    {
      title: "Protective Coatings",
      description: "Hydrophobic options for shower glass to help repel water spots"
    },
    {
      title: "Sealing & Fit",
      description: "Proper pitch, clean silicone lines, and precise seals to reduce leaks and rattles"
    }
  ];

  const galleryProjects = [
    {
      title: "Frosted Custom Table",
      description: "Custom frosted glass table with precision-cut edges and modern chrome base for contemporary office spaces.",
      image: "/lovable-uploads/3c35382d-7bd5-49a9-a187-938bb11dddbc.png",
      alt: "Custom frosted glass table with chrome base — Baja Glass Las Vegas office furniture"
    },
    {
      title: "Custom Mirror", 
      description: "Custom-cut mirror with polished edges and professional mounting for elegant bathroom and vanity installations.",
      image: "/lovable-uploads/bf541daa-269d-4a2f-88a1-ade3c731b28b.png",
      alt: "Custom bathroom mirror with polished edges — Baja Glass Las Vegas mirror installation"
    }
  ];

  const reviews = [
    {
      text: "Flawless install and excellent communication.",
      author: "Jenna R., Summerlin"
    },
    {
      text: "Professional office partition installation and excellent service.",
      author: "David P., Henderson"
    },
    {
      text: "Fast response and careful handling of our glass.",
      author: "Maria T., Las Vegas"
    }
  ];

  const processSteps = [
    {
      title: "Consultation & Measurement",
      description: "We review your space, take precise measurements, and discuss style options."
    },
    {
      title: "Design & Recommendations",
      description: "Clear, tailored options for glass type, thickness, and hardware."
    },
    {
      title: "Fabrication",
      description: "Tempered glass cut to size; edges polished; hardware prepared."
    },
    {
      title: "Professional Installation",
      description: "Clean, careful, code‑compliant work by in‑house installers."
    },
    {
      title: "Final Walkthrough & Warranty",
      description: "Care tips and a strong guarantee for peace of mind."
    }
  ];

  const faqs = [
    {
      question: "What residential glass services do you offer?",
      answer: "We specialize in shower doors, enclosures, office glass partitions, and glass replacements. Our services include frameless, sliding, hinged, and steam-ready installations."
    },
    {
      question: "Can you cut glass and office partitions to custom sizes and shapes?",
      answer: "Yes, we fabricate all glass and office enclosures to your exact specifications, including custom shapes, frosted panels, and polished edges."
    },
    {
      question: "Do you provide low‑iron glass and specialty finishes?",
      answer: "Absolutely. We offer low-iron (ultra-clear) glass, frosted, rain, and patterned options, plus hydrophobic coatings for easier cleaning."
    },
    {
      question: "How do you ensure a clean, precise fit?",
      answer: "We use laser-accurate measurements, proper templating, and careful installation techniques with clean silicone work and precise sealing."
    },
    {
      question: "Do you handle replacements and upgrades?",
      answer: "Yes, we replace broken panels, upgrade hardware, swap out rollers/hinges, and handle all types of shower glass and office glass replacements."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire Las Vegas Valley including Las Vegas, Henderson, Summerlin, North Las Vegas, Paradise, Spring Valley, Enterprise, and Boulder City."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-primary to-charcoal">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        {/* Hero Image */}
        <div className="absolute inset-0">
             <img 
              src="/lovable-uploads/39961667-9133-43a9-af6d-ddf507a69690.png" 
              alt="Las Vegas glass company - commercial and residential glass services"
              className="w-full h-full object-cover opacity-75"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Full-Service Glass Company in{" "}
                <span className="block bg-gradient-to-r from-white via-chrome-light to-white bg-clip-text text-transparent drop-shadow-2xl">
                  Las Vegas
                </span>
              </h1>
            </div>
            
            {/* Subheading */}
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
                Residential glass measured precisely, fabricated locally, and installed by experts—clean, safe, and built to last.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="animate-fade-in-up mb-8 text-left md:text-center lg:text-left lg:ml-16" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 ml-2 text-lg font-medium">Trusted by homeowners across the Las Vegas Valley</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 text-left md:justify-center lg:justify-start lg:ml-16 mb-8" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="lg" asChild className="shadow-xl">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="shadow-xl">
                <a href="tel:+17023830779" className="flex items-center gap-2" onClick={() => trackPhoneClick("glass_company")}>
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>

            {/* Badges */}
            <div className="animate-fade-in-up flex flex-wrap gap-3 text-left md:justify-center lg:justify-start lg:ml-16" style={{ animationDelay: '0.5s' }}>
              {['Licensed', 'Bonded', 'Insured', 'Local Team', 'Strong Warranty'].map((badge) => (
                <Badge 
                  key={badge} 
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs px-3 py-1"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro Block: What We Do */}
      <section className="py-16 bg-gradient-to-br from-secondary/20 via-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Baja Glass is a residential and commercial glass company serving the Las Vegas Valley. We design, measure, fabricate, and install shower doors and enclosures, and office glass partitions—delivering precise fit, clean finishes, and dependable performance.
            </p>
            
            {/* Service bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Custom shower glass & enclosures</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Mirrors & mirror walls</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Residential window glass replacement</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Commercial storefront glass & office enclosures</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="#shower-doors" className="text-accent hover:text-accent/80 font-medium" onClick={() => window.scrollTo(0, 0)}>
                Shower Doors & Enclosures
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="#office-enclosures" className="text-accent hover:text-accent/80 font-medium" onClick={() => window.scrollTo(0, 0)}>
                Office Enclosures
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/gallery" className="text-accent hover:text-accent/80 font-medium" onClick={() => window.scrollTo(0, 0)}>
                Gallery
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/areas-served" className="text-accent hover:text-accent/80 font-medium" onClick={() => window.scrollTo(0, 0)}>
                Areas Served
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="#faqs" className="text-accent hover:text-accent/80 font-medium" onClick={() => window.scrollTo(0, 0)}>
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={service.title} id={service.title === "Shower Doors & Enclosures" ? "shower-doors" : "office-enclosures"}>
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={`${service.title} by Baja Glass Las Vegas`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="outline" asChild className="flex-1">
                        <Link to={service.href} onClick={() => window.scrollTo(0, 0)}>
                          Learn More → {service.title === "Shower Doors & Enclosures" ? "Shower Doors Las Vegas" : "Office Enclosures"}
                        </Link>
                      </Button>
                      <Button variant="cta" asChild className="flex-1">
                        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                          {service.title === "Shower Doors & Enclosures" ? "Get a Fast Quote" : "Schedule My Measurement"}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Baja Glass */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Homeowners Choose Baja Glass</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <Card key={item.title} className="text-center border-0 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We focus on detail, safety, and the kind of finish that looks great for years. From measurement to final wipe‑down, our team handles your project with care.
            </p>
          </div>
        </div>
      </section>

      {/* Materials & Options */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Materials & Options</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {materials.map((material, index) => (
              <div key={material.title} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{material.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{material.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>See What's Possible in Our Gallery →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Proof and Service Area */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Serving the Las Vegas Valley</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              We work across Las Vegas, Henderson, Summerlin, North Las Vegas, Paradise, Spring Valley, Enterprise, and Boulder City—bringing professional measurement, fabrication, and installation to every project.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <Link to="/areas-served" className="text-accent hover:text-accent/80 font-medium" onClick={() => window.scrollTo(0, 0)}>Areas Served</Link>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              Baja Glass & Mirror LLC • 4280 Reno Ave, Ste A, Las Vegas, NV 89118 • 
              <a href="tel:+17023830779" className="text-accent hover:text-accent/80 ml-2" onClick={() => trackPhoneClick("glass_company")}>
                (702) 383‑0779
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Recent Glass Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {galleryProjects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews & Social Proof */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">What Customers Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="text-center border-0 bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-medium">— {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Yelp">
              <Star className="h-8 w-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
              <Facebook className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-charcoal text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="font-semibold mb-3 text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule My Measurement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Glass Company FAQs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Start Your Glass Project?</h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 leading-relaxed">
              Get expert guidance, precise measurement, and a clean, professional install.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="xl" asChild className="shadow-2xl">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="xl" asChild className="shadow-2xl">
                <a href="tel:+17023830779" className="flex items-center gap-3" onClick={() => trackPhoneClick("glass_company")}>
                  <Phone className="h-6 w-6" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ServiceAreasBlock />
    </div>
  );
};

export default GlassCompanyLasVegas;