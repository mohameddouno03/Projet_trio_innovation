// src/Components/DashboardLayout.jsx
import React from "react";
import NavbarDashboard from "./NavbarDashboard";
import SidebarDashboard from "./SidebarDashboard";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <SidebarDashboard />
      <div className="flex flex-col flex-grow">
        <NavbarDashboard />
        <main className="flex-grow p-4 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
