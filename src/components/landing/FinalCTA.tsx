import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, Star, Shield, Clock } from "lucide-react";
import { trackPhoneClick, trackFormSubmission } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import { useMathCaptcha } from "@/hooks/useMathCaptcha";

export const FinalCTA = () => {
  const [formData, setFormData] = useState({
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
    trackFormSubmission({ projectType: formData.projectType, source: "landing_final_cta", city: formData.city });
    
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
                  <span>Mon-Fri: 8am-4pm</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-2xl">
                  <h3 className="text-xl font-bold text-charcoal mb-6 text-center">
                    Get Your Free Quote in 24–48 Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="lp-name" className="text-charcoal">Name *</Label>
                        <Input
                          id="lp-name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="border-border"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lp-phone" className="text-charcoal">Phone *</Label>
                        <Input
                          id="lp-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="border-border"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="lp-email" className="text-charcoal">Email</Label>
                        <Input
                          id="lp-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-border"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lp-city" className="text-charcoal">City *</Label>
                        <Input
                          id="lp-city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          placeholder="Las Vegas, Henderson, etc."
                          required
                          className="border-border"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="lp-projectType" className="text-charcoal">Project Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger className="border-border">
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
                      <Label htmlFor="lp-message" className="text-charcoal">Tell us about your project</Label>
                      <Textarea
                        id="lp-message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Describe your shower space, style preferences, or any questions..."
                        className="border-border min-h-[80px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lp-captcha" className="text-charcoal">
                        Spam Check: {captcha.question} *
                      </Label>
                      <Input
                        id="lp-captcha"
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Enter your answer"
                        required
                        className="border-border"
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
                  <p className="text-muted-foreground text-sm mt-4 text-center">
                    We respect your privacy. No spam, ever.
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
                    We'll contact you within 24-48 hours with your free quote.
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