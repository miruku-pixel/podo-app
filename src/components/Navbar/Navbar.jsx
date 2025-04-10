import React, { useState } from "react";
import Logo from "../../assets/food/logo.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({
  homeRef,
  signatureDishRef,
  menuRef,
  storeLocationRef,
  aboutUsRef,
  testimonialRef,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const NavMenu = [
    {
      id: 1,
      title: "Beranda",
      ref: homeRef,
      delay: 0.1,
    },
    {
      id: 2,
      title: "Menu Andalan",
      ref: signatureDishRef,
      offset: -80,
      delay: 0.2,
    },
    {
      id: 3,
      title: "Menu",
      ref: menuRef,
      offset: -90,
      delay: 0.3,
    },
    {
      id: 4,
      title: "Lokasi Warung",
      ref: storeLocationRef,
      offset: -100,
      delay: 0.4,
    },
    {
      id: 5,
      title: "Tentang Kami",
      ref: aboutUsRef,
      offset: -110,
      delay: 0.5,
    },
    {
      id: 6,
      title: "Testimoni",
      ref: testimonialRef,
      offset: -120,
      delay: 0.6,
    },
  ];

  const SlideDown = (delay) => {
    return {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white-2 shadow-md">
      <div className="container flex justify-between items-center py-2 font-mont-alter">
        {/* logo section */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={Logo}
          alt="logo"
          className="w-20"
        />

        {/*Desktop menu */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-6">
            {NavMenu.map((menu) => {
              return (
                <motion.li
                  variants={SlideDown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}
                  className="nav-menu"
                  data-delay={menu.delay}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // 🚫 Prevent the default jump to top
                      scrollToSection(menu.ref); // ✅ Your custom scroll
                    }}
                    className="inline-block px-2 py-2 text-xl hover:text-dark-green"
                  >
                    {menu.title}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Mobile burger icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white-2 shadow-md border-t">
          <ul className="flex flex-col items-center py-4 space-y-4 text-xl">
            {NavMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(menu.ref);
                    setIsMobileMenuOpen(false);
                  }}
                  className="hover:text-dark-green"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
