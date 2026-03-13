"use client";

import { useEffect, useRef } from "react";
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FeatureCollectionExtended } from "@/src/interfaces";
import { MAPBOX_ACCESS_TOKEN, ZOOM_FLY } from "@/src/constants/geo-constants";
import { renderReactComponent, createFeatureCollectionLayer } from "@/src/utils";
import { PlacePopup } from "@/src/components";
import { latLngToFeatureCollectionExtended } from "@/src/utils/gis-utils";


// Token de Mapbox
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

type Props = {
   latitud: number,
   longitud: number,
   id: number,
   tipo: 'propiedades' | 'emprendimientos'
   className?: string;
}

export default function MapaPropiedadClient({ latitud, longitud, id, tipo, className }: Props) {
   
   const mapContainerRef = useRef<HTMLDivElement | null>(null);
   const mapRef = useRef<mapboxgl.Map | null>(null);
   

   /**
    * Creacion de mapa
    * mapa base + center
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
    * Buscar las capas con los puntos relacionados
    */
   const loadCapasRelacionadasById = async(map: Map, tipo: 'propiedades' | 'emprendimientos', id: number) => {

      const capasDeInteres: FeatureCollectionExtended[] = (await fetch(
        `/api/lugares/${tipo}/${id}`,
      ).then((resp) => resp.json()));

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
         createFeatureCollectionLayer(mapRef.current!, latLngToFeatureCollectionExtended(latitud, longitud, '/markers/propiedad.png', 'propiedad', {}));
         loadCapasRelacionadasById(mapRef.current!, tipo, id);
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
