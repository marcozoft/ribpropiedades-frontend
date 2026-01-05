import { SearchParams } from "@/src/interfaces"

type Props = {
   filterValues: SearchParams,
   length: number
}
export const TituloDescriptivo = ({ filterValues, length }: Props) => {
   return (
      // TODO: Armar lo plurales: lote -> lotes, casa -> casas
      <h1 className="text-5xl text-black font-bold">
         {length} {filterValues.tipo_inmueble ?? 'propiedades'}&nbsp;{`${filterValues.operacion?? ''}`} 
         {filterValues.zona ?? ''}
      </h1>
   )
}
