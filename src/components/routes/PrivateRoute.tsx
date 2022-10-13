import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../app/context';

export interface IRouteProps {
  redirectUrl: string;
}

const PrivateRoute = ({ redirectUrl }: IRouteProps) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectUrl} />;
};

export default PrivateRoute;
