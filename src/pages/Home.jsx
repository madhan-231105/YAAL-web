import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/mockData";
import StarBorder from "../components/ui/StarBorder";
import CircularGallery from "../components/ui/CircularGallery";
import { ChevronDown, Quote } from "lucide-react"; // Make sure to npm install lucide-react if not done

const Home = () => {
  // High-quality vertical images for the gallery
  const galleryItems = [
    { image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop", text: "Royal Muhurtham" },
    { image: "https://images.unsplash.com/photo-1610189012906-47833cc1574e?q=80&w=800&auto=format&fit=crop", text: "Antique Gold" },
    { image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop", text: "Saree Draping" },
    { image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", text: "Bridal Set" },
    { image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", text: "Reception Look" },
    { image: "https://images.unsplash.com/photo-1583391726438-b71578e71852?q=80&w=800&auto=format&fit=crop", text: "Vaddanam" },
  ];

  return (
    <div className="overflow-hidden bg-slate-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full bg-black overflow-hidden">
        {/* Background Image with slow zoom animation */}
        <img
          src="https://images.unsplash.com/photo-1546195864-706788806085?auto=format&fit=crop&q=80&w=1920"
          alt="Indian Bride"
          className="w-full h-full object-cover object-top opacity-60 scale-105 animate-[zoom_20s_linear_infinite]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90"></div>

        {/* Ambient Gold Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-wide drop-shadow-2xl">
            Timeless{" "}
            <span className="bg-gradient-to-r from-[#FFE5B4] via-[#D4AF37] to-[#B5952F] bg-clip-text text-transparent">
              Heritage
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-2xl mb-12 max-w-3xl font-light tracking-wider leading-relaxed drop-shadow-md">
            Adorn yourself in the finest antique and diamond jewellery, handcrafted for your grandest celebrations.
          </p>

          <Link to="/jewellery">
            <StarBorder
              as="button"
              color="#D4AF37"
              speed="4s"
              className="text-white font-serif font-semibold uppercase tracking-[0.25em] px-14 py-5 bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/40 hover:bg-[#D4AF37]/20 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Explore Collection
            </StarBorder>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3 mb-6">
              Curated Luxury Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-10 bg-white border border-gray-100 rounded-none shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                {/* Gold Border Reveal on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 grayscale group-hover:grayscale-0">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR WORKS (3D Gallery) ================= */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10 px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Real Brides, <span className="text-[#D4AF37] italic">Real Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Witness the magic of our jewellery and draping on real brides.
          </p>
        </div>

        {/* Gallery Container - Adjusted Height for Mobile/Desktop */}
        <div className="h-[50vh] md:h-[600px] w-full relative z-10">
          <CircularGallery
            items={galleryItems}
            bend={0} // 0 = Linear (Film Strip), 3 = Curved
            textColor="#D4AF37"
            borderRadius={0.05}
            font="30px Playfair Display"
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>

        {/* Overlay Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Decorative Quote Icon Background */}
        <div className="absolute top-10 left-10 md:left-1/4 text-[#D4AF37]/5">
          <Quote size={200} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8 flex justify-center">
             <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-[#D4AF37] p-1">
                <img src="https://images.unsplash.com/photo-1623091411315-bd4e73307d1e?auto=format&fit=crop&q=80&w=100" className="w-full h-full rounded-full object-cover" alt="Client"/>
             </div>
          </div>
          
          <p className="text-2xl md:text-4xl italic font-serif text-gray-800 mb-10 leading-relaxed font-light">
            “The jewellery was absolutely breathtaking! It gave my wedding the
            royal elegance I always dreamed of. The service was impeccable.”
          </p>

          <div className="flex flex-col items-center">
            <span className="text-[#D4AF37] font-bold text-lg tracking-widest uppercase">Anjali & Vikram</span>
            <span className="text-gray-400 text-sm mt-1">Chennai, Wedding Reception</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;