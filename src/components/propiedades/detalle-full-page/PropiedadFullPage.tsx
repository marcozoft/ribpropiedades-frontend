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
      <div className='max-w-6xl mx-auto flex px-4 py-8'>
        {/* <section className='max-w-6xl mx-auto px-4 py-10'> */}
        <section className='xl:basis-2/3 px-4'>
          <SeccionPropiedad propiedad={propiedadResponse.propiedad}/>
          <SeccionEmprendimiento emprendimiento={propiedadResponse.emprendimiento}/>
        </section>

        <section className='hidden xl:flex xl:basis-1/3 bg-background items-center'>
          <p>Formulario de contacto</p>
        </section>
      </div>
    </div>
  )
}

        // <div className="flex flex-col items-start max-w-6xl mx-auto justify-center px-4 pt-8">
