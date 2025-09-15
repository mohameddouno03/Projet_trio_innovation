import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar";

function Apercu() {
  const apercus = [
    {
      id: 1,
      image: "/dashboard.jpg",
      title: "Tableau de bord interactif",
      description: "Accédez à un tableau de bord clair et dynamique qui centralise toutes vos informations. Suivez vos indicateurs clés grâce à des graphiques interactifs, des statistiques actualisées en temps réel et une interface pensée pour la simplicité. Prenez des décisions éclairées rapidement grâce à une vue d’ensemble complète de votre activité."
    },
    {
      id: 2,
      image: "/innovation.jpg",
      title: "Gestion des utilisateurs",
      description: "Administrez vos équipes en toute simplicité grâce à notre module de gestion des utilisateurs. Créez de nouveaux comptes, attribuez des rôles personnalisés et contrôlez les accès avec précision. Gardez une vision claire de vos collaborateurs et assurez une gestion sécurisée et fluide de vos utilisateurs"
    },
    {
      id: 3,
      image: "/maxim-hopman-8vn4KvfU640-unsplash.jpg",
      title: "Suivi des performances",
      description: "Mesurez l’efficacité de vos actions et optimisez vos résultats grâce à des outils de suivi avancés. Suivez l’évolution de vos performances à travers des rapports détaillés, détectez vos forces et identifiez rapidement les points à améliorer. Transformez vos données en leviers de croissance concrets."
    },
    {
      id: 4,
      image: "/markus-spiske-UVMDzcd0T_Q-unsplash.jpg",
      title: "Analyse des ventes",
      description: "Gardez un œil précis sur vos ventes et vos revenus grâce à une analyse complète et intuitive. Générez des rapports détaillés, visualisez vos tendances commerciales et identifiez les opportunités de croissance. Avec TRIOINNOV, vos chiffres deviennent des solutions stratégiques pour booster vos performances commerciales."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation toutes les 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % apercus.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [apercus.length]);

  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Navbar fixe */}
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-[80px] py-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Image animée */}
        <div className="flex-1 relative w-full lg:w-1/2 h-96 overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={apercus[currentIndex].id}
              src={apercus[currentIndex].image}
              alt={apercus[currentIndex].title}
              className="w-full h-full object-cover object-center"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Texte animé */}
        <div className="flex-1 lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={apercus[currentIndex].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {apercus[currentIndex].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {apercus[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Apercu;
