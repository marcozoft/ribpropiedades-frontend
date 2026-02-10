"use client";

import { ArrowDownUp } from "lucide-react";
import { Button, FormField, FormItem, FormLabel, FormControl, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../shadcn-components";
import { useState } from "react";
import { Control } from "react-hook-form";
import { ItemFilter, SearchParams } from "@/src/interfaces";

type Props = {
   control: Control<SearchParams>,
   disabled?: boolean,
   ordenes: ItemFilter[],
   onSubmit: () => void,
}

export function SortPopover({ control, disabled, ordenes, onSubmit }: Props) {

   const [open, setOpen] = useState(false)


   const onClickResultados = () => {
      onSubmit();
      setOpen(false);
   }

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild disabled={disabled} >
            <Button variant="search" size="icon">
               <ArrowDownUp className="size-6" />
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
                        <FormLabel className="text-right">Orden</FormLabel>
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
                                    {
                                       ordenes.map(({valor, label}) =>
                                          ( <SelectItem key={valor} value={valor}>{label}</SelectItem> )
                                       )
                                    }
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
