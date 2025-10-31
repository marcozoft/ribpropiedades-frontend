type IndicadorPrecioProps = {
   precio:              number;
   precio_condicion:    number;
   moneda:              string;
   sinEspecificar:      string;
}

// TODO: Formatear con miles el precio
export const IndicadorPrecio = ({ precio, moneda, precio_condicion, sinEspecificar }: IndicadorPrecioProps) => {
   return (
      <p className="text-primary text-2xl mt-2 inline-block whitespace-nowrap font-bold leading-tight text-black">
         {
            precio_condicion == 1 ?  `${moneda} ${precio.toLocaleString()}` : `${sinEspecificar}`
         }
      </p>
   )
}
