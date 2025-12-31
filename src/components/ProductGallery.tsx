import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProductGalleryProps {
  title: string;
  description: string;
  images: GalleryImage[];
}

const ProductGallery = ({ title, description, images }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  View Larger
                </span>
              </div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>
              View Full Gallery
            </Link>
          </Button>
        </div>

        {/* Lightbox Modal */}
        <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {selectedIndex !== null && (
              <div className="relative flex items-center justify-center min-h-[60vh]">
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 z-50 text-white/80 hover:text-white transition-colors p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>

                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="max-h-[80vh] max-w-full object-contain"
                />

                <button
                  onClick={goToNext}
                  className="absolute right-4 z-50 text-white/80 hover:text-white transition-colors p-2"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>

                {images[selectedIndex].caption && (
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-white text-sm bg-black/50 inline-block px-4 py-2 rounded">
                      {images[selectedIndex].caption}
                    </p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductGallery;
