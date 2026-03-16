import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Star, Phone, Shield, Clock, Users, Award, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import LocalBusinessSchema from "@/seo/LocalBusinessSchema";
import GoogleMap from "@/components/GoogleMap";
import { WebSiteSchema, SpeakableSchema } from "@/components/StructuredData";
import OptimizedImage from "@/components/OptimizedImage";
import PhoneNumber from "@/components/PhoneNumber";
import IntroSection from "@/components/IntroSection";
import SiteLinks from "@/components/SiteLinks";
import heroImage from "@/assets/hero-shower-door.jpg";
import installationProcess from "@/assets/installation-process.jpg";
import slidingDoors from "@/assets/sliding-doors.jpg";
import customEnclosure from "@/assets/custom-enclosure.jpg";
import hardwareFinishes from "@/assets/hardware-finishes.jpg";
  const services = [{
    title: "Frameless Shower Doors",
    description: "Sleek, modern, built with 3/8\" or 1/2\" tempered glass for strength and clarity.",
    href: "/shower-doors-las-vegas/frameless"
  }, {
    title: "Sliding & Hinged Doors",
    description: "Space-saving sliders or classic pivots—precision-installed for smooth operation.",
    href: "/shower-doors-las-vegas/sliding"
  }, {
    title: "Custom Shower Enclosures",
    description: "Inline, neo-angle, alcove, steam—made-to-measure for a perfect fit.",
    href: "/shower-doors-las-vegas/custom-enclosures"
  }, {
    title: "Shower Glass Repair & Replacement",
    description: "Broken panels, leaks, loose hinges, roller/track issues—fixed fast and safely.",
    href: "/shower-doors-las-vegas/repair"
  }, {
    title: "Hardware & Finishes",
    description: "Polished chrome, matte black, brushed nickel, brass—match your design.",
    href: "/resources"
  }, {
    title: "Low-Iron & Protective Coatings",
    description: "Ultra-clear glass and hydrophobic coatings to reduce spotting and simplify cleaning.",
    href: "/resources"
  }];
  const whyChooseUs = ["Precision Measurements: Laser-accurate for a tight, leak-resistant fit.", "Premium Materials: Tempered safety glass, pro-grade hardware, clean silicone work.", "Fast Turnaround: Local fabrication and scheduling to fit your timeline.", "In-House Installers: Trained, background-checked team—no rushed subcontracting.", "Honest Communication: Clear options and timelines from start to finish.", "Strong Warranty: Robust hardware and workmanship coverage."];
  const faqs = [{
    question: "How long does it take to get a new shower door installed?",
    answer: "Most projects take a few business days from measurement to install, with installation completed in a single day."
  }, {
    question: "What's the difference between frameless, semi-frameless, and framed?",
    answer: "Frameless uses thicker glass and minimal metal for a clean look. Semi-frameless balances aesthetics and metal support. Framed uses full metal framing."
  }, {
    question: "Which glass thickness should I choose—3/8\" or 1/2\"?",
    answer: "3/8\" is the standard for strength and clarity. 1/2\" offers added rigidity and a luxury feel; often preferred for larger spans."
  }, {
    question: "Do you offer low-iron glass and protective coatings?",
    answer: "Yes. Low-iron reduces the green tint for a clearer edge. Hydrophobic coatings help reduce water spots and make cleaning easier."
  }, {
    question: "Can you repair my existing shower door?",
    answer: "Yes. We handle broken panels, leaks, hinge and handle issues, roller/track problems, and seals."
  }, {
    question: "What areas do you serve?",
    answer: "Las Vegas, Henderson, Summerlin, North Las Vegas, Paradise, Spring Valley, Enterprise, Boulder City—and nearby communities."
  }];
const Index = () => {
  return <div className="min-h-screen">
      <LocalBusinessSchema />
      <WebSiteSchema />
      <SpeakableSchema 
        name="Baja Glass & Mirror - Las Vegas Shower Door Installation"
        description="Custom frameless shower doors, glass enclosures, and mirror installation in Las Vegas, Henderson, and Summerlin. Family owned, first responder owned. Free quotes: (702) 383-0779"
        url="https://bajaglass.com"
        speakableSelectors={['h1', '.intro-content', '.faq-answer']}
      />
      <Helmet>
        {/* Preload LCP hero image for faster rendering */}
        <link
          rel="preload"
          as="image"
          href="/.netlify/images?url=%2Flovable-uploads%2F92357ff9-fc77-40cb-b708-fb8fe634aa42.png&w=1920&fit=cover&fm=webp"
          type="image/webp"
        />
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)]"></div>
        </div>
        
        {/* Hero Image - LCP Optimized with WebP + responsive srcset */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="/lovable-uploads/92357ff9-fc77-40cb-b708-fb8fe634aa42.png"
            alt="Modern frameless sliding shower doors with black hardware and pebble tile flooring by Baja Glass Las Vegas"
            className="w-full h-full object-cover opacity-75"
            width={1920}
            height={1080}
            sizes="100vw"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>


        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Baja Glass & Mirror –
                <span className="block bg-gradient-to-r from-white via-chrome-light to-white bg-clip-text text-transparent animate-glow drop-shadow-2xl">Shower Doors & Custom Glass</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl">
                  in Las Vegas
                </span>
              </h1>
            </div>
            
            {/* Location Badge */}
            <div className="animate-fade-in-up mb-6 text-left md:text-center lg:text-left lg:ml-16" style={{
            animationDelay: '0.2s'
          }}>
              <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30 text-sm px-4 py-1 font-medium">
                Las Vegas, Nevada
              </Badge>
            </div>

            {/* Subheading */}
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16" style={{
            animationDelay: '0.3s'
          }}>
              <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl leading-relaxed font-light drop-shadow-lg">
                Professional glass installation services including shower doors, mirrors, office glass, and residential glass repair—delivered with precision and care.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="animate-fade-in-up mb-8 text-left md:text-center lg:text-left lg:ml-16" style={{
            animationDelay: '0.5s'
          }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1" role="img" aria-label="5 out of 5 stars rating">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />)}
                </div>
                <span className="text-white/90 ml-2 text-lg font-medium">Trusted by Las Vegas homeowners</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 text-left md:justify-center lg:justify-start lg:ml-16 mb-8" style={{
            animationDelay: '0.7s'
          }}>
              <Button variant="hero" size="lg" asChild className="animate-scale-in shadow-xl">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="animate-scale-in shadow-xl" style={{
              animationDelay: '0.1s'
            }}>
                <PhoneNumber 
                  location="homepage_hero"
                  showIcon={true}
                  showPrefix={true}
                />
              </Button>
            </div>

            {/* Badges */}
            <div className="animate-fade-in-up flex flex-wrap gap-3 text-left md:justify-center lg:justify-start lg:ml-16" style={{
            animationDelay: '0.9s'
          }}>
              {['Licensed', 'Bonded', 'Insured', '20+ years of trusted service in Las Vegas'].map(badge => <Badge key={badge} className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs px-3 py-1 hover:bg-white/20 transition-all duration-300 shadow-lg">
                  {badge}
                </Badge>)}
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

      {/* Intro Section - Keyword Rich */}
      <IntroSection />

      {/* Service Overview Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Glass Services in Las Vegas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Frameless and semi-frameless shower doors</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Custom shower enclosures & steam showers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Residential glass repair & window replacement</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Mirrors, office enclosures and commercial glass</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              <strong>Rated 4.9/5 by homeowners in Las Vegas and Henderson</strong> – <Link to="/reviews" className="text-primary underline hover:text-primary/80" onClick={() => window.scrollTo(0, 0)}>Read our customer reviews</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-br from-secondary/20 via-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Shower Glass Services We Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={service.title} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/20 border-0 shadow-lg animate-scale-in group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <CardHeader className="relative">
                  <CardTitle className="font-serif group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="mb-6 text-base leading-relaxed">{service.description}</CardDescription>
                  <Button variant="outline" asChild className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                    <Link to={service.href} onClick={() => window.scrollTo(0, 0)}>Learn more →</Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Las Vegas Homeowners Choose Baja Glass</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {whyChooseUs.map((point, index) => <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{point}</p>
                </div>)}
            </div>
            <p className="text-center text-muted-foreground">
              At Baja Glass, we focus on quality, safety, and clean, detail-oriented installs. From measurements to finishing touches, 
              our team delivers showroom results—on time and on your timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-charcoal mx-auto rounded-full mb-6"></div>
            <div className="flex items-center justify-center gap-2 mb-2" role="img" aria-label="4.6 out of 5 stars rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2 text-2xl font-bold">4.6</span>
            </div>
            <p className="text-muted-foreground">Based on 27 Google reviews from Las Vegas homeowners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                name: "Jennifer Martinez",
                location: "Henderson, NV",
                text: "Baja Glass installed a beautiful frameless shower door in our Henderson home. The installers were professional, on time, and the quality is outstanding. Highly recommend!",
                service: "Frameless Shower Door"
              },
              {
                name: "Robert Chen",
                location: "Summerlin, NV",
                text: "We hired Baja Glass for our Summerlin bathroom remodel. The custom enclosure they designed fits perfectly and looks amazing. Great communication throughout the process.",
                service: "Custom Shower Enclosure"
              },
              {
                name: "Sarah Thompson",
                location: "Paradise, NV",
                text: "Professional service from start to finish. The team at Baja Glass helped us choose the perfect sliding door for our space. Installation was quick and clean. Worth every penny!",
                service: "Sliding Shower Door"
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2" role="img" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-3 text-xs">{review.service}</Badge>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/reviews" onClick={() => window.scrollTo(0, 0)}>
                Read All Reviews →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            Serving the Greater Las Vegas Valley
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Professional shower door installation throughout Henderson, Summerlin, Paradise, and surrounding areas.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                city: "Henderson",
                url: "/shower-doors-henderson-nv",
                description: "Your local experts for Henderson shower door installation, frameless enclosures, and glass repair."
              },
              {
                city: "Summerlin",
                url: "/shower-doors-summerlin-nv",
                description: "Premium shower door solutions for Summerlin's luxury homes and master bathrooms."
              },
              {
                city: "Paradise",
                url: "/shower-doors-paradise-nv",
                description: "Professional shower glass installation and custom enclosures throughout Paradise, NV."
              },
              {
                city: "Spring Valley",
                url: "/shower-doors-spring-valley-nv",
                description: "Complete shower door services from repair to custom installations in Spring Valley."
              },
              {
                city: "Enterprise",
                url: "/shower-doors-enterprise-nv",
                description: "Frameless, hinged, and sliding shower doors expertly installed in Enterprise."
              },
              {
                city: "Green Valley",
                url: "/shower-doors-green-valley-nv",
                description: "Quality shower enclosures and glass solutions for Green Valley residences."
              }
            ].map((area) => (
              <Card key={area.city} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {area.city}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0">
                    <Link to={area.url} onClick={() => window.scrollTo(0, 0)}>
                      View {area.city} Services →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Map Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Visit Our Location</h3>
              <p className="text-muted-foreground">4280 W Reno Ave, Ste A, Las Vegas, NV 89118</p>
            </div>
            <GoogleMap 
              height="350px" 
              location="homepage_service_areas"
              showDirectionsButton={true}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-charcoal mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">From consultation to installation, we ensure every step is perfectly executed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[{
            title: "Consultation & Measure",
            desc: "We visit your home, confirm opening specs, and discuss styles, hardware, and any unique site conditions."
          }, {
            title: "Design & Quote",
            desc: "You'll receive clear options with timelines and recommendations. Ask us anything."
          }, {
            title: "Fabrication",
            desc: "Tempered glass cut to size, edges polished, hardware prepped for a precise fit."
          }, {
            title: "Professional Installation",
            desc: "Clean, careful, code-compliant. Most installs are completed in a single day."
          }, {
            title: "Final Walkthrough & Warranty",
            desc: "We review care tips and stand behind our work with a strong guarantee."
          }].map((step, index) => <div key={step.title} className="text-center animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-charcoal text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg animate-glow">
                    {index + 1}
                  </div>
                  {index < 4 && <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>}
                </div>
                <h3 className="font-semibold mb-3 text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>)}
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
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map(faq => <div key={faq.question} className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beyond Shower Doors</h2>
            <p className="text-lg text-muted-foreground">Professional glass solutions for your home and business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Residential Glass Repair
                  <Badge variant="secondary">24/7 Emergency</Badge>
                </CardTitle>
                <CardDescription>
                  Emergency glass repair for windows, mirrors, patio doors, and more. Same-day service available for urgent repairs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to="/glass-company-las-vegas/residential-glass-repair" onClick={() => window.scrollTo(0, 0)}>Emergency Glass Repair</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Office Glass Enclosures
                  <Badge variant="secondary">Commercial</Badge>
                </CardTitle>
                <CardDescription>
                  Transform your workspace with professional glass partitions, conference room enclosures, and storefront systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to="/glass-company-las-vegas/office-enclosures" onClick={() => window.scrollTo(0, 0)}>Commercial Glass Solutions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/glass-company-las-vegas" onClick={() => window.scrollTo(0, 0)}>View All Glass Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Site Links - Internal Linking */}
      <SiteLinks />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Transform Your Shower?</h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">Get expert advice, clear timelines, and a flawless installation.</p>
          </div>
          
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center mb-12" style={{
          animationDelay: '0.2s'
        }}>
            <Button variant="hero" size="xl" asChild className="shadow-2xl">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
            </Button>
            <Button variant="glass" size="xl" asChild className="shadow-2xl">
              <a href="tel:+17023830779" className="flex items-center gap-3" aria-label="Call Now: (702) 383-0779">
                <Phone className="h-6 w-6" aria-hidden="true" />
                Call Now: (702) 383-0779
              </a>
            </Button>
          </div>
          
          <div className="animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <p className="text-primary-foreground/80 text-lg">Free in-home measurements • Licensed & insured • Strong warranty</p>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;