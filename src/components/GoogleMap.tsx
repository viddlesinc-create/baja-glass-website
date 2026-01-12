import { cn } from "@/lib/utils";
import { trackMapInteraction } from "@/lib/analytics";
import { useEffect } from "react";

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

// Google Maps Embed URL (no API key required)
const EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.1!2d-115.1998091!3d36.0977853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c6877afaaaab%3A0x52192106a1cfa0fc!2sBaja%20Glass%20%26%20Mirror%20LLC!5e0!3m2!1sen!2sus!4v1704067200000`;

const GoogleMap = ({ 
  height = "400px", 
  width = "100%", 
  className,
  showDirectionsButton = true,
  location = "unknown"
}: GoogleMapProps) => {
  
  useEffect(() => {
    // Track map view when component mounts
    trackMapInteraction('view_map', location);
  }, [location]);

  const handleDirectionsClick = () => {
    trackMapInteraction('get_directions', location);
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS.address)}&destination_place_id=${BUSINESS.placeId}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className={cn("rounded-lg overflow-hidden shadow-lg", className)}>
      <iframe
        src={EMBED_URL}
        width={width}
        height={height}
        style={{ border: 0, width: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${BUSINESS.name} Location Map`}
        aria-label={`Map showing ${BUSINESS.name} at ${BUSINESS.address}`}
      />
      {showDirectionsButton && (
        <div className="bg-secondary/50 p-4">
          <button
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
          </button>
        </div>
      )}
    </div>
  );
};

export { GoogleMap, BUSINESS };
export default GoogleMap;
