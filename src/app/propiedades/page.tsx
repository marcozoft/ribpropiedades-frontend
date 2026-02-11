import { ControlMapaGrilla, FiltersBar, MapaPropiedadesFull, PropiedadCard, SinResultados } from '@/src/components';
import { PropiedadBasico, SearchParams } from "@/src/interfaces";
import { getAllPropiedades, getFilterItems, getPropiedadesIA } from '@/src/requests';
import { TituloDescriptivo } from '@/src/components/filters-propiedades/TituloDescriptivo';
import { ambientesItemFilters, ordenes, booleanFilters } from '@/src/constants/form-constants';

export default async function Propiedades({
   searchParams
}: {
   searchParams: Promise<SearchParams>
}) {

   const searchParamsBrowserBar = (await searchParams);
   const { filtros } = await getFilterItems();
   let propiedades: PropiedadBasico[] = [];
   let filterValues: SearchParams;
   
   if (searchParamsBrowserBar.queryAI) {  // Busqueda IA
      const propiedadesIAresponse = await getPropiedadesIA(searchParamsBrowserBar.queryAI)
      propiedades = propiedadesIAresponse.propiedades;
      filterValues = propiedadesIAresponse.parametros_interpretados;

   } else {                               // Busqueda con filtros
      propiedades = (await getAllPropiedades(searchParamsBrowserBar)).propiedades
      filterValues = searchParamsBrowserBar;
   }
   
   const vistaGrilla =
      <>
         <div className='bg-background pt-30'>
            <TituloDescriptivo
               filterValues={filterValues}
               length={propiedades.length}
               ambientesItemFilters={ambientesItemFilters}
               ordenes={ordenes}
               booleansFilters={booleanFilters}
               dormitoriosItemFilters={filtros.dormitorios}
               {...filtros}
            />
         </div>

         {/* Grid de propiedades */}
         {
            propiedades.length > 0
               ? (
                  <div className="max-w-6xl mx-auto px-4 pb-30 mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                     {
                        propiedades.map(
                           prop => (<PropiedadCard key={prop.id} propiedad={prop} className="hover:shadow-2xl" />)
                        )
                     }
                  </div>
               ) : (<SinResultados imageSrc='/images/propiedades-sin-resultados.jpg' />)
         }
      </>


   return (
      <div className="bg-white">
         <div className="sticky z-10 top-20 -mt-20">
            <FiltersBar 
               filterValues={searchParamsBrowserBar} 
               className='bg-background shadow-xl border-foreground' 
               startCollapsed={true}
               {...filtros} 
               allControls 
            />
         </div>

         {
            searchParamsBrowserBar.vista == 'mapa'
               ? (<MapaPropiedadesFull propiedades={propiedades} className='col-span-4 top-16 h-screen'/>)
               : (vistaGrilla)
         }
         {
            propiedades.length > 0 && <ControlMapaGrilla vista={searchParamsBrowserBar.vista} />
         }
      </div>
   )
}
