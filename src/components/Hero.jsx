import { motion } from "framer-motion";
import img1 from "../assets/img_1.jpg";

function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img1})`,
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
        <br />
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          JEDIDIA
          <br /><br />
          &
          <br /><br />
          DEFI
        </h1>
      </motion.div>

    </section>
  );
}

export default Hero;