"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/src/components/shadcn-components/ui/dialog";

type Props = {
   youtubeId: string;
   imageSrc: string;
}

export const VideoPopupCardImage = ({ youtubeId, imageSrc }: Props) => {

   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <div className="flex-none w-full max-w-160 aspect-video relative rounded-lg overflow-hidden bg-background">
            {/* Thumbnail del video */}
            <Image
               src={imageSrc}
               alt="Video Preview"
               fill
               className="object-cover"
            />
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Botón de play */}
            <button
               onClick={() => setIsOpen(true)}
               className="absolute inset-0 flex items-center justify-center group cursor-pointer"
               aria-label="Reproducir video"
            >
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground animate-pulse-subtle">
                  <svg
                     className="w-8 h-8 text-foreground group-hover:text-white ml-1"
                     fill="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path d="M8 5v14l11-7z" />
                  </svg>
               </div>
            </button>
         </div>

         {/* Modal/Popup con el video */}
         <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-5xl w-full p-0 bg-black border-none">
               <DialogTitle className="sr-only">Video RIB Propiedades</DialogTitle>
               <div className="relative w-full aspect-video">
                  {isOpen && (
                     <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                        title="Video RIB Propiedades"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     />
                  )}
               </div>
            </DialogContent>
         </Dialog>
      </>
   )
}
