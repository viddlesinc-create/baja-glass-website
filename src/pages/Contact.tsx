import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Mail, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll contact you within 24-48 hours with your free quote and consultation details.",
    });
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      projectType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const projectTypes = [
    "Frameless Shower Door",
    "Sliding Shower Door", 
    "Hinged/Pivot Door",
    "Custom Enclosure",
    "Repair/Replacement",
    "Steam Shower",
    "Residential Glass Repair",
    "Office Glass Enclosures",
    "Not Sure - Need Consultation"
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Baja Glass | Free Quote & Consultation Las Vegas</title>
        <meta name="description" content="Get your free quote from Baja Glass. Professional shower door installation and glass services in Las Vegas. Licensed, bonded, and insured with strong warranty." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Baja Glass",
              "address": {
                "@type": "PostalAddress", 
                "streetAddress": "4280 Reno Ave, Ste A",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89118",
                "addressCountry": "US"
              },
              "telephone": "(702) 750-1526",
              "email": "info@bajaglass.com",
              "url": "https://bajaglass.com",
              "openingHours": "Mo-Sa 08:00-16:00",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "(702) 750-1526",
                  "contactType": "Customer Service",
                  "availableLanguage": "English",
                  "areaServed": "Las Vegas Valley"
                },
                {
                  "@type": "ContactPoint", 
                  "contactType": "Sales",
                  "availableLanguage": "English",
                  "serviceType": "Free Consultation"
                }
              ],
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card, Check",
              "currenciesAccepted": "USD"
            }
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal to-primary text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/d89fa07d-a693-478f-8b0d-e12f2607c1e7.png" 
            alt="Custom frameless shower enclosure with sliding doors and stone tile walls - professional installation by Baja Glass Las Vegas"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 to-primary/50"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Ready to transform your shower? Get expert advice, clear timelines, and a flawless installation.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-2">Trusted by Las Vegas homeowners</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="bg-white/10 text-white border-white/20">Free In-Home Measurements</Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/20">Licensed & Insured</Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/20">Strong Warranty</Badge>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <Card>
              <CardHeader>
                <CardTitle>Get Your Free Quote in 24–48 Hours</CardTitle>
                <CardDescription>
                  Fill out the form below or text photos to (702) 383-0779. We'll follow up with options and timelines.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Las Vegas, Henderson, etc."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your shower door project" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your project</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe your shower space, style preferences, or any questions..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Start My Quote
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    Call or Text
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <a
                        href="tel:+17023830779"
                        className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
                      >
                        (702) 383-0779
                      </a>
                      <p className="text-muted-foreground">Call for immediate assistance or text photos for faster quotes</p>
                    </div>
                    <Badge variant="outline">Click to call</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Baja Glass</p>
                    <p className="text-muted-foreground">4280 Reno Ave</p>
                    <p className="text-muted-foreground">Ste A</p>
                    <p className="text-muted-foreground">Las Vegas, NV 89118</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span>8am - 4pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Emergency repairs and urgent consultations available by appointment
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Las Vegas", "Henderson", "Summerlin", "North Las Vegas", "Paradise", "Spring Valley", "Enterprise", "Boulder City"].map((city) => (
                      <Badge key={city} variant="outline">{city}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Las Vegas Homeowners Choose Baja Glass</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Precision Measurements</h3>
              <p className="text-muted-foreground">Laser-accurate for a tight, leak-resistant fit</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Premium Materials</h3>
              <p className="text-muted-foreground">Tempered safety glass, pro-grade hardware, clean silicone work</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-muted-foreground">Local fabrication and scheduling to fit your timeline</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">In-House Installers</h3>
              <p className="text-muted-foreground">Trained, background-checked team—no rushed subcontracting</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Honest Communication</h3>
              <p className="text-muted-foreground">Clear options and timelines from start to finish</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Strong Warranty</h3>
              <p className="text-muted-foreground">Robust hardware and workmanship coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Shower?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Get expert advice, clear timelines, and a flawless installation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <a href="#quote-form">Get a Fast Quote</a>
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

export default Contact;