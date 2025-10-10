import React from 'react'

type IndicadorProps = {
   nombre:     string;
   valor:      number;
   unidad?:    string;
}

export const IndicadorNumerico = ({nombre, valor, unidad}:IndicadorProps) => {
   return (
      <p className="flex items-center text-gray-800">
         <span className='font-bold'>{nombre}:</span>
         <span>{valor}</span>
         {
            unidad && <span>{unidad}</span>
         }
      </p>
   )
}
