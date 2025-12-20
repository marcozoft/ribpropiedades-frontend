"use client"

import dynamic from 'next/dynamic';
import { PropiedadMapa } from '@/src/interfaces';

type Props = {
    propiedades: PropiedadMapa[]
}

export const MapaPropiedades = ({propiedades}: Props) => {

    const MapaPropiedadesClient = dynamic(() => import('@/src/components/mapa-propiedades/MapaPropiedadesClient'), {ssr: false});

    return (
        <MapaPropiedadesClient propiedades={propiedades}/>
    )
}
