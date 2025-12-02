import { Comentario } from "@/src/interfaces"
import { CarouselComentarios } from "../carousel-comentarios/CarouselComentarios"

type Props = {
  comentarios: Comentario[];
}

export const Opiniones = ({comentarios}: Props) => {
  
  return (
    <section className="bg-white py-30">
      
      <div className="text-center">
        <span className="bg-foreground/10 text-foreground px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
          Testimonios
        </span>
        <h1 className="text-black text-4xl font-bold my-6">Opiniones de nuestros clientes</h1>
      </div>
      
      <div className="flex flex-col">
        <CarouselComentarios comentarios={comentarios}/>
      </div>

    </section>
  )
}
