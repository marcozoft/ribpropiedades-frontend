"use client";

import Image from "next/image";
import { useState } from "react";
import { LanzamientoSlider } from "@/src/interfaces";
import { generateHrefPropiedad, generateSrcImage } from "@/src/utils";
import { CarouselDetalle } from './CarouselDetalle';

type CarouselClientProps = {
  sliders: LanzamientoSlider[];
}

export const CarouselLanzamientos = ({ sliders }: CarouselClientProps) => {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliders.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sliders.length) % sliders.length);

  return (
    <div className='flex flex-col'>

      <div className="flex justify-center">

        {/* Boton prev */}
        <div className="flex items-center px-4">
          <button
            onClick={prevSlide}
            className="cursor-pointer h-15 w-15 rounded-full bg-background/50 hover:bg-background"
          >❮
        </button>

        </div>

        {/* Slides */}
        <div className="flex max-w-6xl mx-auto px-4 shadow-2xl border-2 rounded p-3 bg-white">
          <div className="relative w-full mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {sliders.map((slider, i) => (
                <CarouselDetalle slider={slider} key={i}/>
              ))}
            </div>
          </div>


        </div>

        {/* Boton next */}
        <div className="flex items-center px-4">
          <button
            onClick={nextSlide}
            className="cursor-pointer h-15 w-15 rounded-full bg-background/50 hover:bg-background"
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
              className={`cursor-pointer w-3 h-3 rounded-full ${current === i ? "bg-white w-5 h-5" : "bg-black"
                }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}