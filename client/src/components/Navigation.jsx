

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation(); // Get current location
  const navigationItems = [
    { name: "Dashboard", icon: "/icons/dashboard.png", path: "/" },
    { name: "Students", icon: "/icons/students.png", path: "/students" },
    { name: "Chapter", icon: "/icons/chapter.png", path: "/chapter" },
    { name: "Help", icon: "/icons/help.png", path: "/help" },
    { name: "Reports", icon: "/icons/reports.png", path: "/reports" },
    { name: "Settings", icon: "/icons/settings.png", path: "/settings" },
  ];

  return (
    <nav className="flex flex-col gap-6 p-4 bg-white h-full">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-8">
        <img
          src="/icons/logo.png" // Path to your favicon/logo
          alt="Logo"
          className="w-20 h-10 md:w-16 md:h-8"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-6">
        {navigationItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center text-gray-700 px-3 py-2 rounded-lg ${
                location.pathname === item.path
                  ? "bg-gray-200" // Selected color
                  : "hover:bg-gray-200"
              }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-5 h-5  mr-3"
              />
              <span className="text-base md:text-sm">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
