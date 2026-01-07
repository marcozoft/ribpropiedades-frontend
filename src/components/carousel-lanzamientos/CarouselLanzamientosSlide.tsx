import { secondaryFont } from "@/src/config/fonts";
import { LinkButton } from '@/src/components';
import { LanzamientoSlider } from "@/src/interfaces";
import { generateSrcImage, isYouTubeVideoUrl } from "@/src/utils";
import Image from "next/image";
import { getYouTubeId } from "@/src/utils/media-src";

type Position = "prev" | "next" | "active" | "other";

type Props = {
  slider: LanzamientoSlider;
  position?: Position;
  index: number;
  i: number;
}

export const CarouselLanzamientosSlide = ({ slider, index, i }: Props) => {

  const { titulo, subtitulo, url, texto } = slider;

  const isActiveSlide = i === index;

  const positionClass = isActiveSlide 
    ? 'scale-100' 
    : 'scale-80'

  const isYoutubeLink = isYouTubeVideoUrl(url);
  const youtubeId = isYoutubeLink ? getYouTubeId(url) : null;  
  

  return (
    <div className={`w-full flex grow-0 shrink-0 gap-5 transition-transform duration-700 ease-in-out ${positionClass}`}>
      {
        (isYoutubeLink && youtubeId) ? (
          <div className="flex-none w-full max-w-[640px] aspect-video relative rounded overflow-hidden bg-background">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title="Video RIB Propiedades"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex-none w-full max-w-[640px] aspect-video relative rounded overflow-hidden">
            <Image
              src={generateSrcImage(slider.foto)}
              alt={titulo}
              fill
              className="object-cover"
            />
          </div>
        )
      }
      {/* <div className="flex grow-1"> */}
        <div className='bg-background text-black text-sm rounded p-5 flex-1'>
          <span className={`${secondaryFont.className} text-foreground font-bold`}>{subtitulo}</span>
          <h2 className="text-3xl font-bold py-5">{titulo}</h2>
          <p>{texto}</p>
          {
            (!isYoutubeLink) &&  <LinkButton href={url} text="VER MÁS" className="my-5" /> 
          }
        </div>
      {/* </div> */}
    </div>
  )
}


