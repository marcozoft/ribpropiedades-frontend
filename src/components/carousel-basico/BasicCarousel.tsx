"use client"

import { useState } from "react";
import { LanzamientoSlider } from "@/src/interfaces";
import { generateSrcImage } from '../../utils/media-src';
import Image from "next/image";
import { CarouselDetalle } from "../carousel-lanzamientos/CarouselLanzamientosSlide";


type Props = {
  sliders: LanzamientoSlider[];
}
export const BasicCarousel = ({sliders}: Props) => {

   // console.log(sliders);
   
   const [index, setIndex] = useState(0);

   return (
      <>
      {/* [ CONTENEDOR ]  → overflow-hidden */}
      <div className="w-full px-[10%] overflow-hidden shadow-2xl border-2 rounded p-3 bg-white">
         {/* Track */}
         <div
            className="flex transition-transform duration-700 ease-in-out border-amber-200"
            style={{ transform: `translateX(-${index * 100}%)` }}
         >
            {sliders.map((slide, i) => {
               const prevIndex = (index - 1 + sliders.length) % sliders.length;
               const nextIndex = (index + 1) % sliders.length;
               const position = i === index ? "active" : i === prevIndex ? "prev" : i === nextIndex ? "next" : "other";
               return (
                  <CarouselDetalle
                     i={i}
                     index={index}
                     totalLength={89}
                     slider={slide} position={position} key={i} />
               );
            })}
         </div>
      </div>

      <div>
         <button className="text-white" onClick={() =>
               setIndex(index === 0 ? sliders.length - 1 : index - 1)
            }>
               Prev
            </button>


            <button className="text-white" onClick={() =>
               setIndex((index + 1) % sliders.length)
            }>
               Next
            </button>
      </div>
      </>
   )
}
