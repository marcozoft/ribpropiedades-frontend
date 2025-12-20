import { API_KEY, API_URL } from "../constants/constants";
import { PropiedadesMapaResponse } from "../interfaces";

/**
 * Query principal, propiedes filtradas
 */
//TODO:Endpoint a deprecar
export const getAllPropiedadesMapa = async (): Promise<PropiedadesMapaResponse> => {
   
   return fetch(`${API_URL}/mapa`, {
      headers: {
         'X-API-Key': API_KEY
      },

   }).then(resp => resp.json())

}


