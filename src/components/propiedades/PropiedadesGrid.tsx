import { PropiedadBasico } from "@/src/interfaces"
import { PropiedadCard } from '@/src/components';

type PropiedadesGridProps = {
  propiedades: PropiedadBasico[]
}

export const PropiedadesGrid = ({propiedades}: PropiedadesGridProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 bg-white mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        propiedades.map(prop => <PropiedadCard key={prop.id} {...prop} />)
      }
    </div>
  )
}
