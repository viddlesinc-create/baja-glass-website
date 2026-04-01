import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Push page_view event to dataLayer for GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title
    });
    
    // Debug only in development
    if (import.meta.env.DEV) {
      console.log('DataLayer Event: page_view', { path: location.pathname });
    }
  }, [location.pathname]);
};
