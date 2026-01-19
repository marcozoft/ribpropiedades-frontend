import { SkeletonCard, SkeletonFilterBar } from "@/src/components";

export default function Loading() {
   return (
      <div className="bg-white">
         <div className="max-w-6xl mx-auto sticky z-10 top-20 -mt-20 shadow-md">
            <SkeletonFilterBar />
         </div>

         <div className='bg-background pt-30 pb-20'>
            <div className="max-w-6xl mx-auto sticky top-40">
               <h1 className="text-3xl text-black font-bold">Buscando propiedades</h1>
            </div>
         </div>
         <div className="max-w-6xl mx-auto px-4 pb-30 bg-white mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {
               Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            }
         </div>
      </div>
   );
}