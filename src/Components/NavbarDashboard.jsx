import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";

export default function NavbarDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between p-4 shadow-lg px-4 h-16">
      {/* Partie gauche vide */}
      <div className="flex items-center gap-4"></div>

      {/* Barre de recherche */}
      <div className="flex items-center gap-4">
        <span className="relative">
          <InputText
            placeholder="Rechercher..."
            className="pr-10 p-1 text-black"
          />
          <i className="pi pi-search absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-black dark:text-black"></i>
        </span>

        {/* Notifications */}
        <div className="relative">
          <i className="pi pi-bell text-xl cursor-pointer dark:text-white"></i>
          <Badge value="3" severity="danger" className="absolute -top-2 -right-2"></Badge>
        </div>

        {/* Mode sombre / clair */}
        <button
          className="p-button p-component p-button-text"
          onClick={toggleDarkMode}
        >
          <i
            className={`pi ${
              darkMode ? "pi-moon" : "pi-sun"
            } text-xl dark:text-white`}
          ></i>
        </button>

        {/* Profil */}
        <div className="flex items-center gap-2">
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            shape="circle"
            size="small"
          />
          <span className="font-medium dark:text-white">
            Amy Elsner
          </span>
        </div>
      </div>
    </header>
  );
}
