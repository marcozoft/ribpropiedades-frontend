"use client"

import dynamic from 'next/dynamic';
import { PropiedadBasico } from '@/src/interfaces';
import { useEffect, useState } from 'react';
import { hasWebGL } from '@/src/utils';
import { useRouter } from 'next/navigation';
import { MapaNoSoportado } from '@/src/components';

type Props = {
   propiedades: PropiedadBasico[];
   className?: string;
}

export const MapaPropiedadesFull = ({ className, ...props }: Props) => {

   const [supported, setSupported] = useState<boolean>(true);
   const MapaPropiedadesFullClient = dynamic(() => import('@/src/components/mapa-propiedades/MapaPropiedadesFullClient'), { ssr: false });
   const router = useRouter();

   useEffect(() => {
      if (!hasWebGL()) {
         setSupported(false);
      }
   }, [router]);


   return (
      supported
         ? <MapaPropiedadesFullClient className={className} {...props} />
         : <MapaNoSoportado className={className} />
         
   )
}
