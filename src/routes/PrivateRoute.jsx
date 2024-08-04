import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Auth = {
    isLoggedIn() {
        if (Cookies.get("request_token")) {
            return true;
        } else {
            return false;
        }
    },
  isLoggedOut() {
    return Cookies.remove("request_token");
  }
};

export const PrivateRoute = ({ children }) => {
  if (Auth.isLoggedIn()) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
