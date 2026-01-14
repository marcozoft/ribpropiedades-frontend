import { FiltersBar, MapaPropiedades, PropiedadCard, SinResultados } from '@/src/components';
import { SearchParams } from "@/src/interfaces";
import { getAllPropiedades, getFilterItems } from '@/src/requests';
import { TituloDescriptivo } from '@/src/components/filters/TituloDescriptivo';
import { ambientesItemFilters, ordenes, booleanFilters } from '@/src/constants/form-constants';
import { Grid, Map } from 'lucide-react';
import { Button } from '@/src/components/shadcn-components';

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

         {/* <div className='bg-background pt-30'>
            <TituloDescriptivo
               filterValues={filterValues}
               length={propiedades.length}
               ambientesItemFilters={ambientesItemFilters}
               ordenes={ordenes}
               booleansFilters={booleanFilters}
               dormitoriosItemFilters={filtros.dormitorios}
               {...filtros}
            />
         </div> */}

         <div className="grid grid-cols-4 pb-30">
            {/* <div className="bg-gray-600 col-span-2 overflow-y-auto"> */}
               {/* Grid de propiedades */}
               {/* <div className="grid grid-cols-2">
                  {
                     propiedades.map(
                        prop => (<PropiedadCard key={prop.id} propiedad={prop} className="hover:shadow-2xl" />)
                     )
                  }
               </div> */}
            {/* </div> */}

            <div className="col-span-4 top-16 h-screen">
               <MapaPropiedades propiedades={propiedades} />
            </div>

         </div>

         {/* <div className='fixed top-1/2 -translate-y-1/2 debug ml-2 grid grid-cols-1 overflow-y-auto bg-gray-600'>
            {
                     propiedades.map(
                        prop => (<PropiedadCard key={prop.id} propiedad={prop} className="hover:shadow-2xl max-w-80" />)
                     )
            }
         </div> */}

         {/* Botón flotante */}
         <Button variant='search' className="fixed bottom-6 bg-foreground left-1/2 -translate-x-1/2 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 z-50">
            {
               filterValues.vista == 'mapa' 
               ? (<> <Grid/>Ver grilla </> )
               : (<> <Map/>Ver mapa </> )
            }
         </Button>
      </div>
   );
}