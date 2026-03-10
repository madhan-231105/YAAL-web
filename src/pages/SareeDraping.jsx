import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, X, Layers, Feather, ScanLine, Star, 
  ChevronLeft, ChevronRight, MessageCircle, Info, ShoppingBag 
} from "lucide-react";

// --- THEME COLORS ---
const goldText = "text-[#C5A02E]";
const goldBg = "bg-[#C5A02E]";
const goldBorder = "border-[#C5A02E]";

// --- ASSETS ---
const SAREE_IMAGES = [
  "https://images.unsplash.com/photo-1610030469618-9f14cb9a45f6?q=80&w=800",
  "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800",
  "https://images.unsplash.com/photo-1610030469915-9a88e8f7c4ab?q=80&w=800",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800",
  "https://images.unsplash.com/photo-1610030469668-935142b44f16?q=80&w=800"
];

const FALLBACK_PATTERNS = [
  "https://images.unsplash.com/photo-1594917540209-42b7e51c1103?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1602030238127-142513470725?auto=format&fit=crop&w=800&q=80"
];

// --- DATA GENERATOR ---
const generateLuxuryArchive = () => {
  const categories = ["Bridal", "Reception", "Traditional", "Festive"];
  const archive = {};

  const metadata = {
    Bridal: { vibes: ["Imperial Muhurtham", "Royal Sovereignty"], origins: ["Kanchipuram", "Thanjavur"], materials: ["6-Gram Gold Zari Silk"] },
    Reception: { vibes: ["Luminescent Couture", "Gilded Evening"], origins: ["Bengaluru", "Chennai Modern"], materials: ["Champagne Tissue Silk"] },
    Traditional: { vibes: ["Ancestral Grace", "Heirloom Classic"], origins: ["Chettinad", "Madurai"], materials: ["Arakku Handloom Silk"] },
    Festive: { vibes: ["Radiant Deepavali", "Celestial Glow"], origins: ["Pochampally", "Uppada"], materials: ["Double Ikat Silk"] }
  };

  categories.forEach((cat) => {
    archive[cat] = Array.from({ length: 8 }).map((_, i) => {
      const meta = metadata[cat];
      const name = `${meta.vibes[i % 2]} Style No. ${i + 1}`;
      return {
        id: `${cat[0]}-${i + 1}`,
        name,
        material: meta.materials[0],
        origin: meta.origins[i % 2],
        feel: `Opulent and structured silhouette.`,
        src: SAREE_IMAGES[i % SAREE_IMAGES.length],
        description: `The ${name} is a pinnacle of South Indian sartorial elegance. Professionally draped to ensure a commanding presence for your most cherished ceremonies.`
      };
    });
  });
  return archive;
};

const SAREE_ARCHIVE = generateLuxuryArchive();

const SareeDraping = () => {
  const [activeCategory, setActiveCategory] = useState("Bridal");
  const [selectedSaree, setSelectedSaree] = useState(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const [visibleItems, setVisibleItems] = useState(8);
  const [isPaused, setIsPaused] = useState(false);

  /* -------------------- Mobile Back Button Logic -------------------- */
  useEffect(() => {
    if (selectedSaree) {
      window.history.pushState({ modalOpen: true }, "");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handlePopState = () => {
      if (selectedSaree) setSelectedSaree(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.body.style.overflow = "auto";
    };
  }, [selectedSaree]);

  /* -------------------- Carousel Logic -------------------- */
  const carouselItems = useMemo(() => [
    { src: SAREE_IMAGES[0], name: "Imperial Muhurtham", origin: "Kanchipuram" },
    { src: SAREE_IMAGES[1], name: "Royal Sovereignty", origin: "Thanjavur" },
    { src: SAREE_IMAGES[2], name: "Temple Heritage", origin: "Madurai" },
    { src: SAREE_IMAGES[3], name: "Gilded Evening", origin: "Bengaluru" },
    { src: SAREE_IMAGES[4], name: "Midnight Sophisticate", origin: "Chennai" },
  ], []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, carouselItems.length]);

  const handleAction = (saree, type) => {
    const phone = "919080533611";
    const msg = type === 'book' 
      ? `Hi YAAL, I'd like to book a Draping Service for: ${saree.name}`
      : `Hi YAAL, I have an enquiry regarding the ${saree.name} draping style.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-[#FCFBFA] min-h-screen font-sans selection:bg-[#C5A02E]/30 selection:text-black overflow-x-hidden">
      
      {/* ================= HERO HEADER ================= */}
{/* ================= HERO SECTION ================= */}
<section className="relative h-[62vh] md:h-[62vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <motion.div
    initial={{ scale: 1.15, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=1600&q=80')",
          }}
  />

  {/* Luxury Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

  {/* Soft vignette for cinematic look */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_90%)] opacity-40" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.1 }}
    className="relative z-10 text-center px-6 max-w-4xl"
  >
    <span
      className={`${goldText} uppercase tracking-[0.5em] text-[10px] md:text-xs font-semibold block mb-6`}
    >
      Artisanal Draping Atelier
    </span>

    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight tracking-tight mb-6">
      Saree <span className="italic font-light opacity-90">Draping</span>
    </h1>

    <div className="w-20 h-[1px] bg-[#C5A02E] mx-auto mb-8" />

    <p className="text-gray-200 text-sm md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
      Masterful pleating and draping techniques crafted to transform
      your saree into a timeless <span className="italic">royal silhouette</span>.
    </p>
    
  </motion.div>
  
</section>

      {/* ================= FEATURED SPOTLIGHT ================= */}
      <section className="max-w-[1600px] mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3 relative h-[450px] md:h-[600px] flex items-center justify-center group"
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}>
            
            {/* Carousel Controls */}
            <button onClick={() => setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)} className="absolute left-0 z-50 p-4 bg-white/80 backdrop-blur-md rounded-full shadow-xl hover:bg-black hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => setActiveIndex((prev) => (prev + 1) % carouselItems.length)} className="absolute right-0 z-50 p-4 bg-white/80 backdrop-blur-md rounded-full shadow-xl hover:bg-black hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>

            {carouselItems.map((image, index) => {
              const diff = index - activeIndex;
              const isActive = diff === 0;
              return (
                <motion.div 
                  key={index}
                  animate={{ 
                    scale: isActive ? 1 : 0.8,
                    x: diff * 200,
                    opacity: Math.abs(diff) > 1 ? 0 : isActive ? 1 : 0.4,
                    zIndex: isActive ? 40 : 20
                  }}
                  className="absolute w-[300px] md:w-[450px] h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
                >
                  <img src={image.src} className="w-full h-full object-cover" alt="" />
                </motion.div>
              );
            })}
          </div>

          <div className="lg:col-span-2 space-y-8 bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm">
            <span className={`${goldText} font-black tracking-[0.3em] text-[10px] uppercase block`}>Spotlight Archive</span>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
              {carouselItems[activeIndex].name}
            </h2>
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Provenance</span>
                <span className="text-sm font-semibold">{carouselItems[activeIndex].origin}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                A masterpiece of structured elegance, designed to remain flawless through hours of celebration.
              </p>
              <button 
                onClick={() => handleAction(carouselItems[activeIndex], 'book')}
                className={`${goldBg} w-full py-5 rounded-xl text-white font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-[#C5A02E]/20 hover:bg-black transition-all`}
              >
                Book This Look
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COLLECTION NAV ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="sticky top-24 z-[80] bg-black text-white p-2 rounded-full border border-white/10 shadow-2xl flex gap-2 mb-20 max-w-2xl mx-auto">
          {Object.keys(SAREE_ARCHIVE).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-1 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat ? `${goldBg} text-black` : "hover:text-[#C5A02E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= THE ARCHIVE GRID ================= */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          <AnimatePresence mode="wait">
            {SAREE_ARCHIVE[activeCategory].slice(0, visibleItems).map((saree) => (
              <motion.div
                key={saree.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedSaree(saree)}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 relative mb-6">
                  <img src={saree.src} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                <div className="text-center">
                  <span className={`${goldText} text-[9px] font-black uppercase tracking-[0.2em] block mb-2`}>{saree.origin}</span>
                  <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#C5A02E] transition-colors">{saree.name}</h3>
                  <div className="mt-4 flex flex-col gap-2">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors flex items-center justify-center gap-2">
                      View Dossier <ArrowRight size={12} />
                    </button>
                    {/* Enquiry Button below product */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleAction(saree, 'enquiry'); }}
                      className="mt-2 py-2 border border-gray-200 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                    >
                      Quick Enquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleItems < 12 && (
          <div className="mt-24 text-center">
            <button onClick={() => setVisibleItems(prev => prev + 4)} className="px-12 py-5 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Discover More Styles
            </button>
          </div>
        )}
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="bg-black py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className={`${goldText} text-xs font-black uppercase tracking-[0.4em] block mb-6`}>Our Methodology</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-24">The <span className="italic font-light opacity-80">Ritual</span></h2>
          
          <div className="grid md:grid-cols-3 gap-16 relative">
            {[
              { n: "01", t: "Consultation", d: "Conceptualizing the drape to match your silhouette and occasion." },
              { n: "02", t: "Curation", d: "Selecting artisanal accessories and structure-enhancing base layers." },
              { n: "03", t: "Execution", d: "Masterful draping on your special day for a timeless look." }
            ].map((step, idx) => (
              <div key={idx} className="relative group text-left">
                <span className="text-gray-800 font-serif text-9xl absolute -top-12 -left-6 opacity-40 group-hover:text-[#C5A02E]/20 transition-all">
                  {step.n}
                </span>
                <div className="relative z-10 pt-10">
                  <h3 className="text-2xl font-serif text-white mb-6 tracking-wide">{step.t}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 pt-20 border-t border-white/5">
            <button 
              onClick={() => window.open("https://wa.me/919080533611")}
              className={`${goldBg} text-black px-16 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-2xl shadow-[#C5A02E]/20`}
            >
              Reserve Your Stylist
            </button>
          </div>
        </div>
      </section>

      {/* ================= PREVIEW MODAL ================= */}
      <AnimatePresence>
        {selectedSaree && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[200] flex items-center justify-center p-4 md:p-12" onClick={() => setSelectedSaree(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-white max-w-7xl w-full h-full md:h-auto md:max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedSaree(null)} className="absolute top-8 right-8 z-50 p-3 bg-white/10 hover:bg-black hover:text-white rounded-full transition-all">
                <X size={24} />
              </button>

              <div className="md:w-[45%] bg-gray-100 overflow-hidden h-[40vh] md:h-full">
                <img src={selectedSaree.src} className="w-full h-full object-cover" alt="" />
              </div>

              <div className="md:w-[55%] p-10 md:p-20 overflow-y-auto flex flex-col">
                <div className="mb-auto">
                  <span className={`${goldText} text-[10px] font-black uppercase tracking-[0.4em] mb-4 block`}>Style Dossier {selectedSaree.id}</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">{selectedSaree.name}</h2>
                  
                  <p className="text-xl font-serif italic text-gray-500 mb-10 border-l-4 border-[#C5A02E] pl-6 py-2 leading-relaxed">
                    "{selectedSaree.description}"
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-12">
                    {[
                      { icon: <Layers size={18} />, label: "Materiality", value: selectedSaree.material },
                      { icon: <Star size={18} />, label: "Provenance", value: selectedSaree.origin },
                      { icon: <ScanLine size={18} />, label: "Weave", value: "Handloom Jacquard" },
                      { icon: <Feather size={18} />, label: "Silhouette", value: "Structured" }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-gray-50 rounded-2xl flex flex-col gap-2">
                        <div className={goldText}>{item.icon}</div>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</span>
                        <span className="text-xs font-bold text-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button onClick={() => handleAction(selectedSaree, 'book')} className={`${goldBg} text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-[#C5A02E]/20`}>
                    <ShoppingBag size={18} /> Book Appointment
                  </button>
                  <button onClick={() => handleAction(selectedSaree, 'enquiry')} className="bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-gold transition-all">
                    <MessageCircle size={18} /> Custom Enquiry
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