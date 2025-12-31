import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  const [sliderValues, setSliderValues] = useState([50, 50, 50, 50]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Baja Glass Shower Door Installation Gallery",
            "description": "Professional shower door and glass enclosure installations throughout Las Vegas Valley",
            "image": beforeAfterProjects.map(project => ({
              "@type": "ImageObject",
              "name": project.title,
              "caption": project.description,
              "contentUrl": `https://bajaglass.com${project.afterImage}`,
              "contentLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": project.location,
                  "addressRegion": "NV",
                  "addressCountry": "US"
                }
              }
            }))
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 relative text-white overflow-hidden" aria-labelledby="gallery-hero-heading">
        <img 
          src="/lovable-uploads/2f745a96-a6dd-41f6-9126-d3e94b754d89.png"
          alt="Professional shower door installation gallery showcase"
          className="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="600"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 id="gallery-hero-heading" className="text-5xl font-bold mb-6">Our Recent Shower Door Projects</h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Explore our portfolio of custom shower doors and enclosures installed throughout the Las Vegas Valley.
          </p>
          <Button variant="glass" size="lg" asChild>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Start Your Project</Link>
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
                    width="600"
                    height="450"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* After Image with clip-path based on slider value */}
                  <img 
                    src={project.afterImage} 
                    alt={`After ${project.title}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    width="600"
                    height="450"
                    loading="lazy"
                    decoding="async"
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Recent Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Click any image to view it in full size
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png")}
            >
              <img 
                src="/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png" 
                alt="Frameless glass shower doors with chrome hardware"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/fe18e70d-a2bb-43a7-9636-2077c7e662b9.png")}
            >
              <img 
                src="/lovable-uploads/fe18e70d-a2bb-43a7-9636-2077c7e662b9.png" 
                alt="Elegant bathroom with custom glass shower enclosure"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/22adea8d-10a9-4780-8904-b61e4a017de8.png")}
            >
              <img 
                src="/lovable-uploads/22adea8d-10a9-4780-8904-b61e4a017de8.png" 
                alt="Under-stair shower installation with custom glass door"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/eb713b05-a28a-4385-b0c4-cdcb90a610ee.png")}
            >
              <img 
                src="/lovable-uploads/eb713b05-a28a-4385-b0c4-cdcb90a610ee.png" 
                alt="Modern bathroom mirror with brass fixtures"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/1deef348-0e86-4da2-9bcb-2ca2964582bf.png")}
            >
              <img 
                src="/lovable-uploads/1deef348-0e86-4da2-9bcb-2ca2964582bf.png" 
                alt="Textured glass shower doors with black hardware"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/ab324ca0-1c7d-49d5-ba4f-dd8865a3b916.png")}
            >
              <img 
                src="/lovable-uploads/ab324ca0-1c7d-49d5-ba4f-dd8865a3b916.png" 
                alt="Frosted glass shower panel with black frame"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/1d372151-698c-4fdb-91f7-16d12469dcd1.png")}
            >
              <img 
                src="/lovable-uploads/1d372151-698c-4fdb-91f7-16d12469dcd1.png" 
                alt="Tiled shower with black framed glass doors"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png")}
            >
              <img 
                src="/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png" 
                alt="Large walk-in shower with frameless glass panels"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/965cff5c-c7a5-4e41-b978-72fc31a0550e.png")}
            >
              <img 
                src="/lovable-uploads/965cff5c-c7a5-4e41-b978-72fc31a0550e.png" 
                alt="Corner shower with black hardware and built-in seating"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png")}
            >
              <img 
                src="/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png" 
                alt="Tub-to-shower conversion with frameless glass doors"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png")}
            >
              <img 
                src="/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png" 
                alt="Elegant shower with pebble accent strip and frameless glass"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/7281360e-8ce3-43c7-890e-3f4b5f73e8a4.png")}
            >
              <img 
                src="/lovable-uploads/7281360e-8ce3-43c7-890e-3f4b5f73e8a4.png" 
                alt="Tub enclosure with black hardware and accent tile"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/04d04176-aad8-47c9-9880-5c8eed82308f.png")}
            >
              <img 
                src="/lovable-uploads/04d04176-aad8-47c9-9880-5c8eed82308f.png" 
                alt="Compact shower with frameless glass door"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png")}
            >
              <img 
                src="/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png" 
                alt="Corner shower enclosure with black hardware"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/9cb21233-99c8-47f9-a756-a38f36471524.png")}
            >
              <img 
                src="/lovable-uploads/9cb21233-99c8-47f9-a756-a38f36471524.png" 
                alt="Custom glass dining table with modern base"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/a038cf4c-a8a3-4089-b29d-40d9ca793fff.png")}
            >
              <img 
                src="/lovable-uploads/a038cf4c-a8a3-4089-b29d-40d9ca793fff.png" 
                alt="Walk-in shower with black hardware and subway tile"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/ec6a560e-8579-44ed-9f2a-ff3fa3889f09.png")}
            >
              <img 
                src="/lovable-uploads/ec6a560e-8579-44ed-9f2a-ff3fa3889f09.png" 
                alt="Large shower with partial glass panel and black fixtures"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/91755c9c-0083-4cb9-bb28-670bdbf4a700.png")}
            >
              <img 
                src="/lovable-uploads/91755c9c-0083-4cb9-bb28-670bdbf4a700.png" 
                alt="Narrow shower with herringbone accent tile and black hardware"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/60879279-461a-40ca-b2cd-78b1d7fa95b3.png")}
            >
              <img 
                src="/lovable-uploads/60879279-461a-40ca-b2cd-78b1d7fa95b3.png" 
                alt="Large custom shower enclosure with glass niches and built-in seating"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/722b5530-b688-42ad-8731-3cc0be1756ed.png")}
            >
              <img 
                src="/lovable-uploads/722b5530-b688-42ad-8731-3cc0be1756ed.png" 
                alt="Tub-to-shower conversion with sliding glass doors"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/60045135-144e-49b1-b017-133adce3a58d.png")}
            >
              <img 
                src="/lovable-uploads/60045135-144e-49b1-b017-133adce3a58d.png" 
                alt="Walk-in shower installation in progress with black hardware"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/4f6832d0-9951-4037-bfc2-c9153c280a12.png")}
            >
              <img 
                src="/lovable-uploads/4f6832d0-9951-4037-bfc2-c9153c280a12.png" 
                alt="Single panel shower door with chrome hardware"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/b7a46310-552a-43ed-9ed5-89fb8e2cd2b0.png")}
            >
              <img 
                src="/lovable-uploads/b7a46310-552a-43ed-9ed5-89fb8e2cd2b0.png" 
                alt="Marble shower with black hardware and built-in bench"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/482d4c2b-fc42-4a15-b833-a141e61e4d91.png")}
            >
              <img 
                src="/lovable-uploads/482d4c2b-fc42-4a15-b833-a141e61e4d91.png" 
                alt="L-shaped shower enclosure with marble tile and chrome hardware"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/182850ed-180a-4525-aee1-917367fff2bb.png")}
            >
              <img 
                src="/lovable-uploads/182850ed-180a-4525-aee1-917367fff2bb.png" 
                alt="Corner shower with subway tile and black fixtures"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/30ead577-c1b4-4057-a808-f7d0d612125f.png")}
            >
              <img 
                src="/lovable-uploads/30ead577-c1b4-4057-a808-f7d0d612125f.png" 
                alt="Luxury steam shower with dark tinted glass"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/32eaf66a-2f41-4fc8-92f4-2faf7cf74d56.png")}
            >
              <img 
                src="/lovable-uploads/32eaf66a-2f41-4fc8-92f4-2faf7cf74d56.png" 
                alt="Modern walk-in shower with penny tile accent and multiple shower heads"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setLightboxImage("/lovable-uploads/4940799d-2ddf-41b7-bd8c-22aa0ab12cdb.png")}
            >
              <img 
                src="/lovable-uploads/4940799d-2ddf-41b7-bd8c-22aa0ab12cdb.png" 
                alt="Rain glass shower doors with black hardware"
                className="w-full aspect-video object-cover"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
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
            <p className="font-semibold">Baja Glass & Mirror LLC</p>
            <p className="text-muted-foreground">4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
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
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Your Free Quote</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/shower-doors-las-vegas" onClick={() => window.scrollTo(0, 0)}>Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none" aria-describedby="lightbox-description">
          <DialogTitle className="sr-only">Gallery Image Lightbox</DialogTitle>
          <DialogDescription id="lightbox-description" className="sr-only">
            Enlarged view of gallery image for detailed viewing
          </DialogDescription>
          <div className="relative">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 z-50 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            {lightboxImage && (
              <img
                src={lightboxImage}
                alt="Gallery image"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;