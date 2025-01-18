import React from 'react';
import { Navigate } from 'react-router';
import { useAuthStore } from '~/store/auth';

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default AuthGuard;
