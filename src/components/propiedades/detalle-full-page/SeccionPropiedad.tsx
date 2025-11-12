import { secondaryFont } from "@/src/app/config/fonts";
import { PropiedadDetalle } from "@/src/interfaces"
import { IndicadorPrecio } from "../propiedad-card";
import { DetallesGrid, YouTubeVideoCard } from './.';

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
    video
  } = propiedad;

  return (    
    <section id="descripcion" className="scroll-mt-33" >
      
      {/* Titulo, operacion y precio */}
      <div className="flex justify-between mb-8">
        <span className="bg-foreground text-white uppercase text-sm py-0.5 px-1.5">{operacion}</span>
      </div>
      <div className="flex justify-between mb-10 items-center">
        <h1 className="font-semibold text-4xl mt-4 text-black">{titulo_venta}</h1>
        <IndicadorPrecio precio={precio} precio_condicion={precio_publico} moneda="u$d" sinEspecificar="Consultar"/>
      </div>

      {/* Descripcion */}
      <h2 className="font-bold text-black text-xl my-4"><span className="text-foreground">|&nbsp;</span>Descripción</h2>
      
      {/* TODO: Decidir si lleva HTML o no */}
      {/* Descripcion larga */}
      {/* <p className={`${secondaryFont.className} text-black text-lg`} dangerouslySetInnerHTML={{ __html: descripcion_larga }}></p> */}
      <p className={`${secondaryFont.className} text-black text-lg`}>{ descripcion_larga }</p>


      {/* Detalles enumerados */}
      <h2 className="font-bold text-black text-xl my-8"><span className="text-foreground">|&nbsp;</span>Detalles</h2>
      <DetallesGrid
        propiedad={ propiedad }
        detalles={[
          { descripcion: 'Estilo',                  clave: 'estilo' },
          { descripcion: 'Nro. de plantas',         clave: 'plantas'},
          { descripcion: 'Ambientes',               clave: 'ambientes'},
          { descripcion: 'Dormitorios',             clave: 'dormitorios'},
          { descripcion: 'Dormitorios en suite',    clave: 'dormitorio_suite'},
          { descripcion: 'Estado',                  clave: 'estado'},
          { descripcion: 'Antiguedad',              clave: 'antiguedad'},
          { descripcion: 'Lote',                    clave: 'lote'},
          { descripcion: 'Tipo de zona',            clave: 'tipo_zona'},
          { descripcion: 'Tipo de calefacción',     clave: 'calefaccion'},
          { descripcion: 'Aberturas',               clave: 'aberturas'},
        ]}/>

      {/* Video */}
      <h2 className="font-bold text-black text-xl my-8"><span className="text-foreground">|&nbsp;</span>Video</h2>
      <YouTubeVideoCard youTubeId={video}/>


    </section>


  )
}
