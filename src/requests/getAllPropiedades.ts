import { API_KEY, API_URL } from "../constants/constants";
import { PropiedadesResponse, SearchParams } from "../interfaces";

/**
 * Query principal, propiedes filtradas
 */
export const getAllPropiedades = async (searchParams?:SearchParams): Promise<PropiedadesResponse> => {

   const queryParams = new URLSearchParams({
      'operacion': searchParams?.operacion || '',
      'zona': searchParams?.zona || '',
   });

      
   return fetch(`${API_URL}/propiedades?${queryParams}`, {
      headers: {
         'X-API-Key': API_KEY
      },
      next: {
         revalidate: 3600 //TODO: Ajustar para prod
      }

   }).then(resp => resp.json())

}
