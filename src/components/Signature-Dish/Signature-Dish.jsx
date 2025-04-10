import React, { forwardRef } from "react";
import Food1 from "../../assets/food/ayam-bakar.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { SlideUp } from "../Hero/Hero";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SignatureDishData = [
  {
    id: 1,
    name: "Nasi Ayam Bakar",
    img: Food1,
    price: "Rp. 20.000",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Nasi Goreng",
    img: Food1,
    price: "Rp. 20.000",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Mie Goreng",
    img: Food1,
    price: "Rp. 20.000",
    delay: 1.2,
  },
];

const SignatureDish = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="container py-12">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-mont-alter font-semibold uppercase py-8"
        >
          Menu Andalan Kami
        </motion.h3>
        {/* grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SignatureDishData.map((item) => {
            return (
              <motion.div
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-xl text-yellow-500">{item.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default SignatureDish;
