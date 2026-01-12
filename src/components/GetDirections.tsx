import { Button } from "@/components/ui/button";
import { trackMapInteraction } from "@/lib/analytics";
import { MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

interface GetDirectionsProps {
  variant?: "button" | "link" | "icon";
  size?: "sm" | "default" | "lg";
  className?: string;
  location?: string;
  showIcon?: boolean;
}

// Business Details - Single Source of Truth
const BUSINESS = {
  name: "Baja Glass & Mirror LLC",
  address: "4280 W Reno Ave Ste A, Las Vegas, NV 89118",
  placeId: "ChIJq6r6ekbGyocQ_KDPoQYhGVI",
};

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS.address)}&destination_place_id=${BUSINESS.placeId}`;

const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/Baja+Glass+%26+Mirror+LLC/@36.0977853,-115.1998091,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c6877afaaaab:0x52192106a1cfa0fc!8m2!3d36.097781!4d-115.1972342!16s%2Fg%2F11c2pp70qm`;

const GetDirections = ({ 
  variant = "button", 
  size = "default",
  className,
  location = "unknown",
  showIcon = true
}: GetDirectionsProps) => {
  
  const handleClick = () => {
    trackMapInteraction('get_directions', location);
    window.open(DIRECTIONS_URL, '_blank', 'noopener,noreferrer');
  };

  if (variant === "link") {
    return (
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors underline-offset-4 hover:underline",
          className
        )}
        onClick={() => trackMapInteraction('click_map_link', location)}
      >
        {showIcon && <MapPin className="h-4 w-4" aria-hidden="true" />}
        View on Google Maps
      </a>
    );
  }

  if (variant === "icon") {
    return (
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center p-2 text-foreground hover:text-accent transition-colors",
          className
        )}
        onClick={() => trackMapInteraction('click_map_link', location)}
        aria-label="View location on Google Maps"
      >
        <MapPin className="h-5 w-5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Button 
      variant="outline" 
      size={size}
      onClick={handleClick}
      className={cn("gap-2", className)}
    >
      {showIcon && <Navigation className="h-4 w-4" aria-hidden="true" />}
      Get Directions
    </Button>
  );
};

export { GetDirections, GOOGLE_MAPS_URL, DIRECTIONS_URL };
export default GetDirections;
