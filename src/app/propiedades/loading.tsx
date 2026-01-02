import { SkeletonCard } from "@/src/components/skeletons/SkeletonCard";
import { secondaryFont } from "@/src/config/fonts";

export default function Loading() {
   return (
      <div className="bg-white">
         <div className="bg-background">
            <div className="max-w-6xl mx-auto px-4">
               {/* <Buscador {...filtros } /> */}
               <div className="py-20">
                  <h1 className="text-5xl text-black font-bold">
                     Propiedades encontradas
                  </h1>
                  <h2 className={`${secondaryFont.className} text-black text-lg mt-3`}>Listado &nbsp; &gt; &nbsp; Listado de propiedades</h2>
               </div>
            </div>
         </div>
         
         {/* Grid de propiedades */}
         <div className="max-w-6xl mx-auto px-4 pb-30 bg-white mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {
              Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i}/>)
            }
         </div>
      </div>
   );
}