import React from 'react'

export const PlaygroundComponent = () => {
   return (
      <div className="pt-10 h-112 p-4 sm:p-8 relative overflow-hidden rounded-lg bg-gray-950/[2.5%] after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
         <div className="-mr-16 -mb-8 [--size:--spacing(48)] lg:flex lg:justify-center xl:block">
            <div className="-mt-18 sm:-mt-26">
               <div className="bg-white p-6 ring ring-gray-950/5 sm:p-16 dark:bg-gray-950 dark:ring-white/10">
                  <h3 className="text-base/6 font-semibold text-gray-950 dark:text-white">Browse properties</h3>
                  <div className="mt-6 grid grid-cols-[repeat(2,var(--size))] grid-rows-[repeat(3,var(--size))] gap-2 sm:grid-cols-[repeat(3,var(--size))] sm:grid-rows-[repeat(2,var(--size))]">
                     <div className="relative col-span-2 row-span-1 overflow-hidden rounded-t-2xl sm:col-span-1 sm:row-span-2 sm:rounded-none sm:rounded-l-2xl dark:outline dark:outline-white/10">
                        <img alt="" className="not-sm:hidden" src="/_next/static/media/css-grid-1.d6b88d05.png" />
                        <img alt="" className="sm:hidden" src="/_next/static/media/css-grid-1.mobile.d0afc6a2.png" />
                        <div className="absolute inset-0 flex items-end bg-linear-to-b from-transparent via-transparent to-gray-950">
                           <span className="p-4 text-sm/5 font-semibold text-white">Treehouses</span>
                        </div>
                     </div>
                     <div className="relative dark:outline dark:outline-white/10">
                        <img alt="" src="/css-grid-2.png" />
                        <div className="absolute inset-0 flex items-end bg-linear-to-b from-transparent via-transparent to-gray-950">
                           <span className="p-4 text-sm/5 font-semibold text-white">Mansions</span>
                        </div>
                     </div>
                     <div className="relative overflow-hidden sm:rounded-tr-2xl dark:outline dark:outline-white/10">
                        <img alt="" src="/css-grid-3.png" />
                        <div className="absolute inset-0 flex items-end bg-linear-to-b from-transparent via-transparent to-gray-950">
                           <span className="p-4 text-sm/5 font-semibold text-white">Lakefront cottages</span>
                        </div>
                     </div>
                     <div className="relative col-span-2 overflow-hidden rounded-b-2xl sm:rounded-bl-none dark:outline dark:outline-white/10">
                        <img alt="" className="aspect-2/1" src="/_next/static/media/css-grid-4.308d73d9.png" />
                        <div className="absolute inset-0 flex items-end bg-linear-to-b from-transparent via-transparent to-gray-950">
                           <span className="p-4 text-sm/5 font-semibold text-white">Designer homes</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
