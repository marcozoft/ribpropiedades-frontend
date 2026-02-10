"use client";

import { Filter } from "lucide-react";
import { Button, Checkbox, FormField, FormItem, FormLabel, FormControl, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../shadcn-components";
import { useState } from "react";
import { Control } from "react-hook-form";
import { SearchParamsEmprendimientos } from "@/src/interfaces";
import { Field, FieldGroup, FieldLabel } from "../shadcn-components/ui/field";
import { CATEGORIAS_EMPRENDIMIENTOS } from "@/src/constants/form-constants";

type Props = {
   control: Control<SearchParamsEmprendimientos>,
   disabled?: boolean,
   onSubmit?: () => void,
}

export function FiltersEmprendimientosPopover({
   control,
   // onSubmit, 
}: Props) {

   const [open, setOpen] = useState(false)

   const onClickResultados = () => {
      // onSubmit();
      setOpen(false);
   }

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild >
            <Button variant="search" size="icon">
               <Filter className="size-6" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-80">
            <div className="grid gap-4">
               <div className="space-y-2">
                  <h4 className="leading-none font-medium">Tipo de emprendimiento</h4>
               </div>

               <FormField
                  control={control}
                  name="categoria"
                  render={({ field }) => (
                     <FieldGroup className="gap-3">
                        {
                           CATEGORIAS_EMPRENDIMIENTOS.map(({ valor, label }) => (
                              <Field orientation="horizontal" key={valor}>
                                 <Checkbox
                                    id={valor}
                                    checked={field.value?.includes(valor) || false}
                                    onCheckedChange={(checked) => {
                                       const newValue = checked
                                          ? [...(field.value || []), valor]
                                          : field.value?.filter((v: string) => v !== valor) || [];
                                       field.onChange(newValue);
                                    }}
                                    className="cursor-pointer"
                                 />
                                 <FieldLabel
                                    htmlFor={valor}
                                    className="font-normal cursor-pointer"
                                 >{label}
                                 </FieldLabel>
                              </Field>
                           ))
                        }
                     </FieldGroup>)}
               />

               <Button variant="search"
                  onClick={onClickResultados}>VER RESULTADOS</Button>
            </div>
         </PopoverContent>
      </Popover>
   )
}
