import { BACKEND_API_KEY, API_URL } from "../constants/constants"
import { REVALIDATE_LANZAMIENTOS } from "../constants/revalidate-constants"
import { LanzamientosResponse } from "../interfaces"

/**
 * Home: Sliders lanzamientos
 */
export const getLanzamientos = async (): Promise<LanzamientosResponse> => {
   
   return fetch(`${API_URL}/lanzamientos`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },
      next: {
         revalidate: REVALIDATE_LANZAMIENTOS
      }

   }).then(resp => resp.json())

}