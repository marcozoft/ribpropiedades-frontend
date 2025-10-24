import { PropiedadDetalleResponse } from '@/src/interfaces'
import { SeccionEmprendimiento, SeccionImagenes, SeccionPropiedad } from '.'


type PropiedadDetalleProps = {
  propiedadResponse: PropiedadDetalleResponse
}

export const PropiedadFullPage = ({propiedadResponse}: PropiedadDetalleProps) => {

  console.log(propiedadResponse.propiedad);

  return (
    <div className="container min-h-screen">
      <SeccionImagenes imagenes={propiedadResponse.imagenes}/>
      <SeccionPropiedad propiedad={propiedadResponse.propiedad}/>
      <SeccionEmprendimiento emprendimiento={propiedadResponse.emprendimiento}/>
    </div>
  )
}
