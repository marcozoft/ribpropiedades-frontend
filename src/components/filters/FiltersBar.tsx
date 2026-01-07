'use client'

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect, useTransition } from "react";
import { Form, FormField, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Button, UbicacionCommand, FiltersPopover, SortPopover  } from "@/src/components";
import { ItemFilter, SearchParams } from "@/src/interfaces";
import { Search, Trash2, Loader2 } from "lucide-react";
import Lottie from "lottie-react";
import ribIaAnimation from "@/public/lotties/rib_ia_lottie.json";
import { ambientesItemFilters, searchExamples, ordenes, con_piscinaItem, con_dos_cocherasItem, con_dormitorio_suiteItem, con_dos_plantasItem } from "@/src/constants/form-constants";
import { filterSearchParams } from "@/src/utils";

type Props = {
   zonas: ItemFilter[];
   operaciones: ItemFilter[];
   emprendimientos: ItemFilter[];
   dormitorios: ItemFilter[];
   ambientes?: ItemFilter[]; // TODO: Debe venir como parametro
   tipos_inmueble: ItemFilter[];
   filterValues: SearchParams;
   allControls?: boolean;
}

export const FiltersBar = ({ 
   zonas, 
   emprendimientos,
   dormitorios,
   operaciones, 
   tipos_inmueble, 
   filterValues,
   allControls = false }: Props) => {

   const router = useRouter();
   const [isPending, startTransition] = useTransition();
   const [iaModeActive, setIaModeActive] = useState(false);
   const [iaSearchQuery, setIaSearchQuery] = useState("");
   const [placeholderText, setPlaceholderText] = useState("");
   const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

   const form = useForm<SearchParams>();
   const values = form.watch();

   // Efecto para animación del placeholder
   useEffect(() => {
      if (!iaModeActive) return;

      const currentExample = "ej: " + searchExamples[currentExampleIndex] + " . . .";
      let charIndex = 0;

      const typingInterval = setInterval(() => {
         if (charIndex <= currentExample.length) {
            setPlaceholderText(currentExample.substring(0, charIndex));
            charIndex++;
         } else {
            clearInterval(typingInterval);
            // Esperar 2 segundos antes de pasar al siguiente ejemplo
            setTimeout(() => {
               setCurrentExampleIndex((prev) => (prev + 1) % searchExamples.length);
            }, 2000);
         }
      }, 100);

      return () => clearInterval(typingInterval);
   }, [iaModeActive, currentExampleIndex]);

   const toggleIaMode = () => {
      setIaModeActive(!iaModeActive);
      setIaSearchQuery("");
      setPlaceholderText("");
   };



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
   const onClickClear = () =>{
      startTransition(() => {
         router.push('/propiedades');
      });
   }

   return (
      <>
         {/* Activar para debug */}
         {/* <pre className="text-xs bg-muted p-2 rounded">
            {JSON.stringify(values, null, 2)}
         </pre>  */}

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-12 items-center rounded h-20 bg-white z-20 gap-4 px-2">
               
               {!iaModeActive ? (
                  <>
                     {/* Espacio vacío solo en home */}
                     {!allControls && <div className="hidden md:block md:col-span-1"></div>}
                     
                     <div className={`flex justify-center ${!allControls ? 'md:col-span-3' : 'md:col-span-3'}`}>
                        
                        {/* Zona / Emprendimiento */}
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
                     <div className="flex justify-center md:col-span-3">
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
                     <div className="flex justify-center md:col-span-3">
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
                  </>
               ) : (
                  <>
                     {/* Espacio vacío en modo IA siempre */}
                     <div className="hidden md:block md:col-span-1"></div>
                     
                     <div className={`flex items-center gap-4 ${!allControls ? 'md:col-span-9' : 'md:col-span-8'}`}>
                        <label className="text-foreground font-semibold text-lg whitespace-nowrap">
                           Buscador Inteligente
                        </label>
                        <input
                           type="text"
                           value={iaSearchQuery}
                           onChange={(e) => setIaSearchQuery(e.target.value)}
                           placeholder={placeholderText}
                           className="flex-1 h-12 px-4 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                        />
                     </div>
                  </>
               )}

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
                        <Loader2 className="size-8 animate-spin"/>
                     ) : (
                        <Search className="size-8"/>
                     )}
                  </Button>
                  
                  {/* Controles opcionales, solo para paginado y filtros */}
                  { 
                     allControls && !iaModeActive && (
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
                              <Trash2 className="size-8" />
                           </Button>
                        </>
                     )
                  } 

                  {/* Busqueda con IA */}
                  <button
                     type="button"
                     onClick={toggleIaMode}
                     className={`relative transition-all duration-200 rounded-lg p-1 ${
                        iaModeActive 
                           ? 'bg-foreground/20 shadow-inner translate-y-0.5 scale-95 ring-2 ring-foreground/40' 
                           : 'hover:scale-105 hover:bg-foreground/5 active:translate-y-0.5'
                     }`}
                  >
                     <Lottie
                        className="h-14 w-14"
                        animationData={ribIaAnimation}
                        loop={true}
                     />
                  </button>
               </div>
            </form>
         </Form>
      </>
   )
}
