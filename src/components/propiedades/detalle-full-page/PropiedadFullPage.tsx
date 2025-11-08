import { PropiedadDetalleResponse } from '@/src/interfaces'
import { SeccionEmprendimiento, SeccionImagenes, SeccionPropiedad } from '.'


type PropiedadDetalleProps = {
  propiedadResponse: PropiedadDetalleResponse
}

export const PropiedadFullPage = ({propiedadResponse}: PropiedadDetalleProps) => {

  console.log(propiedadResponse.propiedad);

  return (
    <div className='bg-white'>
      <SeccionImagenes 
        imagenes={propiedadResponse.imagenes} 
        titulo={propiedadResponse.propiedad.titulo_venta}
        operacion={propiedadResponse.propiedad.operacion}
      />
      <section className='max-w-6xl mx-auto px-4 py-10'>
        <SeccionPropiedad propiedad={propiedadResponse.propiedad}/>
        <SeccionEmprendimiento emprendimiento={propiedadResponse.emprendimiento}/>
      </section>
    </div>
  )
}

        // <div className="flex flex-col items-start max-w-6xl mx-auto justify-center px-4 pt-8">
