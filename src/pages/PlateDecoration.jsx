import React, { useState, useEffect } from "react";

export default function PlateDecoration() {
  // --- DATA ---
  const designs = [
    [
      {
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=90",
        title: "Royal Red Seer Set",
        description: "Traditional red and gold arrangement curated for grand South Indian weddings.",
        highlights: ["Deep Crimson Palette", "Gold Emboss Detailing", "Grand Ceremony Styling"],
      },
      {
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=90",
        title: "Crimson Heritage",
        description: "A bold red and temple-inspired styling for cultural ceremonies.",
        highlights: ["Temple Motifs", "Traditional Symmetry", "Bold Cultural Aesthetic"],
      },
    ],
    [
      {
        image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1600&q=90",
        title: "Floral Luxury Theme",
        description: "Soft pastel floral styling with elegant gold finishing details.",
        highlights: ["Pastel Floral Palette", "Elegant Gold Accents", "Modern Arrangement Style"],
      },
      {
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600&q=90",
        title: "Blush Wedding Set",
        description: "Modern floral plate décor for contemporary wedding aesthetics.",
        highlights: ["Soft Blush Tones", "Minimal Floral Layout", "Contemporary Styling"],
      },
    ],
    [
      {
        image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1600&q=90",
        title: "Temple Inspired Design",
        description: "Classic temple jewelry concept infused into traditional plate décor.",
        highlights: ["Antique Gold Finish", "Temple Jewellery Concept", "Sacred Traditional Look"],
      },
      {
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=90",
        title: "Sacred Gold Arrangement",
        description: "Traditional gold and maroon ceremonial styling.",
        highlights: ["Maroon & Gold Blend", "Ceremonial Grandeur", "Traditional Symmetry"],
      },
    ],
    [
      {
        image: "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=1600&q=90",
        title: "Grand Heritage Set",
        description: "A regal plate arrangement designed for traditional wedding grandeur.",
        highlights: ["Royal Heritage Theme", "Rich Gold Elements", "Grand Layout Structure"],
      },
      {
        image: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?w=1600&q=90",
        title: "Royal Celebration Layout",
        description: "Elegant luxury styling crafted for grand receptions.",
        highlights: ["Luxury Reception Style", "Refined Gold Accents", "Premium Visual Finish"],
      },
    ],
  ];

  const testimonials = [
    {
      name: "Ananya & Vikram",
      location: "Chennai",
      text: "The sheer attention to detail was breathtaking. The plates weren't just decoration; they were the highlight of our engagement ceremony.",
      stars: 5,
    },
    {
      name: "Priya S.",
      location: "Bangalore",
      text: "I wanted something traditional yet modern, and the 'Blush Wedding Set' was perfection. Professional execution from start to finish.",
      stars: 5,
    },
    {
      name: "Rajeshwari K.",
      location: "Coimbatore",
      text: "Highly recommended for anyone looking for luxury styling. They transformed our seer varisai into a royal display.",
      stars: 5,
    },
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

  // --- STATES ---
  const [indexes, setIndexes] = useState([0, 0, 0, 0]);
  const [paused, setPaused] = useState([false, false, false, false]);
  const [active, setActive] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  // --- EFFECTS ---
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((value, i) => (paused[i] ? value : (value + 1) % designs[i].length))
      );
    }, 4500);
    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setFadeIn(true);
  }, []);

  return (
    <div className={`font-sans bg-[#050505] text-[#F2F2F2] transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
      
      {/* 1. UPGRADED HERO SECTION (Parallax & Visual Impact) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Fixed Attachment for Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=1600&q=80')",
          }}
        ></div>
        
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
          <p className="text-xs md:text-sm tracking-[0.4em] text-[#D4AF37] mb-6 uppercase animate-fade-in-up">
            Curated For Tradition
          </p>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 drop-shadow-2xl">
            Luxury Seer Varisai <br />
            <span className="italic bg-gradient-to-r from-[#9F7928] via-[#F2D06B] to-[#B38728] bg-clip-text text-transparent">
              Plate Styling
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Elevating your auspicious beginnings with bespoke artistic arrangements.
          </p>
          
          <button 
            onClick={() => document.getElementById('collection').scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] 
            hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full uppercase tracking-widest text-xs font-bold"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* 2. IMAGE GRID (Existing Logic, Refined Styling) */}
      <section id="collection" className="bg-[#F8F6F2] px-6 md:px-20 py-24 relative">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-[#9F7928] uppercase border-b border-[#9F7928] pb-2">
            Signature Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#111] mt-8">
            Curated <span className="italic text-[#B38728]">Masterpieces</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designs.map((group, i) => {
            const current = group[indexes[i]];
            return (
              <div
                key={i}
                onMouseEnter={() => setPaused((prev) => prev.map((val, idx) => (idx === i ? true : val)))}
                onMouseLeave={() => setPaused((prev) => prev.map((val, idx) => (idx === i ? false : val)))}
                onClick={() => setActive(current)}
                className="group cursor-pointer relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                <div className="relative h-[350px] overflow-hidden">
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
                    <div className="h-[1px] w-0 group-hover:w-full bg-[#F2D06B] transition-all duration-700 ease-out mb-2"></div>
                    <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {current.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PROCESS TIMELINE (Replacing Feature Cards) */}
      <section className="bg-[#111] text-[#F2F2F2] py-28 px-6 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              The <span className="text-[#D4AF37] italic">Process</span>
            </h2>
            <p className="text-gray-400">From concept to celebration in three simple steps.</p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent z-0"></div>

            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 group">
                <div className="w-12 h-12 mx-auto md:mx-0 bg-[#1A1A1A] border border-[#333] 
                  text-[#D4AF37] rounded-full flex items-center justify-center text-lg font-serif mb-6
                  group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                  {step.num}
                </div>
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL (With Improved WhatsApp Link) */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#0A0A0A] rounded-2xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden shadow-2xl border border-[#222] animate-fade-in"
          >
            {/* Close Button */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 left-4 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center"
            >
              ✕
            </button>

            <img
              src={active.image}
              alt={active.title}
              className="h-[300px] md:h-[600px] w-full object-cover"
            />

            <div className="p-8 md:p-12 flex flex-col justify-center relative">
               {/* Decorative Side Line */}
              <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent hidden md:block"></div>

              <h3 className="text-3xl md:text-4xl font-serif mb-4 text-[#D4AF37]">
                {active.title}
              </h3>

              <p className="text-gray-300 mb-8 font-light leading-relaxed">
                {active.description}
              </p>

              <div className="mb-10">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Highlights</h4>
                <ul className="space-y-3">
                  {active.highlights.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/919876543210?text=Hi, I am interested in the ${active.title} for my wedding.`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors duration-300"
              >
                Book This Design
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}