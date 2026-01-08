import { API_KEY, API_URL } from "../constants/constants";
import { booleanFilters } from "../constants/form-constants";
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
      'ambientes': searchParams.ambientes || '',
      'dormitorios': searchParams.dormitorios || '',
      'caracteristicas': caracteristicas,
   });   
      
   return fetch(`${API_URL}/propiedades?${queryParamsApi}`, {
      headers: {
         'X-API-Key': API_KEY
      },
      next: {
         revalidate: 3600 //TODO: Ajustar para prod
      }

   }).then(resp => resp.json())

}
