import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, Home, Building2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PhoneNumber from "@/components/PhoneNumber";

// Architectural glass doors only (entry, interior, pivot, restaurant/storefront).
// Shower doors live under /shower-doors-las-vegas — keep that wording off this page.
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

const CustomGlassDoors = () => {
  const faqs = [
    {
      question: "Do you install custom glass doors in Las Vegas?",
      answer: "Yes. Baja Glass & Mirror provides custom glass doors for Las Vegas homes and businesses, including glass pivot doors, luxury residential glass doors, interior glass doors, and commercial and restaurant glass doors. We serve the whole Las Vegas Valley, including Henderson, Summerlin and North Las Vegas."
    },
    {
      question: "Do you install glass pivot doors?",
      answer: "Yes. Glass pivot doors are one of the custom door types we offer for homes and businesses. Each door is measured on site and quoted before anything is ordered."
    },
    {
      question: "Do you install restaurant and commercial glass doors?",
      answer: "Yes. We provide commercial and restaurant glass doors. For office partitions and storefront systems, see our office glass enclosures service."
    },
    {
      question: "How much does a custom glass door cost?",
      answer: "We do not publish prices for glass doors because every opening and door type is different. Measurements and quotes are free: call (702) 383-0779 or request a quote online."
    },
    {
      question: "Are you licensed and insured for commercial work?",
      answer: "Baja Glass & Mirror LLC is licensed, bonded and insured, and has served Las Vegas since 2009."
    }
  ];

  const residential = [
    { title: "Custom Glass Doors", description: "Glass doors made for your opening instead of a stock size, measured on site before they are ordered." },
    { title: "Luxury Residential Glass Doors", description: "Statement glass doors for high-end Las Vegas homes, specified to the look you want." },
    { title: "Interior Glass Doors", description: "Glass doors between rooms that keep spaces connected and let light travel through the home." },
    { title: "Glass Pivot Doors", description: "Doors that turn on a pivot point rather than side hinges, for a wide, clean opening." }
  ];

  const commercial = [
    { title: "Restaurant Glass Doors", description: "Glass doors for Las Vegas restaurants and dining rooms." },
    { title: "Commercial Glass Doors", description: "Glass doors for offices, retail and other commercial spaces across the valley." }
  ];

  const steps = [
    { step: "1", title: "Site visit & measurement", detail: "We visit your home or business, review the opening and measure it." },
    { step: "2", title: "Design & quote", detail: "We confirm the door type and details with you and provide a written quote." },
    { step: "3", title: "Fabrication", detail: "Your door is ordered and fabricated to the measured opening." },
    { step: "4", title: "Installation & walkthrough", detail: "We install the door and walk you through the finished work." }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Custom Glass Door Installation",
            "name": "Custom Glass Doors & Pivot Doors in Las Vegas",
            "description": "Custom glass doors, glass pivot doors, luxury residential glass doors and commercial and restaurant glass doors for Las Vegas homes and businesses.",
            "url": "https://bajaglass.com/glass-company-las-vegas/custom-glass-doors",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "areaServed": areasServed.map((name) => ({ "@type": "City", "name": name, "containedIn": "Clark County, NV" })),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom Glass Door Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Pivot Doors" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luxury Residential Glass Doors" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Glass Doors" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial and Restaurant Glass Doors" } }
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
            src="/images/glass-company-commercial-residential-services.webp"
            alt="Frameless glass office wall with a glass swing door and ladder pull handle"
            className="w-full h-full object-cover opacity-60"
            width="1400"
            height="1740"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-primary/40 to-charcoal/60"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30 mb-4">
              Licensed, Bonded & Insured Since 2009
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Custom Glass Doors &amp; Pivot Doors in Las Vegas
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl">
              Baja Glass &amp; Mirror provides custom glass doors, glass pivot doors and commercial glass doors for homes and businesses throughout Las Vegas, Henderson and the rest of the valley. Every door is measured for its opening. Call (702) 383-0779 or request a free quote online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (702) 383-0779
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request a Free Door Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Architectural Glass Doors for Homes and Businesses</h2>
          <p className="text-lg text-muted-foreground mb-4">
            A glass door changes how a space feels. It lets light through, opens sightlines between rooms, and makes an entry look deliberate. Baja Glass &amp; Mirror is a family-owned, first-responder-owned Las Vegas glass company, and we have worked on homes and businesses across the valley since 2009.
          </p>
          <p className="text-lg text-muted-foreground">
            We measure every opening on site, so your door is made for the space it goes into rather than adapted from a stock size.
          </p>
        </div>
      </section>

      {/* Residential */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Home className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 className="text-3xl font-bold">Residential Glass Doors</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Custom, luxury, interior and pivot glass doors for Las Vegas homes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {residential.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Looking for a pivot shower door? See{" "}
            <Link to="/shower-doors-las-vegas/hinged" className="text-primary underline hover:text-primary/80">hinged &amp; pivot shower doors</Link>.
          </p>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 className="text-3xl font-bold">Commercial &amp; Restaurant Glass Doors</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Glass doors for Las Vegas restaurants, shops and offices. For glass partitions and storefront systems, see our{" "}
            <Link to="/glass-company-las-vegas/office-enclosures" className="text-primary underline hover:text-primary/80">office glass enclosures and storefront systems</Link>{" "}
            service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commercial.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          {/* TODO(Frank): confirm whether Baja offers Herculite doors ("henderson herculite doors" query). "Herculite" does not appear anywhere else in the site's content, so it is not mentioned here. */}
        </div>
      </section>

      {/* Planning */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Planning a Glass Door Project</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Every custom glass door starts with the opening. These details help us give you an accurate quote:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Where the door goes", detail: "An entry, an interior doorway between rooms, or a restaurant or storefront opening. Interior and exterior doors are planned differently." },
              { title: "How it should open", detail: "A pivot door turns on a pivot point for a wide, clean opening; other doors swing on hinges. Tell us which look you have in mind." },
              { title: "New or replacement", detail: "Let us know whether the opening is new construction or an existing door being replaced, so the measurement covers what is there today." },
              { title: "Business requirements", detail: "For commercial and restaurant doors, share your schedule and any building or landlord requirements before we quote." }
            ].map((item) => (
              <div key={item.title} className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How a Custom Glass Door Project Works</h2>
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
          <p className="text-center text-muted-foreground mt-10">
            We serve {areasServed.slice(0, -1).join(", ")} and {areasServed[areasServed.length - 1]}.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Custom Glass Door FAQs</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Plan Your Custom Glass Door</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Free measurements and quotes for homes and businesses across the Las Vegas Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request a Quote</Link>
            </Button>
            <PhoneNumber location="custom_glass_doors_cta" className="text-xl font-semibold" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CustomGlassDoors;
