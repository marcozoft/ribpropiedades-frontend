"use client"

import dynamic from 'next/dynamic';
import { PropiedadBasico } from '@/src/interfaces';

type Props = {
   propiedades: PropiedadBasico[];
   className?: string;
}

export const MapaPropiedadesFull = ({ ...props }: Props) => {

   const MapaPropiedadesFullClient = dynamic(() => import('@/src/components/mapa-propiedades/MapaPropiedadesFullClient'), { ssr: false });

   return (
      <MapaPropiedadesFullClient {...props} />
   )
}
