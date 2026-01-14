import { PropiedadBasico } from '@/src/interfaces'
import Image from 'next/image'
import { FajaPromocional, IndicadorBarrio, IndicadorNumerico, IndicadorOperacion, IndicadorPrecio, TituloDeVenta } from './cards-components';
import Link from 'next/link';
import { generateHrefPropiedad, generateSrcImage } from '@/src/utils';
import { Button } from '../shadcn-components';

type Props = {
   propiedad: PropiedadBasico
   className?: string;
   onClickEntorno: (lat: number, lng: number) => void
}

export const PropiedadPopupCard = ({ propiedad, className, onClickEntorno }: Props) => {

   const {
      codigo,
      dormitorios,
      faja_promocional,
      id,
      imagen_principal,
      inmueble,
      operacion,
      precio_publico,
      precio,
      sup_total,
      sup_terreno,
      titulo_venta,
      zona 
   } = propiedad;

   return (
      <div className={`relative mx-auto w-full ${className}`}>
         {/* <Link href='/' className="relative inline-block w-full"> */}
            <div className="bg-background p-4 rounded-xs">
               <div className="relative flex justify-center overflow-hidden rounded-xs">

                  {/* Imagen */}
                  <div className="w-full aspect-video transform transition-transform duration-500 ease-in-out hover:scale-110">
                     <Image className="w-full h-full object-cover" src={generateSrcImage(imagen_principal)} width={950} height={534} alt={codigo} />
                  </div>

                  {/* Faja promocional */}
                  {
                     // faja_promocional && <FajaPromocional descripcion={faja_promocional} />
                  }
                  {/* <IndicadorBarrio barrio={zona} /> */}
               </div>

               <div className="mt-4">

                  {/* Tipo de operacion TODO: Agregar si es casa o depto ???*/}
                  {/* <IndicadorOperacion
                     tipoDeInmueble={inmueble} 
                     tipoDeOperacion={operacion}
                  /> */}

                  {/* Precio */}
                  {/* <IndicadorPrecio
                     className='text-black' 
                     precio={precio} 
                     precio_condicion={precio_publico} 
                     sinEspecificar='Consultar' 
                     moneda='U$D'
                  /> */}
               </div>
               <div className="mt-4">
                  {/* Descripcion */}
                  <TituloDeVenta tituloVenta={titulo_venta} />
               </div>
               <div className="justify-center">
                  <div className="mt-4 flex gap-2 overflow-hidden rounded-lg px-1 py-1 divide-x">

                     <Button variant='ghost' onClick={ () => onClickEntorno(+propiedad.mapa_latitud, +propiedad.mapa_longitud) }>Ver entorno</Button>
                     {/* Cantidad de dormitorios */}
                     {/* <IndicadorNumerico 
                        nombre='Dormitorios' 
                        valor={dormitorios} 
                        icono={<i className="flaticon-bed text-black"></i>}
                     /> */}

                     {/* superficie total m2 */}
                     {/* <IndicadorNumerico 
                        nombre='Sup. Total' 
                        valor={sup_total} 
                        icono={<i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>} 
                        unidad='m²'
                     /> */}

                     {/* superficie terreno m2 */}
                     {/* <IndicadorNumerico 
                        nombre='Sup. Terreno' 
                        valor={sup_terreno} 
                        icono={<i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>} 
                        unidad='m²'
                     /> */}
                  </div>
               </div>
            </div>
         {/* </Link> */}
      </div>
   )
}