// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({sidebarOpen}) => {
  const linkClasses = ({ isActive }) =>
    `block p-4 hover:bg-gray-700 ${isActive ? "bg-gray-900" : ""}`;

  return (
    <div className={`h-full ${sidebarOpen}`}>
      <h2 className="text-xl font-bold p-4 border-b border-gray-700">
        Dashboard
      </h2>
      <nav>
        <NavLink to="/admin" end className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/admin/analytics" className={linkClasses}>
          Analytics
        </NavLink>
        <NavLink to="/admin/settings" className={linkClasses}>
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
