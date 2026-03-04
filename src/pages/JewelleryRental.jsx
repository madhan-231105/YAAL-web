import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ShoppingBag, MessageCircle, Info } from "lucide-react";
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
      window.history.pushState({ modalOpen: true }, "");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handlePopState = () => {
      if (selectedItem) setSelectedItem(null);
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
    if (!item) return [];
    if (item.images && Array.isArray(item.images)) return item.images;
    return [item.image];
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

  /* -------------------- WhatsApp Actions -------------------- */
  const handleAction = (item, type) => {
    let message = "";
    if (type === "book") {
      message = `Hi, I want to BOOK this jewellery.\n\nJewel Code: ${item.code}\nJewel Name: ${item.name}\nPrice: ₹${item.price}/Day\n\nEvent Date:\nName:\nAddress:`;
    } else {
      message = `Hi, I have an ENQUIRY regarding this jewellery.\n\nJewel Code: ${item.code}\nJewel Name: ${item.name}\n\nMy Question: `;
    }

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
            Premium bridal jewellery for your special day
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
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-gold uppercase tracking-widest">{item.category}</span>
                    <h3 className="font-serif text-lg font-bold text-gray-800 mt-1">{item.name}</h3>
                    <p className="text-gray-900 font-semibold mt-2">₹{parsePrice(item.price).toLocaleString()} <span className="text-xs text-gray-400 font-normal">/ Day</span></p>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gold transition-colors flex items-center justify-center gap-2"
                    >
                      View Details
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
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-2 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-white max-w-7xl w-full max-h-[95vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-[110] p-3 bg-white/90 hover:bg-white rounded-full shadow-2xl transition-all active:scale-90"
              >
                <X size={24} className="text-gray-900" />
              </button>

              {/* IMAGE SLIDER SECTION */}
              <div className="w-full md:w-2/3 relative bg-gray-50 flex flex-col h-[45vh] md:h-auto border-r border-gray-100">
                <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={getImages(selectedItem)[currentImageIndex]}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-contain p-4"
                    />
                  </AnimatePresence>

                  {getImages(selectedItem).length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-4 p-3 rounded-full bg-white shadow-xl hover:bg-gold hover:text-white transition-all z-10"><ChevronLeft size={24} /></button>
                      <button onClick={nextImage} className="absolute right-4 p-3 rounded-full bg-white shadow-xl hover:bg-gold hover:text-white transition-all z-10"><ChevronRight size={24} /></button>
                    </>
                  )}
                </div>

                {getImages(selectedItem).length > 1 && (
                  <div className="p-4 flex justify-center gap-3 bg-white/50 backdrop-blur-sm">
                    {getImages(selectedItem).map((img, idx) => (
                      <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${idx === currentImageIndex ? "border-gold scale-110 shadow-lg" : "border-transparent opacity-60"}`}>
                        <img src={img} className="w-full h-full object-cover" alt="thumb" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CONTENT SECTION */}
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col overflow-y-auto">
                <div className="flex-1">
                  <div className="mb-6">
                    <span className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                      Code: {selectedItem.code}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {selectedItem.name}
                  </h2>

                  <div className="flex items-baseline gap-2 mb-8 border-b border-gray-100 pb-8">
                    <span className="text-4xl font-bold text-gray-900">
                      ₹{parsePrice(selectedItem.price).toLocaleString()}
                    </span>
                    <span className="text-gray-500 font-medium italic">/ day rental</span>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        <Info size={14} /> Description
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {selectedItem.description || "Handcrafted premium jewellery piece designed for your most special occasions."}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-5 rounded-3xl">
                        <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Style</span>
                        <span className="font-bold text-gray-900">{selectedItem.category}</span>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-3xl">
                        <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Rental Type</span>
                        <span className="font-bold text-gray-900">24 Hours</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TWO BUTTONS: BOOK AND ENQUIRY */}
                <div className="mt-12 flex flex-col gap-3">
                  <button
                    onClick={() => handleAction(selectedItem, "book")}
                    className="w-full bg-gold text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all transform active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-gold/20"
                  >
                    <ShoppingBag size={20} />
                    Book Now
                  </button>
                  
                  <button
                    onClick={() => handleAction(selectedItem, "enquiry")}
                    className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-gold transition-all transform active:scale-95 flex items-center justify-center gap-3"
                  >
                    <MessageCircle size={20} />
                    Send Enquiry
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JewelleryRental;