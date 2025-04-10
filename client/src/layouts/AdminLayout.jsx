// src/layouts/AdminLayout.jsx
import {useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Siderbar";
import AppBar from "../components/AppBar";

const AdminLayout = () => {
      const [sidebarOpen, setSidebarOpen] = useState(false);

      const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };
  return (
    <>
      <AppBar toggleSidebar={toggleSidebar} />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-200 ease-in-out md:static md:translate-x-0 md:w-64`}
        >
          <Sidebar sidebarOpen={sidebarOpen}/>
        </aside>
        {/* Main Content */}
        <div className="flex-grow p-8 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
