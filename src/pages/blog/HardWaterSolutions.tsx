import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Droplets, Phone, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const HardWaterSolutions = () => {
  const solutions = [
    {
      solution: "Daily Squeegee",
      effectiveness: "80% reduction in buildup",
      cost: "$10-20",
      effort: "30 seconds after each shower"
    },
    {
      solution: "Hydrophobic Coating",
      effectiveness: "60-70% reduction in spotting",
      cost: "$150-300",
      effort: "Professional application, lasts 2-3 years"
    },
    {
      solution: "Water Softener System",
      effectiveness: "90% reduction at source",
      cost: "$1,000-3,000",
      effort: "Whole-house solution, minimal maintenance"
    },
    {
      solution: "Weekly Vinegar Treatment",
      effectiveness: "Removes existing deposits",
      cost: "$5",
      effort: "15 minutes weekly"
    }
  ];

  const faqs = [
    {
      question: "How hard is Las Vegas water compared to other cities?",
      answer: "Las Vegas water is extremely hard, measuring 278-295 parts per million (ppm) of dissolved minerals. This is among the hardest in the nation. Cities like Seattle have 30-50 ppm, while Phoenix has 200-250 ppm. Our water comes from Lake Mead and contains high levels of calcium and magnesium."
    },
    {
      question: "Will a water softener really help my shower glass?",
      answer: "Yes, dramatically. Whole-house water softeners remove 80-90% of hardness-causing minerals before water reaches your shower. This significantly reduces spotting and makes cleaning easier. However, softeners require salt refills and ongoing maintenance."
    },
    {
      question: "Is hydrophobic coating worth the cost?",
      answer: "For most Las Vegas homeowners, yes. A $150-300 coating lasts 2-3 years and reduces daily cleaning effort significantly. It's especially valuable on frameless doors where water spots are more visible. The time saved on cleaning typically justifies the investment."
    },
    {
      question: "Can hard water damage my shower glass permanently?",
      answer: "Yes, if left untreated. Severe mineral buildup can etch glass surfaces, creating permanent cloudiness that cannot be removed. This typically takes months or years of neglect. Regular maintenance prevents permanent damage."
    },
    {
      question: "Does Henderson have better water quality than Las Vegas?",
      answer: "Not significantly. Both draw from the same Lake Mead source. Some Henderson neighborhoods have slightly different treatment, but hardness levels are comparable throughout the valley. All areas benefit from the same prevention strategies."
    },
    {
      question: "What's the best cleaning solution for hard water stains?",
      answer: "White vinegar is most effective and economical. For severe buildup, create a paste with baking soda and vinegar. Commercial cleaners like CLR work well but are harsher. Always test in small areas first and rinse thoroughly to avoid damaging seals."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Las Vegas Hard Water & Shower Glass | Solutions Guide</title>
        <meta name="description" content="Protect your Las Vegas shower glass from hard water damage. Learn about water softeners, protective coatings, cleaning solutions, and maintenance tips." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://bajaglass.com/blog/las-vegas-water-quality-shower-glass-hard-water-solutions" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Las Vegas Water Quality & Your Shower Glass: Hard Water Solutions",
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
              "@id": "https://bajaglass.com/blog/las-vegas-water-quality-shower-glass-hard-water-solutions"
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
            <Droplets className="h-16 w-16 mx-auto mb-4 text-white/80" />
            <Badge className="mb-4 bg-white/20 text-white">Las Vegas Water Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your Shower Glass from Hard Water
            </h1>
            <p className="text-xl text-white/90">
              Solutions and prevention strategies for Las Vegas's extremely hard water
            </p>
          </div>
        </div>
      </section>

      {/* Water Quality Data */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding Las Vegas Water Hardness</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">278-295</div>
                    <p className="text-sm text-muted-foreground">PPM Hardness</p>
                    <p className="text-xs text-muted-foreground mt-1">Parts per million</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">16-17</div>
                    <p className="text-sm text-muted-foreground">Grains per Gallon</p>
                    <p className="text-xs text-muted-foreground mt-1">Extremely hard water</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">Lake Mead</div>
                    <p className="text-sm text-muted-foreground">Primary Source</p>
                    <p className="text-xs text-muted-foreground mt-1">Colorado River water</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <p className="text-muted-foreground leading-relaxed">
              Las Vegas water contains high concentrations of calcium carbonate, magnesium, and other dissolved minerals. 
              When water evaporates on your shower glass, these minerals remain as white, chalky deposits. Over time, 
              buildup becomes difficult to remove and can permanently etch glass surfaces. The severity of Las Vegas hard 
              water makes prevention essential for maintaining clear, beautiful shower doors.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Comparison */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hard Water Solutions Compared</h2>
            <div className="space-y-4">
              {solutions.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <CardTitle className="text-xl">{item.solution}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{item.effort}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">{item.effectiveness}</Badge>
                        <p className="text-sm text-muted-foreground">Cost: {item.cost}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Prevention Strategies</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-accent" />
                    Hydrophobic Glass Coating
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Professional hydrophobic coatings create an invisible barrier that causes water to bead and roll off glass 
                    instead of sitting and evaporating. This dramatically reduces mineral deposits.
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Application takes 1-2 hours by professionals</li>
                    <li>• Lasts 2-3 years with proper care</li>
                    <li>• Costs $150-300 for standard shower</li>
                    <li>• Reduces cleaning frequency by 50-70%</li>
                    <li>• Can be reapplied as needed</li>
                    <li>• Works best when applied to new, clean glass</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Daily Squeegee Routine</h3>
                  <p className="text-muted-foreground mb-4">
                    The single most effective preventive measure costs less than $20. Using a squeegee after every shower 
                    removes 80%+ of water before minerals can deposit.
                  </p>
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Proper Squeegee Technique:</h4>
                    <ol className="space-y-2 text-muted-foreground list-decimal ml-6">
                      <li>Start at the top of the door</li>
                      <li>Use overlapping strokes working downward</li>
                      <li>Wipe blade clean after each pass</li>
                      <li>Don't forget door edges and bottom track</li>
                      <li>Takes only 30-45 seconds total</li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Water Softener Systems</h3>
                  <p className="text-muted-foreground mb-4">
                    Whole-house water softeners address hard water at the source, benefiting all fixtures, appliances, 
                    and plumbing throughout your home.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 90% reduction in mineral deposits</li>
                          <li>• Softer skin and hair</li>
                          <li>• Extended appliance life</li>
                          <li>• Reduced soap and detergent usage</li>
                          <li>• Better water heater efficiency</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Considerations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Initial cost: $1,000-3,000</li>
                          <li>• Requires salt refills ($5-10/month)</li>
                          <li>• Adds sodium to water</li>
                          <li>• Needs periodic maintenance</li>
                          <li>• Space required for tank</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Cleaning Existing Buildup</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>White Vinegar Method (Best for Regular Maintenance)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-muted-foreground list-decimal ml-6">
                      <li>Mix equal parts white vinegar and warm water in spray bottle</li>
                      <li>Spray generously on glass, ensuring complete coverage</li>
                      <li>Let sit for 10-15 minutes (longer for heavy buildup)</li>
                      <li>Scrub with non-abrasive pad or microfiber cloth</li>
                      <li>Rinse thoroughly with clean water</li>
                      <li>Squeegee dry to prevent new spots</li>
                    </ol>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Tip:</strong> For stubborn stains, heat vinegar slightly (not boiling) before application.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Baking Soda Paste (For Tough Deposits)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-muted-foreground list-decimal ml-6">
                      <li>Mix baking soda with small amount of water to form paste</li>
                      <li>Apply paste to problem areas</li>
                      <li>Let sit for 15 minutes</li>
                      <li>Spray with vinegar (it will foam - this is normal)</li>
                      <li>Scrub gently with soft cloth</li>
                      <li>Rinse thoroughly and squeegee</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Commercial Cleaners (Use Sparingly)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Products like CLR, Lime-Away, or Bar Keepers Friend can remove severe buildup but use caution:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li>• Test in inconspicuous area first</li>
                      <li>• Follow manufacturer directions exactly</li>
                      <li>• Avoid contact with metal hardware and seals</li>
                      <li>• Rinse extremely thoroughly</li>
                      <li>• Use in well-ventilated area</li>
                      <li>• Consider these a last resort option</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Specific Tips */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Las Vegas Area-Specific Considerations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Henderson & Green Valley</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <Link to="/shower-doors-henderson-nv" className="text-primary font-semibold hover:underline">
                      Henderson
                    </Link>{" "}
                    draws from the same Lake Mead source as Las Vegas. Some neighborhoods have slightly different 
                    treatment facilities, but hardness levels remain very high (270-290 ppm). Our{" "}
                    <Link to="/shower-doors-las-vegas/repair" className="text-primary font-semibold hover:underline">
                      shower seal Henderson
                    </Link>{" "}
                    replacement service helps address hard water damage quickly. All prevention strategies apply equally.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Summerlin & Northwest</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Summerlin water quality is comparable to rest of valley. Luxury homes in The Ridges and Red Rock often 
                    have whole-house softeners as standard. If your home doesn't, consider adding one to protect premium finishes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
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
                  <CardTitle className="text-base">Glass Care Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link to="/blog/glass-care-guide">Read More →</Link>
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
          <h2 className="text-3xl font-bold mb-6">Install Shower Glass with Protective Coating</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Ask about our hydrophobic coating option during installation to make maintenance easier from day one.
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
    </div>
  );
};

export default HardWaterSolutions;
