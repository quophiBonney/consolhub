// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()
    if(location.pathname.includes("/auth")) return null; // Hide navbar on login page
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">My MERN App</h1>
        <div>
          <Link className="mr-4 hover:underline" to="/">
            Home
          </Link>
          <Link className="mr-4 hover:underline" to="/about">
            About
          </Link>
          <Link className="mr-4 hover:underline" to="/products">
            Products
          </Link>
          <Link className="hover:underline" to="/admin">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
