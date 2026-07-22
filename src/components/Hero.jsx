import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552')",
        }}
      ></div>

      {/* Voile sombre */}
      <div className="absolute inset-0 bg-black/40"></div>


      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >

        <p className="uppercase tracking-[6px] text-sm mb-6">
          Nous avons le plaisir de vous inviter
        </p>


        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          ERIC
          <br />
          &
          <br />
          ESTHER
        </h1>


        <p className="text-xl md:text-2xl mb-8">
          18 Décembre 2026
        </p>


        <button
          className="
          px-8 py-3 
          border border-white 
          rounded-full
          hover:bg-white 
          hover:text-black
          transition
          "
        >
          Découvrir
        </button>


      </motion.div>


    </section>
  );
}

export default Hero;