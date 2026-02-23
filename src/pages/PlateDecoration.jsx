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

/* IMAGE SETS */
const imageSets = [
  [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200",
  ],
  [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200",
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1200",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200",
  ],
  [
    "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=1200",
    "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?w=1200",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200",
  ],
  [
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200",
    "https://images.unsplash.com/photo-1520975922284-9fbb9f2dfc88?w=1200",
  ],
  [
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200",
    "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=1200",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200",
  ],
  [
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=1200",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200",
  ],
];

/* SOLITAIRE CARD */
function AutoCard({ images }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [images.length, hover]);

  const getImage = (offset) =>
    images[(index + offset) % images.length];

  return (
    <div
      className="relative w-full h-[450px] md:h-[520px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Back */}
      <img
        src={getImage(1)}
        alt=""
        className="absolute inset-0 w-full h-full object-cover
        rounded-2xl scale-95 translate-y-6 opacity-80
        transition-all duration-1000 ease-in-out"
      />

      {/* Front */}
      <img
        key={index}
        src={getImage(0)}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover
        rounded-2xl
        shadow-[0_40px_100px_rgba(139,107,31,0.45)]
        transition-all duration-1000 ease-in-out
        ${hover ? "scale-110" : "animate-solitaire"}`}
      />
    </div>
  );
}

export default function PlateDecoration() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden text-white">

      {/* DARK AMBIENT GOLD LIGHT */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_top,_rgba(139,107,31,0.15),_transparent_60%)]">
        </div>
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_bottom,_rgba(110,83,24,0.12),_transparent_60%)]">
        </div>
      </div>

      {/* STRONG VIGNETTE */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.9)_100%)]">
        </div>
      </div>

      {/* THORANAM GARLAND */}
      <div className="pointer-events-none absolute top-0 left-0 w-full z-0 flex justify-center">
        <div className="relative w-[90%] h-[140px]">

          {/* Main hanging curve */}
          <div className="absolute top-8 left-0 right-0 h-[2px] 
            bg-gradient-to-r from-transparent via-[#6E5318] to-transparent opacity-60">
          </div>

          {/* Hanging vertical elements */}
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="absolute top-8 w-[2px] h-[45px] bg-[#5A4414] opacity-50"
              style={{
                left: `${(i + 1) * 10}%`,
                transform: `rotate(${i % 2 === 0 ? "-6deg" : "6deg"})`
              }}
            />
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative text-center py-36 px-6 z-10">
        <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight">
          Wedding Plate
          <br />
          <span className="bg-gradient-to-r from-[#6E5318] via-[#8B6B1F] to-[#5A4414] bg-clip-text text-transparent">
            Decoration
          </span>
        </h1>

        <p className="text-gray-400 mt-8 text-lg tracking-wide">
          Customized Seer Varisai Plates
        </p>
      </section>

      {/* GALLERY */}
      <section className="relative bg-white text-black px-8 md:px-28 py-32 rounded-t-[60px] z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-20">
          <span className="text-gray-900">Featured </span>
          <span className="bg-gradient-to-r from-[#6E5318] via-[#8B6B1F] to-[#5A4414] bg-clip-text text-transparent">
            Designs
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {imageSets.map((set, i) => (
            <AutoCard key={i} images={set} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-center py-32 px-6 z-10">
        <h2 className="text-3xl md:text-4xl font-serif mb-10">
          Interested in these{" "}
          <span className="bg-gradient-to-r from-[#6E5318] via-[#8B6B1F] to-[#5A4414] bg-clip-text text-transparent">
            Designs?
          </span>
        </h2>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-14 py-5 rounded-full text-lg font-semibold 
          bg-gradient-to-r from-[#6E5318] via-[#8B6B1F] to-[#5A4414] 
          text-black tracking-wide
          hover:scale-105 transition-all duration-300"
        >
          Enquire Now
        </a>
      </section>

      {/* ANIMATION */}
      <style>{`
        @keyframes solitaireFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          40% { transform: translateY(-25px) rotate(-4deg); opacity: 1; }
          100% { transform: translateY(120px) rotate(8deg); opacity: 0; }
        }
        .animate-solitaire {
          animation: solitaireFall 1.2s ease forwards;
        }
      `}</style>

    </div>
  );
}
>>>>>>> 8afdd550b09f729b1af160ca442005622d79b2f5
