import { Imagen } from "@/src/interfaces";
import { generateSrcImage } from "@/src/utils";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselDots, CarouselNext, CarouselPrevious } from "@/src/components";

type Props = {
  imagenes: Imagen[];
}


export const CarouselImagenesFullPage = ({ imagenes }: Props) => {

  return (
    <Carousel className="w-full h-full"
      opts={{ loop: true }}>
      <CarouselContent>
        {
          imagenes.map((image, i) => (
            <div className="w-full flex shrink-0" key={i}>
              <div className="relative w-full aspect-16/6 overflow-hidden">
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
        className="absolute left-1/2 -translate-x-1/2 bottom-2 overflow-x-hidden w-full z-10"
        classNameDot="bg-white/50 w-1.5 h-1.5 sm:w-2 sm:h-2"
        classNameDotSelected="bg-white w-3 h-3 sm:w-4 sm:h-4"
      />
      <CarouselPrevious className="hidden sm:flex text-foreground translate-x-20 bg-white hover:bg-gray-300 left-4 -top-14 sm:top-1/2 sm:-left-18 sm:-translate-y-1/2" />
      <CarouselNext className="hidden sm:flex -translate-x-20 bg-white hover:bg-gray-300 right-4 -top-14 sm:top-1/2 sm:-right-18 sm:-translate-y-1/2" />
    </Carousel>
  )
}
