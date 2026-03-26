import React, { useState, useEffect, useCallback } from "react";
// Import only the necessary data
import { plateHeroImage, plateDesigns, plateProcessSteps } from "../data/plate_data";

export default function PlateDecoration() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [indexes, setIndexes] = useState([0, 0, 0, 0]);
  const [paused, setPaused] = useState([false, false, false, false]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Optimized Interval Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((value, i) => {
          // Only increment if not paused and the group has more than one image
          if (paused[i] || !plateDesigns[i] || plateDesigns[i].length <= 1) {
            return value;
          }
          return (value + 1) % plateDesigns[i].length;
        })
      );
    }, 4500);
    return () => clearInterval(interval);
  }, [paused]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [active]);

  const togglePause = (i, isPaused) => {
    setPaused((prev) => {
      const newState = [...prev];
      newState[i] = isPaused;
      return newState;
    });
  };

  return (
    <div className="font-sans bg-[#050505] text-[#F2F2F2] selection:bg-[#D4AF37] selection:text-black">
      <style>{`
        @keyframes heroPop {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hero-pop { animation: heroPop 1.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('${plateHeroImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>

        <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto ${heroVisible ? "hero-pop" : "opacity-0"}`}>
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#D4AF37] mb-4 uppercase font-bold">
            Curated For Tradition
          </p>

          <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-6 drop-shadow-2xl text-white">
            Luxury Seer Varisai <br />
            <span className="italic bg-gradient-to-r from-[#9F7928] via-[#F2D06B] to-[#B38728] bg-clip-text text-transparent">
              Plate Styling
            </span>
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
            Elevating your auspicious beginnings with bespoke artistic arrangements and timeless craftsmanship.
          </p>

          <button
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full uppercase tracking-widest text-[10px] font-bold"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section id="collection" className="bg-[#FDFCFB] px-4 md:px-10 lg:px-20 py-20 relative">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#9F7928] uppercase">
            Signature Collection
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#111] mt-2">
            Curated <span className="italic text-[#B38728]">Masterpieces</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {plateDesigns.map((group, i) => {
            const current = group[indexes[i]] || group[0];
            return (
              <div
                key={i}
                onMouseEnter={() => togglePause(i, true)}
                onMouseLeave={() => togglePause(i, false)}
                onClick={() => setActive(current)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white aspect-[4/5] md:aspect-auto md:h-[450px]"
              >
                {group.map((item, idx) => (
                  <img
                    key={idx}
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out
                    ${idx === indexes[i] ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  />
                ))}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest mb-1 font-bold">Premium Design</p>
                  <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-[#F2D06B] transition-colors">
                    {current.title}
                  </h3>
                  <div className="h-[2px] w-0 group-hover:w-12 bg-[#F2D06B] transition-all duration-500 mt-2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-[#0A0A0A] text-[#F2F2F2] py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              The <span className="text-[#D4AF37] italic">Process</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light">
              We turn your vision into a reality with a seamless three-step styling experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {plateProcessSteps.map((step, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors group">
                <div className="w-12 h-12 bg-[#D4AF37] text-black rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://wa.me/919080533611"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-[#D4AF37] text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-all shadow-lg active:scale-95"
            >
              Book Your Slot
            </a>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div 
          onClick={() => setActive(null)} 
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[200] p-4 md:p-8 overflow-y-auto no-scrollbar"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative bg-[#0A0A0A] rounded-3xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden shadow-2xl border border-white/10 my-auto"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActive(null)} 
              className="absolute top-4 right-4 z-[210] w-10 h-10 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center border border-white/20"
            >
              ✕
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto overflow-hidden">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
              <h3 className="text-3xl md:text-4xl font-serif mb-4 text-[#D4AF37]">{active.title}</h3>
              <p className="text-gray-400 mb-8 font-light leading-relaxed text-sm md:text-base">
                {active.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Design Highlights</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {active.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => window.open(`https://wa.me/919080533611?text=Hi Yaal! I'm interested in the ${active.title} plate design.`)}
                className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-colors"
              >
                Inquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}