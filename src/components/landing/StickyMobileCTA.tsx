import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

interface StickyMobileCTAProps {
  onQuoteClick: () => void;
}

export const StickyMobileCTA = ({ onQuoteClick }: StickyMobileCTAProps) => {

  const handleQuoteClick = () => {
    trackCTAClick("get_quote", "sticky_mobile_cta");
    onQuoteClick();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-charcoal border-t border-white/10 p-3 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex gap-2">
        <Button
          asChild
          className="flex-1 bg-red-accent hover:bg-red-accent-light text-white font-semibold py-6"
        >
          <a
            href="tel:+17023830779"
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </Button>
        <Button
          onClick={handleQuoteClick}
          className="flex-1 bg-white text-charcoal hover:bg-white/90 font-semibold py-6"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          Get Quote
        </Button>
      </div>
    </div>
  );
};
