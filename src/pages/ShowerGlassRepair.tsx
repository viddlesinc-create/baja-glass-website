import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const ShowerGlassRepair = () => {
  const commonProblems = [
    {
      title: "Broken or Shattered Glass",
      description: "Safe removal and replacement of cracked or shattered tempered glass panels with precise measurements."
    },
    {
      title: "Off‑Track Sliding Doors",
      description: "Repair or replacement of worn rollers, tracks, and alignment issues that cause grinding or sticking."
    },
    {
      title: "Loose Hinges & Hardware",
      description: "Tightening, realignment, or replacement of hinges, handles, and mounting hardware for secure operation."
    },
    {
      title: "Leaks & Water Issues",
      description: "Seal and sweep replacement, pitch adjustment, and silicone repair to eliminate unwanted water escape."
    },
    {
      title: "Wobbly Panels",
      description: "Structural assessment and repair of loose panels, clips, and mounting systems for stability."
    }
  ];

  const faqs = [
    {
      question: "Can you replace just the glass panel?",
      answer: "Yes! We can often replace individual glass panels while keeping existing hardware, depending on the condition and compatibility of your current system."
    },
    {
      question: "My sliding door is hard to move—can you fix the rollers and track?",
      answer: "Absolutely. We repair or replace worn rollers, clean and align tracks, and adjust the system for smooth, reliable operation."
    },
    {
      question: "The door leaks—can you replace the seals and adjust the fit?",
      answer: "Yes, we can replace worn seals and sweeps, adjust door alignment, and improve water containment with proper pitch and silicone work."
    },
    {
      question: "Is it better to repair or replace an older framed unit?",
      answer: "We'll assess your system's condition and provide honest recommendations. Sometimes repair is cost-effective; other times replacement offers better long-term value."
    },
    {
      question: "Can you match my existing hardware finish?",
      answer: "We'll do our best to match existing finishes, or we can recommend coordinating options that work well with your current bathroom fixtures."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/damaged-shower-glass.jpg" 
            alt="Damaged shower glass door needing repair"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-primary/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Shower Glass Repair & Replacement in Las Vegas</h1>
            <p className="text-xl mb-8 text-white/90">Broken panels, leaks, off‑track sliders, and hardware issues—fixed safely and efficiently.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request a Service Visit</Link>
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
              When a shower door fails—cracked glass, sticking rollers, loose hinges, or leaks—you need fast, reliable service. Baja Glass diagnoses the issue and repairs or replaces components with safety, alignment, and sealing in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">We Repair These Issues (and more)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {commonProblems.map((problem) => (
              <div key={problem.title} className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request a Service Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Repair Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Safe, Clean, and Careful Repairs</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              We assess your door's hardware, glass condition, and framing to choose the right fix. Where replacement is the safest route, we'll advise clearly and handle the entire process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Safety‑First Glass Handling</h3>
                <p className="text-sm text-muted-foreground">Proper removal and disposal of damaged tempered glass</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Quality Hardware Replacements</h3>
                <p className="text-sm text-muted-foreground">Durable components designed for long-term reliability</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Leak Mitigation</h3>
                <p className="text-sm text-muted-foreground">Correct seals and professional silicone application</p>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="phone" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Prompt Scheduling in the Las Vegas Area</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            We aim to schedule quickly across Las Vegas, Henderson, Summerlin, North Las Vegas, Paradise, Spring Valley, Enterprise, and Boulder City. For emergency glass issues, we prioritize safety and fast response.
          </p>
          <div className="bg-background p-6 rounded-lg inline-block mx-auto">
            <p className="font-semibold text-center">Baja Glass</p>
            <p className="text-muted-foreground text-center">4280 W Reno Ave, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground text-center">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Repair Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Assessment", description: "We evaluate the issue and recommend the safest, most cost-effective solution." },
              { title: "Quote", description: "Clear pricing for repair or replacement options with no hidden fees." },
              { title: "Repair/Replace", description: "Professional work with quality materials and proper safety procedures." },
              { title: "Testing", description: "Final inspection and testing to ensure smooth operation and proper sealing." }
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
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Repair FAQs</h2>
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
          <h2 className="text-3xl font-bold mb-4">Need Shower Door Repair?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Get fast, professional service to restore your shower door's function and safety.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request a Service Visit</Link>
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

export default ShowerGlassRepair;