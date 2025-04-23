import React, { useState, forwardRef } from "react";
import Food1 from "../../assets/food/food_1.jpg";
import Food2 from "../../assets/food/food_2.jpg";
import Food3 from "../../assets/food/food_3.jpg";
import Food4 from "../../assets/food/food_4.jpg";
import Food5 from "../../assets/food/food_5.jpg";
import Food6 from "../../assets/food/food_6.jpg";
import Food7 from "../../assets/food/food_7.jpg";
import Food8 from "../../assets/food/food_8.jpg";
import Food9 from "../../assets/food/food_9.jpg";
import { SlideUp } from "../Hero/Hero";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const FoodData = [
  {
    id: 1,
    name: "Nasi Goreng",
    img: Food1,
    price: "Rp. 20.000",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Mie Goreng",
    img: Food2,
    price: "Rp. 20.000",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Nasi Ayam Bakar",
    img: Food3,
    price: "Rp. 20.000",
    delay: 1.2,
  },
  {
    id: 4,
    name: "Rendang Sapi",
    img: Food4,
    price: "Rp. 20.000",
    delay: 0.4,
  },
  {
    id: 5,
    name: "Pempek",
    img: Food5,
    price: "Rp. 20.000",
    delay: 0.8,
  },
  {
    id: 6,
    name: "Mie Rendang Sapi",
    img: Food6,
    price: "Rp. 20.000",
    delay: 1.2,
  },
  {
    id: 7,
    name: "Lontong",
    img: Food7,
    price: "Rp. 20.000",
    delay: 0.4,
  },
  {
    id: 8,
    name: "Cah Kangkung",
    img: Food8,
    price: "Rp. 20.000",
    delay: 0.8,
  },
  {
    id: 9,
    name: "Sate Ayam",
    img: Food9,
    price: "Rp. 20.000",
    delay: 1.2,
  },
];

const FoodMenu = forwardRef((props, ref) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(FoodData.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = FoodData.slice(startIndex, endIndex);

  const handleDotClick = (page) => {
    setCurrentPage(page);
  };

  const dots = Array.from({ length: totalPages }, (_, index) => index + 1);

  const cardVariants = {
    initial: { x: currentPage > 1 ? 50 : -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: currentPage > 1 ? -50 : 50, opacity: 0 },
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    },
    onSwipedRight: () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section ref={ref}>
      <div className="container py-24">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-mont-alter font-semibold uppercase py-8"
        >
          What We're Serving
        </motion.h3>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center"
            {...swipeHandlers} // Apply swipe handlers
          >
            {currentCards.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white/50 shadow-xl rounded-xl overflow-hidden w-full sm:w-80 md:w-96"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={item.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="p-4 flex flex-col items-center space-y-2">
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-xl font-bold text-yellow-500">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-4">
          {dots.map((page) => (
            <button
              key={page}
              onClick={() => handleDotClick(page)}
              className={`mx-2 h-3 w-3 rounded-full cursor-pointer ${
                currentPage === page ? "bg-light-yellow" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FoodMenu;
