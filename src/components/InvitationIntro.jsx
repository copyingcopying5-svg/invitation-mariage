import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function InvitationIntro({ guestName = "Jean-Pierre", onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 500);
  };

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="
            fixed
            inset-0
            z-[100]
            bg-[#FAF8F5]
            flex
            items-center
            justify-center
            px-6
          "
        >
          <div className="text-center max-w-xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                text-[#C8A54D]
                uppercase
                tracking-[5px]
                text-xs
                mb-8
              "
            >
              Une invitation particulière
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="
                text-5xl
                md:text-7xl
                font-light
                mb-6
              "
            >
              Cher {guestName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="
                text-gray-600
                leading-8
                max-w-md
                mx-auto
                mb-10
              "
            >
              Nous avons la joie de vous inviter
              à partager avec nous ces moments
              précieux de notre union.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={handleOpen}
              className="
                bg-[#C8A54D]
                text-white
                px-10
                py-4
                rounded-full
                shadow-lg
                hover:opacity-90
                transition
              "
            >
              Ouvrir mon invitation
            </motion.button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InvitationIntro;