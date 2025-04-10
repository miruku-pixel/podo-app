import React, { forwardRef } from "react";
import BannerPng from "../../assets/food/ayam-bakar.png";
import { SlideUp } from "../Hero/Hero";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Testimonial = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="container py-24">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-mont-alter font-semibold uppercase py-8"
        >
          Apa Kata Pelanggan Kami
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* Text content section */}
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.p
              variants={SlideUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-xl font-serif relative z-10"
            >
              "Makanan di sini benar-benar lezat! Pelayanan yang ramah dan
              suasana yang nyaman membuat saya ingin kembali lagi."
            </motion.p>
            <div>
              <motion.div
                variants={SlideUp(1.2)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className="text-xl font-bold">Will Smith</h2>
                <p className="text-sm">Food bloggers,</p>
              </motion.div>
            </div>
          </div>
          {/* Image section */}
          <div className="relative">
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 15,
                x: 50,
                y: -50,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              src={BannerPng}
              alt=""
              className="relative z-10 w-full lg:max-w-[280px] img-shadow"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] 
                translate-y-[-50%] h-[320px] w-[320px]  bg-light-yellow rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Testimonial;
