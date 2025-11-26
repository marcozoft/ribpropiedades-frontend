import { API_KEY, API_URL } from "../constants/constants";
import { FiltrosResponse, PropiedadesResponse } from "../interfaces";
import { SearchParams } from '@/src/interfaces';

export const getAllPropiedades = async (searchParams:SearchParams): Promise<PropiedadesResponse> => {

   const queryParams = new URLSearchParams({
      'operacion': searchParams.operacion || '',
      'localidad': searchParams.localidad || '',
   });
   // queryParams.append('page','1');

   console.log(`query params: ${queryParams}`);
   
   return fetch(`${API_URL}/propiedades?${queryParams}`, {
      headers: {
         'X-API-Key': API_KEY
      },

   }).then(resp => resp.json())

}

export const getFilterItems = async (): Promise<FiltrosResponse> => {

   return fetch(`${API_URL}/filtros`, {
      headers: {
         'X-API-Key': API_KEY
      },

   }).then(resp => resp.json())

}
