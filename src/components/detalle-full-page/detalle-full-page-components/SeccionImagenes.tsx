import { Imagen } from "@/src/interfaces"
import { CarouselFullPage, LinkButton } from "@/src/components";

type SeccionImagenesProps = {
  titulo: string;
  operacion?: string;
  imagenes: Imagen[];
}


export const SeccionImagenes = ({ imagenes, titulo, operacion }: SeccionImagenesProps) => {
  return (
    <div className="flex">
      <div className="hidden xl:flex xl:basis-1/4 bg-background items-center flex-col justify-center">
        <span className="hidden lg:flex bg-gray-600 text-white uppercase font-semibold text-lg py-0.4 px-2">{operacion}</span>
        <h1 className="text-2xl lg:text-4xl text-black font-semibold text-center m-5">{titulo}</h1>
        <LinkButton className="hidden lg:flex" href={'#descripcion'} text="VER MÁS"/>
      </div>
    
      <div className='w-full xl:basis-3/4'>
        <CarouselFullPage imagenes={imagenes} />
      </div>
    </div>
  )
}
      