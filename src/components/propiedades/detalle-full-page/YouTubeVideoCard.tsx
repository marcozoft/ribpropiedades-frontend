import { YouTubeEmbed } from '@next/third-parties/google'

type Props = {
   youTubeId: string;
}

export const YouTubeVideoCard = ({youTubeId}: Props) => {

   console.log({youTubeId});
   

   return (
      <YouTubeEmbed videoid={youTubeId} height={400} params="controls=0" />  
   )
}

     
