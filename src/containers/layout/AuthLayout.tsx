import React from 'react';
import { Outlet } from 'react-router-dom';
import { IHasChildren } from '../../types/common';

interface IAuthLayoutProps extends IHasChildren {}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return <div>{children || <Outlet />}</div>;
};

export default AuthLayout;
