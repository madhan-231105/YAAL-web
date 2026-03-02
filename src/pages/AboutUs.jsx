import React from "react";
import { Gem, Crown, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const AboutUs = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-gray-50 to-white text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto px-6"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            About <span className="text-gold">YAAL Jewellery</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            We believe every bride deserves to shine like royalty.
            YAAL Jewellery Rental offers timeless elegance, premium craftsmanship,
            and luxury styling to make your special moments unforgettable.
          </p>
        </motion.div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              YAAL Jewellery was founded with a passion for tradition, elegance, and affordability.
              We understand the significance of special occasions, especially weddings and family gatherings.
              Our endeavor is to make every bride and woman feel confident, beautiful, and royal without financial burden.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At YAAL Jewellery, we do not just provide services — we create beautiful experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"
              alt="Bridal Jewellery"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {[ 
            {
              icon: <Crown size={36} />,
              title: "Our Mission",
              text: "To provide high-quality bridal jewellery rentals that combine traditional beauty with modern elegance — making luxury accessible to every bride.",
            },
            {
              icon: <Sparkles size={36} />,
              title: "Our Vision",
              text: "To become the most trusted bridal jewellery rental brand, known for quality, reliability, and unforgettable styling experiences.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 transition"
            >
              <div className="text-gold mb-4">{item.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-10"
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              { icon: <Gem size={36} />, title: "Premium Collection", text: "Handpicked antique, temple, and modern bridal jewellery crafted with precision and elegance." },
              { icon: <Heart size={36} />, title: "Customer First", text: "Personalized service to ensure you get the perfect match for your wedding look." },
              { icon: <Crown size={36} />, title: "Affordable Luxury", text: "Experience royal elegance without the heavy price tag — rent premium jewellery at budget-friendly rates." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <div className="text-gold mx-auto mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-14 bg-black text-white text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Make Your Special Day Truly Royal ✨
          </h2>
          <p className="text-gray-300 mb-6">
            Explore our exclusive bridal collections and book your perfect set today.
          </p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/jewellery"
            className="inline-block bg-gold text-white px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-gold-dark transition"
          >
            View Collection
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutUs;