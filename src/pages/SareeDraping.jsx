<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";

const SareeDraping = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(null);
=======
import React, { useState, useEffect, useRef } from 'react';

const SareeDraping = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const containerRef = useRef(null);
>>>>>>> cb87686b518bcc6f682a1e4d56678cfcdbbb329b

  const images = [
    {
      src: "https://thumbs.dreamstime.com/b/indian-silk-saree-14348643.jpg?w=768",
      alt: "Indian silk saree",
<<<<<<< HEAD
=======
      style: "Traditional silk threads with intricate weaving patterns"
>>>>>>> cb87686b518bcc6f682a1e4d56678cfcdbbb329b
    },
    {
      src: "https://thumbs.dreamstime.com/b/indian-saree-design-19704685.jpg?w=768",
      alt: "Traditional wedding saree",
<<<<<<< HEAD
=======
      style: "Elegant bridal styling with perfect drapes"
>>>>>>> cb87686b518bcc6f682a1e4d56678cfcdbbb329b
    },
    {
      src: "https://thumbs.dreamstime.com/b/traditional-kubera-silk-cotton-saree-salem-tamil-nadu-elegant-handloom-design-close-up-image-beautifully-woven-made-414160694.jpg?w=1400",
      alt: "Elegant saree fashion portrait",
<<<<<<< HEAD
    },
    {
      src: "https://image2url.com/r2/default/images/1772067210920-7f84e61f-6468-422d-af90-44647b7ebbf8.png",
      alt: "South Indian bridal saree draping",
    },
    {
      src: "https://image2url.com/r2/default/images/1772067261509-47860568-6751-47ee-bf8e-1793ca42bfac.png",
      alt: "Traditional wedding saree draping",
    },
  ];

  /* ---------------- AUTO ROTATE ---------------- */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  /* ---------------- HANDLE CLICK ---------------- */
  const handleImageClick = (index) => {
    setIsPaused(true);          // stop background animation
    setActiveIndex(index);      // bring to center
    setZoomedIndex(index);      // trigger zoom

    setTimeout(() => {
      setZoomedIndex(null);     // remove zoom
      setIsPaused(false);       // resume auto rotation
    }, 1000); // 1 second zoom
  };

  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden">

        {images.map((image, index) => {
          const total = images.length;
          let diff = index - activeIndex;

          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          const base =
            "absolute rounded-2xl shadow-2xl object-cover cursor-pointer transition-all duration-700 ease-in-out";

          let positionStyle = "";

          if (diff === 0)
            positionStyle =
              "z-50 scale-100 opacity-100 w-[400px] h-[450px]";
          else if (diff === -1)
            positionStyle =
              "z-40 scale-90 opacity-80 -translate-x-72 w-[330px] h-[400px]";
          else if (diff === -2)
            positionStyle =
              "z-30 scale-75 opacity-60 -translate-x-[520px] w-[280px] h-[360px]";
          else if (diff === 1)
            positionStyle =
              "z-40 scale-90 opacity-80 translate-x-72 w-[330px] h-[400px]";
          else if (diff === 2)
            positionStyle =
              "z-30 scale-75 opacity-60 translate-x-[520px] w-[280px] h-[360px]";
          else positionStyle = "opacity-0 scale-50";

          /* -------- ZOOM EFFECT -------- */
          const zoomEffect =
            zoomedIndex === index
              ? "scale-125 z-[100] duration-500"
              : "";

          return (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(index)}
              className={`${base} ${positionStyle} ${zoomEffect}`}
            />
          );
        })}
=======
      style: "Handloom sarees with sophisticated fashion sense"
    }
  ];

  const services = [
    {
      icon: "✨",
      title: "Professional Draping",
      description: "Expert draping techniques for a flawless, elegant look"
    },
    {
      icon: "🎨",
      title: "Custom Styling",
      description: "Personalized styling based on your body type and preference"
    },
    {
      icon: "💎",
      title: "Occasion Perfect",
      description: "Perfect draping for weddings, events, and celebrations"
    }
  ];

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll animations observer
  useEffect(() => {
    const observers = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-scroll-animate]').forEach((el) => {
      observers.observe(el);
    });

    return () => observers.disconnect();
  }, []);

  // Mouse position tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll animations observer
  useEffect(() => {
    const observers = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-scroll-animate]').forEach((el) => {
      observers.observe(el);
    });

    return () => observers.disconnect();
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-10 pb-20 max-w-7xl mx-auto px-4 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background Elements */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(217, 119, 6, 0.5); }
          50% { box-shadow: 0 0 40px rgba(217, 119, 6, 0.8); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(217, 119, 6, 0.4)); }
          50% { filter: drop-shadow(0 0 15px rgba(217, 119, 6, 0.8)); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
        }
        .float { animation: float 4s ease-in-out infinite; }
        .float-reverse { animation: float-reverse 5s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .bounce-smooth { animation: bounce-smooth 2s ease-in-out infinite; }
        .wave { animation: wave 0.8s ease-in-out; }
        .glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .wiggle { animation: wiggle 0.5s ease-in-out; }
        .gradient-animated { 
          background-size: 300% 300%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>

      {/* Floating Background Orbs */}
      <div className="fixed top-20 right-10 w-32 h-32 bg-amber-300 rounded-full opacity-5 blur-3xl pointer-events-none float" />
      <div className="fixed bottom-32 left-5 w-40 h-40 bg-yellow-300 rounded-full opacity-5 blur-3xl pointer-events-none float-reverse" />
      <div className="fixed top-1/2 left-1/4 w-64 h-64 bg-amber-200 rounded-full opacity-3 blur-3xl pointer-events-none animate-pulse" />

      {/* Header Section with Epic Animation */}
      <div 
        className={`text-center mb-16 transform transition-all duration-1000 ${
          isLoading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
        data-scroll-animate
        id="header"
      >
        {/* Animated Emoji with Wave */}
        <div className="inline-block mb-6">
          <span 
            className="text-7xl inline-block wave"
            style={{ animation: 'wave 0.8s ease-in-out' }}
          >
            👗
          </span>
        </div>

        {/* Main Heading with Letter Animation */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
          <span className="inline-block" style={{ animation: 'slide-in-left 0.8s ease-out' }}>
            Saree
          </span>
          <span className="inline-block mx-3" style={{ animation: 'slide-in-right 0.8s ease-out 0.2s backwards' }}>
            Draping
          </span>
        </h1>

        {/* Gradient Text with Animation */}
        <div className="h-16 md:h-20 flex items-center justify-center mb-6">
          <div className="relative inline-block">
            <div 
              className="text-4xl md:text-5xl font-serif font-bold gradient-animated"
              style={{
                backgroundImage: 'linear-gradient(45deg, #d97706, #fbbf24, #d97706, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Excellence & Elegance
            </div>
          </div>
        </div>

        {/* Description with Staggered Animation */}
        <p 
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ animation: 'slide-up 0.8s ease-out 0.3s backwards' }}
        >
          Professional draping services to enhance your natural beauty and confidence with every drape
        </p>

        {/* Animated Dividers */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-1 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full glow-pulse"
              style={{
                width: i === 2 ? '16px' : '8px',
                animationDelay: `${i * 200}ms`
              }}
            />
          ))}
        </div>
      </div>

      {/* Featured Gallery with 3D Effects */}
      <div className="mb-20" data-scroll-animate id="gallery">
        {/* Main Featured Image */}
        <div className="mb-12">
          <div className="relative group max-w-4xl mx-auto">
            <div 
              className="relative h-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                perspective: '1000px'
              }}
            >
              {/* Auto-rotating Images */}
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    animation: activeIndex === idx ? 'zoom-in 1s ease-out' : 'none'
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                </div>
              ))}

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-0">
                <p className="text-xl font-serif font-semibold">{images[activeIndex].style}</p>
              </div>

              {/* Animated Glow Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'inset 0 0 20px rgba(217, 119, 6, 0.3)' }} />
            </div>

            {/* Gallery Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
                    activeIndex === idx 
                      ? 'w-8 bg-amber-600 shadow-lg shadow-amber-600/50 glow-pulse' 
                      : 'w-3 bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section with Staggered Cards */}
      <div className="mb-20" data-scroll-animate id="services">
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-16 border-2 border-amber-100 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl animate-pulse float" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse float-reverse" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-16">
              <span style={{ animation: 'slide-in-left 0.8s ease-out' }} className="inline-block">
                Our Premium
              </span>
              <span className="block mt-2" style={{ animation: 'slide-in-right 0.8s ease-out 0.2s backwards' }}>
                Services
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-amber-100 hover:border-amber-400 relative overflow-hidden"
                  style={{
                    animation: visibleSections.services ? `slide-up 0.8s ease-out ${idx * 200}ms backwards` : 'none'
                  }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/0 to-yellow-100/0 group-hover:from-amber-100/30 group-hover:to-yellow-100/30 transition-all duration-300" />

                  {/* Icon with Bounce */}
                  <div 
                    className="text-5xl mb-6 inline-block transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                    style={{
                      animation: 'bounce-smooth 2s ease-in-out infinite',
                      animationDelay: `${idx * 200}ms`
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 font-serif group-hover:text-amber-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Animated Line */}
                  <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 group-hover:shadow-lg group-hover:shadow-amber-400/50 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Counter Animations */}
      <div className="mb-20" data-scroll-animate id="features">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
          <span style={{ animation: 'slide-in-left 0.8s ease-out' }} className="inline-block">
            Why Choose
          </span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600" style={{ animation: 'slide-in-right 0.8s ease-out 0.2s backwards' }}>
            Our Draping Services?
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Expert draping with 10+ years of experience",
            "Perfect fitting for all body types",
            "Quick and efficient service",
            "Personalized consultation available",
            "Special occasion specialists",
            "Affordable premium services"
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-6 rounded-xl bg-white hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-3 shadow-md hover:shadow-lg border border-transparent hover:border-amber-300 group"
              style={{
                animation: visibleSections.features ? `slide-up 0.8s ease-out ${idx * 100}ms backwards` : 'none'
              }}
            >
              {/* Animated Checkmark */}
              <div 
                className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg group-hover:shadow-amber-500/50 glow-pulse"
              >
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="text-gray-700 font-medium text-lg group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section with Pulse Animation */}
      <div className="text-center">
        <p className="text-gray-600 mb-6 text-lg">
          Ready to look absolutely stunning in a saree?
        </p>
        <a 
          href="https://wa.me/919080533611?text=Hi%2C%20I%20am%20interested%20in%20Saree%20Draping%20services."
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 shadow-lg"
        >
          <span className="flex items-center gap-2">
            <span>📱 Book Appointment Now</span>
            <span className="ml-2">→</span>
          </span>
        </a>
        <p className="text-gray-500 text-sm mt-4">
          Available for consultations and bookings
        </p>
>>>>>>> cb87686b518bcc6f682a1e4d56678cfcdbbb329b
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 w-20 h-20 bg-amber-200 rounded-full opacity-10 blur-2xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-10 blur-3xl pointer-events-none" />
    </div>
  );
};

export default SareeDraping;
