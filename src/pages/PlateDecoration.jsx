import React, { useState, useEffect } from "react";

export default function PlateDecoration() {
  const designs = [
    [
      {
        image:
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=90",
        title: "Royal Red Seer Set",
        description:
          "Traditional red and gold arrangement curated for grand South Indian weddings.",
        highlights: [
          "Deep Crimson Palette",
          "Gold Emboss Detailing",
          "Grand Ceremony Styling",
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=90",
        title: "Crimson Heritage",
        description:
          "A bold red and temple-inspired styling for cultural ceremonies.",
        highlights: [
          "Temple Motifs",
          "Traditional Symmetry",
          "Bold Cultural Aesthetic",
        ],
      },
    ],
    [
      {
        image:
          "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1600&q=90",
        title: "Floral Luxury Theme",
        description:
          "Soft pastel floral styling with elegant gold finishing details.",
        highlights: [
          "Pastel Floral Palette",
          "Elegant Gold Accents",
          "Modern Arrangement Style",
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600&q=90",
        title: "Blush Wedding Set",
        description:
          "Modern floral plate décor for contemporary wedding aesthetics.",
        highlights: [
          "Soft Blush Tones",
          "Minimal Floral Layout",
          "Contemporary Styling",
        ],
      },
    ],
    [
      {
        image:
          "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1600&q=90",
        title: "Temple Inspired Design",
        description:
          "Classic temple jewelry concept infused into traditional plate décor.",
        highlights: [
          "Antique Gold Finish",
          "Temple Jewellery Concept",
          "Sacred Traditional Look",
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=90",
        title: "Sacred Gold Arrangement",
        description: "Traditional gold and maroon ceremonial styling.",
        highlights: [
          "Maroon & Gold Blend",
          "Ceremonial Grandeur",
          "Traditional Symmetry",
        ],
      },
    ],
    [
      {
        image:
          "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=1600&q=90",
        title: "Grand Heritage Set",
        description:
          "A regal plate arrangement designed for traditional wedding grandeur.",
        highlights: [
          "Royal Heritage Theme",
          "Rich Gold Elements",
          "Grand Layout Structure",
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?w=1600&q=90",
        title: "Royal Celebration Layout",
        description:
          "Elegant luxury styling crafted for grand receptions.",
        highlights: [
          "Luxury Reception Style",
          "Refined Gold Accents",
          "Premium Visual Finish",
        ],
      },
    ],
  ];

  const [indexes, setIndexes] = useState([0, 0, 0, 0]);
  const [paused, setPaused] = useState([false, false, false, false]);
  const [active, setActive] = useState(null);

  // Auto rotate (pauses when hovered)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((value, i) =>
          paused[i] ? value : (value + 1) % designs[i].length
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="font-sans">

      {/* INTRO */}
      <section className="bg-[#050505] text-[#F2F2F2] py-28 text-center px-6">
        <p className="text-sm tracking-[0.3em] text-[#D4AF37] mb-4">
          PLATE DECORATION SERVICE
        </p>
        <h1 className="text-4xl md:text-6xl font-serif leading-tight">
          Luxury Seer Varisai <br />
          <span className="bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
            Plate Styling
          </span>
        </h1>
      </section>

      {/* IMAGE GRID */}
      <section className="bg-[#F8F6F2] px-6 md:px-20 py-20 relative">

        {/* GALLERY HEADING (unchanged) */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#9F7928] mb-4">
            OUR SIGNATURE COLLECTION
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-[#111111] leading-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
              Plate Designs
            </span>
          </h2>

          <div className="w-24 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {designs.map((group, i) => {
            const current = group[indexes[i]];

            return (
              <div
                key={i}
                onMouseEnter={() =>
                  setPaused((prev) =>
                    prev.map((val, idx) => (idx === i ? true : val))
                  )
                }
                onMouseLeave={() =>
                  setPaused((prev) =>
                    prev.map((val, idx) => (idx === i ? false : val))
                  )
                }
                onClick={() => setActive(current)}
                className="relative group cursor-pointer
                rounded-2xl overflow-hidden
                bg-[#0B0B0B]
                border border-[#1A1A1A]
                hover:border-[#D4AF37]
                transition-all duration-500
                hover:shadow-[0_0_80px_rgba(212,175,55,0.25)]
                hover:-translate-y-2"
              >

                {/* Vertical Fall Animation */}
                <div className="relative h-72 overflow-hidden">

                  {group.map((item, idx) => (
                    <img
                      key={idx}
                      src={item.image}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover
                      ${idx === indexes[i] ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
                      ${paused[i]
                        ? "transition-none"
                        : "transition-all duration-1000 ease-in-out"}`}
                    />
                  ))}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-serif text-lg text-[#D4AF37]">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 min-h-[120px]">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {current.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* ENQUIRE SECTION */}
      <section className="bg-[#050505] text-[#F2F2F2] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Let’s Curate Your{" "}
            <span className="bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
              Wedding Plates
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Bespoke seer varisai arrangements crafted with elegance and tradition.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { icon: "✨", title: "Custom Theme Styling", text: "Designed exclusively around your ceremony concept." },
              { icon: "💎", title: "Premium Materials", text: "High-quality curated decorative elements." },
              { icon: "⏳", title: "Timely Execution", text: "Flawless setup delivered exactly as promised." }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#0B0B0B] border border-[#1A1A1A]
                rounded-2xl p-10 text-center
                transition-all duration-500
                hover:border-[#D4AF37]
                hover:-translate-y-2
                hover:shadow-[0_0_80px_rgba(212,175,55,0.35)]"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full
                bg-[#D4AF37]/10 flex items-center justify-center
                text-[#D4AF37] text-2xl">
                  {item.icon}
                </div>

                <h3 className="font-serif text-lg text-[#D4AF37] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-14 py-5
            bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728]
            text-black font-semibold rounded-full
            hover:scale-105 transition duration-300 shadow-md"
          >
            Enquire Now
          </a>
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md
          flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111] rounded-2xl
            max-w-6xl w-full mx-6
            grid md:grid-cols-2 overflow-hidden shadow-2xl"
          >
            <img
              src={active.image}
              alt={active.title}
              className="h-[500px] w-full object-cover"
            />

            <div className="relative p-14 flex flex-col justify-center
            bg-gradient-to-b from-[#111] to-[#0A0A0A]
            border-l border-[#1A1A1A]">

              <div className="absolute left-0 top-0 h-full w-[3px]
              bg-gradient-to-b from-[#9F7928] via-[#D4AF37] to-[#B38728]"></div>

              <h3 className="text-3xl font-serif mb-6 text-[#D4AF37]">
                {active.title}
              </h3>

              <p className="text-gray-300 mb-8 leading-relaxed">
                {active.description}
              </p>

              <ul className="mb-10 space-y-4">
                {active.highlights.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 text-sm">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className="px-10 py-4
                bg-gradient-to-r from-[#9F7928] via-[#D4AF37] to-[#B38728]
                text-black font-semibold rounded-full
                hover:scale-105 transition duration-300
                shadow-[0_10px_40px_rgba(212,175,55,0.4)]"
              >
                Book Now
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}