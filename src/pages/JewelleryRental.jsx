import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ShoppingBag, MessageCircle, Info } from "lucide-react";
import { jewelleryItems } from "../data/mockData";

const JewelleryRental = () => {
  const phoneNumber = "919876543210";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* -------------------- Mobile Back Button Logic -------------------- */
  useEffect(() => {
    if (selectedItem) {
      window.history.pushState({ modalOpen: true }, "");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handlePopState = () => {
      if (selectedItem) setSelectedItem(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  /* -------------------- Safe Price Parser -------------------- */
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^0-9]/g, ""));
  };

  /* -------------------- Categories -------------------- */
  const categories = useMemo(() => {
    const cats = jewelleryItems.map((item) => item.category).filter(Boolean);
    return ["All", ...new Set(cats)];
  }, []);

  /* -------------------- Filtering -------------------- */
  const filteredItems = useMemo(() => {
    return jewelleryItems.filter((item) => {
      const numericPrice = parsePrice(item.price);
      const matchesSearch = item.code?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || item.category === category;
      const matchesPrice = maxPrice === "" || numericPrice <= Number(maxPrice);
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, maxPrice]);

  /* -------------------- Image Slider Logic -------------------- */
  const getImages = (item) => {
    if (!item) return [];
    if (item.images && Array.isArray(item.images)) return item.images;
    return [item.image];
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const images = getImages(selectedItem);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const images = getImages(selectedItem);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  /* -------------------- WhatsApp Actions -------------------- */
  const handleAction = (item, type) => {
    let message = "";
    if (type === "book") {
      message = `Hi, I want to BOOK this jewellery.\n\nJewel Code: ${item.code}\nJewel Name: ${item.name}\nPrice: ₹${item.price}/Day\n\nEvent Date:\nName:\nAddress:`;
    } else {
      message = `Hi, I have an ENQUIRY regarding this jewellery.\n\nJewel Code: ${item.code}\nJewel Name: ${item.name}\n\nMy Question: `;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* ================= SMALL HERO ================= */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">

          <h1 className="text-4xl md:text-5xl font-serif text-white mb-3">
            Jewellery Rental
          </h1>

          <p className="text-gray-200 max-w-xl mx-auto">
            Choose from our premium bridal jewellery collection for your special day.
          </p>

        </div>

      </section>

      {/* ================= PAGE CONTENT ================= */}
      <div className="py-16 w-full px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* ================= MOBILE FILTER TOGGLE ================= */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-white border border-gray-200 text-gray-800 py-3 rounded-xl font-semibold shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* ================= FILTER SIDEBAR ================= */}
          <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg h-fit lg:sticky lg:top-28 space-y-6 border border-gray-100">

              <div className="flex justify-between items-center">
                <h2 className="font-serif text-2xl font-semibold text-gray-900">
                  Filters
                </h2>

                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Search by Code
                </label>

                <input
                  type="text"
                  placeholder="Search by Code"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Price Range
                </label>

                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                >
                  <option value="">All Prices</option>
                  <option value="3000">Below ₹3,000</option>
                  <option value="5000">Below ₹5,000</option>
                  <option value="10000">Below ₹10,000</option>
                </select>
              </div>
            </div>
          </aside>

          {/* ================= PRODUCT GRID ================= */}
          <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">

              {filteredItems.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 text-xl py-20">
                  No jewellery found 😢
                </div>
              ) : (
                filteredItems.map((item) => (

                  <div
                    key={item.id}
                    className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group flex flex-col"
                  >

                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />

                      <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-full text-xs font-semibold shadow">
                        {item.code}
                      </div>

                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex flex-col flex-1 text-center">

                      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>

                      <p className="text-gold font-bold text-lg mb-4">
                        ₹{parsePrice(item.price).toLocaleString()} / Day
                      </p>

                      <button
                        onClick={() => handleBook(item)}
                        className="mt-auto w-full bg-gold text-white py-3 rounded-xl text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition"
                      >
                        Book Now
                      </button>

                    </div>

                  </div>

                ))
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default JewelleryRental;