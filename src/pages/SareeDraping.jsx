import React, { useState, useEffect, useRef } from "react";

// --- LUXURY DATA GENERATOR (160 Unique entries: 40 per category) ---
const generateLuxuryArchive = () => {
  const categories = ["Bridal", "Reception", "Traditional", "Festive"];
  const archive = {};

  const metadata = {
    Bridal: {
      vibes: ["Imperial Muhurtham", "Royal Sovereignty", "Temple Heritage", "August Bridal"],
      origins: ["Kanchipuram", "Thanjavur", "Kumbakonam", "Arani"],
      materials: ["6-Gram Gold Zari Silk", "Hand-Woven Mulberry Silk", "Temple Architecture Brocade"],
    },
    Reception: {
      vibes: ["Luminescent Couture", "Gilded Evening", "Champagne Radiance", "Midnight Sophisticate"],
      origins: ["Bengaluru", "Hyderabad", "Chennai Modern"],
      materials: ["Champagne Tissue Silk", "Swarovski Encrusted Organza", "Liquid Satin Silk"],
    },
    Traditional: {
      vibes: ["Ancestral Grace", "Vintage Matriarch", "Heirloom Classic", "Stately Heritage"],
      origins: ["Chettinad", "Madurai", "Mysore"],
      materials: ["Arakku Handloom Silk", "Vairam-Diamond Pattern Silk", "Pure Cotton-Silk Blend"],
    },
    Festive: {
      vibes: ["Radiant Deepavali", "Temple Festival", "Solstice Splendor", "Celestial Glow"],
      origins: ["Pochampally", "Gadwal", "Uppada"],
      materials: ["Double Ikat Silk", "Lightweight Jamdani Silk", "Contrast Border Silk"],
    }
  };

  const sampleImages = [
    "https://thumbs.dreamstime.com/b/indian-silk-saree-14348643.jpg?w=768",
    "https://image2url.com/r2/default/images/1772067210920-7f84e61f-6468-422d-af90-44647b7ebbf8.png",
    "https://image2url.com/r2/default/images/1772067329731-aa80f1c2-ee04-4d5d-a29b-c9f2707c24c1.png",
    "https://thumbs.dreamstime.com/b/traditional-kubera-silk-cotton-saree-salem-tamil-nadu-elegant-handloom-design-close-up-image-beautifully-woven-made-414160694.jpg?w=1400",
    "https://image2url.com/r2/default/images/1772067261509-47860568-6751-47ee-bf8e-1793ca42bfac.png"
  ];

  categories.forEach(cat => {
    archive[cat] = Array.from({ length: 40 }).map((_, i) => {
      const meta = metadata[cat];
      const name = `${meta.vibes[i % 4]} Style No. ${i + 1}`;
      const origin = meta.origins[i % meta.origins.length];
      const mat = meta.materials[i % meta.materials.length];

      return {
        id: `${cat[0]}-${i + 1}`,
        name: name,
        material: mat,
        feel: `An opulent embrace providing a structured, majestic silhouette that commands the room with royal precision.`,
        origin: `${origin}, South India`,
        history: `Derived from the historical court aesthetics of ${origin}, this drape preserves the sacred geometry of South Indian tradition.`,
        speciality: `Features hand-pressed architectural pleats and a grand ${cat} pallu finish.`,
        src: sampleImages[i % sampleImages.length],
        description: `The ${name} is a pinnacle of South Indian sartorial elegance. Crafted from ${mat}, this drape is engineered for a commanding presence. Historically rooted in the heritage of ${origin}, it combines a ${meta.vibes[i % 4].toLowerCase()} aesthetic with artisanal craftsmanship. The fluidity of the fabric and the structural integrity of the pleats make it an exclusive masterpiece for the modern wardrobe, ensuring an unparalleled presence for the ${cat.toLowerCase()} occasion, blending ancient provenance with contemporary high-fashion standards.`
      };
    });
  });
  return archive;
};

const SAREE_ARCHIVE = generateLuxuryArchive();

const SareeDraping = () => {
  const [activeCategory, setActiveCategory] = useState("Bridal");
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSaree, setSelectedSaree] = useState(null);
  const containerRef = useRef(null);

  const carouselItems = SAREE_ARCHIVE["Bridal"].slice(0, 10);

  const services = [
    { icon: "✨", title: "Professional Draping", description: "Expert draping techniques for a flawless, elegant look" },
    { icon: "🎨", title: "Custom Styling", description: "Personalized styling based on your body type and preference" },
    { icon: "💎", title: "Occasion Perfect", description: "Perfect draping for weddings, events, and celebrations" },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, carouselItems.length]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#fffdfa] min-h-screen font-sans selection:bg-amber-100 overflow-x-hidden" ref={containerRef}>
      <style>{`
        @keyframes zoomFadeUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-zoomFadeUp { animation: zoomFadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.4); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        
        /* MOBILE OPTIMIZATIONS */
        @media (max-width: 768px) {
          .carousel-item-img {
            width: 75vw !important;
            height: 400px !important;
          }
          .translate-x-56 { transform: translateX(20vw) !important; }
          .-translate-x-56 { transform: translateX(-20vw) !important; }
          .text-6xl { font-size: 3.5rem !important; }
          .text-8xl { font-size: 4.5rem !important; }
        }
      `}</style>

      <div className="pt-10 md:pt-20 pb-20 max-w-7xl mx-auto px-4 relative">
        
        {/* HEADER - z-50 for visibility */}
        <div className={`relative z-0 text-center mb-16 md:mb-24 transition-all duration-1000 ${isLoading ? "opacity-0" : "opacity-100 animate-zoomFadeUp "}`}>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 tracking-tighter">
              Saree Draping
          </h1>

          <div className="mt-2">
            <h2 className="text-4xl md:text-6xl font-serif italic font-medium leading-[1.2] pb-2"
              style={{
                background: "linear-gradient(45deg, #D4AF37, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Excellence & Elegance
            </h2>
          </div>

          <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Professional draping services to enhance your elegance and confidence.
          </p>
        </div>

        {/* FEATURED CAROUSEL - z-0 to stay behind header */}
        <div className="relative z-0 mb-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 relative h-[450px] md:h-[520px] flex items-center justify-center overflow-visible"
                 onMouseEnter={() => setIsPaused(true)}
                 onMouseLeave={() => setIsPaused(false)}>
              
              <button onClick={() => setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)} className="absolute left-0 md:-left-6 z-[60] glass-card w-10 h-10 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center text-xl md:text-2xl hover:bg-amber-50 transition-all">‹</button>
              <button onClick={() => setActiveIndex((prev) => (prev + 1) % carouselItems.length)} className="absolute right-0 md:-right-6 z-[60] glass-card w-10 h-10 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center text-xl md:text-2xl hover:bg-amber-50 transition-all">›</button>

              {carouselItems.map((image, index) => {
                const total = carouselItems.length;
                let diff = index - activeIndex;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;
                const isActive = diff === 0;

                return (
                  <div key={index}
                    className={`carousel-item-img absolute transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white
                    ${isActive ? "z-40 scale-100 opacity-100 w-[300px] md:w-[380px] h-[400px] md:h-[500px]" : 
                      Math.abs(diff) === 1 ? `z-30 scale-85 opacity-50 w-[260px] md:w-[320px] h-[350px] md:h-[420px] ${diff === 1 ? 'translate-x-56' : '-translate-x-56'}` :
                      "opacity-0 scale-50"}`}
                  >
                    <img src={image.src} alt={image.name} className="w-full h-full object-cover" />
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-2 glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-sm animate-zoomFadeUp relative z-10 border border-[#D4AF37]/70 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
              <span className="text-amber-600 font-black tracking-[0.2em] text-xs uppercase mb-4 block">Archive Spotlight</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
                {carouselItems[activeIndex].name}
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="pb-4 border-b border-amber-100">
                    <p className="text-[10px] font-bold text-amber-500 uppercase mb-2">Provenance</p>
                    <p className="text-md md:text-lg font-medium text-gray-800">{carouselItems[activeIndex].origin}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] font-bold text-amber-500 uppercase mb-1">Material</p>
                        <p className="text-xs md:text-sm font-semibold text-gray-700">{carouselItems[activeIndex].material}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-amber-500 uppercase mb-1">Speciality</p>
                        <p className="text-xs md:text-sm font-semibold text-gray-700">Hand-pressed Pleats</p>
                    </div>
                </div>
              </div>
            </div>
        </div>

        {/* --- 160 GRID SAREE COLLECTION --- */}
        <div className="relative z-0 my-20 md:my-32">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">The Collection</h2>
          </div>

          {/* Luxury Category Tabs - Dark Box Gold Heading */}
          <nav className="sticky top-2 z-50 py-4 md:py-8 mb-5">
            <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-full border border-[#D4AF37]/30 shadow-2xl px-4 md:px-6 py-3 md:py-4">
              <div className="flex justify-center gap-4 md:gap-16 overflow-x-auto no-scrollbar">
                {Object.keys(SAREE_ARCHIVE).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] md:text-sm font-serif tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all duration-500 relative pb-1 md:pb-2 whitespace-nowrap ${
                      activeCategory === cat 
                        ? "text-[#D4AF37] font-bold" 
                        : "text-gray-400 hover:text-[#D4AF37]"
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] animate-zoomFadeUp"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </nav>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {SAREE_ARCHIVE[activeCategory].map((saree) => (
                <div key={saree.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3">
                  <div className="h-64 md:h-80 overflow-hidden relative">
                    {/* Overlay with "View Dossier" removed as requested */}
                    <img src={saree.src} alt={saree.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="p-6 text-center">
                    <span className="text-[9px] text-amber-600 font-bold uppercase tracking-[0.2em] block mb-2">{saree.origin}</span>
                    <h3 className="text-md md:text-lg font-serif font-bold text-gray-800 mb-4">{saree.name}</h3>
                    <button
                      onClick={() => setSelectedSaree(saree)}
                      className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-amber-800 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="relative z-0 grid md:grid-cols-3 gap-6 md:gap-8 mb-40">
            {services.map((s, i) => (
                <div key={i} className="p-8 md:p-12 glass-card rounded-[2rem] md:rounded-[2.5rem] text-center hover:bg-amber-50 transition-colors group">
                    <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                </div>
            ))}
        </div>

        {/* CTA */}
        <div className="relative z-0 text-center px-4">
          <a href="https://wa.me/919080533611" target="_blank" rel="noreferrer"
            className="inline-block w-full md:w-auto bg-gray-900 text-white px-8 md:px-16 py-5 md:py-6 rounded-2xl font-bold text-lg md:text-xl hover:bg-amber-600 transition-all shadow-2xl">
            Book Appointment Now
          </a>
        </div>
      </div>

      {/* FULL DETAIL MODAL - z-100 to cover everything */}
      {selectedSaree && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 md:p-8">
          <div className="bg-white max-w-7xl w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row animate-zoomFadeUp max-h-[90vh]">
            <button onClick={() => setSelectedSaree(null)} 
                    className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold hover:bg-red-50 hover:text-red-500 transition-all">
                ✕
            </button>
            
            <div className="md:w-[45%] h-48 md:h-auto overflow-hidden">
              <img src={selectedSaree.src} alt={selectedSaree.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="md:w-[55%] p-6 md:p-20 overflow-y-auto bg-[#FAF9F6]">
              <span className="text-amber-600 font-bold text-[10px] md:text-xs tracking-widest uppercase mb-4 block underline underline-offset-8">Saree Archive</span>
              <h3 className="text-2xl md:text-5xl font-serif font-bold mb-6 md:mb-10 text-gray-900 leading-tight">{selectedSaree.name}</h3>
              
              <div className="space-y-8 md:space-y-12">
                <div className="grid grid-cols-2 gap-4 md:gap-10">
                    <div>
                        <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Materiality</h4>
                        <p className="text-xs md:text-sm font-bold text-gray-800 leading-relaxed">{selectedSaree.material}</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Provenance</h4>
                        <p className="text-xs md:text-sm font-bold text-gray-800 leading-relaxed">{selectedSaree.origin}</p>
                    </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-3">Luxury Narrative</h4>
                  <p className="font-serif text-lg md:text-2xl leading-relaxed text-gray-700 italic">
                    "{selectedSaree.description}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pt-6 md:pt-10 border-t border-amber-100">
                    <div>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">History</h4>
                        <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">{selectedSaree.history}</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Texture</h4>
                        <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">{selectedSaree.feel}</p>
                    </div>
                </div>

                <div className="pt-6 md:pt-10 flex flex-col items-center justify-between gap-6">
                    <a href={`https://wa.me/919080533611?text=Inquiry regarding ${selectedSaree.name}`} target="_blank" rel="noreferrer"
                       className="w-full text-center bg-black text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold hover:bg-amber-700 transition-all uppercase text-[10px] md:text-xs tracking-widest shadow-xl">
                        Book This Style Now
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SareeDraping;


