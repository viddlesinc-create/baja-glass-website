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
      heroImage="/images/bypass-sliding-glass-doors-4.webp"
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
      // TODO(owner): supply REAL verified testimonials for this city.
      // Previous entries were placeholder copy, not genuine reviews. The template
      // hides this section entirely while the list is empty — do not refill with
      // invented names.
      testimonials={[]}
      projectImages={[
        {
          src: "/images/custom-shower-enclosure-enterprise-premium-glass.webp",
          alt: "Sliding shower doors Paradise with smooth operation",
          caption: "Paradise Valley - Sliding bypass door with brushed nickel hardware"
        },
        {
          src: "/images/completed-steam-shower-enclosure-2.webp",
          alt: "Frameless shower installation Paradise NV",
          caption: "Winchester - Frameless inline panel with chrome finish"
        },
        {
          src: "/images/completed-steam-shower-enclosure-3.webp",
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
