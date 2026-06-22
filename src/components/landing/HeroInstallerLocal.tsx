import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import HeroImagePreload from "@/components/HeroImagePreload";
import { trackCTAClick, trackPhoneCall } from "@/lib/analytics";

interface HeroInstallerLocalProps {
  onScrollToQuote: () => void;
}

export const HeroInstallerLocal = ({ onScrollToQuote }: HeroInstallerLocalProps) => {
  const handleQuoteClick = () => {
    trackCTAClick("get_quote", "hero_installer_primary");
    onScrollToQuote();
  };

  return (
    <section className="relative text-white py-24 md:py-36 overflow-hidden">
      <HeroImagePreload src="/images/hero-shower-door-main.webp" width={1920} />
      {/* Background image (LCP element — optimized + preloaded) */}
      <OptimizedImage
        src="/images/hero-shower-door-main.webp"
        alt=""
        width={1920}
        height={1080}
        sizes="100vw"
        priority
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-charcoal/65" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 drop-shadow-md">
            Shower Door Installation,<br className="hidden md:block" /> Done by Las Vegas Pros
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow">
            Licensed, insured, owner-operated installers who answer the phone. Free in-home measurement, exact quote in writing, work that's still tight 10 years later.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleQuoteClick}
              size="lg"
              className="bg-red-accent hover:bg-red-accent-light text-white text-lg px-10 py-6"
            >
              Get My Free In-Home Measure
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal text-lg px-8 py-6"
            >
              <a
                href="tel:+17023830779"
                className="flex items-center gap-2"
                onClick={() => trackPhoneCall("hero_installer")}
              >
                <Phone className="h-5 w-5" />
                Call (702) 383-0779 — Speak to an Installer
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
