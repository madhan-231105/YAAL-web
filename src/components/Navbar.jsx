import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jewellery Rental", path: "/jewellery" },
    { name: "Saree Draping", path: "/saree-draping" },
    { name: "Plate Decoration", path: "/plate-decoration" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg border-b border-gold/20"
          : "bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl font-bold text-gray-900 tracking-wide"
          >
            YAAL<span className="text-gold">Jewellery</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative group font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-gold"
                      : "text-gray-700 hover:text-gold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-gold transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 rounded-full bg-gold text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-gray-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-gold/10 text-gold"
                    : "text-gray-800 hover:bg-gray-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 px-5 py-3 rounded-full bg-gold text-white font-semibold shadow-md"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
