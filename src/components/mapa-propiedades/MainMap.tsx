"use client";

import 'leaflet/dist/leaflet.css';
import { BASE_ATTRIBUTION, BASE_URL, MAP_INDEX_CENTER, MAP_ZOOM_START, MARKER, REFERENCE_MARKER } from "@/src/constants/geo-constants";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { SyntheticEvent, useRef, useState } from 'react';
import { LatLngLiteral } from 'leaflet';



export default function MainMap() {

    const [position, setPosition] = useState<LatLngLiteral>({lat: -40.15451161680131, lng:-71.34787014700214});    

    const [placeTypes, setPlaceTypes] = useState(['restaurants'])
    const [radius, setRadius] = useState(500);

    
    const onChangeSelect = (_event: SyntheticEvent | null, value: string[] | null) => {

        console.log(value);
        setPlaceTypes(value!);
        
    }


    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "70%", height: "100vh" }}>
                <MapContainer 
                    center={MAP_INDEX_CENTER} 
                    zoom={MAP_ZOOM_START} scrollWheelZoom={true} 
                    dragging={true} 
                    style={{ height: '100%', zIndex: 0 }}
                >
                    <TileLayer
                        attribution={BASE_ATTRIBUTION}
                        url={BASE_URL}
                    />
                    

                    {
                        places.map( (place:Place) => (
                            <Marker
                                key={place.name}
                                position={[place.location.latitude, place.location.longitude]}
                                icon={MARKER}
                            >
                                <Popup>
                                    <Card
                                        variant="soft"
                                        color="primary"
                                        invertedColors
                                    >
                                        <CardContent>
                                            <Typography level="h1">{place.displayName.text}</Typography>
                                            <Typography level="h2">{place.primaryTypeDisplayName.text}</Typography>
                                            <Typography level="h3">{place.types.join('-')}</Typography>
                                            <Typography level="body-xs">{ place.formattedAddress }</Typography>
                                        </CardContent>
                                    </Card>             
                                </Popup>
                            </Marker>
                        ))
                    }

                </MapContainer>
            </div>

        </div>
    )
}
