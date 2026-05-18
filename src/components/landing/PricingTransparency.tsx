interface PriceTier {
  name: string;
  description: string;
  price: string;
}

const tiers: PriceTier[] = [
  {
    name: "Standard inline frameless enclosure",
    description: "Single panel + door, alcove showers.",
    price: "$1,500–$2,200 installed",
  },
  {
    name: "90° corner enclosure",
    description: "Two panels meeting at a corner, with door.",
    price: "$2,200–$3,000 installed",
  },
  {
    name: "Steam shower enclosure (sealed top)",
    description: "Full-height enclosure with sealed transom for steam.",
    price: "$3,500–$5,500 installed",
  },
  {
    name: "Custom radius / curved glass",
    description: "Bent or radius glass for unusual layouts.",
    price: "Quote required",
  },
];

export const PricingTransparency = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Honest Price Ranges
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not "starting at." These are the real installed-price ranges most projects
              fall into. The free measure appointment confirms the exact number.
            </p>
          </div>

          <div className="space-y-4">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-lg p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{tier.description}</p>
                </div>
                <div className="md:text-right">
                  <span className="text-xl md:text-2xl font-bold text-red-accent">
                    {tier.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8 max-w-2xl mx-auto leading-relaxed">
            Final pricing depends on glass thickness, hardware finish, and site conditions
            (wall straightness, existing tile, hardware accessibility). The free in-home
            measure confirms the exact quote — no obligation, no pressure.
          </p>
        </div>
      </div>
    </section>
  );
};
