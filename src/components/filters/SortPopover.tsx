"use client";

import { ArrowDownUp } from "lucide-react";
import { Button, FormField, FormItem, FormLabel, FormControl, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../shadcn-components";
import { useState } from "react";
import { Control } from "react-hook-form";
import { SearchParams } from "@/src/interfaces";

type Props = {
   control: Control<SearchParams>,
   disabled?: boolean,
   onSubmit: () => void,
}

export function SortPopover({ control, disabled, onSubmit }: Props) {

   const [open, setOpen] = useState(false)


   const onClickResultados = () => {
      onSubmit();
      setOpen(false);
   }

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild disabled={disabled} >
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
               <FormField
                  control={control}
                  name="orden"
                  render={({ field }) => (
                     <FormItem className="grid grid-cols-3 items-center gap-4">
                        <FormLabel className="text-right">Precio</FormLabel>
                        <FormControl>
                           <Select
                              value={field.value}
                              onValueChange={field.onChange}
                              disabled={disabled}
                           >
                              <SelectTrigger className="col-span-2 w-full">
                                 <SelectValue placeholder="Seleccione" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectGroup>
                                    <SelectItem key="precio_asc" value="precio_asc">Ascendente</SelectItem>
                                    <SelectItem key="precio_desc" value="precio_desc">Descendiente</SelectItem>
                                 </SelectGroup>
                              </SelectContent>
                           </Select>
                        </FormControl>
                     </FormItem>
                  )}
               />
               <Button variant="search" 
                  onClick={onClickResultados}>VER RESULTADOS</Button>
            </div>
         </PopoverContent>
      </Popover>
   )
}
