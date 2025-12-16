import { API_KEY, API_URL } from "../constants/constants";
import { EmprendimientoIdResponse } from "../interfaces";

export const getEmprendimientoById = (id: number): Promise<Response> => {

   return fetch(`${API_URL}/emprendimientos/${id}`, {
      headers: {
         'X-API-Key': API_KEY
      },
      cache: 'force-cache'
   });

}