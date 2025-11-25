import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const HingedShowerDoors = () => {
  const faqs = [
    {
      question: "What's the difference between a hinged and pivot door?",
      answer: "Hinged doors use traditional hinges mounted to the wall or glass panel. Pivot doors rotate on pivot points at the top and bottom, allowing for larger, heavier glass panels."
    },
    {
      question: "Which way should my shower door swing?",
      answer: "Doors typically swing outward for safety and easier access. We'll assess your bathroom layout to determine the optimal swing direction during measurement."
    },
    {
      question: "Can hinged doors work in small bathrooms?",
      answer: "Yes! We carefully measure clearances and can recommend space-saving solutions like pivot doors or alternative layouts that maximize your available space."
    },
    {
      question: "Do hinged doors seal better than sliding doors?",
      answer: "Both can seal excellently when properly installed. Hinged doors use compression seals that create tight closure, while sliding doors use sweep seals and proper track alignment."
    },
    {
      question: "Are there handle and hinge finish options?",
      answer: "Absolutely! We offer matte black, polished chrome, brushed nickel, and brass finishes to match your bathroom fixtures and personal style."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Hinged Shower Doors Las Vegas | Baja Glass</title>
        <meta name="description" content="Expert hinged & pivot shower door installation in Las Vegas. Classic swing doors with precise alignment & quality hardware. Frameless & semi-frameless options." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://bajaglass.com/shower-doors-las-vegas/hinged" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hinged & Pivot Shower Doors Summerlin | Professional Installation | Baja Glass" />
        <meta property="og:description" content="Expert hinged and pivot shower door installation in Summerlin & Las Vegas Valley. Classic swing doors with precise alignment and reliable sealing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/shower-doors-las-vegas/hinged" />
        <meta property="og:image" content="https://bajaglass.com/lovable-uploads/fb2b173a-c011-49f6-aba2-541dbd7b4387.png" />
        <meta property="og:site_name" content="Baja Glass" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hinged & Pivot Shower Doors Summerlin | Professional Installation | Baja Glass" />
        <meta name="twitter:description" content="Expert hinged and pivot shower door installation in Summerlin & Las Vegas Valley. Classic swing doors with precise alignment." />
        <meta name="twitter:image" content="https://bajaglass.com/lovable-uploads/fb2b173a-c011-49f6-aba2-541dbd7b4387.png" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hinged Shower Door Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baja Glass"
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
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-charcoal to-primary text-white">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/fb2b173a-c011-49f6-aba2-541dbd7b4387.png" 
            alt="Modern hinged glass shower door with black fixtures and geometric tile design - professional installation Las Vegas"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Hinged Shower Doors Las Vegas</h1>
            <p className="text-xl mb-8 text-white/90">Classic swing doors with precise alignment and crisp closure.</p>
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
              Hinged and pivot shower doors offer a wide, open feel and a timeless look. We measure and install for clean alignment, secure closure, and reliable seals.
            </p>
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hinged & Pivot Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Configuration Types</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Inline and corner installations</li>
                <li>• Single and double door systems</li>
                <li>• Door and panel combinations</li>
                <li>• Neo-angle corner designs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hinge Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Wall‑mounted heavy-duty hinges</li>
                <li>• Glass‑to‑glass hinge connections</li>
                <li>• Pivot systems for large panels</li>
                <li>• Self-closing hinge options</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Handle Styles</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ladder pulls in multiple sizes</li>
                <li>• Integrated towel bars</li>
                <li>• Compact handles for tight spaces</li>
                <li>• Custom placement options</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Frame Compatibility</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Frameless designs for modern look</li>
                <li>• Semi‑frameless with minimal metal</li>
                <li>• Traditional framed options</li>
                <li>• Compatible with all finishes</li>
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

      {/* Precision & Sealing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Built for a Clean, Confident Close</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Accurate hinge placement and gap control ensure solid closure and smooth movement. We set seals and sweeps to help mitigate splashing while maintaining a refined look.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Tight Reveals</h3>
                <p className="text-sm text-muted-foreground">Precise gaps and hinge alignment</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Quality Seals</h3>
                <p className="text-sm text-muted-foreground">Effective thresholds and compression seals</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Custom Placement</h3>
                <p className="text-sm text-muted-foreground">Handles positioned to avoid obstructions</p>
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
            Serving Summerlin and the entire Las Vegas Valley with expert hinged and pivot shower door installation. Expect clean, careful work and clear communication from our local professionals.
          </p>
          <div className="bg-background p-6 rounded-lg inline-block">
            <p className="font-semibold">Baja Glass</p>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore More Door Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Frameless Doors</CardTitle>
                <CardDescription>Clean, minimal look with thick tempered glass</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/frameless" onClick={() => window.scrollTo(0, 0)}>
                    View Frameless
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Sliding Doors</CardTitle>
                <CardDescription>Space-saving bypass and single systems</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/sliding" onClick={() => window.scrollTo(0, 0)}>
                    View Sliding
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Custom Enclosures</CardTitle>
                <CardDescription>Neo-angle and alcove configurations</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/custom-enclosures" onClick={() => window.scrollTo(0, 0)}>
                    View Custom
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hinged Shower Door FAQs</h2>
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
          <h2 className="text-3xl font-bold mb-4">Step Into a Timeless Shower Door</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Experience the classic elegance and reliability of expertly installed hinged doors.</p>
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

export default HingedShowerDoors;