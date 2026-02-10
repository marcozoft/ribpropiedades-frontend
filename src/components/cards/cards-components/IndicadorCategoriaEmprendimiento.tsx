import { CATEGORIAS_EMPRENDIMIENTOS } from "@/src/constants/form-constants";

type Props = {
   categoriaEmprendimiento: string;
}
export const IndicadorCategoriaEmprendimiento = ({categoriaEmprendimiento}:Props) => {
  return (
      <p className='text-foreground text-md uppercase'>
         { CATEGORIAS_EMPRENDIMIENTOS.find(item => item.valor === categoriaEmprendimiento)?.label }
      </p>
  )
}
