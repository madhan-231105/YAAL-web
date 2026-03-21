// src/data/plate_data.js

/* ---------------- IMPORT LOCAL IMAGES ---------------- */
const images = import.meta.glob("../assets/plate/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
});

const getImage = (name) => {
  const path = `../assets/plate/${name}`;
  return images[path] || "";
};

/* ---------------- HERO IMAGE ONLY ---------------- */
export const plateHeroImage = "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=1600&q=80";

/* ---------------- DESIGNS DATA ---------------- */
export const plateDesigns = [
  [
    {
      image: getImage("plate1.jpg"),
      title: "Royal Red Seer Set",
      description: "Traditional red and gold arrangement curated for grand South Indian weddings.",
      highlights: ["Deep Crimson Palette", "Gold Emboss Detailing", "Grand Ceremony Styling"],
    }
  ],
  [
    {
      image: getImage("plate2.jpg"),
      title: "Floral Luxury Theme",
      description: "Soft pastel floral styling with elegant gold finishing details.",
      highlights: ["Pastel Floral Palette", "Elegant Gold Accents", "Modern Arrangement Style"],
    }
  ],
  [
    {
      image: getImage("plate3.jpg"),
      title: "Temple Inspired Design",
      description: "Classic temple jewelry concept infused into traditional plate décor.",
      highlights: ["Antique Gold Finish", "Temple Jewellery Concept", "Sacred Traditional Look"],
    }
  ],
  [
    {
      image: getImage("plate4.jpg"),
      title: "Grand Heritage Set",
      description: "A regal plate arrangement designed for traditional wedding grandeur.",
      highlights: ["Royal Heritage Theme", "Rich Gold Elements", "Grand Layout Structure"],
    }
  ],
];

/* ---------------- PROCESS STEPS ---------------- */
export const plateProcessSteps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We discuss your wedding theme, outfit colors, and traditions to conceptualize the perfect layout.",
  },
  {
    num: "02",
    title: "Curation",
    desc: "Our artisans handpick premium materials, florals, and antique elements to match the design.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "On the big day, our team ensures a flawless, on-time setup that looks exactly as promised.",
  },
];