"use client";

import { Filter } from "lucide-react";
import { useState } from "react";
import { Control, useWatch } from "react-hook-form";
import { SearchParamsEmprendimientos } from "@/src/interfaces";
import { Button, Checkbox, FormField, Popover, PopoverContent, PopoverTrigger, Field, FieldGroup, FieldLabel } from "@/src/components";
import { CATEGORIAS_EMPRENDIMIENTOS } from "@/src/constants/form-constants";

type Props = {
   control: Control<SearchParamsEmprendimientos>,
   disabled?: boolean,
   onSubmit: (searchPararms: SearchParamsEmprendimientos) => void,
}

export function CategoriaEmprendimientoPopover({
   control,
   onSubmit,
}: Props) {

   const [open, setOpen] = useState(false)

   // obtener valores actuales del formulario y pasarlos al callback
   const categoriasSeleccionadas = useWatch({ control, name: 'categoria' }) as string[] | undefined;

   const onClickResultados = () => {
      const payload: SearchParamsEmprendimientos = {
         categoria: categoriasSeleccionadas || []
      };
      onSubmit(payload);
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
