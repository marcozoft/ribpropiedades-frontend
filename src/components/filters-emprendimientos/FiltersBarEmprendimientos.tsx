'use client'

import { Button, Form, CategoriaEmprendimientoPopover } from "@/src/components";
import { ItemFilter, SearchParamsEmprendimientos } from "@/src/interfaces";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

type Props = {
   filterValues: SearchParamsEmprendimientos;
   className?: string;
   categorias: ItemFilter[];
}

export const FiltersBarEmprendimientos = ({ filterValues, categorias }: Props) => {

   const form = useForm<SearchParamsEmprendimientos>({
      defaultValues: filterValues
   });
   const router = useRouter();
   const [isPending, startTransition] = useTransition();

   /**
    * Enviar formulario
    * Toma los datos del hook y navega con los parámetros
   */
   const onSubmit = (valuesForm: SearchParamsEmprendimientos) => {
      const params = new URLSearchParams();
      
      if (valuesForm.categoria && valuesForm.categoria.length > 0) {
         valuesForm.categoria.forEach(cat => {
            params.append('categoria', cat);
         });
      }

      startTransition(() => {
         router.push(`/emprendimientos?${params.toString()}`);
      });
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
            {/* <pre className="text-xs bg-muted p-2 rounded">
               {JSON.stringify(form.getValues(), null, 2)}
            </pre>  */}

            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 grow animate-in fade-in fade-out">

               <CategoriaEmprendimientoPopover control={form.control} onSubmit={onSubmit} categorias={categorias} />

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
