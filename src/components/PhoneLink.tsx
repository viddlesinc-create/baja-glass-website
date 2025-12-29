import { Phone } from "lucide-react";
import { ReactNode } from "react";

// Declare the global function type
declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => boolean;
  }
}

interface PhoneLinkProps {
  children?: ReactNode;
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
  phoneNumber?: string;
  ariaLabel?: string;
}

/**
 * PhoneLink component that triggers Google Ads click-to-call conversion tracking
 * when the phone link is clicked.
 */
const PhoneLink = ({
  children,
  className = "",
  showIcon = false,
  iconClassName = "h-5 w-5",
  phoneNumber = "(702) 383-0779",
  ariaLabel = "Call Baja Glass at (702) 383-0779",
}: PhoneLinkProps) => {
  const telUrl = "tel:+17023830779";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Trigger Google Ads conversion tracking if available
    if (typeof window.gtag_report_conversion === 'function') {
      e.preventDefault();
      window.gtag_report_conversion(telUrl);
    }
    // If gtag_report_conversion is not available, the link will work normally
  };

  return (
    <a
      href={telUrl}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {showIcon && <Phone className={iconClassName} aria-hidden="true" />}
      {children || phoneNumber}
    </a>
  );
};

export default PhoneLink;
