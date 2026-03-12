import { API_URL, BACKEND_API_KEY } from "../constants/constants"
import { REVALIDATE_PROPIEDAD_ID } from "../constants/revalidate-constants";

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