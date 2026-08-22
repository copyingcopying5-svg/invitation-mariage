import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaClock,
} from "react-icons/fa";

function Location() {
  const locations = [
    {
      type: "Mariage civil",
      title: "Espace LC Jardin",
      address: "Avenue Ruby, Q. Golf Météo, Lubumbashi",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Espace+LC+Jardin+Avenue+Ruby+Golf+Meteo+Lubumbashi",
    },
    {
      type: "Mariage religieux",
      title: "Église Discipolat",
      address: "Avenue Tshimanga, Q. Golf Faustin, Lubumbashi",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Eglise+Discipolat+Avenue+Tshimanga+Golf+Faustin+Lubumbashi",
    },
    {
      type: "Soirée",
      title: "Réception",
      address:
        "N°2, croisement des avenues Munua et Dikuku, Q. Golf Météo Faustin, Lubumbashi",
      theme: "Chic & Glamour",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=2+croisement+avenues+Munua+Dikuku+Golf+Meteo+Faustin+Lubumbashi",
    },
  ];

  const program = [
    {
      time: "18H00",
      title: "Arrivée et installation des invités",
    },
    {
      time: "20H00",
      title: "Entrée des mariés",
    },
    {
      time: "20H15",
      title: "Présentation des mariés",
    },
    {
      time: "20H35",
      title: "Ouverture de bal",
    },
    {
      time: "21H20",
      title: "Buffet",
    },
    {
      time: "22H00",
      title: "Remise des cadeaux",
    },
    {
      time: "22H30",
      title: "Musique et danse",
    },
  ];

  return (
    <section className="bg-[#FAF8F5]">

      {/* =========================
          LES LIEUX
      ========================= */}

      <div id="lieux" className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-[#C8A54D] uppercase tracking-[4px] text-sm mb-4">
              Où nous retrouver
            </p>

            <h2 className="text-5xl mb-5">
              Les lieux de notre célébration
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-7">
              Retrouvez facilement les différents lieux où nous aurons
              la joie de partager ces moments avec vous.
            </p>
          </motion.div>


          <div className="grid md:grid-cols-3 gap-8">

            {locations.map((location, index) => (

              <motion.div
                key={location.type}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="
                  bg-white
                  rounded-2xl
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  transition
                "
              >

                <div className="
                  w-14
                  h-14
                  mx-auto
                  mb-6
                  rounded-full
                  bg-[#FAF8F5]
                  flex
                  items-center
                  justify-center
                ">
                  <FaMapMarkerAlt className="text-[#C8A54D] text-2xl" />
                </div>


                <p className="
                  text-[#C8A54D]
                  uppercase
                  tracking-[2px]
                  text-xs
                  mb-3
                  text-center
                ">
                  {location.type}
                </p>


                <h3 className="text-3xl text-center mb-4">
                  {location.title}
                </h3>


                <p className="
                  text-gray-600
                  text-center
                  leading-7
                  mb-5
                ">
                  {location.address}
                </p>


                {location.theme && (
                  <div className="text-center mb-6">

                    <p className="
                      text-xs
                      uppercase
                      tracking-[2px]
                      text-gray-400
                      mb-1
                    ">
                      Thème de la soirée
                    </p>

                    <p className="
                      text-lg
                      italic
                      text-[#C8A54D]
                    ">
                      {location.theme}
                    </p>

                  </div>
                )}


                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    px-5
                    py-3
                    rounded-full
                    bg-[#C8A54D]
                    text-white
                    hover:opacity-90
                    transition
                  "
                >
                  <FaMapMarkerAlt />
                  Voir l'emplacement
                  <FaExternalLinkAlt className="text-xs" />
                </a>

              </motion.div>

            ))}

          </div>

        </div>

      </div>


      {/* =========================
          PROGRAMME DE LA SOIRÉE
      ========================= */}
    </section>
  );
}

export default Location;