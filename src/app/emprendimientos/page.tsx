import { SearchParams } from "@/src/interfaces";
import { secondaryFont } from "../../config/fonts";
import { getAllEmprendimientos } from '@/src/requests';
import { EmprendimientoCard } from '@/src/components/cards';



export default async function Emprendimientos({
   searchParams
}: {
   searchParams: Promise<SearchParams>
}) {

   const emprendimientosResponse = await getAllEmprendimientos();

   console.log(emprendimientosResponse);

   return (
      <div className="bg-white">
         <div className="bg-background">
            <div className="max-w-6xl mx-auto px-4">
               {/* <Buscador {...filtros } /> */}
               <div className="py-10">
                  <h1 className="text-5xl text-black font-bold">
                     Emprendimientos encontrados
                  </h1>
                  <h2 className={`${secondaryFont.className} text-black text-lg mt-3`}>Listado &nbsp; &gt; &nbsp; Listado de emprendimientos</h2>
                  {/* <pre>{ JSON.stringify(searchParams) }</pre> */}
               </div>
            </div>
         </div>
         {/* <PropiedadesGrid propiedades={propiedadesResponse.propiedades} /> */}
            <div className="max-w-6xl mx-auto px-4 pb-15 bg-white mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {
               emprendimientosResponse.emprendimientos.map(prop => <EmprendimientoCard key={prop.id} {...prop} />)
            }
            </div>
      </div>
   );
}