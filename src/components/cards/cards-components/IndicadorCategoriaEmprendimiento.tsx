type Props = {
   categoriaEmprendimientoNombre: string;
}
export const IndicadorCategoriaEmprendimiento = ({categoriaEmprendimientoNombre}:Props) => {
  return (
      <p className='text-foreground text-md uppercase'>
         { categoriaEmprendimientoNombre }
      </p>
  )
}
