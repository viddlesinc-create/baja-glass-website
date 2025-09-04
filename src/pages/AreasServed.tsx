import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Phone, CheckCircle, Instagram, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-shower-door.jpg";
import slidingDoors from "@/assets/sliding-doors.jpg";
import customEnclosure from "@/assets/custom-enclosure.jpg";

const AreasServed = () => {
  const areas = [
    {
      name: "Spanish Hills",
      description: "We design and install custom shower enclosures that match Spanish Hills' upscale finishes—low‑iron glass, clean hardware lines, and precise sealing for a spa‑level feel. Our team measures meticulously around unique tilework to ensure even reveals and a crisp close.",
      image: slidingDoors,
      alt: "Frameless shower door Spanish Hills — low‑iron glass, matte black hardware by Baja Glass",
      services: ["Frameless", "Sliding", "Hinged/Pivot", "Custom Enclosures", "Repair"]
    },
    {
      name: "Spanish Trail", 
      description: "From refreshed primary baths to guest suites, we deliver shower doors that elevate Spanish Trail homes. Expect tight, clean silicone lines and carefully placed seals to help reduce splashing without distracting from your tile.",
      image: customEnclosure,
      alt: "Hinged shower door Spanish Trail — brushed nickel hinges and handle",
      services: ["Frameless", "Hinged/Pivot", "Repair"]
    },
    {
      name: "The Ridges (Summerlin South)",
      description: "For modern layouts in The Ridges, our frameless and steam‑ready enclosures pair ultra‑clear glass with minimalist hardware. We account for niches, benches, and custom angles to maintain a refined, architectural look.",
      image: heroImage,
      alt: "Steam shower enclosure The Ridges — operable transom, low‑iron glass",
      services: ["Frameless", "Custom Enclosures", "Steam", "Gallery"]
    },
    {
      name: "Rhodes Ranch",
      description: "Space‑smart solutions like sliding bypass doors and clean, durable framed options are popular in Rhodes Ranch. We align tracks and rollers for smooth glide and fit seals precisely to help prevent drips.",
      image: slidingDoors,
      alt: "Sliding shower doors Rhodes Ranch — brushed nickel rollers and handle",
      services: ["Sliding", "Semi‑Frameless/Framed", "Repair"]
    },
    {
      name: "Southern Highlands",
      description: "Luxury frameless doors, inline panels, and custom hardware finishes complement Southern Highlands' high‑end bathrooms. Our measurements and edge polishing deliver even reveals and a tight, confident close.",
      image: heroImage,
      alt: "Frameless shower Southern Highlands — matte black clips, clear seals",
      services: ["Frameless", "Hinged/Pivot", "Custom Enclosures"]
    },
    {
      name: "Mountains Edge",
      description: "Whether updating a primary bath or secondary shower, we install sturdy, stylish doors with dependable sealing. Choose from clear or low‑iron glass and finishes that match your fixtures.",
      image: customEnclosure,
      alt: "Semi‑frameless shower door Mountains Edge — polished chrome frame",
      services: ["Semi‑Frameless/Framed", "Sliding", "Repair"]
    },
    {
      name: "Coronado Ranch",
      description: "From frameless inline doors to corner neo‑angle layouts, we tailor enclosures to Coronado Ranch homes with clean silicone work and reliable operation. Repairs for rollers, hinges, and seals available.",
      image: customEnclosure,
      alt: "Neo‑angle enclosure Coronado Ranch — precise miter and clean silicone lines",
      services: ["Custom Enclosures", "Repair", "Frameless"]
    },
    {
      name: "Anthem",
      description: "Anthem homeowners choose low‑iron glass and refined hardware for a bright, open feel. We build steam‑compatible and standard enclosures with discreet sealing and a premium finish.",
      image: heroImage,
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
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-primary/60 to-charcoal/80"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Shower Doors — Areas We Serve in the{" "}
              <span className="bg-gradient-to-r from-white via-chrome-light to-white bg-clip-text text-transparent">
                Las Vegas Valley
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Precision‑measured, professionally installed shower doors and enclosures—serving your neighborhood with clean, careful workmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Cards */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
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
                  <CardTitle className="text-2xl font-serif">Shower Doors in {area.name}</CardTitle>
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
                      <Link to="/contact">Get a Fast Quote</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to="/gallery">View Gallery</Link>
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
                <Link to="/contact">Get a Fast Quote</Link>
              </Button>
              <Button variant="glass" size="xl" asChild className="shadow-2xl">
                <a href="tel:+17023830779" className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasServed;