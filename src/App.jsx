import React from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import ProtectedRoute from "./routes/PrivateRoute";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/landing-page" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route element={<ProtectedRoute />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/profile" element={<UserProfile />} /> */}
      </Route>
      <Route path="/" element={<LoginPage/>} />
    </Routes>
  </BrowserRouter>
  );
}
