import { ItemFilter, SearchParams } from "@/src/interfaces"
import { ArrowDownNarrowWideIcon, BedDouble, Car, HandshakeIcon, House, LampCeiling, MapPinIcon, TableCellsSplit, WavesLadder } from "lucide-react";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/src/components";


type LabelIcon = {
   label: string;
   icon: React.ReactNode
}

const icons: LabelIcon[] = [
   {
      label: 'con_piscina',
      icon: (<WavesLadder />)
   },{
      label: 'con_dos_plantas',
      icon: (<TableCellsSplit />)
   },{
      label: 'con_dormitorio_suite',
      icon: (<BedDouble />)
   },{
      label: 'con_dos_cocheras',
      icon: (<Car />)
   },
];


type Props = {
   ambientesItemFilters: ItemFilter[];
   booleansFilters: ItemFilter[]; // Checkbox
   dormitoriosItemFilters: ItemFilter[];
   emprendimientos: ItemFilter[];
   filterValues: SearchParams,
   length: number
   operaciones: ItemFilter[];
   ordenes: ItemFilter[];
   tipos_inmueble: ItemFilter[];
   zonas: ItemFilter[];
}
export const TituloDescriptivo = ({
   ambientesItemFilters,
   booleansFilters,
   dormitoriosItemFilters,
   emprendimientos,
   filterValues,
   length,
   operaciones,
   ordenes,
   tipos_inmueble,
   zonas,
}: Props) => {

   const { zona, emprendimiento, operacion, ambientes, dormitorios, tipo_inmueble, orden, vista, queryAI, ...rest } = filterValues;   

   return (
      <div className="max-w-6xl mx-auto flex flex-col justify-between pb-2 min-h-40">
         <h1 className="text-3xl text-black font-bold">
            {length} {length === 1 ? 'propiedad' : 'propiedades'} {length === 1 ? 'encontrada' : 'encontradas'}
         </h1>
         <br />

         {/* Filtros aplicados */}
         <div className="flex flex-wrap gap-2">
            {
               zona && (
                  <Item variant="muted" className="shrink-0">
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
                  <Item variant="muted" className="shrink-0">
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
                  <Item variant="muted" className="shrink-0">
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
                  <Item variant="muted" className="shrink-0">
                     <ItemMedia>
                        <House className="size-5" />
                     </ItemMedia>
                     <ItemContent>
                        <ItemTitle>{tipos_inmueble.find(item => item.valor === tipo_inmueble)?.label}</ItemTitle>
                     </ItemContent>
                  </Item>
               )
            }
            {
               ambientes && (
                  <Item variant="muted"  className="shrink-0">
                     <ItemMedia>
                        <LampCeiling />

                     </ItemMedia>
                     <ItemContent>
                        <ItemTitle>{ambientesItemFilters.find(item => item.valor === ambientes)?.label}</ItemTitle>
                     </ItemContent>
                  </Item>
               )
            }

            {
               dormitorios && (
                  <Item variant="muted" className="shrink-0">
                     <ItemMedia>
                        <i className="flaticon-bed" />
                     </ItemMedia>
                     <ItemContent>
                        <ItemTitle>{dormitoriosItemFilters.find(item => item.valor === dormitorios)?.label}</ItemTitle>
                     </ItemContent>
                  </Item>
               )
            }


            {/* Caracteristicas checkbox */}
            {
               Object.entries(rest).map(([key, value]) => {
                  const iconData = icons.find(icon => icon.label === key);
                  if (!iconData) return null;
                  
                  return (
                     <Item variant="muted" key={key} className="shrink-0">
                        <ItemMedia>
                           {iconData.icon}
                        </ItemMedia>
                        <ItemContent>
                           <ItemTitle>{booleansFilters.find(item => item.valor === key)?.label}</ItemTitle>
                        </ItemContent>
                     </Item>
                  );
               })
            }
         </div>

         {/* Ordenamiento */}
         <div className="flex justify-end">
            {
               orden && (
                  <Item variant="muted">
                     <ItemMedia>
                        <ArrowDownNarrowWideIcon className="size-5" />
                     </ItemMedia>
                     <ItemContent>
                        <ItemTitle>{ordenes.find(item => item.valor === orden)?.label}</ItemTitle>
                     </ItemContent>
                  </Item>
               )
            }
         </div>
      </div>
   )
}