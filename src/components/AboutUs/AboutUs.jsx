import React, { forwardRef } from "react";
import BannerPng from "../../assets/food/ayam-bakar.png";
import { SlideUp } from "../Hero/Hero";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutUs = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
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
              className="relative z-10 w-full lg:max-w-[350px] img-shadow"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] 
            translate-y-[-50%] h-[320px] w-[320px] md:h-[400px] md:w-[400px] bg-light-yellow rounded-full"
            ></motion.div>
          </div>
          {/* Text content section */}
          <div className="space-y-5 lg:max-w-[600px]">
            <motion.h1
              variants={SlideUp(1)}
              initial="hidden"
              whileInView="show"
              className="text-4xl uppercase font-semibold font-mont-alter"
            >
              Tentang Kami
            </motion.h1>
            <motion.div
              variants={SlideUp(1.6)}
              initial="hidden"
              whileInView="show"
              className="space-y-4 text-justify"
            >
              <p>
                Warung Podo pertama kali membuka pintunya di kota Manado pada
                tahun 2023, berawal dari mimpi sederhana untuk menghadirkan
                makanan rumahan yang lezat dan autentik. Dengan resep
                turun-temurun dan bahan-bahan pilihan, Warung Podo menjadi
                tempat favorit warga lokal untuk menikmati hidangan yang penuh
                rasa dan kehangatan.
              </p>
              <p>
                Seiring dengan antusiasme pelanggan yang luar biasa, kini Warung
                Podo telah hadir juga di Makassar dan Batam, membawa cita rasa
                khas yang sama ke lebih banyak pecinta kuliner di seluruh
                Indonesia.
              </p>
              <p>
                Sejak hari pertama, kami berkomitmen untuk menyajikan cita rasa
                terbaik yang membangkitkan kenangan dan menghadirkan kepuasan di
                setiap suapan. Warung Podo terus berkembang dengan semangat yang
                sama — menyuguhkan pengalaman kuliner yang hangat, akrab, dan
                tak terlupakan.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
