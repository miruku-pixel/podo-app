import React from "react";
import Logo from "../../assets/food/logo.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-light-yellow rounded-t-3xl relative"
    >
      <div className="container py-6">
        <div className="flex justify-center">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <img src={Logo} alt="Logo" className="w-24" />
            <div className="text-lg text-secondary text-center md:text-left">
              &copy; {currentYear} Warung Podo. All rights reserved.
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-4 text-sm text-gray-600">
          Website by <span className="font-semibold">Miruku PixeL</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
