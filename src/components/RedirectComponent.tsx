import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface RedirectComponentProps {
  to: string;
  permanent?: boolean;
}

const RedirectComponent = ({ to, permanent = true }: RedirectComponentProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Clean any query parameters and redirect
    const cleanTo = to + location.hash; // preserve hash if any
    
    if (permanent) {
      // For SEO, we want to replace the history entry for permanent redirects
      navigate(cleanTo, { replace: true });
    } else {
      navigate(cleanTo);
    }
  }, [navigate, to, location.hash, permanent]);

  return null; // This component doesn't render anything
};

export default RedirectComponent;