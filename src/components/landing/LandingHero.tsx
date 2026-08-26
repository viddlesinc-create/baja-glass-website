import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Star, Shield, Clock, Award } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import HeroImagePreload from "@/components/HeroImagePreload";
import { trackFormSubmission, trackCTAClick, trackPhoneCall } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import { useMathCaptcha } from "@/hooks/useMathCaptcha";

interface LandingHeroProps {
  onFormSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  projectType: string;
  message: string;
}

const COMPANY_PHONE = "+17023830779";

const projectTypes = [
  "Frameless Shower Door",
  "Sliding Shower Door", 
  "Hinged/Pivot Door",
  "Custom Enclosure",
  "Repair/Replacement",
  "Steam Shower",
  "Residential Glass Replacement",
  "Office Glass Enclosures",
  "Not Sure - Need Consultation"
];

export const LandingHero = ({ onFormSubmit }: LandingHeroProps) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const { captcha, userAnswer, setUserAnswer, validateCaptcha, resetCaptcha } = useMathCaptcha();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.city || !formData.projectType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Phone, City, Project Type).",
        variant: "destructive"
      });
      return;
    }

    if (!validateCaptcha()) {
      toast({
        title: "Incorrect Answer",
        description: "Please solve the math problem correctly.",
        variant: "destructive"
      });
      resetCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xqaydjpg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        trackFormSubmission({ projectType: formData.projectType, source: "landing_hero", city: formData.city });
        onFormSubmit?.(formData);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error Submitting Request",
        description: "Please try again or call us directly at (702) 383-0779.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleCTAClick = () => {
    trackCTAClick("get_quote", "landing_hero");
    setShowForm(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroImagePreload src="/images/completed-steam-shower-enclosure.webp" width={1382} />
      {/* Background Image with Overlay (LCP element — optimized + preloaded) */}
      <OptimizedImage
        src="/images/completed-steam-shower-enclosure.webp"
        alt=""
        width={1382}
        height={1726}
        sizes="100vw"
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/75" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span className="text-white font-medium">Since 2009</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="text-white font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="text-white font-medium">20+ Years Experience</span>
            </div>
          </div>

          {/* Main Headline — leads with exact-match query for ad relevance */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Frameless Shower Doors{" "}
            <span className="text-red-accent">in Las Vegas</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Custom-fit & expertly installed — free in-home measurement and a lifetime warranty on hardware
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
                className="border-2 border-white bg-white/20 text-white hover:bg-white hover:text-charcoal text-lg px-8 py-6 rounded-lg backdrop-blur-sm"
              >
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  onClick={() => trackPhoneCall("landing_hero")}
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
                <p className="text-white/90 mb-4">We'll contact you within 24-48 hours with your free quote.</p>
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  onClick={() => trackPhoneCall("landing_hero_success")}
                  className="text-red-accent hover:text-red-accent-light font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Or call now: (702) 383-0779
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-lg mx-auto text-left">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Get Your Free Quote in 24–48 Hours</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hero-name" className="text-white">Name *</Label>
                    <Input
                      id="hero-name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-white/90 border-0 text-charcoal"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-phone" className="text-white">Phone *</Label>
                    <Input
                      id="hero-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white/90 border-0 text-charcoal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hero-email" className="text-white">Email</Label>
                    <Input
                      id="hero-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-white/90 border-0 text-charcoal"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-city" className="text-white">City *</Label>
                    <Input
                      id="hero-city"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Las Vegas, Henderson, etc."
                      className="bg-white/90 border-0 text-charcoal"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="hero-projectType" className="text-white">Project Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="bg-white/90 border-0 text-charcoal">
                      <SelectValue placeholder="Select your shower door project" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="hero-message" className="text-white">Tell us about your project</Label>
                  <Textarea
                    id="hero-message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your shower space, style preferences, or any questions..."
                    className="bg-white/90 border-0 text-charcoal min-h-[80px]"
                  />
                </div>

                <div>
                  <Label htmlFor="hero-captcha" className="text-white">
                    Spam Check: {captcha.question} *
                  </Label>
                  <Input
                    id="hero-captcha"
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    required
                    className="bg-white/90 border-0 text-charcoal"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-red-accent hover:bg-red-accent-light text-white text-lg py-6"
                >
                  {isSubmitting ? "Submitting..." : "Start My Quote"}
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4 flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                We respect your privacy. No spam, ever.
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