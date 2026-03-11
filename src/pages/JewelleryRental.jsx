import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  MessageCircle,
  Search,
  Info
} from "lucide-react";

// Corrected: Import EVERYTHING from jewellery_data
import { 
  rentalHeroData, 
  rentalConfig, 
  uiLabels, 
  jewelleryItems 
} from "../data/jewellery_data";

const JewelleryRental = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const goldText = "text-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";

  /* ---------------- BODY LOCK + MODAL ACCESSIBILITY ---------------- */
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") setSelectedItem(null); };
    const handleBack = () => { if (selectedItem) setSelectedItem(null); };

    if (selectedItem) {
      window.history.pushState({ modal: true }, "");
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
      window.addEventListener("popstate", handleBack);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("popstate", handleBack);
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  /* ---------------- LOGIC HELPERS ---------------- */
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^0-9]/g, ""));
  };

  const categories = useMemo(() => {
    const cats = jewelleryItems.map((i) => i.category).filter(Boolean);
    return ["All", ...new Set(cats)];
  }, []);

  const filteredItems = useMemo(() => {
    return jewelleryItems.filter((item) => {
      const matchesSearch =
        item.code?.toLowerCase().includes(search.toLowerCase()) ||
        item.name?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const getImages = (item) => {
    if (!item) return [];
    return item.images?.length ? item.images : [item.image];
  };

  const nextImg = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % getImages(selectedItem).length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + getImages(selectedItem).length) % getImages(selectedItem).length);
  };

  const handleWhatsAppAction = (item, type) => {
    const message = type === "book" 
      ? rentalConfig.whatsappMessages.book(item) 
      : rentalConfig.whatsappMessages.enquiry(item);

    window.open(
      `https://wa.me/${rentalConfig.phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[#FCFBFA] min-h-screen pb-20 selection:bg-[#C5A02E]/20">
      
      {/* HERO SECTION */}
      <section className="relative h-[35vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${rentalHeroData.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-white text-center px-4">
          <span className={`${goldText} uppercase tracking-[0.5em] text-[10px] font-bold`}>
            {rentalHeroData.subtitle}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mt-3 tracking-tight">
            {rentalHeroData.title} <span className="italic">{rentalHeroData.titleItalic}</span>
          </h1>
        </div>
      </section>

      <div className="max-w-[1800px] mx-auto px-4 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block w-[320px] p-10 bg-white rounded-2xl border border-gray-100 shadow-sm sticky top-10 h-fit space-y-12">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6 text-gray-400">{uiLabels.sidebarTitleSearch}</h4>
              <div className="relative">
                <Search size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300"/>
                <input
                  type="text"
                  placeholder={uiLabels.searchPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border-b border-gray-100 py-3 pl-8 focus:border-[#C5A02E] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.35em] font-bold mb-6 text-gray-400">{uiLabels.sidebarTitleCollections}</h4>
              <div className="flex flex-col gap-4">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`text-left text-sm tracking-wide transition-all ${
                      category === cat ? `${goldText} font-bold` : "text-gray-500 hover:text-black hover:translate-x-1"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <main className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-14">
              {filteredItems.map(item => (
                <motion.div
                  layout
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => { setSelectedItem(item); setActiveImgIndex(0); }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F7F7] rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-500">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-black rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-gray-50">
                        {item.code}
                      </span>
                    </div>
                  </div>

                  <div className="text-center mt-5 px-1">
                    <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mb-1">{item.category}</p>
                    <h3 className="font-serif text-sm md:text-base text-gray-800 line-clamp-1 group-hover:text-[#C5A02E] transition-colors">{item.name}</h3>
                    <p className={`${goldText} font-bold text-[13px] mt-1`}>
                      ₹{parsePrice(item.price).toLocaleString()} <span className="text-[10px] text-gray-400 font-normal">/ day</span>
                    </p>
                    <button className="mt-4 w-full border border-gray-200 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                      <MessageCircle size={14} /> {uiLabels.moreInfoBtn}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* LARGE PREVIEW MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl bg-white h-full md:h-auto md:rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedItem(null)} className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-black hover:text-white rounded-full transition-all text-gray-800">
                <X size={24}/>
              </button>

              {/* SLIDER */}
              <div className="relative flex items-center justify-center bg-[#F9F9F9] p-6 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImgIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    src={getImages(selectedItem)[activeImgIndex]}
                    className="max-h-[50vh] md:max-h-[70vh] w-full object-contain drop-shadow-2xl"
                  />
                </AnimatePresence>
                {getImages(selectedItem).length > 1 && (
                  <>
                    <button onClick={prevImg} className="absolute left-4 p-3 rounded-full bg-white shadow-xl hover:bg-[#C5A02E] hover:text-white transition-all opacity-0 group-hover:opacity-100"><ChevronLeft size={20}/></button>
                    <button onClick={nextImg} className="absolute right-4 p-3 rounded-full bg-white shadow-xl hover:bg-[#C5A02E] hover:text-white transition-all opacity-0 group-hover:opacity-100"><ChevronRight size={20}/></button>
                  </>
                )}
              </div>

              {/* DETAILS */}
              <div className="p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
                <div className="mb-auto">
                  <div className="inline-block bg-black text-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 rounded">CODE: {selectedItem.code}</div>
                  <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-6 leading-tight">{selectedItem.name}</h2>
                  <div className="flex items-baseline gap-2 mb-8 border-b border-gray-100 pb-8">
                    <span className="text-4xl font-bold text-gray-900">₹{parsePrice(selectedItem.price).toLocaleString()}</span>
                    <span className="text-gray-400 italic">{uiLabels.rentalPeriodLabel}</span>
                  </div>
                  <div className="space-y-6 mb-12">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest"><Info size={14}/> {uiLabels.productInfoLabel}</h4>
                    <p className="text-gray-600 leading-relaxed text-lg">{selectedItem.description || rentalConfig.defaultDescription}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button onClick={() => handleWhatsAppAction(selectedItem, "book")} className={`${goldBg} text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:brightness-110 transition shadow-xl shadow-[#C5A02E]/20`}><ShoppingBag size={20}/> {uiLabels.bookNowBtn}</button>
                  <button onClick={() => handleWhatsAppAction(selectedItem, "enquiry")} className="bg-black text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-gray-800 transition shadow-xl"><MessageCircle size={20}/> {uiLabels.sendEnquiryBtn}</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JewelleryRental;