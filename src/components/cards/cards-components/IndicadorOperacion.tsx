type Props = {
   tipoDeOperacion: string;
   tipoDeInmueble: string;
   zona: string;
}

export const IndicadorOperacion = ({tipoDeOperacion, tipoDeInmueble, zona}:Props) => {
   return (
      <p className="text-foreground text-md uppercase">{zona} - {tipoDeInmueble} - {tipoDeOperacion}</p>
      
   )
}
