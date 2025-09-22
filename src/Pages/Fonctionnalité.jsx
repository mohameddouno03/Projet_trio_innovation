import React from "react";
import { Lightbulb, Settings, TrendingUp } from "lucide-react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion"; // ⚡ Import Framer Motion


function Fonctionnalité() {
  // Variants pour l'animation des cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" },
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar en haut */}
      <Navbar />

      {/* Contenu des fonctionnalités */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl text-gray-800 font-bold text-center mt-8 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos fonctionnalités
        </motion.h2>

        <motion.p
          className="text-center mb-12 font-medium text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Découvrez comment{" "}
          <span className="font-bold text-gray-800">TRIOINNOV</span> peut
          transformer votre façon de travailler.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Innovation */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center flex flex-col items-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <Lightbulb className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Innovation continue</h3>
            <p className="text-gray-600">
              Nous proposons des solutions innovantes adaptées à votre entreprise.
            </p>
          </motion.div>

          {/* Optimisation */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center flex flex-col items-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Settings className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Optimisation des processus</h3>
            <p className="text-gray-600">
              Améliorez votre productivité et gagnez du temps grâce à nos outils.
            </p>
          </motion.div>

          {/* Productivité */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center flex flex-col items-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Productivité accrue</h3>
            <p className="text-gray-600">
              Des méthodes et outils performants pour atteindre vos objectifs facilement.
            </p>
          </motion.div>
        </div>
      </div>
       
    </div>
    
  );
}

export default Fonctionnalité;
