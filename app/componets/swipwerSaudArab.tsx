"use client";
import { useState } from "react";

const slides = [
  {
    title: "Explore Saudi Arabia",
    image: "/swiper1.png",
  },
  {
    title: "Made To Change NEOM",
    image: "/swiper2.png",
  },
  {
    title: "Rules of BehaviourKSA",
    image: "/swiper3.png",
  },
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[index];

  return (
    <div
      className="
        relative 
        w-full 
        h-[400px] max-[1440px]:h-[360px] max-[1024px]:h-[300px] max-[768px]:h-[250px] max-[480px]:h-[200px] max-[320px]:h-[160px]
        bg-cover bg-center 
        rounded-xl 
        overflow-hidden 
        transition-all duration-700
      "
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div
        className="
          absolute 
          z-20 
          left-10 bottom-40 
          max-[1440px]:bottom-36 max-[1024px]:bottom-28 max-[768px]:bottom-24 max-[480px]:bottom-16 max-[320px]:bottom-12
          text-white
        "
      >
        <h2
          className="
            font-bold 
            text-[60px] 
            max-[1440px]:text-[50px] 
            max-[1024px]:text-[40px] 
            max-[768px]:text-[32px] 
            max-[480px]:text-[24px] 
            max-[320px]:text-[18px]
          "
        >
          {slide.title}
        </h2>
      </div>

      <button
        onClick={nextSlide}
        className="
          absolute 
          z-20 
          right-10 
          top-1/2 
          transform -translate-y-1/2 
          w-[80px] h-[80px] 
          max-[1440px]:w-[70px] max-[1440px]:h-[70px] 
          max-[1024px]:w-[60px] max-[1024px]:h-[60px] 
          max-[768px]:w-[50px] max-[768px]:h-[50px] 
          max-[480px]:w-[40px] max-[480px]:h-[40px]
          rounded-full 
          border-2 border-white 
          text-white 
          flex items-center justify-center 
          text-xl 
          hover:bg-white hover:text-black 
          transition
        "
      >
        <strong
          className="
            text-[40px]
            max-[1440px]:text-[35px]
            max-[1024px]:text-[30px]
            max-[768px]:text-[24px]
            max-[480px]:text-[18px]
          "
        >
          →
        </strong>
      </button>
    </div>
  );
}
