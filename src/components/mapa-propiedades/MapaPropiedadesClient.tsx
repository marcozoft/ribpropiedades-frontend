"use client";

import { PropiedadBasico } from "@/src/interfaces";
import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN } from "@/src/constants/geo-constants";
import { PhoneSpan } from "../navbar";
import { Layers, MapPin, Building2, Home } from "lucide-react";
import { Button } from "../shadcn-components";
import { PropiedadPopupCard } from '@/src/components';



// Token de Mapbox
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

type Props = {
   propiedades: PropiedadBasico[]
}

export default function MapaPropiedadesClient({ propiedades }: Props) {

   const mapContainerRef = useRef<HTMLDivElement | null>(null);
   const mapRef = useRef<mapboxgl.Map | null>(null);

   // Estados para controlar visibilidad de capas
   const [showMarkers, setShowMarkers] = useState(true);
   const [showClusters, setShowClusters] = useState(false);
   const [showHeatmap, setShowHeatmap] = useState(false);

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
         // Crear un contenedor para el componente React
         const popupContainer = document.createElement('div');

         // Renderizar el componente React en el contenedor
         const root = createRoot(popupContainer);
         root.render(<PropiedadPopupCard propiedad={prop} />);

         const marker = new mapboxgl.Marker()
            .setLngLat([+prop.mapa_longitud, +prop.mapa_latitud])
            .setPopup(
               new mapboxgl.Popup({
                  className: ''
               })
                  .setDOMContent(popupContainer)
            )
            .addTo(mapRef.current!);

         bounds.extend(marker.getLngLat());
      });

      /**
       * 
       */
      map.fitBounds(bounds, { animate: false, padding: 20 });



      return () => {
         mapRef.current?.remove();
         mapRef.current = null;
      }
   }, [])

   console.log({ propiedades });



   return (
      <div className="relative w-full h-full">
         {/* Mapa */}
         <div
            ref={mapContainerRef}
            className="w-full h-full"
         />

         {/* Barra flotante de capas */}
         <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col gap-2 bg-white rounded-lg shadow-lg p-2">
               {/* Título */}
               <div className="flex items-center gap-2 px-2 py-1 border-b">
                  <Layers className="w-4 h-4" />
                  <span className="text-sm font-semibold">Capas</span>
               </div>

               {/* Botón Marcadores */}
               <Button
                  variant={showMarkers ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setShowMarkers(!showMarkers)}
                  className="justify-start gap-2"
               >
                  <MapPin className="w-4 h-4" />
                  Marcadores
               </Button>

               {/* Botón Clusters */}
               <Button
                  variant={showClusters ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setShowClusters(!showClusters)}
                  className="justify-start gap-2"
               >
                  <Building2 className="w-4 h-4" />
                  Clusters
               </Button>

               {/* Botón Mapa de calor */}
               <Button
                  variant={showHeatmap ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setShowHeatmap(!showHeatmap)}
                  className="justify-start gap-2"
               >
                  <Home className="w-4 h-4" />
                  Mapa de calor
               </Button>
            </div>
         </div>
      </div>
   )

}
