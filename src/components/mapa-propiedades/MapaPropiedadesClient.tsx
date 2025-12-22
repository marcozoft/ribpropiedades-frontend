"use client";

import 'leaflet/dist/leaflet.css';
import '../../styles/leaflet-custom.css';
import { BASE_ATTRIBUTION, BASE_URL, MAP_INDEX_CENTER, MAP_ZOOM_START, MARKER, REFERENCE_MARKER } from "@/src/constants/geo-constants";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { SyntheticEvent, useRef, useState } from 'react';
import { LatLngExpression, LatLngLiteral } from 'leaflet';
import { PropiedadMapa } from '@/src/interfaces';
import { PopupPropiedad } from './PopupPropiedad';


type Props = {
   propiedades: PropiedadMapa[]
}

export default function MapaPropiedadesClient({ propiedades }: Props) {

   const [position, setPosition] = useState<LatLngLiteral>({ lat: -40.15451161680131, lng: -71.34787014700214 });

   const [placeTypes, setPlaceTypes] = useState(['restaurants'])
   const [radius, setRadius] = useState(500);

   const center: LatLngExpression = [parseFloat(propiedades[0].mapa_latitud), parseFloat(propiedades[0].mapa_longitud)]

   const onChangeSelect = (_event: SyntheticEvent | null, value: string[] | null) => {

      console.log(value);
      setPlaceTypes(value!);

   }



   return (

      <MapContainer
         center={center}
         zoom={MAP_ZOOM_START} scrollWheelZoom={true}
         dragging={true}
         style={{ height: '100%', zIndex: 0 }}
      >
         <TileLayer
            attribution={BASE_ATTRIBUTION}
            url={BASE_URL}
         />


         {
            propiedades.map((prop) => (
               <Marker
                  key={prop.id}
                  position={[
                     parseFloat(prop.mapa_latitud),
                     parseFloat(prop.mapa_longitud)
                  ]}
                  icon={MARKER}
               >
                  <Popup>
                     <PopupPropiedad propiedad={prop}/>
                  </Popup>
               </Marker>
            ))
         }

      </MapContainer>
   )
}
