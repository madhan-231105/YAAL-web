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