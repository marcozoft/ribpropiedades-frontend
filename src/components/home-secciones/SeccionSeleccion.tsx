import { secondaryFont } from "@/src/config/fonts"
import { CarouselCards } from '@/src/components';
import { getPropiedadesDestacadas } from "@/src/requests";
import { CarouselCardsOld } from "../carousel-cards-propiedades/CarouselCardsOld";

export const SeccionSeleccion = async () => {

  const propiedadesSeleccion = await getPropiedadesDestacadas();
  
  return (
    <section className="px-4 py-20">
      <h1 className="font-bold text-5xl text-center">RIB Selección</h1>
      <h2 className={`text-center font-bold pb-10 ${secondaryFont.className}`}>Descubrí nuestra exclusiva selección</h2>
      
      {/* Carousel Seleccion x3 cards */}
      <CarouselCards propiedades={propiedadesSeleccion.propiedades}/>      
    </section>
  )
}
