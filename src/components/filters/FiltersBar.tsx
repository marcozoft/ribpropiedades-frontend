'use client'

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form, FormField, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Button, UbicacionCommand, FiltersPopover, SortPopover  } from "@/src/components";
import { ItemFilter, SearchParams } from "@/src/interfaces";
import { Search, Trash2 } from "lucide-react";
import Lottie from "lottie-react";
import ribIaAnimation from "@/public/lotties/rib_ia_lottie.json";

type Props = {
   zonas: ItemFilter[];
   operaciones: ItemFilter[];
   emprendimientos: ItemFilter[];
   tipos_inmueble: ItemFilter[];
   filterValues: SearchParams;
   allControls?: boolean;
}

export const FiltersBar = ({ zonas, emprendimientos, operaciones, tipos_inmueble, filterValues, allControls = false }: Props) => {

   const router = useRouter();

   // 1. Define your form.
   const form = useForm<SearchParams>({
      defaultValues: {
         zona: filterValues.zona ?? "",
         emprendimiento: filterValues.emprendimiento ?? "",
         operacion: filterValues.operacion ?? "",
         tipo_inmueble: filterValues.tipo_inmueble ?? "",
      },
   })

   const values = form.watch();

   // 2. Define a submit handler.
   function onSubmit(values: SearchParams) {

      console.log({ values });
      
      const params = new URLSearchParams(
         Object.entries(values)
         .filter(([_, v]) => v !== "" && v != null)
         .map(([k, v]) => [k, String(v)])
      ).toString()
      
      console.log(params);

      router.push(`/propiedades?${params}`);

   }

   return (
      <>

         {/* <pre className="text-xs bg-muted p-2 rounded">
            {JSON.stringify(values, null, 2)}
         </pre>  */}

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 items-center rounded h-20 bg-white z-20 gap-4 px-4">
               <div className="flex justify-center">
                  {/* Zona */}
                  <FormField
                     control={form.control}
                     name="zona"
                     render={({ field }) => (
                        <UbicacionCommand zonas={zonas} emprendimientos={zonas} field={field} />
                     )}
                  />
               </div>
               {/* operacion */}
               <div className="flex justify-center">
                  <FormField
                     control={form.control}
                     name="operacion"
                     render={({ field }) => (
                        <Select
                           name={field.name}
                           value={field.value}
                           onValueChange={field.onChange}
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
               <div className="flex justify-center">
                  <FormField
                     control={form.control}
                     name="tipo_inmueble"
                     render={({ field }) => (
                        <Select
                           name={field.name}
                           value={field.value}
                           onValueChange={field.onChange}
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

               <div className="flex justify-center items-center gap-2">
                  
                  {/* Boton lupa: siempre aparece */}
                  <Button variant="search" type="submit" size="icon">
                     <Search className="size-8"/>
                  </Button>
                  
                  {/* Controles opcionales, solo para paginado y filtros */}
                  { 
                     allControls && (
                        <>

                           {/* filtros y ordenamiento */}
                           <FiltersPopover />
                           <SortPopover />
                           <Button variant="search" size="icon">
                              {/* <i className="flaticon-loupe text-white" /> */}
                              <Trash2 className="size-8"/>
                           </Button>
                        </>
                     )
                  } 

                  {/* Busqueda con IA */}
                  <Lottie
                     className="h-18 w-18 items-center"
                     animationData={ribIaAnimation}
                     loop={true}
                  />

               </div>


            </form>
         </Form>
      </>
   )
}
