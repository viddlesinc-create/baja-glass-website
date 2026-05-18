import { Clock } from "lucide-react";

interface OptionRow {
  category: string;
  options: string[];
  note?: string;
}

const rows: OptionRow[] = [
  {
    category: "Glass Thickness",
    options: ["3/8\" tempered", "1/2\" tempered"],
    note: "3/8\" is the most popular standard. 1/2\" gives a more substantial feel on larger doors.",
  },
  {
    category: "Hardware Finishes",
    options: ["Chrome", "Brushed Nickel", "Matte Black", "Oil-Rubbed Bronze", "Brass"],
    note: "Hinges, handles, and clips all match. Bring a photo of your faucet and we'll match the finish.",
  },
  {
    category: "Glass Treatments",
    options: ["Clear", "Frosted (privacy)", "ShowerGuard coating"],
    note: "ShowerGuard is a factory-applied protective coating that resists hard-water etching and soap scum.",
  },
];

export const MaterialsOptions = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Materials &amp; Options, In Plain Language
            </h2>
            <p className="text-muted-foreground text-lg">
              Three decisions: how thick the glass is, what the hardware looks like, and
              whether you want a treatment on the glass itself. That's it.
            </p>
          </div>

          <div className="bg-secondary/20 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="text-left py-4 px-4 md:px-6 font-semibold w-1/3">Decision</th>
                  <th className="text-left py-4 px-4 md:px-6 font-semibold">Options</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}
                  >
                    <td className="py-4 px-4 md:px-6 font-semibold text-foreground align-top">
                      {row.category}
                    </td>
                    <td className="py-4 px-4 md:px-6 align-top">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {row.options.map((opt) => (
                          <span
                            key={opt}
                            className="inline-block bg-background border border-border text-foreground text-xs md:text-sm px-3 py-1 rounded-full"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                      {row.note && (
                        <p className="text-muted-foreground text-xs md:text-sm mt-2">
                          {row.note}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-background border border-border rounded-lg p-5 flex items-start gap-3">
            <Clock className="h-5 w-5 text-red-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-foreground mb-1">Realistic lead times</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most jobs are measured in week 1 and installed in week 3–4. Custom glass is
                fabricated to order — there is no "off-the-shelf" frameless. We'll give
                you a firm install date at the measure appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
