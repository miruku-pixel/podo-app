import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { orderLinks } from "../../utils/data";
import { FaUtensils } from "react-icons/fa";

const OrderLinks = () => {
  const [revealed, setRevealed] = useState(false);
  const wrapperRef = useRef(null);
  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

  const handleClick = (link) => (e) => {
    e.preventDefault();

    if (link.name === "WhatsApp") {
      window.open(link.webUrl, "_blank");
      return;
    }

    if (isMobile && link.appUrl) {
      window.location.href = link.appUrl;
      setTimeout(() => {
        window.location.href = link.webUrl;
      }, 500);
    } else {
      window.open(link.webUrl, "_blank");
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setRevealed(false);
      }
    };

    if (revealed) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [revealed]);

  return (
    <div
      className="flex flex-col items-center mt-6 min-h-[100px]"
      ref={wrapperRef}
    >
      {!revealed && (
        <motion.button
          onClick={() => setRevealed(true)}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-200 text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-300 transition flex items-center gap-2"
        >
          <FaUtensils className="text-lg" />
          <span>Order Now</span>
        </motion.button>
      )}

      <AnimatePresence>
        {revealed && (
          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {orderLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.button
                  key={link.name}
                  onClick={handleClick(link)}
                  className={`w-14 h-14 rounded-full ${link.color} flex items-center justify-center shadow-md`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                >
                  <Icon className="text-white text-2xl" />
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderLinks;
