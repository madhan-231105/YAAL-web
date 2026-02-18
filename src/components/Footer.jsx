import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* ================= GOOGLE MAP (FULL WIDTH) ================= */}
      <div className="w-full h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.4051699809881!2d77.7287417!3d11.4450425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9434956a8b995%3A0x7fc36f6510f7f81!2sVELU%20ELECTRICALS!5e0!3m2!1sen!2sin!4v1771427487841!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* -------- INFO COLUMN -------- */}
            <div>
              <h3 className="text-xl font-semibold mb-6">INFO</h3>

              <div className="space-y-4 text-gray-400 text-sm">

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#D4AF37] mt-1" />
                  <p>
                    KPM,Vattamalai,Ethirmedu ,Near JKKN College
                    <br />
                    Erode, Tamil Nadu 
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#D4AF37]" />
                  <p>+91 90805 33611</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#D4AF37]" />
                  <p>YAAL@gmail.com</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#D4AF37] mt-1" />
                  <p>
                    10 AM – 7 PM
                    <br />
                    <span className="text-[#D4AF37]">
                      Sunday Holiday
                    </span>
                  </p>
                </div>

              </div>
            </div>

            {/* -------- MENUS COLUMN -------- */}
            <div>
              <h3 className="text-xl font-semibold mb-6">MENUS</h3>

              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">HOME</li>
                <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">ABOUT US</li>
                <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">JEWELS</li>
                <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">JEWELLERY CATEGORIES</li>
                <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">GALLERY</li>
                <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">ENQUIRY</li>
                <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">CONTACT US</li>
              </ul>
            </div>

            {/* -------- BRAND + SOCIAL -------- */}
            <div className="text-center md:text-left">
              
              <div className="mb-6">
                <h2 className="text-3xl font-serif text-[#D4AF37] tracking-wide">
                  YAAL
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Bridal Studio
                </p>
              </div>

              <h4 className="font-semibold mb-4">FOLLOW US ON</h4>

              <div className="flex gap-5 justify-center md:justify-start">

                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  <Facebook size={22} />
                </a>

                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  <Instagram size={22} />
                </a>

                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  <Youtube size={22} />
                </a>

              </div>

            </div>

          </div>

          {/* -------- Bottom Copyright -------- */}
          <div className="border-t border-gray-900 mt-12 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} YAAL Jewellery Rentals. All rights reserved.
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;

