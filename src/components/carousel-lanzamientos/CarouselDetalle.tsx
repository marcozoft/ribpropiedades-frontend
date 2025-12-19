import { secondaryFont } from "@/src/config/fonts";
import { RoundedButton, YouTubeVideoCard } from '@/src/components';
import { LanzamientoSlider } from "@/src/interfaces";
import { generateSrcImage, isYouTubeVideoUrl } from "@/src/utils";
import Image from "next/image";
import { YouTubeEmbed } from "@next/third-parties/google";

type Props = {
  slider: LanzamientoSlider
}

export const CarouselDetalle = ({ slider }: Props) => {

  const { titulo, subtitulo, url, texto } = slider;

  const isYoutubeLink = isYouTubeVideoUrl(url);

  console.log({slider, isYoutubeLink});
  

  return (
    <div className="w-full flex grow-0 shrink-0 gap-5">
      {
        isYoutubeLink ? ( 
          <div className="flex rounded items-center bg-background">
            <iframe width={640}
              className="rounded"
              src={url}
              title="Video RIB Propiedades"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            (!isYoutubeLink) &&  <RoundedButton href={url} text="Ver más" className="my-5" /> 
          }
        </div>
      {/* </div> */}
    </div>
  )
}


