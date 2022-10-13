import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './app/context';
import AuthLayout from './components/layout/AuthLayout';
import MainLayout from './components/layout/MainLayout';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { authUtils } from './utils/authUtils';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const hasToken = localStorage.getItem('token') || authUtils.getTokenFromCookie();
    if (hasToken) {
      return true;
    }
    return false;
  });

  return (
    <>
      <AuthProvider value={{ isLoggedIn, setIsLoggedIn }}>
        <Router>
          <Routes>
            <Route path='/' element={<PrivateRoute redirectUrl='auth/login' />}>
              <Route path='/' element={<MainLayout />}>
                <Route path='' element={<Navigate replace to='dashboard' />} />
                <Route
                  loader={({ params }) => {
                    return JSON.stringify({ message: 'helllo' });
                  }}
                  path='/dashboard'
                  element={<Home />}
                />
              </Route>
            </Route>
            <Route path='/' element={<PublicRoute redirectUrl='/dashboard' />}>
              <Route path='/auth' element={<AuthLayout />}>
                <Route path='login' element={<Login />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
