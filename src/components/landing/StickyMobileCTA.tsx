import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Camera } from "lucide-react";
import { trackCTAClick, trackPhoneCall } from "@/lib/analytics";

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
          className="flex-1 min-w-0 px-2 bg-red-accent hover:bg-red-accent-light text-white font-semibold text-sm py-6"
        >
          <a
            href="tel:+17023830779"
            onClick={() => trackPhoneCall("sticky_mobile_cta")}
            className="flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Button
          onClick={handleQuoteClick}
          className="flex-1 min-w-0 px-2 gap-1.5 bg-white text-charcoal hover:bg-white/90 font-semibold text-sm py-6 whitespace-nowrap"
        >
          <MessageSquare className="h-4 w-4" />
          Get Quote
        </Button>
        {/* Text-tap tracking is a GTM link-click trigger on "sms:" — no dataLayer push here. */}
        <Button
          asChild
          className="flex-1 min-w-0 px-2 bg-white text-charcoal hover:bg-white/90 font-semibold text-sm py-6"
        >
          <a
            href="sms:+17023830779?&body=Photo%20for%20Baja%20Glass%20quote%20(web)%20-%20"
            className="flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <Camera className="h-4 w-4" />
            Text Photo
          </a>
        </Button>
      </div>
    </div>
  );
};
