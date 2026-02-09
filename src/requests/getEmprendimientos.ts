import { BACKEND_API_KEY, API_URL } from "../constants/constants";
import { EmprendimientosResponse } from "../interfaces";

/**
 * Emprendimientos para grid
 */
export const getAllEmprendimientos = async (): Promise<EmprendimientosResponse> => {
   
   return fetch(`${API_URL}/emprendimientos`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },

   }).then(resp => resp.json())

}