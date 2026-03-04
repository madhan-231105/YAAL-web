import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/mockData";
import CircularGallery from "../components/ui/CircularGallery";
import { ChevronDown, Quote } from "lucide-react";

export default function Home() {

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setFadeIn(true);
  }, []);

  const galleryItems = [
    { image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop", text: "Royal Muhurtham" },
    { image: "https://images.unsplash.com/photo-1610189012906-47833cc1574e?q=80&w=800&auto=format&fit=crop", text: "Antique Gold" },
    { image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop", text: "Saree Draping" },
    { image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", text: "Bridal Set" },
    { image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", text: "Reception Look" },
    { image: "https://images.unsplash.com/photo-1583391726438-b71578e71852?q=80&w=800&auto=format&fit=crop", text: "Vaddanam" },
  ];

  return (

    <div className={`bg-[#050505] text-white transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0"}`}>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 animate-[zoom_20s_linear_infinite]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=1920&q=80')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          <p className="text-xs md:text-sm tracking-[0.4em] text-[#D4AF37] mb-6 uppercase">
            Luxury Bridal Jewellery
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 drop-shadow-2xl">
            Timeless Bridal <br />

            <span className="italic bg-gradient-to-r from-[#9F7928] via-[#F2D06B] to-[#B38728] bg-clip-text text-transparent">
              Jewellery Collection
            </span>

          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Handcrafted antique and diamond jewellery curated for unforgettable wedding moments.
          </p>

          <Link to="/jewellery">

            <button
              className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37]
              hover:bg-[#D4AF37] hover:text-black transition-all duration-500
              rounded-full uppercase tracking-widest text-xs font-bold"
            >
              Explore Collection
            </button>

          </Link>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-gray-300">

          <span className="text-xs tracking-widest mb-1">Scroll</span>

          <ChevronDown size={24} />

        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#F8F6F2] py-28 px-6 md:px-20 text-[#111]">

        <div className="text-center mb-20">

          <span className="text-xs font-bold tracking-[0.2em] text-[#9F7928] uppercase border-b border-[#9F7928] pb-2">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-serif mt-8">
            Crafted For <span className="italic text-[#B38728]">Elegance</span>
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl
              transition duration-500 hover:-translate-y-2 group text-center"
            >

              <div className="text-5xl mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-2xl font-serif mb-4 group-hover:text-[#D4AF37] transition">
                {service.title}
              </h3>

              <p className="text-gray-600 font-light leading-relaxed">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= REAL BRIDES GALLERY ================= */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">

        <div className="text-center mb-16 px-6">

          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Real Brides, <span className="text-[#D4AF37] italic">Real Stories</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience how our jewellery transforms every bride into royalty.
          </p>

        </div>

        <div className="h-[50vh] md:h-[600px] w-full relative">

          <CircularGallery
            items={galleryItems}
            bend={0}
            textColor="#D4AF37"
            borderRadius={0.05}
            font="30px Playfair Display"
            scrollSpeed={2}
            scrollEase={0.05}
          />

        </div>

        {/* Edge Fade */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#050505] to-transparent" />

      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-[#F8F6F2] py-32 relative text-[#111]">

        <div className="absolute top-10 left-1/4 text-[#D4AF37]/10">
          <Quote size={200} />
        </div>

        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="text-2xl md:text-4xl italic font-serif mb-10 leading-relaxed">
            “The jewellery was absolutely breathtaking. It gave my wedding
            the royal elegance I always dreamed of.”
          </p>

          <div className="flex flex-col items-center">

            <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1623091411315-bd4e73307d1e?auto=format&fit=crop&q=80&w=100"
                className="w-full h-full object-cover"
                alt="Client"
              />
            </div>

            <span className="text-[#D4AF37] font-bold tracking-widest uppercase">
              Anjali & Vikram
            </span>

            <span className="text-gray-500 text-sm mt-1">
              Chennai Wedding Reception
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}