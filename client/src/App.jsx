// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

// Admin Pages
import DashboardHome from "./pages/DashboardHome";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardSettings from "./pages/DashboardSettings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OTPVerification from "./pages/OTPVerification";
import VendorOTP from "./pages/VendorOTP";  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/otp-verification" element={<OTPVerification />} />
          <Route path="/auth/vendor-otp-verification" element={<VendorOTP />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
