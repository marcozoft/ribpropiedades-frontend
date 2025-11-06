"use client";

import { useRef, useState } from "react";
import { CarouselLanzamientosClient, CarouselHandle } from "../propiedades/carousel-lanzamientos/CarouselLanzamientosClient";
import { propiedadesSeeed } from "@/src/seed/propiedades";

export const Lanzamientos = () => {
  const carouselRef = useRef<CarouselHandle | null>(null);
  const [index, setIndex] = useState(0);

  return (
    <section className='bg-foreground px-4 py-10'>
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-4">
        <h1 className="text-white text-2xl">Lanzamientos</h1>

        {/* controles externos */}
        <div className="flex gap-2">
          <button onClick={() => carouselRef.current?.prev()} className="px-3 py-1 bg-white/10 text-white rounded">Prev</button>
          <button onClick={() => carouselRef.current?.next()} className="px-3 py-1 bg-white/10 text-white rounded">Next</button>
          <button onClick={() => carouselRef.current?.goTo(0)} className="px-3 py-1 bg-white/10 text-white rounded">First</button>
          <span className="text-white ml-4">Índice: {index}</span>
        </div>
      </div>

      {/* modo controlado: pasamos currentIndex y onChange */}
      <CarouselLanzamientosClient
        ref={carouselRef}
        propiedades={propiedadesSeeed.propiedades}
        currentIndex={index}
        onChange={(i) => setIndex(i)}
      />
    </section>
  );
};
