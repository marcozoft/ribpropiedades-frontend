"use client"

import { hasWebGL } from '@/src/utils';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { MapaNoSoportado } from '@/src/components';

type Props = {
   latitud: number;
   longitud: number;
   className?: string;
}

export const MapaPropiedad = ({ className, ...props }: Props) => {
   
   const [supported, setSupported] = useState<boolean | null>(null);
   const MapaPropiedadClient = dynamic(() => import('@/src/components/mapa-propiedades/MapaPropiedadClient'), { ssr: false });

   useEffect(() => {
      setSupported(hasWebGL());
   }, []);

   return (
      supported 
         ? ( <MapaPropiedadClient className={className} {...props} /> )
         : ( <MapaNoSoportado className={className} /> )

   )
}
