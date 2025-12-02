import { Comentario } from "@/src/interfaces"


export const CarouselComentarioItem = ({comentario, nombre}: Comentario) => {


   return (
      <div className="flex flex-col bg-background rounded shadow mx-5 p-10 text-[#0A2C3D] hover:shadow-2xl">
         <i className="flaticon-left-quote-1 text-2xl" />
         <p className="text-lg text-ternary line-clamp-6 h-[144px] text-ellipsis">{comentario}</p>

         {/* Estrellas repetidas */}
         <div className="flex gap-1 my-2">
            {Array.from({ length: 5 }).map((_, i) => (
               <i key={i} className="icon-star text-yellow-500" />
            ))}
         </div>

         {/* Avatar + Nombre */}
         <div className="flex items-center gap-3 mt-8">
            <div className="w-14 h-14 rounded-full bg-ternary flex items-center justify-center flex-shrink-0">
               <i className="flaticon-user text-white text-xl" />
            </div>
            <p className="text-lg text-[#0A2C3D] font-bold">{nombre}</p>
         </div>
      </div>
  )
}
