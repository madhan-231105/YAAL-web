import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const goldText = "text-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";
  const goldBorder = "border-[#C5A02E]";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jewellery Rental", path: "/jewellery" },
    { name: "Saree Draping", path: "/saree-draping" },
    { name: "Plate Decoration", path: "/plate-decoration" },
    { name: "About Us", path: "/about" },
  ];

  // Specific styling for About/Contact or when Scrolled
  const isDarkPage = location.pathname === "/about" || location.pathname === "/contact";
  const shouldShowGlass = scrolled || isDarkPage;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        shouldShowGlass
          ? "bg-white/80 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* ================= FANCY LOGO ================= */}
          <Link to="/" className="group relative flex flex-col items-center overflow-hidden">
            <motion.div className="flex flex-col items-center">
              <span 
                className={`font-serif text-3xl md:text-4xl tracking-tighter transition-all duration-700 ease-in-out group-hover:tracking-[0.15em] ${
                  shouldShowGlass ? "text-black" : "text-white"
                }`}
              >
                YAAL
              </span>
              <div className="flex items-center gap-2 overflow-hidden">
                <span className={`h-[1px] w-0 group-hover:w-4 transition-all duration-700 ${goldBg}`}></span>
                <span 
                  className={`text-[8px] uppercase tracking-[0.4em] font-bold transition-colors duration-500 ${
                    shouldShowGlass ? "text-gray-400 group-hover:text-[#C5A02E]" : "text-gray-300 group-hover:text-[#C5A02E]"
                  }`}
                >
                  Bridal Studio
                </span>
                <span className={`h-[1px] w-0 group-hover:w-4 transition-all duration-700 ${goldBg}`}></span>
              </div>
            </motion.div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-500 relative group py-2 ${
                      shouldShowGlass
                        ? isActive ? "#C5A02E" : "text-gray-500 hover:text-black"
                        : isActive ? "#C5A02E" : "text-white/80 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={isActive ? goldText : ""}>{link.name}</span>
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#C5A02E] transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <Link
              to="/contact"
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2 group border ${
                shouldShowGlass
                  ? "bg-black text-white border-black hover:bg-transparent hover:text-black"
                  : "bg-white text-black border-white hover:bg-transparent hover:text-white"
              }`}
            >
              Contact Us
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${shouldShowGlass ? "text-black" : "text-white"}`}
            >
              {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 left-0 w-full bg-white z-[90] flex flex-col justify-center px-12"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl font-serif italic transition-all ${
                        isActive ? goldText : "text-gray-900 hover:pl-4"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-10 border-t border-gray-100"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] ${goldText}`}
                >
                  Start Booking <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;