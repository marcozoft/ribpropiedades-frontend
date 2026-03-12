"use client";

import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FeatureCollectionExtended } from "@/src/interfaces";
import { CAPAS_INTERES, MAPBOX_ACCESS_TOKEN, ZOOM_FLY } from "@/src/constants/geo-constants";
import { renderReactComponent, latLngToGeoJSON, loadNearbySearchPlaces, addPropiedadMarker, createFeatureCollectionLayer } from "@/src/utils";
import { PlacePopup } from "@/src/components";


// Token de Mapbox
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

type Props = {
   latitud: number,
   longitud: number,
   puntosDeInteres: FeatureCollectionExtended[];
   className?: string;
}



export default function MapaPropiedadClient({ latitud, longitud, className, puntosDeInteres }: Props) {
   
   const mapContainerRef = useRef<HTMLDivElement | null>(null);
   const mapRef = useRef<mapboxgl.Map | null>(null);
   
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
         center: [longitud, latitud],
         zoom: ZOOM_FLY,
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

      // TODO:
      // // Cambiar cursor al pasar sobre el layer
      // mapRef.current!.on('mouseenter', [...CAPAS_INTERES.map( capa => capa.name)], () => {
      //    mapRef.current!.getCanvas().style.cursor = 'pointer';
      // });

      // mapRef.current!.on('mouseleave',[...CAPAS_INTERES.map( capa => capa.name)], () => {
      //    mapRef.current!.getCanvas().style.cursor = '';
      // });

   }



   const initializeLayersPlaces = (map: mapboxgl.Map, capasDeInteres: FeatureCollectionExtended[]) => {

      console.log(puntosDeInteres);


      capasDeInteres.forEach( featureCollection => {
         createFeatureCollectionLayer(map, featureCollection);
      });

      // Evento click en el layer para mostrar popup
      mapRef.current?.on('click', capasDeInteres.map( capa => capa.layerName), (e) => {
         if (!e.features || e.features.length === 0) return;

         const feature = e.features[0];
         const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];;
         const { displayName, formattedAddress, primaryType, types } = feature.properties!;


         const popupContent = renderReactComponent(
            <PlacePopup 
               displayName={displayName}
               formatedAddress={formattedAddress}
               primaryType={primaryType}
               types={types}
            />
         );

         new mapboxgl.Popup({
            offset: [0, -20]
         })
            .setLngLat(coordinates)
            .setDOMContent(popupContent)
            .addTo(map);
      });
   }


   useEffect(() => {

      if (!mapContainerRef.current) return;
      if (mapRef.current) return;

      createMapboxMap();
      addControlsToMap();

      mapRef.current!.on('load', () => {
         addPropiedadMarker(mapRef.current!, latitud, longitud);
         initializeLayersPlaces(mapRef.current!, puntosDeInteres);
         // loadNearbySearchPlaces(mapRef.current!, feature.properties!.propiedadId);
         addCursorEvents();
      });

      return () => {
         mapRef.current!.remove();
         mapRef.current = null;
      }
   }, [])

   return (

      <div className={`${className}`}>
         {/* Mapa */}
         <div
            ref={mapContainerRef}
            className="w-full h-full"
         />
      </div>
   )
}
