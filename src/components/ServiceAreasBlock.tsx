import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Henderson", href: "/shower-doors-henderson-nv" },
  { name: "Summerlin", href: "/shower-doors-summerlin-nv" },
  { name: "Paradise", href: "/shower-doors-paradise-nv" },
  { name: "Spring Valley", href: "/shower-doors-spring-valley-nv" },
  { name: "Enterprise", href: "/shower-doors-enterprise-nv" },
  { name: "Green Valley", href: "/shower-doors-green-valley-nv" },
];

const ServiceAreasBlock = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl font-bold">Serving the Greater Las Vegas Area</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Professional glass and shower door services throughout the Las Vegas valley.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                to={loc.href}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                {loc.name}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/areas-served"
              className="text-sm text-primary hover:underline font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              View All Service Areas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasBlock;
