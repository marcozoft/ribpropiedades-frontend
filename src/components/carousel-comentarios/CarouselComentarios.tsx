import { Comentario } from "@/src/interfaces"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from '@/src/components';
import { CarouselComentarioItem } from "./CarouselComentarioItem"

type Props = {
  comentarios: Comentario[]
}

export const CarouselComentarios = ({ comentarios }: Props) => {
   return (
      <div className='flex justify-center bg-white w-full p-3 mx-auto gap-0'>
         <Carousel className="w-full mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-6xl px-2" autoplay={4000}
         opts={{ loop: true }}>
            <CarouselContent>
               {
                  comentarios.map((comentario, i) => (
                     <CarouselItem key={i} className="basis-4/5 sm:basis-1/2 lg:basis-1/3">
                        <div className="p-1 sm:p-2">
                           <CarouselComentarioItem {...comentario} />
                        </div>                     
                     </CarouselItem>
                  ))
               }
            </CarouselContent>
         <CarouselPrevious className="hidden md:flex border border-background bg-white hover:bg-gray-300 hover:border-0 left-4 -top-14 xl:top-1/2 xl:-left-18 lg:-translate-y-1/2" />
         <CarouselNext className="hidden md:flex border bg-white hover:bg-gray-300 right-4 -top-14 xl:top-1/2 xl:-right-18 lg:-translate-y-1/2" />
         <CarouselDots
            classNameDot="bg-foreground/50 w-1.5 h-1.5 sm:w-2 sm:h-2"
            classNameDotSelected="bg-foreground w-3 h-3 sm:w-4 sm:h-4"
         />
      </Carousel>
      </div>
   )
}
