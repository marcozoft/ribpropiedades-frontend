'use client'

import { searchAIExamples } from "@/src/constants/form-constants";
import { useEffect, useState, useTransition } from "react";
import { Button, Input } from "@/src/components";
import { Search, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { filterSearchParams } from "@/src/utils";

type Props = {
   initialQuery?: string;
}

export const AISearch = ({initialQuery}: Props) => {

   const [isPending, startTransition] = useTransition();
   const router = useRouter();
   const [aiSearchQuery, setAiSearchQuery] = useState(initialQuery ?? '');
   const [placeholderText, setPlaceholderText] = useState("");
   const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

   // Efecto para animación del placeholder
   useEffect(() => {

      const currentExample = "ej: " + searchAIExamples[currentExampleIndex] + " . . .";
      let charIndex = 0;

      const typingInterval = setInterval(() => {
         if (charIndex <= currentExample.length) {
            setPlaceholderText(currentExample.substring(0, charIndex));
            charIndex++;
         } else {
            clearInterval(typingInterval);
            // Esperar 2 segundos antes de pasar al siguiente ejemplo
            setTimeout(() => {
               setCurrentExampleIndex((prev) => (prev + 1) % searchAIExamples.length);
            }, 2000);
         }
      }, 100);

      return () => clearInterval(typingInterval);
   }, [currentExampleIndex]);

   /**
      * Enviar formulario
      * Toma los datos del hook 
   */
   const onClickSearch = () => {
   
      const params = filterSearchParams({queryAI: aiSearchQuery});

      startTransition(() => {
         router.push(`/propiedades?${params}`);
      });

   }


   return (
      <div className={`flex flex-col md:flex-row items-center justify-center duration-800 gap-4 grow animate-in fade-in fade-out`}>

         <label className="text-black font-semibold text-lg whitespace-nowrap">
            Buscador Inteligente
         </label>
         <Input
            className="border border-foreground h-10"
            type="text"
            value={aiSearchQuery}
            onChange={(e) => setAiSearchQuery(e.target.value)}
            placeholder={placeholderText}
         />
         <Button
            variant="search"
            type="submit"
            size="icon"
            onClick={onClickSearch}
            disabled={isPending}
         >
            {isPending ? (
               // Loader by Copilot
               <div className="relative flex items-center justify-center size-6">
                  <Sparkles className="size-6 text-purple-500 animate-spin absolute" />
                  <Sparkles className="size-5 text-pink-400 animate-pulse absolute" />
                  <Sparkles className="size-4 text-blue-400 animate-ping absolute opacity-75" />
               </div>
            ) : (
               <Search className="size-6" />
            )}
         </Button>

      </div>
   )
}
