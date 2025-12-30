import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, X, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FramelessVsSemiFrameless = () => {
  const comparison = [
    {
      feature: "Aesthetic",
      frameless: "Clean, modern, seamless glass look",
      semiFrameless: "Balanced design with minimal framing",
      framed: "Traditional look with visible metal frame"
    },
    {
      feature: "Glass Thickness",
      frameless: "3/8\" or 1/2\" thick tempered glass",
      semiFrameless: "3/8\" tempered glass typically",
      framed: "1/4\" glass with frame support"
    },
    {
      feature: "Price Range",
      frameless: "$1,200 - $2,800",
      semiFrameless: "$800 - $1,400",
      framed: "$400 - $800"
    },
    {
      feature: "Maintenance",
      frameless: "Easy to clean, no frame to collect buildup",
      semiFrameless: "Moderate - some metal channels",
      framed: "More challenging - metal tracks collect water"
    },
    {
      feature: "Durability",
      frameless: "Excellent - thick glass, quality hardware",
      semiFrameless: "Very good with proper maintenance",
      framed: "Good, but tracks can wear over time"
    },
    {
      feature: "Water Containment",
      frameless: "Excellent with proper seals",
      semiFrameless: "Very good",
      framed: "Good - metal frame aids sealing"
    }
  ];

  const faqs = [
    {
      question: "Which type of shower door is best for Las Vegas homes?",
      answer: "Frameless doors are most popular in Las Vegas due to their modern aesthetic and easy maintenance. In our hard water environment, having fewer metal channels means less mineral buildup. However, semi-frameless offers great value for secondary bathrooms."
    },
    {
      question: "Are frameless shower doors worth the extra cost?",
      answer: "For master bathrooms, absolutely. Frameless doors increase home value, are easier to clean, and provide a luxury spa-like feel. They typically last 20+ years with minimal maintenance. For guest baths, semi-frameless may be more economical."
    },
    {
      question: "Will a frameless door leak more than a framed door?",
      answer: "No. When properly installed with quality seals, frameless doors contain water just as effectively as framed doors. The key is professional installation with precise measurements and appropriate sealing."
    },
    {
      question: "Can I install a frameless door on any shower?",
      answer: "Most showers can accommodate frameless doors. However, significantly out-of-plumb walls may require correction first. Our measurement process identifies any potential issues before installation."
    },
    {
      question: "How do I clean each type of shower door?",
      answer: "Frameless: Squeegee after each use, weekly cleaning with mild soap. Semi-frameless: Same as frameless plus attention to metal channels. Framed: Regular cleaning of metal tracks is essential to prevent buildup."
    },
    {
      question: "Which is better for resale value in Henderson and Summerlin?",
      answer: "Frameless doors add more to resale value, especially in upscale areas like Summerlin's The Ridges or Henderson's Seven Hills. Buyers in luxury markets expect frameless in master bathrooms."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Frameless vs Semi-Frameless vs Framed Shower Doors: Which is Best?",
            "author": {
              "@type": "Organization",
              "name": "Baja Glass"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Baja Glass",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png"
              }
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bajaglass.com/blog/frameless-vs-semi-frameless-shower-doors"
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
      <section className="py-20 bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white">Comparison Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frameless vs Semi-Frameless vs Framed Shower Doors
            </h1>
            <p className="text-xl text-white/90">
              Which type is best for your Las Vegas home? Complete comparison of styles, costs, and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-4 text-left border">Feature</th>
                    <th className="p-4 text-left border">Frameless</th>
                    <th className="p-4 text-left border">Semi-Frameless</th>
                    <th className="p-4 text-left border">Framed</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                      <td className="p-4 border font-semibold">{item.feature}</td>
                      <td className="p-4 border">{item.frameless}</td>
                      <td className="p-4 border">{item.semiFrameless}</td>
                      <td className="p-4 border">{item.framed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Frameless Shower Doors</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      Pros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Sleek, modern aesthetic that never goes out of style</li>
                      <li>• Makes bathrooms appear larger and more open</li>
                      <li>• Easier to clean - no metal frames to trap water/soap</li>
                      <li>• Increases home value, especially in luxury markets</li>
                      <li>• Durable 3/8\" or 1/2\" tempered glass</li>
                      <li>• Minimal hardware for contemporary look</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <X className="h-5 w-5 text-red-500" />
                      Cons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Higher upfront cost ($1,200-$2,800)</li>
                      <li>• Requires precise installation</li>
                      <li>• Water spots more visible on clear glass</li>
                      <li>• May require walls to be relatively plumb</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                <strong>Best for:</strong> Master bathrooms, luxury homes in Summerlin and Henderson, homeowners who value modern design and easy maintenance.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Semi-Frameless Shower Doors</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      Pros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Great balance of style and affordability</li>
                      <li>• More forgiving installation process</li>
                      <li>• Cleaner look than fully framed</li>
                      <li>• Good water containment</li>
                      <li>• Moderate price point ($800-$1,400)</li>
                      <li>• Suitable for most bathroom styles</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <X className="h-5 w-5 text-red-500" />
                      Cons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Some metal channels can collect buildup</li>
                      <li>• Not as open-looking as frameless</li>
                      <li>• Slightly more maintenance than frameless</li>
                      <li>• Middle-ground option without extremes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                <strong>Best for:</strong> Secondary bathrooms, homeowners seeking value, transitional design styles, budget-conscious remodels.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Framed Shower Doors</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      Pros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Most affordable option ($400-$800)</li>
                      <li>• Very sturdy metal frame structure</li>
                      <li>• Wide variety of colors and finishes</li>
                      <li>• Can accommodate less-than-perfect walls</li>
                      <li>• Traditional, familiar design</li>
                      <li>• Readily available parts for repairs</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <X className="h-5 w-5 text-red-500" />
                      Cons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Dated appearance in modern homes</li>
                      <li>• Metal tracks collect soap scum and minerals</li>
                      <li>• More time-consuming to clean</li>
                      <li>• Can make bathroom feel smaller</li>
                      <li>• Rollers and tracks wear over time</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                <strong>Best for:</strong> Rental properties, budget-conscious projects, older home styles, utility bathrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Specific Considerations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Las Vegas-Specific Considerations</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hard Water Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Las Vegas has very hard water with high mineral content. This affects each door type differently:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Frameless:</strong> Easiest to maintain - daily squeegee prevents most buildup</li>
                    <li>• <strong>Semi-Frameless:</strong> Metal channels require regular cleaning to prevent mineral deposits</li>
                    <li>• <strong>Framed:</strong> Tracks accumulate minerals quickly, requiring frequent deep cleaning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Climate Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our desert climate means less humidity-related issues compared to coastal areas. However, proper ventilation 
                    remains important. Frameless doors with quality seals perform excellently in dry climates and are less prone 
                    to mold issues that affect metal frames in humid environments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Home Style Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Summerlin, Henderson, and newer Las Vegas developments favor contemporary and transitional designs. Frameless 
                    doors are the clear preference in luxury markets. Semi-frameless works well in mid-range homes, while framed 
                    doors are becoming rare except in budget builds or older properties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Shower Door Cost Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link to="/blog/shower-door-installation-cost-las-vegas">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Hard Water Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link to="/blog/las-vegas-water-quality-shower-glass-hard-water-solutions">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Installation Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link to="/blog/installation-process">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Choose Your Perfect Shower Door?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Get expert advice on which type is best for your Las Vegas home. Free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Consultation</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: (702) 383-0779
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Service Links */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Explore Your Options</h3>
            <p className="text-muted-foreground mb-6">
              Learn more about our{" "}
              <Link to="/shower-doors-las-vegas/frameless" className="text-primary font-semibold hover:underline">
                frameless shower doors
              </Link>
              {" "}and{" "}
              <Link to="/shower-doors-las-vegas/semi-frameless-framed" className="text-primary font-semibold hover:underline">
                semi-frameless options
              </Link>
              . We serve{" "}
              <Link to="/shower-doors-henderson-nv" className="text-primary font-semibold hover:underline">
                Henderson
              </Link>
              ,{" "}
              <Link to="/shower-doors-summerlin-nv" className="text-primary font-semibold hover:underline">
                Summerlin
              </Link>
              , and the entire Las Vegas Valley.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FramelessVsSemiFrameless;
