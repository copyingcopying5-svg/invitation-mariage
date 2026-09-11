import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    console.log("Tentative de connexion :", email);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("Résultat Supabase :", data);
    console.log("Erreur Supabase :", error);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <p className="font-['Poppins'] text-xs uppercase tracking-[4px] text-[#C8A54D] mb-4">
            Administration
          </p>

          <h1 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#222]">
            JEDIDIA & DEFI
          </h1>

          <div className="w-20 h-[1px] bg-[#C8A54D] mx-auto mt-5" />

          <p className="font-['Poppins'] text-sm text-[#777] mt-5">
            Connectez-vous à votre espace administrateur
          </p>
        </div>

        <div className="bg-white rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label
                htmlFor="email"
                className="block font-['Poppins'] text-sm text-[#444] mb-2"
              >
                Adresse e-mail
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@email.com"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAF8F5] outline-none font-['Poppins'] text-sm text-[#333] focus:border-[#C8A54D] transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-['Poppins'] text-sm text-[#444] mb-2"
              >
                Mot de passe
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAF8F5] outline-none font-['Poppins'] text-sm text-[#333] focus:border-[#C8A54D] transition"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm font-['Poppins']">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C8A54D] text-white py-4 rounded-xl font-['Poppins'] font-semibold text-sm tracking-[0.5px] hover:bg-[#b8943f] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>

          </form>
        </div>

        <p className="text-center font-['Poppins'] text-xs text-[#999] mt-6">
          Espace réservé à l'administration
        </p>
      </motion.div>
    </div>
  );
}

export default Login;