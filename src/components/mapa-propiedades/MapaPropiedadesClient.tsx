"use client";

import { LugaresRequest, Place, PropiedadBasico } from "@/src/interfaces";
import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN } from "@/src/constants/geo-constants";
import { Layers, Hospital, UtensilsCrossed, School } from "lucide-react";
import { Button } from "../shadcn-components";
import { PropiedadPopupCard } from '@/src/components';
import { primaryFont } from "@/src/config/fonts";
import { toast } from "sonner";




// Token de Mapbox
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

type Props = {
   propiedades: PropiedadBasico[]
}





export default function MapaPropiedadesClient({ propiedades }: Props) {

   const mapContainerRef = useRef<HTMLDivElement | null>(null);
   const mapRef = useRef<mapboxgl.Map | null>(null);

   const restaurantsRef = useRef<mapboxgl.Marker[]>([]);

   const [mapLoaded, setMapLoaded] = useState(false);


   // TODO: Estados para controlar visibilidad de capas: TODO
   const [showRestaurants, setShowRestaurants] = useState(true);


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

      mapRef.current.on('load', () => {
         setMapLoaded(true);
         console.log('mapa ok');
      });

      mapRef.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');


      const map = mapRef.current;

      /**
       * 
       */
      const bounds = new mapboxgl.LngLatBounds();

      /**
       * Generar marcadores y popup
       */
      propiedades.forEach(prop => {
         // Crear un contenedor para el componente React
         const popupContainer = document.createElement('div');

         // Renderizar el componente React en el contenedor
         const root = createRoot(popupContainer);
         root.render(
            <PropiedadPopupCard
               propiedad={prop}
               onClickEntorno={searchPlaces}
            />
         );

         // Agregar evento click para hacer flyTo
         popupContainer.addEventListener('click', () => {
            map.flyTo({
               center: [+prop.mapa_longitud, +prop.mapa_latitud],
               zoom: 15,
               duration: 1000
            });
         });

         const marker = new mapboxgl.Marker({
            color: '#5f021f'
         })
            .setLngLat([+prop.mapa_longitud, +prop.mapa_latitud])
            .setPopup(
               new mapboxgl.Popup({
                  className: `${primaryFont.className}`,
               }).setDOMContent(popupContainer)
            )
            .addTo(mapRef.current!);


         bounds.extend(marker.getLngLat());
      });

      /**
       * Ajustar el zoom para ver todos
       */
      map.fitBounds(bounds, { animate: false, padding: 20 });



      return () => {
         // Limpiar todos los markers
         // markersRef.current.forEach(marker => marker.remove());
         // markersRef.current = [];

         mapRef.current?.remove();
         mapRef.current = null;
      }
   }, [])


   // useEffect para controlar visibilidad de markers
   useEffect(() => {
      restaurantsRef.current.forEach(marker => {
         if (showRestaurants) {
            marker.getElement().style.display = 'block';
         } else {
            marker.getElement().style.display = 'none';
         }
      });
   }, [showRestaurants]);


   const searchPlaces = async (lat: number, lng: number) => {

      const request: LugaresRequest = {
         results: 50,
         types: ['restaurant'],
         lat: lat,
         lng: lng,
         radius: 20000
      }

      const places: Place[] = await fetch('api/lugares', {
         method: 'POST',
         body: JSON.stringify(request),
      }).then(resp => resp.json());
      console.log(`${places.length} encontrados`)

      /**
       * Crear markers para cada restaurant
       */
      places.forEach(place => {

         const marker = new mapboxgl.Marker({
            color: '#1e90ff'
         })
            .setLngLat([place.location.longitude, place.location.latitude])
            .setPopup(
               new mapboxgl.Popup().setText(`${place.displayName.text}: ${place.formattedAddress}`)
            )
            .addTo(mapRef.current!);

         // Guardar referencia del marker
         restaurantsRef.current.push(marker);


      });

      toast(`${places.length} restaurantes a menos de 2km.`, {
         // description: "Sunday, December 03, 2023 at 9:00 AM",
         duration: 4000,
      })
   }



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
                  variant={showRestaurants ? 'search' : 'outline'}
                  size="sm"
                  onClick={() => setShowRestaurants(!showRestaurants)}
                  className="justify-start gap-2"
               >
                  <UtensilsCrossed className="w-4 h-4" />
                  Restaurantes
               </Button>

               {/* Botón Clusters */}
               <Button
                  variant={false ? 'search' : 'outline'}
                  size="sm"
                  // onClick={() => setShowClusters(!showClusters)}
                  className="justify-start gap-2"
               >
                  <School className="w-4 h-4" />
                  Colegios
               </Button>

               {/* Botón Mapa de calor */}
               <Button
                  variant={false ? 'search' : 'outline'}
                  size="sm"
                  // onClick={() => setShowHeatmap(!showHeatmap)}
                  className="justify-start gap-2"
               >
                  <Hospital className="w-4 h-4" />
                  Centros de salud
               </Button>
            </div>
         </div>
      </div>
   )

}
