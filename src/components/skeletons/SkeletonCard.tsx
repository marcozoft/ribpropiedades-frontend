
export const SkeletonCard = () => {
   return (

      <div className="bg-white p-4 shadow rounded-xs">
         {/* Imagen */}
         <div className="w-full aspect-video bg-gray-300 animate-pulse" />

         {/* Titulo */}
         <div className="mt-4 h-4 w-1/4 bg-foreground/20 animate-pulse" />

         {/* Descripcion */}
         <div className="mt-4 h-20 w-5/6 bg-gray-200 animate-pulse" />

         <div className="mt-4 h-12 bg-gray-200 animate-pulse" />

      </div>


   )
}
