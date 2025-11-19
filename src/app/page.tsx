import { Contactanos, SeccionBuscador, Lanzamientos, Nosotros, Opiniones, Seleccion, Servicios, Video } from "../components/home-secciones";

export default function HomePage() {
  return(
   <>
    <Video />
    <SeccionBuscador />
    <Lanzamientos />
    <Seleccion />
    <Nosotros />
    <Servicios />
    <Contactanos />
    <Opiniones />
   </>
  )
}