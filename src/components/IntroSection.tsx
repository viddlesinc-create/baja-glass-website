import { Badge } from "@/components/ui/badge";
import { Shield, Award, Clock, Users, CheckCircle, Star } from "lucide-react";

const IntroSection = () => {
  const stats = [
    { value: "20+", label: "Years Experience", icon: Clock },
    { value: "1,000+", label: "Projects Completed", icon: CheckCircle },
    { value: "98%", label: "Customer Satisfaction", icon: Star },
    { value: "5", label: "Star Average Rating", icon: Award },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" aria-hidden="true" />
              Licensed & Bonded
            </Badge>
            <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
              <Award className="h-4 w-4 mr-2" aria-hidden="true" />
              First Responder Owned
            </Badge>
            <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
              <Users className="h-4 w-4 mr-2" aria-hidden="true" />
              Family Operated
            </Badge>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Las Vegas's Trusted Shower Door & Glass Experts
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                Since <strong>2009</strong>, <strong>Baja Glass & Mirror</strong> has been the trusted choice for 
                <strong> custom frameless shower doors</strong>, <strong>glass enclosures</strong>, and professional 
                <strong> glass installation</strong> throughout the <strong>Las Vegas Valley</strong>. As a 
                <strong> family-owned, first responder-operated company</strong>, we bring the same dedication to your 
                home that we bring to serving our community.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                From <strong>Henderson</strong> to <strong>Summerlin</strong>, <strong>Paradise</strong> to 
                <strong> Spring Valley</strong>, we've helped thousands of homeowners transform their bathrooms with 
                <strong> premium shower doors</strong>, <strong>custom glass enclosures</strong>, and 
                <strong> expert shower door installation</strong>. Whether you need a sleek <strong>frameless shower door</strong>, 
                a space-saving <strong>sliding glass door</strong>, or a luxurious <strong>steam shower enclosure</strong>, 
                our skilled installers deliver precision craftsmanship every time.
              </p>
              <p className="text-lg leading-relaxed">
                We use only <strong>tempered safety glass</strong>, <strong>premium hardware finishes</strong>, and 
                <strong> professional-grade installation techniques</strong>. Our <strong>shower door replacement</strong> services 
                handle everything from broken glass to hardware replacement. Experience the difference of working with 
                <strong> Las Vegas's premier glass company</strong>—where quality, integrity, and customer satisfaction 
                aren't just promises, they're our foundation.
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-6 text-center shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" aria-hidden="true" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
