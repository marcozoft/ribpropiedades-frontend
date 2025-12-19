import { API_KEY, API_URL } from "../constants/constants"
import { ComentariosResponse } from "../interfaces"

/**
 * Obtener todos los comentarios para el home
 */
export const getAllComentarios = async (): Promise<ComentariosResponse> => {

   return fetch(`${API_URL}/comentarios`, {
      headers: {
         'X-API-Key': API_KEY
      },

   }).then(resp => resp.json())

}