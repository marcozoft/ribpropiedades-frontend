
'use client'

import { useState } from 'react'
import Image from 'next/image'

export const SeccionVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <div className="w-full -mt-16">
        <div className="aspect-video overflow-hidden">
          {/* iframe carga primero, por debajo */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/IxfRAd0QlRU?autoplay=1&mute=1&controls=0&loop=1&playlist=IxfRAd0QlRU&modestbranding=1&rel=0&fs=0&showinfo=0"
            title="RIB Propiedades - Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
              style={{
                pointerEvents: 'none',
                transform: 'scale(1.2)',
                transformOrigin: 'center center'
              }}
            onLoad={() => {
              // Dar tiempo para que el video comience a reproducirse
              setTimeout(() => setIsVideoLoaded(true), 1000)
            }}
          ></iframe>
      </div>
    </div>
  )
}
