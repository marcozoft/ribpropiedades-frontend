"use client";

import { Filter } from "lucide-react";
import { Button, FormField, FormItem, FormLabel, FormControl, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../shadcn-components";
import { useState } from "react";
import { Control } from "react-hook-form";
import { ItemFilter, SearchParams } from "@/src/interfaces";

type Props = {
   control: Control<SearchParams>,
   disabled?: boolean,
   dormitorios: ItemFilter[],
   ambientes: ItemFilter[],
   onSubmit: () => void,
}

export function FiltersPopover({ control, disabled, onSubmit, dormitorios, ambientes }: Props) {

   const [open, setOpen] = useState(false)   

   const onClickResultados = () => {
      onSubmit();
      setOpen(false);
   }

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild disabled={disabled} >
            <Button variant="search" size="icon">
               <Filter className="size-8" />
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

               {/* Ambientes */}
               <FormField
                  control={control}
                  name="ambientes"
                  render={({ field }) => (
                     <FormItem className="grid grid-cols-3 items-center gap-4">
                        <FormLabel className="text-right">Ambientes</FormLabel>
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
                                       ambientes.map( item => 
                                          (<SelectItem key={item.valor} value={item.valor}>{item.label}</SelectItem>)
                                       )
                                    }
                                 </SelectGroup>
                              </SelectContent>
                           </Select>
                        </FormControl>
                     </FormItem>
                  )}
               />

               {/* Dormitorios */}
               <FormField
                  control={control}
                  name="dormitorios"
                  render={({ field }) => (
                     <FormItem className="grid grid-cols-3 items-center gap-4">
                        <FormLabel className="text-right">Dormitorios</FormLabel>
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
                                       dormitorios.map( item => 
                                          (<SelectItem key={item.valor} value={item.valor}>{item.label}</SelectItem>)
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
