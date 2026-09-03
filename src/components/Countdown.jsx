import { useEffect, useState } from "react";
import { motion } from "framer-motion";


function Countdown() {

  const targetDate = new Date("October 24, 2026 18:00:00").getTime();


  const calculateTime = () => {

    const now = new Date().getTime();

    const difference = targetDate - now;


    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }


    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      )
    };

  };



  const [time, setTime] = useState(calculateTime());



  useEffect(() => {

    const timer = setInterval(() => {

      setTime(calculateTime());

    },1000);


    return () => clearInterval(timer);

  },[]);



  const items = [
    {
      label:"Jours",
      value:time.days
    },
    {
      label:"Heures",
      value:time.hours
    },
    {
      label:"Minutes",
      value:time.minutes
    },
    {
      label:"Secondes",
      value:time.seconds
    }
  ];



  return (

    <section id="compte-a-rebours" className="py-24 px-6 bg-[#222] text-white">


      <div className="max-w-5xl mx-auto text-center">


        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
        >
          <h2 className="text-5xl mb-12">
            Plus que quelques instants
          </h2>


        </motion.div>



        <div className="
        grid 
        grid-cols-2 
        md:grid-cols-4 
        gap-6
        ">


          {items.map((item,index)=>(

            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index*0.15
              }}

              className="
              bg-white/10
              backdrop-blur
              rounded-2xl
              p-6
              "
            >

              <div className="text-4xl font-bold mb-2">
                {String(item.value).padStart(2,"0")}
              </div>


              <div className="text-gray-300">
                {item.label}
              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>

  );
}


export default Countdown;