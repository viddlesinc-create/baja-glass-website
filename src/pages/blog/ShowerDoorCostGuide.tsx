import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { DollarSign, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ShowerDoorCostGuide = () => {
  const costBreakdown = [
    { type: "Framed Shower Door", range: "$400 - $800", description: "Budget-friendly option with full metal framing" },
    { type: "Semi-Frameless Door", range: "$800 - $1,400", description: "Balanced design with selective framing" },
    { type: "Frameless Shower Door (3/8\")", range: "$1,200 - $2,000", description: "Modern look with standard thickness glass" },
    { type: "Frameless Shower Door (1/2\")", range: "$1,600 - $2,800", description: "Premium option with thicker glass" },
    { type: "Custom Enclosure", range: "$2,000 - $4,500+", description: "Neo-angle, corner, or complex configurations" },
    { type: "Steam Shower Enclosure", range: "$3,000 - $6,000+", description: "Fully sealed with ceiling panel" }
  ];

  const costFactors = [
    { factor: "Glass Thickness", impact: "3/8\" is standard; 1/2\" adds $400-$800" },
    { factor: "Glass Type", impact: "Low-iron glass adds $200-$500 for ultra-clarity" },
    { factor: "Hardware Finish", impact: "Chrome is standard; specialty finishes add $100-$300" },
    { factor: "Door Configuration", impact: "Sliding, hinged, or inline affects complexity and cost" },
    { factor: "Protective Coatings", impact: "Hydrophobic coating adds $150-$300" },
    { factor: "Installation Complexity", impact: "Out-of-plumb walls or custom angles increase labor" }
  ];

  const faqs = [
    {
      question: "What is the average cost of a frameless shower door in Las Vegas?",
      answer: "In Las Vegas, frameless shower doors typically range from $1,200 to $2,800 depending on glass thickness, size, and hardware finish. The average installation with 3/8\" glass costs around $1,500-$1,800."
    },
    {
      question: "Is 1/2\" glass worth the extra cost?",
      answer: "1/2\" glass offers superior rigidity and a luxury feel. It's especially recommended for doors over 36\" wide or if you want maximum durability. The upgrade typically costs $400-$800 more than 3/8\" glass."
    },
    {
      question: "Do shower door prices vary between Henderson and Summerlin?",
      answer: "Prices are generally consistent throughout the Las Vegas Valley. Travel to remote areas may incur minimal service fees, but standard installations in Henderson, Summerlin, and Las Vegas proper are priced the same."
    },
    {
      question: "What hidden costs should I watch for?",
      answer: "Reputable installers include everything in quotes. Be wary of companies that charge separately for measurements, hardware, seals, or 'disposal fees.' Get itemized written quotes before proceeding."
    },
    {
      question: "Do you offer financing for shower door installation?",
      answer: "Many Las Vegas shower door companies, including Baja Glass, offer flexible payment options. Contact us to discuss financing plans that fit your budget and timeline."
    },
    {
      question: "How can I get the best value on my shower door?",
      answer: "Focus on quality materials and experienced installers rather than lowest price. A properly installed door with quality hardware lasts 15-20 years, while cheap installations may need repairs or replacement within 5 years."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* BlogPosting Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Shower Door Installation Cost in Las Vegas 2026 - Complete Pricing Guide",
            "description": "Comprehensive guide to shower door installation costs in Las Vegas including frameless, semi-frameless, and custom enclosure pricing.",
            "author": {
              "@type": "Person",
              "name": "Baja Glass Team",
              "worksFor": {
                "@type": "Organization",
                "name": "Baja Glass & Mirror LLC"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Baja Glass & Mirror LLC",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png"
              }
            },
            "datePublished": "2025-01-15",
            "dateModified": "2026-01-10",
            "image": "https://bajaglass.com/og-image.jpg",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bajaglass.com/blog/shower-door-installation-cost-las-vegas"
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

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white">Complete Pricing Guide 2026</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              2026 Guide: Shower Door Installation Cost in Las Vegas
            </h1>
            <p className="text-xl text-white/90">
              Complete breakdown of shower door costs in Las Vegas including frameless, semi-frameless, and custom enclosure pricing
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              If you're planning a shower door installation in Las Vegas, understanding costs upfront helps you budget accurately 
              and avoid surprises. Shower door prices vary significantly based on type, materials, and complexity. This comprehensive 
              guide breaks down what you'll pay for different options in the Las Vegas Valley, including Henderson, Summerlin, and 
              Paradise areas.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Cost to Install Shower Door - Complete Breakdown</h2>
            <p className="text-center text-muted-foreground mb-8">Average <strong>shower door installation cost</strong> in Las Vegas by type:</p>
            <div className="space-y-4">
              {costBreakdown.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle className="text-xl">{item.type}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {item.range}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              *Prices include materials, hardware, and professional installation. Actual costs may vary based on specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What Affects Frameless Shower Door Cost?</h2>
            <p className="text-muted-foreground mb-8">Understanding what impacts your <strong>frameless shower door cost</strong> helps you budget accurately:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {costFactors.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-accent" />
                      {item.factor}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Complete Cost Breakdown</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Glass Thickness Comparison</h3>
                <p className="text-muted-foreground mb-4">
                  Glass thickness significantly impacts both price and perceived quality. Here's what you need to know:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>3/8" Glass:</strong> Industry standard thickness, provides excellent strength for most applications. 
                    Perfect balance of durability and cost. Suitable for doors up to 42" wide.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>1/2" Glass:</strong> Premium thickness with superior rigidity and luxurious feel. Recommended for 
                    doors over 36" wide or when you want maximum quality. Less prone to flex and provides enhanced sound dampening.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Hardware Finish Options</h3>
                <p className="text-muted-foreground mb-4">
                  Hardware finish affects both aesthetics and maintenance requirements:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Polished Chrome:</strong> Standard finish, bright and reflective. No additional cost. Easy to clean and timeless.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Brushed Nickel:</strong> Popular upgrade (+$100-$150). Soft metallic warmth that hides fingerprints well.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Matte Black:</strong> Modern, versatile finish (+$150-$250). Pairs beautifully with contemporary designs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Brass/Gold:</strong> Luxury accent (+$200-$300). Available in polished or brushed finishes.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Henderson vs Summerlin Pricing</h3>
                <p className="text-muted-foreground mb-4">
                  Installation costs are consistent throughout the Las Vegas Valley. Whether you're in Henderson's Green Valley, 
                  Summerlin's The Ridges, or Paradise, you'll receive the same competitive pricing. Some companies charge travel 
                  fees for remote areas like Boulder City, but most established installers include service throughout metro Las Vegas.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Budget vs Premium: What's the Difference?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Budget Option ($800-$1,200)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Semi-frameless or framed design</li>
                        <li>• 3/8" standard clear glass</li>
                        <li>• Polished chrome hardware</li>
                        <li>• Standard door configurations</li>
                        <li>• Good for secondary bathrooms</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Premium Option ($2,000-$3,500)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Fully frameless design</li>
                        <li>• 1/2" low-iron glass for clarity</li>
                        <li>• Custom hardware finish</li>
                        <li>• Hydrophobic protective coating</li>
                        <li>• Perfect for master bathrooms</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
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

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Free Quote?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Get accurate pricing for your specific project. We provide detailed, itemized quotes with no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Quote</Link>
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

      {/* Ready for Accurate Quote - Location & Service Links */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for an Accurate Quote?</h3>
            <p className="text-muted-foreground mb-6">
              Pricing varies by location, glass type, and configuration. Get a precise estimate for your project in{" "}
              <Link to="/shower-doors-henderson-nv" className="text-primary font-semibold hover:underline">
                Henderson
              </Link>
              ,{" "}
              <Link to="/shower-doors-summerlin-nv" className="text-primary font-semibold hover:underline">
                Summerlin
              </Link>
              , or another Las Vegas Valley location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/shower-doors-las-vegas/frameless" onClick={() => window.scrollTo(0, 0)}>
                  Frameless Door Options
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/shower-doors-las-vegas/custom-enclosures" onClick={() => window.scrollTo(0, 0)}>
                  Custom Enclosure Quote
                </Link>
              </Button>
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
                  <CardTitle className="text-base">Frameless vs Semi-Frameless</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link to="/blog/frameless-vs-semi-frameless-shower-doors">Read More →</Link>
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
    </div>
  );
};

export default ShowerDoorCostGuide;
