import { CarouselLanzamientos, PropiedadesGrid } from "../components";
import { Contactanos, Filters, Lanzamientos, Nosotros, Seleccion, Servicios, Video } from "../components/home-secciones";
import { PlaygroundComponent } from "../components/PlaygroundComponent";
import { propiedadesSeeed } from "../seed/propiedades";

export default function HomePage() {
  return(
   <>
    {/* <PlaygroundComponent /> */}
    <Video />
    <Filters />
    <Lanzamientos />
    <Seleccion />
    <Nosotros />
    <Servicios />
    <Contactanos />
    <PropiedadesGrid propiedades={propiedadesSeeed.propiedades} />
   </>
  )
}