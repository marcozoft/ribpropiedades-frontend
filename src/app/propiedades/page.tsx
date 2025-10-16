import { PropiedadCard } from "@/src/components";
import { PropiedadesResponse } from "@/src/interfaces";

const getAllPropiedades = async (): Promise<PropiedadesResponse> => {

   const url = `https://admin.ribpropiedades.com.ar/api/propiedades`
   const apiKey = 'rib_api_2025_secure_key_d4f8a2e1b9c7x3m5';

   return fetch(url, {
      headers: {
         'X-API-Key': apiKey
      }
   }).then(resp => resp.json())

}


export default async function Propiedades() {

   // Todas las propiedades
   const propiedadesResponse = await getAllPropiedades();
   console.log('Propiedades: ', propiedadesResponse);


   return (
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {
            propiedadesResponse.propiedades.map( prop => <PropiedadCard key={prop.id} {...prop} />)
         }
      </div>
   );
}