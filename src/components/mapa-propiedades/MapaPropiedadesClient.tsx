"use client";

import { PropiedadBasico } from "@/src/interfaces";
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN } from "@/src/constants/geo-constants";


// Token de Mapbox
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

type Props = {
   propiedades: PropiedadBasico[]
}

export default function MapaPropiedadesClient({ propiedades }: Props) {

   const mapContainerRef = useRef<HTMLDivElement | null>(null);
   const mapRef = useRef<mapboxgl.Map | null>(null);

   useEffect(() => {

      if (!mapContainerRef.current) return;
      if (mapRef.current) return;

      mapRef.current = new mapboxgl.Map({
         container: mapContainerRef.current,
         style: "mapbox://styles/mapbox/standard",
         config: {
            basemap: {
               theme: "monochrome"
            },
         },
         // center: [-58.3816, -34.6037], // lng, lat
         zoom: 12,
      });

      const map = mapRef.current;

      /**
       * 
       */
      const bounds = new mapboxgl.LngLatBounds();

      /**
       * 
       */
      propiedades.forEach(prop => {
         const popup = `${prop.id} - ${prop.titulo_venta}`;
         const marker = new mapboxgl.Marker()
            .setLngLat([+prop.mapa_longitud, +prop.mapa_latitud])
            .setPopup(new mapboxgl.Popup().setText(popup))
            .addTo(mapRef.current!);

         bounds.extend(marker.getLngLat());
      });

      /**
       * 
       */
      map.fitBounds(bounds, { padding: 80 });



      return () => {
         mapRef.current?.remove();
         mapRef.current = null;
      }
   }, [])

   console.log({ propiedades });



   return (
      <div
         ref={mapContainerRef}
         className="w-full h-full"
      />
   )

}
