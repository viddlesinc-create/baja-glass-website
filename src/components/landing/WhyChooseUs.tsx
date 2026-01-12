import { Ruler, Layers, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Ruler,
    title: "Precision Measurement",
    description: "Laser-accurate measurements ensure a perfect fit for your unique bathroom layout. No gaps, no guesswork."
  },
  {
    icon: Layers,
    title: "Premium Materials",
    description: "3/8\" or 1/2\" tempered safety glass with premium hardware in chrome, brushed nickel, or matte black finishes."
  },
  {
    icon: Award,
    title: "Expert Installation",
    description: "Licensed, insured professionals with 20+ years of experience. Clean, careful installation guaranteed."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Why Choose Baja Glass?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 20 years of experience delivering premium frameless shower doors across the Las Vegas Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg text-center bg-background">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-red-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
