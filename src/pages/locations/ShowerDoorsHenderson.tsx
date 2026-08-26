import { Link } from "react-router-dom";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { Helmet } from "react-helmet-async";

const ShowerDoorsHenderson = () => {
  const hendersonFaqs = [
    {
      question: "How much does shower door installation in Henderson cost?",
      answer: "Shower door installation in Henderson typically ranges from $800-$2,500 depending on type (frameless, semi-frameless, sliding), glass thickness, and hardware finish. We provide free in-home measurements and detailed quotes with no hidden fees."
    },
    {
      question: "Do you offer shower door replacement in Henderson?",
      answer: "Yes! We replace outdated framed and sliding doors with brand-new custom glass — a full upgrade, not a repair. We remove and dispose of your old door, take precise laser measurements, and install a new frameless or semi-frameless system built for your opening. We don't repair or service other brands' hardware."
    },
    {
      question: "Who installs shower doors in Henderson?",
      answer: "Baja Glass & Mirror is a locally owned Las Vegas glass company whose installers handle Henderson projects daily, from Green Valley to Anthem. Every door is custom-measured in your home, fabricated from tempered glass, and installed by our own team — never subcontractors."
    },
    {
      question: "What's the best type of frameless shower door for Henderson homes?",
      answer: "For Henderson homes, we recommend 3/8\" or 1/2\" tempered glass with protective coatings due to Henderson's hard water and mineral content. Low-iron glass offers superior clarity for luxury bathrooms."
    },
    {
      question: "Do you install glass shower doors in Green Valley and Anthem?",
      answer: "Absolutely! We serve all Henderson neighborhoods including Green Valley, Anthem, Seven Hills, Inspirada, Cadence, Lake Las Vegas, and MacDonald Ranch with professional shower door installation and replacement."
    },
    {
      question: "Do you build custom shower enclosures in Henderson?",
      answer: "Yes. We design and install custom shower enclosures throughout Henderson — walk-in, corner, neo-angle, and steam-ready layouts. Each enclosure is laser-measured and fabricated to your exact opening, with your choice of glass thickness and hardware finish."
    },
    {
      question: "How long does shower door installation in Henderson take?",
      answer: "Most Henderson shower door installations are completed in 2-4 hours for standard configurations. Custom enclosures may take longer. We schedule at your convenience and complete most installs in a single visit."
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
        heroImage="/images/contemporary-frameless-shower-design-2.webp"
        description="Henderson's trusted expert for custom shower doors. Frameless, sliding, and semi-frameless installations and replacements. Professional service with perfect results."
        additionalContent={
          <>
            <h2 className="text-3xl font-bold mb-6">Shower Door Installation Henderson NV</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                As a leading provider of <Link to="/shower-doors-las-vegas" className="text-primary underline hover:text-primary/80">shower doors Las Vegas</Link> and Henderson homeowners trust, we handle projects of all sizes. Our expertise in fitting <strong>frameless shower doors in Henderson</strong> homes has made us the go-to choice for modern bathroom renovations. We manage the entire process, from precise laser measurement to professional installation, guaranteeing a perfect, leak-free result.
              </p>
              <p>
                Looking for <strong>glass shower doors in Henderson</strong>? We offer a complete range including frameless, semi-frameless, sliding, and custom enclosures. Our team specializes in premium installations for Green Valley, Anthem, Seven Hills, and all Henderson neighborhoods.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Henderson Shower Door Installers You Can Trust</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Searching for <strong>shower door installers in Henderson</strong>? Our own team — never subcontractors — handles every step: free in-home consultation, laser measurement, custom fabrication from tempered glass, and precision installation. Most standard installs are finished in a single 2–4 hour visit.
              </p>
              <p>
                Every installation is backed by our workmanship warranty and built to handle Henderson's hard water with optional protective glass coatings.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Shower Door Replacement in Henderson — Full Upgrades, Not Repairs</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Ready to <strong>replace your shower door in Henderson</strong>? We replace old framed, sliding, and builder-grade doors with brand-new custom frameless or semi-frameless glass. We remove and dispose of your existing door, prepare the opening, and install a completely new system — thick tempered glass, premium hardware, watertight fit.
              </p>
              <p>
                We design and install new glass only — we don&apos;t repair or service other brands&apos; hardware. If your old door is failing, a full <strong>Henderson shower door replacement</strong> is the lasting fix. Call (702) 383-0779 for a free quote.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Custom Shower Doors &amp; Enclosures in Henderson</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Beyond standard doors, we build <strong>custom shower enclosures for Henderson</strong> homes — walk-in, corner, neo-angle, and steam-ready configurations, each fabricated to your exact opening. Every <strong>custom shower door in Henderson</strong> starts with laser measurement, so out-of-square walls, kneewalls, and benches are accounted for before the glass is cut.
              </p>
              <p>
                Explore our <Link to="/shower-doors-las-vegas/custom-enclosures" className="text-primary underline hover:text-primary/80">custom shower enclosures</Link> and <Link to="/shower-enclosures-las-vegas" className="text-primary underline hover:text-primary/80">glass shower enclosures</Link> to see layouts we've built across Green Valley, Seven Hills, and Anthem.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Frameless Shower Doors Henderson</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <strong>Frameless shower doors in Henderson</strong> offer a modern, open aesthetic that complements contemporary bathroom designs. Our frameless options feature thick tempered glass (3/8" or 1/2"), premium hardware in your choice of finishes, and precise installation for a watertight seal.
              </p>
              <p>
                Henderson's upscale communities like Seven Hills, Anthem Country Club, and MacDonald Ranch often choose frameless designs to maximize their bathroom's elegance. We also offer protective coatings to combat Henderson's hard water conditions.
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
      // TODO(owner): supply REAL verified testimonials for this city.
      // Previous entries were placeholder copy, not genuine reviews. The template
      // hides this section entirely while the list is empty — do not refill with
      // invented names.
      testimonials={[]}
        projectImages={[
          {
            src: "/images/custom-corner-shower-enclosure-summerlin-installation.webp",
            alt: "Custom frameless shower enclosure Henderson installation with premium hardware",
            caption: "Custom enclosure in Green Valley - Low-iron glass with matte black hardware"
          },
          {
            src: "/images/completed-steam-shower-enclosure-3.webp",
            alt: "Frameless shower doors Henderson Seven Hills by Baja Glass",
            caption: "Frameless installation in Seven Hills - Brushed nickel finish"
          },
          {
            src: "/images/bypass-sliding-shower-doors-completed-project-2.webp",
            alt: "Modern shower glass Henderson Anthem with clean lines",
            caption: "Anthem project - Ultra-clear glass with chrome hardware"
          }
        ]}
        localInfo={{
          homeStyles: "Henderson homes feature diverse architectural styles from Mediterranean and Spanish Revival in Seven Hills to modern contemporary in Anthem and Inspirada. We customize shower doors to complement your home's unique design aesthetic.",
          hardWater: "Henderson's water quality benefits from Lake Las Vegas and local treatment. We recommend protective coatings to minimize mineral deposits and offer maintenance guidance specific to your water conditions."
        }}
        metaDescription="Expert shower door installation & replacement in Henderson, NV. Frameless, glass shower doors, custom enclosures. Serving Green Valley, Anthem, Seven Hills. Free quotes."
      />
    </>
  );
};

export default ShowerDoorsHenderson;
