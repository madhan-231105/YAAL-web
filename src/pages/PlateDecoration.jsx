import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((value, i) =>
          paused[i] ? value : (value + 1) % plateDesigns[i].length
        )
      );
    }, 4500);
    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <div className="font-sans bg-[#050505] text-[#F2F2F2]">
      <style>{`
        @keyframes heroPop {
          0% { opacity: 0; transform: translateY(60px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hero-pop { animation: heroPop 1.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative h-[62vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
          style={{ backgroundImage: `url('${plateHeroImage}')` }} // Background image from DATA
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]"></div>

        {/* Text content remains hardcoded here */}
        <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto ${heroVisible ? "hero-pop" : "opacity-0"}`}>
          <p className="text-xs md:text-sm tracking-[0.4em] text-[#D4AF37] mb-6 uppercase">
            Curated For Tradition
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 drop-shadow-2xl text-white">
            Luxury Seer Varisai <br />
            <span className="italic bg-gradient-to-r from-[#9F7928] via-[#F2D06B] to-[#B38728] bg-clip-text text-transparent">
              Plate Styling
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Elevating your auspicious beginnings with bespoke artistic arrangements.
          </p>

          <button
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full uppercase tracking-widest text-xs font-bold cursor-pointer"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section id="collection" className="bg-[#F8F6F2] px-6 md:px-20 py-24 relative">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#9F7928] uppercase border-b border-[#9F7928] pb-2">
            Signature Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#111] mt-4">
            Curated <span className="italic text-[#B38728]">Masterpieces</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {plateDesigns.map((group, i) => {
            const current = group[indexes[i]];
            return (
              <div
                key={i}
                onMouseEnter={() => setPaused((p) => p.map((v, idx) => (idx === i ? true : v)))}
                onMouseLeave={() => setPaused((p) => p.map((v, idx) => (idx === i ? false : v)))}
                onClick={() => setActive(current)}
                className="group cursor-pointer relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                <div className="relative h-[220px] md:h-[350px] overflow-hidden">
                  {group.map((item, idx) => (
                    <img
                      key={idx}
                      src={item.image}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover transform duration-[2000ms] ease-in-out
                      ${idx === indexes[i] ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-xl text-white mb-1 group-hover:text-[#F2D06B] transition-colors">
                      {current.title}
                    </h3>
                    <div className="h-[1px] w-0 group-hover:w-full bg-[#F2D06B] transition-all duration-700 mb-2"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-[#111] text-[#F2F2F2] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-2">
              The <span className="text-[#D4AF37] italic">Process</span>
            </h2>
            <p className="text-gray-400">From concept to celebration in three simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {plateProcessSteps.map((step, index) => (
              <div key={index}>
                <div className="w-12 h-12 mx-auto md:mx-0 bg-[#1A1A1A] border border-[#333] text-[#D4AF37] rounded-full flex items-center justify-center text-lg font-serif mb-6">
                  {step.num}
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://wa.me/919080533611"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-12 py-4 rounded-full bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728] text-black font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-xl cursor-pointer"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div onClick={() => setActive(null)} className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[200] p-4">
          <div onClick={(e) => e.stopPropagation()} className="relative bg-[#0A0A0A] rounded-2xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden shadow-2xl border border-[#222]">
            <button onClick={() => setActive(null)} className="absolute top-4 left-4 z-50 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center cursor-pointer">✕</button>
            <img src={active.image} alt={active.title} className="h-[300px] md:h-[600px] w-full object-cover" />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-serif mb-4 text-[#D4AF37]">{active.title}</h3>
              <p className="text-gray-300 mb-8 font-light leading-relaxed">{active.description}</p>
              <div className="mb-10">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Highlights</h4>
                <ul className="space-y-3">
                  {active.highlights.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3"></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => window.open(`https://wa.me/919080533611?text=Hi, I am interested in the ${active.title} design.`)}
                className="w-full text-center py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors cursor-pointer"
              >
                Book This Design
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}