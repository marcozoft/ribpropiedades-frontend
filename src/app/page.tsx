import { Contactanos, SeccionBuscador, Lanzamientos, Nosotros, Opiniones, Seleccion, Servicios, Video } from "../components/home-secciones";
import { getAllComentarios } from "../requests";



export default async function HomePage() {

  const comentariosResponse = await getAllComentarios();
  


  return(
   <>
    <Video />
    <SeccionBuscador />
    <Lanzamientos />
    <Seleccion />
    <Nosotros />
    <Servicios />
    <Contactanos />
    <Opiniones comentarios={comentariosResponse.comentarios}  />
   </>
  )
}