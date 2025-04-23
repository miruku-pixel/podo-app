import React, { forwardRef } from "react";
import FoodPng from "../../assets/food/ayam-bakar.png";
import Spoon from "../../assets/food/spoon.png";
import Fork from "../../assets/food/fork.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const SlideUp = (delay) => {
  return {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  };
};

const Hero = forwardRef((props, ref) => {
  return (
    <main ref={ref} className="pt-20">
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div /*className="grid grid-cols-2 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between"*/
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between"
        >
          {/*text content here*/}
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent"
            >
              WARUNG
            </motion.h1>
            <motion.h1
              variants={SlideUp(0.8)}
              initial="hidden"
              whileInView="show"
              className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              P O D O
            </motion.h1>
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView="show"
              className="text-sm space-y-4 text-justify"
            >
              <p>
                Rasakan sensasi pedas dan gurih yang tak terlupakan di Warung
                Podo! Kami menyajikan ayam penyet dengan ayam segar pilihan dan
                bumbu rempah berkualitas, dipadu dengan nasi hangat dan lalapan
                segar.
              </p>
              <p>
                Sambal spesial kami dibuat dari cabai segar dan bahan-bahan
                alami, menghasilkan cita rasa pedas yang otentik. Tersedia juga
                menu pendamping seperti tahu, tempe, sayur asem, dan lalapan
                segar untuk melengkapi santapan Anda.
              </p>
              <p>
                Cocok untuk makan bersama teman atau keluarga! Nikmati hidangan
                sederhana namun istimewa yang akan membuat Anda ketagihan!
              </p>
            </motion.div>
          </div>
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={FoodPng}
              alt="Food"
              className="opacity-0 md:opacity-100 w-[280px] md:w-[450px] img-shadow"
            />

            <motion.img
              src={Spoon}
              alt="Spoon"
              initial={{ opacity: 0, rotate: 80, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: -80, x: 30, y: -120 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"
            />

            <motion.img
              src={Fork}
              alt="Fork"
              initial={{ opacity: 0, rotate: 80, x: 100, y: 200 }}
              whileInView={{ opacity: 1, rotate: 150, x: -90, y: 20 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"
            />
          </div>
        </div>
      </div>

      {/* Background Yellow*/}
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[2500px] h-[2500px] rounded-3xl bg-light-yellow absolute top-[-30%] left-[70%] z-0"
      ></motion.div>
    </main>
  );
});

export default Hero;
