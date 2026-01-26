
'use client'

import { useState } from 'react'
import Image from 'next/image'

export const SeccionVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <div className="w-full">
        <div className="relative w-full h-[95vh] md:-mt-22.5 md:pt-22.5 bg-black overflow-hidden group pointer-events-none">
          {/* iframe carga primero, por debajo */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/IxfRAd0QlRU?autoplay=1&mute=1&controls=0&loop=1&playlist=IxfRAd0QlRU&modestbranding=1&rel=0&fs=0&showinfo=0"
            title="RIB Propiedades - Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ 
              pointerEvents: 'none',
              '--tw-scale-x': '125%',
              '--tw-scale-y': '115%',
              marginTop: '90px',
              transform: 'scale(var(--tw-scale-x), var(--tw-scale-y))'
            } as React.CSSProperties}
            onLoad={() => {
              // Dar tiempo para que el video comience a reproducirse
              setTimeout(() => setIsVideoLoaded(true), 1000)
            }}
          ></iframe>

          {/* Imagen de poster con transición de opacidad */}
          <div 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ zIndex: 10 }}
          >
            <Image
              src="/images/home-video-loadiong-1920.jpg"
              alt="RIB Propiedades"
              fill
              className="object-cover"
              priority
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
      {/* </div> */}
    </div>
  )
}


