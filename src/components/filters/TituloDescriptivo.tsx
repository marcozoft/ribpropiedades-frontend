import { SearchParams } from "@/src/interfaces"

type Props = {
   filterValues: SearchParams,
   length: number
}
export const TituloDescriptivo = ({ filterValues, length }: Props) => {
   return (
      <h1 className="text-5xl text-black font-bold">
         {length} {filterValues.tipo_inmueble ?? 'propiedades'} en {filterValues.operacion}
      </h1>
   )
}
