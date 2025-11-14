import { GOOGLE_MAPS_API_KEY } from '@/src/constants/constants';
import { GoogleMapsEmbed } from '@next/third-parties/google'

type Props = {
   lat: string;
   lng: string;
}

export const GoogleMapsCard = ({lat, lng}: Props) => {

   // construir query con coordenadas y marcador
   const query = `${lat},${lng}`;   

   return (
      <GoogleMapsEmbed
         apiKey={GOOGLE_MAPS_API_KEY}
         height={500}
         width="100%"
         mode="place"
         q={query}
      />   )
}

     
