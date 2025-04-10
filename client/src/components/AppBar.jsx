import React from 'react'

const AppBar = ({toggleSidebar}) => {
  return (
    <header className="flex items-center justify-between bg-white shadow p-4">
      {/* Hamburger menu: visible on mobile */}
      <button
        className="md:hidden text-gray-500 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      {/* Placeholder for profile image / notifications */}
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}

export default AppBar