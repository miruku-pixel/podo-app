import React, { useState } from "react";

const MobileNavbar = ({
  homeRef,
  signatureDishRef,
  menuRef,
  testimonialRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu after scroll
  };

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex justify-between items-center">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          <button
            onClick={() => scrollToSection(homeRef)}
            className="block py-2"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(signatureDishRef)}
            className="block py-2"
          >
            Signature Dish
          </button>
          <button
            onClick={() => scrollToSection(menuRef)}
            className="block py-2"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection(testimonialRef)}
            className="block py-2"
          >
            Testimonial
          </button>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
