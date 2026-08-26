import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Images } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ProductGallery from "@/components/ProductGallery";
import ServiceAreasBlock from "@/components/ServiceAreasBlock";
import ComparisonTable from "@/components/ComparisonTable";

const semiFramelessGalleryImages = [
  { src: "/lovable-uploads/7d880084-fd2a-4d13-9b02-6bc5661be634.png", alt: "Semi-frameless shower doors on bathtub", caption: "Semi-Frameless Design" },
  { src: "/lovable-uploads/1deef348-0e86-4da2-9bcb-2ca2964582bf.png", alt: "Textured semi-frameless glass", caption: "Textured Glass Option" },
  { src: "/lovable-uploads/ab324ca0-1c7d-49d5-ba4f-dd8865a3b916.png", alt: "Frosted semi-frameless door", caption: "Frosted Privacy Glass" },
  { src: "/lovable-uploads/fa10a8e6-c837-4e10-b9f0-c8bbd5506ea4.png", alt: "Framed shower before upgrade", caption: "Before Upgrade" },
  { src: "/lovable-uploads/b924d7a0-9e63-4616-9595-c35e3546e89a.png", alt: "Traditional framed shower enclosure", caption: "Traditional Frame" },
  { src: "/lovable-uploads/70012b37-e3d6-4261-b567-0a42b8632737.png", alt: "Upgraded semi-frameless installation", caption: "Complete Transformation" },
];

const SemiFramelessShowerDoors = () => {
  const faqs = [
    {
      question: "What's the difference between semi‑frameless and fully framed doors?",
      answer: "Semi‑frameless doors use minimal metal framing around the glass with strategic support points, offering a balance between the clean look of frameless and the structural support of fully framed systems."
    },
    {
      question: "Do framed doors seal better than frameless?",
      answer: "Both can seal excellently when properly installed. Framed doors use the metal framework to create consistent seal points, while frameless doors rely on precision fit and quality seals."
    },
    {
      question: "Which frame finish options are available?",
      answer: "We offer matte black, polished chrome, brushed nickel, and brass finishes to match your bathroom fixtures and design preferences."
    },
    {
      question: "Can you install on tubs as well as showers?",
      answer: "Yes! We install semi‑frameless and framed systems on both shower-only installations and tub/shower combinations with proper sealing for each application."
    },
    {
      question: "Are patterned or frosted glass options available?",
      answer: "Absolutely! We offer clear, frosted, rain, and various patterned glass options to provide privacy or decorative elements while maintaining the structural benefits of framed systems."
    },
    {
      question: "How do you keep frames and seals looking clean over time?",
      answer: "Regular cleaning with mild soap, avoiding abrasive cleaners on metal finishes, and occasional seal inspection help maintain the appearance and function of framed systems."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-primary to-charcoal text-white">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/7d880084-fd2a-4d13-9b02-6bc5661be634.png" 
            alt="Semi-frameless glass shower doors on bathtub with marble tile and black hardware - professional installation Las Vegas"
            className="w-full h-full object-cover opacity-75"
            width="1920"
            height="1080"
            fetchpriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                North Las Vegas Semi‑Frameless & 
                <span className="block bg-gradient-to-r from-white via-chrome-light to-white bg-clip-text text-transparent animate-glow drop-shadow-2xl">
                  Framed Doors
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up text-left md:text-center lg:text-left lg:ml-16" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-white/95 mb-6 max-w-2xl leading-relaxed font-light drop-shadow-lg">
                Balanced style and support—clean lines with added structure for dependable performance.
              </p>
            </div>

            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 text-left md:justify-center lg:justify-start lg:ml-16" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#gallery" className="flex items-center gap-2">
                  <Images className="h-5 w-5" />
                  View Gallery
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Semi‑frameless and framed shower doors offer a polished, sturdy look with strategic metal support. At Baja Glass, we measure, fabricate, and install units built for everyday reliability—clean edges, true alignment, and well‑sealed closures for a refined finish.
            </p>
            <p className="text-center text-muted-foreground">
              Explore <Link to="/blog/frameless-vs-semi-frameless-shower-doors" className="text-primary underline hover:text-primary/80">comparing frameless and semi-frameless options</Link> or check our <Link to="/blog/shower-door-installation-cost-las-vegas" className="text-primary underline hover:text-primary/80">complete pricing guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Semi‑Frameless & Framed Design Options</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4">Door Types</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Inline, corner, neo‑angle, alcove, tub/shower combos</li>
                <li>• Single and bypass sliding configurations</li>
                <li>• Hinged and pivot door systems</li>
                <li>• Panel and door combinations</li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-4">Frame Profiles</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Slim semi‑frameless trims for modern look</li>
                <li>• Full perimeter frames for traditional style</li>
                <li>• Structural support where needed</li>
                <li>• Clean edge transitions and reveals</li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4">Glass Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Clear or low‑iron (ultra‑clear) glass</li>
                <li>• Frosted and patterned options available</li>
                <li>• 3/8" standard thickness for most applications</li>
                <li>• Custom sizing for any opening</li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-4">Hardware Finishes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Matte black for contemporary appeal</li>
                <li>• Polished chrome for classic elegance</li>
                <li>• Brushed nickel for warm tones</li>
                <li>• Brass accents for luxury applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">Built for Everyday Use</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We focus on precise measurement, square alignment, and clean sealing so doors operate smoothly and look cohesive with your tile and fixtures. From threshold placement to hinge and roller setup, details are dialed in for reliable performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-red-accent to-charcoal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Even Reveals</h3>
              <p className="text-sm text-muted-foreground">Consistent frame alignment and spacing</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-accent to-charcoal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Quality Seals</h3>
              <p className="text-sm text-muted-foreground">Proper seals, sweeps, and clean silicone lines</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-accent to-charcoal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Secure Anchoring</h3>
              <p className="text-sm text-muted-foreground">Robust mounting and smooth door operation</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Semi-Frameless Gallery */}
      <ProductGallery
        title="Semi-Frameless & Framed Door Gallery"
        description="View our semi-frameless and framed door installations showcasing balanced design, strategic support, and quality craftsmanship."
        images={semiFramelessGalleryImages}
      />

      {/* Local Service */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Installed by Local Experts</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Proudly serving North Las Vegas and the entire Las Vegas Valley with semi-frameless and framed shower door installation. Expect clean, careful work and clear communication from our experienced team.
          </p>
          <div className="bg-background p-6 rounded-lg inline-block shadow-lg">
            <div className="flex items-center gap-3 justify-center mb-4">
              <img 
                src="/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" 
                alt="Baja Glass — Shower Doors & Glass in Las Vegas"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* Popular in Las Vegas Valley */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Trusted Throughout the Valley</h3>
            <p className="text-muted-foreground mb-6">
              Our semi-frameless and framed shower door installations are trusted in{" "}
              <Link to="/shower-doors-enterprise-nv" className="text-primary font-semibold hover:underline">
                Enterprise
              </Link>
              ,{" "}
              <Link to="/shower-doors-spring-valley-nv" className="text-primary font-semibold hover:underline">
                Spring Valley
              </Link>
              , and throughout North Las Vegas. Quality installations for all budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore More Door Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Frameless Doors</CardTitle>
                <CardDescription>Minimalist elegance with thick tempered glass</CardDescription>
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
                <CardTitle className="text-lg">Hinged Doors</CardTitle>
                <CardDescription>Classic swing doors with precise alignment</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/hinged" onClick={() => window.scrollTo(0, 0)}>
                    View Hinged
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Steam Enclosures</CardTitle>
                <CardDescription>Sealed systems for spa-like experience</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/shower-doors-las-vegas/steam-enclosures" onClick={() => window.scrollTo(0, 0)}>
                    View Steam
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">Semi‑Frameless & Framed Door FAQs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-accent to-charcoal mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="bg-secondary/50 p-6 rounded-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready for a Sturdy, Polished Shower Door?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Experience the reliability and style of expertly installed semi‑frameless and framed doors.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: (702) 383-0779
              </a>
            </Button>
          </div>
        </div>
      </section>
      {/* Comparison table — a real <table> so the options are extractable by
          screen readers, rich results and AI answer engines, not just visually. */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Semi-Frameless vs Framed: What Changes</h2>
          <ComparisonTable
            caption="Semi-frameless and framed shower door options from Baja Glass & Mirror in Las Vegas, compared on cost, cleaning and appearance."
            columns={["Option", "Typical cost in Las Vegas", "Cleaning", "Where it fits best"]}
            rows={[["Semi-frameless", "$800 - $1,400", "Fewer tracks to trap hard-water residue", "Main baths wanting a frameless look for less"], ["Framed", "$400 - $800", "More track and seal to wipe down", "Guest baths, rentals, tub-to-shower conversions"], ["Frameless (for reference)", "$1,200 - $2,800", "Least framing, easiest to squeegee", "Master baths where budget allows"]]}
            footnote="Las Vegas price ranges from our own installation cost guide. Final pricing depends on opening size, glass thickness and hardware finish \u2014 we confirm it at the free in-home measure."
          />
        </div>
      </section>

      <ServiceAreasBlock />
    </div>
  );
};

export default SemiFramelessShowerDoors;