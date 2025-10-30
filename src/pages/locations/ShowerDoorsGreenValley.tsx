import LocationPageTemplate from "@/components/LocationPageTemplate";

const ShowerDoorsGreenValley = () => {
  return (
    <LocationPageTemplate
      city="Green Valley"
      coordinates={{
        latitude: "36.0672",
        longitude: "-115.0692"
      }}
      heroImage="/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png"
      description="Expert shower door installation throughout Green Valley. Serving this established Henderson community with quality craftsmanship and attention to detail that Green Valley homeowners expect."
      neighborhoods={[
        "Green Valley Ranch",
        "Green Valley South",
        "Green Valley North",
        "The District",
        "Paseos Village",
        "Tuscany Village",
        "Valle Verde",
        "Whitney Ranch"
      ]}
      testimonials={[
        {
          name: "Jennifer Martinez",
          text: "Baja Glass installed a beautiful frameless shower door in our Green Valley home. The installers were professional, on time, and the quality is outstanding. Highly recommend their services!",
          rating: 5,
          service: "Frameless Shower Door Installation"
        },
        {
          name: "Amanda Foster",
          text: "Beautiful semi-frameless door installation in our Green Valley South home. The team was punctual, professional, and completed the work in just a few hours. Love the modern look!",
          rating: 5,
          service: "Semi-Frameless Door"
        },
        {
          name: "Kevin Brown",
          text: "From initial consultation to final installation, Baja Glass was fantastic. They answered all our questions and provided fair pricing. Very happy Green Valley customer!",
          rating: 5,
          service: "Frameless Shower Door"
        }
      ]}
      projectImages={[
        {
          src: "/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png",
          alt: "Custom frameless shower enclosure Green Valley with low-iron glass",
          caption: "Green Valley Ranch - Custom enclosure with premium hardware"
        },
        {
          src: "/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png",
          alt: "Frameless shower door Green Valley brushed nickel finish",
          caption: "Paseos Village - Low-iron glass with brushed nickel"
        },
        {
          src: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png",
          alt: "Modern shower glass Green Valley with matte black clips",
          caption: "Tuscany Village - Frameless with contemporary matte black hardware"
        }
      ]}
      localInfo={{
        homeStyles: "Green Valley's master-planned community features well-maintained homes with diverse architectural styles from Southwest contemporary to traditional designs. Our installations complement the established character of these quality neighborhoods.",
        hardWater: "Green Valley benefits from Henderson's water treatment but hard water minerals remain present. We recommend protective coatings and provide detailed maintenance guidance to keep your shower glass looking pristine."
      }}
      metaDescription="Professional shower door installation in Green Valley, Henderson NV. Serving Green Valley Ranch. Expert installation with quality materials. Free quotes."
    />
  );
};

export default ShowerDoorsGreenValley;
