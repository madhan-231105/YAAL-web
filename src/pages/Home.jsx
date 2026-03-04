import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/mockData";
import CircularGallery from "../components/ui/CircularGallery";
import { ChevronDown, Quote, ArrowRight, Star } from "lucide-react";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const goldText = "text-[#C5A02E]";
  const goldBorder = "border-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";

  useEffect(() => {
    window.scrollTo(0, 0);
    setFadeIn(true);
  }, []);

  const galleryItems = [
    { image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800", text: "Royal Muhurtham" },
    { image: "https://images.unsplash.com/photo-1610189012906-47833cc1574e?q=80&w=800", text: "Antique Gold" },
    { image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800", text: "Saree Draping" },
    { image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800", text: "Bridal Set" },
    { image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800", text: "Reception Look" },
    { image: "https://images.unsplash.com/photo-1583391726438-b71578e71852?q=80&w=800", text: "Vaddanam" },
  ];

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden selection:bg-[#C5A02E]/30">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#050505]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className={`${goldText} uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold block mb-8`}>
              Bespoke Jewellery Rental
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif leading-none mb-10 tracking-tight">
              Timeless <br />
              <span className="italic font-light opacity-90">Heritage</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
              Curating high-end antique and diamond bridal collections for the modern royalty.
            </p>
            <Link to="/jewellery" className="inline-block group">
              <button className={`px-12 py-5 border ${goldBorder} ${goldText} group-hover:bg-[#C5A02E] group-hover:text-black transition-all duration-700 rounded-full uppercase tracking-widest text-[10px] font-bold flex items-center gap-4`}>
                Enter the Boutique <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C5A02E]/60 cursor-pointer"
        >
          <ChevronDown size={30} strokeWidth={1} />
        </motion.div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-[#FCFBFA] py-32 px-6 md:px-20 text-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className={`${goldText} text-xs font-black uppercase tracking-[0.4em] block mb-4`}>The Craft</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Refining Your <br />
                <span className="italic">Bridal Experience</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-xs font-light text-sm tracking-wide leading-relaxed">
              From professional saree draping to premium bridal sets, we provide a full spectrum of luxury wedding services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1px bg-gray-200">
            {services.map((service, index) => (
              <motion.div
                whileHover={{ backgroundColor: "#F9F6F0" }}
                key={index}
                className="bg-[#FCFBFA] p-12 md:p-16 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <span className="text-gray-200 font-serif text-6xl absolute -top-8 -left-4 group-hover:text-[#C5A02E]/10 transition-colors">0{index + 1}</span>
                  <div className="text-4xl mb-10 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-6">{service.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CIRCULAR GALLERY ================= */}
      <section className="py-32 bg-[#050505] relative">
        <div className="text-center mb-24 px-6 relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif mb-6 leading-none">
            Our <span className={`${goldText} italic`}>Real Brides</span>
          </h2>
          <div className={`w-20 h-[1px] ${goldBg} mx-auto mb-8`} />
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase max-w-2xl mx-auto font-bold">
            Moments Captured in Gold and Diamonds
          </p>
        </div>

        <div className="h-[60vh] md:h-[700px] w-full relative z-10 grayscale hover:grayscale-0 transition-all duration-[2s]">
          <CircularGallery
            items={galleryItems}
            bend={0}
            textColor="#C5A02E"
            borderRadius={0.02}
            font="24px Playfair Display"
            scrollSpeed={2}
          />
        </div>

        {/* Backdrop Text Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
          <h2 className="text-[20vw] font-serif uppercase leading-none">YAAL</h2>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-[#FCFBFA] py-40 relative text-[#111] overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <div className="flex justify-center gap-1 mb-10">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C5A02E" className="text-[#C5A02E]" />)}
          </div>
          
          <Quote size={80} className="mx-auto mb-10 text-gray-100 absolute -top-10 left-1/2 -translate-x-1/2 -z-10" />
          
          <p className="text-2xl md:text-5xl italic font-serif mb-16 leading-[1.3] text-gray-800">
            “The jewellery was absolutely breathtaking. It gave my wedding the royal elegance I always dreamed of. Every piece felt like a piece of history.”
          </p>

          <div className="flex flex-col items-center">
            <div className={`w-20 h-20 rounded-full border border-[#C5A02E] p-1.5 mb-6`}>
              <img
                src="https://images.unsplash.com/photo-1623091411315-bd4e73307d1e?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover rounded-full"
                alt="Client"
              />
            </div>
            <span className={`${goldText} font-black tracking-[0.4em] text-xs uppercase mb-2`}>
              Anjali & Vikram
            </span>
            <span className="text-gray-400 text-[10px] uppercase tracking-widest">
              Grand Hyatt, Chennai
            </span>
          </div>
        </div>
        
        {/* Subtle Side Decor */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A02E]/20 to-transparent" />
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-6 bg-[#050505] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto border border-white/10 p-16 md:p-24 rounded-[3rem]"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-10">Begin Your Royal Journey</h2>
          <p className="text-gray-500 mb-12 font-light">Join the hundreds of brides who chose YAAL for their most precious moments.</p>
          <Link to="/jewellery">
            <button className={`${goldBg} text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-transform shadow-2xl shadow-[#C5A02E]/20`}>
              Browse Catalogue
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}