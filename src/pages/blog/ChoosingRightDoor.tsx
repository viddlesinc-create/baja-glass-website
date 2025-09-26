import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Ruler, Frame, Palette, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";
import customEnclosure from "@/assets/custom-enclosure.jpg";

const ChoosingRightDoor = () => {
  return (
    <>
      <Helmet>
        <title>How to Choose the Right Shower Door - Complete Guide | Baja Glass Las Vegas</title>
        <meta 
          name="description" 
          content="Expert guide to selecting the perfect shower door. Learn about frameless vs framed, glass options, hardware finishes, and space considerations." 
        />
        <meta name="keywords" content="shower door selection, frameless vs framed, glass thickness, shower door guide, Las Vegas shower doors" />
        <link rel="canonical" href="https://bajaglass.com/blog/choosing-right-door" />
      </Helmet>
      
      <article className="min-h-screen">
        {/* Header */}
        <header className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/resources" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              How to Choose the Perfect Shower Door for Your Bathroom
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive guide to selecting the ideal shower door style, glass type, and hardware that matches your space and budget.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <img 
              src={customEnclosure}
              alt="Beautiful custom shower enclosure showcasing various door options and glass types"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Opening Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Choosing the right shower door is one of the most important decisions in your bathroom renovation.</strong> 
                The perfect door combines functionality, style, and durability while complementing your bathroom's design and meeting 
                your practical needs. With numerous options available, this guide will help you navigate the decision-making process 
                with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Frameless vs Framed */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Frame className="h-8 w-8 text-accent" />
              Frameless vs. Framed vs. Semi-Frameless
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Frameless</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm">Clean, modern aesthetic with unobstructed glass panels and minimal hardware.</p>
                    <div>
                      <h4 className="font-semibold mb-2">Pros:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Elegant, spa-like appearance</li>
                        <li>• Easier to clean</li>
                        <li>• Makes space appear larger</li>
                        <li>• Timeless design</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cons:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Higher cost</li>
                        <li>• Requires thicker glass</li>
                        <li>• Less water containment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Framed</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm">Traditional design with metal frames around all glass edges for maximum stability.</p>
                    <div>
                      <h4 className="font-semibold mb-2">Pros:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Most affordable option</li>
                        <li>• Excellent water containment</li>
                        <li>• Wide range of finishes</li>
                        <li>• Very stable and secure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cons:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• More cleaning required</li>
                        <li>• Can appear dated</li>
                        <li>• May obstruct view</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Semi-Frameless</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm">Hybrid design with framing around the perimeter but not around the door panel.</p>
                    <div>
                      <h4 className="font-semibold mb-2">Pros:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Balance of style and function</li>
                        <li>• More affordable than frameless</li>
                        <li>• Good water containment</li>
                        <li>• Modern appearance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cons:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• More expensive than framed</li>
                        <li>• Some frame cleaning required</li>
                        <li>• Limited customization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Glass Thickness Options */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Ruler className="h-8 w-8 text-accent" />
              Glass Thickness & Type Selection
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Glass Thickness Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">3/8" Glass (10mm)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Standard thickness for most applications</li>
                      <li>• Suitable for framed and semi-frameless doors</li>
                      <li>• Good balance of strength and cost</li>
                      <li>• Adequate for doors up to 36" wide</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">1/2" Glass (12mm)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Premium thickness for frameless doors</li>
                      <li>• Superior strength and stability</li>
                      <li>• Luxurious feel and appearance</li>
                      <li>• Required for doors over 36" wide</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Glass Type Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Clear Glass</h4>
                    <p className="text-sm text-muted-foreground mb-3">Standard tempered glass with slight green tint on edges. Most popular and cost-effective choice.</p>
                    <p className="text-xs text-muted-foreground"><strong>Best for:</strong> Budget-conscious projects, traditional bathrooms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Low-Iron Glass</h4>
                    <p className="text-sm text-muted-foreground mb-3">Ultra-clear glass with minimal tint for maximum clarity and premium appearance.</p>
                    <p className="text-xs text-muted-foreground"><strong>Best for:</strong> Luxury installations, modern designs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Frosted/Etched Glass</h4>
                    <p className="text-sm text-muted-foreground mb-3">Provides privacy while maintaining light transmission. Available in various patterns.</p>
                    <p className="text-xs text-muted-foreground"><strong>Best for:</strong> Privacy needs, decorative accents</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Textured Glass</h4>
                    <p className="text-sm text-muted-foreground mb-3">Various patterns like rain, bamboo, or geometric designs for visual interest.</p>
                    <p className="text-xs text-muted-foreground"><strong>Best for:</strong> Unique designs, partial privacy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hardware Finishes */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Palette className="h-8 w-8 text-accent" />
              Hardware Finishes & Styles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Popular Finish Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-charcoal rounded-full"></div>
                      <span className="text-sm"><strong>Matte Black:</strong> Modern, versatile, hides fingerprints</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full"></div>
                      <span className="text-sm"><strong>Polished Chrome:</strong> Bright, timeless, reflects light</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-200 rounded-full"></div>
                      <span className="text-sm"><strong>Brushed Nickel:</strong> Warm, textured, fingerprint resistant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full"></div>
                      <span className="text-sm"><strong>Brass/Gold:</strong> Luxurious, bold, statement making</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Hardware Style Considerations</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span><strong>Handle Style:</strong> Towel bars, pulls, or knobs to match your bathroom fixtures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span><strong>Hinge Type:</strong> Wall-mount or glass-to-glass for different opening directions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span><strong>Support Systems:</strong> Headers, stabilizing bars, or knee walls for structural integrity</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Space Considerations */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Home className="h-8 w-8 text-accent" />
              Space & Layout Considerations
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Your bathroom's layout, size, and existing features significantly impact which shower door options will work best. 
                Consider these key factors before making your final decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Opening Direction</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>In-swing:</strong> Door opens into shower (saves bathroom space)</li>
                    <li>• <strong>Out-swing:</strong> Door opens into bathroom (easier entry/exit)</li>
                    <li>• <strong>Sliding:</strong> Panels slide along track (space-saving option)</li>
                    <li>• <strong>Bi-fold:</strong> Folding doors for very tight spaces</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Clearance Requirements</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Minimum 24" clearance for hinged doors</li>
                    <li>• 6" minimum from toilet or vanity</li>
                    <li>• Consider door swing radius</li>
                    <li>• Account for towel bars and accessories</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Choose Your Perfect Shower Door?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Our experts will help you select the ideal door style, glass type, and hardware to match your vision and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Consultation</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>View Our Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Make the Right Choice</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Selecting the perfect shower door involves balancing style preferences, functional needs, and budget considerations. 
                    Consider your bathroom's existing design, daily usage patterns, and long-term goals when making your decision.
                  </p>
                  <p>
                    Remember that a quality shower door is an investment that will serve your family for decades. Take time to explore 
                    options, ask questions, and work with experienced professionals who can guide you toward the best solution for your unique space.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </article>
    </>
  );
};

export default ChoosingRightDoor;