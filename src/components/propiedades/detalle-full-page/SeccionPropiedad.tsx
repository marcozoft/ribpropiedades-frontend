import { PropiedadDetalle } from "@/src/interfaces"

type SeccionPropiedadProps = {
  propiedad: PropiedadDetalle
}

export const SeccionPropiedad = ({propiedad}: SeccionPropiedadProps) => {

  const { 
    titulo_venta,
    descripcion_larga,
  } = propiedad;


  return (
    <div>
      <h1 className="font-semibold text-2xl mt-4">{titulo_venta}</h1>
      {/* <p>{descripcion_corta}</p> */}
      <p>{descripcion_larga}</p>
      {/* <p className="text-gray-900" dangerouslySetInnerHTML={{ __html: descripcion_larga }}></p> */}
    </div>


  )
}
