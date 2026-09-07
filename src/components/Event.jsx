import { motion } from "framer-motion";

function Event() {
  return (
    <section
      id="dress-code"
      className="py-24 px-6 bg-[#F8EDEF]"
    >
      <div className="max-w-6xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* TITRE */}

          <h2 className="
            text-5xl
            md:text-6xl
            font-serif
            text-black
            mb-8
          ">
            Dress Code
          </h2>

          {/* PETITE LIGNE DÉCORATIVE */}

          <div className="
            w-48
            h-[2px]
            mx-auto
            mb-7
            bg-gradient-to-r
            from-[#f3b6b6]
            via-[#e8c77a]
            to-[#f3b6b6]
          " />

          {/* THÈME */}

          <p className="text-gray-600 leading-8">
            Chic & Glamour
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Event;