import { Link } from "react-router-dom";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const ShowerDoorsSpringValley = () => {
  return (
    <LocationPageTemplate
      city="Spring Valley"
      coordinates={{
        latitude: "36.1080",
        longitude: "-115.2453"
      }}
      heroImage="/images/complete-hinged-shower-enclosure.webp"
      description="Quality shower door installation throughout Spring Valley. Serving residential neighborhoods with reliable service, quality materials, and professional craftsmanship you can trust."
      additionalContent={
        <p className="text-lg text-muted-foreground">
          As part of our complete range of <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower doors Las Vegas</Link> services, we bring the same precision installation and quality materials to every Spring Valley neighborhood.
        </p>
      }
      neighborhoods={[
        "Spring Valley",
        "Desert Inn",
        "Rainbow Gardens",
        "Chinatown",
        "Valley View",
        "Decatur",
        "Jones",
        "Buffalo"
      ]}
      // TODO(owner): supply REAL verified testimonials for this city.
      // Previous entries were placeholder copy, not genuine reviews. The template
      // hides this section entirely while the list is empty — do not refill with
      // invented names.
      testimonials={[]}
      projectImages={[
        {
          src: "/images/complete-hinged-shower-enclosure.webp",
          alt: "Semi-frameless shower door Spring Valley with chrome frame",
          caption: "Spring Valley - Semi-frameless with polished chrome hardware"
        },
        {
          src: "/images/completed-steam-shower-enclosure-2.webp",
          alt: "Custom shower enclosure Spring Valley precision installation",
          caption: "Rainbow Gardens - Custom neo-angle enclosure"
        },
        {
          src: "/images/bypass-sliding-shower-doors-completed-project-2.webp",
          alt: "Frameless shower door Spring Valley brushed nickel hardware",
          caption: "Desert Inn - Frameless with brushed nickel handle"
        }
      ]}
      localInfo={{
        homeStyles: "Spring Valley's established neighborhoods feature ranch-style homes, two-story family residences, and newer developments. We install shower doors that match your home's character, from traditional framed doors to modern frameless designs.",
        hardWater: "Spring Valley water contains minerals common to the Las Vegas area. Daily squeegee use significantly reduces water spots. We offer protective coating options for easier long-term maintenance."
      }}
      metaDescription="Professional shower door installation in Spring Valley, NV. Quality materials and expert installation. Licensed, insured, serving Las Vegas since 2009. Free quotes."
    />
  );
};

export default ShowerDoorsSpringValley;
