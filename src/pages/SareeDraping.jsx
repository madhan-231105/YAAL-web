import React from 'react';

const SareeDraping = () => {
  // Using placeholders for gallery
  const images = [
    "https://images.unsplash.com/photo-1610189012906-47833cc1574e?w=800",
    "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800",
    "https://images.unsplash.com/photo-1583391726438-b71578e71852?w=800",
  ];

  return (
    <div className="pt-10 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900">Saree Draping Services</h1>
        <p className="text-gray-500 mt-2">Professional draping for that perfect look</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-lg h-96">
            <img src={src} alt="Saree Draping" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20Saree%20Draping%20services."
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gold text-white px-8 py-3 rounded-md hover:bg-gold-dark transition-colors text-lg"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
};

export default SareeDraping;