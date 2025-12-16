type IndicadorPrecioProps = {
   nombre: string;
   className?: string;
}

export const NombreEmprendimiento = ({ className, nombre }: IndicadorPrecioProps) => {
   return (
      <p className={`text-primary text-2xl mt-2 inline-block whitespace-nowrap font-bold leading-tight ${className}`}>
         {nombre}
      </p>
   )
}
