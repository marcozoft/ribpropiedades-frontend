import { PropiedadDetalleResponse } from '@/src/interfaces'
import { SeccionEmprendimiento, SeccionImagenes, SeccionPropiedad } from './detalle-full-page-components'
import { FormularioContacto } from './detalle-full-page-components/FormularioContacto'


type PropiedadDetalleProps = {
  propiedadResponse: PropiedadDetalleResponse
}

export const PropiedadFullPage = ({propiedadResponse}: PropiedadDetalleProps) => {

  return (
    <div className='bg-white pb-20'>
      {/* Carouse imagenes + titulo + precio */}
      <SeccionImagenes 
        imagenes={propiedadResponse.imagenes} 
        titulo={propiedadResponse.propiedad.titulo_venta}
        operacion={propiedadResponse.propiedad.operacion}
      />

      {/* Secciones propiedad + emprendimiento */}
      <div className='max-w-6xl mx-auto flex px-4 py-8 pb-20'>
        <section className='xl:basis-2/3 px-4'>
          <SeccionPropiedad propiedad={propiedadResponse.propiedad}/>
          <SeccionEmprendimiento emprendimiento={propiedadResponse.emprendimiento}/>
        </section>

        {/* formulario de contacto */}
        <section className='hidden xl:flex xl:basis-1/3 bg-background p-5'>
          {/* <p className=''>Formulario de contacto</p> */}
          {/* TODO:Formulario provisorio */}
          <FormularioContacto />
        </section>
      </div>
    </div>
  )
}
