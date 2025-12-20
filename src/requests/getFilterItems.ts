import { API_KEY, API_URL } from "../constants/constants"
import { FiltrosResponse } from "../interfaces"

/**
 * Filtros para llenar los campos de busqueda
 */
export const getFilterItems = async (): Promise<FiltrosResponse> => {

   return fetch(`${API_URL}/filtros`, {
      headers: {
         'X-API-Key': API_KEY
      },

   }).then(resp => resp.json())

}