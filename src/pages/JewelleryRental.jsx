import React, { useState, useMemo } from "react";
import { jewelleryItems } from "../data/mockData";

const JewelleryRental = () => {
  const phoneNumber = "919876543210";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // NEW STATES
  const [flippedCard, setFlippedCard] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  /* -------------------- Safe Price Parser -------------------- */
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^0-9]/g, ""));
  };

  /* -------------------- Unique Categories -------------------- */
  const categories = useMemo(() => {
    const cats = jewelleryItems.map((item) => item.category).filter(Boolean);
    return ["All", ...new Set(cats)];
  }, []);

  /* -------------------- Filtering Logic -------------------- */
  const filteredItems = useMemo(() => {
    return jewelleryItems.filter((item) => {
      const numericPrice = parsePrice(item.price);

      const matchesSearch = item.code
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      const matchesPrice =
        maxPrice === "" || numericPrice <= Number(maxPrice);

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, maxPrice]);

  /* -------------------- WhatsApp Booking -------------------- */
  const handleBook = (item) => {
    const message = `Hi, I want to book the jewellery.

Jewel Code : ${item.code}
Jewel Name : ${item.name}
Price : ${item.price} / Day

Event Date :
Name :
Address :`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 tracking-wide">
            Exquisite Collection
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Choose from our premium range of bridal jewellery
          </p>
        </div>

        {/* ================= MOBILE FILTER BUTTON ================= */}
        <div className="lg:hidden mb-6">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-white border border-gray-200 text-gray-800 py-3 rounded-xl font-semibold shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">

          {/* ================= FILTER SIDEBAR ================= */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg h-fit lg:sticky lg:top-28 space-y-6 border border-gray-100">

              <h2 className="font-serif text-2xl font-semibold text-gray-900">
                Filters
              </h2>

              <input
                type="text"
                placeholder="Search by Code"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>

              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="">All Prices</option>
                <option value="3000">Below ₹3,000</option>
                <option value="4000">Below ₹4,000</option>
                <option value="5000">Below ₹5,000</option>
                <option value="10000">Below ₹10,000</option>
              </select>

            </div>
          </div>

          {/* ================= JEWELLERY GRID ================= */}
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
                    className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col"
                  >

                    {/* ================= FLIP IMAGE ================= */}
                    <div className="relative aspect-[4/5] perspective-1000">

                      <div
                        onClick={() =>
                          setFlippedCard(flippedCard === item.id ? null : item.id)
                        }
                        className={`relative w-full h-full cursor-pointer transition-transform duration-[1200ms] ease-in-out transform-style-preserve-3d ${
                          flippedCard === item.id ? "rotate-y-180" : ""
                        }`}
                      >

                        {/* FRONT */}
                        <div className="absolute inset-0 backface-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-t-3xl"
                          />
                        </div>

                        {/* BACK */}
                        <div className="absolute inset-0 rotate-y-180 backface-hidden">
                          <img
                            src={item.previewImage}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-t-3xl"
                          />
                        </div>

                      </div>

                      {/* Code Badge */}
                      <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-full text-xs font-semibold shadow">
                        {item.code}
                      </div>

                      {/* Preview Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewImage(item.previewImage);
                        }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur hover:bg-black transition"
                      >
                        Preview
                      </button>

                    </div>

                    {/* ================= CONTENT ================= */}
                    <div className="p-5 md:p-6 flex flex-col flex-1 text-center">
                      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                        {item.name}
                      </h3>

                      <p className="text-gold font-bold text-lg mb-6">
                        ₹{parsePrice(item.price).toLocaleString()} / Day
                      </p>

                      <button
                        onClick={() => handleBook(item)}
                        className="mt-auto w-full bg-gold text-white py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 hover:bg-gold-dark"
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

      {/* ================= PREVIEW MODAL ================= */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-full text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default JewelleryRental;