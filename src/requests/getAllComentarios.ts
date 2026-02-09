import { BACKEND_API_KEY, API_URL } from "../constants/constants"
import { ComentariosResponse } from "../interfaces"

/**
 * Obtener todos los comentarios para el home
 */
export const getAllComentarios = async (): Promise<ComentariosResponse> => {

   return fetch(`${API_URL}/comentarios`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },

   }).then(resp => resp.json())

}