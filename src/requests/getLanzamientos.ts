import { API_KEY, API_URL } from "../constants/constants"
import { LanzamientosResponse } from "../interfaces"

/**
 * Home: Sliders lanzamientos
 */
export const getLanzamientos = async (): Promise<LanzamientosResponse> => {
   
   return fetch(`${API_URL}/lanzamientos`, {
      headers: {
         'X-API-Key': API_KEY
      },

   }).then(resp => resp.json())

}