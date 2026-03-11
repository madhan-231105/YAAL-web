import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CircularGallery from "../components/ui/CircularGallery";
import { ChevronDown, Quote, ArrowRight, Star } from "lucide-react";
import { homeData } from "../data/home_data";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  const goldText = "text-[#C5A02E]";
  const goldBorder = "border-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";

  useEffect(() => {
    window.scrollTo(0, 0);
    setFadeIn(true);
  }, []);

  const services = homeData.services;
  const galleryItems = homeData.gallery;
  const testimonial = homeData.testimonial;

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden selection:bg-[#C5A02E]/30">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeData.hero.backgroundImage})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#050505]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: fadeIn ? 1 : 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className={`${goldText} uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold block mb-8`}>
              Bespoke Jewellery Rental
            </span>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif leading-none mb-10 tracking-tight">
              {homeData.hero.title1} <br />
              <span className="italic font-light opacity-90">
                {homeData.hero.title2}
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
              {homeData.hero.subtitle}
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C5A02E]/60"
        >
          <ChevronDown size={30} strokeWidth={1} />
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#FCFBFA] py-32 px-6 md:px-20 text-[#111]">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className={`${goldText} text-xs font-black uppercase tracking-[0.4em] block mb-4`}>
                The Craft
              </span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Refining Your <br />
                <span className="italic">Bridal Experience</span>
              </h2>
            </div>

            <p className="text-gray-500 max-w-xs font-light text-sm tracking-wide leading-relaxed">
              From professional saree draping to premium bridal sets, we provide a full spectrum of luxury wedding services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-[1px] bg-gray-200">

            {services.map((service, index) => (
              <motion.div
                whileHover={{ backgroundColor: "#F9F6F0" }}
                key={index}
                className="bg-[#FCFBFA] p-12 md:p-16 group relative overflow-hidden"
              >
                <span className="text-gray-200 font-serif text-6xl absolute -top-8 -left-4">
                  0{index + 1}
                </span>

                <div className="text-4xl mb-10">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-serif mb-6">
                  {service.title}
                </h3>

                <p className="text-gray-500 font-light text-sm">
                  {service.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-32 bg-[#050505] relative">

        <div className="text-center mb-24 px-6">
          <h2 className="text-4xl md:text-7xl font-serif mb-6">
            Our <span className={`${goldText} italic`}>Real Brides</span>
          </h2>

          <div className={`w-20 h-[1px] ${goldBg} mx-auto mb-8`} />

          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase font-bold">
            Moments Captured in Gold and Diamonds
          </p>
        </div>

        <div className="h-[60vh] md:h-[700px] w-full grayscale hover:grayscale-0 transition-all duration-[2s]">

          <CircularGallery
            items={galleryItems}
            bend={0}
            textColor="#C5A02E"
            borderRadius={0.02}
            font="24px Playfair Display"
            scrollSpeed={2}
          />

        </div>

      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#FCFBFA] py-40 text-[#111]">

        <div className="max-w-5xl mx-auto text-center px-6">

          <div className="flex justify-center gap-1 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#C5A02E" className="text-[#C5A02E]" />
            ))}
          </div>

          <Quote size={80} className="mx-auto mb-10 text-gray-200" />

          <p className="text-2xl md:text-5xl italic font-serif mb-16 leading-[1.3] text-gray-800">
            “{testimonial.quote}”
          </p>

          <div className="flex flex-col items-center">

            <div className="w-20 h-20 rounded-full border border-[#C5A02E] p-1.5 mb-6">
              <img
                src={testimonial.image}
                className="w-full h-full object-cover rounded-full"
                alt="Client"
              />
            </div>

            <span className={`${goldText} font-black tracking-[0.4em] text-xs uppercase mb-2`}>
              {testimonial.bride}
            </span>

            <span className="text-gray-400 text-[10px] uppercase tracking-widest">
              {testimonial.location}
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}