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

      <div className="flex justify-center">

        {/* Boton prev */}
        <div className="flex items-center px-4 z-10">
          {/* <p>Hola mundo</p> */}
          <button
            onClick={prevSlide}
            className="cursor-pointer h-15 w-15 rounded-full bg-background/50 hover:bg-background"
          >❮
        </button>

        </div>

        {/* Slides */}
        <div className="flex max-w-6xl mx-auto px-4 shadow-2xl rounded p-3 bg-white">
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
                  totalLength={89}
                  slider={slider} 
                />
              ))}
            </div>
          </div>


        </div>

        {/* Boton next */}
        <div className="flex items-center px-4 z-10">
          {/* <p>Hola mundo</p> */}
          <button
            onClick={nextSlide}
            className="cursor-pointer h-15 w-15 rounded-full bg-white/80 hover:bg-white"
          >❯
          </button>
        </div>

      </div>


      <div className="flex flex-row justify-center">
        {/* Indicadores */}
        <div className="flex gap-2 items-center pt-5">
          {sliders.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer w-2 h-2 rounded-full ${current === i ? "bg-foreground w-5 h-5" : "bg-foreground/50"
                }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}