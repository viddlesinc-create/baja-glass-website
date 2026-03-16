import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Phone, CheckCircle, Instagram, Facebook, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-shower-door.jpg";
import slidingDoors from "@/assets/sliding-doors.jpg";
import customEnclosure from "@/assets/custom-enclosure.jpg";
import { Helmet } from "react-helmet-async";
import PhoneNumber from "@/components/PhoneNumber";
import GoogleMap from "@/components/GoogleMap";
import GetDirections from "@/components/GetDirections";

const AreasServed = () => {
const areas = [
    {
      name: "Spanish Hills",
      description: "Specializing in bespoke shower enclosures for Spanish Hills' luxury homes—we create one‑of‑a‑kind designs with premium low‑iron glass, architectural hardware finishes, and precision craftsmanship. Every enclosure is tailored to complement your unique tile work and bathroom architecture.",
      image: "/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png",
      alt: "Custom glass shower enclosure Spanish Hills — premium low‑iron glass, architectural hardware by Baja Glass",
      services: ["Custom Enclosures", "Frameless", "Steam", "Luxury Hardware", "Architectural Glass"]
    },
    {
      name: "Spanish Trail", 
      description: "From refreshed primary baths to guest suites, we deliver premium glass doors that elevate Spanish Trail homes. Expect tight, clean silicone lines and carefully placed seals to help reduce splashing without distracting from your tile.",
      image: "/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png",
      alt: "Premium glass shower door Spanish Trail — elegant pebble accent and frameless design",
      services: ["Frameless", "Hinged/Pivot", "Replacement"]
    },
    {
      name: "The Ridges (Summerlin South)",
      description: "For modern layouts in The Ridges, our frameless and steam‑ready enclosures pair ultra‑clear glass with minimalist hardware. We account for niches, benches, and custom angles to maintain a refined, architectural look.",
      image: "/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png",
      alt: "Frameless corner shower enclosure The Ridges — black hardware, architectural design",
      services: ["Frameless", "Custom Enclosures", "Steam", "Gallery"]
    },
    {
      name: "Rhodes Ranch",
      description: "Space‑smart solutions like sliding bypass doors and clean, durable framed options are popular in Rhodes Ranch. We align tracks and rollers for smooth glide and fit seals precisely to help prevent drips.",
      image: "/lovable-uploads/1deef348-0e86-4da2-9bcb-2ca2964582bf.png",
      alt: "Sliding shower doors Rhodes Ranch — brushed nickel rollers and handle",
      services: ["Sliding", "Semi‑Frameless/Framed", "Replacement"]
    },
    {
      name: "Southern Highlands",
      description: "Luxury frameless doors, inline panels, and custom hardware finishes complement Southern Highlands' high‑end bathrooms. Our measurements and edge polishing deliver even reveals and a tight, confident close.",
      image: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png",
      alt: "Frameless shower Southern Highlands — matte black clips, clear seals",
      services: ["Frameless", "Hinged/Pivot", "Custom Enclosures"]
    },
    {
      name: "Mountains Edge",
      description: "Whether updating a primary bath or secondary shower, we install sturdy, stylish doors with dependable sealing. Choose from clear or low‑iron glass and finishes that match your fixtures.",
      image: "/lovable-uploads/1d372151-698c-4fdb-91f7-16d12469dcd1.png",
      alt: "Semi‑frameless shower door Mountains Edge — polished chrome frame",
      services: ["Semi‑Frameless/Framed", "Sliding", "Replacement"]
    },
    {
      name: "Coronado Ranch",
      description: "From frameless inline doors to corner neo‑angle layouts, we tailor enclosures to Coronado Ranch homes with clean silicone work and reliable operation. Roller, hinge, and seal replacements available.",
      image: "/lovable-uploads/965cff5c-c7a5-4e41-b978-72fc31a0550e.png",
      alt: "Neo‑angle enclosure Coronado Ranch — precise miter and clean silicone lines",
      services: ["Custom Enclosures", "Repair", "Frameless"]
    },
    {
      name: "Anthem",
      description: "Anthem homeowners choose low‑iron glass and refined hardware for a bright, open feel. We build steam‑compatible and standard enclosures with discreet sealing and a premium finish.",
      image: "/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png",
      alt: "Frameless shower door Anthem — low‑iron glass, brushed nickel handle",
      services: ["Frameless", "Steam", "Gallery"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-primary to-charcoal">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Custom shower enclosure installation in Las Vegas Valley by Baja Glass"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-primary/20 to-charcoal/40"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-left md:text-center lg:text-left lg:ml-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Shower Door & Glass Services{" "}
                <span className="bg-gradient-to-r from-white via-chrome-light to-white bg-clip-text text-transparent drop-shadow-2xl">
                  Near You
                </span>
              </h1>
            </div>
            
            <div className="text-left md:text-center lg:text-left lg:ml-16">
              <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
                Precision‑measured, professionally installed shower doors and enclosures—serving your neighborhood with clean, careful workmanship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-left md:justify-center lg:justify-start lg:ml-16">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <PhoneNumber 
                  location="areas_served_hero"
                  showIcon={true}
                  showPrefix={true}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Location Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                <MapPin className="h-8 w-8 text-accent" aria-hidden="true" />
                Visit Our Location
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Serving the entire Las Vegas Valley from our central location. Stop by for a consultation or call us for a free in-home measurement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Baja Glass & Mirror LLC</h3>
                  <p className="text-muted-foreground">4280 W Reno Ave, Ste A</p>
                  <p className="text-muted-foreground mb-4">Las Vegas, NV 89118</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <PhoneNumber 
                      location="areas_served_map_section"
                      showIcon={true}
                      className="text-accent hover:text-accent/80 transition-colors font-medium"
                    />
                  </div>
                </div>
                <GetDirections 
                  variant="button" 
                  size="lg" 
                  location="areas_served_map" 
                  className="w-full"
                />
              </div>
              
              <GoogleMap 
                height="350px" 
                location="areas_served"
                showDirectionsButton={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Service Subsections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-3">Shower Door & Glass Services in Las Vegas, NV</h2>
              <p className="text-muted-foreground leading-relaxed">
                Baja Glass provides comprehensive <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower door services</Link>, custom glass enclosures, and expert craftsmanship throughout Las Vegas. Whether you need a frameless shower door for your master bath or a custom enclosure, our licensed team delivers fast, professional service. <Link to="/contact" className="text-primary underline hover:text-primary/80">Get a free quote →</Link>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Shower Doors in Henderson, NV</h2>
              <p className="text-muted-foreground leading-relaxed">
                Serving Green Valley, Anthem, Seven Hills, and all Henderson neighborhoods with expert <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower door services</Link>. Custom glass enclosures, frameless doors, and sliding shower systems installed by local professionals. <Link to="/shower-doors-henderson-nv" className="text-primary underline hover:text-primary/80">View Henderson services →</Link>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Shower Doors in Summerlin, NV</h2>
              <p className="text-muted-foreground leading-relaxed">
                Premium <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower door services</Link> for Summerlin's luxury homes including The Ridges, Red Rock Country Club, and surrounding communities. Frameless designs and custom enclosures. <Link to="/shower-doors-summerlin-nv" className="text-primary underline hover:text-primary/80">View Summerlin services →</Link>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Shower Doors in Paradise & Green Valley</h2>
              <p className="text-muted-foreground leading-relaxed">
                Professional <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower door services</Link> and custom glass work in Paradise and Green Valley. Our team serves the entire Las Vegas Valley with quality craftsmanship and reliable scheduling. <Link to="/shower-doors-paradise-nv" className="text-primary underline hover:text-primary/80">View Paradise services →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Cards */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Services by Location</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              View detailed information about our shower door services in your specific neighborhood
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 max-w-5xl mx-auto">
            {[
              { name: "Henderson", href: "/shower-doors-henderson-nv" },
              { name: "Summerlin", href: "/shower-doors-summerlin-nv" },
              { name: "Paradise", href: "/shower-doors-paradise-nv" },
              { name: "Spring Valley", href: "/shower-doors-spring-valley-nv" },
              { name: "Enterprise", href: "/shower-doors-enterprise-nv" },
              { name: "Green Valley", href: "/shower-doors-green-valley-nv" }
            ].map((location) => (
              <Button key={location.name} variant="outline" size="lg" asChild className="h-auto py-4">
                <Link to={location.href} onClick={() => window.scrollTo(0, 0)}>
                  {location.name} →
                </Link>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {areas.map((area, index) => (
              <Card 
                key={area.name} 
                className="hover:shadow-2xl transition-all duration-500 border-0 bg-background/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    {area.name === "Spanish Hills" && "Custom Enclosures in Spanish Hills"}
                    {area.name === "Spanish Trail" && "Premium Glass Doors in Spanish Trail"}
                    {area.name === "The Ridges (Summerlin South)" && "Frameless Showers for The Ridges"}
                    {area.name === "Rhodes Ranch" && "Sliding Door Solutions in Rhodes Ranch"}
                    {area.name === "Southern Highlands" && "Luxury Shower Doors — Southern Highlands"}
                    {area.name === "Mountains Edge" && "Glass Enclosures in Mountains Edge"}
                    {area.name === "Coronado Ranch" && "Neo-Angle & Custom Doors — Coronado Ranch"}
                    {area.name === "Anthem" && "Steam-Ready Enclosures in Anthem"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-6 text-base">
                    {area.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="cta" size="sm" asChild className="flex-1">
                      <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>View Gallery</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Upgrade Your Shower?</h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 leading-relaxed">
              Get a precise measurement and tailored recommendations from the Baja Glass team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="xl" asChild className="shadow-2xl">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="xl" asChild className="shadow-2xl">
                <PhoneNumber 
                  location="areas_served_cta"
                  showIcon={true}
                  showPrefix={true}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasServed;