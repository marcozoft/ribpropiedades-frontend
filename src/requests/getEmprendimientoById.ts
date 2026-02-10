import { BACKEND_API_KEY, API_URL } from "../constants/constants";
import { REVALIDATE_EMPRENDIMIENTOS_ID } from "../constants/revalidate-constants";

export const getEmprendimientoById = (id: number): Promise<Response> => {

   return fetch(`${API_URL}/emprendimientos/${id}`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },
      next: {
         revalidate: REVALIDATE_EMPRENDIMIENTOS_ID
      }
   });

}