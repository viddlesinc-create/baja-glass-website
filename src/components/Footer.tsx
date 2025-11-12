import { Link } from "react-router-dom";
import { Star, Instagram, Facebook } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  const quickLinks = [
    { name: "Shower Doors", href: "/shower-doors-las-vegas" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Areas Served", href: "/areas-served" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const locationLinks = [
    { name: "Henderson", href: "/shower-doors-henderson-nv" },
    { name: "Summerlin", href: "/shower-doors-summerlin-nv" },
    { name: "Paradise", href: "/shower-doors-paradise-nv" },
    { name: "Spring Valley", href: "/shower-doors-spring-valley-nv" },
    { name: "Enterprise", href: "/shower-doors-enterprise-nv" },
    { name: "Green Valley", href: "/shower-doors-green-valley-nv" },
  ];

  const blogLinks = [
    { name: "Glass Care Guide", href: "/blog/glass-care-guide" },
    { name: "Choosing the Right Door", href: "/blog/choosing-right-door" },
    { name: "Installation Process", href: "/blog/installation-process" },
    { name: "Shower Door Cost Guide", href: "/blog/shower-door-installation-cost-las-vegas" },
    { name: "Frameless vs Semi-Frameless", href: "/blog/frameless-vs-semi-frameless-shower-doors" },
    { name: "Hard Water Solutions", href: "/blog/las-vegas-water-quality-shower-glass-hard-water-solutions" },
  ];

  const socialLinks = [
    { icon: Star, href: "https://www.yelp.com/biz/baja-glass-and-mirror-las-vegas", label: "Yelp" },
    { icon: Instagram, href: "https://www.instagram.com/baja_glass_lv/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/people/Baja-Glass-and-Mirror/", label: "Facebook" },
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Baja Glass",
            "url": "https://bajaglass.com",
            "logo": "https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png",
            "description": "Premier shower door and glass company in Las Vegas, NV. Custom frameless shower doors, glass repair, and commercial glass services.",
            "telephone": "+17023830779",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4280 Reno Ave Ste A",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89118",
              "addressCountry": "US"
            },
            "areaServed": [
              "Las Vegas",
              "Henderson",
              "Summerlin",
              "North Las Vegas",
              "Paradise",
              "Spring Valley",
              "Enterprise"
            ],
            "sameAs": [
              "https://www.instagram.com/bajaglass",
              "https://www.facebook.com/bajaglass"
            ]
          })}
        </script>
      </Helmet>
      <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" 
                alt="Baja Glass — Shower Doors & Glass in Las Vegas"
                className="h-14 w-auto"
              />
            </div>
            <div className="space-y-2 text-primary-foreground/80">
              <p>4280 Reno Ave</p>
              <p>Ste A</p>
              <p>Las Vegas, NV 89118</p>
              <p>(702) 383-0779</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.name}
                </Link>
              </div>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <div className="space-y-2">
              <div>
                <Link
                  to="/shower-doors-henderson-nv"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Henderson Shower Doors
                </Link>
              </div>
              <div>
                <Link
                  to="/shower-doors-summerlin-nv"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Summerlin Shower Doors
                </Link>
              </div>
              <div>
                <Link
                  to="/shower-doors-las-vegas/frameless"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Frameless Shower Doors
                </Link>
              </div>
              <div>
                <Link
                  to="/shower-doors-las-vegas/custom-enclosures"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Custom Enclosures
                </Link>
              </div>
              <div>
                <Link
                  to="/shower-doors-las-vegas/repair"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Shower Glass Repair
                </Link>
              </div>
              <div>
                <Link
                  to="/shower-doors-las-vegas/sliding"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Sliding Shower Doors
                </Link>
              </div>
              <div>
                <Link
                  to="/shower-doors-las-vegas/hinged"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Hinged Shower Doors
                </Link>
              </div>
              <div>
                <Link
                  to="/shower-doors-las-vegas/semi-frameless-framed"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Semi-Frameless Doors
                </Link>
              </div>
              <div>
                <Link
                  to="/shower-doors-las-vegas/steam-enclosures"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Steam Shower Enclosures
                </Link>
              </div>
            </div>
          </div>

          {/* Local Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Local Services</h4>
            <div className="space-y-2">
              {locationLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Blog & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Blog & Resources</h4>
            <div className="space-y-2">
              {blogLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center space-y-4">
          <div className="flex justify-center gap-4 text-sm">
            <Link
              to="/sitemap"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
              onClick={() => window.scrollTo(0, 0)}
            >
              Site Map
            </Link>
            <span className="text-primary-foreground/40">|</span>
            <a
              href="/sitemap.xml"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              XML Sitemap
            </a>
          </div>
          <p className="text-primary-foreground/80">
            Copyright © {new Date().getFullYear()} Baja Glass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;