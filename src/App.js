import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Fonctionnalité from "./Pages/Fonctionnalité";
import Apercus from "./Pages/Aperçus";
import Temoingnages from "./Pages/Temoingnages";
import Contact from "./Pages/Contact";


// Exemple simple de page Home
function HomePage() {
  return (
    <div className="text-center mt-20 text-3xl font-bold text-white">
      Bienvenue sur TRIOINNOV 🚀
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fonctionnalite" element={<Fonctionnalité />} />
          <Route path="/aperçu" element={<Apercus />} />
          <Route path="/temoingnages" element={<Temoingnages />} />
          <Route path="/contact" element={<Contact />} />



          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
