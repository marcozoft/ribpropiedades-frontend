import { YouTubeEmbed } from '@next/third-parties/google'

type Props = {
   youTubeId: string;
   height?: number;
   width?: number;
   className?: string;
}

export const YouTubeVideoCard = ({youTubeId, width, height, className }: Props) => {
   
   return (
      <div className={className}>
         <YouTubeEmbed videoid={youTubeId} width={width} height={height} params="autoplay=1" />  
      </div>
   )
}

     
