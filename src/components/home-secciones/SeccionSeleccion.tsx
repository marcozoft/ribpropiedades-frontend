import { secondaryFont } from "@/src/config/fonts"
import { CarouselCards } from '@/src/components';
import { getAllPropiedades } from "@/src/requests";

// TODO: Armar carousel
export const SeccionSeleccion = async () => {

  const propiedadesSeleccion = await getAllPropiedades({destacadas:'1'});
  
  console.log(propiedadesSeleccion);

  return (
    <section className="px-4 py-20">
      <h1 className="font-bold text-5xl text-center">RIB Selección</h1>
      <h2 className={`text-center font-bold pb-10 ${secondaryFont.className}`}>Descubrí nuestra exclusiva selección</h2>
      <CarouselCards propiedades={propiedadesSeleccion.propiedades}/>
    </section>
  )
}
