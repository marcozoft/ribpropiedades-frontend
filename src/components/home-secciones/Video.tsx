
export const Video = () => {
  return (
    <div className="w-full">
      {/* <div className="max-w-7xl mx-auto px-4"> */}
        <div className="relative w-full aspect-video md:-mt-[90px] md:pt-[90px] bg-black overflow-hidden group pointer-events-none">
          {/* TODO: Reemplazar por componente Next para Youtube */}
          <iframe
            className="absolute inset-0 w-full h-full scale-110"
            src="https://www.youtube.com/embed/IxfRAd0QlRU?autoplay=1&mute=1&controls=0&loop=1&playlist=IxfRAd0QlRU&modestbranding=1&rel=0&fs=0&showinfo=0"
            title="RIB Propiedades - Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          ></iframe>
        </div>
      {/* </div> */}
    </div>
  )
}


