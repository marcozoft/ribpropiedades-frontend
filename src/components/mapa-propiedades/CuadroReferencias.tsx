import { CapaDeInteres } from "@/src/interfaces";
import Image from "next/image"

type Props = {
   capasDeInteres: CapaDeInteres[];
   className?: string;
}
export const CuadroReferencias = ({capasDeInteres, className}: Props) => {
   
   return (
      <div className={`flex flex-col gap-2 bg-white rounded-lg shadow-lg p-2 ${className}`}>

         {/* Título */}
         <div className="flex items-center justify-center gap-2 px-2 py-1 border-b">
            {/* <Layers className="w-4 h-4" /> */}
            <span className="text-sm font-semibold">Referencias</span>
         </div>
         {
            capasDeInteres.map(({ icon, label }) => (
               <div key={label} className="flex items-center justify-start gap-2">
                  <Image src={icon} alt={label} width={32} height={32} />
                  <span className="text-sm">{label}</span>
               </div>)
            )
         }
      </div>
   )
}
