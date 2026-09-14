import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Admin() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Filtre sur la colonne attendance
  const [attendanceFilter, setAttendanceFilter] = useState("all");

  useEffect(() => {
    const fetchParticipants = async () => {
      setLoading(true);
      setErrorMessage("");

      const { data, error } = await supabase
        .from("rsvp")
        .select("*")
        .order("created_at", { ascending: false });

      console.log("Données reçues :", data);
      console.log("Erreur Supabase :", error);

      if (error) {
        console.error(
          "Erreur lors du chargement des participants :",
          error
        );

        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      setParticipants(data || []);
      setLoading(false);
    };

    fetchParticipants();
  }, []);

  // Filtrage selon attendance
  const filteredParticipants = participants.filter((participant) => {
    if (attendanceFilter === "all") {
      return true;
    }

    return participant.attendance === attendanceFilter;
  });

  // Statistiques
  const totalParticipants = participants.length;

  const totalPresent = participants.filter(
    (participant) => participant.attendance === "present"
  ).length;

  const totalAbsent = participants.filter(
    (participant) => participant.attendance === "absent"
  ).length;

  // Déconnexion
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  // PDF
const handleDownloadPDF = () => {
  const doc = new jsPDF("landscape");

  // =========================
  // EN-TÊTE
  // =========================

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("JEDIDIA & DEFI", 14, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Liste des invités", 14, 27);

  let filterLabel = "Tous les invités";

  if (attendanceFilter === "present") {
    filterLabel = "Invités présents";
  }

  if (attendanceFilter === "absent") {
    filterLabel = "Invités absents";
  }

  doc.setFontSize(9);
  doc.text(`Filtre : ${filterLabel}`, 14, 35);

  doc.text(
    `Nombre d'invités : ${filteredParticipants.length}`,
    14,
    41
  );

  // =========================
  // PRÉPARATION DES DONNÉES
  // =========================

  const tableData = filteredParticipants.map((participant, index) => [
    index + 1,
    participant.name || "—",
    participant.phone || "—",
    participant.email || "—",
    participant.attendance === "present"
      ? "Présent"
      : participant.attendance === "absent"
      ? "Absent"
      : participant.attendance || "—",
    participant.message || "—",
  ]);

  // =========================
  // TABLEAU
  // =========================

  autoTable(doc, {
    startY: 48,

    head: [
      [
        "#",
        "Nom",
        "Téléphone",
        "E-mail",
        "Présence",
        "Message",
      ],
    ],

    body: tableData,

    // Largeur personnalisée des colonnes
    columnStyles: {
      0: {
        cellWidth: 10,
        halign: "center",
      },

      1: {
        cellWidth: 42,
      },

      2: {
        cellWidth: 38,
      },

      3: {
        cellWidth: 55,
      },

      4: {
        cellWidth: 25,
        halign: "center",
      },

      5: {
        cellWidth: 95,
      },
    },

    styles: {
      font: "helvetica",
      fontSize: 8,
      cellPadding: 3,
      valign: "middle",
      overflow: "linebreak",
    },

    headStyles: {
      fontStyle: "bold",
      fillColor: [200, 165, 77],
      textColor: [255, 255, 255],
      halign: "left",
    },

    alternateRowStyles: {
      fillColor: [250, 248, 245],
    },

    margin: {
      left: 14,
      right: 14,
    },

    // Hauteur maximale raisonnable pour les messages
    didParseCell: function (data) {
      if (data.section === "body" && data.column.index === 5) {
        data.cell.styles.cellWidth = 95;
      }
    },
  });

  // =========================
  // TÉLÉCHARGEMENT
  // =========================

  doc.save("JEDIDIA-DEFI-liste-invites.pdf");
};

  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      {/* ================= HEADER ================= */}
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


      {/* ================= CONTENU ================= */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#222]">
            Gestion des invités
          </h2>

          <p className="font-['Poppins'] text-sm text-[#777] mt-2">
            Consultez et gérez les réponses de vos invités.
          </p>
        </motion.div>


        {/* ================= STATISTIQUES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          {/* Total */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_5px_25px_rgba(0,0,0,0.05)]">
            <p className="font-['Poppins'] text-xs uppercase tracking-[1px] text-[#999]">
              Total des invités
            </p>

            <p className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#222] mt-2">
              {totalParticipants}
            </p>
          </div>


          {/* Présents */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_5px_25px_rgba(0,0,0,0.05)]">
            <p className="font-['Poppins'] text-xs uppercase tracking-[1px] text-[#999]">
              Présents
            </p>

            <p className="font-['Cormorant_Garamond'] text-5xl font-semibold text-green-600 mt-2">
              {totalPresent}
            </p>
          </div>


          {/* Absents */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_5px_25px_rgba(0,0,0,0.05)]">
            <p className="font-['Poppins'] text-xs uppercase tracking-[1px] text-[#999]">
              Absents
            </p>

            <p className="font-['Cormorant_Garamond'] text-5xl font-semibold text-red-500 mt-2">
              {totalAbsent}
            </p>
          </div>

        </div>


        {/* ================= FILTRE + PDF ================= */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-6">

          {/* Recherche attendance */}
          <div className="w-full md:w-80">

            <label
              htmlFor="attendance"
              className="block font-['Poppins'] text-sm text-[#444] mb-2"
            >
              Rechercher par présence
            </label>

            <select
              id="attendance"
              value={attendanceFilter}
              onChange={(e) => setAttendanceFilter(e.target.value)}
              className="
                w-full
                px-4
                py-3.5
                rounded-xl
                border
                border-gray-200
                bg-white
                outline-none
                font-['Poppins']
                text-sm
                text-[#333]
                focus:border-[#C8A54D]
                transition
              "
            >
              <option value="all">
                Tous les invités
              </option>

              <option value="present">
                Présents
              </option>

              <option value="absent">
                Absents
              </option>
            </select>

          </div>


          {/* PDF */}
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


        {/* ================= TABLEAU ================= */}
        <div className="bg-white rounded-[24px] shadow-[0_5px_25px_rgba(0,0,0,0.05)] overflow-hidden">

          {/* Erreur */}
          {errorMessage ? (

            <div className="p-10 text-center">

              <p className="font-['Poppins'] text-sm text-red-600">
                Erreur : {errorMessage}
              </p>

            </div>

          ) : loading ? (

            /* Chargement */
            <div className="p-10 text-center">

              <p className="font-['Poppins'] text-sm text-[#777]">
                Chargement des invités...
              </p>

            </div>

          ) : filteredParticipants.length === 0 ? (

            /* Aucun résultat */
            <div className="p-10 text-center">

              <p className="font-['Poppins'] text-sm text-[#777]">
                Aucun invité ne correspond à cette recherche.
              </p>

            </div>

          ) : (

            /* Tableau */
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
                      Présence
                    </th>

                    <th className="text-left px-6 py-4 font-['Poppins'] text-xs uppercase tracking-[1px] text-[#999]">
                      Message
                    </th>

                  </tr>
                </thead>


                <tbody>

                  {filteredParticipants.map((participant) => (

                    <tr
                      key={participant.id}
                      className="
                        border-b
                        border-gray-50
                        last:border-0
                        hover:bg-[#FAF8F5]
                        transition
                      "
                    >

                      {/* Nom */}
                      <td className="px-6 py-5 min-w-[220px] whitespace-nowrap font-['Poppins'] text-sm font-medium text-[#333]">
                        {participant.name || "—"}
                      </td>


                      {/* Téléphone */}
                      <td className="px-6 py-5 font-['Poppins'] text-sm text-[#666]">
                        {participant.phone || "—"}
                      </td>


                      {/* Email */}
                      <td className="px-6 py-5 font-['Poppins'] text-sm text-[#666]">
                        {participant.email || "—"}
                      </td>


                      {/* Présence */}
                      <td className="px-6 py-5">

                        {participant.attendance === "present" ? (

                          <span
                            className="
                              inline-flex
                              items-center
                              px-3
                              py-1.5
                              rounded-full
                              bg-green-50
                              text-green-700
                              font-['Poppins']
                              text-xs
                              font-medium
                            "
                          >
                            Présent
                          </span>

                        ) : participant.attendance === "absent" ? (

                          <span
                            className="
                              inline-flex
                              items-center
                              px-3
                              py-1.5
                              rounded-full
                              bg-red-50
                              text-red-600
                              font-['Poppins']
                              text-xs
                              font-medium
                            "
                          >
                            Absent
                          </span>

                        ) : (

                          <span
                            className="
                              inline-flex
                              items-center
                              px-3
                              py-1.5
                              rounded-full
                              bg-gray-100
                              text-gray-600
                              font-['Poppins']
                              text-xs
                              font-medium
                            "
                          >
                            {participant.attendance || "Inconnu"}
                          </span>

                        )}

                      </td>


                      {/* Message */}
                      <td className="px-6 py-5 min-w-[180px] max-w-[220px] whitespace-normal break-words font-['Poppins'] text-sm text-[#777]">
                        {participant.message || "—"}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>


        {/* Nombre de résultats */}
        {!loading && !errorMessage && (
          <p className="font-['Poppins'] text-xs text-[#999] mt-4 text-right">
            {filteredParticipants.length} invité
            {filteredParticipants.length > 1 ? "s" : ""} affiché
            {filteredParticipants.length > 1 ? "s" : ""}
          </p>
        )}

      </main>

    </div>
  );
}

export default Admin;