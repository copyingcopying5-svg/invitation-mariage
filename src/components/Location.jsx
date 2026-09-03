import { motion } from "framer-motion";

function Location() {
  const mapsUrl =
    "https://www.google.com/maps?q=2%20croisement%20avenues%20Munua%20Dikuku%20Golf%20Meteo%20Faustin%20Lubumbashi&output=embed";

  return (
    <section
      id="lieux"
      className="py-24 px-6 bg-[#FAF8F5]"
    >
      <div className="max-w-4xl mx-auto">

        {/* TITRE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="
            text-3xl
            md:text-4xl
            text-gray-800
            mb-8
          ">
            Lieu de l’événement
          </h2>

          {/* CARTE */}

          <div
            className="
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
            "
          >
            <iframe
              src={mapsUrl}
              title="Lieu de la soirée"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Location;