import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, Wrench, Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";
const installationProcess = "/images/installation-process.jpg";

const InstallationProcess = () => {
  return (
    <>
        <Helmet>
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Shower Door Installation Process: What to Expect",
            "description": "A complete walkthrough of the professional installation process, from initial consultation to final inspection and warranty coverage.",
            "author": {
              "@type": "Organization",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "publisher": {
              "@type": "Organization",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "datePublished": "2025-01-15",
            "dateModified": "2026-01-10",
            "image": "https://bajaglass.com/images/installation-process.jpg",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bajaglass.com/blog/installation-process"
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
              Shower Door Installation Process: What to Expect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A complete walkthrough of the professional installation process, from initial consultation to final inspection and warranty coverage.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <img 
              src={installationProcess}
              alt="Professional shower door installation showing precise measurement and installation techniques"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Opening Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                <strong>A professional shower door installation is a precise process that requires expertise, specialized tools, and attention to detail.</strong> 
                Understanding what to expect helps you prepare your space, set realistic timelines, and ensure the best possible outcome. 
                This comprehensive guide walks you through every step of the installation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Initial Consultation */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-accent" />
              Step 1: Initial Consultation & Design
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">What Happens During Your Consultation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-base font-semibold mb-3">On-Site Assessment</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Measure shower opening dimensions</li>
                      <li>• Check wall plumb and square conditions</li>
                      <li>• Assess structural support requirements</li>
                      <li>• Evaluate existing plumbing and fixtures</li>
                      <li>• Identify any potential installation challenges</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-3">Design & Options Review</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Discuss style preferences and requirements</li>
                      <li>• Review glass types and thickness options</li>
                      <li>• Select hardware finishes and styles</li>
                      <li>• Explain different door configurations</li>
                      <li>• Provide detailed cost estimates</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Preparation Checklist for Homeowners</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Clear the bathroom area of personal items and decorations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Ensure easy access to the work area
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Remove old shower doors or curtains if applicable
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Complete any tile work or bathroom renovations first
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Manufacturing & Preparation */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Wrench className="h-8 w-8 text-accent" />
              Step 2: Manufacturing & Pre-Installation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Glass Manufacturing Process</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>Custom Cutting:</strong> Glass is precisely cut to your exact measurements using computerized cutting systems.</p>
                    <p><strong>Edge Polishing:</strong> All edges are polished smooth for safety and aesthetic appeal.</p>
                    <p><strong>Drilling:</strong> Hardware mounting holes are drilled with precision to ensure perfect alignment.</p>
                    <p><strong>Tempering:</strong> Glass undergoes heat treatment for safety compliance and strength.</p>
                    <p><strong>Quality Control:</strong> Final inspection ensures all specifications are met before delivery.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Timeline Expectations</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Initial Consultation</span>
                      <span className="text-sm text-muted-foreground">Day 1</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Design & Approval</span>
                      <span className="text-sm text-muted-foreground">Days 2-3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Manufacturing</span>
                      <span className="text-sm text-muted-foreground">7-14 Days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Installation</span>
                      <span className="text-sm text-muted-foreground">1-2 Days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Installation Day */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Clock className="h-8 w-8 text-accent" />
              Step 3: Installation Day Process
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Hour-by-Hour Installation Timeline</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-accent pl-4">
                    <h3 className="text-base font-semibold">8:00 AM - Setup & Preparation</h3>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Protect surrounding areas with drop cloths</li>
                      <li>• Set up tools and safety equipment</li>
                      <li>• Verify all materials and hardware</li>
                      <li>• Review installation plan with team</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-accent pl-4">
                    <h3 className="text-base font-semibold">9:00 AM - Wall Preparation</h3>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Check wall plumb and make adjustments</li>
                      <li>• Mark mounting locations precisely</li>
                      <li>• Drill pilot holes for anchors</li>
                      <li>• Install wall channels or brackets</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-accent pl-4">
                    <h3 className="text-base font-semibold">10:30 AM - Glass Installation</h3>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Carefully position and align glass panels</li>
                      <li>• Install hinges and support hardware</li>
                      <li>• Mount door handles and accessories</li>
                      <li>• Apply weatherstripping and seals</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-accent pl-4">
                    <h3 className="text-base font-semibold">12:00 PM - Adjustment & Testing</h3>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Fine-tune door alignment and operation</li>
                      <li>• Test all moving parts and hardware</li>
                      <li>• Apply final sealant where needed</li>
                      <li>• Clean glass and remove installation marks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Procedures */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-accent" />
              Safety Procedures & Quality Assurance
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Safety Protocols</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>All installers are trained and certified professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>Proper lifting techniques for heavy glass panels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>Safety glasses and protective equipment required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>Dust containment and cleanup procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>Comprehensive liability insurance coverage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quality Checklist</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>Door opens and closes smoothly without binding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>All seals and weatherstripping properly installed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>Hardware is secure and properly aligned</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>Glass is clean and free of installation marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                      <span>Customer walkthrough and approval</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Inspection */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Final Inspection & Customer Care</h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Post-Installation Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Final Walkthrough</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Demonstrate proper door operation</li>
                      <li>• Explain care and maintenance procedures</li>
                      <li>• Review warranty terms and coverage</li>
                      <li>• Provide care instructions and contact information</li>
                      <li>• Address any questions or concerns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Documentation Provided</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Warranty certificate and terms</li>
                      <li>• Care and maintenance guide</li>
                      <li>• Contact information for service</li>
                      <li>• Installation photos for records</li>
                      <li>• Proof of insurance and licensing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">First 24 Hours After Installation</h3>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p>
                    Allow sealant to cure completely before using the shower (typically 24 hours). 
                    Avoid applying excessive force to doors and hardware during this initial period. 
                    If you notice any issues, contact us immediately for prompt resolution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Schedule Your Installation?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Our experienced team will handle every aspect of your shower door installation with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule Consultation</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>View Completed Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Professional Installation Makes the Difference</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    A properly installed shower door will provide decades of reliable service and enhance your bathroom's 
                    functionality and appearance. Our systematic approach ensures every detail is addressed, from initial 
                    consultation through final inspection and ongoing support.
                  </p>
                  <p>
                    Understanding the installation process helps you prepare appropriately and set realistic expectations. 
                    We're committed to clear communication throughout the project and standing behind our work with 
                    comprehensive warranty coverage and responsive service.
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

export default InstallationProcess;