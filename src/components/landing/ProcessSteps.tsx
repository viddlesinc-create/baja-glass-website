import { FileText, Ruler, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "Request Quote",
    description: "Fill out our form or call for a free estimate"
  },
  {
    icon: Ruler,
    step: "2",
    title: "Free Measurement",
    description: "We visit your home and take precise measurements"
  },
  {
    icon: Wrench,
    step: "3",
    title: "Custom Fabrication",
    description: "Your shower door is built to your exact specifications"
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Professional Install",
    description: "Expert installation with cleanup and walkthrough"
  }
];

export const ProcessSteps = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-muted-foreground">
            From quote to installation in as little as 2 weeks
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Connector Line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                
                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="h-7 w-7 text-white" />
                </div>

                {/* Step Number */}
                <div className="inline-block bg-red-accent text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  Step {step.step}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
