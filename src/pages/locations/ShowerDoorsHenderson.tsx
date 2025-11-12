import LocationPageTemplate from "@/components/LocationPageTemplate";
import { Helmet } from "react-helmet-async";

const ShowerDoorsHenderson = () => {
  const hendersonFaqs = [
    {
      question: "How much does frameless shower door installation cost in Henderson?",
      answer: "Frameless shower door installation in Henderson typically ranges from $800-$2,500 depending on size, glass type, and hardware finish. We provide free in-home measurements and detailed quotes."
    },
    {
      question: "Do you replace shower seals in Henderson homes?",
      answer: "Yes! We offer professional shower seal replacement throughout Henderson. This is a quick, cost-effective solution for leaking shower doors."
    },
    {
      question: "What glass thickness is best for Henderson's climate?",
      answer: "For Henderson homes, we recommend 3/8\" or 1/2\" tempered glass. We also suggest protective coatings due to Henderson's hard water and mineral content."
    },
    {
      question: "Which Henderson neighborhoods do you serve?",
      answer: "We serve all Henderson neighborhoods including Green Valley, Anthem, Seven Hills, Inspirada, Cadence, Lake Las Vegas, and MacDonald Ranch."
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
        description="Baja Glass is Henderson's trusted local expert for professional shower door and glass services. We specialize in designing and installing beautiful, high-quality custom glass shower doors in Henderson, from sleek frameless designs to elegant sliding systems. Whether you need a complete new installation or a simple glass shower door replacement in Henderson, our team ensures a flawless fit and finish for your bathroom."
        additionalContent={
          <>
            <h2 className="text-3xl font-bold mb-6">Our Henderson Shower Services</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                As the leading provider of <strong>shower enclosures in Henderson</strong>, we handle projects of all sizes. Our expertise in fitting <strong>frameless shower doors in Henderson</strong> homes has made us the go-to choice for modern bathroom renovations. We manage the entire process, from precise laser measurement to the final <strong>shower door installation in Henderson</strong>, guaranteeing a perfect, leak-free result.
              </p>
              <p>
                We also provide comprehensive repair services. If you're dealing with a leak, our <strong>shower seal Henderson</strong> replacement service is fast and effective. For more significant issues, we offer expert repair for all types of <strong>shower glass in Henderson</strong>, restoring the safety and beauty of your enclosure.
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
        metaDescription="Expert shower doors in Henderson, NV. Frameless, custom enclosures, repair. Serving Green Valley, Anthem, Seven Hills. Licensed, insured. Free quotes."
      />
    </>
  );
};

export default ShowerDoorsHenderson;
