import React, { useState, useEffect, useRef } from "react";

const SareeDraping = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const images = [
    {
      src: "https://thumbs.dreamstime.com/b/indian-silk-saree-14348643.jpg?w=768",
      alt: "Indian silk saree",
    },
    {
      src: "https://thumbs.dreamstime.com/b/indian-saree-design-19704685.jpg?w=768",
      alt: "Traditional wedding saree",
    },
    {
      src: "https://thumbs.dreamstime.com/b/traditional-kubera-silk-cotton-saree-salem-tamil-nadu-elegant-handloom-design-close-up-image-beautifully-woven-made-414160694.jpg?w=1400",
      alt: "Elegant saree fashion portrait",
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
      </div>
    </div>
  );
};

export default SareeDraping;