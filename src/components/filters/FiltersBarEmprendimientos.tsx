'use client'

import { Button, Form, FormField, SelectTrigger } from "@/src/components";
import { SearchParamsEmprendimientos } from "@/src/interfaces";
import { Select, SelectContent, SelectGroup, SelectValue } from "@radix-ui/react-select";
import { Loader2, Search, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { FiltersEmprendimientosPopover } from "./FiltersEmprendimientosPopover";

type Props = {
   filterValues: SearchParamsEmprendimientos;
   className?: string;
}

export const FiltersBarEmprendimientos = ({ className, ...rest }: Props) => {

   const form = useForm<SearchParamsEmprendimientos>();
   const router = useRouter();
   const [isPending, startTransition] = useTransition();

   /**
    * Enviar formulario
    * Toma los datos del hook 
   */
   const onSubmit = (valuesForm?: SearchParamsEmprendimientos) => {

      // const params = filterSearchParams(values);

      // startTransition(() => {
      //    router.push(`/propiedades?${params}`);
      // });
   }


   /**
    * Limpiar busqueda y recargar
   */
   const onClickClear = () => {
      startTransition(() => {
         router.push('/emprendimientos');
      });
   }

   return (
      <div className={`flex items-center justify-center rounded z-20 gap-4 px-6 py-5`}>
         <Form {...form}>

            {/* Activar para debug */}
            <pre className="text-xs bg-muted p-2 rounded">
               {JSON.stringify(form.getValues(), null, 2)}
            </pre> 

            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 grow animate-in fade-in fade-out">

               {/* Selects grid*/}
               <FiltersEmprendimientosPopover control={form.control} />

               {/* Limpiar busqueda */}
               <Button
                  variant="search"
                  size="icon"
                  onClick={onClickClear}
                  disabled={isPending}
               >
                  <Trash2 className="size-6" />
               </Button>


            </form>
         </Form>
      </div>
   )
}
