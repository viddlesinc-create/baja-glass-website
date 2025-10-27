import LocationPageTemplate from "@/components/LocationPageTemplate";

const ShowerDoorsSummerlin = () => {
  return (
    <LocationPageTemplate
      city="Summerlin"
      coordinates={{
        latitude: "36.1699",
        longitude: "-115.3267"
      }}
      heroImage="/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png"
      description="Luxury shower door installations throughout Summerlin. Serving The Ridges, Red Rock Country Club, and all Summerlin neighborhoods with premium frameless and custom enclosures."
      neighborhoods={[
        "The Ridges",
        "Red Rock Country Club",
        "The Trails",
        "The Hills",
        "Summerlin Centre",
        "Sun City Summerlin",
        "The Pueblo",
        "Tournament Hills"
      ]}
      testimonials={[
        {
          name: "Robert Chen",
          text: "We hired Baja Glass for our Summerlin bathroom remodel. The custom enclosure they designed fits perfectly and looks amazing. Great communication throughout the process.",
          rating: 5,
          service: "Custom Shower Enclosure"
        },
        {
          name: "James Miller",
          text: "Worked with Baja Glass on a challenging neo-angle shower enclosure. They handled the complex angles perfectly and the result is stunning. True professionals.",
          rating: 5,
          service: "Custom Enclosure"
        },
        {
          name: "Daniel Park",
          text: "Replaced our old framed door with a new frameless one. The difference is night and day. The bathroom feels more spacious and modern. Great job!",
          rating: 5,
          service: "Shower Door Replacement"
        }
      ]}
      projectImages={[
        {
          src: "/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png",
          alt: "Luxury frameless shower door Summerlin with elegant tile work",
          caption: "The Ridges estate - Frameless enclosure with polished brass hardware"
        },
        {
          src: "/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png",
          alt: "Custom corner shower enclosure Summerlin with matte black hardware",
          caption: "Red Rock Country Club - Custom neo-angle with low-iron glass"
        },
        {
          src: "/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png",
          alt: "Premium shower glass installation Summerlin master bath",
          caption: "The Trails - Steam-ready enclosure with architectural detailing"
        }
      ]}
      localInfo={{
        homeStyles: "Summerlin's luxury homes showcase Mediterranean, Spanish Revival, and contemporary modern architecture. Our custom shower doors complement high-end finishes with low-iron glass options and premium hardware finishes including brass and matte black.",
        hardWater: "Summerlin's master-planned community features treated water, but hard water minerals are still present. We recommend hydrophobic coatings for easier maintenance and offer specialized care guidance for luxury glass installations."
      }}
      metaDescription="Luxury shower door installation in Summerlin, NV. Serving The Ridges, Red Rock Country Club, and all Summerlin neighborhoods. Premium frameless doors with low-iron glass. Free quotes."
    />
  );
};

export default ShowerDoorsSummerlin;
