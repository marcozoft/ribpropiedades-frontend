export const getEmprendimientoById = (id: number): Promise<Response> => {

   return fetch(`${API_URL}/emprendimientos/${id}`, {
      headers: {
         'X-API-Key': BACKEND_API_KEY
      },
      next: {
         revalidate: REVALIDATE_EMPRENDIMIENTOS_ID
      }
   });

}