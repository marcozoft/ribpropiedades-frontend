"use client"

import { CapaDeInteresEspecificacion } from "@/src/interfaces";
import Image from "next/image"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
   capasDeInteres: CapaDeInteresEspecificacion[];
   className?: string;
}
export const CuadroReferencias = ({capasDeInteres}: Props) => {
   const [isOpen, setIsOpen] = useState(true);
   
   return (
      <div className={`flex flex-col gap-2 bg-white rounded-lg shadow-lg p-2 lg:block lg:absolute left-4 top-20 z-10`}>

         {/* Título */}
         <div 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between gap-2 px-2 py-1 border-b cursor-pointer hover:bg-gray-50 transition-colors"
         >
            <span className="text-sm font-bold">Referencias</span>
            <ChevronDown 
               className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`}
            />
         </div>
         {isOpen && (
            <>
               {
                  capasDeInteres.map(({ icon, label }) => (
                     <div key={label} className="flex items-center justify-start gap-2">
                        <Image src={icon} alt={label} width={32} height={32} />
                        <span className="text-sm">{label}</span>
                     </div>)
                  )
               }
            </>
         )}
      </div>
   )
}
