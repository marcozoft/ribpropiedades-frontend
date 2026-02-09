"use client"

import dynamic from 'next/dynamic';
import { PropiedadDetalle } from '@/src/interfaces';

type Props = {
   propiedad: PropiedadDetalle;
   className?: string;
}

export const MapaPropiedad = ({ ...props }: Props) => {

   const MapaPropiedadClient = dynamic(() => import('@/src/components/mapa-propiedades/MapaPropiedadClient'), { ssr: false });

   return (
      <MapaPropiedadClient {...props} />
   )
}
