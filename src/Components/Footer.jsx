import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <motion.footer
      className="bg-gray-600 text-[#EAECC6] py-12 mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Liens rapides */}
        <div>
          <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Accueil</a></li>
            <li><a href="/fonctionnalite" className="hover:text-white transition">Fonctionnalités</a></li>
            <li><a href="/apercu" className="hover:text-white transition">Aperçus</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5" /> 
            <a href="mailto:contact@trioinnov.com" className="hover:text-white transition">contact@trioinnov.com</a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-5 h-5" />
            <a href="tel:+224620000000" className="hover:text-white transition">+224 620 00 00 00</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Conakry, Guinée</span>
          </div>
        </div>

        {/* Réseaux sociaux et branding */}
        <div>
          <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-6 font-bold text-lg">
            TRIOINNOV
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-[#EAECC6]/80 text-sm">
        &copy; {new Date().getFullYear()} TRIOINNOV. Tous droits réservés.
      </div>
    </motion.footer>
  );
}

export default Footer;
