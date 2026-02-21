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

function AutoCard({ images }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [hover, images.length]);

  return (
    <div
      className="relative w-full h-96 overflow-hidden rounded-xl shadow-md"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            i === index
              ? `opacity-100 ${hover ? "scale-110" : "scale-100"}`
              : "opacity-0 scale-105"
          }`}
        />
      ))}
    </div>
  );
}

export default function PlateDecoration() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="bg-black text-white text-center py-28 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Wedding Plate
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Design Collection
          </span>
        </h1>
        <p className="text-gray-400 mt-6 text-lg">
          Modern. Minimal. Customized.
        </p>
      </section>

      {/* GALLERY */}
      <section className="bg-white text-black px-6 md:px-20 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          Featured <span className="text-purple-600">Designs</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {imageSets.map((set, i) => (
            <AutoCard key={i} images={set} />
          ))}
        </div>
      </section>

      {/* STATIC CTA SECTION */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Interested in these{" "}
          <span className="text-blue-400">designs?</span>
        </h2>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-black px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300"
        >
          Enquire Now
        </a>
      </section>

    </div>
  );
}