import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// PrimeReact CSS
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Thème PrimeReact
import "primereact/resources/primereact.min.css"; // Styles PrimeReact
import "primeicons/primeicons.css"; // Icônes PrimeIcons
import "primeflex/primeflex.css"; // Utilitaires Flex

// Pages publiques
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

// Dashboard
import Dashboard from "./Pages/Dashboard";

// PrimeReact components (utiles pour NavbarDashboard, SidebarDashboard)
import { Menubar } from "primereact/menubar";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { InputText } from "primereact/inputtext";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";

function Layout({ children }) {
  const location = useLocation();

  // Pages sans Navbar/Footer
  const noNavFooter = ["/login", "/signup", "/dashboard"];

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
        {/* Pages publiques */}
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

        {/* Dashboard SaaS */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
