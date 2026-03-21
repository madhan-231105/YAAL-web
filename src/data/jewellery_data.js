// src/data/jewellery_data.js

/* ---------------- IMPORT LOCAL IMAGES ---------------- */
const images = import.meta.glob("../assets/jewellery/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default"
});

const getImage = (name) => images[`../assets/jewellery/${name}`];


/* ---------------- HERO ---------------- */
export const rentalHeroData = {
  backgroundImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000",
  subtitle: "The Royal Catalogue",
  title: "Bridal",
  titleItalic: "Jewellery"
};


/* ---------------- CONFIG ---------------- */
export const rentalConfig = {
  phoneNumber: "919876543210",
  defaultDescription:
    "A masterfully crafted royal piece designed to elevate your bridal presence.",
  whatsappMessages: {
    book: (item) =>
      `Hi YAAL Jewellery, I want to BOOK this piece:\n\nCode: ${item.code}\nName: ${item.name}\nPrice: ₹${item.price}/Day`,
    enquiry: (item) =>
      `Hi YAAL Jewellery, I have an enquiry regarding:\n\nCode: ${item.code}\nName: ${item.name}`
  }
};


/* ---------------- UI LABELS ---------------- */
export const uiLabels = {
  searchPlaceholder: "Enter item code...",
  sidebarTitleSearch: "Search Catalogue",
  sidebarTitleCollections: "Collections", // fixed typo here
  moreInfoBtn: "More Info",
  bookNowBtn: "Book Now",
  sendEnquiryBtn: "Send Enquiry",
  productInfoLabel: "Product Info",
  rentalPeriodLabel: "/ daily rental"
};


/* ---------------- PRODUCTS ---------------- */
export const jewelleryItems = [
  {
    id: 1,
    code: "YL-NKL-01",
    name: "Bridal Set",
    category: "Bridal Set",
    price: 4500,
    image: getImage("set1.jpg"),
    images: [
      getImage("set1.jpg"),
      getImage("set2.jpg"),
      getImage("set3.jpg")
    ],
    description:
      "Traditional Lakshmi engraved necklace with pearl drops, perfect for bridal muhurtham."
  },

  {
    id: 2,
    code: "YL-ER-02",
    name: "Temple Jhumka Earrings",
    category: "Earrings",
    price: 1500,
    image: getImage("earing2.jpg"),
    images: [
      getImage("earing2.jpg"),
      getImage("earing3.jpg"),
      getImage("earing1.jpg")
    ],
    description:
      "Classic antique gold jhumka with kemp stones, ideal for traditional occasions."
  },

  {
    id: 3,
    code: "YL-NC-03",
    name: "Bridal Nethi Chutti",
    category: "Nethi Chutti",
    price: 1200,
    image: getImage("chutti1.jpg"),
    images: [
      getImage("chutti1.jpg"),
      getImage("chutti2.jpg"),
      getImage("chutty3.jpg")
    ],
    description:
      "Elegant forehead jewellery crafted to enhance the traditional bridal look."
  },

  {
    id: 4,
    code: "YL-BNG-04",
    name: "Gold Bridal Bangles Set",
    category: "Bangles",
    price: 2000,
    image: getImage("bangel1.jpg"),
    images: [
      getImage("bangel1.jpg"),
      getImage("bangel2.jpg"),
      getImage("bangel3.jpg")
    ],
    description:
      "Premium gold-finish bangles set with intricate traditional detailing."
  }

];