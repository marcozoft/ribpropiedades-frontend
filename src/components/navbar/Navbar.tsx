import Image from "next/image"
import Link from "next/link"
import { PhoneSpan, SocialNetworkItem } from "."

const navItems = [
  { path: '/quienes-somos',     text: 'RIB' },
  { path: '/zona-norte',        text: 'Zona Norte' },
  { path: '/emprendimientos',   text: 'Emprendimientos' },
  { path: '/tasaciones',        text: 'Tasaciones' },
  { path: '/servicios',         text: 'Servicios' },
  { path: '/contacto',          text: 'Contacto' },
  { path: '/favoritas',         text: 'Favoritas' },


  // { path: '/mapa',              text: 'Mapa de propiedades' },
]


export const Navbar = () => {
  
  return (
    <header className="top-0 z-50 bg-foreground sticky shadow-md">
      {/* <h1>hola mundo</h1> */}
      <div className="max-w-6xl mx-auto px-4 flex items-center h-[90px] justify-between">
        <Image
          className="flex"
          src="/images/navbar-logo.png" 
          alt="RIB Inmobiliaria"
          height={49}
          width={116}
        />
        <div className="flex gap-2 items-center">
          <PhoneSpan className='hidden md:flex' phone="+54 911 3420 1500" />
          <SocialNetworkItem src="/images/navbar-instagram.png" href="/" alt="instagram logo"/>
          <SocialNetworkItem src="/images/navbar-facebook.png"  href="/" alt="facebook logo"/>
          <SocialNetworkItem src="/images/navbar-youtube.svg"   href="/" alt="youtube logo"/>
          <SocialNetworkItem src="/images/navbar-linkedin.svg"  href="/" alt="linkedin logo"/>
          <SocialNetworkItem src="/images/navbar-whatsapp.svg"  href="/" alt="whatsapp logo"/>
        </div>
      </div>
    </header>
  )
}
