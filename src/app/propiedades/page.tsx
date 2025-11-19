import { PropiedadesGrid, Buscador } from '@/src/components';
import { PropiedadesResponse, Operacion } from "@/src/interfaces";
import { secondaryFont } from "../../config/fonts";
import { API_KEY, API_URL, BASE_URL } from "@/src/constants/constants";

const getAllPropiedades = async ({ operacion = Operacion.VENTA }): Promise<PropiedadesResponse> => {

   const queryParams = new URLSearchParams({
      'operacion': operacion,
   });
   // queryParams.append('page','1');

   console.log(`query params: ${queryParams}`);
   
   return fetch(`${API_URL}/propiedades?${queryParams}`, {
      headers: {
         'X-API-Key': API_KEY
      },

   }).then(resp => resp.json())

}

type SearchParams = {
   operacion?: Operacion;
   tipo_inmueble?: string;
}

export default async function Propiedades({
   searchParams
}: {
   searchParams: Promise<SearchParams>
   // searchParams: Promise<{ [key: string]: string | undefined }>
}) {

   const filters = (await searchParams);
   const { operacion, tipo_inmueble  } = filters;

   console.log({ operacion, tipo_inmueble });
   const propiedadesResponse = await getAllPropiedades({ operacion: operacion });


   return (
      <div className="bg-white">
         <div className="bg-background">
            <div className="max-w-6xl mx-auto px-4">
               <Buscador />
               <div className="py-24">
                  <h1 className="text-5xl text-black font-bold">
                     Listado de propiedades 
                     {
                        operacion && ` en ${operacion}`
                     }
                  </h1>
                  <span className="text-4xl text-blue-950">{propiedadesResponse.propiedades.length}</span>
                  <h2 className={`${secondaryFont.className} text-black text-lg mt-3`}>Listado &nbsp; &gt; &nbsp; Listado de propiedades</h2>
                  <pre>{ JSON.stringify(filters) }</pre>
               </div>
            </div>
         </div>
         <PropiedadesGrid propiedades={propiedadesResponse.propiedades} />
      </div>
   );
}