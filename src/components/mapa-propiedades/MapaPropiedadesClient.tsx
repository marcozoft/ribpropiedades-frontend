"use client";

import { LugaresRequest, PropiedadBasico } from "@/src/interfaces";
import { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN, POLYGON_PILARA, ZOOM_FLY } from "@/src/constants/geo-constants";
import Image from "next/image";
import { addFeaturesToLayer, createLayer, loadImage, propiedadesToGeoJSON, renderReactComponent } from "@/src/utils";
import { PropiedadPopup, PlacePopup } from "@/src/components";


// Token de Mapbox
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

type Props = {
   propiedades: PropiedadBasico[]
}

/**
 * https://developers.google.com/maps/documentation/places/web-service/place-types
 */
type CapaDeInteres = {
   name: string;
   includedPrimaryTypes: string[]; //
   excludePrimaryTypes: string[];
   icon: string;
   label: string;
   radius: number;
   rankPreference: 'POPULARITY' | 'DISTANCE';
}

const capasDeInteres: CapaDeInteres[] = [
   {
      name: 'restaurants',
      includedPrimaryTypes: ['restaurant'],
      excludePrimaryTypes: [],
      icon: '/markers/restaurant.png',
      label: 'Gastronomía',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
   {
      name: 'shopping',
      includedPrimaryTypes: ['shopping_mall'],
      excludePrimaryTypes: [],
      icon: '/markers/shoping.png',
      label: 'Centros comerciales',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
   {
      name: 'salud',
      includedPrimaryTypes: ['drugstore', 'hospital', 'medical_lab', 'pharmacy', 'dental_clinic'],
      excludePrimaryTypes: [],
      icon: '/markers/salud.png',
      label: 'Centros de salud y farmacias',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
   {
      name: 'mascotas',
      includedPrimaryTypes: ['pet_store', 'veterinary_care'],
      excludePrimaryTypes: [],
      icon: '/markers/mascotas.png',
      label: 'Mascotas',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
   {
      name: 'deportes',
      includedPrimaryTypes: ['sports_club', 'fitness_center', 'golf_course'],
      excludePrimaryTypes: [],
      icon: '/markers/deportes.png',
      label: 'Deportes',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
]

export default function MapaPropiedadesClient({ propiedades }: Props) {

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
    * Eventos del cursor para ver Pointer
    * al pasar por un marcador
    */
   const addCursorEvents = () => {

      // Cambiar cursor al pasar sobre el layer
      mapRef.current!.on('mouseenter', [...capasDeInteres.map( capa => capa.name), 'propiedades'], () => {
         mapRef.current!.getCanvas().style.cursor = 'pointer';
      });

      mapRef.current!.on('mouseleave',[...capasDeInteres.map( capa => capa.name), 'propiedades'], () => {
         mapRef.current!.getCanvas().style.cursor = '';
      });

   }

   /**
    * Función async para cargar lugares
    */
   const loadPropiedades = async () => {

      loadImage(mapRef.current!, '/markers/propiedad.png', 'propiedades');
      createLayer(mapRef.current!, 'propiedades', propiedadesToGeoJSON(propiedades));

      // Evento click en el layer para mostrar popup
      mapRef.current?.on('click', 'propiedades', (e) => {
                  
         const feature = e.features![0];
         const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];
         loadNearbySearchPlaces(coordinates);

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
    * Prueba de concepto
    */
   const addPilaraPolygon = async() => {
      mapRef.current!.addSource(`polygon-pilara-source`, {
         type: 'geojson', 
         data: POLYGON_PILARA 
      });

      mapRef.current!.addLayer({
         id: 'polygon-pilara',
         type: 'fill',
         source: 'polygon-pilara-source',
         layout: {},
         paint: {
          'line-color': '#037971',
          'fill-color': '#037971',
          'fill-opacity': 0.4,
          'line-width': 1
        }
      });

      // Create a popup, but don't add it to the map yet
      const popup = new mapboxgl.Popup({
         closeButton: false,
         closeOnClick: true,
         offset: [0, -20]
      });
      
      // use addInteraction for quick access to the feature under the mouse
      mapRef.current!.addInteraction('polygon-pilara-interaction', {
        type: 'click',
        target: {
            layerId: 'polygon-pilara'
        },
        handler: (e) => {
          // Position the popup at the cursor location and show it
          popup
            .setLngLat(e.lngLat)
            .setHTML(`<p>Poligono de Pilará (prueba de concepto)</p>`)
            .addTo(mapRef.current!);
        }
      });

   }

   /**
    * Inicializar las capas de interes
    * segun el array capasDeInteres
    */
   const initializeLayersPlaces = () => {

      capasDeInteres.forEach(({ name, icon }) => {
         loadImage(mapRef.current!, icon, name)
         createLayer(mapRef.current!, name);
      });

      // Evento click en el layer para mostrar popup
      mapRef.current?.on('click', capasDeInteres.map( capa => capa.name), (e) => {
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
            .addTo(mapRef.current!);
      });
   }


   /**
    * Función async para cargar lugares
    */
   const loadNearbySearchPlaces = async (coordinates: [number, number]) => {

      capasDeInteres.forEach(async ({name, includedPrimaryTypes, excludePrimaryTypes, radius, rankPreference}) => {
         const request: LugaresRequest = {
            results: 20,
            includedPrimaryTypes: includedPrimaryTypes,
            lat: coordinates[1],
            lng: coordinates[0],
            radius: radius,
            excludedPrimaryTypes: excludePrimaryTypes,
            rankPreference: rankPreference
         };
         const places = await fetch('api/lugares', {
            method: 'POST',
            body: JSON.stringify(request),
         }).then(resp => resp.json()) as GeoJSON.FeatureCollection;

         setVisibleReferencias(true);
         addFeaturesToLayer(mapRef.current!, name, places);
      });
   };

   useEffect(() => {

      if (!mapContainerRef.current) return;
      if (mapRef.current) return;

      createMapboxMap();
      addControlsToMap();

      mapRef.current!.on('load', () => {
         addPilaraPolygon();
         initializeLayersPlaces();
         loadPropiedades();
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

         {/* Barra flotante de capas, inicialmente no visible, hasta la primer busqueda */}
         {
            visibleReferencias && (
               <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="flex flex-col gap-2 bg-white rounded-lg shadow-lg p-2">

                     {/* Título */}
                     <div className="flex items-center justify-center gap-2 px-2 py-1 border-b">
                        {/* <Layers className="w-4 h-4" /> */}
                        <span className="text-sm font-semibold">Referencias</span>
                     </div>
                     {
                        capasDeInteres.map(({ icon, label }) => (
                           <div key={label} className="flex items-center justify-start gap-2">
                              <Image src={icon} alt={label} width={32} height={32} />
                              <span className="text-sm">{label}</span>
                           </div>)
                        )
                     }
                  </div>
               </div>
            )
         }
      </div>
   )
}
