import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Star, Shield, Clock, Award } from "lucide-react";
import { trackPhoneClick, trackFormSubmission, trackCTAClick } from "@/lib/analytics";

interface LandingHeroProps {
  onFormSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const LandingHero = ({ onFormSubmit }: LandingHeroProps) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackFormSubmission({ projectType: "Frameless Shower Door", source: "landing_hero" });
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    onFormSubmit?.(formData);
  };

  const handlePhoneClick = () => {
    trackPhoneClick("landing_hero");
  };

  const handleCTAClick = () => {
    trackCTAClick("get_quote", "landing_hero");
    setShowForm(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/22e931d0-6005-492b-ba38-baab99486f52.png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/75" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-white font-medium">4.6 Stars</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="h-5 w-5 text-white" />
              <span className="text-white font-medium">20+ Years Experience</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Transform Your Bathroom with Premium{" "}
            <span className="text-red-accent">Frameless Shower Doors</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Expert Installation in Las Vegas • Free In-Home Measurement • Lifetime Warranty on Hardware
          </p>

          {/* CTA Buttons or Form */}
          {!showForm && !submitted ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="bg-red-accent hover:bg-red-accent-light text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Your Free Quote
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-6 rounded-lg"
              >
                <a 
                  href="tel:+17023830779" 
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: (702) 383-0779
                </a>
              </Button>
            </div>
          ) : submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-white/90 mb-4">We'll contact you within 24 hours with your free quote.</p>
                <a 
                  href="tel:+17023830779" 
                  onClick={handlePhoneClick}
                  className="text-red-accent hover:text-red-accent-light font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Or call now: (702) 383-0779
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Get Your Free Quote</h3>
              <div className="space-y-4">
                <Input
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/90 border-0"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/90 border-0"
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/90 border-0"
                />
                <Textarea
                  placeholder="Tell us about your project (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/90 border-0 min-h-[80px]"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-red-accent hover:bg-red-accent-light text-white text-lg py-6"
                >
                  {isSubmitting ? "Sending..." : "Get Free Quote"}
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4 flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                We respond within 24 hours
              </p>
            </form>
          )}

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-white/90">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">500+</p>
              <p>Installations Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">Same Day</p>
              <p>Quote Response</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">Lifetime</p>
              <p>Hardware Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
