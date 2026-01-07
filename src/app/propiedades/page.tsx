import { FiltersBar, PropiedadCard, SinResultados } from '@/src/components';
import { SearchParams } from "@/src/interfaces";
import { getAllPropiedades, getFilterItems } from '@/src/requests';
import { TituloDescriptivo } from '@/src/components/filters/TituloDescriptivo';

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
         <div className="max-w-6xl mx-auto sticky z-10 top-20 -mt-20 shadow-md">
            <FiltersBar filterValues={filterValues} {...filtros} allControls />
         </div>

         <div className='bg-background pt-30'>
            <TituloDescriptivo filterValues={filterValues} length={propiedades.length} {...filtros} />
         </div>

         {/* Grid de propiedades */}
         {
            propiedades.length > 0
               ? (
                  <div className="max-w-6xl mx-auto px-4 pb-30 mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                     {
                        propiedades.map(prop => <PropiedadCard key={prop.id} propiedad={prop} className="hover:shadow-2xl" />)
                     }
                  </div>
               ) : (<SinResultados />)
         }
      </div>
   );
}