import { PropiedadBasico } from '@/src/interfaces'
import Image from 'next/image'
import React from 'react'
import { FajaPromocional, IndicadorNumerico, IndicadorPrecio } from '.';
import Link from 'next/link';
import { generateHrefPropiedad, generateSlug } from '@/src/utils';


const BASE_URL = `https://ribpropiedades.com.ar`

export const PropiedadCard = ({
   ambientes,
   codigo,
   faja_promocional,
   imagen_principal,
   inmueble,
   operacion,
   precio_publico,
   precio,
   sup_total,
   titulo_venta,
   id,
}: PropiedadBasico) => {

   return (
      <div className="relative mx-auto w-full">
         <Link href={generateHrefPropiedad(id, titulo_venta)} className="relative inline-block w-full">
            <div className="rounded-lg bg-white p-4 shadow">
               <div className="relative flex justify-center overflow-hidden rounded-sm">

                  {/* Imagen */}
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                     <Image src={`${BASE_URL}/${imagen_principal}`} width={950} height={534} alt={codigo} />
                  </div>

                  {/* Faja promocional */}
                  {
                     faja_promocional && <FajaPromocional descripcion={faja_promocional} />
                  }
               </div>

               <div className="mt-4">
                  <h2 className="font-extralight text-gray-800 md:text-lg">{inmueble} - {operacion}</h2>
                  <IndicadorPrecio precio={precio} precio_condicion={precio_publico} sinEspecificar='Consultar' moneda='USD'/>
               </div>
               <div className="mt-4">
                  <p className="mt-2 text-lg text-gray-900 line-clamp-2 leading-5 min-h-[2.5rem] font-thin">
                     {titulo_venta}
                  </p>
               </div>
               <div className="justify-center">
                  <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                     <IndicadorNumerico nombre='Amb' valor={ambientes}/>
                     <IndicadorNumerico nombre='Sup Total' valor={sup_total} unidad='m2'/>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   )
}