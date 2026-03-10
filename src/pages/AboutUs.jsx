import React from "react";
import { Gem, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

// Snappier, high-performance animation variants
const fastFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }, // Snappy Cubic Bezier
  },
};

const staggerItems = {
  visible: { transition: { staggerChildren: 0.1 } }, // Faster stagger (0.1 instead of 0.2)
};

const AboutUs = () => {
  const goldText = "text-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";

  return (
    <div className="bg-[#FCFBFA] text-slate-900 font-sans selection:bg-[#C5A02E]/20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
        {/* Optimized CSS-only background (No image, faster load) */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 -z-10" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fastFadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className={`inline-block uppercase tracking-[0.3em] text-[10px] font-bold mb-4 ${goldText}`}>
            Est. 2023 — YAAL Jewellery
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
            Where Tradition Meets <br />
            <span className="italic">Royal Elegance</span>
          </h1>
          <div className={`w-16 h-[1px] ${goldBg} mx-auto mb-8`} />
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Crafting timeless masterpieces for your most cherished moments. 
            Because every bride deserves to shine like royalty.
          </p>
        </motion.div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }} // Trigger earlier
              variants={fastFadeUp}
              className="relative group"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=75" // Lower q for speed
                  alt="Craftsmanship"
                  loading="lazy"
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fastFadeUp}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                Crafting Stories <br />Since our Inception
              </h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg font-light leading-relaxed">
                <p>
                  YAAL Jewellery was founded to democratize luxury. We believe a wedding is a legacy, not just an expense.
                </p>
                <p>
                  Our collections bridge temple artistry and modern minimalism, letting you feel queenly without the heavy investment.
                </p>
              </div>
              
              <div className="flex gap-10 pt-4">
                <div>
                  <h4 className={`text-2xl font-serif ${goldText}`}>1000+</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Happy Brides</p>
                </div>
                <div>
                  <h4 className={`text-2xl font-serif ${goldText}`}>500+</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Unique Designs</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-[#FCFBFA]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fastFadeUp}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-3">The YAAL Advantage</h2>
            <p className="text-gray-400 tracking-[0.2em] uppercase text-[10px]">Why sophisticated brides choose us</p>
          </motion.div>

          <motion.div 
            variants={staggerItems}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Gem size={24} />, title: "Premium Curation", text: "Hand-selected pieces inspected for the highest standards." },
              { icon: <Star size={24} />, title: "Personal Styling", text: "Free consultations to pair the perfect set with your attire." },
              { icon: <Heart size={24} />, title: "Hygiene & Care", text: "5-step sterilization process after every single rental." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fastFadeUp}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 mx-auto mb-5 rounded-full flex items-center justify-center bg-gray-50 ${goldText}`}>
                  {item.icon}
                </div>
                <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 bg-black overflow-hidden">
        {/* Using a solid background with a CSS pattern instead of a heavy image for instant loading */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white font-light mb-6 tracking-wide">
            Your Royal Journey <br /> <span className={`italic ${goldText}`}>Begins Here</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 font-light max-w-xl mx-auto">
            Experience the grandeur of premium jewellery at a fraction of the cost.
          </p>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/jewellery"
            className={`inline-block ${goldBg} text-white px-10 py-4 rounded-full font-medium tracking-widest uppercase text-[10px] hover:brightness-110 transition shadow-lg`}
          >
            Explore Collection
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;