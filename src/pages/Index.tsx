import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Star, Phone, Shield, Clock, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-shower-door.jpg";
import installationProcess from "@/assets/installation-process.jpg";
import slidingDoors from "@/assets/sliding-doors.jpg";
import customEnclosure from "@/assets/custom-enclosure.jpg";
import hardwareFinishes from "@/assets/hardware-finishes.jpg";

const Index = () => {
  const services = [
    {
      title: "Frameless Shower Doors",
      description: "Sleek, modern, built with 3/8\" or 1/2\" tempered glass for strength and clarity.",
      href: "/shower-doors-las-vegas/frameless"
    },
    {
      title: "Sliding & Hinged Doors",
      description: "Space-saving sliders or classic pivots—precision-installed for smooth operation.",
      href: "/shower-doors-las-vegas/sliding"
    },
    {
      title: "Custom Shower Enclosures",
      description: "Inline, neo-angle, alcove, steam—made-to-measure for a perfect fit.",
      href: "/shower-doors-las-vegas/custom-enclosures"
    },
    {
      title: "Shower Glass Repair & Replacement",
      description: "Broken panels, leaks, loose hinges, roller/track issues—fixed fast and safely.",
      href: "/shower-doors-las-vegas/repair"
    },
    {
      title: "Hardware & Finishes",
      description: "Polished chrome, matte black, brushed nickel, brass—match your design.",
      href: "/resources"
    },
    {
      title: "Low-Iron & Protective Coatings",
      description: "Ultra-clear glass and hydrophobic coatings to reduce spotting and simplify cleaning.",
      href: "/resources"
    }
  ];

  const whyChooseUs = [
    "Precision Measurements: Laser-accurate for a tight, leak-resistant fit.",
    "Premium Materials: Tempered safety glass, pro-grade hardware, clean silicone work.",
    "Fast Turnaround: Local fabrication and scheduling to fit your timeline.",
    "In-House Installers: Trained, background-checked team—no rushed subcontracting.",
    "Honest Communication: Clear options and timelines from start to finish.",
    "Strong Warranty: Robust hardware and workmanship coverage."
  ];

  const faqs = [
    {
      question: "How long does it take to get a new shower door installed?",
      answer: "Most projects take a few business days from measurement to install, with installation completed in a single day."
    },
    {
      question: "What's the difference between frameless, semi-frameless, and framed?",
      answer: "Frameless uses thicker glass and minimal metal for a clean look. Semi-frameless balances aesthetics and metal support. Framed uses full metal framing."
    },
    {
      question: "Which glass thickness should I choose—3/8\" or 1/2\"?",
      answer: "3/8\" is the standard for strength and clarity. 1/2\" offers added rigidity and a luxury feel; often preferred for larger spans."
    },
    {
      question: "Do you offer low-iron glass and protective coatings?",
      answer: "Yes. Low-iron reduces the green tint for a clearer edge. Hydrophobic coatings help reduce water spots and make cleaning easier."
    },
    {
      question: "Can you repair my existing shower door?",
      answer: "Yes. We handle broken panels, leaks, hinge and handle issues, roller/track problems, and seals."
    },
    {
      question: "What areas do you serve?",
      answer: "Las Vegas, Henderson, Summerlin, North Las Vegas, Paradise, Spring Valley, Enterprise, Boulder City—and nearby communities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-primary to-charcoal">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)]"></div>
        </div>
        
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/22e931d0-6005-492b-ba38-baab99486f52.png" 
            alt="Luxury steam shower enclosure installation Las Vegas - ultra-clear glass with matte black hardware and marble walls by Baja Glass"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>


        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white mb-8 leading-none drop-shadow-2xl">
                Custom 
                <span className="block bg-gradient-to-r from-white via-chrome-light to-white bg-clip-text text-transparent animate-glow drop-shadow-2xl">
                  Frameless
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl">
                  Shower Doors
                </span>
              </h1>
            </div>
            
            {/* Location Badge */}
            <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.2s' }}>
              <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30 text-lg px-6 py-2 font-medium">
                Las Vegas, Nevada
              </Badge>
            </div>

            {/* Subheading */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
                Precision-measured, expertly fabricated, and professionally installed—creating beautiful, leak-resistant shower enclosures that last.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="animate-fade-in-up mb-12" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 ml-3 text-xl font-medium">Trusted by Las Vegas homeowners</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center mb-12" style={{ animationDelay: '0.7s' }}>
              <Button variant="hero" size="xl" asChild className="animate-scale-in shadow-2xl">
                <Link to="/contact">Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="xl" asChild className="animate-scale-in shadow-2xl" style={{ animationDelay: '0.1s' }}>
                <a href="tel:+17023830779" className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>

            {/* Badges */}
            <div className="animate-fade-in-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.9s' }}>
              {['Licensed', 'Bonded', 'Insured', 'Years of trusted service in Las Vegas'].map((badge) => (
                <Badge 
                  key={badge} 
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-sm px-4 py-2 hover:bg-white/20 transition-all duration-300 shadow-lg"
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

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-br from-secondary/20 via-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Shower Glass Services We Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/20 border-0 shadow-lg animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <CardHeader className="relative">
                  <CardTitle className="font-serif group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="mb-6 text-base leading-relaxed">{service.description}</CardDescription>
                  <Button variant="outline" asChild className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                    <Link to={service.href}>Learn more →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Las Vegas Homeowners Choose Baja Glass</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground">
              At Baja Glass, we focus on quality, safety, and clean, detail-oriented installs. From measurements to finishing touches, 
              our team delivers showroom results—on time and on your timeline.
            </p>
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
            {[
              { title: "Consultation & Measure", desc: "We visit your home, confirm opening specs, and discuss styles, hardware, and any unique site conditions." },
              { title: "Design & Quote", desc: "You'll receive clear options with timelines and recommendations. Ask us anything." },
              { title: "Fabrication", desc: "Tempered glass cut to size, edges polished, hardware prepped for a precise fit." },
              { title: "Professional Installation", desc: "Clean, careful, code-compliant. Most installs are completed in a single day." },
              { title: "Final Walkthrough & Warranty", desc: "We review care tips and stand behind our work with a strong guarantee." }
            ].map((step, index) => (
              <div key={step.title} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-charcoal text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg animate-glow">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="font-semibold mb-3 text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 animate-fade-in">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Schedule My Measurement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center mb-12" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" asChild className="shadow-2xl">
              <Link to="/contact">Get a Fast Quote</Link>
            </Button>
            <Button variant="glass" size="xl" asChild className="shadow-2xl">
              <a href="tel:+17023830779" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                Call Now: (702) 383-0779
              </a>
            </Button>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-primary-foreground/80 text-lg">Free in-home measurements • Licensed & insured • Strong warranty</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
