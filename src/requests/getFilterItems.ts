import { BACKEND_API_KEY, API_URL } from "../constants/constants"
import { REVALIDATE_FILTERS } from "../constants/revalidate-constants"
import { FiltrosResponse } from "../interfaces"

/**
 * Filtros para llenar los campos de busqueda
 */
export const getFilterItems = async (): Promise<FiltrosResponse> => {

   return fetch(`${API_URL}/filtros`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },
      next: {
         revalidate: REVALIDATE_FILTERS
      }

   }).then(resp => resp.json())

}