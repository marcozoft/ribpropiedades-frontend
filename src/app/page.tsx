import {  
  SeccionComentarios, 
  SeccionContactanos, 
  SeccionBuscadorLanzamientos, 
  SeccionNosotros, 
  SeccionSeleccion, 
  SeccionServicios, 
  SeccionVideo
} from "../components/home-secciones";


export default function HomePage() {

  return(
   <>
    <SeccionVideo />
    <SeccionBuscadorLanzamientos />
    <SeccionSeleccion />
    <SeccionNosotros />
    <SeccionServicios />
    <SeccionContactanos />
    <SeccionComentarios />
   </>
  )
}