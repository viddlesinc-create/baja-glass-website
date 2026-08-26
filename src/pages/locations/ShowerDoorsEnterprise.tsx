import { Link } from "react-router-dom";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const ShowerDoorsEnterprise = () => {
  return (
    <LocationPageTemplate
      city="Enterprise"
      coordinates={{
        latitude: "36.0253",
        longitude: "-115.2422"
      }}
      heroImage="/lovable-uploads/92357ff9-fc77-40cb-b708-fb8fe634aa42.png"
      description="Professional shower door installation in Enterprise. From compact bathrooms to spacious master suites, we provide quality installations tailored to your space and budget."
      additionalContent={
        <p className="text-lg text-muted-foreground">
          Enterprise homeowners have access to our full range of <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower doors Las Vegas</Link> options — from frameless enclosures to steam showers — with the same local expertise and free in-home estimates.
        </p>
      }
      neighborhoods={[
        "Enterprise",
        "Southwest",
        "Mountain's Edge",
        "Silverado Ranch",
        "Desert Foothills",
        "Southern Highlands",
        "Fort Apache",
        "Blue Diamond"
      ]}
      // TODO(owner): supply REAL verified testimonials for this city.
      // Previous entries were placeholder copy, not genuine reviews. The template
      // hides this section entirely while the list is empty — do not refill with
      // invented names.
      testimonials={[]}
      projectImages={[
        {
          src: "/lovable-uploads/4931cd4a-c80f-424c-9069-47f88a7b344e.png",
          alt: "Custom shower enclosure Enterprise with premium glass",
          caption: "Mountain's Edge - Custom steam enclosure with ceiling"
        },
        {
          src: "/lovable-uploads/1deef348-0e86-4da2-9bcb-2ca2964582bf.png",
          alt: "Sliding shower door Enterprise with smooth rollers",
          caption: "Silverado Ranch - Sliding door with quiet roller system"
        },
        {
          src: "/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png",
          alt: "Frameless corner shower Enterprise with black hardware",
          caption: "Southern Highlands border - Frameless corner with matte black"
        }
      ]}
      localInfo={{
        homeStyles: "Enterprise encompasses diverse housing from affordable family homes to upscale properties near Southern Highlands. We offer solutions for every budget and style, ensuring quality regardless of project scope.",
        hardWater: "Enterprise water quality varies by neighborhood. We provide care instructions specific to your water conditions and offer protective coatings that make maintenance easier while preserving glass clarity."
      }}
      metaDescription="Professional shower door installation in Enterprise, NV. Serving Southwest Las Vegas. Quality installations at fair prices. Licensed, insured. Free quotes."
    />
  );
};

export default ShowerDoorsEnterprise;
