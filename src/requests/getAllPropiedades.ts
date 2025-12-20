import { API_KEY, API_URL } from "../constants/constants";
import { PropiedadesResponse, SearchParams } from "../interfaces";

/**
 * Query principal, propiedes filtradas
 */
export const getAllPropiedades = async (searchParams?:SearchParams): Promise<PropiedadesResponse> => {

   const queryParams = new URLSearchParams({
      'operacion': searchParams?.operacion || '',
      'localidad': searchParams?.localidad || '',
      'destacadas' : searchParams?.destacadas || ''
   });

   // console.log(`query params: ${queryParams}`);
   
   return fetch(`${API_URL}/propiedades?${queryParams}`, {
      headers: {
         'X-API-Key': API_KEY
      },

   }).then(resp => resp.json())

}
