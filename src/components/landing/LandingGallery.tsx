import { useState, lazy, Suspense } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import type { GalleryImage } from "./GalleryLightbox";

// Lazy so radix-dialog stays out of the landing page's initial critical JS;
// it loads only when a visitor opens the lightbox.
const GalleryLightbox = lazy(() => import("./GalleryLightbox"));

const galleryImages: GalleryImage[] = [
  {
    src: "/images/completed-steam-shower-enclosure.webp",
    alt: "Modern frameless glass shower enclosure in Las Vegas bathroom",
    caption: "Modern Frameless Enclosure - Henderson"
  },
  {
    src: "/images/bypass-sliding-shower-doors-completed-project.webp",
    alt: "Elegant frameless shower door with chrome hardware",
    caption: "Elegant Chrome Hardware - Summerlin"
  },
  {
    src: "/images/custom-bathroom-mirror-polished-edges.webp",
    alt: "Custom frameless shower installation with clear glass",
    caption: "Custom Clear Glass - Las Vegas"
  },
  {
    src: "/images/custom-frameless-shower-door-installation.webp",
    alt: "Frameless shower door with brushed nickel finish",
    caption: "Brushed Nickel Finish - Paradise"
  },
  {
    src: "/images/bypass-sliding-glass-doors.webp",
    alt: "Luxurious frameless glass shower enclosure",
    caption: "Luxury Installation - Enterprise"
  },
  {
    src: "/images/contemporary-frameless-shower-low-iron-glass.webp",
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
