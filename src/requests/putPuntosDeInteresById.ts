import { revalidateTag } from "next/cache";
import { API_URL, BACKEND_API_KEY } from "../constants/constants"
import { FeatureCollectionExtended } from "../interfaces";

export const putPuntosDeInteresById = async (id: number, tipo: 'propiedad' | 'emprendimiento', data: FeatureCollectionExtended[]): Promise<Response> => {

   return fetch(`${API_URL}/${tipo}/${id}`, {
      method: 'PUT',
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },
      body: JSON.stringify(data)
   });

}