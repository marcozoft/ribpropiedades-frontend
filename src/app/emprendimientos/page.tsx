import { getAllEmprendimientos } from '@/src/requests';
import { EmprendimientoCard } from '@/src/components';


export default async function Emprendimientos() {

   const {emprendimientos} = await getAllEmprendimientos();

   return (
      <div className="bg-white pb-30">
         <div className="bg-background">
            <div className="max-w-6xl mx-auto px-4">
               <div className="py-10">
                  <h1 className="text-5xl text-black font-bold">
                     Emprendimientos encontrados
                  </h1>
               </div>
            </div>
         </div>
         <div className="max-w-6xl mx-auto px-4 pb-15 bg-white mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
         {
            emprendimientos.map(prop => <EmprendimientoCard key={prop.id} {...prop} />)
         }
         </div>
      </div>
   );
}