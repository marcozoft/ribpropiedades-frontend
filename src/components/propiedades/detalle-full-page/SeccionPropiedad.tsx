import { secondaryFont } from "@/src/app/config/fonts";
import { PropiedadDetalle } from "@/src/interfaces"
import { IndicadorPrecio } from "../propiedad-card";

type SeccionPropiedadProps = {
  propiedad: PropiedadDetalle
}

export const SeccionPropiedad = ({propiedad}: SeccionPropiedadProps) => {

  const { 
    titulo_venta,
    operacion,
    descripcion_larga,
    precio,
    precio_publico,
  } = propiedad;


  const { aberturas } = propiedad;
    // console.log(descripcion_larga);

  return (
    
    <section id="descripcion" className="scroll-mt-33" >
      <div className="flex justify-between mb-8">
        <span className="bg-foreground text-white uppercase text-sm py-0.5 px-1.5">{operacion}</span>
      </div>
      
      <div className="flex justify-between mb-10 items-center">
        <h1 className="font-semibold text-4xl mt-4 text-black">{titulo_venta}</h1>
        {/* <span className="font-bold text-2xl">{precio}</span> */}
        <IndicadorPrecio precio={precio} precio_condicion={precio_publico} moneda="u$d" sinEspecificar="Consultar"/>
      </div>

      <h2 className="font-bold text-black text-xl my-4"><span className="text-foreground">|&nbsp;</span>Descripción</h2>
      
      {/* TODO: Decidir si lleva HTML o no */}
      {/* <p className={`${secondaryFont.className} text-black text-lg`} dangerouslySetInnerHTML={{ __html: descripcion_larga }}></p> */}
      <p className={`${secondaryFont.className} text-black text-lg`}>{ descripcion_larga }</p>


      {/* Detalles enumerados */}
      <h2 className="font-bold text-black text-xl my-4"><span className="text-foreground">|&nbsp;</span>Detalles</h2>

      <div className="bg-background px-5 py-6 grid grid-cols-2">
        <p className="text-sm text-black my-2">Baños: <span className="font-bold">4</span></p>
        <p className="text-sm text-black my-2">Baños: <span className="font-bold">4</span></p>
        <p className="text-sm text-black my-2">Baños: <span className="font-bold">4</span></p>
        <p className="text-sm text-black my-2">Baños: <span className="font-bold">4</span></p>
        <p className="text-sm text-black my-2">Baños: <span className="font-bold">4</span></p>
        <p className="text-sm text-black my-2">Baños: <span className="font-bold">4</span></p>
      </div>

      {/* Video */}
      <h2 className="font-bold text-black text-xl my-4"><span className="text-foreground">|&nbsp;</span>Video</h2>


    </section>


  )
}
