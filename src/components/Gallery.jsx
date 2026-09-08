import { motion } from "framer-motion";

import img1 from "../assets/img3.jpg";
import img2 from "../assets/img4.jpg";
import img3 from "../assets/img5.jpg";
import img4 from "../assets/img6.jpg";
import img5 from "../assets/img7.jpg";
import img6 from "../assets/img8.jpg";
import img8 from "../assets/img10.jpg";
import img9 from "../assets/img11.jpg";

function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img8,
    img9
  ];

  return (
    <section id="galerie" className="py-24 px-6 bg-[#F8EDEF]">

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {images.map((image, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="
                overflow-hidden
                rounded-2xl
                shadow-md
              "
            >

              <img
                src={image}
                alt={`Souvenir mariage ${index + 1}`}
                className="
                  w-full
                  h-64
                  object-cover
                  hover:scale-110
                  transition
                  duration-500
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;