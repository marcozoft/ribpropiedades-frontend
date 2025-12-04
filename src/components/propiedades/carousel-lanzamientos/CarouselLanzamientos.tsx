"use client";

import { PropiedadBasico } from "@/src/interfaces";
import { generateHrefPropiedad, generateSrcImage } from "@/src/utils";
import Image from "next/image";
import { useState } from "react";
import { CarouselDetalle } from './CarouselDetalle';

type CarouselClientProps = {
  propiedades: PropiedadBasico[];
}

const descripcionMock = `
Exclusiva ubicación frente a la Universidad Austral e IAE y a pocos metros del Hospital Austral, Shopping Las Palmas, Jumbo, Easy,  
Hoteles Sheraton e Ibis, Parque Empresarial Austral, Village Cinemas,  
Bancos de Galicia, ICBC y Rio, en el centro del área comercial más importante de Pilar, encontramos la mejor inversión, 
tanto en renta como en capitalización, respaldada por el gran crecimiento demográfico de la zona Austral, estudiantes, empleados, 
profesores y pacientes.
Cocheras en subsuelo.

Distrito Campus 1 consta de 53 unidades de 1 y 2 ambientes, ya finalizadas y entregadas, quedando pocas unidades a la venta. 
`

export const CarouselLanzamientos = ({ propiedades }: CarouselClientProps) => {
  
  const [current, setCurrent] = useState(0);


  const nextSlide = () => setCurrent((prev) => (prev + 1) % propiedades.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + propiedades.length) % propiedades.length);

  return (
    <div className='flex border-2 bg-white w-full p-3 mx-auto px-4 shadow-2xl rounded'>

      <div className="relative w-full mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {propiedades.map((prop, i) => (
            <div className="w-full flex flex-shrink-0 object-cover gap-5" key={i}>
              <Image
                width={640}
                height={360}
                src={generateSrcImage(prop.imagen_principal)}
                alt={`Slide ${i + 1}`}
                className="flex-shrink-0 rounded"
              />
              <div className="flex">
                <CarouselDetalle
                  subtitulo={prop.faja_promocional}
                  titulo={prop.titulo_venta} 
                  descripcion={descripcionMock}
                  href={generateHrefPropiedad(prop.id, prop.titulo_venta)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 h-15 w-15 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 cursor-pointer"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 h-15 w-15 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 cursor-pointer"
        >
          ❯
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 items-center">
          {propiedades.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${current === i ? "bg-foreground w-5 h-5" : "bg-gray-400/70"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}