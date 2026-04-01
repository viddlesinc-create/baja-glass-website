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
    if (typeof window === 'undefined') return;

    const cleanTo = to + location.hash;
    
    if (permanent) {
      navigate(cleanTo, { replace: true });
    } else {
      navigate(cleanTo);
    }
  }, [navigate, to, location.hash, permanent]);

  return null;
};

export default RedirectComponent;
