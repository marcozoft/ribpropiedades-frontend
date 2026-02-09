import { secondaryFont } from "@/src/config/fonts";
import { PropiedadDetalle } from "@/src/interfaces"
import { DetallesGrid, YouTubeVideoCard, GoogleMapsCard } from '.';
import { IndicadorNumerico, IndicadorPrecio, MapaPropiedadesFull } from '@/src/components';

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
    video,
    mapa_latitud,
    mapa_longitud,
    sup_total,
    sup_terreno,
    zona,
  } = propiedad;  

  return (    
    <section id="descripcion" className="scroll-mt-28" >
      
      {/* Titulo, operacion y precio */}
      <div className="flex justify-between mb-8">
        <span className="bg-foreground text-white uppercase text-sm py-0.5 px-1.5">{operacion}</span>
      </div>
      <div className="flex justify-between mb-10 items-center">
        <h1 className="font-semibold text-xl lg:text-3xl xl:text-4xl mt-4 text-black">{titulo_venta}</h1>
        <IndicadorPrecio precio={precio} precio_condicion={precio_publico} moneda="U$D" sinEspecificar="Consultar"/>
      </div>

      {/* Detalles enumerados */}
      <h2 className="font-bold text-black text-xl mt-8 mb-4"><span className="text-foreground">|&nbsp;</span>Detalles</h2>

        <div className="justify-center">
          <div className="my-5 gap-2 flex overflow-hidden rounded-lg divide-x">

            {/* Zona/localidad */}
            <IndicadorNumerico 
              nombre={zona} 
              icono={<i className="flaticon-pin text-black"></i>} 
              unidad=''
            />

            {/* superficie total m2 */}
            <IndicadorNumerico 
              nombre='Sup. Total' 
              valor={sup_total} 
              icono={<i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>} 
              unidad='m²'
            />
            {/* superficie terreno m2 */}
            <IndicadorNumerico 
              nombre='Sup. Terreno' 
              valor={sup_terreno} 
              icono={<i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>} 
              unidad='m²'
            />
          </div>
        </div>


        <DetallesGrid
          propiedad={ propiedad }
          detalles={[
            { descripcion: 'Estilo',                  clave: 'estilo' },
            { descripcion: 'Nro. de plantas',         clave: 'plantas'},
            { descripcion: 'Dormitorios',             clave: 'dormitorios'},
            { descripcion: 'Dormitorios en suite',    clave: 'dormitorio_suite'},
            { descripcion: 'Estado',                  clave: 'estado'},
            { descripcion: 'Antiguedad',              clave: 'antiguedad'},
            { descripcion: 'Lote',                    clave: 'lote'},
            { descripcion: 'Tipo de zona',            clave: 'tipo_zona'},
            { descripcion: 'Tipo de calefacción',     clave: 'calefaccion'},
            { descripcion: 'Aberturas',               clave: 'aberturas'},
          ]}/>

      {/* Descripcion */}
      <h2 className="font-bold text-black text-xl mt-8 mb-4"><span className="text-foreground">|&nbsp;</span>Descripción</h2>
    
      {/* Descripcion larga */}
      <p className={`${secondaryFont.className} text-black text-lg`}>{ descripcion_larga }</p>

      {/* Video (opcional) */}
      {
        video && (
          <>
            <h2 className="font-bold text-black text-xl my-8"><span className="text-foreground">|&nbsp;</span>Video</h2>
            <YouTubeVideoCard youTubeId={video}/>
          </>
        )
      }
      {/* Google Maps */}
      <h2 className="font-bold text-black text-xl my-8"><span className="text-foreground">|&nbsp;</span>Ubicación</h2>
      
      <MapaPropiedadesFull propiedades={[]} className="h-80 relative" />
      {/* <GoogleMapsCard 
        lng={mapa_longitud}
        lat={mapa_latitud}
      /> */}



    </section>


  )
}
