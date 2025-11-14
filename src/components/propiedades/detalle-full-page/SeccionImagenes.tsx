import { Imagen } from "@/src/interfaces"
import { CarouselFullPage } from "./CarouselFullPageClient";
import { RoundedButton } from "../../ui";

type SeccionImagenesProps = {
  titulo: string;
  operacion: string;
  imagenes: Imagen[];
}


export const SeccionImagenes = ({ imagenes, titulo, operacion }: SeccionImagenesProps) => {
  return (
    <div className="flex">
      <div className="hidden sm:flex sm:basis-1/4 bg-background items-center flex-col justify-center">
        <span className="hidden lg:flex bg-gray-600 text-white uppercase font-semibold text-sm py-0.4 px-2">{operacion}</span>
        <h1 className="text-2xl lg:text-4xl text-black font-semibold text-center m-5">{titulo}</h1>
        <RoundedButton href={'#descripcion'} text="VER MÁS"/>
      </div>
    
      <div className='sm:basis-3/4 bg-blue-600'>
        <CarouselFullPage imagenes={imagenes} />
      </div>
    </div>
  )
}
      