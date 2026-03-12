"use client"

import { hasWebGL } from '@/src/utils';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { MapaNoSoportado } from '@/src/components';
import { FeatureCollection } from 'geojson';
import { FeatureCollectionExtended } from '@/src/interfaces';

type Props = {
   latitud: number;
   longitud: number;
   puntosDeInteres: FeatureCollectionExtended[];
   className?: string;
}

export const MapaPropiedad = ({ className, ...props }: Props) => {
   
   const [supported, setSupported] = useState<boolean | null>(null);
   const MapaPropiedadClient = dynamic(() => import('@/src/components/mapas/mapa-unica-propiedad/MapaPropiedadClient'), { ssr: false });

   useEffect(() => {
      setSupported(hasWebGL());
   }, []);

   return (
      supported 
         ? ( <MapaPropiedadClient className={className} {...props} /> )
         : ( <MapaNoSoportado className={className} /> )

   )
}
