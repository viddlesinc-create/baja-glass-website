import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
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
  "/resources": "Resources",
  "/areas-served": "Areas Served",
  "/sitemap": "Site Map",
  "/glass-company-las-vegas": "Glass Company Las Vegas",
  "/glass-company-las-vegas/residential-glass-repair": "Residential Glass Repair",
  "/glass-company-las-vegas/office-enclosures": "Office Enclosures",
  "/shower-doors-las-vegas": "Shower Doors Las Vegas",
  "/shower-doors-las-vegas/frameless": "Frameless Shower Doors",
  "/shower-doors-las-vegas/semi-frameless-framed": "Semi-Frameless & Framed Doors",
  "/shower-doors-las-vegas/sliding": "Sliding Shower Doors",
  "/shower-doors-las-vegas/hinged": "Hinged & Pivot Doors",
  "/shower-doors-las-vegas/custom-enclosures": "Custom Enclosures",
  "/shower-doors-las-vegas/steam-enclosures": "Steam Shower Enclosures",
  "/shower-doors-las-vegas/repair": "Shower Glass Repair",
  "/blog/glass-care-guide": "Glass Care Guide",
  "/blog/choosing-right-door": "Choosing the Right Door",
  "/blog/installation-process": "Installation Process",
  "/blog/warranty-information": "Warranty Information",
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
    const label = routeLabels[path] || pathnames[index].replace(/-/g, " ");
    const isLast = index === pathnames.length - 1;

    return { path, label, isLast };
  });

  return (
    <nav className="bg-background border-b py-3">
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
            
            {breadcrumbItems.map((item, index) => (
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
  );
};
