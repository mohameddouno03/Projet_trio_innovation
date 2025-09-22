import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar";
import { ChevronDown } from "lucide-react";


function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment puis-je créer un compte ?",
      answer:
        "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut à droite, remplissez vos informations et confirmez votre email.",
    },
    {
      question: "Puis-je modifier mes informations personnelles ?",
      answer:
        "Oui, vous pouvez modifier vos informations depuis votre profil. Cliquez sur 'Mon compte' puis 'Modifier mes informations'.",
    },
    {
      question: "Comment contacter le support ?",
      answer:
        "Vous pouvez nous contacter via le formulaire de contact ou envoyer un email directement à contact@trioinnov.com.",
    },
    {
      question: "Est-ce que mes données sont sécurisées ?",
      answer:
        "Oui, nous utilisons un chiffrement moderne pour protéger vos données et nous respectons les normes RGPD.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-20 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 mt-6">FAQ</h2>
        <p className="text-center text-gray-600 mb-12">
          Les questions les plus fréquentes sur <span className="font-bold">TRIOINNOV</span>.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between p-5">
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="px-5 pb-5 text-gray-600"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
       
    </div>
  );
}

export default FAQ;
