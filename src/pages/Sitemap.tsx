import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Droplet, Building2, MapPin, BookOpen, Mail, Star } from "lucide-react";

const Sitemap = () => {
  const sections = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Gallery", href: "/gallery" },
        { name: "Customer Reviews", href: "/reviews" },
        { name: "Areas Served", href: "/areas-served" },
        { name: "Resources", href: "/resources" },
      ]
    },
    {
      title: "Shower Doors & Enclosures",
      icon: Droplet,
      links: [
        { name: "Shower Doors Las Vegas Hub", href: "/shower-doors-las-vegas" },
        { name: "Frameless Shower Doors", href: "/shower-doors-las-vegas/frameless" },
        { name: "Semi-Frameless & Framed Doors", href: "/shower-doors-las-vegas/semi-frameless-framed" },
        { name: "Sliding Shower Doors", href: "/shower-doors-las-vegas/sliding" },
        { name: "Hinged & Pivot Doors", href: "/shower-doors-las-vegas/hinged" },
        { name: "Custom Enclosures", href: "/shower-doors-las-vegas/custom-enclosures" },
        { name: "Steam Shower Enclosures", href: "/shower-doors-las-vegas/steam-enclosures" },
        { name: "Shower Glass Repair", href: "/shower-doors-las-vegas/repair" },
      ]
    },
    {
      title: "Glass Company Services",
      icon: Building2,
      links: [
        { name: "Glass Company Las Vegas", href: "/glass-company-las-vegas" },
        { name: "Residential Glass Repair", href: "/glass-company-las-vegas/residential-glass-repair" },
        { name: "Office Enclosures", href: "/glass-company-las-vegas/office-enclosures" },
      ]
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
      ]
    },
    {
      title: "Blog & Resources",
      icon: BookOpen,
      links: [
        { name: "Blog Home", href: "/blog" },
        { name: "Resources", href: "/resources" },
        { name: "Glass Care Guide", href: "/blog/glass-care-guide" },
        { name: "Choosing the Right Door", href: "/blog/choosing-right-door" },
        { name: "Installation Process", href: "/blog/installation-process" },
        { name: "Warranty Information", href: "/blog/warranty-information" },
        { name: "Shower Door Cost Guide", href: "/blog/shower-door-installation-cost-las-vegas" },
        { name: "Frameless vs Semi-Frameless", href: "/blog/frameless-vs-semi-frameless-shower-doors" },
        { name: "Hard Water Solutions", href: "/blog/las-vegas-water-quality-shower-glass-hard-water-solutions" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap | Baja Glass Las Vegas</title>
        <meta name="description" content="Complete sitemap of Baja Glass website. Find all pages including shower doors, glass services, gallery, blog, and contact information." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://bajaglass.com/sitemap" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sitemap | Baja Glass Las Vegas" />
        <meta property="og:description" content="Complete sitemap of Baja Glass website. Find all pages including shower doors, glass services, gallery, blog, and contact information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/sitemap" />
        <meta property="og:site_name" content="Baja Glass & Mirror LLC" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Site Map</h1>
            <p className="text-xl text-primary-foreground/90">
              Navigate our complete website structure - find all pages and services
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-6">
                    <section.icon className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                  <nav>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.href}
                            className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group"
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <span className="h-1 w-1 rounded-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-card rounded-lg p-8 shadow-md text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us directly and we'll be happy to help you find what you need.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
