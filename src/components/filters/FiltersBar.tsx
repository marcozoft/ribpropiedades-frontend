'use client'

import { useState } from "react";
import Lottie from 'lottie-react';
import { ClasicSearch } from "@/src/components";
import { ItemFilter, SearchParams } from "@/src/interfaces";
import ribIaAnimation from '@/public/lotties/rib_ia_lottie.json';

type Props = {
   zonas: ItemFilter[];
   operaciones: ItemFilter[];
   emprendimientos: ItemFilter[];
   dormitorios: ItemFilter[];
   ambientes?: ItemFilter[]; // TODO: Debe venir como parametro
   tipos_inmueble: ItemFilter[];
   filterValues: SearchParams;
   allControls?: boolean;
}

export const FiltersBar = (props: Props) => {

   const [iaModeActive, setIaModeActive] = useState(false);

   const toggleIaMode = () => {
      setIaModeActive(!iaModeActive);
   };

   return (
      <div className="flex items-center rounded bg-background z-20 gap-4 px-6 py-2 max-w-5xl mx-auto">
         <ClasicSearch {...props} />
         {/* Busqueda con IA */}
         <button
            type="button"
            onClick={toggleIaMode}
            className={`relative transition-all duration-200 rounded-lg p-1 ${iaModeActive
               ? 'bg-foreground/20 shadow-inner translate-y-0.5 scale-95 ring-2 ring-foreground/40'
               : 'hover:scale-105 hover:bg-foreground/5 active:translate-y-0.5'
               }`}
         >
            <Lottie
               className="h-14 w-14"
               animationData={ribIaAnimation}
               loop={true}
            />
         </button>
      </div>
   )
}
