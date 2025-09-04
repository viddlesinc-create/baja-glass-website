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
      <section className="relative bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Frameless shower door installation in Las Vegas bathroom with matte black hardware by Baja Glass"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Custom Frameless Shower Doors & Glass in Las Vegas</h1>
            <p className="text-xl mb-8 text-white/90">Design, fabrication, installation, and repair—done right and on time.</p>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-2">Trusted by Las Vegas homeowners</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Get a Fast Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">Licensed</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">Bonded</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">Insured</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">Years of trusted service in Las Vegas</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shower Glass Services We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Button variant="outline" asChild>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { title: "Consultation & Measure", desc: "We visit your home, confirm opening specs, and discuss styles, hardware, and any unique site conditions." },
              { title: "Design & Quote", desc: "You'll receive clear options with timelines and recommendations. Ask us anything." },
              { title: "Fabrication", desc: "Tempered glass cut to size, edges polished, hardware prepped for a precise fit." },
              { title: "Professional Installation", desc: "Clean, careful, code-compliant. Most installs are completed in a single day." },
              { title: "Final Walkthrough & Warranty", desc: "We review care tips and stand behind our work with a strong guarantee." }
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Shower?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Get expert advice, clear timelines, and a flawless installation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Get a Fast Quote</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: (702) 383-0779
              </a>
            </Button>
          </div>
          <p className="text-primary-foreground/80">Free in-home measurements • Licensed & insured • Strong warranty</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
