import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious, PropiedadCard } from "@/src/components"
import { PropiedadBasico } from "@/src/interfaces"

type Props = {
   propiedades: PropiedadBasico[]
}

export const CarouselCards = ({ propiedades }: Props) => {
   return (
      <Carousel className="w-full mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-6xl px-2 mb-20" autoplay={4000}
         opts={{ loop: true }}>
            <CarouselContent>
               {
                  propiedades.map((propiedad, i) => (
                     <CarouselItem key={i} className="basis-4/5 sm:basis-1/2 lg:basis-1/3">
                        <div className="p-1 sm:p-2">
                           <PropiedadCard propiedad={propiedad} />
                        </div>                     
                     </CarouselItem>
                  ))
               }
            </CarouselContent>
         <CarouselPrevious className="hidden md:flex border border-background bg-white hover:bg-gray-300 hover:border-0" />
         <CarouselNext className="hidden md:flex border bg-white hover:bg-gray-300" />
         <CarouselDots
            classNameDot="bg-foreground/50 w-1.5 h-1.5 sm:w-2 sm:h-2"
            classNameDotSelected="bg-foreground w-3 h-3 sm:w-4 sm:h-4"
         />
      </Carousel>
   )
}
