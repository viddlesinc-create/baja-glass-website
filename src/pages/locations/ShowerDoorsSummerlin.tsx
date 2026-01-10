import { Link } from "react-router-dom";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const ShowerDoorsSummerlin = () => {
  const installationContent = (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Frameless Shower Door Installation Summerlin NV</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Looking for professional <strong>frameless shower door installation in Summerlin</strong>? Baja Glass provides expert installation services throughout Summerlin's luxury communities including The Ridges, Red Rock Country Club, and Tournament Hills. Our team specializes in high-end frameless systems with premium low-iron glass and designer hardware finishes.
      </p>
      <p className="text-muted-foreground mb-6">
        From <Link to="/shower-door-installation-las-vegas" className="text-primary underline hover:text-primary/80">professional shower door installation</Link> to <Link to="/custom-shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">custom shower doors</Link>, we handle projects of all sizes across Summerlin.
      </p>
    </div>
  );

  const citySpecificFaqs = [
    {
      question: "Do you offer frameless shower door installation in Summerlin?",
      answer: "Yes! Baja Glass provides expert frameless shower door installation throughout Summerlin including The Ridges, Red Rock Country Club, The Trails, and all Summerlin neighborhoods. We specialize in luxury installations with premium glass and hardware."
    },
    {
      question: "What makes Summerlin shower door installation unique?",
      answer: "Summerlin's luxury homes often feature large master bathrooms with unique layouts, high ceilings, and premium finishes. We offer specialized solutions including low-iron ultra-clear glass, brass hardware, and custom configurations for upscale spaces."
    },
    {
      question: "How do I find shower door installers near me in Summerlin?",
      answer: "Baja Glass serves all Summerlin communities with professional shower door installation. We offer free in-home consultations and measurements. Call (702) 383-0779 to schedule."
    }
  ];

  return (
    <LocationPageTemplate
      city="Summerlin"
      coordinates={{
        latitude: "36.1699",
        longitude: "-115.3267"
      }}
      heroImage="/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png"
      description="Luxury frameless shower door installation throughout Summerlin. Serving The Ridges, Red Rock Country Club, and all Summerlin neighborhoods with premium glass and expert installation."
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
          service: "Frameless Installation"
        }
      ]}
      projectImages={[
        {
          src: "/lovable-uploads/3ee9d065-d743-4ef3-906e-14fefa87f848.png",
          alt: "Luxury frameless shower door installation Summerlin with elegant tile work",
          caption: "The Ridges estate - Frameless enclosure with polished brass hardware"
        },
        {
          src: "/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png",
          alt: "Custom corner shower enclosure Summerlin installation with matte black hardware",
          caption: "Red Rock Country Club - Custom neo-angle with low-iron glass"
        },
        {
          src: "/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png",
          alt: "Premium frameless shower glass installation Summerlin master bath",
          caption: "The Trails - Steam-ready enclosure with architectural detailing"
        }
      ]}
      localInfo={{
        homeStyles: "Summerlin's luxury homes showcase Mediterranean, Spanish Revival, and contemporary modern architecture. Our frameless shower door installation services complement high-end finishes with low-iron glass options and premium hardware finishes including brass and matte black.",
        hardWater: "Summerlin's master-planned community features treated water, but hard water minerals are still present. We recommend hydrophobic coatings for easier maintenance and offer specialized care guidance for luxury glass installations."
      }}
      metaDescription="Frameless shower door installation in Summerlin, NV. Professional installers serving The Ridges, Red Rock Country Club. Premium low-iron glass. Free quotes: (702) 383-0779."
      additionalContent={installationContent}
      citySpecificFaqs={citySpecificFaqs}
    />
  );
};

export default ShowerDoorsSummerlin;
