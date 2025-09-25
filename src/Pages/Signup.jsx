import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AiOutlineUserAdd,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
} from "react-icons/ai";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("USER"); // 🎯 Champ role ajouté
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8081/auth/register", {
        username,
        email,
        password,
        role, // 🎯 On envoie le role au backend
      });

      setLoading(false);
      navigate("/login");
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message ||
          "Erreur lors de l'inscription — vérifiez vos informations ou le serveur."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="absolute top-5 left-5">
        <Link to="/" aria-label="Accueil">
          <AiOutlineHome size={30} className="text-sky-500 hover:text-sky-700 transition" />
        </Link>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
          <AiOutlineUserAdd /> Inscription
        </h2>

        {error && <div className="text-sm text-red-600 mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="relative">
            <AiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              aria-label="Nom d'utilisateur"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nom d'utilisateur"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              aria-label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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

          {/* Confirm Password */}
          <div className="relative">
            <AiOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              aria-label="Confirmer le mot de passe"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmer le mot de passe"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Role */}
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full pl-4 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            >
              <option value="USER">Utilisateur</option>
              <option value="ADMIN">Administrateur</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-white transition ${
              loading ? "bg-sky-300 cursor-not-allowed" : "bg-sky-500 hover:bg-sky-600"
            }`}
          >
            <AiOutlineUserAdd />
            {loading ? "Inscription..." : "S'inscrire"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-sky-500 hover:underline">
            Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
