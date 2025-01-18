import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Page() {
  const navigate = useNavigate();
  const isLoggedIn = false;

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return null;
}
