'use client';

import Link from 'next/link';
import { secondaryFont } from '@/src/config/fonts';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const primaryMenuItems = [
  { path: '/propiedades/pilar', text: 'PILAR' },
  { path: '/emprendimientos', text: 'EMPRENDIMIENTOS' },
  { path: '/propiedades', text: 'PROPIEDADES' },
];

export const MobileMenu = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu deslizable desde la derecha */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header del menú */}
        <div className="bg-foreground p-4 flex items-center justify-between">
          <span className={`text-white text-sm font-bold uppercase tracking-wide ${secondaryFont.className}`}>
            MENÚ
          </span>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Link a home */}
          <div className="px-6 py-4 border-b border-gray-200">
            <Link
              href="/"
              onClick={onClose}
              className={`block py-2 text-sm font-bold text-gray-800 hover:text-foreground transition-colors ${secondaryFont.className}`}
            >
              INICIO
            </Link>
          </div>        

        {/* Contenido del menú */}
        <nav className="flex flex-col">
          {/* Sección superior con texto descriptivo */}
          <div className="px-6 py-4 border-b border-gray-200">
            <p className="text-xs text-gray-500 mb-3">Encontrá tu lugar para vivir</p>
            
            {primaryMenuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={onClose}
                className={`block py-2 text-sm font-bold text-foreground hover:opacity-80 transition-opacity`}
              >
                {item.text}
              </Link>
            ))}
          </div>


          {/* Sección de servicios */}
          <div className="px-6 py-4 border-b border-gray-200">
            <p className="text-xs text-gray-500 mb-3">Dejá tu propiedad en las mejores manos</p>
            
              <Link
                key='/tasaciones'
                href='/tasaciones'
                onClick={onClose}
                className={`block py-2 text-sm font-bold text-foreground hover:opacity-80 transition-opacity`}
              >
                TASACIONES
              </Link>

              <Link
                key='/servicios'
                href='/servicios'
                onClick={onClose}
                className={`block py-2 text-sm font-bold text-foreground hover:opacity-80 transition-opacity`}
              >
                SERVICIOS
              </Link>
          </div>


          {/* Menú inferior */}
          <div className="px-6 py-4 border-b border-gray-200">
            <p className="text-xs text-gray-500 mb-3">Conocé más sobre nosotros</p>
            
              <Link key='/quienes-somos' href='/quienes-somos' onClick={onClose} className={`block py-2 text-sm font-bold text-foreground hover:opacity-80 transition-opacity`}>
                SOMOS RIB
              </Link>
            
              <Link key='/contacto' href='/contacto' onClick={onClose} className={`block py-2 text-sm font-bold text-foreground hover:opacity-80 transition-opacity`}>
                CONTACTO
              </Link>

          </div>

        
          {/* Redes sociales y contacto */}
          <div className="px-6 py-6 bg-gray-50 flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="https://instagram.com/ribpropiedades" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#374151" strokeWidth="2" fill="white"/>
                  <path d="m 16,12 c 0,2.2091 -1.7909,4 -4,4 -2.2091,0 -4,-1.7909 -4,-4 0,-2.2091 1.7909,-4 4,-4 2.2091,0 4,1.7909 4,4 z" stroke="#374151" strokeWidth="2" fill="none"/>
                  <path d="m 18.5,5.5 h 0.01" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://facebook.com/ribpropiedades" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#374151" strokeWidth="2" fill="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://youtube.com/ribpropiedades" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="#374151" strokeWidth="2" fill="white"/>
                  <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#374151"/>
                </svg>
              </a>
              <a href="https://wa.me/5491134201500" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#374151" strokeWidth="2" fill="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            {/* Usuario de redes y teléfono */}
            <div className="space-y-2 text-center">
              <div>
                <span className="text-xs text-gray-600">@ribinmobiliaria</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-foreground font-semibold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="tel:+5491134201500" className="hover:opacity-80 transition-opacity">
                  11 15 3420-1500
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
