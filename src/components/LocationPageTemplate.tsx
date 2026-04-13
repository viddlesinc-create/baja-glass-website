import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { Star, Phone, MapPin, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { trackHendersonConversion } from "@/lib/analytics";
import OptimizedImage from "@/components/OptimizedImage";
import { getSEOConfig } from "@/seo/metaConfig";
import PhoneNumber from "@/components/PhoneNumber";

interface LocationPageProps {
  city: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  heroImage: string;
  description: string;
  neighborhoods: string[];
  testimonials: Array<{
    name: string;
    text: string;
    rating: number;
    service: string;
  }>;
  projectImages: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  localInfo: {
    homeStyles: string;
    hardWater: string;
  };
  metaDescription: string;
  additionalContent?: React.ReactNode;
  citySpecificFaqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const LocationPageTemplate = ({
  city,
  coordinates,
  heroImage,
  description,
  neighborhoods,
  testimonials,
  projectImages,
  localInfo,
  metaDescription,
  additionalContent,
  citySpecificFaqs
}: LocationPageProps) => {
  const location = useLocation();
  const seoConfig = getSEOConfig(location.pathname);
  const services = [
    { name: "Frameless Shower Doors", href: "/shower-doors-las-vegas/frameless" },
    { name: "Sliding Shower Doors", href: "/shower-doors-las-vegas/sliding" },
    { name: "Hinged Shower Doors", href: "/shower-doors-las-vegas/hinged" },
    { name: "Custom Enclosures", href: "/shower-doors-las-vegas/custom-enclosures" },
    { name: "Steam Shower Enclosures", href: "/shower-doors-las-vegas/steam-enclosures" },
    
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* LocalBusiness Schema - basic SEO handled by SEOHead via metaConfig */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://bajaglass.com/#localbusiness",
            "name": `Baja Glass - ${city} Shower Doors`,
            "image": "https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png",
            "logo": "https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png",
            "foundingDate": "2004",
            "areaServed": {
              "@type": "City",
              "name": city,
              "containedIn": {
                "@type": "State",
                "name": "Nevada"
              }
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": coordinates.latitude,
              "longitude": coordinates.longitude
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4280 W Reno Ave Ste A",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89118",
              "addressCountry": "US"
            },
            "telephone": "(702) 383-0779",
            "url": seoConfig.canonical,
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "16:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "27",
              "ratingCount": "27"
            },
            "sameAs": [
              "https://www.google.com/maps/place/Baja+Glass+%26+Mirror+LLC/@36.0977853,-115.1998091,17z",
              "https://www.instagram.com/baja_glass_lv/",
              "https://www.facebook.com/people/Baja-Glass-and-Mirror/100033858206711/",
              "https://www.yelp.com/biz/baja-glass-and-mirror-las-vegas"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-primary to-charcoal">
        <div className="absolute inset-0">
          <OptimizedImage
            src={heroImage}
            alt={`Professional shower door installation in ${city}, Nevada by Baja Glass`}
            className="w-full h-full object-cover opacity-75"
            width={1920}
            height={1080}
            sizes="100vw"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-left md:text-center lg:text-left lg:ml-16">
              <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30 mb-4">
                Serving {city}, Nevada
              </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Shower Doors {city} NV
                <span className="block bg-gradient-to-r from-white via-chrome-light to-white bg-clip-text text-transparent drop-shadow-2xl">
                  Professional Installation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-left md:justify-center lg:justify-start lg:ml-16">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Quote</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <PhoneNumber 
                  location={city}
                  showIcon={true}
                  className="flex items-center gap-2"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content (City-Specific) */}
      {additionalContent && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {additionalContent}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us for City */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Baja Glass in {city}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Serving {city} for 20+ Years</h3>
                <p className="text-muted-foreground">Local expertise with hundreds of installations throughout the {city} area.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Fast Service to Your Neighborhood</h3>
                <p className="text-muted-foreground">Quick response times and convenient scheduling for {city} residents.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Familiar with {city} Homes</h3>
                <p className="text-muted-foreground">Experience with local home styles and construction standards.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-muted-foreground">Fully licensed, bonded, and insured for your protection.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Quality Materials</h3>
                <p className="text-muted-foreground">Premium tempered glass and professional-grade hardware.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Strong Warranty</h3>
                <p className="text-muted-foreground">Comprehensive warranty coverage on materials and workmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our {city} Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Complete shower door solutions for {city} homes, from frameless elegance to practical sliding doors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to={service.href} onClick={() => window.scrollTo(0, 0)}>
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Projects Gallery */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Recent Projects in {city}</h2>
          <p className="text-center text-muted-foreground mb-12">
            See the quality of our work in {city} neighborhoods
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projectImages.map((image, index) => (
              <div key={index} className="group">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-muted-foreground">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What {city} Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    {renderStars(testimonial.rating)}
                  </div>
                  <Badge variant="outline" className="w-fit text-xs">
                    {testimonial.service}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{testimonial.text}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/reviews" onClick={() => window.scrollTo(0, 0)}>
                Read All Reviews →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Neighborhoods We Serve in {city}</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <Badge key={neighborhood} variant="secondary" className="text-sm py-2 px-4">
                  <MapPin className="h-3 w-3 mr-2" />
                  {neighborhood}
                </Badge>
              ))}
            </div>
            <p className="text-center text-muted-foreground">
              Fast, reliable service throughout {city} and surrounding areas. Most installations completed within a few business days.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">We Also Serve Nearby Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Henderson", url: "/shower-doors-henderson-nv" },
                { name: "Summerlin", url: "/shower-doors-summerlin-nv" },
                { name: "Paradise", url: "/shower-doors-paradise-nv" },
                { name: "Spring Valley", url: "/shower-doors-spring-valley-nv" },
                { name: "Enterprise", url: "/shower-doors-enterprise-nv" },
                { name: "Green Valley", url: "/shower-doors-green-valley-nv" }
              ]
              .filter(area => area.name !== city)
              .map((area) => (
                <Button 
                  key={area.name}
                  variant="outline" 
                  asChild 
                  className="justify-start"
                >
                  <Link to={area.url} onClick={() => window.scrollTo(0, 0)}>
                    <MapPin className="h-4 w-4 mr-2" />
                    {area.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific FAQs */}
      {citySpecificFaqs && citySpecificFaqs.length > 0 && (
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{city} Shower Door FAQs</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {citySpecificFaqs.map((faq, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">About Shower Doors in {city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Local Home Styles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{localInfo.homeStyles}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Water Quality Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{localInfo.hardWater}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready for Your {city} Shower Door Installation?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 leading-relaxed">
              Get a free quote and expert consultation from Baja Glass. Serving {city} for over 20 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="xl" asChild className="shadow-2xl">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Quote</Link>
              </Button>
              <Button variant="glass" size="xl" asChild className="shadow-2xl">
                <PhoneNumber 
                  location={`${city}_footer_cta`}
                  showIcon={true}
                  className="flex items-center gap-3"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPageTemplate;
