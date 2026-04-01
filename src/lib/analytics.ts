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
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...data
  });
};

/**
 * Track phone click events for GTM and GA4
 */
export const trackPhoneClick = (location?: string) => {
  if (typeof window === 'undefined') return;
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

  pushToDataLayer('phone_click', eventData);

  console.log('DataLayer Event: phone_click', {
    location, 
    page: window.location.pathname 
  });
};

/**
 * Track contact form submissions
 */
export const trackFormSubmission = (formData: {
  city?: string;
  projectType?: string;
  source?: string;
}) => {
  if (typeof window === 'undefined') return;
  const eventData = {
    event_category: 'conversion',
    event_label: formData.city || 'unknown_city',
    value: 1,
    city: formData.city,
    project_type: formData.projectType,
    source: formData.source || 'contact_form'
  };

  pushToDataLayer('generate_lead', eventData);

  console.log('DataLayer Event: generate_lead', formData);
};

/**
 * Track Henderson-specific conversions
 */
export const trackHendersonConversion = (action: 'phone_click' | 'form_submit') => {
  if (typeof window === 'undefined') return;
  const eventData = {
    event_category: 'henderson_page',
    event_label: action,
    value: 1,
    location: 'Henderson'
  };

  pushToDataLayer('henderson_conversion', eventData);

  console.log('DataLayer Event: henderson_conversion', { action });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaType: string, location?: string) => {
  if (typeof window === 'undefined') return;
  const eventData = {
    event_category: 'engagement',
    event_label: ctaType,
    page_location: location || 'unknown'
  };

  pushToDataLayer('cta_click', eventData);

  console.log('DataLayer Event: cta_click', { ctaType, location });
};

/**
 * Track quote request events
 */
export const trackQuoteRequest = (source: string) => {
  if (typeof window === 'undefined') return;
  const eventData = {
    event_category: 'conversion',
    event_label: source,
    value: 1,
    conversion_type: 'quote_request'
  };

  pushToDataLayer('quote_request', eventData);

  console.log('DataLayer Event: quote_request', { source });
};

/**
 * Track page views for SPA navigation
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined') return;
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
  if (typeof window === 'undefined') return;
  const eventData = {
    event_category: 'engagement',
    event_action: action,
    event_label: location || 'unknown',
    page_location: window.location.href
  };

  pushToDataLayer('map_interaction', eventData);

  console.log('DataLayer Event: map_interaction', { action, location });
};
