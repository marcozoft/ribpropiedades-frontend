import Image from 'next/image'
import Link from 'next/link';
import { EmprendimientoBasico } from '@/src/interfaces'
import { DescripcionCorta, FajaPromocional, IndicadorBarrio, NombreEmprendimiento } from './cards-components';
import { generateHrefEmprendimiento, generateSrcImage } from '@/src/utils';


export const EmprendimientoCard = ({
   faja_promocional,
   imagen,
   nombre,
   id,
   descripcion_corta,
   zona,
}: EmprendimientoBasico) => {

   return (
      <div className="relative mx-auto w-full shadow hover:shadow-2xl">
         <Link href={generateHrefEmprendimiento(id, nombre)} className="relative inline-block w-full">
            <div className="bg-white p-4">
               <div className="relative flex justify-center overflow-hidden">

                  {/* Imagen */}
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110 relative h-56 md:h-64 lg:h-72 overflow-hidden">
                     <Image fill src={generateSrcImage(imagen)} className="object-cover object-center" alt={`Emprendimiento_${id}`} />
                  </div>

                  {/* Faja promocional */}
                  {
                     faja_promocional && <FajaPromocional descripcion={faja_promocional} />
                  }
                  <IndicadorBarrio barrio={zona} />
               </div>
               
               <div className="mt-4">
                  {/* Descripcion */}
                  <NombreEmprendimiento nombre={nombre} />
               </div>

               <div className="mt-4">
                  {/* Descripcion */}
                  <DescripcionCorta descripcion={descripcion_corta} />
               </div>
            </div>
         </Link>
      </div>
   )
}