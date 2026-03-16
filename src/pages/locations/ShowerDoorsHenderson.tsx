import LocationPageTemplate from "@/components/LocationPageTemplate";
import { Helmet } from "react-helmet-async";

const ShowerDoorsHenderson = () => {
  const hendersonFaqs = [
    {
      question: "How much does shower door installation in Henderson cost?",
      answer: "Shower door installation in Henderson typically ranges from $800-$2,500 depending on type (frameless, semi-frameless, sliding), glass thickness, and hardware finish. We provide free in-home measurements and detailed quotes with no hidden fees."
    },
    {
      question: "Do you offer shower door replacement in Henderson?",
      answer: "Yes! We provide comprehensive shower door replacement in Henderson including broken glass panel swaps, roller and track upgrades, seal replacement, and full hardware upgrades. Same-day scheduling available for emergencies."
    },
    {
      question: "What's the best type of frameless shower door for Henderson homes?",
      answer: "For Henderson homes, we recommend 3/8\" or 1/2\" tempered glass with protective coatings due to Henderson's hard water and mineral content. Low-iron glass offers superior clarity for luxury bathrooms."
    },
    {
      question: "Do you install glass shower doors in Green Valley and Anthem?",
      answer: "Absolutely! We serve all Henderson neighborhoods including Green Valley, Anthem, Seven Hills, Inspirada, Cadence, Lake Las Vegas, and MacDonald Ranch with professional shower door installation and replacement."
    },
    {
      question: "How long does shower door installation in Henderson take?",
      answer: "Most Henderson shower door installations are completed in 2-4 hours for standard configurations. Custom enclosures may take longer. We schedule at your convenience and complete most installs in a single visit."
    }
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": hendersonFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      <LocationPageTemplate
        city="Henderson"
        coordinates={{
          latitude: "36.0395",
          longitude: "-114.9817"
        }}
        heroImage="/lovable-uploads/9642038d-f5d9-4f9d-8096-46dc1eb70052.png"
        description="Henderson's trusted expert for custom shower doors. Frameless, sliding, and semi-frameless installations and replacements. Professional service with perfect results."
        additionalContent={
          <>
            <h2 className="text-3xl font-bold mb-6">Shower Door Installation Henderson NV</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                As the leading provider of <strong>shower door installation in Henderson</strong>, we handle projects of all sizes. Our expertise in fitting <strong>frameless shower doors in Henderson</strong> homes has made us the go-to choice for modern bathroom renovations. We manage the entire process, from precise laser measurement to professional installation, guaranteeing a perfect, leak-free result.
              </p>
              <p>
                Looking for <strong>glass shower doors in Henderson</strong>? We offer a complete range including frameless, semi-frameless, sliding, and custom enclosures. Our team specializes in premium installations for Green Valley, Anthem, Seven Hills, and all Henderson neighborhoods.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Shower Door Repair Henderson</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Need <strong>shower door repair in Henderson</strong>? We provide fast, reliable service for all types of shower door issues. Our comprehensive <strong>Henderson shower door repair</strong> services include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Broken or cracked glass panel replacement</li>
                <li>Sliding door roller and track repair</li>
                <li>Shower seal and sweep replacement</li>
                <li>Loose hinge and hardware fixes</li>
                <li>Leak diagnosis and repair</li>
              </ul>
              <p>
                For emergency <strong>shower glass repair in Henderson</strong>, call us at (702) 383-0779 for same-day scheduling.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Frameless Shower Doors Henderson</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <strong>Frameless shower doors in Henderson</strong> offer a modern, open aesthetic that complements contemporary bathroom designs. Our frameless options feature thick tempered glass (3/8" or 1/2"), premium hardware in your choice of finishes, and precise installation for a watertight seal.
              </p>
              <p>
                Henderson's upscale communities like Seven Hills, Anthem Country Club, and MacDonald Ranch often choose frameless designs to maximize their bathroom's elegance. We also offer protective coatings to combat Henderson's hard water conditions.
              </p>
            </div>
          </>
        }
        citySpecificFaqs={hendersonFaqs}
        neighborhoods={[
          "Green Valley",
          "Anthem",
          "Seven Hills",
          "Inspirada",
          "Cadence",
          "Lake Las Vegas",
          "MacDonald Ranch",
          "Anthem Country Club"
        ]}
        testimonials={[
          {
            name: "Jennifer Martinez",
            text: "Baja Glass installed a beautiful frameless shower door in our Henderson home. The installers were professional, on time, and the quality is outstanding. Highly recommend!",
            rating: 5,
            service: "Frameless Shower Door"
          },
          {
            name: "Amanda Foster",
            text: "Beautiful semi-frameless door installation. The team was punctual, professional, and the installation was done in a few hours. Our shower looks modern and elegant now.",
            rating: 5,
            service: "Semi-Frameless Door"
          },
          {
            name: "Kevin Brown",
            text: "From the initial consultation to final installation, Baja Glass was fantastic. They answered all our questions, provided fair pricing, and delivered excellent work.",
            rating: 5,
            service: "Frameless Shower Door"
          }
        ]}
        projectImages={[
          {
            src: "/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png",
            alt: "Custom frameless shower enclosure Henderson installation with premium hardware",
            caption: "Custom enclosure in Green Valley - Low-iron glass with matte black hardware"
          },
          {
            src: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png",
            alt: "Frameless shower doors Henderson Seven Hills by Baja Glass",
            caption: "Frameless installation in Seven Hills - Brushed nickel finish"
          },
          {
            src: "/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png",
            alt: "Modern shower glass Henderson Anthem with clean lines",
            caption: "Anthem project - Ultra-clear glass with chrome hardware"
          }
        ]}
        localInfo={{
          homeStyles: "Henderson homes feature diverse architectural styles from Mediterranean and Spanish Revival in Seven Hills to modern contemporary in Anthem and Inspirada. We customize shower doors to complement your home's unique design aesthetic.",
          hardWater: "Henderson's water quality benefits from Lake Las Vegas and local treatment. We recommend protective coatings to minimize mineral deposits and offer maintenance guidance specific to your water conditions."
        }}
        metaDescription="Expert shower door installation & repair in Henderson, NV. Frameless, glass shower doors, custom enclosures. Serving Green Valley, Anthem, Seven Hills. Free quotes."
      />
    </>
  );
};

export default ShowerDoorsHenderson;
