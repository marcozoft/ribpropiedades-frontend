import { CarouselLanzamientos, PropiedadesGrid } from "../components";
import { Contactanos, Filters, Lanzamientos, Nosotros, Seleccion, Servicios, VideoCarousel } from "../components/home-secciones";
import { propiedadesSeeed } from "../seed/propiedades";

export default function HomePage() {
  return(
   <>
    <VideoCarousel />
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