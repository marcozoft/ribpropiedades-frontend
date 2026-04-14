
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { YOUTUBE_ID_HOME } from '@/src/constants/constants'

export const SeccionVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <div className="w-full -mt-16 min-h-32">
      <div className="sm:block h-[70vh] sm:h-[95vh] overflow-hidden relative">
        {/* iframe carga primero, por debajo */}
        <iframe
          className="w-full h-full scale-[1.8] md:scale-[1.3] pointer-events-none origin-center"
          src={`https://www.youtube.com/embed/${YOUTUBE_ID_HOME}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_ID_HOME}&modestbranding=1&rel=0&fs=0&showinfo=0`}
          title="RIB Propiedades - Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => {
            // Dar tiempo para que el video comience a reproducirse
            setTimeout(() => setIsVideoLoaded(true), 200)
          }}
        ></iframe>

        {/* Imagen de poster con transición de opacidad */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ zIndex: 10 }}
        >
          <Image
            src="/images/home-video-loading-1920.jpg"
            alt="RIB Propiedades"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />

          {/* Loading spinner estilo YouTube */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16">
              <div
                className="absolute inset-0 border-4 border-white/30 rounded-full"
                style={{ borderTopColor: 'white' }}
              >
                <style jsx>{`
                    @keyframes spin {
                      to { transform: rotate(360deg); }
                    }
                    div {
                      animation: spin 0.8s linear infinite;
                    }
                  `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
