type Props = {
   tipo_inmueble?: string;
   operacion?: string;
   localidad?: string;
   cantidad?: number
}

export const TituloDescriptivo = ({tipo_inmueble, operacion, localidad, cantidad}: Props) => {
   return (
      <h1 className="text-5xl text-black font-bold">
         {/* TODO */}
         {/* {tipo_inmueble} {operacion && ` en ${operacion}`} { localidad && ` en ${localidad}`} */}
         Propiedades encontradas
      </h1>
   )
}
