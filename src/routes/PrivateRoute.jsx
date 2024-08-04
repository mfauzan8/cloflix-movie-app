import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const Auth = {
  isLoggedIn() {
    return !!Cookies.get("request_token");
  },
  isLoggedOut() {
    return Cookies.remove("request_token");
  }
};

export const PrivateRoute = () => {
  return Auth.isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
