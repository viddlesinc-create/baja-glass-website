import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FramelessShowerDoors = () => {
  const faqs = [
    {
      question: "What makes a shower door 'frameless'?",
      answer: "Frameless doors use thicker tempered glass (3/8\" or 1/2\") with minimal metal hardware—just clips, hinges, and handles—creating a clean, open look without full metal framing."
    },
    {
      question: "Is 3/8\" or 1/2\" glass better for my shower?",
      answer: "3/8\" offers excellent strength and clarity for most doors. 1/2\" adds rigidity and a luxury feel—especially useful for larger spans and when you want maximum durability."
    },
    {
      question: "Do frameless doors leak?",
      answer: "When properly measured and installed with correct seals and sweeps, frameless doors are very effective at containing water. We focus on precise fit and quality sealing."
    },
    {
      question: "Can I get low-iron glass for clearer edges?",
      answer: "Yes! Low-iron glass reduces the green tint you see on standard glass edges, creating an ultra-clear, premium appearance that many homeowners prefer."
    },
    {
      question: "How do you keep the door from hitting fixtures?",
      answer: "During measurement, we account for all fixtures, handles, and obstacles to ensure proper door swing clearance and optimal placement of hardware."
    },
    {
      question: "Do you handle custom angles and notches?",
      answer: "Absolutely. We can create custom cutouts, notches, and angled cuts for towel bars, fixtures, benches, and unique architectural features."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Frameless Shower Doors Henderson & Summerlin | Modern Glass | Baja Glass</title>
        <meta name="description" content="Premium frameless shower doors in Henderson, Summerlin & Las Vegas Valley. Minimal metal, maximum openness with custom glass measured precisely. Licensed installers!" />
        <link rel="canonical" href="https://bajaglass.com/shower-doors-las-vegas/frameless/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-charcoal to-primary text-white">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/dff9a879-f6db-4f4a-908d-2842b809c7e4.png" 
            alt="Modern luxury bathroom with frameless glass shower door and freestanding tub - professional glass installation Las Vegas"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Frameless Shower Doors in Henderson & Summerlin</h1>
            <p className="text-xl mb-8 text-white/90">Minimal metal, maximum openness—custom glass measured precisely and installed by experts.</p>
            <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center">
              Frameless shower doors offer a clean, modern look that makes bathrooms feel bigger and brighter. At Baja Glass, we measure, fabricate, and install frameless systems with thick tempered glass, premium hardware, and tight, clean finishes for a leak-resistant fit.
            </p>
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frameless Design Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Door Types</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Inline, corner, neo‑angle, alcove configurations</li>
                <li>• Steam shower-ready designs</li>
                <li>• Single and multiple panel layouts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Glass Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 3/8" or 1/2" tempered safety glass</li>
                <li>• Clear or low‑iron (ultra‑clear) options</li>
                <li>• Frosted and patterned glass available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hardware Finishes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Matte black, polished chrome</li>
                <li>• Brushed nickel, brass tones</li>
                <li>• Custom handle styles and placements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Mounting Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Low-profile clips for minimal look</li>
                <li>• Structural channels where needed</li>
                <li>• Precision hinge placement</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule My Measurement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Beauty and Durability</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Precise laser measurements and expert edge polishing create seamless alignment and consistent reveals. We address out‑of‑plumb walls, kneewalls, and custom cutouts to ensure doors close cleanly and seals sit properly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Clean Silicone Lines</h3>
                <p className="text-sm text-muted-foreground">Minimal, precise sealing for a refined finish</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Proper Pitch</h3>
                <p className="text-sm text-muted-foreground">Designed to help mitigate water splash</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Hardware Alignment</h3>
                <p className="text-sm text-muted-foreground">Careful torque and positioning for smooth operation</p>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="cta" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Installed by Local Experts</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Serving Henderson, Summerlin, and the entire Las Vegas Valley with precision frameless shower door installation. Expect clean, careful work and clear communication from our local team.
          </p>
          <div className="bg-background p-6 rounded-lg inline-block">
            <p className="font-semibold">Baja Glass</p>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frameless Shower Door FAQs</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-secondary/50 p-6 rounded-lg">
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
          <h2 className="text-3xl font-bold mb-4">Ready for a Frameless Upgrade?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Get expert advice and a precise measurement from our experienced team.</p>
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

export default FramelessShowerDoors;