import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Fonctionnalité from "./Pages/Fonctionnalité";
import Apercus from "./Pages/Aperçus";
import Temoignages from "./Pages/Temoingnages";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Apropos from "./Pages/Apropos";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function Layout({ children }) {
  const location = useLocation();

  // Pages sans Navbar/Footer
  const noNavFooter = ["/login", "/signup"];

  const showNavFooter = !noNavFooter.includes(location.pathname);

  return (
    <>
      {showNavFooter && <Navbar />}
      <main>{children}</main>
      {showNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/apropos"
          element={
            <Layout>
              <Apropos />
            </Layout>
          }
        />
        <Route
          path="/fonctionnalite"
          element={
            <Layout>
              <Fonctionnalité />
            </Layout>
          }
        />
        <Route
          path="/aperçu"
          element={
            <Layout>
              <Apercus />
            </Layout>
          }
        />
        <Route
          path="/temoingnages"
          element={
            <Layout>
              <Temoignages />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        {/* Pages sans Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
