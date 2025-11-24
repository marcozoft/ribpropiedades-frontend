import { PropiedadesGrid, Buscador, TituloDescriptivo } from '@/src/components';
import { SearchParams } from "@/src/interfaces";
import { secondaryFont } from "../../config/fonts";
import { getAllPropiedades, getFilterItems } from '@/src/requests';



export default async function Propiedades({
   searchParams
}: {
   searchParams: Promise<SearchParams>
}) {

   const filterValues = (await searchParams);
   const propiedadesResponse = await getAllPropiedades(filterValues);
   const { filtros } = await getFilterItems();

   return (
      <div className="bg-white">
         <div className="bg-background">
            <div className="max-w-6xl mx-auto px-4">
               <Buscador {...filtros } />
               <div className="py-15">
                  <TituloDescriptivo {...filterValues} cantidad={propiedadesResponse.propiedades.length} />
                  <h2 className={`${secondaryFont.className} text-black text-lg mt-3`}>Listado &nbsp; &gt; &nbsp; Listado de propiedades</h2>
                  {/* <pre>{ JSON.stringify(searchParams) }</pre> */}
               </div>
            </div>
         </div>
         <PropiedadesGrid propiedades={propiedadesResponse.propiedades} />
      </div>
   );
}