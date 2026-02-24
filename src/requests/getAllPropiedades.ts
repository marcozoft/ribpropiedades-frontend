import { BACKEND_API_KEY, API_URL } from "../constants/constants";
import { booleanFilters } from "../constants/form-constants";
import { REVALIDATE_PROPIEDADES } from "../constants/revalidate-constants";
import { PropiedadesResponse, SearchParams } from "../interfaces";

/**
 * Query principal, propiedes filtradas
 */
export const getAllPropiedades = async (searchParams:SearchParams): Promise<PropiedadesResponse> => {

   const caracteristicas = booleanFilters
      .map( item => item.valor)
      .filter( item => searchParams[item as keyof SearchParams] === '1' )
      .join(',')      

   const queryParamsApi = new URLSearchParams({
      'operacion': searchParams.operacion || '',
      'zona': searchParams.zona || '',
      'emprendimiento' : searchParams.emprendimiento || '',
      'tipo_inmueble': searchParams.tipo_inmueble || '',
      'orden': searchParams.orden || '',
      'dormitorios': searchParams.dormitorios || '',
      'caracteristicas': caracteristicas,
   });   
      
   return fetch(`${API_URL}/propiedades?${queryParamsApi}`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },
      next: {
         revalidate: REVALIDATE_PROPIEDADES
      }

   }).then(resp => resp.json())

}
