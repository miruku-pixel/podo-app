import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FloatingNavbarWrapper = ({
  children,
  triggerSectionRef,
  homeRef,
  signatureDishRef,
  menuRef,
  storeLocationRef,
  aboutUsRef,
  testimonialRef,
}) => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (triggerSectionRef.current) {
        const triggerPosition =
          triggerSectionRef.current.getBoundingClientRect().top;
        setIsFloating(triggerPosition < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerSectionRef]);

  const scrollToSection = (ref) => {
    console.log("Scrolling to:", ref.current);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Ref is null!");
    }
  };

  const NavMenu = [
    { id: 1, title: "Beranda", ref: homeRef, delay: 0.1 },
    { id: 2, title: "Menu Andalan", ref: signatureDishRef, delay: 0.2 },
    { id: 3, title: "Menu", ref: menuRef, delay: 0.3 },
    { id: 4, title: "Lokasi Warung", ref: storeLocationRef, delay: 0.4 },
    { id: 5, title: "Tentang Kami", ref: aboutUsRef, delay: 0.5 },
    { id: 6, title: "Testimoni", ref: testimonialRef, delay: 0.6 },
  ];

  const SlideDown = (delay) => ({
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, delay } },
  });

  const navVariants = {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.3 } }, // Slide up on exit
  };

  return (
    <div>
      {/* AnimatePresence only wraps the motion.nav element */}
      <AnimatePresence>
        {isFloating && (
          <motion.nav
            variants={navVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                    bg-white-2/90 backdrop-blur-md border border-light-yellow shadow-md 
                    rounded-[2rem] px-6 py-2 flex items-center"
          >
            <div className="hidden md:block">
              <ul className="flex gap-6 md:gap-10 items-center">
                {NavMenu.map((menu) => (
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
                        e.preventDefault();
                        scrollToSection(menu.ref);
                      }}
                      className="text-sm md:text-base font-mont-alter tracking-tight font-medium hover:text-dark-green px-1.5 py-1"
                    >
                      {menu.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      {children} {/* Children outside AnimatePresence */}
    </div>
  );
};

export default FloatingNavbarWrapper;
