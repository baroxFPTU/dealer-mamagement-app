import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../app/context';
import { IRouteProps } from './PrivateRoute';

const PublicRoute = ({ redirectUrl }: IRouteProps) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Navigate to={redirectUrl} /> : <Outlet />;
};

export default PublicRoute;
