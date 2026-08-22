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

          <p className="text-[#C8A54D] uppercase tracking-[4px] text-sm mb-4">
            Notre histoire
          </p>


          <h2 className="text-5xl mb-6">
            Deux cœurs,
            <br />
            une destinée
          </h2>


          <p className="text-gray-600 leading-8">
            Notre histoire est un témoignage de grâce,
            de patience et d'amour. Au fil du temps,
            Dieu nous a conduits sur un chemin merveilleux
            jusqu'à ce jour où nous choisissons de marcher
            ensemble pour toute une vie.
          </p>


        </motion.div>

      </div>

    </section>
  );
}

export default Story;