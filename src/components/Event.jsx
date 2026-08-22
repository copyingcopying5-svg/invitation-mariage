import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function Event() {

  const details = [
    {
      icon: <FaCalendarAlt />,
      title: "Date",
      text: "18 Décembre 2026"
    },
    {
      icon: <FaClock />,
      title: "Heure",
      text: "15h00"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Lieu",
      text: "Salle des fêtes - Lubumbashi"
    }
  ];


  return (
    <section id="grand-jour" className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto text-center">


        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.8}}
        >

          <p className="text-[#C8A54D] uppercase tracking-[4px] text-sm mb-4">
            Le grand jour
          </p>


          <h2 className="text-5xl mb-12">
            Rendez-vous pour célébrer
          </h2>

        </motion.div>



        <div className="grid md:grid-cols-3 gap-8">


          {details.map((item, index)=>(

            <motion.div
              key={index}
              initial={{opacity:0, y:40}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5, delay:index*0.2}}
              className="
              bg-[#FAF8F5]
              p-8
              rounded-2xl
              shadow-sm
              hover:shadow-xl
              transition
              "
            >

              <div className="
              text-[#C8A54D]
              text-4xl
              mb-5
              flex
              justify-center
              ">
                {item.icon}
              </div>


              <h3 className="text-2xl mb-3">
                {item.title}
              </h3>


              <p className="text-gray-600">
                {item.text}
              </p>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default Event;