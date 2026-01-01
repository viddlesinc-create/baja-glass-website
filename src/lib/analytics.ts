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
 * Track phone click events for Google Ads call tracking
 * Follows GA4 recommended event parameters
 */
export const trackPhoneClick = (location?: string) => {
  if (typeof window.gtag === 'function') {
    // Standard GA4 event for phone clicks
    window.gtag('event', 'phone_click', {
      event_category: 'contact',
      event_label: location || 'general',
      value: 1,
      link_url: 'tel:+17023830779',
      link_text: '(702) 383-0779',
      page_location: window.location.href,
      page_title: document.title,
      click_location: location || 'unknown'
    });
    
    console.log('GA4 Event: phone_click', { 
      location, 
      page: window.location.pathname 
    });
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
