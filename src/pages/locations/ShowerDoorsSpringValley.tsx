import LocationPageTemplate from "@/components/LocationPageTemplate";

const ShowerDoorsSpringValley = () => {
  return (
    <LocationPageTemplate
      city="Spring Valley"
      coordinates={{
        latitude: "36.1080",
        longitude: "-115.2453"
      }}
      heroImage="/lovable-uploads/1d372151-698c-4fdb-91f7-16d12469dcd1.png"
      description="Quality shower door installation throughout Spring Valley. Serving residential neighborhoods with reliable service, quality materials, and professional craftsmanship you can trust."
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
      testimonials={[
        {
          name: "Emily Watson",
          text: "Absolutely love our new frameless shower door! The clarity of the glass is incredible and the hardware is top quality. The Baja Glass team was knowledgeable and helpful.",
          rating: 5,
          service: "Frameless Shower Door"
        },
        {
          name: "Thomas Wright",
          text: "Baja Glass created a custom enclosure for our oddly-shaped shower. They measured multiple times to ensure perfect fit and the result exceeded our expectations.",
          rating: 5,
          service: "Custom Glass Work"
        },
        {
          name: "Christopher Lee",
          text: "Top-notch service and quality. The hinged door they installed operates perfectly and looks great. The team was professional and respectful of our home.",
          rating: 5,
          service: "Hinged Door Installation"
        }
      ]}
      projectImages={[
        {
          src: "/lovable-uploads/1d372151-698c-4fdb-91f7-16d12469dcd1.png",
          alt: "Semi-frameless shower door Spring Valley with chrome frame",
          caption: "Spring Valley - Semi-frameless with polished chrome hardware"
        },
        {
          src: "/lovable-uploads/965cff5c-c7a5-4e41-b978-72fc31a0550e.png",
          alt: "Custom shower enclosure Spring Valley precision installation",
          caption: "Rainbow Gardens - Custom neo-angle enclosure"
        },
        {
          src: "/lovable-uploads/8d2689e6-fd94-4a12-99a9-51ab76c77b0d.png",
          alt: "Frameless shower door Spring Valley brushed nickel hardware",
          caption: "Desert Inn - Frameless with brushed nickel handle"
        }
      ]}
      localInfo={{
        homeStyles: "Spring Valley's established neighborhoods feature ranch-style homes, two-story family residences, and newer developments. We install shower doors that match your home's character, from traditional framed doors to modern frameless designs.",
        hardWater: "Spring Valley water contains minerals common to the Las Vegas area. Daily squeegee use significantly reduces water spots. We offer protective coating options for easier long-term maintenance."
      }}
      metaDescription="Professional shower door installation in Spring Valley, NV. Quality materials and expert installation. Licensed, insured, 20+ years experience. Free quotes."
    />
  );
};

export default ShowerDoorsSpringValley;
