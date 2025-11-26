'use client';

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { PhoneSpan, SocialNetworkItem, MobileMenu } from "."

const navItems = [
  { path: '/quienes-somos',     text: 'RIB' },
  { path: '/zona-norte',        text: 'Zona Norte' },
  { path: '/emprendimientos',   text: 'Emprendimientos' },
  { path: '/tasaciones',        text: 'Tasaciones' },
  { path: '/servicios',         text: 'Servicios' },
  { path: '/contacto',          text: 'Contacto' },
  { path: '/favoritas',         text: 'Favoritas' },
]


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <header className="top-0 z-50 bg-foreground sticky shadow-md">
        {/* <h1>hola mundo</h1> */}
        <div className="max-w-6xl mx-auto px-4 flex items-center h-[90px] justify-between">
          <Link href={'/'}>
            <Image
              className="flex"
              src="/images/navbar-logo.png" 
              alt="RIB Inmobiliaria"
              height={49}
              width={116}
            />
          </Link>
          <div className="flex gap-2 items-center">
            <PhoneSpan className='hidden md:flex' phone="+54 911 3420 1500" />
            <SocialNetworkItem src="/images/navbar-instagram.png" href="/" alt="instagram logo"/>
            <SocialNetworkItem src="/images/navbar-facebook.png"  href="/" alt="facebook logo"/>
            <SocialNetworkItem src="/images/navbar-youtube.svg"   href="/" alt="youtube logo"/>
            <SocialNetworkItem src="/images/navbar-linkedin.svg"  href="/" alt="linkedin logo"/>
            <SocialNetworkItem src="/images/navbar-whatsapp.svg"  href="/" alt="whatsapp logo"/>
            
            {/* Botón hamburguesa */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="ml-4 p-2 bg-white rounded hover:bg-gray-100 transition-colors h-[40px] w-[40px] flex items-center justify-center"
              aria-label="Abrir menú"
            >
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil deslizable */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
