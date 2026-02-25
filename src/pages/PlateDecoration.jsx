<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";

const plates = [
  "https://media.istockphoto.com/id/477384381/photo/old-fashioned-cafe-restaurant-interior.jpg?s=1024x1024&w=is&k=20&c=qrFB1aFx5f28LETO2q1P5-CxfmGrPPTmUGP97YXBoi0=",
  "https://images.unsplash.com/photo-1507187632231-5beb21a654a2?q=80&w=1201&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1770037367722-5444567fcb52?q=80&w=1074&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1676923901681-2711aae37105?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1771611186938-39a6b934f2f6?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1170&auto=format&fit=crop"
];


// section fade animation
const section = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};


// ✅ Medium vertical motion, same speed, different phase
const floatAnimation = (i) => ({
  y: [0, -18, 0],
  transition: {
    duration: 3.5,        // SAME speed
    repeat: Infinity,
    ease: "easeInOut",
    delay: i * 0.4        // DIFFERENT starting position
  }
});


export default function PlateDecoration() {

  return (

    <motion.div
      style={styles.container}
      initial="hidden"
      animate="show"
      variants={section}
    >

      {/* Heading */}
      <motion.div style={styles.headingBox} variants={section}>

        <div style={styles.badge}>
          Wedding Collection
        </div>

        <h1 style={styles.mainTitle}>
          Wedding Plate Decoration
        </h1>

        <div style={styles.dividerContainer}>
          <div style={styles.dividerLine}/>
          <div style={styles.dividerSymbol}>✦</div>
          <div style={styles.dividerLine}/>
        </div>

        <h2 style={styles.subTitle}>
          Customized Seer Varisai Plates
        </h2>

        <p style={styles.tagline}>
          Traditional • Elegant • Handmade
        </p>

      </motion.div>



      {/* Images */}
      <motion.div style={styles.imageBox} variants={section}>

        <div style={styles.featuredContainer}>
          <div style={styles.featuredLine}/>
          <h1 style={styles.featuredTitle}>Featured Plates</h1>
          <div style={styles.featuredLine}/>
        </div>


        <div style={styles.grid}>

          {plates.map((src, i) => (

            <motion.div
              key={i}
              animate={floatAnimation(i)}
              whileHover={{ scale: 1.06 }}
            >

              <img
                src={src}
                style={styles.image}
                alt="plate"
              />

            </motion.div>

          ))}

        </div>

      </motion.div>



      {/* Button */}
      <motion.button
        style={styles.button}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(212,175,55,0.6)"
        }}
      >
        Inquire Price
      </motion.button>

    </motion.div>

  );

}
// styles unchanged
const styles = {

  container:{
    minHeight:"100vh",
    background:"#0f0f0f",
    color:"#fff",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    padding:"40px 20px"
  },

  headingBox:{
    background:"#1a1a1a",
    padding:"40px 80px",
    borderRadius:"20px",
    marginBottom:"60px",
    textAlign:"center",
    border:"1px solid rgba(212,175,55,0.3)",
    boxShadow:"0 10px 30px rgba(0,0,0,.6)"
  },

  badge:{
    border:"1px solid #D4AF37",
    padding:"6px 18px",
    borderRadius:"20px",
    color:"#D4AF37",
    marginBottom:"15px"
  },

  mainTitle:{
    fontSize:"42px",
    background:"linear-gradient(90deg,#D4AF37,#FFD700,#D4AF37)",
    WebkitBackgroundClip:"text",
    WebkitTextFillColor:"transparent"
  },

  dividerContainer:{
    display:"flex",
    justifyContent:"center",
    gap:"10px",
    margin:"15px 0"
  },

  dividerLine:{
    width:"80px",
    height:"1px",
    background:"linear-gradient(90deg,transparent,#D4AF37,transparent)"
  },

  dividerSymbol:{ color:"#D4AF37" },

  subTitle:{ fontSize:"22px", color:"#D4AF37" },

  tagline:{ fontSize:"14px", color:"#aaa", letterSpacing:"2px" },

  imageBox:{
    background:"#fff",
    padding:"40px",
    borderRadius:"25px",
    boxShadow:"0 15px 40px rgba(0,0,0,.25)",
    marginBottom:"50px"
  },

  featuredContainer:{
    display:"flex",
    justifyContent:"center",
    gap:"15px",
    marginBottom:"30px"
  },

  featuredTitle:{ color:"#D4AF37", fontSize:"28px" },

  featuredLine:{
    width:"60px",
    height:"2px",
    background:"linear-gradient(90deg,transparent,#D4AF37,transparent)"
  },

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(3,250px)",
    gap:"50px"
  },

  image:{
    width:"250px",
    height:"250px",
    borderRadius:"18px",
    border:"2px solid #D4AF37",
    boxShadow:"0 0 25px rgba(212,175,55,.6)"
  },

  button:{
    padding:"14px 40px",
    fontSize:"18px",
    background:"transparent",
    border:"2px solid #D4AF37",
    color:"#D4AF37",
    borderRadius:"30px",
    cursor:"pointer"
  }

};
=======
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
          PLATE DECORATIONS
        </p>

        <h1 className="text-4xl md:text-6xl font-serif leading-tight">
          Traditional Wedding Plate <br />
          <span className="bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
            Curation
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
>>>>>>> 8afdd550b09f729b1af160ca442005622d79b2f5
