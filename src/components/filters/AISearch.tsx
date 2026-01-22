'use client'

import { searchAIExamples } from "@/src/constants/form-constants";
import { useEffect, useState, useTransition } from "react";
import { Button, Input } from "@/src/components";
import { Loader2, Search } from "lucide-react";

export const AISearch = () => {

   const [isPending, startTransition] = useTransition();
   const [iaSearchQuery, setIaSearchQuery] = useState("");
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


   return (
      <div className={`flex flex-col md:flex-row items-center justify-center duration-800 gap-4 grow animate-in fade-in fade-out`}>

         <label className="text-foreground font-semibold text-lg whitespace-nowrap">
            Buscador Inteligente
         </label>
         <Input
            className="border border-foreground h-10"
            type="text"
            value={iaSearchQuery}
            onChange={(e) => setIaSearchQuery(e.target.value)}
            placeholder={placeholderText}
         />
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

      </div>
   )
}
