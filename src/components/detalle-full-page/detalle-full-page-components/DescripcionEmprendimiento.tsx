import { secondaryFont } from "@/src/config/fonts";
import { EmprendimientoBasico } from "@/src/interfaces"
import { RoundedButton } from '@/src/components';
import { generateHrefEmprendimiento } from "@/src/utils";

type SeccionEmprendimientoProps = {
  emprendimiento: EmprendimientoBasico
}

export const SeccionEmprendimiento = ({emprendimiento}: SeccionEmprendimientoProps) => {

  const { 
    nombre,
    descripcion_corta,
    id,
  } = emprendimiento;  

  return (
    <div className="mt-10">
      <h2 className="font-bold text-black text-xl my-4"><span className="text-foreground">|&nbsp;</span>Acerca de {nombre}</h2>
      <p className={`${secondaryFont.className} text-black text-lg`}>{descripcion_corta}</p>
      <RoundedButton className='my-4' href={generateHrefEmprendimiento(id, nombre)} text="Conocé el barrio"/>
    </div>
  )
}
