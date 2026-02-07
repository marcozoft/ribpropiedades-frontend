"use client"

import dynamic from 'next/dynamic';
import { PropiedadBasico } from '@/src/interfaces';

type Props = {
   propiedades: PropiedadBasico[];
   className?: string;
}

export const MapaPropiedades = ({ ...props }: Props) => {

   const MapaPropiedadesClient = dynamic(() => import('@/src/components/mapa-propiedades/MapaPropiedadesClient'), { ssr: false });

   return (
      <MapaPropiedadesClient {...props} />
   )
}
