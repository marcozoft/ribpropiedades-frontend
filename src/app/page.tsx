import { CarouselLanzamientos, PropiedadesGrid } from "../components";
import { Contactanos, Lanzamientos, Nosotros, Seleccion } from "../components/home-secciones";
import { propiedadesSeeed } from "../seed/propiedades";

export default function HomePage() {
  return(
   <>
    <Lanzamientos />
    <Seleccion />
    <Nosotros />
    <Contactanos />
    <PropiedadesGrid propiedades={propiedadesSeeed.propiedades} />
   </>
  )
}