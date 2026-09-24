import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, HelpCircle, Wrench, Shield, Square, DoorOpen } from "lucide-react";
const clearGlass = "/images/clear-glass.jpg";
const lowIronGlass = "/images/low-iron-glass.jpg";
const frostedGlass = "/images/frosted-glass.jpg";
const rainGlass = "/images/rain-glass.jpg";
import { Helmet } from "react-helmet-async";

const Resources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Glass Care Guide",
      description: "Learn how to maintain your shower glass for lasting clarity and beauty.",
      topics: ["Daily cleaning tips", "Water spot prevention", "Protective coatings", "Long-term maintenance"]
    },
    {
      icon: HelpCircle,
      title: "Choosing the Right Door",
      description: "A comprehensive guide to selecting the perfect shower door for your space.",
      topics: ["Frameless vs. framed", "Glass thickness options", "Hardware finishes", "Space considerations"]
    },
    {
      icon: Wrench,
      title: "Installation Process",
      description: "What to expect during your shower door installation project.",
      topics: ["Preparation steps", "Installation timeline", "Safety procedures", "Final inspection"]
    },
    {
      icon: Shield,
      title: "Warranty Information",
      description: "Understanding your coverage and how to maintain your warranty.",
      topics: ["Warranty terms", "What's covered", "Maintenance requirements", "Service requests"]
    }
  ];

  const faqs = [
    {
      question: "How thick should my shower glass be?",
      answer: "3/8\" glass is standard and provides excellent strength for most applications. 1/2\" glass offers added rigidity and a premium feel, especially for larger panels or when you want maximum durability."
    },
    {
      question: "What's the difference between clear and low-iron glass?",
      answer: "Clear glass has a slight green tint visible on the edges. Low-iron glass eliminates this tint for ultra-clear, premium appearance that many homeowners prefer for a luxury look."
    },
    {
      question: "How do I prevent water spots on my shower glass?",
      answer: "Daily squeegee use, proper ventilation, and optional hydrophobic coatings all help reduce water spots. We provide detailed care instructions with every installation."
    },
    {
      question: "Can you install a shower door on any shower opening?",
      answer: "We can accommodate most openings, including out-of-plumb walls, unusual dimensions, and custom configurations. Our measurement process ensures a perfect fit."
    },
    {
      question: "How long does installation typically take?",
      answer: "Most installations are completed in a single day. Complex custom enclosures may require additional time, which we'll discuss during your consultation."
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide comprehensive warranty coverage on both materials and workmanship. Specific terms vary by product and will be clearly explained before installation."
    },
    // Call Tracking FAQ Section
    {
      question: "Why do I sometimes see a different phone number after clicking a Google ad?",
      answer: "Google may display a temporary tracking number that forwards directly to our main business line at (702) 383-0779. This helps us measure which ads lead to calls so we can better serve customers. It does not change how your call is handled or what you pay."
    },
    {
      question: "Is my call still going to Baja Glass if I see a different number?",
      answer: "Yes — all tracking numbers forward directly to the same Baja Glass team. The number is only different for measurement purposes and your call experience is identical. You'll reach the same friendly staff who will help with your shower door needs."
    },
    {
      question: "Will my phone number ever be sold or used for spam?",
      answer: "Never. Call tracking is used purely for analytics to understand our marketing performance. Baja Glass does not sell phone numbers or use them for spam or unsolicited contact. Your privacy is important to us."
    }
  ];

  const glassTypes = [
    {
      name: "Clear Glass",
      description: "Standard tempered safety glass with slight green tint on edges",
      bestFor: "Budget-conscious projects, traditional installations",
      image: clearGlass
    },
    {
      name: "Low-Iron Glass",
      description: "Ultra-clear glass with minimal tint for premium appearance",
      bestFor: "Luxury installations, maximum clarity preference",
      image: lowIronGlass
    },
    {
      name: "Frosted Glass",
      description: "Etched surface provides privacy while maintaining light transmission",
      bestFor: "Privacy needs, decorative applications",
      image: frostedGlass
    },
    {
      name: "Rain Glass",
      description: "Textured surface creates water-like pattern for visual interest",
      bestFor: "Decorative accent, partial privacy",
      image: rainGlass
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://bajaglass.com/resources" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/resources" />
        <meta property="og:image" content="https://bajaglass.com/images/completed-steam-shower-enclosure-3.webp" />
        <meta property="og:site_name" content="Baja Glass & Mirror LLC" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://bajaglass.com/images/completed-steam-shower-enclosure-3.webp" />
        
        {/* FAQ Schema */}
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
      <section className="relative py-20 bg-gradient-to-r from-charcoal to-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/completed-steam-shower-enclosure-3.webp')`
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h1 className="text-5xl font-bold mb-6">Resources & Guides</h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Everything you need to know about shower doors, glass options, and maintaining your investment.
          </p>
          <Button variant="glass" size="lg" asChild>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Expert Advice</Link>
          </Button>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Articles</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Expert guides and helpful tips for shower door selection, installation, and maintenance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Shower Door Cost Guide 2025",
                description: "Complete pricing breakdown for frameless, semi-frameless, and custom shower doors in Las Vegas. Get accurate estimates for your project.",
                href: "/blog/shower-door-installation-cost-las-vegas",
                category: "Pricing"
              },
              {
                title: "Frameless vs Semi-Frameless Comparison",
                description: "Detailed comparison of all shower door types with pros, cons, and recommendations for Las Vegas homes.",
                href: "/blog/frameless-vs-semi-frameless-shower-doors",
                category: "Comparison"
              },
              {
                title: "Hard Water Solutions for Las Vegas",
                description: "Protect your shower glass from hard water damage. Prevention strategies and cleaning solutions specific to Las Vegas water quality.",
                href: "/blog/las-vegas-water-quality-shower-glass-hard-water-solutions",
                category: "Maintenance"
              }
            ].map((article) => (
              <Card key={article.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{article.category}</Badge>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{article.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={article.href} onClick={() => window.scrollTo(0, 0)}>
                      Read Article →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Helpful Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => {
              const blogUrls = [
                "/blog/glass-care-guide",
                "/blog/choosing-right-door", 
                "/blog/installation-process",
                "/blog/warranty-information"
              ];
              return (
                <Card key={resource.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <resource.icon className="h-8 w-8 text-accent" />
                      <CardTitle>{resource.title}</CardTitle>
                    </div>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Topics covered:</p>
                        <ul className="space-y-1">
                          {resource.topics.map((topic) => (
                            <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 bg-accent rounded-full"></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link 
                          to={blogUrls[index]}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Read Full Guide
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glass Types Guide */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Glass Types Explained</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {glassTypes.map((glass) => (
              <div key={glass.name} className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={glass.image} 
                    alt={`${glass.name} shower door panel`}
                    className="w-full h-48 object-cover"
                    width="400"
                    height="192"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{glass.name}</h3>
                <p className="text-muted-foreground mb-4">{glass.description}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Best For:</Badge>
                  <span className="text-sm text-muted-foreground">{glass.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Finishes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hardware Finish Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Matte Black</h3>
              <p className="text-sm text-muted-foreground">Modern and versatile; pairs beautifully with contemporary fixtures</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Polished Chrome</h3>
              <p className="text-sm text-muted-foreground">Bright and timeless; reflects light for a crisp, clean presentation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Brushed Nickel</h3>
              <p className="text-sm text-muted-foreground">Soft metallic warmth with subtle texture that hides fingerprints</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Brass/Gold</h3>
              <p className="text-sm text-muted-foreground">Bold, upscale accent available in polished and brushed looks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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

      {/* Maintenance Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Glass Care & Maintenance</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Daily Care</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Squeegee after each use</li>
                  <li>Wipe down hardware</li>
                  <li>Leave door slightly open</li>
                  <li>Use bathroom ventilation</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Weekly Cleaning</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Mild soap and water</li>
                  <li>Non-abrasive cleaning cloth</li>
                  <li>Clean both sides of glass</li>
                  <li>Dry completely</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Deep Cleaning</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>White vinegar for mineral deposits</li>
                  <li>Baking soda paste for tough spots</li>
                  <li>Rinse thoroughly</li>
                  <li>Apply protective coating if needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Other Glass Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  Residential Glass Replacement
                </CardTitle>
                <CardDescription>
                  Emergency glass replacement for your home including windows, mirrors, and patio doors.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 24/7 emergency response</li>
                  <li>• Window glass replacement</li>
                  <li>• Custom mirrors & table tops</li>
                  <li>• Insurance claim assistance</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/glass-company-las-vegas/residential-glass-replacement" onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Office Glass Enclosures
                </CardTitle>
                <CardDescription>
                  Professional glass solutions for modern workspaces and commercial environments.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Conference room partitions</li>
                  <li>• Private office walls</li>
                  <li>• Reception area glass</li>
                  <li>• Commercial storefront systems</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/glass-company-las-vegas/office-enclosures" onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Square className="h-5 w-5" />
                  Custom Mirrors
                </CardTitle>
                <CardDescription>
                  Mirrors custom-cut to your measured space and installed across the Las Vegas Valley.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom-cut mirrors</li>
                  <li>• Mirror replacement</li>
                  <li>• Free measurements and quotes</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/glass-company-las-vegas/custom-mirrors" onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DoorOpen className="h-5 w-5" />
                  Custom Glass Doors
                </CardTitle>
                <CardDescription>
                  Custom glass doors and pivot doors for homes, plus commercial and restaurant glass doors.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Glass pivot doors</li>
                  <li>• Luxury and interior glass doors</li>
                  <li>• Restaurant and commercial glass doors</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/glass-company-las-vegas/custom-glass-doors" onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
            Our team is here to help you make the best decisions for your shower door project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Expert Consultation</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/shower-doors-las-vegas" onClick={() => window.scrollTo(0, 0)}>Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;