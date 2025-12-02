"use client"
import { Comentario } from "@/src/interfaces";
import { useState } from "react";
import { CarouselComentarioItem } from './CarouselComentarioItem';


type Props = {
  comentarios: Comentario[]
}

export const CarouselComentarios = ({ comentarios }: Props) => {
  
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if( current < comentarios.length - 3) {
      setCurrent(current + 1);
    }
  }
  const prevSlide = () => {
    if(current > 0 ) {
      setCurrent(current - 1);
    }
  }

  return (
    <div className='flex justify-center bg-white w-full p-3 mx-auto gap-0'>

      {/* Boton prev */}
      <div className="flex items-center">
        <button
          onClick={prevSlide}
          className="cursor-pointer h-15 w-15 rounded-full border-1 hover:bg-background"
        >❮
        </button>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl flex-1 relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100 / 3}%)` }}
        >
          {comentarios.map((comentario, i) => (
            <div className="w-1/3 flex flex-shrink-0 object-cover" key={i}>
              <div className="flex">
                <CarouselComentarioItem {...comentario} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Boton next */}
      <div className="flex items-center">
        <button
          onClick={nextSlide}
          className="cursor-pointer h-15 w-15 rounded-full border-1 hover:bg-background"
        >❯
        </button>
      </div>

    </div>
  );
}