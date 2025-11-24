import { secondaryFont } from "@/src/config/fonts"
import { PropiedadCard } from '@/src/components';
import { propiedadesSeeed } from "@/src/seed/propiedades";

// TODO: Armar carousel
export const Seleccion = () => {
  return (
    <section className="px-4 py-20">
      <h1 className="font-bold text-5xl text-center">RIB Selección</h1>
      <h2 className={`text-center font-bold pb-10 ${secondaryFont.className}`}>Descubrí nuestra exclusiva selección</h2>
      <div className="px-4 mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          propiedadesSeeed.propiedades.slice(0, 4).map(prop => <PropiedadCard key={prop.id} {...prop} />)
        }
      </div>
   </section>
  )
}
