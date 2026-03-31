import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Phone, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneNumber from "@/components/PhoneNumber";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-primary/20 mb-2 select-none">404</p>
        <h1 className="text-3xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you're looking for may have moved or no longer exists. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Button asChild variant="cta" size="lg">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/shower-doors-las-vegas">
              <Search className="h-4 w-4 mr-2" />
              Browse Shower Doors
            </Link>
          </Button>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground mb-2">Need help? Call or text us:</p>
          <PhoneNumber location="404_page" className="text-xl font-semibold text-accent hover:text-accent/80 transition-colors" />
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
          <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors p-2">Gallery</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors p-2">Contact</Link>
          <Link to="/areas-served" className="text-muted-foreground hover:text-foreground transition-colors p-2">Areas Served</Link>
          <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors p-2">FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
