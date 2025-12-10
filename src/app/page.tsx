import { 
  SeccionBuscador, 
  SeccionComentarios, 
  SeccionContactanos, 
  SeccionLanzamientos, 
  SeccionNosotros, 
  SeccionSeleccion, 
  SeccionServicios, 
  SeccionVideo,
} from "../components/home-secciones";


export default function HomePage() {

  return(
   <>
    <SeccionVideo />
    <SeccionBuscador />
    <SeccionLanzamientos />
    <SeccionSeleccion />
    <SeccionNosotros />
    <SeccionServicios />
    <SeccionContactanos />
    <SeccionComentarios />
   </>
  )
}