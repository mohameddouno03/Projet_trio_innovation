import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Linkedin, Github } from "lucide-react";
import Navbar from "../Components/Navbar";


function Contact() {
  const infos = [
    {
      id: 1,
      icon: <Mail className="w-8 h-8 text-sky-500" />,
      title: "Email",
      value: "contact@trioinnov.com",
    },
    {
      id: 2,
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: "Téléphone",
      value: "+224 620 00 00 00",
    },
    {
      id: 3,
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      title: "Adresse",
      value: "Conakry, Guinée",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
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
        <h2 className="text-3xl font-bold text-gray-800 mt-7">Contactez-nous</h2>
        <p className="mt-2 text-gray-600">
          Une question ? Un projet ? Notre équipe est à votre écoute.
        </p>
      </motion.div>

      {/* Contenu */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-10 flex-1">
        {/* Formulaire */}
        <motion.form
          className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-400 outline-none"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-400 outline-none"
          />
          <input
            type="text"
            placeholder="Sujet"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-400 outline-none"
          />
          <textarea
            placeholder="Votre message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-400 outline-none"
          />
          <motion.button
            type="submit"
            className="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Envoyer le message
          </motion.button>
        </motion.form>

        {/* Infos de contact plus créatives */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {infos.map((info, index) => (
            <motion.div
              key={info.id}
              className="flex items-center bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex-shrink-0">{info.icon}</div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">{info.title}</h4>
                <p className="text-gray-600">{info.value}</p>
              </div>
            </motion.div>
          ))}

          {/* Réseaux sociaux */}
          <motion.div
            className="flex justify-center mt-6 space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-blue-500 hover:text-blue-700 transition" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 transition" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      
    </div>
  );
}

export default Contact;
