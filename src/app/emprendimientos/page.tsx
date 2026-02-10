import { getAllEmprendimientos } from '@/src/requests';
import { EmprendimientoCard, FiltersPopover, TituloDescriptivoEmprendimientos } from '@/src/components';
import { SearchParamsEmprendimientos } from '@/src/interfaces';
import { FiltersBarEmprendimientos } from '@/src/components';


export default async function Emprendimientos({
      searchParams
   }: {
      searchParams: Promise<SearchParamsEmprendimientos>
   }) {
   
   const searchParamsBrowserBar = (await searchParams);

   const {emprendimientos} = await getAllEmprendimientos();

   // Filtrar emprendimientos según categoría seleccionada
   const emprendimientosFiltrados = searchParamsBrowserBar.categoria && searchParamsBrowserBar.categoria.length > 0
      ? emprendimientos.filter(emp => 
         searchParamsBrowserBar.categoria?.includes(emp.categoria_emprendimientos)
      )
      : emprendimientos;

   console.log(emprendimientosFiltrados);
   
   return (
      <div className="bg-white">

         <div className="bg-background">
            <div className="py-20 max-w-6xl mx-auto px-4 flex justify-between">
               <TituloDescriptivoEmprendimientos params={searchParamsBrowserBar}/>
               <FiltersBarEmprendimientos filterValues={searchParamsBrowserBar} />
            </div>

         </div>
            {/* { JSON.stringify(searchParams, null, 3) } */}
         <div className="max-w-6xl mx-auto px-4 pb-15 bg-white mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
         {
            emprendimientosFiltrados.map(prop => <EmprendimientoCard key={prop.id} {...prop} />)
         }
         </div>
      </div>
   );
}