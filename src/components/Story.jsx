import { motion } from "framer-motion";
import img1 from "../assets/img2.jpg";

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
            src={img1}
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
            Save the date
          </h2>

          <p className="font-['Poppins'] text-[16px] md:text-[20px] font-light leading-relaxed">
            Samedi, 24 OCTOBRE 2026 à 18:00
          </p>

          <p className="font-['Poppins'] text-[20px] md:text-[24px] font-light leading-relaxed mt-2">
            CHAPITEAU SHEKINAH EVENT
          </p>

          <p className="text-gray-600 leading-8">
            <br />Deux cœurs, une destinée.
          </p>

          <p className="text-gray-600 leading-8">
            Pas à pas, la providence a guidé nos chemins jusqu'à ce point de rencontre parfait.
            Ce qui n'était qu'un espoir est devenu notre plus belle certitude : marcher ensemble,
            sous le regard du Très-Haut, pour tout le reste de notre voyage.
          </p>


        </motion.div>

      </div>

    </section>
  );
}

export default Story;