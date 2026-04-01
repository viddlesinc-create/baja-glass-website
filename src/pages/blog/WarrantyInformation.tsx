import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, Phone, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";
const hardwareFinishes = "/images/hardware-finishes.jpg";

const WarrantyInformation = () => {
  return (
    <>
        <Helmet>
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Understanding Your Shower Door Warranty Coverage",
            "description": "Comprehensive warranty information including coverage terms, maintenance requirements, and how to request service for your shower door investment.",
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
            "image": "https://bajaglass.com/images/hardware-finishes.jpg",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bajaglass.com/blog/warranty-information"
            }
          })}
        </script>
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
              Understanding Your Shower Door Warranty Coverage
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive warranty information including coverage terms, maintenance requirements, and how to request service for your shower door investment.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <img 
              src={hardwareFinishes}
              alt="Premium shower door hardware and finishes covered under comprehensive warranty"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Opening Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Your shower door warranty is your protection and peace of mind.</strong> We stand behind our craftsmanship 
                with comprehensive warranty coverage that protects both materials and installation workmanship. Understanding your 
                warranty terms ensures you get the most value from your investment and know exactly what's covered if issues arise.
              </p>
            </div>
          </div>
        </section>

        {/* Warranty Coverage */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="h-8 w-8 text-accent" />
              What's Covered Under Your Warranty
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Materials Warranty</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Tempered Glass (Lifetime)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Manufacturing defects in glass</li>
                        <li>• Spontaneous glass breakage</li>
                        <li>• Edge quality and finishing issues</li>
                        <li>• Drilling and hole placement errors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Hardware (10 Years)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Hinges and pivot mechanisms</li>
                        <li>• Handles and towel bars</li>
                        <li>• Wall channels and brackets</li>
                        <li>• Finish deterioration or corrosion</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Installation Warranty</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Workmanship (5 Years)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Installation errors and misalignment</li>
                        <li>• Seal and weatherstripping failure</li>
                        <li>• Hardware mounting issues</li>
                        <li>• Water leakage due to installation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Structural Integrity (3 Years)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Door sagging or misalignment</li>
                        <li>• Wall anchor failure</li>
                        <li>• Stress-related hardware issues</li>
                        <li>• Support system problems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Warranty Terms */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FileText className="h-8 w-8 text-accent" />
              Important Warranty Terms & Conditions
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Coverage Conditions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Warranty Activation</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Warranty begins on installation completion date</li>
                      <li>• Original purchaser must register warranty within 30 days</li>
                      <li>• Proof of purchase and installation required</li>
                      <li>• Property address must match installation location</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Transferability</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Warranty transfers to new homeowner</li>
                      <li>• Transfer must be reported within 30 days</li>
                      <li>• Remaining warranty period applies</li>
                      <li>• Original documentation required</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Maintenance Requirements</h3>
                <div className="prose prose-sm max-w-none text-muted-foreground mb-6">
                  <p>
                    <strong>To maintain warranty coverage, proper care and maintenance must be followed:</strong>
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Required Maintenance</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Daily squeegee use after showering</li>
                      <li>• Weekly cleaning with approved products</li>
                      <li>• Prompt attention to loose hardware</li>
                      <li>• Professional inspection if problems arise</li>
                      <li>• Use of recommended cleaning products only</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Prohibited Activities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Use of abrasive cleaners or tools</li>
                      <li>• Modifications by unauthorized installers</li>
                      <li>• Excessive force on doors or hardware</li>
                      <li>• Installation of non-approved accessories</li>
                      <li>• Neglecting routine maintenance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What's Not Covered */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-accent" />
              Warranty Exclusions & Limitations
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Common Exclusions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Normal Wear & Tear</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Minor scratches from normal use</li>
                      <li>• Gradual finish wear over time</li>
                      <li>• Water spots from inadequate cleaning</li>
                      <li>• Seal replacement after normal lifespan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Damage & Misuse</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Impact damage from objects or people</li>
                      <li>• Chemical damage from improper cleaners</li>
                      <li>• Damage from house settling or structural movement</li>
                      <li>• Modifications by unauthorized personnel</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Environmental Factors</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                    <span>Hard water mineral buildup (preventable with proper care)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                    <span>Extreme temperature variations or thermal shock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                    <span>Acts of nature (earthquakes, floods, hurricanes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                    <span>Building movement or foundation settling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Requests */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Phone className="h-8 w-8 text-accent" />
              How to Request Warranty Service
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Service Request Process</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold">Step 1: Document the Issue</h4>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Take clear photos of the problem area</li>
                      <li>• Note when the issue first appeared</li>
                      <li>• Describe symptoms and any relevant circumstances</li>
                      <li>• Gather warranty documentation and receipts</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold">Step 2: Contact Our Service Team</h4>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Call our warranty service hotline: (702) 555-GLASS</li>
                      <li>• Email warranty claims to: warranty@bajaglasslv.com</li>
                      <li>• Online form submission at our website</li>
                      <li>• Provide installation date and warranty registration number</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold">Step 3: Service Evaluation</h4>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Initial assessment via phone or photos</li>
                      <li>• Schedule on-site inspection if needed</li>
                      <li>• Determine warranty coverage applicability</li>
                      <li>• Provide service timeline and next steps</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold">Step 4: Resolution</h4>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Covered replacements at no charge to customer</li>
                      <li>• Replacement parts or complete replacement if necessary</li>
                      <li>• Follow-up to ensure satisfaction</li>
                      <li>• Updated warranty documentation if applicable</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Response Times</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Emergency Issues</h4>
                    <p className="text-sm text-muted-foreground">Safety hazards or complete door failure: Same-day response</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Standard Service</h4>
                    <p className="text-sm text-muted-foreground">Non-emergency warranty claims: 2-3 business day response</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              Questions About Your Warranty?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Our customer service team is here to help you understand your coverage and assist with any warranty claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Warranty Service</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/resources" onClick={() => window.scrollTo(0, 0)}>View Care Instructions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Your Investment is Protected</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Our comprehensive warranty coverage gives you confidence in your shower door investment. We stand behind 
                    our products and workmanship with industry-leading warranty terms and responsive service when you need it.
                  </p>
                  <p>
                    Remember that proper maintenance is key to maximizing your warranty benefits and ensuring years of 
                    trouble-free operation. When questions arise, our team is just a phone call away to provide support 
                    and service throughout your warranty period and beyond.
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

export default WarrantyInformation;