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