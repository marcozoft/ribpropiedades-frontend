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

export const getOrCreateSessionId = () => {
   let sessionId = localStorage.getItem('tracking_session_id');
   if (!sessionId) {
      sessionId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('tracking_session_id', sessionId);
   }
   return sessionId;
}