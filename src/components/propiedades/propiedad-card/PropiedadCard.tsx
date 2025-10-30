import { PropiedadBasico } from '@/src/interfaces'
import Image from 'next/image'
import { FajaPromocional, IndicadorBarrio, IndicadorNumerico, IndicadorOperacion, IndicadorPrecio, TituloDeVenta } from '.';
import Link from 'next/link';
import { generateHrefPropiedad } from '@/src/utils';


// TODO: LLevar al .env
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
            <div className="bg-white p-4 shadow">
               <div className="relative flex justify-center overflow-hidden">

                  {/* Imagen */}
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                     <Image src={`${BASE_URL}/${imagen_principal}`} width={950} height={534} alt={codigo} />
                  </div>

                  {/* Faja promocional */}
                  {
                     faja_promocional && <FajaPromocional descripcion={faja_promocional} />
                  }
                  <IndicadorBarrio barrio='Mayling club de campo' />
               </div>

               <div className="mt-4">

                  {/* Tipo de operacion TODO: Agregar si es casa o depto ???*/}
                  <IndicadorOperacion 
                     tipoDeInmueble={inmueble} 
                     tipoDeOperacion={operacion}
                  />

                  {/* Precio */}
                  <IndicadorPrecio 
                     precio={precio} 
                     precio_condicion={precio_publico} 
                     sinEspecificar='Consultar' 
                     moneda='u$d'
                  />
               </div>
               <div className="mt-4">
                  <TituloDeVenta tituloVenta={titulo_venta} />
               </div>
               <div className="justify-center">
                  <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                     {/* Cantidad de ambientes */}
                     <IndicadorNumerico 
                        nombre='Ambientes' 
                        valor={ambientes} 
                        icono={<i className="flaticon-bed text-black"></i>}
                     />
                     {/* superficie total m2 */}
                     <IndicadorNumerico 
                        nombre='Sup Total' 
                        valor={sup_total} 
                        icono={<i className="flaticon-pin text-black"></i>} 
                        unidad='m2'
                     />
                  </div>
               </div>
            </div>
         </Link>
      </div>
   )
}