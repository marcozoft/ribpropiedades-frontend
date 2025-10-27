import Image from "next/image"

export const VideoCarousel = () => {
  return (
    <div>
      <Image src={'/screenshot-video.png'} height={810} width={1920} alt="video" priority/>
    </div>
  )
}
