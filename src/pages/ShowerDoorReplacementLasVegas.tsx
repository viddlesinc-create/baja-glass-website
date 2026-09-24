import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PhoneNumber from "@/components/PhoneNumber";
import StickyMobileCallBar from "@/components/StickyMobileCallBar";

// Scope: full door replacement and broken/cracked panel replacement only. Baja does not
// offer repairs of any kind, so no repair wording belongs on this page.
const areasServed = [
  "Las Vegas",
  "Henderson",
  "Summerlin",
  "North Las Vegas",
  "Paradise",
  "Spring Valley",
  "Enterprise",
  "Green Valley",
  "Centennial Hills",
  "Boulder City",
];

const ShowerDoorReplacementLasVegas = () => {
  const faqs = [
    {
      question: "Do you replace shower doors in Las Vegas and Henderson?",
      answer: "Yes. Baja Glass & Mirror replaces complete shower doors and broken or cracked glass panels throughout Las Vegas, Henderson, Summerlin, North Las Vegas, Paradise, Spring Valley, Enterprise, Green Valley, Centennial Hills and Boulder City. Measurements and quotes are free and done in your home."
    },
    {
      question: "Can you replace just one broken or cracked glass panel?",
      answer: "Yes. We replace broken or cracked shower glass panels with new tempered safety glass cut to your measured opening. If the rest of the enclosure is dated, we can also quote a full door replacement so you can compare both options."
    },
    {
      question: "How much does shower door replacement cost?",
      answer: "Replacement is priced like a new installation because the glass is made new for your opening. Our published ranges are framed $400–$800, semi-frameless $800–$1,400 and frameless $1,200–$2,800, depending on glass thickness. We do not publish a price for single-panel replacement; it is quoted after a free in-home measurement."
    },
    {
      question: "How long does shower door replacement take?",
      answer: "Measure-to-install is typically 3–7 business days. Your glass is fabricated in our Las Vegas shop in 2–5 business days after the quote is approved, and installation is typically completed in a single day."
    },
    {
      question: "Can I replace my framed shower door with a frameless one?",
      answer: "Yes. Replacing a framed door with frameless or semi-frameless glass is one of the most common reasons homeowners call us. We measure the opening as it is today and fabricate new tempered glass in 3/8\" or 1/2\" thickness to fit it."
    },
    {
      question: "Do you fix existing shower doors?",
      answer: "No. We do not offer repairs of any kind. We replace broken or cracked glass panels and complete shower doors with new custom glass."
    }
  ];

  const cityPages = [
    { name: "Henderson", url: "/shower-doors-henderson-nv" },
    { name: "Summerlin", url: "/shower-doors-summerlin-nv" },
    { name: "Paradise", url: "/shower-doors-paradise-nv" },
    { name: "Spring Valley", url: "/shower-doors-spring-valley-nv" },
    { name: "Enterprise", url: "/shower-doors-enterprise-nv" },
    { name: "Green Valley", url: "/shower-doors-green-valley-nv" },
    { name: "Centennial Hills", url: "/shower-doors-centennial-hills-nv" },
    { name: "Las Vegas", url: "/shower-doors-las-vegas" }
  ];

  const steps = [
    { step: "1", title: "In-home consultation & laser measurement", detail: "About one hour. We look at the existing door and opening, talk through styles, glass and finishes, and laser-measure the space as it is today." },
    { step: "2", title: "Design & quote", detail: "You get a written quote for the door style, glass thickness, clarity, coating and hardware finish you chose." },
    { step: "3", title: "Fabrication in our Las Vegas shop", detail: "New tempered safety glass is cut and finished to your measurements, typically in 2–5 business days." },
    { step: "4", title: "Installation", detail: "We remove the old door or broken panel and install the new glass, typically in a single day." },
    { step: "5", title: "Final walkthrough & warranty review", detail: "We walk you through the finished door and review your warranty before we leave." }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Shower Door Replacement",
            "name": "Shower Door Replacement in Las Vegas & Henderson",
            "description": "Full shower door replacement and broken or cracked shower glass panel replacement across the Las Vegas Valley, with free in-home measurements and quotes.",
            "url": "https://bajaglass.com/shower-door-replacement-las-vegas",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "areaServed": areasServed.map((name) => ({ "@type": "City", "name": name, "containedIn": "Clark County, NV" })),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Shower Door Replacement Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Shower Door Replacement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Broken or Cracked Shower Glass Panel Replacement" } }
              ]
            }
          })}
        </script>
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

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-primary to-charcoal text-white">
        <div className="absolute inset-0">
          <img
            src="/images/custom-frameless-shower-door-installation.webp"
            alt="Frameless glass shower door installed in a bathroom"
            className="w-full h-full object-cover opacity-75"
            width="1920"
            height="1080"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-primary/30 to-charcoal/50"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30 mb-4">
              Licensed, Bonded & Insured
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Shower Door Replacement in Las Vegas &amp; Henderson
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl">
              Baja Glass &amp; Mirror replaces complete shower doors and broken or cracked shower glass panels across Las Vegas, Henderson and the rest of the valley. New tempered glass is measured, fabricated and installed by our own team. For a free in-home measurement and quote, call (702) 383-0779 or request one online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (702) 383-0779
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Free Replacement Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What replacement includes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">What Shower Door Replacement Includes</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Shower door replacement means new glass, not a fix to the old door. We take out the existing door, measure the opening as it is today, and install a new door fabricated for that opening. We have served Las Vegas homeowners since 2009, and we are a family-owned, first-responder-owned company.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Removal of the existing shower door",
              "Laser measurement of the current opening",
              "New tempered safety glass in 3/8\" (standard) or 1/2\" (premium)",
              "Optional low-iron ultra-clear glass and hydrophobic coating",
              "Hardware in polished chrome, brushed nickel, matte black or brass/gold",
              "Final walkthrough and warranty review"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Broken or cracked panel */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Replacing a Broken or Cracked Glass Panel</h2>
              <p className="text-muted-foreground mb-4">
                A cracked or broken shower glass panel should not stay in service. We replace the damaged panel with new tempered safety glass cut to your measured opening, so the rest of the enclosure can stay in place when it is still in good shape.
              </p>
              <p className="text-muted-foreground mb-4">
                If the enclosure around the panel is dated, it can make sense to replace the whole door at the same time. We will quote both options at the in-home measurement so you can decide.
              </p>
              <p className="text-muted-foreground">
                Read more in our guide to{" "}
                <Link to="/blog/cracked-shower-glass-replacement-las-vegas" className="text-primary underline hover:text-primary/80">
                  cracked shower glass replacement in Las Vegas
                </Link>.
              </p>
            </div>
            <img
              src="/images/damaged-shower-glass.jpg"
              alt="Cracked tempered glass on a shower door panel"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              width="800"
              height="600"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Upgrading from framed */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src="/images/framed-shower-before-upgrade.webp"
              alt="Framed shower door with metal frame before an upgrade"
              className="rounded-lg shadow-lg w-full h-auto object-cover order-2 md:order-1"
              width="800"
              height="600"
              loading="lazy"
            />
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Upgrading From a Framed Shower Door</h2>
              <p className="text-muted-foreground mb-4">
                Many replacements start with a dated framed door. Replacing it with{" "}
                <Link to="/shower-doors-las-vegas/frameless" className="text-primary underline hover:text-primary/80">frameless shower doors</Link>{" "}
                or a semi-frameless door opens up the shower and removes most of the metal from view.
              </p>
              <p className="text-muted-foreground mb-4">
                Frameless doors use thicker glass with minimal hardware. Semi-frameless doors keep some metal support and cost less. Framed doors remain the most budget-friendly choice.
              </p>
              <p className="text-muted-foreground">
                Not sure which style fits your bathroom? Compare them in{" "}
                <Link to="/blog/frameless-vs-semi-frameless-shower-doors" className="text-primary underline hover:text-primary/80">
                  frameless vs. semi-frameless shower doors
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing context */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">What Replacement Costs</h2>
          <p className="text-muted-foreground mb-8">
            A replacement door is priced like a new installation, because the glass is fabricated new for your opening. These are the ranges from our{" "}
            <Link to="/blog/shower-door-installation-cost-las-vegas" className="text-primary underline hover:text-primary/80">
              shower door installation cost guide
            </Link>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { type: "Framed", range: "$400–$800" },
              { type: "Semi-frameless", range: "$800–$1,400" },
              { type: "Frameless 3/8\"", range: "$1,200–$2,000" },
              { type: "Frameless 1/2\"", range: "$1,600–$2,800" }
            ].map((p) => (
              <Card key={p.type}>
                <CardHeader>
                  <CardTitle className="text-lg">{p.type}</CardTitle>
                  <CardDescription className="text-xl font-semibold text-foreground">{p.range}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="text-muted-foreground">
            Low-iron glass adds $200–$500, a hydrophobic coating adds $150–$300, and brushed nickel, matte black or brass/gold hardware adds to the standard chrome price. Single-panel replacement is quoted after a free in-home measurement.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">How Shower Door Replacement Works</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Measure-to-install is typically 3–7 business days.
          </p>
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.step} className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{s.step}</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule a Free In-Home Measurement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Shower Door Replacement Service Area</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            We replace shower doors and glass panels in {areasServed.slice(0, -1).join(", ")} and {areasServed[areasServed.length - 1]}. For glass shower door replacement in Henderson, see our{" "}
            <Link to="/shower-doors-henderson-nv" className="text-primary underline hover:text-primary/80">Henderson shower doors</Link> page.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {cityPages.map((area) => (
              <Button key={area.name} variant="outline" asChild className="justify-start">
                <Link to={area.url} onClick={() => window.scrollTo(0, 0)}>
                  <MapPin className="h-4 w-4 mr-2" />
                  {area.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shower Door Replacement FAQs</h2>
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
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Replace Your Shower Door?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Free in-home measurements and quotes across the Las Vegas Valley. Licensed, bonded and insured.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Quote</Link>
            </Button>
            <PhoneNumber location="shower_door_replacement_cta" className="text-xl font-semibold" />
          </div>
        </div>
      </section>

      <StickyMobileCallBar />
    </div>
  );
};

export default ShowerDoorReplacementLasVegas;
