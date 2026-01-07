"use client";

import { Filter } from "lucide-react";
import { Button, Checkbox, FormField, FormItem, FormLabel, FormControl, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../shadcn-components";
import { useState } from "react";
import { Control } from "react-hook-form";
import { ItemFilter, SearchParams } from "@/src/interfaces";
import { con_piscinaItem, con_dos_plantasItem, con_dos_cocherasItem, con_dormitorio_suiteItem } from '../../constants/form-constants';

type Props = {
   control: Control<SearchParams>,
   disabled?: boolean,
   dormitorios: ItemFilter[],
   ambientes: ItemFilter[],
   con_piscinaItem: ItemFilter,
   con_dos_plantasItem: ItemFilter,
   con_dos_cocherasItem: ItemFilter,
   con_dormitorio_suiteItem: ItemFilter,
   onSubmit: () => void,
}

export function FiltersPopover({ 
   control, 
   disabled, 
   onSubmit, 
   dormitorios, 
   ambientes, 
   con_piscinaItem, 
   con_dos_plantasItem, 
   con_dos_cocherasItem, 
   con_dormitorio_suiteItem,
}: Props) {

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
                     Ambientes
                  </p>
               </div>

               {/* Ambientes */}
               <FormField
                  control={control}
                  name="ambientes"
                  render={({ field }) => (
                     <FormItem className="grid grid-cols-3 items-center gap-4">
                        <FormLabel className="font-normal">Ambientes</FormLabel>
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
                        <FormLabel className="font-normal">Dormitorios</FormLabel>
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

               {/* Checkbox */}
               <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">
                     Caractererísticas
                  </p>
                  {/* Checkbox 1: Piscina */}
                  <FormField
                     control={control}
                     name="con_piscina"
                     render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-y-0">
                           <FormControl>
                              <Checkbox
                                 checked={field.value === '1'}
                                 onCheckedChange={(checked) => field.onChange(checked ? '1' : "")}
                                 disabled={disabled}
                              />
                           </FormControl>
                           <FormLabel className="text-sm font-normal cursor-pointer">
                              {con_piscinaItem.label}
                           </FormLabel>
                        </FormItem>
                     )}
                  />

                  {/* Checkbox 2: 2 o mas plantas */}
                  <FormField
                     control={control}
                     name="con_dos_plantas"
                     render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-y-0">
                           <FormControl>
                              <Checkbox
                                 checked={field.value === '1'}
                                 onCheckedChange={(checked) => field.onChange(checked ? '1' : "")}
                                 disabled={disabled}
                              />
                           </FormControl>
                           <FormLabel className="text-sm font-normal cursor-pointer">
                              {con_dos_plantasItem.label}
                           </FormLabel>
                        </FormItem>
                     )}
                  />

                  {/* Checkbox 3: Cocheras */}
                  <FormField
                     control={control}
                     name="con_dos_cocheras"
                     render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-y-0">
                           <FormControl>
                              <Checkbox
                                 checked={field.value === '1'}
                                 onCheckedChange={(checked) => field.onChange(checked ? '1' : "")}
                                 disabled={disabled}
                              />
                           </FormControl>
                           <FormLabel className="text-sm font-normal cursor-pointer">
                              {con_dos_cocherasItem.label}
                           </FormLabel>
                        </FormItem>
                     )}
                  />

                  {/* Checkbox 3: Suite */}
                  <FormField
                     control={control}
                     name="con_dormitorio_suite"
                     render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-y-0">
                           <FormControl>
                              <Checkbox
                                 checked={field.value === '1'}
                                 onCheckedChange={(checked) => field.onChange(checked ? '1' : "")}
                                 disabled={disabled}
                              />
                           </FormControl>
                           <FormLabel className="text-sm font-normal cursor-pointer">
                              {con_dormitorio_suiteItem.label}
                           </FormLabel>
                        </FormItem>
                     )}
                  />
               </div>
               

             

               {/* Checkbox 3: Apto Profesional */}
               {/* <FormField
                  control={control}
                  name="aptoProfesional"
                  render={({ field }) => (
                     <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                           <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              disabled={disabled}
                           />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                           Apto profesional
                        </FormLabel>
                     </FormItem>
                  )}
               /> */}

               <Button variant="search" 
                  onClick={onClickResultados}>VER RESULTADOS</Button>
            </div>
         </PopoverContent>
      </Popover>
   )
}
