import React from 'react'

type IndicadorPrecioProps = {
   precio:              number;
   precio_condicion:    number;
   moneda:              string;
   sinEspecificar:      string;
}

export const IndicadorPrecio = ({ precio, moneda, precio_condicion, sinEspecificar }: IndicadorPrecioProps) => {
   return (
      <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
         {
            precio_condicion == 1 
            ? (
               <>
                  <span className="text-sm uppercase">{moneda}</span>
                  <span className="text-2xl">{precio}</span>
               </>
            ) : (                
               <span className="text-2xl">{sinEspecificar}</span>
            )
         }
      </p>
   )
}
