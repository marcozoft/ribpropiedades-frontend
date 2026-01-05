import { ReactElement } from "react";


type IndicadorProps = {
   className?: string;
   nombre:     string;
   valor?:     number;
   unidad?:    string;
   icono:      ReactElement;
}

export const IndicadorNumerico = ({nombre, valor, unidad, icono, className}:IndicadorProps) => {
      
   return valor === 0 ? null : (
      <div className={`text-black ${className} px-2 py-1`}>
         <div>
            <p className="flex items-center">
               <span className="text-lg font-medium">
                  {valor}
               </span>
               &nbsp;
               <span className="text-xs">
                  {unidad}
               </span>
               &nbsp;
               {icono}
            </p>
         </div>
         <div>
            <span className='font-light text-xs'>{nombre}</span>
         </div>
      </div>
   )
}
