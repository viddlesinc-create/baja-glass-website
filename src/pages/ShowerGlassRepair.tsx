import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import damagedShowerGlass from "@/assets/damaged-shower-glass.jpg";
import PhoneNumber from "@/components/PhoneNumber";

const ShowerGlassRepair = () => {
  const commonProblems = [{
    title: "Broken or Shattered Glass",
    description: "Safe removal and replacement of cracked or shattered tempered glass panels with precise measurements."
  }, {
    title: "Off‑Track Sliding Doors",
    description: "Repair or replacement of worn rollers, tracks, and alignment issues that cause grinding or sticking."
  }, {
    title: "Loose Hinges & Hardware",
    description: "Tightening, realignment, or replacement of hinges, handles, and mounting hardware for secure operation."
  }, {
    title: "Leaks & Water Issues",
    description: "Seal and sweep replacement, pitch adjustment, and silicone repair to eliminate unwanted water escape."
  }, {
    title: "Wobbly Panels",
    description: "Structural assessment and repair of loose panels, clips, and mounting systems for stability."
  }];

  const serviceAreas = [
    { name: "Las Vegas", link: "/shower-doors-las-vegas" },
    { name: "Henderson", link: "/shower-doors-henderson-nv" },
    { name: "Summerlin", link: "/shower-doors-summerlin-nv" },
    { name: "Paradise", link: "/shower-doors-paradise-nv" },
    { name: "Spring Valley", link: "/shower-doors-spring-valley-nv" },
    { name: "Enterprise", link: "/shower-doors-enterprise-nv" },
    { name: "Green Valley", link: "/shower-doors-green-valley-nv" },
    { name: "North Las Vegas", link: "/areas-served" },
    { name: "Boulder City", link: "/areas-served" }
  ];

  const faqs = [{
    question: "Do you offer shower door repair near me in Las Vegas?",
    answer: "Yes! Baja Glass provides shower door repair throughout the Las Vegas Valley including Las Vegas, Henderson, Summerlin, Paradise, Spring Valley, Enterprise, and Green Valley. We offer same-day scheduling for urgent repairs."
  }, {
    question: "Can you replace just the glass panel?",
    answer: "Yes! We can often replace individual glass panels while keeping existing hardware, depending on the condition and compatibility of your current system."
  }, {
    question: "My sliding door is hard to move—can you fix the rollers and track?",
    answer: "Absolutely. We repair or replace worn rollers, clean and align tracks, and adjust the system for smooth, reliable operation."
  }, {
    question: "The door leaks—can you replace the seals and adjust the fit?",
    answer: "Yes, we can replace worn seals and sweeps, adjust door alignment, and improve water containment with proper pitch and silicone work."
  }, {
    question: "Is it better to repair or replace an older framed unit?",
    answer: "We'll assess your system's condition and provide honest recommendations. Sometimes repair is cost-effective; other times replacement offers better long-term value."
  }, {
    question: "How quickly can you schedule emergency shower glass repair?",
    answer: "For broken glass emergencies, we prioritize same-day or next-day service. Call (702) 383-0779 for immediate assistance."
  }, {
    question: "Can you match my existing hardware finish?",
    answer: "We'll do our best to match existing finishes, or we can recommend coordinating options that work well with your current bathroom fixtures."
  }];

  return <div className="min-h-screen">
      <Helmet>
        {/* Service Schema with geo-targeting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Shower Door Repair",
            "name": "Shower Door Repair Near Me - Las Vegas Valley",
            "description": "Emergency shower door repair services in Las Vegas. Same-day service for broken glass, sliding door repair, seal replacement, and hardware fixes.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baja Glass & Mirror LLC",
              "telephone": "(702) 383-0779",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4280 Reno Ave, Ste A",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89118",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Las Vegas", "containedIn": "Nevada" },
              { "@type": "City", "name": "Henderson", "containedIn": "Nevada" },
              { "@type": "City", "name": "Summerlin", "containedIn": "Nevada" },
              { "@type": "City", "name": "Paradise", "containedIn": "Nevada" },
              { "@type": "City", "name": "Spring Valley", "containedIn": "Nevada" },
              { "@type": "City", "name": "Enterprise", "containedIn": "Nevada" },
              { "@type": "City", "name": "North Las Vegas", "containedIn": "Nevada" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Shower Door Repair Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Broken Glass Replacement" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sliding Door Roller Repair" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shower Seal Replacement" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hardware & Hinge Repair" }}
              ]
            }
          })}
        </script>
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
      {/* Hero Section - Optimized for "shower door repair near me" */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src={damagedShowerGlass} alt="Damaged shower glass door needing repair in Las Vegas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-primary/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shower Door Repair Near Me | Las Vegas & Henderson Emergency Service</h1>
            <p className="text-xl mb-4 text-white/90">Same-day scheduling for broken glass, off-track sliders, leaks, and hardware issues throughout the Las Vegas Valley.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm">Serving All Las Vegas Valley</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request Emergency Service</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <PhoneNumber 
                  location="repair_hero"
                  showIcon={true}
                  showPrefix={true}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro - Targeting "shower door repair" variations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Professional Shower Door Repair in Las Vegas</h2>
            <p className="text-lg text-muted-foreground text-center mb-4">
              When a shower door fails—cracked glass, sticking rollers, loose hinges, or leaks—you need fast, reliable <strong>shower door repair near you</strong>. Baja Glass diagnoses the issue and repairs or replaces components with safety, alignment, and sealing in mind. We serve Las Vegas, Henderson, Summerlin, and the entire Las Vegas Valley.
            </p>
            <p className="text-center text-muted-foreground">
              Prevent future issues with our <Link to="/blog/las-vegas-water-quality-shower-glass-hard-water-solutions" className="text-primary underline hover:text-primary/80">hard water protection guide</Link> and learn about <Link to="/blog/glass-care-guide" className="text-primary underline hover:text-primary/80">proper glass maintenance</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section - Targeting "near me" queries */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shower Door Repair Service Areas</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for <strong>shower door repair near me</strong>? We provide fast, professional service throughout the Las Vegas Valley:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {serviceAreas.map(area => (
              <Link 
                key={area.name}
                to={area.link}
                className="bg-background p-4 rounded-lg text-center hover:shadow-lg transition-shadow hover:bg-accent/5"
                onClick={() => window.scrollTo(0, 0)}
              >
                <MapPin className="h-5 w-5 mx-auto mb-2 text-accent" />
                <span className="font-medium">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">We Repair These Shower Door Issues</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From <strong>glass shower door repair</strong> to hardware fixes, our technicians handle all types of shower door problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {commonProblems.map(problem => <div key={problem.title} className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>)}
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
          <h2 className="text-3xl font-bold text-center mb-12">Safe, Clean, and Careful Shower Glass Repair</h2>
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
                <PhoneNumber 
                  location="repair_mid_cta"
                  showIcon={true}
                  showPrefix={true}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Emergency Shower Door Repair in Las Vegas</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Need <strong>emergency shower glass repair</strong>? We prioritize safety and fast response for broken glass and urgent issues. Same-day scheduling available throughout Las Vegas, Henderson, Summerlin, and surrounding areas.
          </p>
          <div className="bg-background p-8 rounded-lg max-w-md mx-auto text-center">
            <p className="font-semibold text-xl mb-2">Baja Glass & Mirror LLC</p>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-2xl font-bold text-primary mt-4">(702) 383-0779</p>
            <Button variant="cta" size="lg" className="mt-6 w-full" asChild>
              <a href="tel:+17023830779" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Call for Emergency Service
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Shower Door Repair Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[{
            title: "Assessment",
            description: "We evaluate the issue and recommend the safest, most cost-effective solution."
          }, {
            title: "Quote",
            description: "Clear pricing for repair or replacement options with no hidden fees."
          }, {
            title: "Repair/Replace",
            description: "Professional work with quality materials and proper safety procedures."
          }, {
            title: "Testing",
            description: "Final inspection and testing to ensure smooth operation and proper sealing."
          }].map((step, index) => <div key={step.title} className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQs - Optimized for target keywords */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Shower Door Repair FAQs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Common questions about <strong>shower door repair near me</strong> in Las Vegas and Henderson.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map(faq => <div key={faq.question} className="bg-background p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Related Shower Door Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/shower-doors-las-vegas/frameless" className="bg-secondary/30 p-6 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
              <h3 className="font-semibold mb-2">Frameless Shower Doors</h3>
              <p className="text-sm text-muted-foreground">Modern, clean designs</p>
            </Link>
            <Link to="/shower-doors-las-vegas/sliding" className="bg-secondary/30 p-6 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
              <h3 className="font-semibold mb-2">Sliding Shower Doors</h3>
              <p className="text-sm text-muted-foreground">Space-saving solutions</p>
            </Link>
            <Link to="/shower-doors-las-vegas/custom-enclosures" className="bg-secondary/30 p-6 rounded-lg text-center hover:shadow-lg transition-shadow" onClick={() => window.scrollTo(0, 0)}>
              <h3 className="font-semibold mb-2">Custom Enclosures</h3>
              <p className="text-sm text-muted-foreground">Made-to-measure designs</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Shower Door Repair Near You?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Get fast, professional service to restore your shower door's function and safety. Serving Las Vegas, Henderson, Summerlin, and the entire valley.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request a Service Visit</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <PhoneNumber 
                location="repair_footer_cta"
                showIcon={true}
                showPrefix={true}
              />
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default ShowerGlassRepair;
