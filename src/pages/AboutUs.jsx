import React from "react";
import { Gem, Crown, Heart, Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            About <span className="text-gold">YAAL Jewellery</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We believe every bride deserves to shine like royalty. 
            YAAL Jewellery Rental offers timeless elegance, premium craftsmanship, 
            and luxury styling to make your special moments unforgettable.
          </p>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              YAAL Jewellery was founded with a passion for elegance and tradition.
              We specialize in bridal jewellery rentals, saree draping, and 
              plate decoration services that reflect culture, grace, and grandeur.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide premium jewellery collections at 
              affordable rental prices — ensuring every bride feels confident, 
              radiant, and regal on her special day.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"
              alt="Bridal Jewellery"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <Crown className="text-gold mb-4" size={40} />
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide high-quality bridal jewellery rentals that combine 
              traditional beauty with modern elegance — making luxury accessible 
              to every bride.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <Sparkles className="text-gold mb-4" size={40} />
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted bridal jewellery rental brand, 
              known for quality, reliability, and unforgettable styling experiences.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-14">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="p-8">
              <Gem className="text-gold mx-auto mb-4" size={40} />
              <h4 className="font-semibold text-xl mb-3">Premium Collection</h4>
              <p className="text-gray-600">
                Handpicked antique, temple, and modern bridal jewellery 
                crafted with precision and elegance.
              </p>
            </div>

            <div className="p-8">
              <Heart className="text-gold mx-auto mb-4" size={40} />
              <h4 className="font-semibold text-xl mb-3">Customer First</h4>
              <p className="text-gray-600">
                Personalized service to ensure you get the perfect match 
                for your wedding look.
              </p>
            </div>

            <div className="p-8">
              <Crown className="text-gold mx-auto mb-4" size={40} />
              <h4 className="font-semibold text-xl mb-3">Affordable Luxury</h4>
              <p className="text-gray-600">
                Experience royal elegance without the heavy price tag — 
                rent premium jewellery at budget-friendly rates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Make Your Special Day Truly Royal ✨
          </h2>
          <p className="text-gray-300 mb-8">
            Explore our exclusive bridal collections and book your perfect set today.
          </p>

          <a
            href="/jewellery"
            className="inline-block bg-gold text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-gold-dark transition"
          >
            View Collection
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;