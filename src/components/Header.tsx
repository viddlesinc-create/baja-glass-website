import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Star, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Shower Doors", href: "/shower-doors-las-vegas" },
    { name: "Gallery", href: "/gallery" },
    { name: "Areas Served", href: "/areas-served" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Star, href: "#", label: "Yelp" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top utility bar with social icons - hidden on mobile */}
        <div className="hidden md:flex items-center justify-end py-2 border-b border-border/50">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-foreground">
              Baja Glass
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+17023830779"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
              aria-label="Call Baja Glass at (702) 383-0779"
            >
              <Phone className="h-4 w-4" />
              (702) 383-0779
            </a>
            
            <Button variant="cta" size="default" asChild>
              <Link to="/contact">Get a Fast Quote</Link>
            </Button>

            {/* Mobile menu trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-6">
                  <Link to="/" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>
                    Baja Glass
                  </Link>
                  
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-foreground hover:text-accent transition-colors font-medium py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-border">
                    <a
                      href="tel:+17023830779"
                      className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-accent transition-colors mb-4"
                      aria-label="Call Baja Glass at (702) 383-0779"
                    >
                      <Phone className="h-5 w-5" />
                      (702) 383-0779
                    </a>
                    
                    <div className="flex items-center gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;