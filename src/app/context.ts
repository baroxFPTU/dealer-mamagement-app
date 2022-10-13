import React from 'react';

export const defaultValue = {
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
};

export const AuthContext = React.createContext(defaultValue);
export const AuthProvider = AuthContext.Provider;
