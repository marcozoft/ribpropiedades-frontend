import { SkeletonCard } from "@/src/components";

export default function Loading() {
   return (
      <div className="bg-white">

         <div className='bg-background'>
            <div className="py-20 max-w-6xl mx-auto px-4 flex justify-between">
               <h1 className="my-5 text-3xl text-black font-bold">Buscando emprendimientos</h1>
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