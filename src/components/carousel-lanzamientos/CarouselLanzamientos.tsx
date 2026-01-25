import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components"
import { LanzamientoSlider } from "@/src/interfaces";
import { CarouselLanzamientosSlide } from "./CarouselLanzamientosSlide";

type Props = {
   sliders: LanzamientoSlider[];
}

export const CarouselLanzamientos = ({ sliders }: Props) => {
   return (
      <Carousel className="w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl px-2 sm:px-3 md:px-4 shadow-2xl rounded p-2 sm:p-3 md:p-4 mb-20 bg-white debug"
         opts={{ loop: true }}>
         <CarouselContent>
            {sliders.map((slider, i) => (
               <CarouselLanzamientosSlide
                  key={i}
                  i={i}
                  index={i}
                  slider={slider}
               />
            ))}
         </CarouselContent>
         <CarouselPrevious className="hidden md:flex" />
         <CarouselNext className="hidden md:flex" />
      </Carousel>)
}
