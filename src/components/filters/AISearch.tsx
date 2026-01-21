'use client'

import { searchAIExamples } from "@/src/constants/form-constants";
import { useEffect, useState } from "react";

export const AISearch = () => {

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
      <div >
         <div className={`flex items-center gap-4 md:col-span-9`}>
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
      </div>
   )
}
