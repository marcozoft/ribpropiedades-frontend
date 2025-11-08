import { secondaryFont } from "@/src/app/config/fonts";
import { PropiedadDetalle } from "@/src/interfaces"

type SeccionPropiedadProps = {
  propiedad: PropiedadDetalle
}

export const SeccionPropiedad = ({propiedad}: SeccionPropiedadProps) => {

  const { 
    titulo_venta,
    operacion,
    descripcion_larga,
  } = propiedad;

    // console.log(descripcion_larga);

  return (
    
    <section id="descripcion" className="scroll-mt-33" >
      <span className="bg-foreground text-white uppercase text-sm py-0.5 px-1.5">{operacion}</span>
      <h1 className="font-semibold text-4xl mt-4 text-black">{titulo_venta}</h1>
      {/* <p>{descripcion_corta}</p> */}
      <h2 className="font-bold text-black text-xl my-4"><span className="text-foreground">|&nbsp;</span>Descripción</h2>
      
      {/* TODO: Decidir si lleva HTML o no */}
      {/* <p className={`${secondaryFont.className} text-black text-lg`} dangerouslySetInnerHTML={{ __html: descripcion_larga }}></p> */}
      <p className={`${secondaryFont.className} text-black text-lg`}>{ descripcion_larga }</p>

    </section>


  )
}
