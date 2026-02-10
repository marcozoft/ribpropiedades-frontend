"use client"

import dynamic from 'next/dynamic';

type Props = {
   latitud: number;
   longitud: number;
   className?: string;
}

export const MapaPropiedad = ({ ...props }: Props) => {

   const MapaPropiedadClient = dynamic(() => import('@/src/components/mapa-propiedades/MapaPropiedadClient'), { ssr: false });

   return (
      <MapaPropiedadClient {...props} />
   )
}
