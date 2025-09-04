import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { useState } from "react";

const Gallery = () => {
  const [sliderValues, setSliderValues] = useState([50, 50, 50, 50]);
  
  const beforeAfterProjects = [
    {
      title: "Frosted to Clear Glass Upgrade",
      location: "Las Vegas",
      beforeImage: "/lovable-uploads/fa10a8e6-c837-4e10-b9f0-c8bbd5506ea4.png",
      afterImage: "/lovable-uploads/5691175d-8fb2-4e96-9445-987ca41039fb.png",
      description: "Upgraded standard contractor grade framed frosted glass door to modern frameless design with premium hardware."
    },
    {
      title: "Sliding Door Transformation",
      location: "Henderson", 
      beforeImage: "/lovable-uploads/cd86f335-efa7-4203-92ce-e32d77e9b26b.png",
      afterImage: "/lovable-uploads/2145af91-ce61-458d-a311-72b26193aeb2.png",
      description: "Replaced frosted sliding shower doors with crystal clear glass and modern chrome hardware for an open, spacious feel."
    },
    {
      title: "Framed to Frameless Upgrade",
      location: "Summerlin",
      beforeImage: "/lovable-uploads/b924d7a0-9e63-4616-9595-c35e3546e89a.png", 
      afterImage: "/lovable-uploads/9642038d-f5d9-4f9d-8096-46dc1eb70052.png",
      description: "Upgraded from traditional framed shower doors to modern frameless design with premium glass and sleek hardware."
    },
    {
      title: "Custom Enclosure Modernization",
      location: "Spring Valley",
      beforeImage: "/lovable-uploads/63a30f9e-c80e-421e-9968-d4ed286876f4.png",
      afterImage: "/lovable-uploads/70012b37-e3d6-4261-b567-0a42b8632737.png",
      description: "Updated shower enclosure with enhanced clear glass and precision-fit frameless design for maximum elegance."
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


      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/c383f5e7-68b2-4ea4-8019-4e046a450028.png" 
                alt="Herringbone tile shower with frameless glass doors"
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/bedc8bb9-3b67-4709-87b4-556203cfd79f.png" 
                alt="Curved corner shower enclosure with gold hardware"
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/f2364d5d-64d5-4b55-a8b3-e8732436cd87.png" 
                alt="Sliding glass shower door installation"
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/b23c9420-2184-4048-b39c-d5d90544053a.png" 
                alt="Large frameless shower with mosaic floor"
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/50831b45-a61f-49d8-9b76-6f5a63a1daff.png" 
                alt="Custom shower enclosure under construction"
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/e6377c34-4f89-4979-9352-916061f129b9.png" 
                alt="Custom glass table installation"
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/662db84f-6194-44ba-9e31-276bae0c4098.png" 
                alt="Large walk-in shower with frameless glass"
                className="w-full aspect-video object-cover"
              />
            </div>
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