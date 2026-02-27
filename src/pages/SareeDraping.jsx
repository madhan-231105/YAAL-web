import React, { useState, useEffect, useRef } from "react";

const SareeDraping = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const images = [
    {
      src: "https://thumbs.dreamstime.com/b/indian-silk-saree-14348643.jpg?w=768",
      alt: "Indian Silk Saree Draping",
    },
    {
      src: "https://thumbs.dreamstime.com/b/indian-saree-design-19704685.jpg?w=768",
      alt: "Traditional Wedding Saree Draping",
    },
    {
      src: "https://thumbs.dreamstime.com/b/traditional-kubera-silk-cotton-saree-salem-tamil-nadu-elegant-handloom-design-close-up-image-beautifully-woven-made-414160694.jpg?w=1400",
      alt: "Elegant Saree Pleats Styling",
    },
    {
      src: "https://image2url.com/r2/default/images/1772067210920-7f84e61f-6468-422d-af90-44647b7ebbf8.png",
      alt: "South Indian Bridal Saree Draping",
    },
    {
      src: "https://image2url.com/r2/default/images/1772067261509-47860568-6751-47ee-bf8e-1793ca42bfac.png",
      alt: "Classic Bridal Draping Style",
    },
    {
      src: "https://image2url.com/r2/default/images/1772067329731-aa80f1c2-ee04-4d5d-a29b-c9f2707c24c1.png",
      alt: "Reception Saree Elegance",
    },
    {
      src: "https://image2url.com/r2/default/images/1772067375175-f8eb455f-25fb-4242-8f7e-7c6a72aebf67.png",
      alt: "Festive Saree Draping",
    },
    {
      src: "https://image2url.com/r2/default/images/1772067414131-d81f989d-321d-48bc-bbe8-067cfc6629ad.png",
      alt: "Luxury Bridal Styling",
    },
    {
      src: "https://image2url.com/r2/default/images/1772067457766-4f9a3701-65b2-4dc1-b868-d76246a118c3.png",
      alt: "Traditional Silk Saree Look",
    },
    {
      src: "https://image2url.com/r2/default/images/1772067522704-8657a333-c356-4700-96e5-ea44d1fd5cb1.png",
      alt: "Wedding Day Saree Draping",
    },
  ];

  const services = [
    {
      icon: "✨",
      title: "Professional Draping",
      description: "Expert draping techniques for a flawless, elegant look",
    },
    {
      icon: "🎨",
      title: "Custom Styling",
      description:
        "Personalized styling based on your body type and preference",
    },
    {
      icon: "💎",
      title: "Occasion Perfect",
      description:
        "Perfect draping for weddings, events, and celebrations",
    },
  ];

  /* AUTO ROTATE */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  /* LOADING */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="pt-10 pb-20 max-w-7xl mx-auto px-4 relative overflow-hidden"
      ref={containerRef}
    >
      {/* HEADER */}
      <div
        className={`relative z-30 text-center mb-16 transform transition-all duration-1000 ${
          isLoading ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <div className="inline-block mb-6">
          <span className="text-7xl inline-block">👗</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
          Saree Draping
        </h1>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Professional draping services to enhance your beauty and confidence
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="mb-24 relative z-10">
        <div className="relative h-[320px] sm:h-[380px] md:h-[450px] flex items-center justify-center overflow-hidden">
          {images.map((image, index) => {
            const total = images.length;
            let diff = index - activeIndex;

            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const base =
              "absolute transition-all duration-700 ease-in-out rounded-2xl shadow-2xl object-cover cursor-pointer";

            let positionStyle = "";

            if (diff === 0)
              positionStyle =
                "z-20 scale-100 opacity-100 w-[220px] h-[280px] sm:w-[300px] sm:h-[360px] md:w-[400px] md:h-[450px]";
            else if (diff === -1)
              positionStyle =
                "z-10 scale-90 opacity-80 -translate-x-32 sm:-translate-x-48 md:-translate-x-72 w-[180px] h-[240px] sm:w-[240px] sm:h-[300px] md:w-[330px] md:h-[400px]";
            else if (diff === 1)
              positionStyle =
                "z-10 scale-90 opacity-80 translate-x-32 sm:translate-x-48 md:translate-x-72 w-[180px] h-[240px] sm:w-[240px] sm:h-[300px] md:w-[330px] md:h-[400px]";
            else positionStyle = "opacity-0 scale-50";

            return (
              <React.Fragment key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => {
                    setPreviewIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setIsPaused(false);
                  }}
                  className={`${base} ${positionStyle}`}
                />

                {hoveredIndex === index && diff === 0 && (
                  <div className="absolute bottom-6 z-30 bg-black/70 text-white px-6 py-2 rounded-lg text-sm sm:text-base transition-all duration-300">
                    {image.alt}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN PREVIEW */}
      {previewIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="relative max-w-5xl w-[90%]">
            <img
              src={images[previewIndex].src}
              alt={images[previewIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-xl">
              {images[previewIndex].alt}
            </p>
            <button
              onClick={() => {
                setPreviewIndex(null);
                setIsPaused(false);
              }}
              className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full shadow-lg hover:scale-110 transition-all duration-200 font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* SERVICES */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">
          Our Premium Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-lg border border-amber-100 hover:-translate-y-3 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="https://wa.me/919080533611"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
        >
          📱 Book Appointment Now
        </a>
      </div>
    </div>
  );
};

export default SareeDraping;