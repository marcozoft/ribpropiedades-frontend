import { API_KEY, API_URL } from "../constants/constants";
import { ComentariosResponse, FiltrosResponse, PropiedadesResponse } from "../interfaces";
import { SearchParams } from '@/src/interfaces';

/**
 * Query principal, propiedes filtradas
 */
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