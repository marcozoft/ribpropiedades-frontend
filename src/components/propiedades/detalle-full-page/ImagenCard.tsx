import { Imagen } from "@/src/interfaces"
import { generateSrcImage } from "@/src/utils"
import Image from "next/image"

export type ImageProps = {
   imagen: Imagen
}

export const ImagenCard = ({imagen}: ImageProps) => {
  return (
    <div className="bg-amber-800">
      <Image
        src={generateSrcImage(imagen.imagen)} 
        key={imagen.orden}
        width={200}
        height={200}
        alt={imagen.imagen} 
        />
    </div>
  )
}
