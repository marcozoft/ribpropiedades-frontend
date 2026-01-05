"use client";

import { ArrowDownUp } from "lucide-react";
import { Button, Label, Popover, PopoverContent, PopoverTrigger } from "../shadcn-components";
import { useState } from "react";


export function SortPopover() {

   const [open, setOpen] = useState(false)

   return (
      <>
         <Popover>
            <PopoverTrigger asChild>
               <Button variant="search" size="icon">
                  <ArrowDownUp className="size-8" />
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
               <div className="grid gap-4">
                  <div className="space-y-2">
                     <h4 className="leading-none font-medium">Ordenar resultados</h4>
                     <p className="text-muted-foreground text-sm">
                        Seleccione una opción para ordenar.
                     </p>
                  </div>
                  <div className="grid gap-2">
                     <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Precio</Label>
                        <select
                           id="width"
                           defaultValue="3"
                           className="col-span-2 h-8"
                        >
                           <option >Menor precio</option>
                           <option >Mayor precio</option>

                        </select>
                     </div>
                  </div>
               </div>
            </PopoverContent>
         </Popover>
      </>
   )
}
