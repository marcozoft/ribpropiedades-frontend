import { FiltersBar, PropiedadCard, SinResultados } from '@/src/components';
import { ItemFilter, SearchParams } from "@/src/interfaces";
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

   // TODO: Debe venir en el endpoint getFilterItems();
   const ambientes: ItemFilter[] = [
      {
         valor: '1',
         label: '1 ambiente'
      },
      {
         valor: '2',
         label: '2 ambientes'
      },
      {
         valor: '3',
         label: '3 ambientes'
      },
      {
         valor: '4',
         label: '4 ambientes'
      },
      {
         valor: '5',
         label: '5 ambientes'
      },
      {
         valor: '6',
         label: '6 ambientes'
      },
      {
         valor: '7',
         label: '7 ambientes'
      },
      {
         valor: '8',
         label: '8 ambientes'
      },
   ]


   return (
      <div className="bg-white">
         <div className="max-w-6xl mx-auto sticky z-10 top-20 -mt-20 shadow-md">
            <FiltersBar filterValues={filterValues} ambientes={ambientes} {...filtros} allControls />
         </div>

         <div className='bg-background pt-30 pb-20'>
            <TituloDescriptivo filterValues={filterValues} length={propiedades.length} />
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