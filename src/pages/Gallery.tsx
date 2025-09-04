import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { useState } from "react";

const Gallery = () => {
  const [sliderValues, setSliderValues] = useState([50, 50, 50, 50]);
  
  const beforeAfterProjects = [
    {
      title: "Semi-Frameless to Frameless Upgrade",
      location: "Henderson",
      beforeImage: "/lovable-uploads/8b110d20-9c4f-40fb-8d11-388824282d61.png",
      afterImage: "/lovable-uploads/e506c19b-db1e-4646-b5ad-edf8294038e6.png",
      description: "Replaced dated framed shower door with sleek frameless design featuring clear glass and modern hardware."
    },
    {
      title: "Frosted Glass Door Modernization", 
      location: "Spring Valley",
      beforeImage: "/lovable-uploads/a5f3fdbc-6d58-4837-bc6c-f6cfb74db70c.png",
      afterImage: "/lovable-uploads/f3d472be-78bd-4bda-80dc-4b997227085f.png",
      description: "Updated old frosted glass shower door with contemporary frameless clear glass enclosure."
    },
    {
      title: "Complete Shower Door Transformation",
      location: "Las Vegas",
      beforeImage: "/lovable-uploads/d74c80f3-d99b-40aa-9452-1bdddc2f6d90.png", 
      afterImage: "/lovable-uploads/f19ca6d2-815b-4ab6-a382-98fd01aa5aa8.png",
      description: "Completely transformed outdated shower enclosure with premium frameless glass and chrome hardware."
    },
    {
      title: "Textured Glass Door Renovation",
      location: "Summerlin",
      beforeImage: "/lovable-uploads/ceb5a23b-36d2-41de-b907-83d095a64655.png",
      afterImage: "/lovable-uploads/a50691ba-4b24-4d5c-a2be-06218e1dc667.png", 
      description: "Upgraded textured glass shower doors to create a more open and modern bathroom space."
    }
  ];
  
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

      {/* Before & After Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Before & After Transformations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the dramatic difference our custom shower doors make. Use the sliders to compare before and after photos of real installations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {beforeAfterProjects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Before Image */}
                  <img 
                    src={project.beforeImage} 
                    alt={`Before ${project.title}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* After Image with clip-path based on slider value */}
                  <img 
                    src={project.afterImage} 
                    alt={`After ${project.title}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ 
                      clipPath: `inset(0 ${100 - sliderValues[index]}% 0 0)` 
                    }}
                  />
                  
                  {/* Slider Control */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm font-medium">Before</span>
                        <span className="text-white text-sm font-medium">After</span>
                      </div>
                      <Slider
                        value={[sliderValues[index]]}
                        onValueChange={(value) => {
                          const newValues = [...sliderValues];
                          newValues[index] = value[0];
                          setSliderValues(newValues);
                        }}
                        max={100}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  {/* Divider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                    style={{ left: `${sliderValues[index]}%` }}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">Transformation</Badge>
                    <Badge variant="outline">{project.location}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
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