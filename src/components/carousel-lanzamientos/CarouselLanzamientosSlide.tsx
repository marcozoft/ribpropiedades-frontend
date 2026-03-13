import { secondaryFont } from "@/src/config/fonts";
import { LinkButton } from '@/src/components';
import { LanzamientoSlider } from "@/src/interfaces";
import { generateSrcImage, isYouTubeVideoUrl, getYouTubeId } from "@/src/utils";
import Image from "next/image";

type Position = "prev" | "next" | "active" | "other";

type Props = {
  slider: LanzamientoSlider;
  position?: Position;
  index: number;
  i: number;
}

export const CarouselLanzamientosSlide = ({ slider }: Props) => {

  const { titulo, subtitulo, url, texto } = slider;

  const isYoutubeLink = isYouTubeVideoUrl(url);
  const youtubeId = isYoutubeLink ? getYouTubeId(url) : null;  
  

  return (
    <div className={`w-full flex flex-col lg:flex-row grow-0 shrink-0 lg:gap-5 basis-4/5 lg:basis-full px-2 lg:px-0`}>
      {
        (isYoutubeLink && youtubeId) ? (
          <div className="flex-none w-full lg:max-w-160 aspect-video relative rounded overflow-hidden bg-background">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
              title="Video RIB Propiedades"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex-none w-full lg:max-w-160 aspect-video relative rounded overflow-hidden">
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
        <div className='bg-background text-black text-sm sm:text-base rounded p-4 md:p-5 flex-1'>
          <span className={`${secondaryFont.className} text-foreground font-bold text-xs sm:text-sm`}>{subtitulo}</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold py-3 sm:py-4 md:py-5">{titulo}</h2>
          <p className="text-sm sm:text-base leading-relaxed">{texto}</p>
          {
            (!isYoutubeLink) &&  <LinkButton href={url} text="VER MÁS" className="my-4 sm:my-5" /> 
          }
        </div>
      {/* </div> */}
    </div>
  )
}


