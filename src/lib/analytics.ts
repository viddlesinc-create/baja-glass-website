// Google Analytics 4 Event Tracking Utilities with GTM dataLayer support

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: Record<string, any>[];
  }
}

/**
 * Push event to dataLayer for GTM
 */
const pushToDataLayer = (event: string, data: Record<string, any>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...data
  });
};

/**
 * Track phone click events for GTM and GA4
 * Pushes to dataLayer for GTM tag triggers
 */
export const trackPhoneClick = (location?: string) => {
  const eventData = {
    event_category: 'contact',
    event_label: location || 'general',
    value: 1,
    link_url: 'tel:+17023830779',
    link_text: '(702) 383-0779',
    page_location: window.location.href,
    page_title: document.title,
    click_location: location || 'unknown'
  };

  // Push to dataLayer for GTM
  pushToDataLayer('phone_click', eventData);

  // Also fire gtag event if available (GTM can provide this)
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', eventData);
  }

  console.log('DataLayer Event: phone_click', { 
    location, 
    page: window.location.pathname 
  });
};

/**
 * Track contact form submissions
 * Pushes to dataLayer for GTM tag triggers
 */
export const trackFormSubmission = (formData: {
  city?: string;
  projectType?: string;
  source?: string;
}) => {
  const eventData = {
    event_category: 'conversion',
    event_label: formData.city || 'unknown_city',
    value: 1,
    city: formData.city,
    project_type: formData.projectType,
    source: formData.source || 'contact_form'
  };

  // Push to dataLayer for GTM
  pushToDataLayer('generate_lead', eventData);

  // Also fire gtag event if available
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', eventData);
  }

  console.log('DataLayer Event: generate_lead', formData);
};

/**
 * Track Henderson-specific conversions
 */
export const trackHendersonConversion = (action: 'phone_click' | 'form_submit') => {
  const eventData = {
    event_category: 'henderson_page',
    event_label: action,
    value: 1,
    location: 'Henderson'
  };

  // Push to dataLayer for GTM
  pushToDataLayer('henderson_conversion', eventData);

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'henderson_conversion', eventData);
  }

  console.log('DataLayer Event: henderson_conversion', { action });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaType: string, location?: string) => {
  const eventData = {
    event_category: 'engagement',
    event_label: ctaType,
    page_location: location || 'unknown'
  };

  // Push to dataLayer for GTM
  pushToDataLayer('cta_click', eventData);

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', eventData);
  }

  console.log('DataLayer Event: cta_click', { ctaType, location });
};
