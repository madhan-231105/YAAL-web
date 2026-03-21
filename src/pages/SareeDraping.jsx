import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, X, Star, Feather, ChevronLeft, ChevronRight, MessageCircle, ShoppingBag 
} from "lucide-react";
import { sareeHeroData, sareeConfig, sareeItems } from "../data/saree_data";

const goldText = "text-[#C5A02E]";
const goldBg = "bg-[#C5A02E]";

const SareeDraping = () => {
  const categories = ["Bridal", "Reception", "Traditional", "Festive"];
  const [activeCategory, setActiveCategory] = useState("Bridal");
  const [selectedSaree, setSelectedSaree] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filteredItems = useMemo(() => 
    sareeItems.filter(item => item.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    if (isPaused || sareeItems.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sareeItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleAction = (saree, type) => {
    if(!saree) return;
    const msg = type === 'book' 
      ? sareeConfig.whatsappMessages.book(saree)
      : sareeConfig.whatsappMessages.enquiry(saree);
    window.open(`https://wa.me/${sareeConfig.phoneNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-[#FCFBFA] min-h-screen overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[62vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${sareeHeroData.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <span className={`${goldText} uppercase tracking-[0.5em] text-[10px] font-semibold block mb-4`}>
            {sareeHeroData.subtitle}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6">
            {sareeHeroData.title} <span className="italic font-light opacity-90">{sareeHeroData.titleItalic}</span>
          </h1>
          <div className="w-20 h-[1px] bg-[#C5A02E] mx-auto" />
        </div>
      </section>

      {/* SPOTLIGHT CAROUSEL */}
      {sareeItems.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3 relative h-[450px] md:h-[600px] flex items-center justify-center"
                 onMouseEnter={() => setIsPaused(true)}
                 onMouseLeave={() => setIsPaused(false)}>
              
              {/* Arrow Buttons - Added cursor-pointer */}
              <button 
                onClick={() => setActiveIndex(prev => (prev - 1 + sareeItems.length) % sareeItems.length)} 
                className="absolute left-0 z-50 p-4 bg-white/80 rounded-full shadow-xl cursor-pointer hover:bg-white transition-colors"
              >
                <ChevronLeft size={20}/>
              </button>
              <button 
                onClick={() => setActiveIndex(prev => (prev + 1) % sareeItems.length)} 
                className="absolute right-0 z-50 p-4 bg-white/80 rounded-full shadow-xl cursor-pointer hover:bg-white transition-colors"
              >
                <ChevronRight size={20}/>
              </button>

              {sareeItems.map((item, index) => {
                const diff = index - activeIndex;
                const isActive = diff === 0;
                if (!item.image) return null;

                return (
                  <motion.div 
                    key={item.id}
                    animate={{ 
                      scale: isActive ? 1 : 0.8,
                      x: diff * 220,
                      opacity: Math.abs(diff) > 1 ? 0 : isActive ? 1 : 0.4,
                      zIndex: isActive ? 40 : 20
                    }}
                    className="absolute w-[300px] md:w-[450px] h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <img src={item.image} className="w-full h-full object-cover" alt="" />
                  </motion.div>
                );
              })}
            </div>

            <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h2 className="text-4xl font-serif mb-6">{sareeItems[activeIndex]?.name}</h2>
              <p className="text-gray-500 mb-8">{sareeItems[activeIndex]?.description}</p>
              
              {/* Action Button - Added cursor-pointer */}
              <button 
                onClick={() => handleAction(sareeItems[activeIndex], 'book')} 
                className={`${goldBg} w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest text-xs cursor-pointer hover:brightness-110 active:scale-95 transition-all`}
              >
                Book This Look
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex justify-center gap-2 mb-16 sticky top-20 z-50">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)} 
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeCategory === cat ? `${goldBg} text-white` : "bg-black text-white hover:text-[#C5A02E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map(item => (
              <motion.div 
                key={item.id} 
                layout 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                exit={{opacity:0}} 
                onClick={() => setSelectedSaree(item)} 
                className="cursor-pointer group" // Already has cursor-pointer
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 mb-4">
                  {item.image && <img src={item.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt=""/>}
                </div>
                <h3 className="font-serif text-lg text-center group-hover:text-[#C5A02E] transition-colors">{item.name}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedSaree && (
          <div className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4" onClick={() => setSelectedSaree(null)}>
            <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} exit={{y:50, opacity:0}} onClick={e => e.stopPropagation()} className="bg-white max-w-5xl w-full rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative">
              
              {/* Close Button - Added cursor-pointer */}
              <button 
                onClick={() => setSelectedSaree(null)} 
                className="absolute top-6 right-6 z-50 p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <X size={20}/>
              </button>

              <div className="md:w-1/2 h-[40vh] md:h-auto bg-gray-100">
                {selectedSaree.image && <img src={selectedSaree.image} className="w-full h-full object-cover" alt=""/>}
              </div>

              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <span className={`${goldText} text-[10px] font-bold uppercase tracking-widest mb-4 block`}>{selectedSaree.category}</span>
                <h2 className="text-4xl font-serif mb-6">{selectedSaree.name}</h2>
                <p className="text-gray-500 italic mb-10">"{selectedSaree.description}"</p>
                
                <div className="flex flex-col gap-4">
                  {/* Action Buttons - Added cursor-pointer */}
                  <button 
                    onClick={() => handleAction(selectedSaree, 'book')} 
                    className={`${goldBg} text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 active:scale-95 transition-all`}
                  >
                    <ShoppingBag size={16}/> Book Now
                  </button>
                  <button 
                    onClick={() => handleAction(selectedSaree, 'enquiry')} 
                    className="bg-black text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-800 active:scale-95 transition-all"
                  >
                    <MessageCircle size={16}/> Enquiry
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SareeDraping;