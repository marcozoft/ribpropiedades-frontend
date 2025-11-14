import { PropiedadCard, PropiedadesGrid } from "@/src/components";
import { PropiedadesResponse } from "@/src/interfaces";
import { propiedadesSeeed } from "@/src/seed/propiedades";
import { secondaryFont } from "../../config/fonts";

const getAllPropiedades = async (): Promise<PropiedadesResponse> => {

   const baseUrl = `https://admin.ribpropiedades.com.ar/api/propiedades`
   const apiKey = 'rib_api_2025_secure_key_d4f8a2e1b9c7x3m5';

   const queryParams = new URLSearchParams({
      // 'page': '1'
   });
   // queryParams.append('page','1');

   return fetch(`${baseUrl}?${queryParams}`, {
      headers: {
         'X-API-Key': apiKey
      },

   }).then(resp => resp.json())

}


export default async function Propiedades() {

   const propiedadesResponse = await getAllPropiedades();

   return (
      <div className="bg-white">
         <div className="bg-background">
            <div className="max-w-6xl mx-auto px-4">
               <div className="py-24">
                  <h1 className="text-5xl text-black font-bold">Listado de propiedades {propiedadesResponse.propiedades.length}</h1>
                  <h2 className={`${secondaryFont.className} text-black text-lg mt-3`}>Listado &nbsp; &gt; &nbsp; Listado de propiedades</h2>
               </div>
            </div>
         </div>
         <PropiedadesGrid propiedades={propiedadesResponse.propiedades} />
      </div>
   );
}