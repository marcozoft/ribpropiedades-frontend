import { SearchParams } from "@/src/interfaces"

type Props = {
   filterValues: SearchParams,
   length: number
}
export const TituloDescriptivo = ({ filterValues, length }: Props) => {
   
   const filtrosActivos = [
      filterValues.zona,
      filterValues.operacion,
      filterValues.tipo_inmueble
   ].filter(Boolean);

   const hayFiltros = filtrosActivos.length > 0;

   return (
      // TODO: Armar lo plurales: lote -> lotes, casa -> casas
      <div className="max-w-6xl mx-auto sticky top-40">
         <h1 className="text-5xl text-black font-bold">
            {length} {length === 1 ? 'propiedad' : 'propiedades'} {length === 1 ? 'encontrada' : 'encontradas'}
         </h1>
         <br />
         <h2>
            {hayFiltros 
               ? filtrosActivos.map(filtro => filtro?.toUpperCase()).join(' - ')
               : 'LISTADO COMPLETO'
            }
         </h2>         
         {/* <h2 className={`${secondaryFont.className} text-black text-lg mt-3`}>Listado &nbsp; &gt; &nbsp; Listado de propiedades</h2> */}
      </div>
   )
}