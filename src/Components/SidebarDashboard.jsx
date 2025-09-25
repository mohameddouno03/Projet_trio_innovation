import React, { useState } from "react";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

export default function SidebarDashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { icon: "pi pi-home", label: "Dashboard" },
    { icon: "pi pi-shopping-cart", label: "Ventes" },
    { icon: "pi pi-users", label: "Clients" },
    { icon: "pi pi-box", label: "Produits" },
    { icon: "pi pi-user", label: "Utilisateurs" },
    { icon: "pi pi-chart-line", label: "Rapports" },
    { icon: "pi pi-cog", label: "Paramètres" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 flex flex-col dark:bg-gray-900 dark:text-white shadow-lg rounded-r-2xl`}
        style={{
          width: collapsed ? "60px" : "200px",
          overflow: "hidden",
        }}
      >
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between p-4">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <img
                src="https://primefaces.org/cdn/primereact/images/logo.png"
                alt="Logo"
                className="h-8"
              />
              <span className="font-bold text-lg">Mon SaaS</span>
            </div>
          )}
          <Button
            icon="pi pi-bars"
            className="p-button-rounded p-button-text"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          />
        </div>

        {/* Menu */}
        <ul className="list-none p-0 m-0 flex-1">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-4 rounded-lg mx-2 transition-colors"
            >
              <i className={`${item.icon} text-lg`}></i>
              {!collapsed && (
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Profil */}
        <div className="p-4 flex items-center gap-3 mt-auto">
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            shape="circle"
          />
          {!collapsed && (
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Amy Elsner
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
