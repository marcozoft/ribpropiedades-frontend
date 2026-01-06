import { Filter } from "lucide-react";
import { Button, Input, Label, Popover, PopoverContent, PopoverTrigger } from "../shadcn-components";
import { Select } from "@radix-ui/react-select";

type Props = {
   disabled?: boolean;

}

export function FiltersPopover({disabled}: Props) {
   return (
      <>
         <Popover>
            <PopoverTrigger asChild disabled={disabled}>
               <Button variant="search" size="icon">
                  <Filter className="size-8"/>
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
               <div className="grid gap-4">
                  <div className="space-y-2">
                     <h4 className="leading-none font-medium">Filtros avanzados</h4>
                     <p className="text-muted-foreground text-sm">
                        Seleccione una o más opciones.
                     </p>
                  </div>
                  <div className="grid gap-2">
                     <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Dormitorios</Label>
                        <select
                           id="width"
                           defaultValue="3"
                           className="col-span-2 h-8"
                        >
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>

                        </select>
                     </div>
                  </div>
               </div>
            </PopoverContent>
         </Popover>
      </>
   )
}
