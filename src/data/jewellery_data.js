// src/data/jewellery_data.js

export const rentalHeroData = {
  backgroundImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000",
  subtitle: "The Royal Catalogue",
  title: "Bridal",
  titleItalic: "Jewellery"
};

export const rentalConfig = {
  phoneNumber: "919876543210",
  defaultDescription: "A masterfully crafted royal piece designed to elevate your bridal presence.",
  whatsappMessages: {
    book: (item) => `Hi YAAL Jewellery, I want to BOOK this piece:\n\nCode: ${item.code}\nName: ${item.name}\nPrice: ₹${item.price}/Day`,
    enquiry: (item) => `Hi YAAL Jewellery, I have an enquiry regarding:\n\nCode: ${item.code}\nName: ${item.name}`
  }
};

export const uiLabels = {
  searchPlaceholder: "Enter item code...",
  sidebarTitleSearch: "Search Catalogue",
  sidebarTitleCollections: "Collections",
  moreInfoBtn: "More Info",
  bookNowBtn: "Book Now",
  sendEnquiryBtn: "Send Enquiry",
  productInfoLabel: "Product Info",
  rentalPeriodLabel: "/ daily rental"
};

export const jewelleryItems = [
  {
    id: 1,
    code: "YL-ANT-01",
    name: "Antique Lakshmi Guttapusalu",
    category: "Necklace",
    price: 4500,
    image: "https://images.unsplash.com/photo-1602751584412-7000d1826462?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1602751584412-7000d1826462?q=80&w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800",
    ],
    description: "A traditional South Indian masterpiece featuring intricate Lakshmi motifs and premium cluster pearls."
  },
  {
    id: 2,
    code: "YL-DIA-05",
    name: "Royal Diamond Choker",
    category: "Diamond",
    price: 8500,
    image: "https://images.unsplash.com/photo-1599643477877-537ef527848f?q=80&w=800",
    images: ["https://images.unsplash.com/photo-1599643477877-537ef527848f?q=80&w=800"],
    description: "VVS quality lab-grown diamonds set in 18k white gold finish, perfect for reception looks."
  },
  {
    id: 3,
    code: "YL-TEM-09",
    name: "Nakkashi Work Vaddanam",
    category: "Temple",
    price: 3500,
    image: "https://images.unsplash.com/photo-1610189012906-47833cc1574e?q=80&w=800",
    images: ["https://images.unsplash.com/photo-1610189012906-47833cc1574e?q=80&w=800"],
    description: "Heavy hand-carved temple jewellery waist belt featuring divine iconography."
  }
];