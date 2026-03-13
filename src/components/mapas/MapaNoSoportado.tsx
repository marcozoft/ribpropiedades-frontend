type Props = {
   className?: string;
}

export const MapaNoSoportado = ( {className}: Props ) => {
   return (
      <div className={`${className} bg-background flex items-center justify-center`}>
         <p className="text-center">Tu navegador no soporta el mapa interactivo, <br/>
            activá la aceleración de hardware o probá con otro navegador.
         </p>
      </div>
   )
}
