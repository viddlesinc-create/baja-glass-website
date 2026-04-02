import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Phone, Star, Instagram, Facebook, ChevronDown, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneNumber from "@/components/PhoneNumber";
import { GetDirections, GOOGLE_MAPS_URL } from "@/components/GetDirections";
import { trackMapInteraction } from "@/lib/analytics";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Areas Served", href: "/areas-served" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const showerDoorsPages = [
    // Design / Product
    { name: "Frameless Doors", href: "/shower-doors-las-vegas/frameless" },
    { name: "Semi-Frameless & Framed", href: "/shower-doors-las-vegas/semi-frameless-framed" },
    { name: "Sliding Doors", href: "/shower-doors-las-vegas/sliding" },
    { name: "Hinged Doors", href: "/shower-doors-las-vegas/hinged" },
    { name: "Custom Enclosures", href: "/shower-doors-las-vegas/custom-enclosures" },
    { name: "Steam Enclosures", href: "/shower-doors-las-vegas/steam-enclosures" },
  ];

  const glassCompanyPages = [
    { name: "Residential Glass Replacement", href: "/glass-company-las-vegas/residential-glass-repair" },
    { name: "Office Enclosures", href: "/glass-company-las-vegas/office-enclosures" },
  ];

  const socialLinks = [
    { icon: Star, href: "#", label: "Yelp" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <>
      {/* Skip to main content for screen readers */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border" role="banner">
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
          <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="/images/logo-160.webp" 
              alt="Baja Glass — Shower Doors &amp; Glass in Las Vegas"
              className="h-16 w-auto"
              width={160}
              height={160}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {/* Shower Doors Dropdown */}
            <DropdownMenu>
              <div className="flex items-center">
                <a 
                  href="https://bajaglass.com/shower-doors-las-vegas/"
                  className="text-foreground hover:text-accent transition-colors font-medium"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Shower Doors
                </a>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium ml-1"
                    aria-label="Expand shower doors menu"
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                </DropdownMenuTrigger>
              </div>
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
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => trackMapInteraction('click_map_link', 'header')}
              aria-label="Visit Us - View our location on Google Maps"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span className="hidden lg:inline">Visit Us</span>
            </a>
            
            <PhoneNumber 
              location="header"
              showIcon={true}
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            />
            
            <Button variant="cta" size="default" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Fast Quote</Link>
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
                  <Link to="/" className="flex items-center gap-3" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                    <img 
                      src="/images/logo-320.webp" 
                      alt="Baja Glass — Shower Doors & Glass in Las Vegas"
                      className="h-10 w-auto"
                      width={100}
                      height={100}
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  
                  <nav className="flex flex-col gap-4">
                    {/* Shower Doors Section */}
                    <div>
                      <a
                        href="https://bajaglass.com/shower-doors-las-vegas/"
                        className="text-foreground hover:text-accent transition-colors font-medium py-2 block"
                        onClick={() => {
                          setIsOpen(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        Shower Doors
                      </a>
                      <span className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide block">Types & Services</span>
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
                    <PhoneNumber 
                      location="mobile_menu"
                      showIcon={true}
                      className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-accent transition-colors mb-4"
                    />
                    
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
    </>
  );
};

export default Header;