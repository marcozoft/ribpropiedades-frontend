import { ReactElement } from "react";


type IndicadorProps = {
   nombre:     string;
   valor:      number;
   unidad?:     string;
   icono:      ReactElement;
}

export const IndicadorNumerico = ({nombre, valor, unidad, icono}:IndicadorProps) => {
   return (
      <p className="flex items-center text-gray-800">
         <span className=''>{nombre}:</span>
         <span>
            {icono}
            {valor}
         </span>
         
      </p>
   )
}
