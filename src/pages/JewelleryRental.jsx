import React from 'react';
import { jewelleryItems } from '../data/mockData';

const JewelleryRental = () => {
  
  const handleBook = (item) => {
    const phoneNumber = "919876543210"; // Replace with real number
    const message = `Hi, I want to book the jewellery.\nJewel Code : ${item.code}\nEvent Date:\nName:\nAddress:`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-10 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Exquisite Collection</h1>
          <p className="text-gray-500">Choose from our premium range of bridal jewellery</p>
        </div>

        {/* Responsive Grid: 1 Mobile, 2 Tablet, 3 Desktop, 4 Large Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {jewelleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  {item.code}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gold font-bold text-lg mb-6">{item.price} / Day</p>
                
                <button 
                  onClick={() => handleBook(item)}
                  className="w-full bg-gold text-white py-3 rounded-md hover:bg-gold-dark font-medium uppercase tracking-wide transition-colors active:scale-95"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewelleryRental;