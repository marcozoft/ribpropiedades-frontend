import { BACKEND_API_KEY, API_URL } from "../constants/constants"
import { ContenidoHome } from "../interfaces"

/**
 * Contenido Home
 */
export const getHomeContenido = async (): Promise<ContenidoHome> => {
   
   return fetch(`${API_URL}/contenido-home`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },

   }).then(resp => resp.json())

}