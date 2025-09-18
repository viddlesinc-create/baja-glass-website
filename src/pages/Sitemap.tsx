import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const sitemapLinks = [
    { url: "/", title: "Home" },
    { url: "/glass-company-las-vegas", title: "Glass Company Las Vegas" },
    { url: "/glass-company-las-vegas/residential-glass-repair", title: "Residential Glass Repair" },
    { url: "/glass-company-las-vegas/office-enclosures", title: "Office Enclosures" },
    { url: "/shower-doors-las-vegas", title: "Shower Doors Las Vegas" },
    { url: "/shower-doors-las-vegas/frameless", title: "Frameless Shower Doors" },
    { url: "/shower-doors-las-vegas/semi-frameless-framed", title: "Semi-Frameless Shower Doors" },
    { url: "/shower-doors-las-vegas/sliding", title: "Sliding Shower Doors" },
    { url: "/shower-doors-las-vegas/hinged", title: "Hinged Shower Doors" },
    { url: "/shower-doors-las-vegas/custom-enclosures", title: "Custom Enclosures" },
    { url: "/shower-doors-las-vegas/steam-enclosures", title: "Steam Shower Enclosures" },
    { url: "/shower-doors-las-vegas/repair", title: "Shower Glass Repair" },
    { url: "/gallery", title: "Gallery" },
    { url: "/areas-served", title: "Areas Served" },
    { url: "/about", title: "About" },
    { url: "/resources", title: "Resources" },
    { url: "/contact", title: "Contact" },
    { url: "/blog/glass-care-guide", title: "Glass Care Guide" },
    { url: "/blog/choosing-right-door", title: "Choosing the Right Door" },
    { url: "/blog/installation-process", title: "Installation Process" },
    { url: "/blog/warranty-information", title: "Warranty Information" },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Baja Glass Las Vegas</title>
        <meta name="description" content="Complete sitemap of all pages on the Baja Glass website - your premier glass company in Las Vegas." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Sitemap</h1>
          <p className="text-center text-muted-foreground mb-12">
            Navigate through all pages on our website
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapLinks.map((link) => (
              <div key={link.url} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <Link
                  to={link.url}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">{link.url}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;