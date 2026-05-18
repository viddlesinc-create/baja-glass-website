import { Sparkles, Droplets, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Sparkles,
    title: "Sleeker Look",
    description:
      "Clean, uninterrupted glass with a modern aesthetic. No bulky metal frames breaking up the view of your tile.",
  },
  {
    icon: Droplets,
    title: "Easier to Clean",
    description:
      "No metal channels to trap soap scum, mildew, or hard-water residue. Wipe the glass and you're done.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description:
      "Heavy 3/8\" or 1/2\" tempered glass with hand-polished edges and solid hardware that survives daily use.",
  },
];

export const ProblemAgitate = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Why Frameless Beats Framed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Framed doors are cheaper up front, but the metal frame is where every
            shower-door headache starts. Frameless solves three problems at once.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-0 shadow-lg text-center bg-background">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="h-8 w-8 text-red-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
