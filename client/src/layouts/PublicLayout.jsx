// src/layouts/PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarComp";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="h-auto">
      <Navbar />
      <main className="h-lvh bg-rose-500">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
