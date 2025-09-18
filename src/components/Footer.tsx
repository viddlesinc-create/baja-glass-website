import { Link } from "react-router-dom";
import { Star, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Shower Doors", href: "/shower-doors-las-vegas" },
    { name: "Gallery", href: "/gallery" },
    { name: "Areas Served", href: "/areas-served" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const blogLinks = [
    { name: "Glass Care Guide", href: "/blog/glass-care-guide" },
    { name: "Choosing the Right Door", href: "/blog/choosing-right-door" },
    { name: "Installation Process", href: "/blog/installation-process" },
    { name: "Warranty Information", href: "/blog/warranty-information" },
  ];

  const socialLinks = [
    { icon: Star, href: "#", label: "Yelp" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
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
          <div>
            <a
              href="/sitemap.xml"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitemap
            </a>
          </div>
          <p className="text-primary-foreground/80">
            Copyright © {new Date().getFullYear()} Baja Glass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;