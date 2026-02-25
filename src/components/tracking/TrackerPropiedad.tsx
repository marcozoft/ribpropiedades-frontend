"use client";

import { trackPropiedad } from "@/src/actions-tracking";
import { TrackingResponse } from "@/src/interfaces";
import { getOrCreateSessionId } from "@/src/utils";
import { useEffect, useState } from "react";


type Props = {
  propiedadId: number;
}


export const TrackerPropiedad = ({propiedadId}: Props) => {

  const [trackingResponse, setTrackingResponse] = useState<TrackingResponse>();
  
  useEffect(() => {

    const fetchTracking = async () => {
      const id = getOrCreateSessionId();
      const response = await trackPropiedad(propiedadId, id);
      console.log('Response', response);
      setTrackingResponse(response);
    };

    fetchTracking();
  }, [propiedadId]);
  
  return (
    null
  )
}
