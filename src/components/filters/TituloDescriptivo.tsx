import { ItemFilter, SearchParams } from "@/src/interfaces"
import { ArrowDownNarrowWideIcon, ArrowDownUp, BadgeCheckIcon, HandshakeIcon, HouseIcon, MapPinIcon, Pin, PinIcon, Search, SearchAlert } from "lucide-react";
import { Item, ItemContent, ItemMedia, ItemTitle, ItemDescription } from "@/src/components";


type Props = {
   filterValues: SearchParams,
   length: number
   zonas: ItemFilter[];
   operaciones: ItemFilter[];
   emprendimientos: ItemFilter[];
   dormitorios: ItemFilter[];
   ambientes?: ItemFilter[];
}
export const TituloDescriptivo = ({ filterValues, length, operaciones }: Props) => {

   const filtrosActivos = [
      filterValues.zona,
      filterValues.operacion,
      filterValues.tipo_inmueble
   ].filter(Boolean);

   const hayFiltros = filtrosActivos.length > 0;

   return (
      // TODO: Armar lo plurales: lote -> lotes, casa -> casas
      <div className="max-w-6xl mx-auto flex flex-col pb-1">
         <h1 className="text-5xl text-black font-bold">
            {length} {length === 1 ? 'propiedad' : 'propiedades'} {length === 1 ? 'encontrada' : 'encontradas'}
         </h1>
         <br />

         <div className="flex gap-2">
            <Item variant="muted">
               <ItemMedia>
                  <MapPinIcon className="size-5" />
               </ItemMedia>
               <ItemContent>
                  <ItemTitle>Pilar Centro</ItemTitle>
               </ItemContent>
            </Item>

            <Item variant="muted">
               <ItemMedia>
                  <HandshakeIcon className="size-5" />
               </ItemMedia>
               <ItemContent>
                  <ItemTitle>Venta</ItemTitle>
               </ItemContent>
            </Item>

            <Item variant="muted">
               <ItemMedia>
                  <HouseIcon className="size-5" />
               </ItemMedia>
               <ItemContent>
                  <ItemTitle>Casa</ItemTitle>
               </ItemContent>
            </Item>
         </div>
         <div className="flex justify-end">
            <Item variant="muted">
               <ItemMedia>
                  <ArrowDownNarrowWideIcon className="size-5" />
               </ItemMedia>
               <ItemContent>
                  <ItemTitle>Menor precio</ItemTitle>
               </ItemContent>
            </Item>
         </div>
         <div>

         </div>

         {/* {
            hayFiltros
               ? (
                  <h2 className="uppercase">
                     <Search className="size-4" />
                     {filtrosActivos.map(filtro => filtro).join(' - ')}
                  </h2>
               )
               : (<h2 className="uppercase">Listado completo</h2>)
         } */}
         {/* <h3 className="text-black">
            <ArrowDownUp className="size-4" />
         </h3> */}
      </div>
   )
}