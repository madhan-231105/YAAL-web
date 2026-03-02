import React, { useState, useMemo } from "react";
import { jewelleryItems } from "../data/mockData";

const JewelleryRental = () => {
  const phoneNumber = "919876543210";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  
  // New state for mobile filter toggle
  const [showFilters, setShowFilters] = useState(false);

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
      
      {/* RESPONSIVE CONTAINER: Adjusted px for mobile vs desktop */}
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

        {/* ================= MOBILE FILTER TOGGLE ================= */}
        <div className="lg:hidden mb-6">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-white border border-gray-200 text-gray-800 py-3 rounded-xl font-semibold shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">

          {/* ================= FILTER SIDEBAR ================= */}
          {/* Conditional rendering for mobile, always show on lg screens */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg h-fit lg:sticky lg:top-28 space-y-6 border border-gray-100">
              
              <div className="flex justify-between items-center">
                <h2 className="font-serif text-2xl font-semibold text-gray-900">
                  Filters
                </h2>
                {/* Close button only visible on mobile */}
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
                  placeholder="TBS101"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition"
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
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition"
                >
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
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
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition"
                >
                  <option value="">All Prices</option>
                  <option value="3000">Below ₹3,000</option>
                  <option value="4000">Below ₹4,000</option>
                  <option value="5000">Below ₹5,000</option>
                  <option value="10000">Below ₹10,000</option>
                </select>
              </div>

              {/* Mobile Only: Apply Button to close drawer */}
              <button 
                onClick={() => setShowFilters(false)}
                className="lg:hidden w-full bg-gray-900 text-white py-3 rounded-xl font-medium mt-4"
              >
                View Results
              </button>

            </div>
          </div>

          {/* ================= RIGHT GRID ================= */}
          <div>
            {/* RESPONSIVE GRID: 1 col mobile, 2 cols sm/md, 3 cols lg, 4 cols xl */}
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

                      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 md:mb-3 min-h-[auto] md:min-h-[56px] line-clamp-2">
                        {item.name}
                      </h3>

                      <p className="text-gold font-bold text-lg mb-4 md:mb-6">
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
    </div>
  );
};

export default JewelleryRental;