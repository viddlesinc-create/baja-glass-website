import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion = ({ items, className = "" }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className={`py-16 bg-secondary/20 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-background rounded-lg shadow-sm overflow-hidden border border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-foreground hover:bg-secondary/30 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0 text-red-accent" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
