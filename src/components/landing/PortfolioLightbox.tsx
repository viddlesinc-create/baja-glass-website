import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PortfolioLightboxProps {
  images: LightboxImage[];
  /** Active image index (always valid — the parent only mounts this when open). */
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

/**
 * Shared fullscreen portfolio lightbox for the standalone /lp/* landing pages.
 * Split into its own chunk and lazy-loaded by each page so radix-dialog is NOT
 * in the landing page's initial JS — it loads only when a visitor opens an image.
 */
const PortfolioLightbox = ({ images, index, onClose, onPrev, onNext }: PortfolioLightboxProps) => (
  <Dialog open onOpenChange={(open) => !open && onClose()}>
    <DialogContent className="max-w-5xl w-full p-0 bg-charcoal border-0 overflow-hidden">
      <DialogTitle className="sr-only">Portfolio image</DialogTitle>
      <div className="relative">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="w-full max-h-[80vh] object-contain"
        />
        <button onClick={onClose} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
        <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors" aria-label="Previous">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={onNext} className="absolute right-14 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors" aria-label="Next">
          <ChevronRight className="h-5 w-5" />
        </button>
        {images[index].caption && (
          <div className="px-6 py-4">
            <p className="text-white/80 text-sm">{images[index].caption}</p>
          </div>
        )}
      </div>
    </DialogContent>
  </Dialog>
);

export default PortfolioLightbox;
