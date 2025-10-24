import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, Users, Award, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Full licensing, bonding, and insurance for your peace of mind and protection."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled technicians with years of experience in glass installation and repair."
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Premium materials, precision installation, and attention to every detail."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time appointments, clear communication, and professional follow-through."
    }
  ];

  const certifications = [
    "Licensed Glass Contractor",
    "Bonded & Insured",
    "Safety Glass Certified",
    "Local Las Vegas Business",
    "Warranty Backed Work"
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Baja Glass | Licensed Glass Contractor Las Vegas</title>
        <meta name="description" content="Learn about Baja Glass, a family-owned glass company serving Las Vegas since 2010. Licensed, bonded, and insured for quality shower door installation and comprehensive glass services. Experienced team with commitment to excellence." />
        <link rel="canonical" href="https://bajaglass.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Baja Glass | Licensed Glass Contractor Las Vegas" />
        <meta property="og:description" content="Learn about Baja Glass, a family-owned glass company serving Las Vegas since 2010. Licensed, bonded, and insured for quality shower door installation and glass services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/about" />
        <meta property="og:image" content="https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" />
        <meta property="og:site_name" content="Baja Glass" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Baja Glass | Licensed Glass Contractor Las Vegas" />
        <meta name="twitter:description" content="Learn about Baja Glass, a family-owned glass company serving Las Vegas since 2010. Licensed, bonded, and insured for quality installation." />
        <meta name="twitter:image" content="https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Baja Glass", 
              "description": "Family owned and operated glass company specializing in shower doors, mirrors, and interior glass installation.",
              "foundingDate": "2010",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4280 Reno Ave, Ste A",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV", 
                "postalCode": "89118",
                "addressCountry": "US"
              },
              "telephone": "(702) 750-1526",
              "url": "https://bajaglass.com",
              "openingHours": "Mo-Sa 08:00-16:00",
              "areaServed": {
                "@type": "Place",
                "name": "Las Vegas Valley"
              },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "License",
                  "name": "Licensed Glass Contractor"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "credentialCategory": "Insurance",
                  "name": "Bonded & Insured"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Certification", 
                  "name": "Safety Glass Certified"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Baja Glass</h1>
            <p className="text-xl mb-8 text-white/90">
              Your trusted partner for custom shower doors and glass solutions throughout the Las Vegas Valley.
            </p>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Baja Glass was founded with a simple mission: to provide Las Vegas homeowners with exceptional shower door installation and repair services. We believe that your bathroom should be both beautiful and functional, and we're committed to making that vision a reality.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Located in the heart of Las Vegas, we understand the unique needs of our community. From modern high-rise condos to classic suburban homes, we've helped thousands of homeowners transform their bathrooms with custom glass solutions.
              </p>
              <p className="text-lg leading-relaxed">
                Our team combines years of experience with cutting-edge techniques and premium materials to deliver results that exceed expectations. Every project, from simple repairs to complex custom enclosures, receives the same attention to detail and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center bg-background p-6 rounded-lg">
                <value.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-muted-foreground">We visit your home to understand your needs, measure your space, and discuss design options that fit your style and budget.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design & Planning</h3>
                  <p className="text-muted-foreground">Our team creates detailed plans and provides clear recommendations for glass type, hardware finishes, and installation approach.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Fabrication</h3>
                  <p className="text-muted-foreground">Each piece is precisely cut and finished to your specifications using premium tempered safety glass and quality hardware.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                  <p className="text-muted-foreground">Our certified installers complete the work with precision, care, and attention to every detail—most projects finished in a single day.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Final Walkthrough</h3>
                  <p className="text-muted-foreground">We review the completed installation, provide care instructions, and ensure you're completely satisfied with the results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Licensed & Certified</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We maintain all required licenses and certifications to ensure safe, compliant, and professional service.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {certifications.map((cert) => (
              <Badge key={cert} className="bg-background text-foreground border border-border">
                {cert}
              </Badge>
            ))}
          </div>
          <div className="bg-background p-6 rounded-lg inline-block">
            <h3 className="font-semibold mb-2">Baja Glass</h3>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
            Experience the Baja Glass difference with professional service, quality materials, and expert installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Your Free Quote</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;