import React from 'react';

const PlateDecoration = () => {
  const plates = [
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
    "https://images.unsplash.com/photo-1562447551-d4a923055403?w=800",
    "https://images.unsplash.com/photo-1604245601262-1d701633513a?w=800",
  ];

  return (
    <div className="pt-10 pb-20 max-w-7xl mx-auto px-4">
       <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900">Wedding Plate Decoration</h1>
        <p className="text-gray-500 mt-2">Customized Seer Varisai Plates</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plates.map((src, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md aspect-square">
            <img src={src} alt="Plate Decoration" className="w-full h-full object-cover hover:opacity-90 transition-opacity"/>
          </div>
        ))}
      </div>
       <div className="mt-12 text-center">
        <a 
          href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20Plate%20Decoration."
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gold text-white px-8 py-3 rounded-md hover:bg-gold-dark transition-colors text-lg"
        >
          Inquire Price
        </a>
      </div>
    </div>
  );
};

export default PlateDecoration;