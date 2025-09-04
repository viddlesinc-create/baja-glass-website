import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Gallery = () => {
  const projects = [
    {
      title: "Frameless Inline Shower — Summerlin",
      subtitle: "Matte Black Hardware",
      description: "3/8\" low-iron glass, matte black clips and handle, custom sweep. Installed in one day.",
      category: "Frameless",
      location: "Summerlin"
    },
    {
      title: "Sliding Door Upgrade — Henderson",
      subtitle: "Brushed Nickel Finish",
      description: "Soft-close rollers, brushed nickel finish. Replaced framed unit—no more water spots.",
      category: "Sliding",
      location: "Henderson"
    },
    {
      title: "Neo-Angle Enclosure — North Las Vegas",
      subtitle: "Low-Iron Glass",
      description: "Space-saving design with precise mitered edges and clean silicone lines.",
      category: "Custom",
      location: "North Las Vegas"
    },
    {
      title: "Steam Shower Enclosure — Paradise",
      subtitle: "Chrome Hardware with Transom",
      description: "Sealed steam-ready design with operable transom and premium gasketing.",
      category: "Steam",
      location: "Paradise"
    },
    {
      title: "Hinged Door Installation — Spring Valley",
      subtitle: "Polished Chrome",
      description: "Classic swing door with precision alignment and quality compression seals.",
      category: "Hinged",
      location: "Spring Valley"
    },
    {
      title: "Custom Corner Enclosure — Enterprise",
      subtitle: "Brass Accent Hardware",
      description: "Unique angle accommodation with luxury brass hardware and low-iron glass.",
      category: "Custom",
      location: "Enterprise"
    }
  ];

  const categories = ["All", "Frameless", "Sliding", "Hinged", "Custom", "Steam"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Recent Shower Door Projects</h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Explore our portfolio of custom shower doors and enclosures installed throughout the Las Vegas Valley.
          </p>
          <Button variant="glass" size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-light to-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge variant="outline">{project.location}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-accent font-medium mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Features */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll See in Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Precision Measurement</h3>
              <p className="text-muted-foreground">Laser-accurate cuts and perfect alignment for professional results in every installation.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Quality Materials</h3>
              <p className="text-muted-foreground">Premium tempered glass, durable hardware, and protective coatings for lasting beauty.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Clean Installation</h3>
              <p className="text-muted-foreground">Minimal silicone lines, proper sealing, and attention to every finishing detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Projects Throughout Las Vegas Valley</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We proudly serve homes and businesses across the entire Las Vegas metropolitan area.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Las Vegas", "Henderson", "Summerlin", "North Las Vegas", "Paradise", "Spring Valley", "Enterprise", "Boulder City"].map((city) => (
              <Badge key={city} variant="outline" className="text-sm">{city}</Badge>
            ))}
          </div>
          <div className="bg-secondary/50 p-6 rounded-lg inline-block">
            <p className="font-semibold">Baja Glass</p>
            <p className="text-muted-foreground">4280 W Reno Ave, Las Vegas, NV 89118</p>
            <p className="text-muted-foreground">(702) 383-0779</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Dream Shower?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">Let's design and install a custom shower door that transforms your bathroom.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/shower-doors-las-vegas">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;