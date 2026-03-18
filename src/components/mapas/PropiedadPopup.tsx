import { PropiedadBasico } from '@/src/interfaces'
import Image from 'next/image'
import Link from 'next/link';
import { generateHrefPropiedad, generateSrcImage } from '@/src/utils';
import { primaryFont } from '@/src/config/fonts';

type Props = {
   propiedad: PropiedadBasico
   className?: string;
}

export const PropiedadPopup = ({ propiedad }: Props) => {

   const {
      codigo,
      id,
      imagen_principal,
      titulo_venta,
      precio,
      precio_publico,
      dormitorios,
      sup_total,
   } = propiedad;
   

   return (

      <div className={`bg-white ${primaryFont.className} rounded-lg shadow-lg overflow-hidden w-70 hover:shadow-xl transition-shadow duration-200`}>

         {/* Imagen */}
         {/* TODO: Carousel */}
         <div className="">
            <Image
               className="w-full h-full aspect-video"
               src={generateSrcImage(imagen_principal)}
               width={280}
               height={180}
               alt={codigo}
               priority={false}
            />
         </div>

         {/* Contenido */}
         <div className="p-3">

            <Link
               href={generateHrefPropiedad(id, titulo_venta)}
               target="_blank"
               rel="noopener noreferrer"
               className="block"
            >

               {/* Precio y características */}
               <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                     <span className="text-lg font-semibold text-gray-900">
                        {
                           precio_publico == 1 ?  `U$D ${precio.toLocaleString("es-AR")}` : `Consultar precio` 
                        }
                     </span>
                  </div>
               </div>

               {/* Título/Descripción - truncado */}
               <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
                  {titulo_venta}
               </h3>

               {/* Características en fila */}
               <div className="flex items-center gap-3 text-xs text-gray-600">
                  {
                     (dormitorios > 0) && (
                        <div className="flex items-center gap-1">
                           <i className="flaticon-bed text-gray-500"></i>
                           <span>{dormitorios}</span>
                        </div>
                     )
                  }
                  {
                     (sup_total > 0) && (
                        <div className="flex items-center gap-1">
                           <i className="flaticon-square-shape-design-interface-tool-symbol text-gray-500"></i>
                           <span>{sup_total} m²</span>
                        </div>
                     )
                  }
               </div>
            </Link>
         </div>
      </div>
   )
}