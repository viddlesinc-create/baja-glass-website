import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Star, Shield, Clock } from "lucide-react";
import { trackPhoneClick, trackFormSubmission } from "@/lib/analytics";

export const FinalCTA = () => {
  const [formData, setFormData] = useState({
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
    trackFormSubmission({ projectType: "Frameless Shower Door", source: "landing_final_cta" });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handlePhoneClick = () => {
    trackPhoneClick("landing_final_cta");
  };

  return (
    <section id="get-quote" className="py-20 bg-gradient-to-br from-charcoal via-primary to-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Copy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Ready to Upgrade Your Bathroom?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get your free quote today and transform your bathroom with a stunning frameless shower door.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/90">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>4.6 Star Rating</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Shield className="h-5 w-5" />
                  <span>Licensed & Insured</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href="tel:+17023830779" 
                  onClick={handlePhoneClick}
                  className="flex items-center gap-3 text-white hover:text-red-accent transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  <span className="text-xl font-semibold">(702) 383-0779</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="h-6 w-6" />
                  <span>4280 W Reno Ave Ste A, Las Vegas, NV 89118</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Clock className="h-6 w-6" />
                  <span>Mon-Fri: 8am-5pm | Sat: By Appointment</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-2xl">
                  <h3 className="text-xl font-bold text-charcoal mb-6 text-center">
                    Get Your Free Quote
                  </h3>
                  <div className="space-y-4">
                    <Input
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-border"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-border"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-border"
                    />
                    <Textarea
                      placeholder="Tell us about your project (optional)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-border min-h-[100px]"
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-red-accent hover:bg-red-accent-light text-white text-lg py-6"
                    >
                      {isSubmitting ? "Sending..." : "Get Free Quote"}
                    </Button>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4 text-center">
                    We respond within 24 hours • No obligation
                  </p>
                </form>
              ) : (
                <div className="bg-white rounded-xl p-8 shadow-2xl text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    We'll contact you within 24 hours with your free quote.
                  </p>
                  <a 
                    href="tel:+17023830779" 
                    onClick={handlePhoneClick}
                    className="text-red-accent hover:text-red-accent-light font-semibold flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Or call now: (702) 383-0779
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
