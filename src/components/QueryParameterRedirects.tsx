import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const QueryParameterRedirects = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    
    // Handle WordPress page_id redirects
    const pageId = urlParams.get('page_id');
    if (pageId) {
      switch (pageId) {
        case '32':
          navigate('/about', { replace: true });
          return;
        case '85':
          navigate('/contact', { replace: true });
          return;
      }
    }

    // Handle search parameters and other unwanted query params
    const hasUnwantedParams = urlParams.has('kuid') || 
                             urlParams.has('yandex-source') || 
                             urlParams.has('ga_action') || 
                             urlParams.has('s') ||
                             urlParams.has('page_id');

    if (hasUnwantedParams) {
      // Clean URL by removing all query parameters
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default QueryParameterRedirects;