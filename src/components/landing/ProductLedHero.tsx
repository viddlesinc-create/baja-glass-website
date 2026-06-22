import { Button } from "@/components/ui/button";
import { Phone, Shield, Wrench, Sparkles } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import HeroImagePreload from "@/components/HeroImagePreload";
import { trackCTAClick } from "@/lib/analytics";

interface ProductLedHeroProps {
  onQuoteClick: () => void;
}

const COMPANY_PHONE = "+17023830779";
const COMPANY_PHONE_DISPLAY = "(702) 383-0779";

export const ProductLedHero = ({ onQuoteClick }: ProductLedHeroProps) => {
  const handleQuoteClick = () => {
    trackCTAClick("get_quote", "product_led_hero");
    onQuoteClick();
  };

  const handleCallClick = () => {
    trackCTAClick("call", "product_led_hero");
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      <HeroImagePreload src="/images/hero-shower-door-main.webp" width={1920} />
      {/* Background image (LCP element — optimized + preloaded) */}
      <OptimizedImage
        src="/images/hero-shower-door-main.webp"
        alt=""
        width={1920}
        height={1080}
        sizes="100vw"
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Frameless Shower Doors,{" "}
            <span className="text-red-accent">Custom-Built and Installed</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Heavy-glass enclosures designed for your bathroom, fabricated in our LV shop,
            and installed by licensed pros. Free in-home measurement, no high-pressure sales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              onClick={handleQuoteClick}
              size="lg"
              className="bg-red-accent hover:bg-red-accent-light text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get My Free Quote
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/20 text-white hover:bg-white hover:text-charcoal text-lg px-8 py-6 rounded-lg backdrop-blur-sm"
            >
              <a
                href={`tel:${COMPANY_PHONE}`}
                onClick={handleCallClick}
                aria-label={`Call Baja Glass at ${COMPANY_PHONE_DISPLAY}`}
                className="flex items-center gap-2"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {COMPANY_PHONE_DISPLAY}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="text-white text-sm font-medium">Licensed &amp; Insured Since 1999</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="text-white text-sm font-medium">First Responder Owned</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Wrench className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="text-white text-sm font-medium">Custom Glass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
