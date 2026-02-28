import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselDots } from "@/src/components"
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
         <CarouselPrevious className="hidden md:flex text-foreground bg-white hover:bg-gray-300 left-4 -top-14 xl:top-1/2 xl:-left-18 lg:-translate-y-1/2" />
         <CarouselNext className="hidden md:flex bg-white hover:bg-gray-300 right-4 -top-14 xl:top-1/2 xl:-right-18 lg:-translate-y-1/2" />
         <CarouselDots 
            classNameDot="bg-white/50 w-1.5 h-1.5 sm:w-2 sm:h-2" 
            classNameDotSelected="bg-white w-3 h-3 sm:w-4 sm:h-4" 
         />
      </Carousel>
   )
}
