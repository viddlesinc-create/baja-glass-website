import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero-shower-door.jpg";

const ShowerDoorsHub = () => {
  const services = [
    {
      title: "Frameless Shower Doors",
      description: "Clean, modern lines with minimal metal and thick tempered glass for an open, airy feel. Precision-measured and expertly installed for a tight, leak-resistant fit.",
      href: "/shower-doors-las-vegas/frameless",
      popular: true
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
      description: "Inline, neo-angle, alcove, and steam configurations tailored to your space. We handle out-of-plumb walls, kneewalls, and unique layouts with accuracy.",
      href: "/shower-doors-las-vegas/custom-enclosures"
    },
    {
      title: "Shower Glass Repair & Replacement",
      description: "From broken panels and off-track sliders to leaks and worn seals, our technicians diagnose and repair shower door issues quickly and safely.",
      href: "/shower-doors-las-vegas/repair"
    }
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
      question: "Do you repair existing shower doors?",
      answer: "Yes. We address broken panels, off-track sliders, worn seals and sweeps, hinge/handle issues, and leaks."
    },
    {
      question: "What areas do you serve?",
      answer: "Las Vegas, Henderson, Summerlin, North Las Vegas, Paradise, Spring Valley, Enterprise, Boulder City, and nearby communities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Custom frameless shower door installation in Las Vegas by Baja Glass"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Shower Doors in Las Vegas — Custom Glass & Professional Installation</h1>
            <p className="text-xl mb-8 text-white/90">Frameless, sliding, hinged, and fully custom enclosures—measured precisely, fabricated locally, and installed by experts.</p>
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
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-2">Trusted by homeowners across the Las Vegas Valley</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">Licensed</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">Bonded</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">Insured</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">Local Team</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">Strong Warranty</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              At Baja Glass, we design, fabricate, and install shower doors that fit your space and style. From minimalist frameless designs to space‑saving sliders and custom neo-angle enclosures, every detail is measured and installed for a tight, leak‑resistant fit.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Shower Door Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="relative hover:shadow-lg transition-shadow">
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">Most Popular</Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Button variant="outline" asChild>
                    <Link to={service.href}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { title: "Consultation & Measurement", description: "We visit your home, confirm opening specs, and review styles and finishes." },
              { title: "Design & Recommendations", description: "Clear options tailored to your space and timeline." },
              { title: "Fabrication", description: "Tempered glass cut to size; edges polished; hardware prepared." },
              { title: "Professional Installation", description: "Clean, careful, code‑compliant. Most installs completed in a single day." },
              { title: "Final Walkthrough & Warranty", description: "Care tips and a strong guarantee for peace of mind." }
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
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

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Better Shower Door?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Start with a professional measurement and tailored recommendations from the Baja Glass team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </div>
  );
};

export default ShowerDoorsHub;