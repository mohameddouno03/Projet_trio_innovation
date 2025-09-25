import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AiOutlineLogin,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineLock,
} from "react-icons/ai";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8081/auth/login", {
        email,
        password,
      });

      // si votre API renvoie un token :
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }

      setLoading(false);
      navigate("/dashboard"); // redirige vers home (ou dashboard)
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message ||
          "Erreur lors de la connexion — vérifiez votre email/mot de passe ou le serveur."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      {/* Home icon */}
      <div className="absolute top-5 left-5">
        <Link to="/" aria-label="Accueil">
          <AiOutlineHome size={30} className="text-sky-500 hover:text-sky-700 transition" />
        </Link>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
          <AiOutlineLogin /> Connexion
        </h2>

        {error && <div className="text-sm text-red-600 mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              aria-label="Adresse email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <AiOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              aria-label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-white transition ${
              loading ? "bg-sky-300 cursor-not-allowed" : "bg-sky-500 hover:bg-sky-600"
            }`}
          >
            <AiOutlineLogin />
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Pas encore de compte ?{" "}
          <Link to="/signup" className="text-sky-500 hover:underline">
            Inscrivez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
