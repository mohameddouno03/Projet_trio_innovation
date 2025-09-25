import React from "react";
import NavbarDashboard from "../Components/NavbarDashboard";
import SidebarDashboard from "../Components/SidebarDashboard";
import VerticalBarDemo from "../Components/Charts/VerticalBarDemo";
import ComboDemo from "../Components/Charts/ComboDemo";
import { Card } from "primereact/card";
import DataTableDashboard from "../Components/DataTableDashboard";

export default function Dashboard() {
  const data = [
    { title: "Ventes", value: "1,250", icon: "pi pi-shopping-cart", color: "bg-blue-500" },
    { title: "Clients", value: "320", icon: "pi pi-users", color: "bg-green-500" },
    { title: "Produits", value: "1,024", icon: "pi pi-box", color: "bg-purple-500" },
    { title: "Utilisateurs", value: "58", icon: "pi pi-user", color: "bg-yellow-500" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarDashboard />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col  dark:bg-gray-900 transition-colors duration-300">
        {/* Navbar */}
        <NavbarDashboard />

        {/* Contenu dashboard */}
        <main className="p-4 overflow-auto flex flex-col">
          {/* Titre */}
          <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Tableau de bord
          </h1>

          {/* Cartes statistiques centrées */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.map((item, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-2xl transition-all rounded-xl dark:bg-gray-800 p-4 px-6 flex flex-col items-center justify-center"
                >
                  <div
                    className={`p-3 rounded-full ${item.color} flex items-center justify-center shadow-md`}
                  >
                    <i className={`${item.icon} text-2xl text-black`}></i>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="text-sm font-semibold text-white-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg font-bold text-white-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
            {/* Section Charts */}
{/* Section Charts */}
<div className="mt-8 flex justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

    {/* Chart 1 — VerticalBarDemo */}
    <Card
      className="shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center dark:bg-gray-800 col-span-1"
    >
      <h3 className="text-lg font-semibold mb-4 text-white-800 dark:text-white text-center w-full pb-6">
        Performance mensuelle
      </h3>
      <div className="w-full max-w-sm h-80 flex justify-center items-center">
        <VerticalBarDemo />
      </div>
    </Card>

    {/* Chart 2 — ComboDemo */}
    <Card
      className="shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center dark:bg-gray-800 col-span-2"
    >
      <h3 className="text-lg font-semibold mb-4 text-white-800 dark:text-white text-center w-full">
        Analyse combinée
      </h3>
      <div className="w-full max-w-full h-100 flex justify-center items-center">
        <ComboDemo />
      </div>
    </Card>

  </div>
</div>
{/* Section Tableau de données */}
<div className="mt-8">
    <DataTableDashboard />
</div>




        </main>
      </div>
    </div>
  );
}
