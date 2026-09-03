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

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          JEDIDIA
          <br />
          &
          <br />
          DEFI
        </h1>

      </motion.div>


    </section>
  );
}

export default Hero;