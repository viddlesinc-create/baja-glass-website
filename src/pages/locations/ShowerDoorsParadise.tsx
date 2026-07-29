import { Link } from "react-router-dom";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const ShowerDoorsParadise = () => {
  return (
    <LocationPageTemplate
      city="Paradise"
      coordinates={{
        latitude: "36.0972",
        longitude: "-115.1461"
      }}
      heroImage="/lovable-uploads/92357ff9-fc77-40cb-b708-fb8fe634aa42.png"
      description="Expert shower door installation throughout Paradise. From the Las Vegas Strip area to Winchester and Paradise Valley, we deliver quality installations with professional service."
      additionalContent={
        <p className="text-lg text-muted-foreground">
          As part of our full range of <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower doors Las Vegas</Link> services, we bring the same frameless craftsmanship and precision installation to every Paradise neighborhood.
        </p>
      }
      neighborhoods={[
        "Paradise Valley",
        "Winchester",
        "University District",
        "Eastside",
        "Desert Shores",
        "Showcase Mall Area",
        "Sunrise Manor",
        "Flamingo Wash"
      ]}
      testimonials={[
        {
          name: "Sarah Thompson",
          text: "Professional service from start to finish. The team at Baja Glass helped us choose the perfect sliding door for our space. Installation was quick and clean. Worth every penny!",
          rating: 5,
          service: "Sliding Shower Door"
        },
        {
          name: "Nicole Adams",
          text: "Love our new sliding shower door! The installation was quick and the quality is excellent. The door slides smoothly and looks beautiful. Highly recommend Baja Glass.",
          rating: 5,
          service: "Sliding Shower Door"
        }
      ]}
      projectImages={[
        {
          src: "/lovable-uploads/1deef348-0e86-4da2-9bcb-2ca2964582bf.png",
          alt: "Sliding shower doors Paradise with smooth operation",
          caption: "Paradise Valley - Sliding bypass door with brushed nickel hardware"
        },
        {
          src: "/lovable-uploads/965cff5c-c7a5-4e41-b978-72fc31a0550e.png",
          alt: "Frameless shower installation Paradise NV",
          caption: "Winchester - Frameless inline panel with chrome finish"
        },
        {
          src: "/lovable-uploads/396df078-b884-4e72-809a-1ea98329d6e4.png",
          alt: "Modern shower door Paradise with matte black hardware",
          caption: "University District - Contemporary frameless with matte black accents"
        }
      ]}
      localInfo={{
        homeStyles: "Paradise features a mix of mid-century modern homes, contemporary apartments, and newer residential developments. We offer versatile shower door solutions from space-saving sliding doors for compact bathrooms to elegant frameless doors for master suites.",
        hardWater: "Paradise shares Las Vegas Valley's hard water challenges. Regular squeegee use and protective glass coatings help maintain clarity. We provide detailed maintenance instructions with every installation."
      }}
      metaDescription="Professional shower door installation in Paradise, NV. Serving Paradise Valley, Winchester. Fast service, quality materials, licensed & insured. Free quotes."
    />
  );
};

export default ShowerDoorsParadise;
