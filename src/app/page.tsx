import { PropiedadesGrid } from "../components";
import { Contactanos, Buscador, Lanzamientos, Nosotros, Opiniones, Seleccion, Servicios, Video } from "../components/home-secciones";
import { propiedadesSeeed } from "../seed/propiedades";

export default function HomePage() {
  return(
   <>
    <Video />
    <Buscador />
    <Lanzamientos />
    <Seleccion />
    <Nosotros />
    <Servicios />
    <Contactanos />
    <Opiniones />
   </>
  )
}