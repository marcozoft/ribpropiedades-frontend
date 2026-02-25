"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/src/components/shadcn-components/ui/dialog";

type Props = {
  youtubeId: string;
  imageSrc: string;
};

export const VideoPopupCardImage = ({ youtubeId, imageSrc }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-background relative aspect-video w-full max-w-160 flex-none overflow-hidden rounded-lg">
        {/* Thumbnail del video */}
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title="Video RIB Propiedades"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {!isPlaying && (
          <Image
            src={imageSrc}
            alt="Video Preview"
            fill
            className="object-cover"
          />
        )}
        {/* Overlay oscuro */}
        {!isPlaying && <div className="absolute inset-0 bg-black/30" /> }
        
        {/* Botón de play */}
        {!isPlaying && (
          <button
            onClick={() => {
              setIsPlaying(true);
            }}
            className="group absolute inset-0 flex cursor-pointer items-center justify-center"
            aria-label="Reproducir video"
          >
            <div className="group-hover:bg-foreground animate-pulse-subtle flex h-10 w-10 transform items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <svg
                className="text-foreground ml-1 h-8 w-8 group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}

        {/* Botón de play popup */}
        <button
          onClick={() => setIsOpen(true)}
          className="group absolute inset-0 hidden cursor-pointer items-center justify-center md:flex"
          aria-label="Reproducir video"
        >
          <div className="group-hover:bg-foreground animate-pulse-subtle flex h-10 w-10 transform items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <svg
              className="text-foreground ml-1 h-8 w-8 group-hover:text-white"
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
        <DialogContent className="bg-blacj w-full max-w-[80vw]! rounded p-0">
          <DialogTitle className="sr-only">Video RIB Propiedades</DialogTitle>
          <div className="relative aspect-video w-full">
            {isOpen && (
              <iframe
                className="absolute inset-0 h-full w-full"
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
  );
};
