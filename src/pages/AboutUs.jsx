import React from "react";
import { Gem, Crown, Heart, Sparkles, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const AboutUs = () => {
  // Custom Gold Color Class (using arbitrary values for a premium look)
  const goldText = "text-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";
  const goldBorder = "border-[#C5A02E]/30";

  return (
    <div className="bg-[#FCFBFA] text-slate-900 font-sans overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6">
        {/* Decorative Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 -z-10" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className={`inline-block uppercase tracking-[0.3em] text-xs font-bold mb-4 ${goldText}`}>
            Est. 2023 — YAAL Jewellery
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-8">
            Where Tradition Meets <br />
            <span className="italic font-serif">Royal Elegance</span>
          </h1>
          <div className={`w-20 h-[1px] ${goldBg} mx-auto mb-8`} />
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            We believe every bride deserves to shine like royalty. YAAL Jewellery 
            curates timeless masterpieces for your most cherished moments.
          </p>
        </motion.div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
                {/* Decorative Frame */}
              <div className={`absolute -top-4 -left-4 w-full h-full border ${goldBorder} rounded-2xl -z-10 hidden md:block`} />
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80"
                  alt="Craftsmanship"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 leading-snug">
                Crafting Stories <br />Since our Inception
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                YAAL Jewellery was founded with a singular passion: to democratize luxury. 
                We understand that a wedding isn't just an event; it's a legacy. 
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Our handpicked collections bridge the gap between ancient temple artistry 
                and modern minimalism, ensuring every woman feels confident and 
                queenly without the burden of heavy investment.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className={`text-2xl font-serif ${goldText}`}>1000+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Happy Brides</p>
                </div>
                <div>
                  <h4 className={`text-2xl font-serif ${goldText}`}>500+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Unique Designs</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4">The YAAL Advantage</h2>
            <p className="text-gray-500 tracking-widest uppercase text-xs">Why sophisticated brides choose us</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Gem size={28} />, title: "Premium Curation", text: "Each piece is hand-selected and inspected for the highest standards of craftsmanship." },
              { icon: <Star size={28} />, title: "Personal Styling", text: "Free consultations to help you pair the perfect set with your bridal attire." },
              { icon: <Heart size={28} />, title: "Hygiene & Care", text: "Our jewellery undergoes a 5-step sterilization process after every single rental." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gray-50 ${goldText} group-hover:bg-[#C5A02E] group-hover:text-white transition-all duration-500 shadow-sm`}>
                  {item.icon}
                </div>
                <h4 className="font-serif text-xl mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80" 
            className="w-full h-full object-cover opacity-10" 
            alt="Jewellery Texture" 
          />
          <div className="absolute inset-0 bg-black/90" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white font-light mb-6 tracking-wide">
            Your Royal Journey <br /> <span className="italic text-[#C5A02E]">Begins Here</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 font-light max-w-xl mx-auto">
            Experience the grandeur of premium jewellery at a fraction of the cost. 
            Book your styling session today.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/jewellery"
            className={`inline-block ${goldBg} text-white px-10 py-4 rounded-full font-medium tracking-[0.2em] uppercase text-xs hover:brightness-110 transition shadow-xl`}
          >
            Explore Collection
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutUs;