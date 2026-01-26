import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/src/components"
import { LanzamientoSlider } from "@/src/interfaces";
import { CarouselLanzamientosSlide } from "./CarouselLanzamientosSlide";

type Props = {
   sliders: LanzamientoSlider[];
}

export const CarouselLanzamientos = ({ sliders }: Props) => {
   return (
      <Carousel className="w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl px-2 mb-20"
         opts={{ loop: true }}>
            <div className="bg-white shadow-2xl rounded sm:px-3 md:px-4 p-2 sm:p-3 md:p-4">
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

            </div>
         <CarouselPrevious className="hidden md:flex" />
         <CarouselNext className="hidden md:flex" />
         <CarouselDots 
            classNameDot="bg-white/50 w-1.5 h-1.5 sm:w-2 sm:h-2" 
            classNameDotSelected="bg-white w-3 h-3 sm:w-4 sm:h-4" 
         />
      </Carousel>)
}
