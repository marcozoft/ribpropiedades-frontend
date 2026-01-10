"use client"
import { useState } from "react";
import { PropiedadBasico } from "@/src/interfaces";
import { PropiedadCard } from "../cards/PropiedadCard";


type Props = {
  propiedades: PropiedadBasico[]
}

export const CarouselCards = ({ propiedades }: Props) => {
  
  const [current, setCurrent] = useState(0);

  // number of distinct positions (showing 3 cards at a time)
  const positions = Math.max(1, propiedades.length - 2);

  const nextSlide = () => {
    // wrap to first position when reaching the end
    setCurrent((c) => (c + 1) % positions);
  }
  const prevSlide = () => {
    // wrap to last position when at the start
    setCurrent((c) => (c - 1 + positions) % positions);
  }

  return (

    <div className='flex flex-col'>

      <div className='flex justify-center w-full p-3 mx-auto gap-2'>

        {/* Boton prev */}
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            className="cursor-pointer h-15 w-15 rounded-full border-1 bg-white hover:bg-gray-300"
          >❮
          </button>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl flex-1 relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100 / 3}%)` }}
          >
            {
              propiedades.map((propiedad, i) => (
                <div className="w-1/3 flex flex-shrink-0 object-cover" key={i}>
                  <div className="flex px-2">
                    <PropiedadCard propiedad={propiedad} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
        {/* Boton next */}
        <div className="flex items-center">
          <button
            onClick={nextSlide}
            className="cursor-pointer h-15 w-15 rounded-full border-1 bg-white hover:bg-gray-300"
          >❯
          </button>
        </div>
      </div>

      {/* Indicadores: uno por cada movimiento (positions) */}
      <div className="flex flex-row justify-center">
        <div className="flex gap-2 items-center pt-5">
          {Array.from({ length: positions }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer w-2 h-2 rounded-full ${current === i ? "bg-foreground w-4 h-4" : "bg-foreground/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}