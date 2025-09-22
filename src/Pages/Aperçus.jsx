import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar";

function Apercu() {
  const apercus = [
    {
      id: 1,
      image: "/dashboard.jpg",
      title: "Tableau de bord interactif",
      description: "TRIOINNOV centralise toutes vos informations dans un tableau de bord dynamique. Suivez vos indicateurs clés grâce à des graphiques interactifs et des statistiques mises à jour en temps réel. Prenez des décisions éclairées rapidement grâce à une vue d’ensemble complète de votre activité."
    },
    {
      id: 2,
      image: "/innovation.jpg",
      title: "Gestion des utilisateurs",
      description: "Administrez vos équipes facilement grâce à notre module de gestion des utilisateurs. Créez de nouveaux comptes, attribuez des rôles personnalisés et contrôlez les accès. Gardez une vision claire de vos collaborateurs et assurez une gestion sécurisée et fluide."
    },
    {
      id: 3,
      image: "/maxim-hopman-8vn4KvfU640-unsplash.jpg",
      title: "Suivi des performances",
      description: "Mesurez l’efficacité de vos actions et optimisez vos résultats grâce à des outils de suivi avancés. Suivez l’évolution de vos performances à travers des rapports détaillés, identifiez vos forces et améliorez vos points faibles."
    },
    {
      id: 4,
      image: "/markus-spiske-UVMDzcd0T_Q-unsplash.jpg",
      title: "Analyse des ventes",
      description: "Gardez un œil précis sur vos ventes et revenus grâce à une analyse complète et intuitive. Générez des rapports détaillés, visualisez vos tendances commerciales et identifiez des opportunités de croissance."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % apercus.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [apercus.length]);

  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Navbar fixe */}
      
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      <motion.h2
                className="text-3xl text-gray-800 font-bold text-center pt-20 mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Aperçu sur la TRIOINNOV
              </motion.h2>
      
      <div className="max-w-7xl mx-auto px-4 mt-[100px] py-16 flex flex-col lg:flex-row gap-12 items-start">
        
        
        {/* Texte à gauche */}
        <div className="flex-1 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={apercus[currentIndex].id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{apercus[currentIndex].title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{apercus[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image à droite */}
        <div className="flex-1 w-full lg:w-1/2 h-full overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={apercus[currentIndex].id}
              src={apercus[currentIndex].image}
              alt={apercus[currentIndex].title}
              className="w-full h-full object-cover rounded-xl"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default Apercu;
