type IndicadorPrecioProps = {
   precio:              number;
   precio_condicion:    number;
   moneda:              string;
   sinEspecificar:      string;
   className?:          string;
}

// TODO: Formatear con miles el precio
export const IndicadorPrecio = ({ precio, moneda, precio_condicion, sinEspecificar, className }: IndicadorPrecioProps) => {
   return (
      <p className={`text-primary text-2xl mt-2 inline-block whitespace-nowrap font-bold leading-tight ${className}`}>
         {
            precio_condicion == 1 ?  `${moneda} ${precio.toLocaleString()}` : `${sinEspecificar}`
         }
      </p>
   )
}
