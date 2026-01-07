import { ItemFilter, SearchParams } from "@/src/interfaces"
import { ArrowDownNarrowWideIcon, CheckCheckIcon, CircleCheckBigIcon, HandshakeIcon, HouseIcon, MapPinIcon } from "lucide-react";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/src/components";


type Props = {
   filterValues: SearchParams,
   length: number
   zonas: ItemFilter[];
   operaciones: ItemFilter[];
   emprendimientos: ItemFilter[];
   dormitorios: ItemFilter[];
   ambientes: ItemFilter[];
   ordenes: ItemFilter[];
   tipos_inmueble: ItemFilter[];
   booleansFilters: ItemFilter[]; // Checkbox
}
export const TituloDescriptivo = ({ filterValues, length, zonas, operaciones, tipos_inmueble, emprendimientos, ambientes, booleansFilters }: Props) => {

   const { zona, emprendimiento, operacion, tipo_inmueble, ...rest } = filterValues;   

   return (
      <div className="max-w-6xl mx-auto flex flex-col pb-2">
         <h1 className="text-5xl text-black font-bold">
            {length} {length === 1 ? 'propiedad' : 'propiedades'} {length === 1 ? 'encontrada' : 'encontradas'}
         </h1>
         <br />

         {/* Filtros aplicados */}
         <div className="flex gap-2">
            {
               zona && (
                  <Item variant="muted">
                     <ItemMedia>
                        <MapPinIcon className="size-5" />
                     </ItemMedia>
                     <ItemContent>
                        <ItemTitle>{zonas.find(item => item.valor === zona)?.label}</ItemTitle>
                     </ItemContent>
                  </Item>
               )
            }
            {
               emprendimiento && (
                  <Item variant="muted">
                     <ItemMedia>
                        <MapPinIcon className="size-5" />
                     </ItemMedia>
                     <ItemContent>
                        <ItemTitle>{emprendimientos.find(item => item.valor === emprendimiento)?.label}</ItemTitle>
                     </ItemContent>
                  </Item>
               )
            }
            {
               operacion && (
                  <Item variant="muted">
                     <ItemMedia>
                        <HandshakeIcon className="size-5" />
                     </ItemMedia>
                     <ItemContent>
                        <ItemTitle>{operaciones.find(item => item.valor === operacion)?.label}</ItemTitle>
                     </ItemContent>
                  </Item>
               )
            }
            {
               tipo_inmueble && (
                  <Item variant="muted">
                     <ItemMedia>
                        <HandshakeIcon className="size-5" />
                     </ItemMedia>
                     <ItemContent>
                        <ItemTitle>{tipos_inmueble.find(item => item.valor === tipo_inmueble)?.label}</ItemTitle>
                     </ItemContent>
                  </Item>
               )
            }
            {/* Caracteristicas checkbox */}
            {
               Object.entries(rest).map(([key, _]) => 
                  (
                     <Item variant="muted" key={key}>
                        <ItemMedia>
                           <CircleCheckBigIcon className="size-5" />
                        </ItemMedia>
                        <ItemContent>
                           <ItemTitle>{ booleansFilters.find( item => item.valor === key)?.label }</ItemTitle>
                        </ItemContent>
                     </Item>
                  )
               )
            }
         </div>

         {/* Ordenamiento */}
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
      </div>
   )
}