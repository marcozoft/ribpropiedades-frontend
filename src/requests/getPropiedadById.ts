import { API_URL, BACKEND_API_KEY } from "../constants/constants"
import { REVALIDATE_PROPIEDAD_ID } from "../constants/revalidate-constants";

/**
 * Obtener una propiedad por su ID
 * 
 * Realiza un fetch a la API con caching y tagged revalidation.
 * El cache es invalidado al llamar revalidateTag('propiedad-{id}')
 * 
 * @param {number} id - ID de la propiedad a obtener
 * 
 * @returns {Promise<Response>} Response con los datos de la propiedad
 * 
 * @example
 * const response = await getPropiedadById(123);
 * const data = await response.json();
 */
export const getPropiedadById = async (id: number): Promise<Response> => {

   return fetch(`${API_URL}/propiedades/${id}`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },
      next: {
         revalidate: REVALIDATE_PROPIEDAD_ID,
         tags: [`propiedad-${id}`]
      }
   });


}