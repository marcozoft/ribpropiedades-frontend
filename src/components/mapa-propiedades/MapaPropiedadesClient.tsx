"use client";

import { LugaresRequest, PropiedadBasico } from "@/src/interfaces";
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN } from "@/src/constants/geo-constants";
import Image from "next/image";
import { createLayer, loadImage, propiedadesToGeoJSON } from "@/src/utils";


// Token de Mapbox
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

type Props = {
   propiedades: PropiedadBasico[]
}

export default function MapaPropiedadesClient({ propiedades }: Props) {

   const mapContainerRef = useRef<HTMLDivElement | null>(null);
   const mapRef = useRef<mapboxgl.Map | null>(null);
   
   const mapLayerNames: string[] = [];


   /**
    * Creacion de mapa
    * mapa base + bounds inicial
    */
   const createMapboxMap = () => {
      mapRef.current = new mapboxgl.Map({
         container: mapContainerRef.current!,
         style: "mapbox://styles/mapbox/standard",
         config: {
            basemap: {
               theme: "monochrome"
            },
         },
         bounds: [
            [-59.22784198243846, -34.25565906421708],
            [-58.58193190881586, -34.63835956492742]
         ],
      });
   } 

   /**
    * Controles
    * Zoom
    * https://docs.mapbox.com/mapbox-gl-js/api/markers
    */
   const addControlsToMap = () => {
            
      mapRef.current!.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

   }

   /**
    * Eventos del cursor para ver Pointer
    * al pasar por un marcador
    */
   const addCursorEvents = () => {
      
      // Cambiar cursor al pasar sobre el layer
      mapRef.current!.on('mouseenter', mapLayerNames, () => {
         mapRef.current!.getCanvas().style.cursor = 'pointer';
      });

      mapRef.current!.on('mouseleave', mapLayerNames, () => {
         mapRef.current!.getCanvas().style.cursor = '';
      });

   }

   /**
    * Función async para cargar lugares
    */
   const loadPropiedades = async () => {

      loadImage(mapRef.current!, '/markers/propiedad.png', 'propiedades');
      mapLayerNames.push('propiedades')

      createLayer(mapRef.current!, 'propiedades', propiedadesToGeoJSON(propiedades));

      // Crear popup
      const popup = new mapboxgl.Popup({
         offset: [-5, -25]
      });

      // Evento click en el layer para mostrar popup
      mapRef.current?.on('click', 'propiedades', (e) => {
         if (!e.features || e.features.length === 0) return;
         
         const feature = e.features[0];
         const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];
         const properties = feature.properties;

         popup
            .setLngLat(coordinates)
            .setHTML(`
               <div class="p-2">
                  <h3 class="font-bold text-sm">${JSON.stringify(properties)}</h3>
               </div>
            `)
            .addTo(mapRef.current!);
      
         mapRef.current!.flyTo({
            center: coordinates,
            zoom: 16
         })

         loadNearbySearchPlaces(coordinates);
      });

   };

   /**
    * 
    */
   const initializeLayersPlaces = () => {

      loadImage(mapRef.current!,'/markers/restaurant.png', 'restaurants')
      
      createLayer(mapRef.current!, 'restaurants');
      mapLayerNames.push('restaurants')
      

      // Crear popup
      const popup = new mapboxgl.Popup({
         offset: [0, -20]
      });

      // Evento click en el layer para mostrar popup
      mapRef.current?.on('click', 'restaurants', (e) => {
         if (!e.features || e.features.length === 0) return;
         
         const feature = e.features[0];
         const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];;
         const properties = feature.properties;

         popup
            .setLngLat(coordinates)
            .setHTML(`
               <div class="p-2">
                  <h3 class="font-bold text-sm">${properties!.displayName}</h3>
                  <p class="text-xs text-gray-600 mt-1">${properties!.formattedAddress || ''}</p>
               </div>
            `)
            .addTo(mapRef.current!);
      });
   }


   /**
    * Función async para cargar lugares
    */
   const loadNearbySearchPlaces = async (coordinates: [number, number]) => {
      
      const request: LugaresRequest = {
         results: 20,
         types: ['restaurant'],
         lat: coordinates[1],
         lng: coordinates[0],
         radius: 3000
      };

      const places = await fetch('api/lugares', {
         method: 'POST',
         body: JSON.stringify(request),
      }).then(resp => resp.json()) as GeoJSON.FeatureCollection;


      const source =  mapRef.current!.getSource('restaurants-source') as mapboxgl.GeoJSONSource;
      if (!source) {
         console.warn(`Source restaurants not found`);
         return;
      }

      // Obtener data actual
      const currentData = source._data as GeoJSON.FeatureCollection;

      // Combinar con nuevos points
      const updatedData: GeoJSON.FeatureCollection = {
         type: 'FeatureCollection',
         features: [...currentData.features, ...places.features]
      };

      source.setData(updatedData);

      console.log(source._data);

   };

   useEffect(() => {
      
      if (!mapContainerRef.current) return;
      if (mapRef.current) return;

      createMapboxMap();
      addControlsToMap();

      mapRef.current!.on('load', () => {
         loadPropiedades();
         initializeLayersPlaces();
         addCursorEvents();
      });

      return () => {
         mapRef.current!.remove();
         mapRef.current = null;
      }
   }, [])


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
               <div className="flex items-center justify-center gap-2 px-2 py-1 border-b">
                  {/* <Layers className="w-4 h-4" /> */}
                  <span className="text-sm font-semibold">Referencias</span>
               </div>


               <div
                  className="flex items-center justify-start gap-2"
               >
                  <Image src={'/markers/restaurant.png'} alt='Restaurants' width={32} height={32}/>
                  <span className="text-sm">Gastronomía</span>
               </div>

            </div>
         </div>
      </div>
   )

}
