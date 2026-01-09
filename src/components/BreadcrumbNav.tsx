import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/gallery": "Gallery",
  "/reviews": "Reviews",
  "/resources": "Resources",
  "/areas-served": "Areas Served",
  "/sitemap": "Site Map",
  // Glass Company pages
  "/glass-company-las-vegas": "Glass Company Las Vegas",
  "/glass-company-las-vegas/residential-glass-repair": "Residential Glass Repair",
  "/glass-company-las-vegas/office-enclosures": "Office Enclosures",
  // Shower Doors hub and service pages
  "/shower-doors-las-vegas": "Shower Doors Las Vegas",
  "/shower-doors-las-vegas/frameless": "Frameless Shower Doors",
  "/shower-doors-las-vegas/semi-frameless-framed": "Semi-Frameless & Framed Doors",
  "/shower-doors-las-vegas/sliding": "Sliding Shower Doors",
  "/shower-doors-las-vegas/hinged": "Hinged & Pivot Doors",
  "/shower-doors-las-vegas/custom-enclosures": "Custom Enclosures",
  "/shower-doors-las-vegas/steam-enclosures": "Steam Shower Enclosures",
  "/shower-doors-las-vegas/repair": "Shower Glass Repair",
  // Location pages
  "/shower-doors-henderson-nv": "Henderson Shower Doors",
  "/shower-doors-summerlin-nv": "Summerlin Shower Doors",
  "/shower-doors-paradise-nv": "Paradise Shower Doors",
  "/shower-doors-spring-valley-nv": "Spring Valley Shower Doors",
  "/shower-doors-enterprise-nv": "Enterprise Shower Doors",
  "/shower-doors-green-valley-nv": "Green Valley Shower Doors",
  // Blog pages
  "/blog": "Blog",
  "/blog/glass-care-guide": "Glass Care Guide",
  "/blog/choosing-right-door": "Choosing the Right Door",
  "/blog/installation-process": "Installation Process",
  "/blog/warranty-information": "Warranty Information",
  "/blog/shower-door-installation-cost-las-vegas": "Shower Door Cost Guide",
  "/blog/frameless-vs-semi-frameless-shower-doors": "Frameless vs Semi-Frameless",
  "/blog/las-vegas-water-quality-shower-glass-hard-water-solutions": "Hard Water Solutions",
};

export const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (location.pathname === "/") {
    return null;
  }

  const breadcrumbItems = pathnames.map((_, index) => {
    const path = `/${pathnames.slice(0, index + 1).join("/")}`;
    const label = routeLabels[path] || pathnames[index].replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const isLast = index === pathnames.length - 1;

    return { path, label, isLast };
  });

  // Generate JSON-LD BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bajaglass.com/"
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://bajaglass.com${item.path}`
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav className="bg-background border-b py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-1">
                    <Home className="h-3.5 w-3.5" />
                    <span>Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
              {breadcrumbItems.map((item) => (
                <div key={item.path} className="flex items-center">
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {item.isLast ? (
                      <BreadcrumbPage className="capitalize">
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={item.path} className="capitalize">
                          {item.label}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
    </>
  );
};
