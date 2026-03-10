// import { CATEGORIAS_EMPRENDIMIENTOS } from "@/src/constants/form-constants"
import { ItemFilter, SearchParamsEmprendimientos } from "@/src/interfaces"

type Props = {
   params: SearchParamsEmprendimientos,
   categorias: ItemFilter[]
}

export const TituloDescriptivoEmprendimientos = ({params, categorias}:Props) => {

   // Normalizar `params.categoria` para que siempre sea un array de strings
   const paramsArray: string[] = (() => {
      if (!params || params.categoria === undefined || params.categoria === null) return [];
      if (Array.isArray(params.categoria)) return params.categoria.map(String).filter(Boolean);
      return [String(params.categoria)].filter(Boolean);
   })();

   // Mapear valores a etiquetas, con fallback al propio valor
   const labels = paramsArray
      .map(val => categorias.find(item => item.valor === val)?.label || val)
      .filter(Boolean);

   return (
      <>
         <h1 className="text-3xl text-black font-bold flex items-center">
            { 
               labels.length === 0
                  ? 'Todos los emprendimientos'
                  : `Emprendimientos de ${labels.join(', ')}`
            }
         </h1>
      </>
   )
}
