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
   startCollapsed?: boolean;
}

export const FiltersBar = ({className, startCollapsed = false, ...rest}: Props) => {

   const [iaModeActive, setIaModeActive] = useState(!!rest.filterValues.queryAI);
   const [isExpanded, setIsExpanded] = useState(!startCollapsed);

   const toggleIaMode = () => {
      setIaModeActive(!iaModeActive);
   };
   
   const handleExpanded = (expanded: boolean) => {
      setIsExpanded(expanded);
   }

   return (
      <div className={`flex flex-col md:flex-row items-stretch md:items-center justify-center rounded-xl shadow-xl z-20 gap-4 px-4 py-4 md:px-6 md:py-5 max-w-5xl mx-auto ${className}`}>
         {
            iaModeActive
               ? <AISearch initialQuery={rest.filterValues.queryAI}/>
               : <ClasicSearch 
                  {...rest} 
                  isExpanded={isExpanded}
                  onToggleExpand={handleExpanded}
                 />
         }

         {/* Boton switch IA / Clasic */}
         <div className={`flex items-center justify-center gap-3 md:block pt-2 md:pt-0 border-t md:border-t-0 border-gray-100 dark:border-gray-800 ${!isExpanded ? 'hidden md:block' : ''}`}>
            
             {/* Mobile Label */}
             {!iaModeActive && <span className="md:hidden font-medium text-muted-foreground uppercase text-xs tracking-wider">Buscador Inteligente</span>}

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
