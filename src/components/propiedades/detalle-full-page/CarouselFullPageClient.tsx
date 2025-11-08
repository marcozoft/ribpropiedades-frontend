"use client";

import { Imagen } from "@/src/interfaces";
import { generateSrcImage } from "@/src/utils";
import Image from "next/image";
import { useState } from "react";

type CarouselClientProps = {
  imagenes: Imagen[];
}


export const CarouselFullPage = ({ imagenes }: CarouselClientProps) => {
  
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % imagenes.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  return (
    <div className='bg-white 2xl:w-[1458px] h-max object-cover'>

      <div className="relative w-full mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {imagenes.map((image, i) => (
            <div className="w-full flex flex-shrink-0 object-cover" key={i}>
              <Image
                width={1458}
                height={733}
                src={generateSrcImage(image.imagen)}
                alt={`Slide ${i + 1}`}
                className=""
              />
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 w-15 h-15 -translate-y-1/2 bg-white/70 text-foreground text-2xl rounded-full hover:bg-white justify-center cursor-pointer"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 w-15 h-15 -translate-y-1/2 bg-foreground/70 text-white text-2xl rounded-full hover:bg-foreground justify-center cursor-pointer"
        >
          ❯
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 items-center">
          {imagenes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${current === i ? "bg-foreground w-5 h-5" : "bg-background/60"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
