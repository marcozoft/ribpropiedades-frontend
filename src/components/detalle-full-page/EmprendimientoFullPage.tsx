import { EmprendimientoIdResponse } from '@/src/interfaces'
import { SeccionEmprendimiento, SeccionImagenes, SeccionPropiedad } from './detalle-full-page-components'
import { FormularioContacto } from './detalle-full-page-components/FormularioContacto'
import { secondaryFont } from '@/src/config/fonts'


type Props = {
  emprendimientoResponse: EmprendimientoIdResponse
}

export const EmprendimientoFullPage = ({emprendimientoResponse}: Props) => {

  const { emprendimiento, imagenes } = emprendimientoResponse;

  return (
    <div className='bg-white'>
      {/* Carouse imagenes + titulo + precio */}
      <SeccionImagenes 
        imagenes={imagenes} 
        titulo={emprendimiento.nombre}
      />

      {/* Secciones propiedad + emprendimiento */}
      <div className='max-w-6xl mx-auto flex px-4 py-8 pb-20'>
        <section className='xl:basis-2/3 px-4 scroll-mt-33' id="descripcion">
          <div className="flex justify-between mb-10 items-center">
            <h1 className="font-semibold text-4xl mt-4 text-black">{emprendimiento.nombre}</h1>
          </div>
          <div className="mt-10">
            <h2 className="font-bold text-black text-xl my-4"><span className="text-foreground">|&nbsp;</span>Descripción</h2>
            <p className={`${secondaryFont.className} text-black text-lg`}>{emprendimiento.descripcion_larga}</p>
            </div>
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
