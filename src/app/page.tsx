import { PropiedadesGrid } from "../components";
import { Contactanos, Filters, Lanzamientos, Nosotros, Opiniones, Seleccion, Servicios, Video } from "../components/home-secciones";
import { propiedadesSeeed } from "../seed/propiedades";

export default function HomePage() {
  return(
   <>
    <Video />
    <Filters />
    <Lanzamientos />
    <Seleccion />
    <Nosotros />
    <Servicios />
    <Contactanos />
    <Opiniones />
   </>
  )
}