import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">

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
          SAVE THE DATE
        </p>


        <h1 className="text-6xl md:text-8xl font-bold mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>
          JEDIDIA
          <br />
          &
          <br />
          DEFI
        </h1>


        <p className="text-xl md:text-2xl mb-8">
          18 Septembre 2026
        </p>

      </motion.div>


    </section>
  );
}

export default Hero;