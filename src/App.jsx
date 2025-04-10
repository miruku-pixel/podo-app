import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SignatureDish from "./components/Signature-Dish/Signature-Dish";
import Banner from "./components/Banner/Banner";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import Testimonial from "./components/Testimonial/Testimonial";
import StoreLocation from "./components/StoreLocation/StoreLocation";
import Footer from "./components/Footer/Footer";
import FloatingNavbarWrapper from "./components/FloatNavbar/FloatNavbar";

const App = () => {
  const triggerRef = useRef(null);
  const heroRef = useRef(null);
  const signatureDishRef = useRef(null);
  const foodMenuRef = useRef(null);
  const storeLocationRef = useRef(null);
  const testimonialRef = useRef(null);
  const [originalNavbarVisible, setOriginalNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (triggerRef.current) {
        const triggerPosition = triggerRef.current.getBoundingClientRect().top;
        setOriginalNavbarVisible(triggerPosition >= 0); // Control visibility
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerRef]);

  return (
    <FloatingNavbarWrapper
      triggerSectionRef={triggerRef}
      homeRef={heroRef}
      signatureDishRef={signatureDishRef}
      menuRef={foodMenuRef}
      storeLocationRef={storeLocationRef}
      testimonialRef={testimonialRef}
    >
      <div className="overflow-x-hidden bg-white-2 text-dark">
        <div className="relative overflow-hidden">
          {/* Always show mobile navbar (md:hidden) */}
          <div className="md:hidden">
            <Navbar
              homeRef={heroRef}
              signatureDishRef={signatureDishRef}
              menuRef={foodMenuRef}
              storeLocationRef={storeLocationRef}
              testimonialRef={testimonialRef}
            />
          </div>

          {/* Show desktop navbar only when at top */}
          {originalNavbarVisible && (
            <div className="hidden md:block">
              <Navbar
                homeRef={heroRef}
                signatureDishRef={signatureDishRef}
                menuRef={foodMenuRef}
                storeLocationRef={storeLocationRef}
                testimonialRef={testimonialRef}
              />
            </div>
          )}

          <div ref={triggerRef}>
            <Hero ref={heroRef} />
          </div>
        </div>
        <SignatureDish ref={signatureDishRef} />
        <Banner />
        <FoodMenu ref={foodMenuRef} />
        <StoreLocation ref={storeLocationRef} />
        <Testimonial ref={testimonialRef} />

        <Footer />
      </div>
    </FloatingNavbarWrapper>
  );
};

export default App;
