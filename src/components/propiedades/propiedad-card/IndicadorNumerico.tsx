import { ReactElement } from "react";


type IndicadorProps = {
   nombre:     string;
   valor:      number;
   unidad?:    string;
   icono:      ReactElement;
}

export const IndicadorNumerico = ({nombre, valor, icono}:IndicadorProps) => {
   return (
      <div className="text-black">
         <div>
            <p className="flex items-center">
               <span className="text-xs">
                  {valor}&nbsp;
                  {icono}
               </span>
            </p>
         </div>
         <div>
            <span className='font-light text-xs'>{nombre}</span>
         </div>
      </div>
   )
}
