import { PropiedadBasico } from "@/src/interfaces";
import { generateSrcImage } from "@/src/utils"
import Image from "next/image";
import { IndicadorBarrio } from '../cards/cards-components/IndicadorBarrio';
import { IndicadorOperacion } from '../cards/cards-components/IndicadorOperacion';
import { IndicadorPrecio } from '../cards/cards-components/IndicadorPrecio';
import { TituloDeVenta } from "../cards/cards-components";
import { IndicadorNumerico } from '../cards/cards-components/IndicadorNumerico';

type Props = {
   propiedad: PropiedadBasico
}

export const PopupPropiedad = ({ propiedad }: Props) => {

   const {
      codigo,
      imagen_principal,
      inmueble,
      operacion,
      precio_publico,
      precio,
      sup_total,
      titulo_venta,
      zona 
   } = propiedad;

   return (
      <div className=''>
         {/* <Link href={generateHrefPropiedad(id, titulo_venta)}> */}
            <div className="bg-white p-4 rounded-xs">
               <div className="relative flex justify-center overflow-hidden rounded-xs">

                  {/* Imagen */}
                  <div className="w-full">
                     <Image className="" src={generateSrcImage(imagen_principal)} width={950} height={534} alt={codigo} />
                  </div>

                  {/* Faja promocional */}
                  {/* {
                     faja_promocional && <FajaPromocional descripcion={faja_promocional} />
                  } */}
                  <IndicadorBarrio barrio={zona} />
               </div>

               <div className="mt-4">

                  {/* Tipo de operacion TODO: Agregar si es casa o depto ???*/}
                  <IndicadorOperacion 
                     tipoDeInmueble={inmueble} 
                     tipoDeOperacion={operacion}
                  />

                  {/* Precio */}
                  <IndicadorPrecio
                     className='text-black' 
                     precio={precio} 
                     precio_condicion={precio_publico} 
                     sinEspecificar='Consultar' 
                     moneda='U$D'
                  />
               </div>
               <div className="mt-4">
                  {/* Descripcion */}
                  <TituloDeVenta tituloVenta={titulo_venta} />
               </div>
               <div className="justify-center">
                  <div className="mt-4 flex gap-8 overflow-hidden rounded-lg px-1 py-1">

                     {/* superficie total m2 */}
                     <IndicadorNumerico 
                        nombre='Sup. Total' 
                        valor={sup_total} 
                        icono={<i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>} 
                        unidad='m²'
                     />

                     {/* superficie terreno m2 */}
                     <IndicadorNumerico 
                        nombre='Sup. Terreno' 
                        valor={sup_total} 
                        icono={<i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>} 
                        unidad='m²'
                     />
                  </div>
               </div>
            </div>
         {/* </Link> */}
      </div>
   )
}
