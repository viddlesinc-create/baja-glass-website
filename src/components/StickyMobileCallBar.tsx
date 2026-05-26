import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

/** Mobile-only fixed bottom bar: call-primary, quote secondary. */
const StickyMobileCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-charcoal border-t border-white/10 p-3 shadow-2xl">
      <div className="flex gap-2">
        <Button asChild className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold py-6">
          <a href="tel:+17023830779" className="flex items-center justify-center gap-2" aria-label="Call Baja Glass at (702) 383-0779">
            <Phone className="h-5 w-5" />
            Call (702) 383-0779
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1 bg-white text-charcoal font-semibold py-6">
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="flex items-center justify-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Quote
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCallBar;
