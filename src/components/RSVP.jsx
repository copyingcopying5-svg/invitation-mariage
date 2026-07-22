import { useState } from "react";
import { motion } from "framer-motion";


function RSVP() {

  const [confirmed, setConfirmed] = useState(false);


  // Nom de l'invité (personnalisé)
  const guestName = "COUPLE PATRICK KBH";


  return (

    <section className="py-24 px-6 bg-white">


      <div className="max-w-xl mx-auto text-center">


        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
        >

          <p className="text-[#C8A54D] uppercase tracking-[4px] text-sm mb-4">
            Invitation personnelle
          </p>


          <h2 className="text-5xl mb-6">
            Cher {guestName}
          </h2>


          <p className="text-gray-600 leading-7 mb-8">
            Nous avons la joie de vous inviter à célébrer
            avec nous ce moment unique.
            Votre présence sera un véritable plaisir.
          </p>


        </motion.div>



        {!confirmed ? (

          <motion.button

            onClick={() => setConfirmed(true)}

            initial={{opacity:0}}
            whileInView={{opacity:1}}

            className="
            bg-[#C8A54D]
            text-white
            px-10
            py-4
            rounded-full
            hover:opacity-90
            transition
            shadow-lg
            "

          >

            Je confirme ma présence

          </motion.button>


        ) : (


          <motion.div

            initial={{
              opacity:0,
              scale:0.8
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            className="
            bg-[#FAF8F5]
            p-8
            rounded-2xl
            "

          >

            <h3 className="text-3xl mb-3">
              Merci {guestName} ❤️
            </h3>


            <p className="text-gray-600">
              Nous sommes heureux de vous compter
              parmi nous pour cette journée spéciale.
            </p>


          </motion.div>


        )}


      </div>


    </section>

  );
}


export default RSVP;