import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { jewelleryItems } from "../data/mockData";

const JewelleryRental = () => {
  const phoneNumber = "919876543210";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* -------------------- Mobile Back Button Logic -------------------- */
  useEffect(() => {
    if (selectedItem) {
      // Push a new state to history when modal opens
      window.history.pushState({ modalOpen: true }, "");
      
      // Disable background scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handlePopState = () => {
      if (selectedItem) {
        setSelectedItem(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  /* -------------------- Safe Price Parser -------------------- */
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^0-9]/g, ""));
  };

  /* -------------------- Categories -------------------- */
  const categories = useMemo(() => {
    const cats = jewelleryItems.map((item) => item.category).filter(Boolean);
    return ["All", ...new Set(cats)];
  }, []);

  /* -------------------- Filtering -------------------- */
  const filteredItems = useMemo(() => {
    return jewelleryItems.filter((item) => {
      const numericPrice = parsePrice(item.price);
      const matchesSearch = item.code?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || item.category === category;
      const matchesPrice = maxPrice === "" || numericPrice <= Number(maxPrice);
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, maxPrice]);

  /* -------------------- Image Slider Logic -------------------- */
  const getImages = (item) => {
    // Falls back to item.image if item.images array doesn't exist
    return item?.images || [item?.image];
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const images = getImages(selectedItem);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const images = getImages(selectedItem);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  /* -------------------- WhatsApp Booking -------------------- */
  const handleBook = (item) => {
    const message = `Hi, I want to book the jewellery.\n\nJewel Code : ${item.code}\nJewel Name : ${item.name}\nPrice : ${item.price} / Day\n\nEvent Date :\nName :\nAddress :`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50/50">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 lg:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            Exquisite Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg"
          >
            Choose from our premium range of bridal jewellery
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* ================= FILTER SIDEBAR ================= */}
          <aside className="hidden lg:block">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="font-serif text-xl font-semibold mb-6">Filters</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Search by Code"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold/20 outline-none transition"
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none"
                >
                  <option value="">All Prices</option>
                  <option value="3000">Below ₹3,000</option>
                  <option value="5000">Below ₹5,000</option>
                  <option value="10000">Below ₹10,000</option>
                </select>
              </div>
            </div>
          </aside>

          {/* ================= PRODUCT GRID ================= */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                >
                  <div 
                    onClick={() => { setSelectedItem(item); setCurrentImageIndex(0); }}
                    className="cursor-pointer aspect-[4/5] overflow-hidden relative"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-gold uppercase tracking-widest">{item.category}</span>
                    <h3 className="font-serif text-lg font-bold text-gray-800 mt-1">{item.name}</h3>
                    <p className="text-gray-900 font-semibold mt-2">₹{parsePrice(item.price).toLocaleString()} <span className="text-xs text-gray-400 font-normal">/ Day</span></p>
                    <button
                      onClick={() => handleBook(item)}
                      className="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gold transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={18} /> Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ================= LARGE PREVIEW MODAL ================= */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white max-w-6xl w-full max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
              >
                <X size={24} className="text-gray-800" />
              </button>

              {/* Image Slider Section */}
              <div className="w-full md:w-3/5 relative bg-gray-100 flex items-center justify-center group h-[40vh] md:h-auto">
                <img
                  key={currentImageIndex}
                  src={getImages(selectedItem)[currentImageIndex]}
                  alt={selectedItem.name}
                  className="w-full h-full object-contain md:object-cover"
                />
                
                {getImages(selectedItem).length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 p-2 rounded-full bg-white/20 hover:bg-white/90 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 p-2 rounded-full bg-white/20 hover:bg-white/90 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight size={24} />
                    </button>
                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {getImages(selectedItem).map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'}`} 
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <div className="mb-auto">
                  <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase">{selectedItem.code}</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
                    {selectedItem.name}
                  </h2>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold text-gray-900">₹{parsePrice(selectedItem.price).toLocaleString()}</span>
                    <span className="text-gray-500">/ per day</span>
                  </div>
                  
                  <div className="space-y-4 py-6 border-y border-gray-100 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Category</span>
                      <span className="font-medium">{selectedItem.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Availability</span>
                      <span className="text-green-600 font-medium">Ready to Rent</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed pt-2">
                      Handcrafted premium {selectedItem.category.toLowerCase()} set. Perfect for weddings and grand celebrations. Includes cleaning and insurance covers.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleBook(selectedItem)}
                  className="w-full bg-gold text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all transform active:scale-95 shadow-xl shadow-gold/20"
                >
                  Book via WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JewelleryRental;