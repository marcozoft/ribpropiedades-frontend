"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../shadcn-components/ui/dialog";
import { Button } from "../shadcn-components/ui/button";
import { Share2, Printer } from "lucide-react";


type Props = {
  promptWhatsApp: string;
}

export const ShareDialog = ({promptWhatsApp}: Props) => {
  
  const socialLinks = [
    {
      name: "Twitter",
      url: (link: string) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`,
      icon: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.64c-2.73 0-4.945 2.215-4.945 4.945 0 .388.044.765.127 1.127C7.728 6.575 4.1 4.885 1.671 2.149c-.427.734-.666 1.584-.666 2.491 0 1.72.875 3.234 2.209 4.122A4.904 4.904 0 0 1 .964 7.1v.062c0 2.404 1.71 4.415 3.977 4.87a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/></svg>
    },
    {
      name: "Whatsapp",
      url: (link: string) => `https://wa.me/?text=${promptWhatsApp} ${encodeURIComponent(link)}`,
      icon: <svg width="24" height="24" fill="currentColor" viewBox="0 0 26 26"><path d="M21.8743 3.7348C20.6916 2.54904 19.2862 1.60868 17.7389 0.967749C16.1916 0.326813 14.5329 -0.00206514 12.8582 9.7569e-06C5.81663 9.7569e-06 0.107223 5.70855 0.107223 12.751C0.107223 15.0944 0.739409 17.2895 1.84166 19.1766L1.80906 19.1166L0 25.7232L6.75847 23.9502C8.51778 24.9272 10.6168 25.5019 12.8504 25.5019H12.8556C19.8971 25.4993 25.604 19.7899 25.604 12.7484C25.6061 11.0745 25.2777 9.41663 24.6375 7.86998C23.9974 6.32333 23.0589 4.91748 21.8743 3.7348ZM12.8556 23.348H12.8504C10.8612 23.348 8.99986 22.799 7.41039 21.8443L7.45842 21.8709L7.07156 21.6419L3.06143 22.6944L4.13108 18.7837L3.87889 18.3832C2.81485 16.6981 2.2528 14.7447 2.25854 12.7518C2.25854 6.90002 7.00294 2.15562 12.8547 2.15562C18.7065 2.15562 23.4509 6.90002 23.4509 12.7518C23.4509 18.6036 18.7082 23.348 12.8556 23.348ZM18.6679 15.4127C18.3497 15.2531 16.7834 14.4837 16.4917 14.3764C16.1992 14.2701 15.9865 14.2178 15.7738 14.5369C15.5628 14.8551 14.952 15.5722 14.7659 15.7849C14.5806 15.9985 14.3936 16.0243 14.0754 15.8656C13.1328 15.4891 12.2629 14.9516 11.5046 14.2769L11.5132 14.2847C10.829 13.6524 10.2404 12.9239 9.76586 12.1222L9.74184 12.0776C9.55656 11.7594 9.72211 11.5869 9.8808 11.4283C10.0241 11.2859 10.1999 11.056 10.3586 10.8707C10.4838 10.7171 10.591 10.5413 10.6725 10.3526L10.6777 10.338C10.7206 10.2498 10.7405 10.1522 10.7355 10.0543C10.7306 9.95637 10.7009 9.86129 10.6494 9.77788L10.6511 9.78045C10.5705 9.6209 9.93398 8.05288 9.66893 7.41468C9.40988 6.79365 9.14654 6.87857 8.95182 6.86828C8.76654 6.8597 8.55381 6.85798 8.34108 6.85798C8.00226 6.86656 7.70117 7.01925 7.49359 7.25514L7.49273 7.25685C7.13161 7.59806 6.8459 8.01108 6.654 8.46935C6.46209 8.92761 6.36824 9.42098 6.37847 9.9177V9.91426C6.48254 11.1214 6.9379 12.2715 7.68831 13.2227L7.67801 13.2099C9.03131 15.2301 10.8766 16.8725 13.04 17.9826L13.1206 18.0195C13.5907 18.2322 14.1929 18.4595 14.8088 18.6542L14.9366 18.6894C15.5946 18.8893 16.2905 18.9313 16.9678 18.812L16.9412 18.8155C17.3817 18.7249 17.799 18.545 18.1674 18.287C18.5358 18.029 18.8474 17.6983 19.0831 17.3152L19.0908 17.3006C19.3006 16.8195 19.3645 16.2874 19.2744 15.7703L19.277 15.7866C19.198 15.6537 18.9853 15.5748 18.6662 15.4144L18.6679 15.4127Z"/></svg>
    },
    {
      name: "Facebook",
      url: (link: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
      icon: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.326V1.326C24 .6 23.4 0 22.675 0"/></svg>
    }
  ];
  
  const link= typeof window !== 'undefined' ? window.location.href : '';

  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handlePrint = async () => {
    setOpen(false);
    
    // Esperar a que el dialog se cierre
    setTimeout(async () => {
      try {
        // Obtener el contenedor principal (propiedad o emprendimiento)
        const container = document.querySelector(".propiedad-full-page, .emprendimiento-full-page") as HTMLElement;
        if (!container) {
          console.error("No se encontró el contenedor para imprimir");
          return;
        }

        // Obtener todas las imágenes (visibles y ocultas)
        const images = Array.from(container.querySelectorAll("img")) as HTMLImageElement[];
        
        if (images.length === 0) {
          window.print();
          return;
        }

        // Crear promesas para cargar cada imagen
        const imageLoadPromises = images.map(img => {
          return new Promise<void>((resolve) => {
            // Si la imagen ya está cargada
            if (img.complete) {
              resolve();
              return;
            }

            // Si la imagen tiene loading="lazy", cambiar a eager
            if (img.loading === "lazy") {
              img.loading = "eager";
            }

            // Forzar carga de la imagen
            const onLoad = () => {
              img.removeEventListener("load", onLoad);
              img.removeEventListener("error", onLoad);
              resolve();
            };

            img.addEventListener("load", onLoad);
            img.addEventListener("error", onLoad);

            // Si la imagen no tiene src pero tiene data-src, copiar
            if (!img.src && img.dataset.src) {
              img.src = img.dataset.src;
            }

            // Timeout de seguridad (5 segundos por imagen)
            setTimeout(() => resolve(), 5000);
          });
        });

        // Esperar a que todas las imágenes se carguen
        await Promise.all(imageLoadPromises);

        // Pequeño delay extra para asegurar que todo esté renderizado
        setTimeout(() => {
          window.print();
        }, 500);
      } catch (error) {
        console.error("Error preparando impresión:", error);
        window.print();
      }
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 size={16} />
          Recomendar
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs">
        <DialogHeader>
          <DialogTitle>Compartir</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-2">
          {socialLinks.map(({ name, url, icon }) => (
            <a
              key={name}
              href={url(link)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-accent transition"
            >
              {icon}
              <span>{name}</span>
            </a>
          ))}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-accent transition text-left w-full text-foreground"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            <span className="text-sm">{copied ? "¡Copiado!" : "Copiar link"}</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-accent transition text-left w-full text-foreground"
          >
            <Printer size={20} />
            <span className="text-sm">Imprimir ficha</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
