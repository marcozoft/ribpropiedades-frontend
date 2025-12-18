import { YouTubeEmbed } from '@next/third-parties/google'

type Props = {
   youTubeId: string;
   height?: number;
   width?: number;
}

export const YouTubeVideoCard = ({youTubeId, width, height }: Props) => {
   
   return (
      <YouTubeEmbed videoid={youTubeId} width={width} height={height} params="autoplay=1" />  
   )
}

     
