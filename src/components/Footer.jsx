import React from "react";
import { Link } from "react-router-dom"; // Assumes you are using react-router
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Clock,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const goldText = "text-[#C5A02E]";
  const goldBorder = "border-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";

  return (
    <div className="bg-[#050505] selection:bg-[#C5A02E]/30">
      {/* ================= GOOGLE MAP (INTEGRATED) ================= */}
 <section className="relative w-full h-[400px] overflow-hidden group border-t border-white/5">
        {/* Dark overlay that turns into a soft white wash on hover */}
        <div className="absolute inset-0 bg-Gray/40 group-hover:bg-white/10 transition-colors duration-700 z-10 pointer-events-none" />
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.4051699809881!2d77.7287417!3d11.4450425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9434956a8b995%3A0x7fc36f6510f7f81!2sVELU%20ELECTRICALS!5e0!3m2!1sen!2sin!4v1771427487841!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          /* Initial: Dark/Inverted | Hover: Bright/Clean/White */
          className="transition-all duration-[1.2s] ease-in-out opacity-60 group-hover:opacity-100 
                     grayscale invert-[0.9] contrast-[1.2] 
                     group-hover:grayscale-[0.3] group-hover:invert-0 group-hover:brightness-[1.1] group-hover:contrast-[1]"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
        {/* Floating "Get Directions" Label */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:block">
           <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black">Find our Boutique</span>
              <div className={`w-8 h-8 ${goldBg} rounded-full flex items-center justify-center text-white transition-colors group-hover:bg-black`}>
                <ArrowUpRight size={14} />
              </div>
           </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <footer className="relative pt-24 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">

            {/* -------- BRAND IDENTITY -------- */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-4xl font-serif tracking-tighter mb-1 uppercase italic">
                  Yaal
                </h2>
                <span className={`${goldText} text-[10px] font-black uppercase tracking-[0.4em]`}>
                  Bridal Studio
                </span>
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
                Hand-curating a timeless collection of antique and diamond jewellery for the royalty in you. Since 2024.
              </p>
              <div className="flex gap-6 pt-2 text-gray-400">
                <a href="#" className="hover:text-[#C5A02E] transition-all transform hover:-translate-y-1"><Instagram size={20} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-[#C5A02E] transition-all transform hover:-translate-y-1"><Facebook size={20} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-[#C5A02E] transition-all transform hover:-translate-y-1"><Youtube size={20} strokeWidth={1.5} /></a>
              </div>
            </div>

            {/* -------- QUICK LINKS -------- */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-white opacity-80 border-b border-white/10 pb-4 inline-block">
                Discovery
              </h4>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Jewels', 'Gallery', 'Enquiry', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-[#C5A02E] text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center group">
                      <span className={`w-0 group-hover:w-4 h-[1px] ${goldBg} transition-all mr-0 group-hover:mr-3`}></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* -------- BOUTIQUE DETAILS -------- */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-white opacity-80 border-b border-white/10 pb-4 inline-block">
                The Boutique
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className={`mt-1 p-2 border border-white/10 rounded-full group-hover:border-[#C5A02E] transition-colors`}>
                      <MapPin size={16} className={goldText} />
                    </div>
                    <p className="text-gray-400 text-sm font-light leading-relaxed tracking-wide">
                      KPM, Vattamalai, Ethirmedu,<br /> 
                      Near JKKN College, Erode,<br /> 
                      Tamil Nadu - 638183
                    </p>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className={`p-2 border border-white/10 rounded-full group-hover:border-[#C5A02E] transition-colors`}>
                      <Phone size={16} className={goldText} />
                    </div>
                    <p className="text-gray-400 text-sm font-light tracking-widest">+91 90805 33611</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className={`p-2 border border-white/10 rounded-full group-hover:border-[#C5A02E] transition-colors`}>
                      <Mail size={16} className={goldText} />
                    </div>
                    <p className="text-gray-400 text-sm font-light tracking-widest">hello@yaalbridal.com</p>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className={`mt-1 p-2 border border-white/10 rounded-full group-hover:border-[#C5A02E] transition-colors`}>
                      <Clock size={16} className={goldText} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light tracking-widest">10:00 AM – 07:00 PM</p>
                      <span className={`${goldText} text-[10px] font-black uppercase tracking-widest`}>Closed on Sundays</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* -------- BOTTOM DECOR + COPYRIGHT -------- */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-medium">
              &copy; {new Date().getFullYear()} Yaal Jewellery Rentals. Crafted for Royalty.
            </p>
            
            <div className="flex gap-8">
              <a href="#" className="text-gray-600 hover:text-white text-[9px] uppercase tracking-widest transition-colors font-bold">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-white text-[9px] uppercase tracking-widest transition-colors font-bold">Terms of Service</a>
            </div>
          </div>

        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-[#C5A02E] to-transparent shadow-[0_0_15px_rgba(197,160,46,0.5)]" />
      </footer>
    </div>
  );
};

export default Footer;