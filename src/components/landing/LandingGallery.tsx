import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/lovable-uploads/22e931d0-6005-492b-ba38-baab99486f52.png",
    alt: "Modern frameless glass shower enclosure in Las Vegas bathroom",
    caption: "Modern Frameless Enclosure - Henderson"
  },
  {
    src: "/lovable-uploads/2145af91-ce61-458d-a311-72b26193aeb2.png",
    alt: "Elegant frameless shower door with chrome hardware",
    caption: "Elegant Chrome Hardware - Summerlin"
  },
  {
    src: "/lovable-uploads/bf541daa-269d-4a2f-88a1-ade3c731b28b.png",
    alt: "Custom frameless shower installation with clear glass",
    caption: "Custom Clear Glass - Las Vegas"
  },
  {
    src: "/lovable-uploads/9cfdfabc-5ef4-4012-b9f5-01271979a5c7.png",
    alt: "Frameless shower door with brushed nickel finish",
    caption: "Brushed Nickel Finish - Paradise"
  },
  {
    src: "/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png",
    alt: "Luxurious frameless glass shower enclosure",
    caption: "Luxury Installation - Enterprise"
  },
  {
    src: "/lovable-uploads/482d4c2b-fc42-4a15-b833-a141e61e4d91.png",
    alt: "Contemporary frameless shower with low-iron glass",
    caption: "Low-Iron Glass - Spring Valley"
  }
];

export const LandingGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Recent Installations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the quality and craftsmanship that sets Baja Glass apart. Every installation is custom-tailored to your bathroom.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
          <DialogContent className="max-w-5xl w-full p-0 bg-charcoal border-0">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {selectedIndex !== null && (
                <div className="flex flex-col">
                  <img
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  {galleryImages[selectedIndex].caption && (
                    <div className="p-4 text-center">
                      <p className="text-white font-medium">{galleryImages[selectedIndex].caption}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
