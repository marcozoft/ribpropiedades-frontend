import { secondaryFont } from "@/src/app/config/fonts";
import { EmprendimientoBasico } from "@/src/interfaces"
import { RoundedButton } from '../../ui/buttons/RoundedButton';

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
        <h2 className="font-bold text-black text-xl my-4"><span className="text-foreground">|&nbsp;</span>Acerca de {nombre}</h2>
        <p className={`${secondaryFont.className} text-black text-lg`}>{descripcion_corta}</p>
        <RoundedButton href={'/emprendimientos/2542'} text="Conocé el barrio"/>
    </div>
  )
}
