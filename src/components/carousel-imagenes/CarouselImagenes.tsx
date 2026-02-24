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
  CarouselNext,
  CarouselPrevious,
} from "@/src/components";
import { CarouselImagenesFullPage } from "./CarouselImagenesFullPage";
import { X } from "lucide-react";

type Props = {
  imagenes: Imagen[];
};

export const CarouselImagenes = ({ imagenes }: Props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <Carousel className="h-full w-full" opts={{ loop: true }}>
        <CarouselContent>
          {imagenes.map((image, i) => (
            <div
              className="flex w-full shrink-0 cursor-pointer"
              key={i}
              onClick={() => setIsFullscreen(true)}
            >
              <div className="relative aspect-16/6 w-full overflow-hidden">
                <Image
                  src={generateSrcImage(image.imagen)}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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
      {isFullscreen && (
        <div className="bg-opacity-95 fixed inset-0 z-50 flex items-center justify-center bg-black p-2">
          
          {/* Boton de salir */}
          <Button
            onClick={() => setIsFullscreen(false)}
            variant="default"
            size="icon"
            className="absolute top-6 right-6 z-51 size-20 h-10 w-10 rounded-full bg-white text-3xl  hover:bg-gray-300 hover:opacity-80"
          >
            <X className="text-foreground size-8" strokeWidth="3" />
          </Button>

          <CarouselImagenesFullPage imagenes={imagenes} />
        </div>
      )}
    </>
  );
};
