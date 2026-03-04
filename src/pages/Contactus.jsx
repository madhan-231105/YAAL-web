import React, { useState } from "react";
import { Instagram, Youtube, Sparkles } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="relative min-h-screen pt-10 pb-16 bg-gradient-to-br from-[#faf7f2] via-white to-[#f8f3ec] overflow-hidden">

      {/* ================= GOLD PARTICLE BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle"></div>
        <div className="particle delay1"></div>
        <div className="particle delay2"></div>
        <div className="particle delay3"></div>
        <div className="particle delay4"></div>
      </div>

      {/* Soft Glow Background */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2 tracking-wide">
            Contact Us
          </h1>
          <p className="text-gray-500">
            We would love to be part of your special moments ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Social Section */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-100">

            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">
              Follow Us
            </h2>

            <a
              href="https://www.instagram.com/yaal_bridal_jewels"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-pink-50 transition"
            >
              <Instagram className="text-pink-500" size={24} />
              <span className="text-gray-700 font-medium">
                @yaal_bridal_jewels
              </span>
            </a>

            <a
              href="https://youtube.com/@yaaljewellery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 transition"
            >
              <Youtube className="text-red-500" size={24} />
              <span className="text-gray-700 font-medium">
                Yaal Jewellery Official
              </span>
            </a>

          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-100">

            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold uppercase tracking-wider text-white bg-gold hover:bg-gold-dark transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* ================= CUSTOM STYLES ================= */}
      <style>
        {`
          .particle {
            position: absolute;
            width: 10px;
            height: 10px;
            background: rgba(212, 175, 55, 0.6);
            border-radius: 50%;
            animation: floatUp 6s linear infinite;
            bottom: -10px;
            left: 20%;
          }

          .delay1 { left: 40%; animation: floatUp 3s linear infinite; }
          .delay2 { left: 60%; animation: floatUp 5s linear infinite; }
          .delay3 { left: 75%; animation: floatUp 7s linear infinite; }
          .delay4 { left: 90%; animation: floatUp 2s linear infinite; }

          @keyframes floatUp {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% {
              transform: translateY(-110vh);
              opacity: 0;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
        `}
      </style>

    </div>
  );
};

export default ContactUs;