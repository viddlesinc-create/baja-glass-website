import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Phone, Star, Instagram, Facebook, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Gallery", href: "/gallery" },
    { name: "Areas Served", href: "/areas-served" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const showerDoorsPages = [
    { name: "Frameless Doors", href: "/shower-doors-las-vegas/frameless" },
    { name: "Semi-Frameless & Framed", href: "/shower-doors-las-vegas/semi-frameless-framed" },
    { name: "Sliding Doors", href: "/shower-doors-las-vegas/sliding" },
    { name: "Hinged Doors", href: "/shower-doors-las-vegas/hinged" },
    { name: "Custom Enclosures", href: "/shower-doors-las-vegas/custom-enclosures" },
    { name: "Steam Enclosures", href: "/shower-doors-las-vegas/steam-enclosures" },
    { name: "Glass Repair", href: "/shower-doors-las-vegas/repair" },
  ];

  const glassCompanyPages = [
    { name: "Residential Glass Repair", href: "/glass-company-las-vegas/residential-glass-repair" },
    { name: "Office Enclosures", href: "/glass-company-las-vegas/office-enclosures" },
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
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" 
              alt="Baja Glass — Shower Doors & Glass in Las Vegas"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Glass Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link 
                  to="/glass-company-las-vegas"
                  className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Glass Company
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {glassCompanyPages.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-accent transition-colors w-full"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shower Doors Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link 
                  to="/shower-doors-las-vegas"
                  className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Shower Doors
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {showerDoorsPages.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-accent transition-colors w-full"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Regular Navigation Items */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium"
                onClick={() => window.scrollTo(0, 0)}
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
                  <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <img 
                      src="/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" 
                      alt="Baja Glass — Shower Doors & Glass in Las Vegas"
                      className="h-10 w-auto"
                    />
                  </Link>
                  
                  <nav className="flex flex-col gap-4">
                    {/* Glass Company Section */}
                    <div>
                      <Link
                        to="/glass-company-las-vegas"
                        className="text-foreground hover:text-accent transition-colors font-medium py-2 block"
                        onClick={() => {
                          setIsOpen(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        Glass Company
                      </Link>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Services</h3>
                      {glassCompanyPages.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-foreground hover:text-accent transition-colors font-medium py-1 pl-4 block"
                          onClick={() => {
                            setIsOpen(false);
                            window.scrollTo(0, 0);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Shower Doors Section */}
                    <div>
                      <Link
                        to="/shower-doors-las-vegas"
                        className="text-foreground hover:text-accent transition-colors font-medium py-2 block"
                        onClick={() => {
                          setIsOpen(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        Shower Doors
                      </Link>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Types & Services</h3>
                      {showerDoorsPages.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-foreground hover:text-accent transition-colors font-medium py-1 pl-4 block"
                          onClick={() => {
                            setIsOpen(false);
                            window.scrollTo(0, 0);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Regular Navigation */}
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-foreground hover:text-accent transition-colors font-medium py-2"
                        onClick={() => {
                          setIsOpen(false);
                          window.scrollTo(0, 0);
                        }}
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