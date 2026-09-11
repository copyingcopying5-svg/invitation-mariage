import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

function Admin() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchParticipants = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("rsvp")
      .select("*")
      .eq("attendance", "Oui, je serai présent(e)")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erreur lors du chargement des participants :", error);
      setLoading(false);
      return;
    }

    setParticipants(data || []);
    setLoading(false);
  };

  fetchParticipants();
}, []);

  const handleLogout = () => {
    console.log("Déconnexion");
  };

  const handleDownloadPDF = () => {
    console.log("Téléchargement PDF");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <p className="font-['Poppins'] text-[10px] uppercase tracking-[3px] text-[#C8A54D]">
              Administration
            </p>

            <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#222]">
              JEDIDIA & DEFI
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="
              border
              border-gray-200
              px-4
              py-2.5
              rounded-xl
              font-['Poppins']
              text-xs
              text-[#555]
              hover:bg-gray-50
              transition
            "
          >
            Déconnexion
          </button>

        </div>
      </header>

      {/* Contenu */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#222]">
            Participants confirmés
          </h2>

          <p className="font-['Poppins'] text-sm text-[#777] mt-2">
            Liste des invités ayant confirmé leur présence.
          </p>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-2xl p-6 shadow-[0_5px_25px_rgba(0,0,0,0.05)]">
            <p className="font-['Poppins'] text-xs uppercase tracking-[1px] text-[#999]">
              Participants confirmés
            </p>

            <p className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#222] mt-2">
              {participants.length}
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="flex justify-end mb-5">

          <button
            onClick={handleDownloadPDF}
            className="
              bg-[#C8A54D]
              text-white
              px-6
              py-3.5
              rounded-xl
              font-['Poppins']
              text-sm
              font-semibold
              hover:bg-[#b8943f]
              transition
              shadow-[0_5px_20px_rgba(200,165,77,0.2)]
            "
          >
            📄 Télécharger la liste PDF
          </button>

        </div>

        {/* Tableau */}
        <div className="bg-white rounded-[24px] shadow-[0_5px_25px_rgba(0,0,0,0.05)] overflow-hidden">

          {loading ? (
            <div className="p-10 text-center">
              <p className="font-['Poppins'] text-sm text-[#777]">
                Chargement...
              </p>
            </div>
          ) : participants.length === 0 ? (
            <div className="p-10 text-center">
              <p className="font-['Poppins'] text-sm text-[#777]">
                Aucun participant confirmé pour le moment.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-4 font-['Poppins'] text-xs uppercase tracking-[1px] text-[#999]">
                      Nom
                    </th>

                    <th className="text-left px-6 py-4 font-['Poppins'] text-xs uppercase tracking-[1px] text-[#999]">
                      Téléphone
                    </th>

                    <th className="text-left px-6 py-4 font-['Poppins'] text-xs uppercase tracking-[1px] text-[#999]">
                      E-mail
                    </th>

                    <th className="text-left px-6 py-4 font-['Poppins'] text-xs uppercase tracking-[1px] text-[#999]">
                      Message
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {participants.map((participant) => (
                    <tr
                      key={participant.id}
                      className="border-b border-gray-50 last:border-0 hover:bg-[#FAF8F5] transition"
                    >

                      <td className="px-6 py-5 font-['Poppins'] text-sm font-medium text-[#333]">
                        {participant.name}
                      </td>

                      <td className="px-6 py-5 font-['Poppins'] text-sm text-[#666]">
                        {participant.phone}
                      </td>

                      <td className="px-6 py-5 font-['Poppins'] text-sm text-[#666]">
                        {participant.email}
                      </td>

                      <td className="px-6 py-5 font-['Poppins'] text-sm text-[#777]">
                        {participant.message || "—"}
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </main>
    </div>
  );
}

export default Admin;