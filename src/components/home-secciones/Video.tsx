import Image from "next/image"

//1364 × 768
// TODO: Acomodar size
export const Video = () => {
  return (
    <div className="w-full h-[810px]">
      {/* <div className="max-w-7xl mx-auto px-4"> */}
        <video 
          className="w-full"
          autoPlay muted playsInline loop
          preload="none">
          <source src="/videos/rib-home.mp4" type="video/mp4"/>
          Tu navegador no soporta videos.
        </video>    
      {/* </div> */}
    </div>
  )
}


