import { Carousel, CarouselContent, CarouselDots, CarouselNext, CarouselPrevious } from "@/src/components";
import type { CarouselApi } from "@/src/components/shadcn-components/ui/carousel";
import { Imagen } from "@/src/interfaces";
import { generateSrcImage } from "@/src/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  imagenes: Imagen[];
  initialIndex: number;
}

export const CarouselImagenesFullPage = ({imagenes, initialIndex}:Props) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    api.scrollTo(initialIndex, true);
  }, [api, initialIndex]);

  return (
    <Carousel className="h-full w-full" opts={{ loop: true }} setApi={setApi}>
      <CarouselContent className="items-center">
        {imagenes.map((image, i) => (
          <div className="flex h-screen w-full shrink-0 items-center justify-center" key={i}>
            <Image
              src={generateSrcImage(image.imagen)}
              alt={`Slide ${i + 1}`}
              width={1240}
              height={698}
              sizes="100vw"
              className="max-h-screen w-full object-contain"
            />
          </div>
        ))}
      </CarouselContent>
      <CarouselDots
        className="absolute bottom-2 left-1/2 z-10 w-full -translate-x-1/2 overflow-x-hidden"
        classNameDot="bg-white/50 w-1.5 h-1.5 sm:w-2 sm:h-2"
        classNameDotSelected="bg-white w-3 h-3 sm:w-4 sm:h-4"
      />
      <CarouselPrevious className="top-1/2 left-4 -translate-y-1/2 bg-white text-white hover:bg-white/40" />
      <CarouselNext className="top-1/2 right-4 -translate-y-1/2 bg-white text-white hover:bg-white/40" />
    </Carousel>
  );
};
