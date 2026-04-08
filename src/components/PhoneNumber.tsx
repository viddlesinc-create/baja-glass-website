import { Phone } from "lucide-react";

/**
 * PhoneNumber Component
 * 
 * This component displays the business phone number and is designed to work with
 * Google Ads "Calls from website" conversion tracking.
 * 
 * HOW IT WORKS:
 * - By default, displays the real business number: (702) 383-0779
 * - The `data-phone-number` attribute allows Google's gtag script to dynamically
 *   replace the number with a Google forwarding number for Google Ads visitors
 * - Non-ad traffic (organic, direct, referral) will always see the real number
 * 
 * The Google forwarding number replacement is configured in index.html via gtag.
 * DO NOT hard-code any forwarding number here.
 */

interface PhoneNumberProps {
  /** Location identifier for analytics tracking (e.g., 'header', 'footer', 'contact_page') */
  location: string;
  /** Whether to show as a clickable tel: link */
  asLink?: boolean;
  /** Whether to show the phone icon */
  showIcon?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show "Call Now:" prefix */
  showPrefix?: boolean;
}

// The real business phone number - Google's script will replace this for ad visitors
const BUSINESS_PHONE = "(702) 383-0779";
const BUSINESS_PHONE_TEL = "+17023830779";

export const PhoneNumber = ({
  location,
  asLink = true,
  showIcon = false,
  className = "",
  showPrefix = false
}: PhoneNumberProps) => {

  const content = (
    <>
      {showIcon && <Phone className="h-5 w-5" aria-hidden="true" />}
      {showPrefix && "Call Now: "}
      <span data-phone-number="true">{BUSINESS_PHONE}</span>
    </>
  );

  if (asLink) {
    const ariaLabel = showPrefix 
      ? `Call Now: ${BUSINESS_PHONE}` 
      : `${BUSINESS_PHONE} - Call Baja Glass`;
    return (
      <a
        href={`tel:${BUSINESS_PHONE_TEL}`}
        className={`flex items-center gap-2 ${className}`}
        aria-label={ariaLabel}
        data-phone-number="true"
      >
        {content}
      </a>
    );
  }

  return (
    <span className={className} data-phone-number="true">
      {BUSINESS_PHONE}
    </span>
  );
};

export default PhoneNumber;
