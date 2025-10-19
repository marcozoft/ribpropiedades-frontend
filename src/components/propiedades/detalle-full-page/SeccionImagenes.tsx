import { Imagen } from "@/src/interfaces"
import { ImagenCard } from "./ImagenCard";

type SeccionImagenesProps = {
  imagenes: Imagen[];
}


export const SeccionImagenes = ({ imagenes }: SeccionImagenesProps) => {
  return (
    <div className="grid grid-cols-10 debug">
      {
        imagenes.map(imagen => (
          <ImagenCard imagen={imagen} key={imagen.orden}/>
        )) 
      }
    </div>
  )
}
      