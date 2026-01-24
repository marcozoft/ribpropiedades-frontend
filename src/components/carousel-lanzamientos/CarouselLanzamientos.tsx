"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { LanzamientoSlider } from "@/src/interfaces";
import { CarouselLanzamientosSlide } from './CarouselLanzamientosSlide';

type CarouselClientProps = {
  sliders: LanzamientoSlider[];
}

export const CarouselLanzamientos = ({ sliders }: CarouselClientProps) => {

  const [current, setCurrent] = useState(0);

  // Autoplay setup
  const autoplayRef = useRef<number | null>(null);
  const autoplayInterval = 4000; // ms

  const startAutoplay = useCallback(() => {
    if (sliders.length < 2) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliders.length);
    }, autoplayInterval);
  }, [sliders.length]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliders.length);
    stopAutoplay();
    startAutoplay();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + sliders.length) % sliders.length);
    stopAutoplay();
    startAutoplay();
  };

  return (
    <div className='flex flex-col'>

      <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-4">

        {/* Boton prev */}
        <div className="flex items-center z-10">
          {/* <p>Hola mundo</p> */}
          <button
            onClick={prevSlide}
            className="cursor-pointer h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-15 lg:w-15 rounded-full bg-white hover:bg-gray-300 transition-colors flex items-center justify-center text-sm sm:text-base md:text-lg"
          >❮
        </button>

        </div>

        {/* Slides */}
        <div className="flex w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-2 sm:px-3 md:px-4 shadow-2xl rounded p-2 sm:p-3 md:p-4 bg-white">
          {/* [ CONTENEDOR ]  → overflow-hidden */}
          <div className="w-full overflow-hidden" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay} onFocus={stopAutoplay} onBlur={startAutoplay}>
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {sliders.map((slider, i) => (
                <CarouselLanzamientosSlide
                  key={i}
                  i={i}
                  index={current}
                  slider={slider} 
                />
              ))}
            </div>
          </div>


        </div>

        {/* Boton next */}
        <div className="flex items-center z-10">
          {/* <p>Hola mundo</p> */}
          <button
            onClick={nextSlide}
            className="cursor-pointer h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-15 lg:w-15 rounded-full bg-white hover:bg-gray-300 transition-colors flex items-center justify-center text-sm sm:text-base md:text-lg"
          >❯
          </button>
        </div>

      </div>


      <div className="flex flex-row justify-center">
        {/* Indicadores */}
        <div className="flex gap-1.5 sm:gap-2 items-center pt-4 sm:pt-5">
          {sliders.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer rounded-full transition-all ${current === i ? "bg-foreground w-3 h-3 sm:w-4 sm:h-4" : "bg-foreground/50 w-1.5 h-1.5 sm:w-2 sm:h-2" }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}