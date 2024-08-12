import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthentificationService from './services/authentification-service';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = AuthentificationService.isAuthenticated;
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

export default PrivateRoute;
