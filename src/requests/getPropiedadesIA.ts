import { BACKEND_API_KEY, API_URL } from "../constants/constants";
import { PropiedadesIAResponse, SearchParams } from "../interfaces";

interface BusquedaIABody {
   query: string;
}

/**
 * Query principal, propiedades filtradas con IA
 */
export const getPropiedadesIA = async (query: string): Promise<PropiedadesIAResponse> => {
   
   const body: BusquedaIABody = {
      query
   };
      
   return fetch(`${API_URL}/buscador_inteligente`, {
      method: 'POST',
      headers: {
         'X-API-Key': BACKEND_API_KEY,
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      
      next: {
         revalidate: 3600 //TODO: Ajustar para prod
      }

   }).then(resp => {
      return resp.json()
   })

}
