import React, { useState, useMemo, useEffect } from "react";
import { jewelleryItems } from "../data/mockData";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  X, 
  MessageCircle, 
  SlidersHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  Info,
  CheckCircle2,
  Calendar
} from "lucide-react";

const JewelleryRental = () => {
  const phoneNumber = "919876543210";
  
  // Filter States
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Modal/Preview States
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Premium Palette
  const goldText = "text-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";
  const goldBorder = "border-[#C5A02E]/30";

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedItem) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedItem]);

  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^0-9]/g, ""));
  };

  const categories = useMemo(() => {
    const cats = jewelleryItems.map((item) => item.category).filter(Boolean);
    return ["All", ...new Set(cats)];
  }, []);

  const filteredItems = useMemo(() => {
    return jewelleryItems.filter((item) => {
      const numericPrice = parsePrice(item.price);
      const matchesSearch = 
        item.code?.toLowerCase().includes(search.toLowerCase()) || 
        item.name?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || item.category === category;
      const matchesPrice = maxPrice === "" || numericPrice <= Number(maxPrice);
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, maxPrice]);

  const handleWhatsAppEnquiry = (item) => {
    const message = `Hi YAAL Jewellery, I'm interested in:
Code: ${item.code}
Name: ${item.name}
Category: ${item.category}

Is this available for rental?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-[#FCFBFA] min-h-screen pb-24 font-sans selection:bg-[#C5A02E]/20">
      
      {/* ================= SOPHISTICATED HERO ================= */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-[#C5A02E] uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Crafting Royal Memories</span>
          <h1 className="text-4xl md:text-7xl font-serif text-white font-light mb-6">The <span className="italic">Bridal</span> Vault</h1>
          <div className="w-16 h-[1px] bg-[#C5A02E] mx-auto" />
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        
        {/* MOBILE FILTER TOGGLE */}
        <div className="lg:hidden mb-8">
          <button 
            onClick={() => setShowFilters(true)}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-4 rounded-sm text-[10px] uppercase tracking-widest font-bold shadow-sm active:scale-95 transition-transform"
          >
            <SlidersHorizontal size={14} /> Refine Selection
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* ================= CLASSIC SIDEBAR ================= */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-32 h-fit space-y-12">
            
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Catalogue Search</h4>
              <div className="relative group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#C5A02E] transition-colors" size={16} />
                <input
                  type="text"
                  placeholder="Code or Name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-200 py-2 pl-7 focus:outline-none focus:border-[#C5A02E] transition-colors font-light text-sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Collections</h4>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`text-left text-sm transition-all duration-300 ${
                      category === cat 
                        ? `${goldText} font-medium translate-x-2` 
                        : "text-gray-500 font-light hover:text-gray-800 hover:pl-2"
                    }`}
                  >
                    {cat} {category === cat && "—"}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Price Range</h4>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none focus:border-[#C5A02E] font-light text-sm text-gray-600"
              >
                <option value="">All Prices</option>
                <option value="3000">Below ₹3,000</option>
                <option value="5000">Below ₹5,000</option>
                <option value="10000">Below ₹10,000</option>
              </select>
            </div>
          </aside>

          {/* ================= PRODUCT GRID ================= */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-16">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={item.id}
                    className="group"
                  >
                    <div 
                      onClick={() => { setSelectedItem(item); setActiveImgIndex(0); }}
                      className="relative aspect-[4/5] overflow-hidden bg-[#F2F0ED] rounded-sm mb-6 shadow-sm cursor-zoom-in"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className={`text-[8px] tracking-widest uppercase font-bold px-3 py-1.5 backdrop-blur-md border ${
                          item.status === 'Available' ? 'bg-white/80 border-gray-100 text-gray-800' : 'bg-red-500/80 border-red-400 text-white'
                        }`}>
                          {item.status}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 shadow-sm border border-gray-100">
                          {item.code}
                        </span>
                      </div>
                      
                      {/* Hover Interaction Overlay */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-white/90 px-6 py-3 text-[10px] uppercase tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                          View Details
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-1 px-2">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">{item.category}</p>
                      <h3 className="font-serif text-lg text-gray-900 group-hover:text-[#C5A02E] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className={`text-sm font-medium ${goldText}`}>
                        ₹{parsePrice(item.price).toLocaleString()} <span className="text-[10px] text-gray-400 font-light lowercase">/ day</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredItems.length === 0 && (
              <div className="py-40 text-center">
                <p className="font-serif text-2xl text-gray-300 italic">No pieces found in the current selection</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ================= PRODUCT PREVIEW MODAL ================= */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-7xl bg-white rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[95vh] shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-20 p-2 text-gray-400 hover:text-black transition-colors"
              >
                <X size={28} strokeWidth={1.5} />
              </button>

              {/* LEFT: GALLERY SECTION */}
              <div className="w-full md:w-[60%] bg-[#F9F8F6] relative flex flex-col items-center justify-center p-6 md:p-12 border-r border-gray-50">
                <div className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImgIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      src={selectedItem.images ? selectedItem.images[activeImgIndex] : selectedItem.image}
                      className="max-h-full max-w-full object-contain drop-shadow-2xl"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {selectedItem.images?.length > 1 && (
                    <>
                      <button 
                        onClick={() => setActiveImgIndex(prev => prev === 0 ? selectedItem.images.length - 1 : prev - 1)}
                        className="absolute left-0 p-2 text-gray-400 hover:text-black transition-colors"
                      >
                        <ChevronLeft size={32} strokeWidth={1} />
                      </button>
                      <button 
                        onClick={() => setActiveImgIndex(prev => prev === selectedItem.images.length - 1 ? 0 : prev + 1)}
                        className="absolute right-0 p-2 text-gray-400 hover:text-black transition-colors"
                      >
                        <ChevronRight size={32} strokeWidth={1} />
                      </button>
                    </>
                  )}
                </div>

                {/* THUMBNAIL STRIP */}
                {selectedItem.images?.length > 1 && (
                  <div className="flex gap-4 mt-8 px-4 py-2 overflow-x-auto no-scrollbar">
                    {selectedItem.images.map((img, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveImgIndex(idx)}
                        className={`w-16 h-20 flex-shrink-0 border transition-all duration-300 ${
                          activeImgIndex === idx ? "border-[#C5A02E] opacity-100 scale-105 shadow-md" : "border-transparent opacity-40 hover:opacity-100"
                        }`}
                      >
                        <img src={img} className="w-full h-full object-cover" alt="preview" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT: DETAILS SECTION */}
              <div className="w-full md:w-[40%] p-8 md:p-16 flex flex-col justify-center bg-white overflow-y-auto">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${goldText} text-[11px] uppercase tracking-[0.3em] font-bold`}>{selectedItem.code}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className={`text-[10px] uppercase tracking-widest font-bold ${selectedItem.status === 'Available' ? 'text-green-600' : 'text-red-500'}`}>
                      {selectedItem.status}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">{selectedItem.name}</h2>
                  <p className="text-3xl text-gray-800 font-light italic mb-8">₹{parsePrice(selectedItem.price).toLocaleString()} <span className="text-xs not-italic text-gray-400 uppercase tracking-widest ml-2">per day</span></p>
                  <div className={`w-12 h-[1px] ${goldBg} mb-10`} />
                  
                  <p className="text-gray-500 font-light leading-relaxed text-lg mb-10 italic">
                    "{selectedItem.description}"
                  </p>

                  <div className="grid grid-cols-2 gap-8 text-gray-400 mb-12">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className={goldText} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Sanitized</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className={goldText} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Flexible Slot</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => handleWhatsAppEnquiry(selectedItem)}
                    disabled={selectedItem.status !== 'Available'}
                    className={`w-full ${goldBg} text-white py-5 rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold hover:brightness-110 transition shadow-xl flex items-center justify-center gap-3 disabled:bg-gray-200 disabled:cursor-not-allowed`}
                  >
                    {selectedItem.status === 'Available' ? 'Enquire via WhatsApp' : 'Currently Booked'} <MessageCircle size={18} />
                  </button>
                  <p className="text-[9px] text-gray-400 text-center uppercase tracking-widest">Pricing includes professional cleaning & maintenance</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MOBILE FILTER MODAL (Reusable Logic) */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowFilters(false)} className="fixed inset-0 bg-black/60 z-[150] lg:hidden" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed right-0 top-0 h-full w-[85%] bg-white z-[151] p-8 lg:hidden flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-serif text-2xl italic">Filters</h2>
                <button onClick={() => setShowFilters(false)}><X size={24} /></button>
              </div>
              <div className="space-y-8 flex-1">
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Search Catalogue</h4>
                  <input type="text" className="w-full border-b border-gray-100 py-3 focus:outline-none" value={search} onChange={(e) => setSearch(e.target.value)} placeholder=" TBS..." />
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Collection</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((cat) => (
                      <button key={cat} onClick={() => setCategory(cat)} className={`py-3 text-[10px] uppercase tracking-widest border transition-all ${category === cat ? "border-black bg-black text-white" : "border-gray-100 text-gray-500"}`}>{cat}</button>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={() => setShowFilters(false)} className={`w-full ${goldBg} text-white py-5 rounded-sm text-[10px] font-bold uppercase tracking-widest`}>Show Results</button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default JewelleryRental;