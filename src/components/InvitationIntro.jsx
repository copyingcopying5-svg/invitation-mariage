import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function InvitationIntro({ guestName = "Jean-Pierre", onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    // Déclenche immédiatement l'ouverture et la musique
    setOpened(true);

    // Lance notamment la musique
    onOpen();
  };

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="
            fixed
            inset-0
            z-[100]
            bg-[#FAF8F5]
            flex
            items-center
            justify-center
            px-6
            overflow-hidden
          "
        >
          {/* Bordure extérieure */}
          <div
            className="
              absolute
              inset-4
              md:inset-8
              border
              border-[#C8A54D]/30
              pointer-events-none
            "
          />

          {/* Bordure intérieure */}
          <div
            className="
              absolute
              inset-6
              md:inset-10
              border
              border-[#C8A54D]/10
              pointer-events-none
            "
          />

          {/* ORNEMENT HAUT GAUCHE */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="
              absolute
              top-5
              left-5
              md:top-10
              md:left-10
              text-[#C8A54D]/50
              pointer-events-none
            "
          >
            <div className="text-5xl md:text-7xl font-serif rotate-[-15deg]">
              ❦
            </div>
          </motion.div>

          {/* ORNEMENT HAUT DROIT */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="
              absolute
              top-5
              right-5
              md:top-10
              md:right-10
              text-[#C8A54D]/50
              pointer-events-none
            "
          >
            <div className="text-5xl md:text-7xl font-serif rotate-[15deg]">
              ❦
            </div>
          </motion.div>

          {/* ORNEMENT BAS GAUCHE */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="
              absolute
              bottom-5
              left-5
              md:bottom-10
              md:left-10
              text-[#C8A54D]/50
              pointer-events-none
            "
          >
            <div className="text-5xl md:text-7xl font-serif rotate-[15deg]">
              ❦
            </div>
          </motion.div>

          {/* ORNEMENT BAS DROIT */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="
              absolute
              bottom-5
              right-5
              md:bottom-10
              md:right-10
              text-[#C8A54D]/50
              pointer-events-none
            "
          >
            <div className="text-5xl md:text-7xl font-serif rotate-[-15deg]">
              ❦
            </div>
          </motion.div>

          {/* PETITS POINTS DÉCORATIFS */}
          <div className="absolute top-[20%] left-[12%] text-[#C8A54D]/40 text-xs">
            ✦
          </div>

          <div className="absolute top-[28%] right-[14%] text-[#C8A54D]/30 text-sm">
            ✦
          </div>

          <div className="absolute bottom-[25%] left-[15%] text-[#C8A54D]/30 text-sm">
            ✦
          </div>

          <div className="absolute bottom-[18%] right-[12%] text-[#C8A54D]/40 text-xs">
            ✦
          </div>

          {/* CONTENU */}
          <div className="relative z-10 text-center max-w-2xl w-full">

            {/* INTRODUCTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="
                font-['Poppins']
                text-[#C8A54D]
                uppercase
                tracking-[5px]
                text-[10px]
                md:text-xs
                mb-7
              "
            >
              Une invitation particulière
            </motion.p>

            {/* PETIT ORNEMENT */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                flex
                items-center
                justify-center
                gap-3
                mb-6
              "
            >
              <div className="w-12 md:w-20 h-[1px] bg-[#C8A54D]/50" />

              <span className="text-[#C8A54D] text-sm">
                ❦
              </span>

              <div className="w-12 md:w-20 h-[1px] bg-[#C8A54D]/50" />
            </motion.div>

            {/* PRÉNOMS */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="
                font-['Cormorant_Garamond']
                text-5xl
                sm:text-6xl
                md:text-8xl
                font-semibold
                text-[#222222]
                leading-none
                mb-4
              "
            >
              JEDIDIA <span className="text-[#C8A54D]"><br />&</span><br /> DEFI
            </motion.h1>

            {/* DATE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="
                font-['Poppins']
                text-[#777777]
                text-sm
                md:text-base
                tracking-[2px]
                uppercase
                mb-8
              "
            >
              S’unissent ce samedi 24 octobre 2026
            </motion.p>

            {/* SÉPARATEUR */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="
                w-20
                h-[1px]
                bg-[#C8A54D]
                mx-auto
                mb-8
              "
            />

            {/* MESSAGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="
                max-w-lg
                mx-auto
                px-2
              "
            >
              <p
                className="
                  font-['Poppins']
                  text-[#666666]
                  text-[14px]
                  md:text-[16px]
                  font-light
                  leading-7
                  md:leading-8
                  mb-4
                "
              >
                C’est avec une immense joie que nous vous invitons
                à partager avec nous le bonheur de notre union.
              </p>

              <p
                className="
                  font-['Poppins']
                  text-[#666666]
                  text-[14px]
                  md:text-[16px]
                  font-light
                  leading-7
                  md:leading-8
                  mb-4
                "
              >
                Venez vivre à nos côtés ces précieux instants
                de joie, d’amour et de célébration.
              </p>

              <p
                className="
                  font-['Poppins']
                  text-[#444444]
                  text-[14px]
                  md:text-[16px]
                  font-medium
                  leading-7
                  md:leading-8
                "
              >
                Votre présence rendra cette journée encore plus belle.
              </p>
            </motion.div>

            {/* BOUTON */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.5 }}
              onClick={handleOpen}
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#C8A54D]
                text-white
                px-9
                md:px-11
                py-4
                rounded-full
                shadow-[0_8px_30px_rgba(200,165,77,0.25)]
                hover:shadow-[0_10px_35px_rgba(200,165,77,0.35)]
                hover:scale-[1.02]
                transition-all
                duration-300
                font-['Poppins']
                text-xs
                md:text-sm
                tracking-[1px]
              "
            >
              <span>Confirmer ma présence</span>

              <span
                className="
                  text-base
                  group-hover:translate-x-1
                  transition-transform
                  duration-300
                "
              >
                →
              </span>
            </motion.button>

            {/* PETITE MENTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="
                font-['Poppins']
                text-[9px]
                md:text-[10px]
                text-[#AAAAAA]
                mt-5
                tracking-[1px]
              "
            >
              Une journée d’amour, de joie et de partage
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InvitationIntro;