"use client";

import { ReactNode } from "react";
import { createRoot } from "react-dom/client";

/**
 * 
 */
export const renderReactComponent = (children: ReactNode) => {

   const popupNode = document.createElement('div');
   const root = createRoot(popupNode);

   // Renderizar componente JSX
   root.render(children);

   return popupNode;

}