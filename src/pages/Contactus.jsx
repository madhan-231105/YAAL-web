import React, { useState } from "react";
import { Instagram, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const goldText = "text-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";
  const goldBorder = "border-[#C5A02E]/30";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent to YAAL Jewellery.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#FCFBFA] min-h-screen pb-24 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-16 px-6 text-center">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 -z-10" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className={`inline-block uppercase tracking-[0.3em] text-xs font-bold mb-4 ${goldText}`}>
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
            Let’s Create Your <br /> <span className="italic">Bridal Legacy</span>
          </h1>
          <div className={`w-16 h-[1px] ${goldBg} mx-auto mb-8`} />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* ================= LEFT: CONTACT INFO ================= */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-2xl font-serif mb-6 italic">Connect With Us</h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8">
                Whether you're looking for the perfect temple jewellery set or 
                professional saree draping, our stylists are here to assist you.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Phone size={20} />, label: "Call / WhatsApp", value: "+91 98765 43210" },
                  { icon: <Mail size={20} />, label: "Email", value: "hello@yaaljewellery.com" },
                  { icon: <MapPin size={20} />, label: "Boutique", value: "123 Elegance Street, Chennai, TN" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className={`${goldText} mt-1 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{item.label}</p>
                      <p className="text-gray-800 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif mb-6 italic text-gray-900">Follow the Journey</h2>
              <div className="flex gap-4">
                <a
                  href="#"
                  className={`w-12 h-12 flex items-center justify-center rounded-full border ${goldBorder} ${goldText} hover:bg-[#C5A02E] hover:text-white transition-all duration-500 shadow-sm`}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className={`w-12 h-12 flex items-center justify-center rounded-full border ${goldBorder} ${goldText} hover:bg-[#C5A02E] hover:text-white transition-all duration-500 shadow-sm`}
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT: CONTACT FORM ================= */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-2xl font-serif mb-8 text-center">Inquiry Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#C5A02E] transition-colors placeholder:text-gray-300 font-light"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#C5A02E] transition-colors placeholder:text-gray-300 font-light"
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event (Date, Location, Requirements...)"
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#C5A02E] transition-colors placeholder:text-gray-300 font-light resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full ${goldBg} text-white py-4 rounded-full font-medium tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-2 hover:brightness-110 transition shadow-lg shadow-[#C5A02E]/20`}
                  >
                    Send Inquiry <Send size={14} />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;