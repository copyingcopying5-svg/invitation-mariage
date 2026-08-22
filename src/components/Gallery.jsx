import { motion } from "framer-motion";


function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a",
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
  ];


  return (

    <section id="galerie" className="py-24 px-6 bg-[#FAF8F5]">

      <div className="max-w-6xl mx-auto">


        <div className="text-center mb-12">

          <p className="text-[#C8A54D] uppercase tracking-[4px] text-sm mb-4">
            Souvenirs
          </p>


          <h2 className="text-5xl">
            Notre galerie
          </h2>

        </div>



        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">


          {images.map((image,index)=>(

            <motion.div
              key={index}
              initial={{
                opacity:0,
                scale:0.9
              }}

              whileInView={{
                opacity:1,
                scale:1
              }}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}

              className="
              overflow-hidden
              rounded-2xl
              shadow-md
              "
            >

              <img
                src={image}
                alt="Souvenir mariage"
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