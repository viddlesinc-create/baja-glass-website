import { Link } from "react-router-dom";
import { Droplet, MapPin, BookOpen, Building2 } from "lucide-react";

const SiteLinks = () => {
  const sections = [
    {
      title: "Shower Door Services",
      icon: Droplet,
      links: [
        { name: "Frameless Shower Doors", href: "/shower-doors-las-vegas/frameless" },
        { name: "Sliding Shower Doors", href: "/shower-doors-las-vegas/sliding" },
        { name: "Hinged & Pivot Doors", href: "/shower-doors-las-vegas/hinged" },
        { name: "Semi-Frameless Doors", href: "/shower-doors-las-vegas/semi-frameless-framed" },
        { name: "Custom Enclosures", href: "/shower-doors-las-vegas/custom-enclosures" },
        { name: "Steam Shower Enclosures", href: "/shower-doors-las-vegas/steam-enclosures" },
        { name: "Shower Door Replacement", href: "/shower-door-replacement-las-vegas" },


      ],
    },
    {
      title: "Service Locations",
      icon: MapPin,
      links: [
        { name: "Henderson Shower Doors", href: "/shower-doors-henderson-nv" },
        { name: "Summerlin Shower Doors", href: "/shower-doors-summerlin-nv" },
        { name: "Paradise Shower Doors", href: "/shower-doors-paradise-nv" },
        { name: "Spring Valley Shower Doors", href: "/shower-doors-spring-valley-nv" },
        { name: "Enterprise Shower Doors", href: "/shower-doors-enterprise-nv" },
        { name: "Green Valley Shower Doors", href: "/shower-doors-green-valley-nv" },
        { name: "All Areas Served", href: "/areas-served" },
      ],
    },
    {
      title: "Glass Company Services",
      icon: Building2,
      links: [
        { name: "Glass Company Las Vegas", href: "/glass-company-las-vegas" },
        { name: "Residential Glass Replacement", href: "/glass-company-las-vegas/residential-glass-replacement" },
        { name: "Office Glass Enclosures", href: "/glass-company-las-vegas/office-enclosures" },
        { name: "Custom Mirrors", href: "/glass-company-las-vegas/custom-mirrors" },
        { name: "Custom Glass & Pivot Doors", href: "/glass-company-las-vegas/custom-glass-doors" },
        { name: "Shower Enclosures", href: "/shower-enclosures-las-vegas" },
      ],
    },
    {
      title: "Resources & Blog",
      icon: BookOpen,
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Glass Care Guide", href: "/blog/glass-care-guide" },
        { name: "Choosing the Right Door", href: "/blog/choosing-right-door" },
        { name: "Installation Process", href: "/blog/installation-process" },
        { name: "Shower Door Cost Guide", href: "/blog/shower-door-installation-cost-las-vegas" },
        { name: "Hard Water Solutions", href: "/blog/las-vegas-water-quality-shower-glass-hard-water-solutions" },
        { name: "Cracked Shower Glass Replacement", href: "/blog/cracked-shower-glass-replacement-las-vegas" },
        { name: "How Long Does Installation Take?", href: "/blog/how-long-does-shower-door-installation-take" },
        { name: "FAQ", href: "/faq" },
        { name: "Site Map", href: "/sitemap" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Explore Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our complete range of shower door and glass services, serving all of Las Vegas and surrounding communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-md border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <section.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>
              <nav>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="h-1 w-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteLinks;
