'use client';

import { Button } from "@/src/components"
import { hasWebGL } from "@/src/utils";
import { Grid, Loader2, Map } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useTransition } from "react";

type Props = {
   vista?: 'mapa' | 'grilla'
}

export const ControlMapaGrilla = ({vista}: Props) => {

   const router = useRouter();
   const searchParams = useSearchParams();
   const [supported, setSupported] = useState<boolean | null>(null);
   const [isPending, startTransition] = useTransition();
   
   
   useEffect(() => {
      setSupported(hasWebGL());
   }, []);

   const handleClick = () => {
      // Crear una nueva instancia de URLSearchParams con los parámetros actuales
      const params = new URLSearchParams(searchParams.toString());
      
      // Cambiar el parámetro de vista
      if (vista === 'mapa') {
         params.set('vista', 'grilla');
      } else {
         params.set('vista', 'mapa');
      }
      
      startTransition(() => {
         // Hacer push manteniendo todos los filtros
         router.push(`?${params.toString()}`);
      });
   };

   return (
      supported && <Button
         disabled={isPending}
         variant='search' 
         className="fixed bottom-6 bg-foreground left-1/2 -translate-x-1/2 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 z-50"
         onClick={handleClick}
      >
      {
         isPending
         ? <><Loader2 className="size-5 animate-spin"/>Cargando</> 
         :  vista == 'mapa'
               ? (<> <Grid />Ver grilla </>)
               : (<> <Map />Ver mapa </>)
      }
      </Button >
  )
}
