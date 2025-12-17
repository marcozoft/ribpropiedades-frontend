import { Buscador, PropiedadCard } from '@/src/components';
import { SearchParams } from "@/src/interfaces";
import { secondaryFont } from "../../config/fonts";
import { getAllPropiedades, getFilterItems } from '@/src/requests';



export default async function Propiedades({
   searchParams
}: {
   searchParams: Promise<SearchParams>
}) {

   const filterValues = (await searchParams);
   const { propiedades } = await getAllPropiedades(filterValues);
   const { filtros } = await getFilterItems();

   return (
      <div className="bg-white">
         <div className="bg-background">
            <div className="max-w-6xl mx-auto px-4">
               <Buscador {...filtros } />
               <div className="py-10">
                  <h1 className="text-5xl text-black font-bold">
                     Propiedades encontradas
                  </h1>
                  <h2 className={`${secondaryFont.className} text-black text-lg mt-3`}>Listado &nbsp; &gt; &nbsp; Listado de propiedades</h2>
               </div>
            </div>
         </div>
         
         {/* Grid de propiedades */}
         <div className="max-w-6xl mx-auto px-4 pb-15 bg-white mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {
               propiedades.map(prop => <PropiedadCard key={prop.id} propiedad={prop} className="hover:shadow-2xl" />)
            }
         </div>
      </div>
   );
}