import { useState, lazy, Suspense } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import type { GalleryImage } from "./GalleryLightbox";

// Lazy so radix-dialog stays out of the landing page's initial critical JS;
// it loads only when a visitor opens the lightbox.
const GalleryLightbox = lazy(() => import("./GalleryLightbox"));

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
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox — mounted only after a thumbnail is opened, lazy-loaded */}
        {selectedIndex !== null && (
          <Suspense fallback={null}>
            <GalleryLightbox
              images={galleryImages}
              selectedIndex={selectedIndex}
              onClose={closeLightbox}
              onPrevious={goToPrevious}
              onNext={goToNext}
            />
          </Suspense>
        )}
      </div>
    </section>
  );
};
