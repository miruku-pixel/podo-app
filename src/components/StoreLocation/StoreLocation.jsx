import React, { forwardRef } from "react";
import Manado from "../../assets/food/cabang-manado.jpg";
import ComingSoon from "../../assets/food/coming-soon.jpg";
import OrderLinks from "../OrderLinks/OrderLinks";
import { FaUtensils } from "react-icons/fa";

const StoreLocation = forwardRef((props, ref) => {
  const stores = [
    {
      id: 1,
      name: "RM PODOMORO (Manado)",
      address: "JL.Wolter Monginsidi No 45, Manado, Indonesia, North Sulawesi",
      googleMapsLink:
        "https://www.google.com/maps/place/123+Main+Street,+Cityville",
      image: Manado, // Add image path
    },
    {
      id: 2,
      name: "Podo (Makassar)",
      address: "coming soon",
      googleMapsLink:
        "https://www.google.com/maps/place/456+Oak+Avenue,+Townsville",
      image: ComingSoon, // Add image path
    },
    {
      id: 3,
      name: "RM PODO (Batam)",
      address: "coming soon",
      googleMapsLink:
        "https://www.google.com/maps/place/789+River+Road,+Villagetown",
      image: ComingSoon, // Add image path
    },
    {
      id: 4,
      name: "RM PODO (Batam)",
      address: "coming soon",
      googleMapsLink:
        "https://www.google.com/maps/place/789+River+Road,+Villagetown",
      image: ComingSoon, // Add image path
    },
  ];

  return (
    <section ref={ref} className="container py-24">
      <h2 className="text-4xl text-center font-mont-alter font-semibold uppercase py-8">
        Lokasi Kami
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white/50 shadow-md p-6 rounded-lg text-center"
          >
            <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center gap-2">
              {store.name}
            </h3>
            <div className="flex justify-center mb-4">
              {/* Centering container */}
              <img
                src={store.image}
                alt={`${store.name} image`}
                className="w-60 h-40 rounded-2xl object-cover"
              />
            </div>
            <p className="mb-2">{store.address}</p>
            <OrderLinks />
          </div>
        ))}
      </div>
    </section>
  );
});

export default StoreLocation;
