import { BACKEND_API_KEY, API_URL } from "../constants/constants";

export const getEmprendimientoById = (id: number): Promise<Response> => {

   return fetch(`${API_URL}/emprendimientos/${id}`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },
      cache: 'force-cache'
   });

}