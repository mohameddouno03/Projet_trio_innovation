import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";


function Temoignages() {
  const temoignages = [
    {
      id: 1,
      name: "Mohamed Kevin",
      role: "Responsable Marketing",
      image: "/user1.jpg",
      text: "TRIOINNOV a transformé notre façon de travailler. Grâce à leurs solutions, nous avons gagné un temps précieux dans la gestion de nos projets.",
    },
    {
      id: 2,
      name: "Musa Camara",
      role: "Entrepreneur",
      image: "/user2.jpg",
      text: "Une équipe professionnelle et des outils efficaces. Mon entreprise a nettement amélioré sa productivité depuis que nous utilisons TRIOINNOV.",
    },
    {
      id: 3,
      name: "Nankoria Camara",
      role: "Directrice RH",
      image: "/user3.jpg",
      text: "La simplicité et la performance des solutions TRIOINNOV nous permettent d’optimiser nos processus tout en gardant une grande flexibilité.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Titre */}
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mt-20 text-gray-800">
          Ils nous font confiance
        </h2>
        <p className="mt-2 text-gray-600">
          Découvrez ce que nos clients disent de{" "}
          <span className="font-bold text-sky-600">TRIOINNOV</span>.
        </p>
      </motion.div>

      {/* Témoignages */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3, // délai entre chaque carte
            },
          },
        }}
        viewport={{ once: true }}
      >
        {temoignages.map((t) => (
          <motion.div
            key={t.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 50 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { type: "spring", stiffness: 200 },
            }}
          >
            <motion.img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-sky-100"
              whileHover={{ rotate: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 150 }}
            />
            <h3 className="font-bold text-lg text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{t.role}</p>
            <p className="text-gray-600 italic">“{t.text}”</p>
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  );
}

export default Temoignages;
