// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()
    if(location.pathname.includes("/auth")) return null; // Hide navbar on login page
  return (
    <nav className="bg-rose-500 text-white p-3 fixed top-0 w-full z-10">
      <div className="flex justify-between p-2">
        <h1 className="font-bold text-2xl uppercase">ConsolHub</h1>
        <div>
          <Link
            className="mr-2 bg-white rounded-lg p-2 md:p-3 shadow-md text-rose-500"
            to="/"
          >
            Upload Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
