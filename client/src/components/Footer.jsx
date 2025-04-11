// src/components/Footer.jsx
import React from "react";
import { useLocation } from "react-router-dom";
const Footer = () => {
      const location = useLocation();
      if (location.pathname.includes('/auth')) return null;
  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      © {new Date().getFullYear()} My MERN App
    </footer>
  );
};

export default Footer;
