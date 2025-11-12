// Google Analytics 4 Event Tracking Utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Track phone click events
 */
export const trackPhoneClick = (location?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', {
      event_category: 'engagement',
      event_label: location || 'general',
      value: 1,
      page_location: location || 'unknown'
    });
    
    console.log('GA4 Event: phone_click', { location });
  }
};

/**
 * Track contact form submissions
 */
export const trackFormSubmission = (formData: {
  city?: string;
  projectType?: string;
  source?: string;
}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: formData.city || 'unknown_city',
      value: 1,
      city: formData.city,
      project_type: formData.projectType,
      source: formData.source || 'contact_form'
    });
    
    console.log('GA4 Event: generate_lead', formData);
  }
};

/**
 * Track Henderson-specific conversions
 */
export const trackHendersonConversion = (action: 'phone_click' | 'form_submit') => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'henderson_conversion', {
      event_category: 'henderson_page',
      event_label: action,
      value: 1,
      location: 'Henderson'
    });
    
    console.log('GA4 Event: henderson_conversion', { action });
  }
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaType: string, location?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: ctaType,
      page_location: location || 'unknown'
    });
    
    console.log('GA4 Event: cta_click', { ctaType, location });
  }
};
