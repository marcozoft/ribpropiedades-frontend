type Props = {
   tipoDeOperacion: string;
   tipoDeInmueble: string;
}

export const IndicadorOperacion = ({tipoDeInmueble, tipoDeOperacion}:Props) => {
   return (
      <p className="text-foreground text-lg uppercase">{tipoDeOperacion}</p>
   )
}
