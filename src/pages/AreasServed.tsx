import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

const AreasServed = () => {
  const serviceAreas = [
    {
      city: "Las Vegas",
      description: "Our home base, serving all neighborhoods from downtown to the southwest suburbs.",
      highlights: ["Downtown Las Vegas", "The Strip area", "Southwest Las Vegas", "Centennial Hills"]
    },
    {
      city: "Henderson",
      description: "Full service to Henderson residents with same-day installation availability.",
      highlights: ["Green Valley", "Anthem", "MacDonald Ranch", "Lake Las Vegas"]
    },
    {
      city: "Summerlin",
      description: "Luxury shower door installations in Summerlin's premier communities.",
      highlights: ["The Ridges", "Red Rock Country Club", "The Trails", "Downtown Summerlin"]
    },
    {
      city: "North Las Vegas",
      description: "Reliable service and professional installation throughout North Las Vegas.",
      highlights: ["Aliante", "Eldorado", "Canyon Gate", "Shadow Creek"]
    },
    {
      city: "Paradise",
      description: "Expert glass installation for Paradise area homes and condos.",
      highlights: ["Paradise Valley", "University District", "East Las Vegas", "Winchester"]
    },
    {
      city: "Spring Valley",
      description: "Custom shower solutions for Spring Valley's diverse housing communities.",
      highlights: ["Spanish Hills", "Desert Shores", "Peccole Ranch", "Queens Ridge"]
    },
    {
      city: "Enterprise",
      description: "Professional shower door service throughout the Enterprise area.",
      highlights: ["Southern Highlands", "Mountains Edge", "Silverado Ranch", "Inspirada"]
    },
    {
      city: "Boulder City",
      description: "Extending our expertise to Boulder City with the same quality service.",
      highlights: ["Historic Boulder City", "Lake Mead area", "New developments", "Custom homes"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h1 className="text-5xl font-bold mb-6">Areas We Serve</h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Professional shower door installation and repair throughout the Las Vegas Valley and surrounding communities.
          </p>
          <Button variant="glass" size="lg" asChild>
            <Link to="/contact">Schedule Service in Your Area</Link>
          </Button>
        </div>
      </section>

      {/* Service Area Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <Card key={area.city} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    {area.city}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{area.description}</CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Notable Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Commitment */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Local Team</h3>
              <p className="text-muted-foreground">Our technicians know the Las Vegas Valley and are familiar with local building requirements and styles.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Fast Response</h3>
              <p className="text-muted-foreground">Same-area scheduling and efficient routing means faster service appointments throughout our coverage area.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p className="text-muted-foreground">The same high standards and warranty coverage apply to every installation, regardless of location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Schedule Service?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            No matter which Las Vegas Valley community you call home, we're ready to provide expert shower door installation and repair services.
          </p>
          
          <div className="bg-card p-8 rounded-lg inline-block shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Baja Glass</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                4280 W Reno Ave, Las Vegas, NV 89118
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                (702) 383-0779
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
            <Button variant="phone" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Coverage Area</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We proudly serve the entire Las Vegas metropolitan area and surrounding communities.
          </p>
          
          <div className="bg-background p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-light to-secondary flex items-center justify-center rounded-lg">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-accent" />
                <p className="text-muted-foreground">Interactive Service Area Map</p>
                <p className="text-sm text-muted-foreground">Las Vegas Valley Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasServed;