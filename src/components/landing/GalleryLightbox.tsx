import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

/**
 * Fullscreen image lightbox. Split into its own chunk and lazy-loaded by
 * LandingGallery so radix-dialog (~heavy) is NOT in the landing page's initial
 * critical JS — it loads only when a visitor opens a gallery image.
 */
const GalleryLightbox = ({ images, selectedIndex, onClose, onPrevious, onNext }: GalleryLightboxProps) => (
  <Dialog open={selectedIndex !== null} onOpenChange={onClose}>
    <DialogContent className="max-w-5xl w-full p-0 bg-charcoal border-0">
      <DialogTitle className="sr-only">Installation gallery image</DialogTitle>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
          onClick={onPrevious}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
          onClick={onNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {selectedIndex !== null && (
          <div className="flex flex-col">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            {images[selectedIndex].caption && (
              <div className="p-4 text-center">
                <p className="text-white font-medium">{images[selectedIndex].caption}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </DialogContent>
  </Dialog>
);

export default GalleryLightbox;
