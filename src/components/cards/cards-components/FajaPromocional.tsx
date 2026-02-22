type FajaPromocionalProps = {
   descripcion: string
}

export const FajaPromocional = ({ descripcion }: FajaPromocionalProps) => {
   return (
      <span className="absolute inline-flex top-0 right-2 z-2 mt-3 ml-3 select-none bg-foreground px-2 py-1 text-xs uppercase text-white">
         {descripcion}
      </span>
   )
}
