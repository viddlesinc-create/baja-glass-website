import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServiceAreasBlock from "@/components/ServiceAreasBlock";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { useStickyMobileCTAPadding } from "@/hooks/useStickyMobileCTAPadding";

const TubSlidingDoors = () => {
  const navigate = useNavigate();
  useStickyMobileCTAPadding();
  const faqs = [
    {
      question: "Do sliding glass doors work on a bathtub?",
      answer: "Yes. We install sliding systems on tub/shower combinations, with the right sealing and hardware for the tub."
    },
    {
      question: "What's the difference between single sliding and bypass doors?",
      answer: "Single sliding has one moving panel next to a fixed panel. Bypass has two panels that slide past each other, which gives you a wider opening."
    },
    {
      question: "Can I get clearer glass?",
      answer: "Yes. Low-iron glass removes the green tint on standard glass edges."
    },
    {
      question: "Do you offer coatings for hard water spots?",
      answer: "Yes. A hydrophobic coating helps water bead and roll off the glass, so you see fewer hard water spots."
    },
    {
      question: "Are soft-close doors available?",
      answer: "Yes. Soft-close rollers stop the door from slamming and make it glide smoothly."
    },
    {
      question: "How thick is the glass on tub doors?",
      answer: "Our sliding tub doors use 3/8\" glass."
    },
    {
      question: "Do sliding doors seal as well as hinged doors?",
      answer: "When it's installed with quality rollers, tracks and seals, a sliding door keeps water in well and glides smoothly."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sliding Glass Shower Door Installation for Tubs",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Las Vegas",
                "containedIn": "Clark County, NV"
              },
              {
                "@type": "City",
                "name": "Henderson",
                "containedIn": "Clark County, NV"
              }
            ]
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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/bypass-sliding-glass-doors-3.webp"
            alt="Sliding glass shower doors installed on a bathtub"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            fetchpriority="high"
            loading="eager"
            decoding="sync"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative container mx-auto px-4 py-20 z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Sliding Glass Shower Doors for Your Existing Tub in Las Vegas</h1>
            <p className="text-xl text-white/90">Add sliding glass doors to the tub you already have and get a clean, clear shower.</p>
          </div>
        </div>
      </section>

      {/* 1 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Turn Your Tub Into a Shower With Sliding Glass Doors</h2>
            <p className="text-lg text-muted-foreground mb-4">Sliding glass doors fit on the tub you already have. The panels glide along a track, so nothing swings out into a small bathroom. Choose single sliding, with one moving panel beside a fixed panel, or bypass, with two panels that slide past each other for a wider way in.</p>
            <p>
              <Link to="/shower-enclosures-las-vegas" className="text-primary hover:underline font-medium" onClick={() => window.scrollTo(0, 0)}>
                Custom shower enclosures in Las Vegas
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Glass Only: We Install on Your Existing Tub (no tub removal, tile or plumbing)</h2>
            <p className="text-lg text-muted-foreground mb-4">This page covers glass doors only. We measure your tub opening, make the glass to fit, and install the doors and hardware on the tub you have now.</p>
            <p className="text-lg text-muted-foreground">Before we measure, send us a picture of your existing tub so we can make sure we can retrofit yours.</p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Semi-Frameless and Framed Sliding Tub Doors</h2>
            <p className="text-lg text-muted-foreground mb-4">Sliding tub doors come in two styles. Semi-frameless uses a partial metal frame around the outer edges and leaves the door panels clean and open. Framed doors have metal all the way around. Both come in the same hardware finishes.</p>
            <p>
              <Link to="/shower-doors-las-vegas/sliding" className="text-primary hover:underline font-medium" onClick={() => window.scrollTo(0, 0)}>
                Sliding shower doors in Las Vegas
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Glass, Hardware and Coatings for Las Vegas Hard Water</h2>
            <p className="text-lg text-muted-foreground mb-4">Las Vegas has hard water, and it leaves spots on glass. A hydrophobic coating makes water bead up and roll off, so you scrub less. Low-iron glass removes the green tint you see on the edges of standard glass. For handles you can pick ladder pulls, compact handles or towel bars, and soft-close rollers keep the door from slamming.</p>
            <p className="text-lg text-muted-foreground mb-6">Tub-door glass: 3/8" glass.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 3/8" tempered glass</li>
              <li>• Low-iron glass</li>
              <li>• Hydrophobic coatings</li>
              <li>• Finishes: polished chrome, matte black, brushed nickel, brass</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Process: Measure, Fabricate, Install</h2>
            <p className="text-lg text-muted-foreground mb-6">First we come out and measure your tub opening for free. Then we make your glass to size. Last, we install the doors and walk through the finished job with you.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Free in-home measurement</li>
              <li>• About 2 weeks from measure to install</li>
              <li>• Install usually 4–6 hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Serving Las Vegas Since 2010</h2>
            <p className="text-lg text-muted-foreground mb-6">We've installed shower glass for Las Vegas homeowners since 2010. We're family-operated, first-responder owned, and licensed, bonded and insured. Every install comes with our 1-Year Parts & Labor + lifetime hardware warranty.</p>
            <p className="text-lg text-muted-foreground mb-6">Proudly serving Henderson and the entire Las Vegas Valley with expert sliding shower door installation.</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Licensed, bonded, insured</li>
              <li>• Warranty: 1-Year Parts & Labor + lifetime hardware</li>
            </ul>
            <div className="bg-background p-6 rounded-lg inline-block">
              <p className="font-semibold">Baja Glass & Mirror LLC</p>
              <p className="text-muted-foreground">4280 W Reno Ave, Ste A, Las Vegas, NV 89118</p>
              <p className="text-muted-foreground">(702) 383-0779</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">FAQ</h2>
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

      {/* Related Services */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Other Shower Door Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Frameless Doors</CardTitle>
                <CardDescription>Modern, minimal metal design for open feel</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/frameless" onClick={() => window.scrollTo(0, 0)}>
                    Explore Frameless
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Hinged Doors</CardTitle>
                <CardDescription>Classic swing doors with wide opening</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/hinged" onClick={() => window.scrollTo(0, 0)}>
                    Explore Hinged
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Semi-Frameless</CardTitle>
                <CardDescription>Balanced design with strategic support</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/semi-frameless-framed" onClick={() => window.scrollTo(0, 0)}>
                    Explore Semi-Frameless
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Single CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Button variant="glass" size="lg" asChild>
            <a href="tel:+17023830779" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Book a free in-home glass measurement
            </a>
          </Button>
          <p className="mt-4 text-primary-foreground/80">Call (702) 383-0779 · Mon–Fri 8–4</p>
        </div>
      </section>

      <ServiceAreasBlock />
      <StickyMobileCTA onQuoteClick={() => navigate("/contact")} />
    </div>
  );
};

export default TubSlidingDoors;
