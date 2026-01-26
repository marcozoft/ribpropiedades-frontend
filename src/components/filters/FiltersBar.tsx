'use client'

import { useState } from "react";
import Lottie from 'lottie-react';
import { AISearch, Button, ClasicSearch, Tooltip, TooltipContent, TooltipTrigger } from "@/src/components";
import { ItemFilter, SearchParams } from "@/src/interfaces";
import ribIaAnimation from '@/public/lotties/rib_ia_lottie.json';
import { Undo2 } from "lucide-react";

type Props = {
   zonas: ItemFilter[];
   operaciones: ItemFilter[];
   emprendimientos: ItemFilter[];
   dormitorios: ItemFilter[];
   ambientes?: ItemFilter[]; // TODO: Debe venir como parametro
   tipos_inmueble: ItemFilter[];
   filterValues: SearchParams;
   allControls?: boolean;
   className?: string;
}

export const FiltersBar = ({className, ...rest}: Props) => {

   const [iaModeActive, setIaModeActive] = useState(!!rest.filterValues.queryAI);

   const toggleIaMode = () => {
      setIaModeActive(!iaModeActive);
   };
   

   return (
      <div className={`flex items-center justify-center rounded z-20 gap-4 px-6 py-5 max-w-5xl mx-auto ${className}`}>
         {
            iaModeActive
               ? <AISearch initialQuery={rest.filterValues.queryAI}/>
               : <ClasicSearch {...rest} />
         }

         {/* Boton switch IA / Clasic */}
         <div className="flex">
            <Tooltip>
               <TooltipTrigger asChild>
                  <Button
                     className="border border-foreground"
                     variant="ghost"
                     type="submit"
                     size="icon"
                     onClick={toggleIaMode}
                  >
                     {
                        iaModeActive
                           ? <Undo2 />
                           : <Lottie
                              className="size-9"
                              animationData={ribIaAnimation}
                              loop={true}
                           />
                     }
                  </Button>
               </TooltipTrigger>
               <TooltipContent>
                  <p>{iaModeActive ? 'Volver a búsqueda con filtros' : 'Búsqueda con Inteligencia Artificial'}</p>
               </TooltipContent>
            </Tooltip>
         </div>
      </div>
   )
}
