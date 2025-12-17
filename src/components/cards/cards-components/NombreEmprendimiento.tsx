type IndicadorPrecioProps = {
   nombre: string;
   className?: string;
}

export const NombreEmprendimiento = ({ className, nombre }: IndicadorPrecioProps) => {
   return (
      <p className={`text-primary text-2xl mt-2 block font-bold leading-[1.875rem] h-[3.75rem] overflow-hidden line-clamp-2 ${className}`}>
         {nombre}
      </p>
   )
}
