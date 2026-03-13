"use client";

import { FeatureCollectionExtended, PropiedadBasico } from "@/src/interfaces";
import { useEffect, useRef, useState } from "react";
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN, ZOOM_FLY } from "@/src/constants/geo-constants";
import { createFeatureCollectionLayer, propiedadesToFeatureCollectionExtended, renderReactComponent } from "@/src/utils";
import { PropiedadPopup, PlacePopup, CuadroReferencias } from "@/src/components";


// Token de Mapbox
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

type Props = {
   propiedades: PropiedadBasico[]
   className?: string;
}


export default function MapaPropiedadesClient({ propiedades, className }: Props) {

   const mapContainerRef = useRef<HTMLDivElement | null>(null);
   const mapRef = useRef<mapboxgl.Map | null>(null);

   const [visibleReferencias, setVisibleReferencias] = useState(false);

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
    * Función async para cargar lugares
    */
   const loadPropiedades = async () => {

      createFeatureCollectionLayer(mapRef.current!, propiedadesToFeatureCollectionExtended(propiedades, '/markers/propiedad.png', 'propiedades', {}));
      
      // Evento click en el layer para mostrar popup
      mapRef.current?.on('click', 'propiedades', (e) => {
                  
         const feature = e.features![0];
         const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];
         // loadNearbySearchPlaces(mapRef.current!, feature.properties!.propiedadId);
         loadCapasRelacionadasById(mapRef.current!, 'propiedades', feature.properties!.propiedadId)
         setVisibleReferencias(true);
         
         const popupContent = renderReactComponent(
            <PropiedadPopup 
               propiedad={propiedades[feature.properties!.index]} 
            />
         );

         new mapboxgl.Popup({
            offset: [-5, -25],
            closeButton: false,
         })
            .setLngLat(coordinates)
            .setDOMContent(popupContent)
            .addTo(mapRef.current!);

         const currentZoom = mapRef.current!.getZoom()

         mapRef.current!.flyTo({
            center: coordinates,
            zoom: currentZoom > ZOOM_FLY ? currentZoom : ZOOM_FLY
         })

      });

   };


   /**
    * 
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
         loadPropiedades();
         // initializeLayersPlaces(mapRef.current!, CAPAS_INTERES);
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

         {/* Barra flotante de capas, inicialmente no visible, hasta la primer busqueda */}
         {
            visibleReferencias && (
               <></>
               // <CuadroReferencias capasDeInteres={CAPAS_INTERES} className="hidden lg:block lg:absolute left-4 top-1/2 -translate-y-1/2 z-10"/>
            )
         }
      </div>
   )
}
