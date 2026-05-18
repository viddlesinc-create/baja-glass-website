import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ShowcaseItem {
  name: string;
  image: string;
  alt: string;
  short: string;
  detail: string;
}

const items: ShowcaseItem[] = [
  {
    name: "Inline Frameless",
    image: "/lovable-uploads/9cfdfabc-5ef4-4012-b9f5-01271979a5c7.png",
    alt: "Inline frameless shower enclosure with clear glass and matte black hardware",
    short:
      "A single run of glass with a hinged door. The most common configuration for alcove showers.",
    detail:
      "One fixed panel and one swinging door, both heavy tempered glass. Works in alcove showers between two walls. Hardware in chrome, brushed nickel, matte black, oil-rubbed bronze, or brass.",
  },
  {
    name: "90° Corner Enclosure",
    image: "/lovable-uploads/482d4c2b-fc42-4a15-b833-a141e61e4d91.png",
    alt: "Frameless 90 degree corner shower enclosure with two glass panels meeting at the corner",
    short:
      "Two glass panels meeting at a corner. The signature look for corner showers and modern master bathrooms.",
    detail:
      "Two heavy-glass panels meeting at a 90° corner, with one door and one return panel. Edges are hand-polished where the glass meets so the seam disappears. Floor-to-ceiling options available.",
  },
  {
    name: "Pivot Single Door",
    image: "/lovable-uploads/2145af91-ce61-458d-a311-72b26193aeb2.png",
    alt: "Frameless pivot shower door with rain glass and matte black hardware",
    short:
      "One hinged door, no side panel. Often the right call for tub-to-shower conversions.",
    detail:
      "A single pivoting glass door, no fixed panel. Lighter visual footprint, great when wall geometry doesn't allow a return panel. Common for converted tub spaces and small primary bathrooms.",
  },
];

export const ProductShowcase = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Three Frameless Configurations We Build
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every shower space is different. Here are the three frameless layouts that
            cover most bathrooms — we custom-fabricate each one to your exact measurements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-background rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{item.short}</p>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="text-red-accent hover:text-red-accent-light font-semibold text-sm flex items-center gap-1 self-start"
                    aria-expanded={isOpen}
                    aria-controls={`showcase-detail-${index}`}
                  >
                    {isOpen ? "Hide details" : "See details"}
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                  {isOpen && (
                    <div
                      id={`showcase-detail-${index}`}
                      className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground leading-relaxed"
                    >
                      {item.detail}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
