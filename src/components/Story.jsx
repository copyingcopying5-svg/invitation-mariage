import { motion } from "framer-motion";

function Story() {
  return (
    <section id="histoire" className="py-24 px-6 bg-[#FAF8F5]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
            alt="Couple"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>


        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-5xl mb-6">
            SAVE THE DATE
          </h2>

          <p className="text-gray-600 leading-8">
            24 OCTOBRE 2026 à 18H00 <br />
            AU CHAPITEAU SHEKINAH EVENT <br />
            N°2, Croisement des avenues Munua et Dikuku. <br />
            Golf Météo Faustin <br />
            Réf : Arret la Katagaise 
          </p>

          <p className="text-[#C8A54D] uppercase tracking-[4px] text-sm mb-4">
            <br />DEUX COEURS UNE DESTINEE
          </p>


          <p className="text-gray-600 leading-8">
            Pas à pas la providence a guidé nos chemins jusqu'à ce point de rencontre parfait.
            Ce qui n'était qu'un espoir est devenu notre plus belle certitude : marcher ensemble,
            sous le regard du Très-Haut, pour tout le reste de notre voyage.
          </p>


        </motion.div>

      </div>

    </section>
  );
}

export default Story;