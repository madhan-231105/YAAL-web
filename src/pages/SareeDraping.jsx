import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, X, Layers, Feather, ScanLine, Star, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

// --- SAREE MODEL IMAGES ---
const SAREE_IMAGES = [
    "https://thumbs.dreamstime.com/b/indian-silk-saree-14348643.jpg?w=768",
    "https://image2url.com/r2/default/images/1772067210920-7f84e61f-6468-422d-af90-44647b7ebbf8.png",
    "https://image2url.com/r2/default/images/1772067329731-aa80f1c2-ee04-4d5d-a29b-c9f2707c24c1.png",
    "https://thumbs.dreamstime.com/b/traditional-kubera-silk-cotton-saree-salem-tamil-nadu-elegant-handloom-design-close-up-image-beautifully-woven-made-414160694.jpg?w=1400",
    "https://image2url.com/r2/default/images/1772067261509-47860568-6751-47ee-bf8e-1793ca42bfac.png"
  ];

// --- SAREE FABRIC / PATTERN IMAGES ---
const FALLBACK_PATTERNS = [
  "https://images.unsplash.com/photo-1594917540209-42b7e51c1103?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1602030238127-142513470725?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596208577323-9565d70f2095?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1616588589676-62b3bd6e4a4d?auto=format&fit=crop&w=800&q=80"
];

// --- 3. DATA GENERATOR ---
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

  categories.forEach((cat, catIndex) => {
    archive[cat] = Array.from({ length: 12 }).map((_, i) => {
      const meta = metadata[cat];
      const name = `${meta.vibes[i % 4]} Style No. ${i + 1}`;
      const origin = meta.origins[i % meta.origins.length];
      const mat = meta.materials[i % meta.materials.length];
      const imgIndex = (i + catIndex * 3) % SAREE_IMAGES.length;

      return {
        id: `${cat[0]}-${i + 1}`,
        name,
        material: mat,
        feel: `An opulent embrace providing a structured, majestic silhouette.`,
        origin: `${origin}, South India`,
        history: `Derived from the historical court aesthetics of ${origin}.`,
        speciality: `Hand-pressed architectural pleats`,
        src: SAREE_IMAGES[imgIndex],
        description: `The ${name} is a pinnacle of South Indian sartorial elegance. Crafted from ${mat}, this drape is engineered for a commanding presence. Historically rooted in the heritage of ${origin}, it combines a ${meta.vibes[i % 4].toLowerCase()} aesthetic with artisanal craftsmanship.`
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
  const [visibleItems, setVisibleItems] = useState(8); 
  const containerRef = useRef(null);

  const carouselItems = [
    { src: SAREE_IMAGES[0], name: "Imperial Muhurtham", origin: "Kanchipuram", material: "Pure Silk" },
    { src: SAREE_IMAGES[1], name: "Royal Sovereignty", origin: "Thanjavur", material: "Gold Zari" },
    { src: SAREE_IMAGES[2], name: "Temple Heritage", origin: "Madurai", material: "Cotton Silk" },
    { src: SAREE_IMAGES[3], name: "Gilded Evening", origin: "Bengaluru", material: "Organza" },
    { src: SAREE_IMAGES[4], name: "Midnight Sophisticate", origin: "Chennai", material: "Soft Silk" },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We discuss your wedding theme, outfit colors, and traditions to conceptualize the perfect layout.",
    },
    {
      num: "02",
      title: "Curation",
      desc: "Our artisans handpick premium materials, florals, and antique elements to match the design.",
    },
    {
      num: "03",
      title: "Execution",
      desc: "On the big day, our team ensures a flawless, on-time setup that looks exactly as promised.",
    },
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

  useEffect(() => {
    setVisibleItems(8);
  }, [activeCategory]);

  // FIXED: If an image fails, pick a random pattern instead of the same purple saree
  const handleImageError = (e) => {
    const randomPattern = FALLBACK_PATTERNS[Math.floor(Math.random() * FALLBACK_PATTERNS.length)];
    e.target.src = randomPattern;
  };

  return (
    <div className="bg-[#fffdfa] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden" ref={containerRef}>
      
      {/* GLOBAL STYLES */}
      <style>{`
        @keyframes zoomFadeUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-zoomFadeUp { animation: zoomFadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideIn { animation: fadeSlideIn 0.5s ease-out forwards; }

        .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.4); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        
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

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/919080533611" target="_blank" rel="noreferrer" 
         className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group">
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">Chat with Stylist</span>
      </a>

      <div className="pt-10 md:pt-20 pb-0 relative">
        
        {/* HEADER */}
        <div className={`relative z-0 text-center mb-16 md:mb-24 px-4 transition-all duration-1000 ${isLoading ? "opacity-0" : "opacity-100 animate-zoomFadeUp "}`}>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#1a1a1a] tracking-tighter">
              Saree Draping
          </h1>

          <div className="mt-2">
            <h2 className="text-4xl md:text-6xl font-serif italic font-medium leading-[1.2] pb-2"
              style={{
                background: "linear-gradient(45deg, #D4AF37, #B38728)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Excellence & Elegance
            </h2>
          </div>

          <p className="mt-4 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Professional draping services to enhance your elegance and confidence.
          </p>
        </div>

        {/* FEATURED CAROUSEL */}
        <div className="relative z-0 mb-10 grid lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto px-4">
            <div className="lg:col-span-3 relative h-[450px] md:h-[520px] flex items-center justify-center overflow-visible"
                 onMouseEnter={() => setIsPaused(true)}
                 onMouseLeave={() => setIsPaused(false)}>
              
              <button onClick={() => setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)} className="absolute left-0 md:-left-6 z-[60] glass-card w-10 h-10 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center text-xl md:text-2xl hover:bg-[#D4AF37] hover:text-white transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => setActiveIndex((prev) => (prev + 1) % carouselItems.length)} className="absolute right-0 md:-right-6 z-[60] glass-card w-10 h-10 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center text-xl md:text-2xl hover:bg-[#D4AF37] hover:text-white transition-all">
                <ChevronRight size={24} />
              </button>

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
                    <img 
                      src={image.src} 
                      alt={image.name} 
                      onError={handleImageError} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-2 glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-sm animate-zoomFadeUp relative z-10 border border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <span className="text-[#D4AF37] font-black tracking-[0.2em] text-xs uppercase mb-4 block">Archive Spotlight</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-6 md:mb-8 leading-tight">
                {carouselItems[activeIndex].name}
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="pb-4 border-b border-[#D4AF37]/20">
                    <p className="text-[10px] font-bold text-[#D4AF37] uppercase mb-2">Provenance</p>
                    <p className="text-md md:text-lg font-medium text-gray-800">{carouselItems[activeIndex].origin}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] font-bold text-[#D4AF37] uppercase mb-1">Material</p>
                        <p className="text-xs md:text-sm font-semibold text-gray-700">{carouselItems[activeIndex].material}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-[#D4AF37] uppercase mb-1">Speciality</p>
                        <p className="text-xs md:text-sm font-semibold text-gray-700">Hand-pressed Pleats</p>
                    </div>
                </div>
              </div>
            </div>
        </div>

        {/* --- THE COLLECTION (With Smooth Transition) --- */}
        <div className="relative z-0 my-20 md:my-32 max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Archive 2024</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mt-3">The Collection</h2>
          </div>

          {/* Styled Tab Bar */}
          <nav className="sticky top-2 z-50 py-4 mb-10">
            <div className="max-w-3xl mx-auto bg-[#1a1a1a] rounded-full border border-[#D4AF37]/30 shadow-2xl p-2 flex justify-between items-center">
                {Object.keys(SAREE_ARCHIVE).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-1 rounded-full py-3 text-[10px] md:text-xs font-serif tracking-[0.2em] uppercase transition-all duration-300 ${
                      activeCategory === cat 
                        ? "bg-[#D4AF37] text-black font-bold shadow-lg" 
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
            </div>
          </nav>
          
          {/* Grid with Key-Based Animation for Smooth Transitions */}
          <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 animate-fadeSlideIn">
            {SAREE_ARCHIVE[activeCategory].slice(0, visibleItems).map((saree) => (
                <div key={saree.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 cursor-pointer"
                     onClick={() => setSelectedSaree(saree)}>
                  <div className="h-80 overflow-hidden relative">
                    <img 
                      src={saree.src} 
                      alt={saree.name} 
                      onError={handleImageError} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                  </div>
                  <div className="p-6 text-center">
                    <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] block mb-2">{saree.origin}</span>
                    <h3 className="text-md md:text-lg font-serif font-bold text-gray-800 mb-2">{saree.name}</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors flex items-center justify-center gap-2">
                      View Dossier <ArrowRight size={12} />
                    </p>
                  </div>
                </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < SAREE_ARCHIVE[activeCategory].length && (
            <div className="text-center mt-16">
              <button 
                onClick={() => setVisibleItems(prev => prev + 4)}
                className="px-12 py-4 border border-gray-300 text-gray-600 text-xs font-bold tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300 rounded-full"
              >
                Load More Styles
              </button>
            </div>
          )}
        </div>

        {/* --- PROCESS SECTION (Integrated with CTA) --- */}
        <div className="bg-[#050505] text-[#F2F2F2] pt-28 pb-20 px-6 overflow-hidden relative">
            
            {/* Dark background pattern */}
            <div className="absolute inset-0 opacity-5" 
                 style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">
                    The <span className="text-[#D4AF37] italic">Process</span>
                    </h2>
                    <p className="text-gray-500 text-sm tracking-wide">From concept to celebration in three simple steps.</p>
                </div>

                <div className="relative mb-24">
                    {/* Horizontal Line connecting nodes */}
                    <div className="hidden md:block absolute top-[27px] left-0 w-full h-[1px] bg-[#222] z-0"></div>

                    <div className="grid md:grid-cols-3 gap-12 text-left relative z-10">
                    {processSteps.map((step, index) => (
                        <div key={index} className="group relative">
                            {/* Circle Number */}
                            <div className="w-14 h-14 rounded-full border border-[#333] bg-[#050505] 
                                            flex items-center justify-center text-[#D4AF37] font-serif text-lg mb-8
                                            group-hover:border-[#D4AF37] transition-colors duration-500 relative z-20">
                            {step.num}
                            </div>

                            <h3 className="text-2xl font-serif text-[#F2F2F2] mb-4">
                            {step.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            {step.desc}
                            </p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* CREATIVE INTEGRATION: Decorative Line & CTA */}
                <div className="flex flex-col items-center">
                    <div className="h-16 w-[1px] bg-gradient-to-b from-[#222] to-[#D4AF37] mb-8"></div>
                    
                    <p className="text-gray-400 text-sm tracking-[0.2em] uppercase mb-8">Ready to transform your look?</p>
                    
                    <a href="https://wa.me/919080533611" target="_blank" rel="noreferrer"
                        className="inline-block px-14 py-5 rounded-full bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728] text-black font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                        Book Appointment Now
                    </a>
                </div>
            </div>
        </div>

      </div>

      {/* --- INTERACTIVE MATERIALITY MODAL --- */}
      {selectedSaree && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 md:p-8">
          <div className="bg-white max-w-6xl w-full rounded-xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row animate-zoomFadeUp max-h-[90vh]">
            <button onClick={() => setSelectedSaree(null)} 
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all">
                <X size={24} />
            </button>
            
            <div className="md:w-[45%] h-64 md:h-auto overflow-hidden bg-gray-100">
              <img 
                src={selectedSaree.src} 
                alt={selectedSaree.name} 
                onError={handleImageError} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="md:w-[55%] p-8 md:p-12 overflow-y-auto bg-[#FAF9F6] flex flex-col justify-center">
              <span className="text-[#D4AF37] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-4 block flex items-center gap-2">
                 <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Archive Details
              </span>
              <h3 className="text-2xl md:text-4xl font-serif font-bold mb-6 text-[#1a1a1a] leading-tight">{selectedSaree.name}</h3>
              
              <p className="font-serif text-lg leading-relaxed text-gray-600 italic mb-8 border-l-2 border-[#D4AF37] pl-4">
                 "{selectedSaree.description}"
              </p>

              {/* INTERACTIVE MATERIALITY FOCUS GRID */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-[#D4AF37] transition-colors group bg-white">
                      <Layers className="text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform" size={20} />
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Materiality</h4>
                      <p className="text-xs font-bold text-[#1a1a1a]">{selectedSaree.material}</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-[#D4AF37] transition-colors group bg-white">
                      <Star className="text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform" size={20} />
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Provenance</h4>
                      <p className="text-xs font-bold text-[#1a1a1a]">{selectedSaree.origin}</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-[#D4AF37] transition-colors group bg-white">
                      <ScanLine className="text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform" size={20} />
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Weave</h4>
                      <p className="text-xs font-bold text-[#1a1a1a]">Handloom Jacquard</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-[#D4AF37] transition-colors group bg-white">
                      <Feather className="text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform" size={20} />
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Feel</h4>
                      <p className="text-xs font-bold text-[#1a1a1a]">{selectedSaree.feel.split(" ")[2] || "Structured"}</p>
                  </div>
              </div>

              <a href={`https://wa.me/919080533611?text=Inquiry regarding ${selectedSaree.name}`} target="_blank" rel="noreferrer"
                 className="w-full text-center bg-[#1a1a1a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#D4AF37] transition-all uppercase text-xs tracking-widest shadow-lg">
                  Enquire About This Look
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SareeDraping;