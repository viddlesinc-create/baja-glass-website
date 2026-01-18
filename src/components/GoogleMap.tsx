import { cn } from "@/lib/utils";
import { trackMapInteraction } from "@/lib/analytics";
import { MapPin } from "lucide-react";

interface GoogleMapProps {
  height?: string;
  width?: string;
  className?: string;
  showDirectionsButton?: boolean;
  location?: string;
}

// Business Details - Single Source of Truth
const BUSINESS = {
  name: "Baja Glass & Mirror LLC",
  address: "4280 W Reno Ave Ste A, Las Vegas, NV 89118",
  placeId: "ChIJq6r6ekbGyocQ_KDPoQYhGVI",
  coordinates: {
    lat: 36.097781,
    lng: -115.197234
  }
};

// Google Maps links
const MAPS_URL = `https://www.google.com/maps/place/Baja+Glass+%26+Mirror+LLC/@36.0977853,-115.1998091,17z`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS.address)}&destination_place_id=${BUSINESS.placeId}`;

// Static map image URL (no JS required)
const STATIC_MAP_URL = `https://maps.googleapis.com/maps/api/staticmap?center=${BUSINESS.coordinates.lat},${BUSINESS.coordinates.lng}&zoom=15&size=600x400&scale=2&markers=color:red%7C${BUSINESS.coordinates.lat},${BUSINESS.coordinates.lng}&key=`;

const GoogleMap = ({ 
  height = "400px", 
  className,
  showDirectionsButton = true,
  location = "unknown"
}: GoogleMapProps) => {
  
  const handleMapClick = () => {
    trackMapInteraction('click_map_link', location);
  };

  const handleDirectionsClick = () => {
    trackMapInteraction('get_directions', location);
  };

  return (
    <div className={cn("rounded-lg overflow-hidden shadow-lg", className)}>
      {/* Static map placeholder with link to Google Maps - no JS overhead */}
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleMapClick}
        className="block relative bg-secondary/30 hover:bg-secondary/50 transition-colors"
        style={{ height }}
        aria-label={`View ${BUSINESS.name} on Google Maps`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <MapPin className="h-12 w-12 text-accent mb-4" aria-hidden="true" />
          <p className="text-lg font-semibold text-foreground mb-2">{BUSINESS.name}</p>
          <p className="text-muted-foreground mb-4">{BUSINESS.address}</p>
          <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open in Google Maps
          </span>
        </div>
      </a>
      {showDirectionsButton && (
        <div className="bg-secondary/50 p-4">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDirectionsClick}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Get Directions
          </a>
        </div>
      )}
    </div>
  );
};

export { GoogleMap, BUSINESS };
export default GoogleMap;
