// Google Analytics 4 Event Tracking Utilities with GTM dataLayer support

declare global {
  interface Window {
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

  // Push to dataLayer for GTM (single source of truth)
  pushToDataLayer('phone_click', eventData);

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

  // Push to dataLayer for GTM (single source of truth)
  pushToDataLayer('generate_lead', eventData);

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

  // Push to dataLayer for GTM (single source of truth)
  pushToDataLayer('henderson_conversion', eventData);

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

  // Push to dataLayer for GTM (single source of truth)
  pushToDataLayer('cta_click', eventData);

  console.log('DataLayer Event: cta_click', { ctaType, location });
};

/**
 * Track quote request events
 */
export const trackQuoteRequest = (source: string) => {
  const eventData = {
    event_category: 'conversion',
    event_label: source,
    value: 1,
    conversion_type: 'quote_request'
  };

  // Push to dataLayer for GTM (single source of truth)
  pushToDataLayer('quote_request', eventData);

  console.log('DataLayer Event: quote_request', { source });
};

/**
 * Track page views for SPA navigation
 */
export const trackPageView = (path: string, title?: string) => {
  const eventData = {
    event: 'page_view',
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href
  };

  pushToDataLayer('page_view', eventData);
};

/**
 * Track Google Maps interactions
 */
export const trackMapInteraction = (
  action: 'view_map' | 'get_directions' | 'click_map_link',
  location?: string
) => {
  const eventData = {
    event_category: 'engagement',
    event_action: action,
    event_label: location || 'unknown',
    page_location: window.location.href
  };

  pushToDataLayer('map_interaction', eventData);

  console.log('DataLayer Event: map_interaction', { action, location });
};
