import Image from 'next/image'
import Link from 'next/link';
import { EmprendimientoBasico } from '@/src/interfaces'
import { DescripcionCorta, FajaPromocional, IndicadorBarrio, IndicadorNumerico, NombreEmprendimiento } from './cards-components';
import { generateHrefEmprendimiento, generateSrcImage } from '@/src/utils';


export const EmprendimientoCard = ({
   faja_promocional,
   imagen,
   nombre,
   id,
   descripcion_corta,
   zona,
   cantidad_propiedades
}: EmprendimientoBasico) => {

   return (
      <div className="relative mx-auto w-full shadow rounded-xs hover:shadow-2xl">
         <Link href={generateHrefEmprendimiento(id, nombre)} className="relative inline-block w-full">
            <div className="bg-white p-4 rounded-xs">
               <div className="relative flex justify-center overflow-hidden rounded-xs">

                  {/* Imagen */}
                  <div className="w-full relative aspect-video transform transition-transform duration-500 ease-in-out hover:scale-110 overflow-hidden rounded-xs">
                     <Image src={generateSrcImage(imagen)} alt={nombre} fill className="object-cover" />
                  </div>

                  {/* Faja promocional */}
                  {
                     faja_promocional && <FajaPromocional descripcion={faja_promocional} />
                  }
                  <IndicadorBarrio barrio={zona} />
               </div>
               
               <div className="mt-4">
                  {/* Nombre */}
                  <NombreEmprendimiento nombre={nombre} />
               </div>

               <div className="mt-4">
                  {/* Descripcion */}
                  <DescripcionCorta descripcion={descripcion_corta} />
               </div>

               <div className="justify-center">
                  <div className="mt-4 flex gap-2 overflow-hidden rounded-lg px-1 py-1 divide-x">

                     {/* Cantidad de dormitorios */}
                     <IndicadorNumerico 
                        nombre='Inmuebles' 
                        valor={cantidad_propiedades} 
                        icono={<i className="flaticon-home-2 text-black"></i>}
                     />

                  </div>
               </div>

            </div>
         </Link>
      </div>
   )
}