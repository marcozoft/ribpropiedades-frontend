import { BACKEND_API_KEY, API_URL } from "../constants/constants";
import { REVALIDATE_DESTACADAS } from "../constants/revalidate-constants";
import { PropiedadesResponse } from "../interfaces";

/**
 * Propiedades destacadas (RIB Seleccion)
 */
export const getPropiedadesDestacadas = async (): Promise<PropiedadesResponse> => {
      
   return fetch(`${API_URL}/propiedades?destacadas=1`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },
      next: {
         revalidate: REVALIDATE_DESTACADAS
      }

   }).then(resp => resp.json())

}
