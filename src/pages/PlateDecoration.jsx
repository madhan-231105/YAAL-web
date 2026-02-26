import React, { useState, useEffect } from "react";

export default function PlateDecoration() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=80",
      title: "Royal Red Seer Set",
      description:
        "Traditional red and gold arrangement curated for grand South Indian weddings.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80",
      title: "Floral Luxury Theme",
      description:
        "Soft pastel floral styling with elegant gold finishing details.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1600&q=80",
      title: "Temple Inspired Design",
      description:
        "Classic temple jewelry concept infused into traditional plate décor.",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans">

      {/* HERO — BLACK (Service Style) */}
      <section className="bg-[#050505] text-[#F2F2F2] py-36 text-center px-6">

        <p className="text-sm tracking-[0.3em] text-[#D4AF37] mb-6">
          PLATE DECORATION SERVICE
        </p>

        <h1 className="text-4xl md:text-6xl font-serif leading-tight">
          Luxury Seer Varisai <br />
          <span className="bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
            Plate Styling
          </span>
        </h1>

        <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-8"></div>

        <p className="max-w-2xl mx-auto mt-10 text-gray-300 text-lg leading-relaxed">
          Customized wedding plate arrangements designed
          to reflect tradition, elegance, and celebration.
        </p>

      </section>



      {/* SHOWCASE — WHITE WITH GOLD GLOW */}
      <section className="relative bg-[#F8F6F2] py-36 px-6 md:px-20 text-center overflow-hidden">

        {/* GOLD GLOW */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[650px] h-[650px]
          bg-[radial-gradient(circle,_rgba(212,175,55,0.15),_transparent_65%)]
          blur-3xl"></div>
        </div>

        <h2 className="relative text-3xl md:text-4xl font-serif mb-20 z-10">
          Featured <span className="text-[#B38728]">Designs</span>
        </h2>

        <div className="relative max-w-5xl mx-auto z-10">

          <div className="
            bg-white/95 backdrop-blur-sm
            rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            border border-[#F1E6C8]
            p-6 md:p-10
            relative
          ">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl h-[500px]">

              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-1000 ease-in-out
                  ${i === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}

              {/* LEFT ARROW */}
              <button
                onClick={prevSlide}
                className="
                  absolute left-6 top-1/2 -translate-y-1/2
                  w-12 h-12 rounded-full
                  border border-[#D4AF37]
                  text-[#B38728]
                  flex items-center justify-center
                  backdrop-blur-md bg-white/40
                  hover:bg-[#D4AF37]
                  hover:text-black
                  transition-all duration-300
                "
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextSlide}
                className="
                  absolute right-6 top-1/2 -translate-y-1/2
                  w-12 h-12 rounded-full
                  border border-[#D4AF37]
                  text-[#B38728]
                  flex items-center justify-center
                  backdrop-blur-md bg-white/40
                  hover:bg-[#D4AF37]
                  hover:text-black
                  transition-all duration-300
                "
              >
                ›
              </button>

            </div>

            {/* TEXT */}
            <div className="mt-10 relative h-28">

              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute w-full transition-all duration-700
                  ${i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                  }`}
                >
                  <h3 className="text-2xl font-serif mb-3 text-[#1C1C1C]">
                    {slide.title}
                  </h3>

                  <p className="text-gray-600 max-w-xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>



      {/* WHY CHOOSE US — RICH BLACK */}
      <section className="relative bg-[#050505] text-[#F2F2F2] py-36 px-6 md:px-20 overflow-hidden">

        {/* GOLD SPOTLIGHT */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[500px] h-[500px]
          bg-[radial-gradient(circle,_rgba(212,175,55,0.12),_transparent_70%)]
          blur-3xl mt-10"></div>
        </div>

        <div className="relative text-center mb-20 z-10">
          <h2 className="text-4xl md:text-5xl font-serif">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto z-10">

          {[
            {
              title: "Tradition",
              text: "Designs rooted in authentic South Indian wedding customs with refined elegance.",
            },
            {
              title: "Customization",
              text: "Personalized themes crafted according to your wedding aesthetic and cultural style.",
            },
            {
              title: "Premium Finish",
              text: "Attention to detail with luxurious presentation that enhances every ceremony.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0B0B0B] border border-[#1A1A1A]
              rounded-2xl p-10 text-center
              hover:border-[#D4AF37]
              transition-all duration-500
              shadow-[0_0_40px_rgba(212,175,55,0.05)]"
            >
              <h3 className="text-2xl font-serif mb-6 text-[#D4AF37]">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </section>



      {/* CTA — PREMIUM WHITE */}
      <section className="relative bg-[#F8F6F2] py-36 px-6 text-center overflow-hidden">

        {/* GOLD GLOW */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[500px] h-[500px]
          bg-[radial-gradient(circle,_rgba(212,175,55,0.12),_transparent_70%)]
          blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#1C1C1C]">
            Let’s Curate Your{" "}
            <span className="bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
              Wedding Plates
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-10"></div>

          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Connect with us to design Seer Varisai plates
            that reflect your tradition and wedding grandeur.
          </p>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-16 py-5
            bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728]
            text-black font-semibold rounded-full
            shadow-[0_10px_30px_rgba(212,175,55,0.35)]
            hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)]
            hover:scale-[1.03]
            transition-all duration-300"
          >
            Enquire Now
          </a>

        </div>

      </section>

    </div>
  );
}