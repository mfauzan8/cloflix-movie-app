import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import PrivateRoute from "./routes/PrivateRoute";
import DashboardPage from "./pages/DashboardPage";
import MoviePage from "./pages/MoviePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/movie" element={<MoviePage />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
