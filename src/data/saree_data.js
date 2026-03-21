// src/data/saree_data.js

/* ---------------- IMPORT LOCAL IMAGES ---------------- */
// Added 's' to 'sarees' to match your folder name exactly
const images = import.meta.glob("../assets/sarees/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
});

const getImage = (name) => {
  // Key must match the folder name exactly: ../assets/sarees/
  const path = `../assets/sarees/${name}`;
  const img = images[path];
  
  if (!img) {
    console.error(`Image not found: ${name}. Check if the filename in assets matches exactly.`);
    return "";
  }
  return img;
};

/* ---------------- HERO ---------------- */
export const sareeHeroData = {
  backgroundImage: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=1600&q=80",
  subtitle: "Artisanal Draping Atelier",
  title: "Saree",
  titleItalic: "Draping"
};

/* ---------------- CONFIG ---------------- */
export const sareeConfig = {
  phoneNumber: "919080533611",
  whatsappMessages: {
    book: (item) => `Hi YAAL, I'd like to book a Draping Service for: ${item.name}`,
    enquiry: (item) => `Hi YAAL, I have an enquiry regarding: ${item.name}`
  }
};

/* ---------------- PRODUCTS ---------------- */
export const sareeItems = [
  {
    id: "B-1",
    name: "Bridal Muhurtham Draping",
    category: "Bridal",
    image: getImage("wed1.webp"), 
    description: "Traditional muhurtham draping with perfect pleats and royal finish."
  },
  {
    id: "R-1",
    name: "Reception Elegant Draping",
    category: "Reception",
    image: getImage("recsp.jpeg"),
    description: "Modern sleek draping style for reception and evening events."
  },
  {
    id: "T-1",
    name: "Classic Traditional Draping",
    category: "Traditional",
    image: getImage("trad1.webp"),
    description: "Authentic South Indian draping rooted in heritage styling."
  },
  {
    id: "F-1",
    name: "Festive Light Draping",
    category: "Festive",
    image: getImage("wed.jpeg"),
    description: "Lightweight and elegant draping perfect for festive occasions."
  }
];