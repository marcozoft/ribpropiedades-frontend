"use client"

import dynamic from 'next/dynamic';
import { PropiedadBasico } from '@/src/interfaces';

type Props = {
    propiedades: PropiedadBasico[];
}

export const MapaPropiedades = ({propiedades}: Props) => {

    const MapaPropiedadesClient = dynamic(() => import('@/src/components/mapa-propiedades/MapaPropiedadesClient'), {ssr: false});

    return (
        <div className="col-span-4 top-16 h-screen">
            <MapaPropiedadesClient propiedades={propiedades}/>
        </div>
    )
}
