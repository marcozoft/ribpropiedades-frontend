import { EmprendimientoBasico } from "@/src/interfaces"
import Link from "next/link";

type SeccionEmprendimientoProps = {
  emprendimiento: EmprendimientoBasico
}

export const SeccionEmprendimiento = ({emprendimiento}: SeccionEmprendimientoProps) => {

  const { 
    nombre,
    descripcion_corta,
  } = emprendimiento;



  return (
    <div>
        <h1 className="font-semibold text-2xl mt-4">Acerca de {nombre}</h1>
        <p>{descripcion_corta}</p>
        <Link href={'/emprendimientos/2542'}>Conocé el barrio</Link>
    </div>
  )
}
