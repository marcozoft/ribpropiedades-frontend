import { PropiedadCard } from "@/src/components";
import { MapaPropiedades } from "@/src/components/mapa-propiedades/MapaPropiedades";
import { getAllPropiedades, getAllPropiedadesMapa } from "@/src/requests";


export default async function Page() {

   const propiedadesMapa = (await getAllPropiedadesMapa()).propiedades;
   const propiedades = (await getAllPropiedades()).propiedades;


   return (
      <div className="grid grid-cols-4 pb-30 debug">
         <div className="bg-gray-600 col-span-2 overflow-y-auto">
            {/* Grid de propiedades */}
            <div className="grid grid-cols-2">
               {
                  propiedades.map(prop => <PropiedadCard key={prop.id} propiedad={prop} className="hover:shadow-2xl" />)
               }
            </div>
         </div>
         <div className="bg-yellow-700 col-span-2 sticky top-[90px] h-screen">
            <MapaPropiedades propiedades={propiedadesMapa}/>
         </div>
      </div>
   );
}