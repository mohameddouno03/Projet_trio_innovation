import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";

function Apropos() {
  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Navbar fixe */}
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 mt-[100px] py-16 flex flex-col lg:flex-row items-start gap-12">

        {/* Texte détaillé */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">À propos de TRIOINNOV</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            TRIOINNOV est une solution SaaS complète de gestion de stock conçue pour les entreprises de toutes tailles. 
            Elle centralise vos informations sur les produits, les ventes, les stocks et les utilisateurs, vous permettant 
            de prendre des décisions éclairées en temps réel. Grâce à une interface intuitive et réactive, vous pouvez suivre 
            vos niveaux de stock, planifier les approvisionnements, analyser les ventes et optimiser la gestion de vos ressources. 
            Les rapports détaillés et les outils d’analyse intégrés vous offrent une vision globale de votre activité, 
            identifiant rapidement les opportunités d’amélioration et les points critiques à surveiller. 
            Avec TRIOINNOV, la gestion de stock devient simple, efficace et stratégique, vous permettant de gagner du temps, 
            de réduire les erreurs et d’améliorer la performance globale de votre entreprise.
          </p>
        </motion.div>

        {/* Image alignée à la hauteur du texte */}
        <motion.div
          className="flex-1 w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg flex items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/apropos.jpg"
            alt="Aperçu TRIOINNOV"
            className="w-full object-cover rounded-xl"
            style={{ height: "100%" }} // force l'image à s'étendre sur toute la hauteur du texte
          />
        </motion.div>

      </div>
    </div>
  );
}

export default Apropos;
