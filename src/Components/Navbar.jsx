import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 mb-5 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold">TRIOINNOV</h1>

          {/* Liens de navigation + boutons regroupés */}
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fonctionnalite" className="hover:text-gray-300 transition">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/aperçu" className="hover:text-gray-300 transition">
                  Aperçu
                </Link>
              </li>
              <li>
                <Link to="/temoingnages" className="hover:text-gray-300 transition">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition">
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gray-300 transition">
                  FAQ
                </Link>
              </li>
            </ul>

            {/* Boutons Connexion / Inscription */}
            <div className="flex space-x-2">
              <Link
                to="/login"
                className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-800 transition"
              >
                Connexion
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
              >
                Inscription
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
