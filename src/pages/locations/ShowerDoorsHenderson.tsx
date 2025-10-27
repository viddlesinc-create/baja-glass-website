import LocationPageTemplate from "@/components/LocationPageTemplate";

const ShowerDoorsHenderson = () => {
  return (
    <LocationPageTemplate
      city="Henderson"
      coordinates={{
        latitude: "36.0395",
        longitude: "-114.9817"
      }}
      heroImage="/lovable-uploads/92357ff9-fc77-40cb-b708-fb8fe634aa42.png"
      description="Professional shower door installation throughout Henderson. From Green Valley to Anthem and Seven Hills, we bring precision measurements and quality craftsmanship to your home."
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
          alt: "Custom frameless shower enclosure in Henderson home with premium hardware",
          caption: "Custom enclosure in Green Valley - Low-iron glass with matte black hardware"
        },
        {
          src: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png",
          alt: "Frameless shower door Henderson installation by Baja Glass",
          caption: "Frameless installation in Seven Hills - Brushed nickel finish"
        },
        {
          src: "/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png",
          alt: "Modern shower glass Henderson with clean lines",
          caption: "Anthem project - Ultra-clear glass with chrome hardware"
        }
      ]}
      localInfo={{
        homeStyles: "Henderson homes feature diverse architectural styles from Mediterranean and Spanish Revival in Seven Hills to modern contemporary in Anthem and Inspirada. We customize shower doors to complement your home's unique design aesthetic.",
        hardWater: "Henderson's water quality benefits from Lake Las Vegas and local treatment. We recommend protective coatings to minimize mineral deposits and offer maintenance guidance specific to your water conditions."
      }}
      metaDescription="Professional shower door installation in Henderson, NV. Serving Green Valley, Anthem, Seven Hills, and all Henderson neighborhoods. Licensed, insured, 20+ years experience. Free quotes."
    />
  );
};

export default ShowerDoorsHenderson;
