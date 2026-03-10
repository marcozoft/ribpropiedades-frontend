"use client";

import { Imagen } from "@/src/interfaces";
import { generateSrcImage } from "@/src/utils";
import Image from "next/image";
import { useState } from "react";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components";
import { CarouselImagenesFullPage } from "./CarouselImagenesFullPage";
import { Expand, X } from "lucide-react";

type Props = {
  imagenes: Imagen[];
};

export const CarouselImagenes = ({ imagenes }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Carousel className="w-full" opts={{ loop: true, align: "center" }}>
        <CarouselContent>
          {imagenes.map((image, i) => (
            <CarouselItem
              key={i}
              className="basis-[70%] cursor-pointer px-1"
              onClick={() => setActiveIndex(i)}
            >
              <div className="group relative">
                <Image
                  src={generateSrcImage(image.imagen)}
                  alt={`Slide ${i + 1}`}
                  width={0}
                  height={0}
                  sizes="70vw"
                  className="h-auto w-full"
                />
                <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full bg-black/50 p-1.5">
                    <Expand className="size-5 text-white" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots
          className="absolute bottom-2 left-1/2 z-10 w-full -translate-x-1/2 overflow-x-hidden"
          classNameDot="bg-white/50 w-1.5 h-1.5 sm:w-2 sm:h-2"
          classNameDotSelected="bg-white w-3 h-3 sm:w-4 sm:h-4"
        />
        <CarouselPrevious className="text-foreground -top-14 left-4 hidden translate-x-20 bg-white hover:bg-gray-300 sm:top-1/2 sm:-left-18 sm:flex sm:-translate-y-1/2" />
        <CarouselNext className="-top-14 right-4 hidden -translate-x-20 bg-white hover:bg-gray-300 sm:top-1/2 sm:-right-18 sm:flex sm:-translate-y-1/2" />
      </Carousel>

      {/* Fullscreen Modal */}
      {activeIndex !== null && (
        <div className="bg-opacity-95 fixed inset-0 z-50 flex items-center justify-center bg-black p-2">
          
          {/* Boton de salir */}
          <Button
            onClick={() => setActiveIndex(null)}
            variant="default"
            size="icon"
            className="absolute top-6 right-6 z-51 size-20 h-10 w-10 rounded-full bg-white text-3xl  hover:bg-gray-300 hover:opacity-80"
          >
            <X className="text-foreground size-8" strokeWidth="3" />
          </Button>

          <CarouselImagenesFullPage imagenes={imagenes} initialIndex={activeIndex} />
        </div>
      )}
    </>
  );
};
