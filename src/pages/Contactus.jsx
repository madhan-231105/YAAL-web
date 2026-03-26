import React, { useState } from "react";
import { Instagram, Youtube, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const goldText = "text-[#C5A02E]";
  const goldBg = "bg-[#C5A02E]";
  const goldBorder = "border-[#C5A02E]/30";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 5000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#FCFBFA] min-h-screen pb-20 overflow-x-hidden selection:bg-[#C5A02E]/20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 text-center">
        {/* Subtle Decorative Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C5A02E_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.15] -z-10" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className={`inline-block uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 ${goldText}`}>
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-light leading-tight mb-6 text-gray-900">
            Let’s Create Your <br /> <span className="italic">Bridal Legacy</span>
          </h1>
          <div className={`w-20 h-[1px] ${goldBg} mx-auto`} />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT: CONTACT INFO ================= */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6 italic text-gray-900">Connect With Us</h2>
              <p className="text-gray-500 font-light leading-relaxed mb-10 text-sm md:text-base">
                Whether you're looking for the perfect temple jewellery set or 
                professional saree draping, our stylists are here to assist you in making your day unforgettable.
              </p>
              
              <div className="space-y-8">
                {[
                  { 
                    icon: <Phone size={18} />, 
                    label: "Call / WhatsApp", 
                    value: "+91 90805 33611",
                    link: "tel:+919080533611" 
                  },
                  { 
                    icon: <Mail size={18} />, 
                    label: "Email", 
                    value: "hello@yaaljewellery.com",
                    link: "mailto:hello@yaaljewellery.com" 
                  },
                  { 
                    icon: <MapPin size={18} />, 
                    label: "The Boutique", 
                    value: "KPM, Vattamalai, Ethirmedu, Near JKKN College, Erode, Tamil Nadu - 638183",
                    link: "#" 
                  }
                ].map((item, idx) => (
                  <a href={item.link} key={idx} className="flex items-start gap-5 group cursor-default lg:cursor-pointer">
                    <div className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center ${goldText} group-hover:bg-[#C5A02E] group-hover:text-white transition-all duration-500 shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">{item.label}</p>
                      <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed group-hover:text-[#C5A02E] transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h2 className="text-lg font-serif mb-6 italic text-gray-900">Follow the Journey</h2>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, link: "https://www.instagram.com/yaal_bridal_jewels/" },
                  { icon: <Youtube size={20} />, link: "https://www.youtube.com/@VeluElectricals-zi5zf" },
                  { icon: <MessageCircle size={20} />, link: "https://wa.me/919080533611" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-full border ${goldBorder} ${goldText} hover:bg-[#C5A02E] hover:text-white transition-all duration-500 shadow-sm`}
                  >
                    {social.icon}
                  </a>
                ))}
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
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-gray-50 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-2xl font-serif mb-2 text-gray-900">Inquiry Form</h2>
                    <p className="text-gray-400 text-xs mb-10 tracking-wide uppercase">We typically respond within 24 hours</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="relative group">
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#C5A02E] transition-colors placeholder:text-gray-300 font-light text-gray-800"
                            placeholder="Your Full Name"
                          />
                        </div>
                        <div className="relative group">
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#C5A02E] transition-colors placeholder:text-gray-300 font-light text-gray-800"
                            placeholder="Phone Number"
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
                          className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#C5A02E] transition-colors placeholder:text-gray-300 font-light text-gray-800 resize-none"
                          placeholder="Tell us about your event (Date, Requirements...)"
                        ></textarea>
                      </div>

                      <div className="pt-4 flex flex-col md:flex-row gap-4">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          className={`flex-1 ${goldBg} text-white py-5 rounded-2xl font-bold tracking-[0.2em] uppercase text-[10px] flex items-center justify-center gap-3 hover:brightness-110 transition shadow-xl shadow-[#C5A02E]/20`}
                        >
                          Send Inquiry <Send size={14} />
                        </motion.button>
                        
                        <button
                          type="button"
                          onClick={() => window.open('https://wa.me/919080533611', '_blank')}
                          className="flex-1 bg-black text-white py-5 rounded-2xl font-bold tracking-[0.2em] uppercase text-[10px] flex items-center justify-center gap-3 hover:bg-gray-800 transition shadow-xl"
                        >
                          WhatsApp Us <MessageCircle size={14} />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className={`w-20 h-20 ${goldBg} text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#C5A02E]/30`}>
                      <Send size={32} />
                    </div>
                    <h2 className="text-3xl font-serif mb-4 text-gray-900">Thank You, {formData.name.split(' ')[0]}!</h2>
                    <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                      Your inquiry has been received. Our bridal stylists will contact you shortly to discuss your requirements.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;