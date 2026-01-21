"use client";

import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { Button, FiltersPopover, Form, FormField, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, SortPopover, UbicacionCommand } from "@/src/components";
import { filterSearchParams } from "@/src/utils";
import { ItemFilter, SearchParams } from "@/src/interfaces";
import { useForm } from "react-hook-form";
import { Loader2, Search, Trash2 } from "lucide-react";
import { ambientesItemFilters, con_dormitorio_suiteItem, con_dos_cocherasItem, con_dos_plantasItem, con_piscinaItem, ordenes } from "@/src/constants/form-constants";

type Props = {
   allControls?: boolean;
   zonas: ItemFilter[];
   operaciones: ItemFilter[];
   emprendimientos: ItemFilter[];
   dormitorios: ItemFilter[];
   ambientes?: ItemFilter[];
   tipos_inmueble: ItemFilter[];
   filterValues: SearchParams;
}

export const ClasicSearch = ({
   allControls,
   zonas,
   emprendimientos,
   tipos_inmueble,
   operaciones,
   filterValues,
   dormitorios
}: Props) => {

   const router = useRouter();
   const [isPending, startTransition] = useTransition();
   const form = useForm<SearchParams>();
   const values = form.watch();

   /**
    *  Actualizar formulario cuando cambian los filterValues 
    *  (ej: navegación con botón atrás)
    */
   useEffect(() => {
      form.reset({
         zona: filterValues.zona ?? "",
         emprendimiento: filterValues.emprendimiento ?? "",
         operacion: filterValues.operacion ?? "",
         tipo_inmueble: filterValues.tipo_inmueble ?? "",
         orden: filterValues.orden ?? "",
         ambientes: filterValues.ambientes ?? "",
         dormitorios: filterValues.dormitorios ?? "",
         con_piscina: filterValues.con_piscina ?? "",
         con_dos_plantas: filterValues.con_dos_plantas ?? "",
         con_dormitorio_suite: filterValues.con_dormitorio_suite ?? "",
      });
   }, [filterValues, form]);

   /**
    * Enviar formulario
    * Toma los datos del hook 
   */
   const onSubmit = (valuesForm?: SearchParams) => {

      const params = filterSearchParams(values);

      startTransition(() => {
         router.push(`/propiedades?${params}`);
      });
   }

   /**
    * Limpiar busqueda y recargar
   */
   const onClickClear = () => {
      startTransition(() => {
         router.push('/propiedades');
      });
   }

   return (
      <Form {...form}>

         {/* Activar para debug */}
         {/* <pre className="text-xs bg-muted p-2 rounded">
            {JSON.stringify(values, null, 2)}
         </pre>  */}
         <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">

            {/* Selects grid*/}
            <div className="grow grid grid-cols-12 items-center gap-4">
               {/* Zona / Emprendimiento */}
               <div className={`flex justify-center col-span-1 md:col-span-4`}>
                  <UbicacionCommand
                     zonas={zonas}
                     emprendimientos={emprendimientos}
                     setValue={form.setValue}
                     zonaValue={values.zona!}
                     emprendimientoValue={values.emprendimiento!}
                     disabled={isPending}
                  />
               </div>

               {/* operacion */}
               <div className="flex justify-center col-span-1 md:col-span-4">
                  <FormField
                     control={form.control}
                     name="operacion"
                     render={({ field }) => (
                        <Select
                           name={field.name}
                           value={field.value}
                           onValueChange={field.onChange}
                           disabled={isPending}
                        >
                           <SelectTrigger className="w-full">
                              <SelectValue placeholder="Operacion" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 {
                                    operaciones.map(item => (<SelectItem key={item.valor} value={item.valor}>{item.label}</SelectItem>))
                                 }
                              </SelectGroup>

                           </SelectContent>
                        </Select>
                     )}
                  />
               </div>

               {/* tipo de inmueble */}
               <div className="flex justify-center md:col-span-4">
                  <FormField
                     control={form.control}
                     name="tipo_inmueble"
                     render={({ field }) => (
                        <Select
                           name={field.name}
                           value={field.value}
                           onValueChange={field.onChange}
                           disabled={isPending}
                        >
                           <SelectTrigger className="w-full">
                              <SelectValue placeholder="Tipo de inmueble" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 {
                                    tipos_inmueble.map(item => (<SelectItem key={item.valor} value={item.valor}>{item.label}</SelectItem>))
                                 }
                              </SelectGroup>

                           </SelectContent>
                        </Select>
                     )}
                  />
               </div>
            </div>



            {/* Botones con icono */}
            <div className={`flex justify-center items-center gap-2 ${!allControls ? 'md:col-span-2' : 'md:col-span-3'}`}>

               {/* Boton lupa: siempre aparece */}
               <Button
                  variant="search"
                  type="submit"
                  size="icon"
                  disabled={isPending}
               >
                  {isPending ? (
                     <Loader2 className="size-6 animate-spin" />
                  ) : (
                     <Search className="size-6" />
                  )}
               </Button>

               {/* Controles opcionales, solo para paginado y filtros */}
               {
                  allControls && (
                     <>
                        {/* filtros */}
                        <FiltersPopover
                           disabled={isPending}
                           control={form.control}
                           onSubmit={onSubmit}
                           dormitorios={dormitorios}
                           ambientes={ambientesItemFilters}
                           con_piscinaItem={con_piscinaItem}
                           con_dos_plantasItem={con_dos_plantasItem}
                           con_dos_cocherasItem={con_dos_cocherasItem}
                           con_dormitorio_suiteItem={con_dormitorio_suiteItem}
                        />

                        {/* Ordenamiento */}
                        <SortPopover
                           ordenes={ordenes}
                           disabled={isPending}
                           control={form.control}
                           onSubmit={onSubmit}
                        />

                        {/* Limpiar busqueda */}
                        <Button
                           variant="search"
                           size="icon"
                           onClick={onClickClear}
                           disabled={isPending}
                        >
                           <Trash2 className="size-6" />
                        </Button>
                     </>
                  )
               }
            </div>
         </form>
      </Form>
   )
}
