import Image from "next/image"
import { NavbarItem } from "./NavbarItem"
import Link from "next/link"

const navItems = [
  { path: '/quienes-somos',     text: 'RIB' },
  { path: '/zona-norte',        text: 'Zona Norte' },
  { path: '/emprendimientos',   text: 'Emprendimientos' },
  { path: '/tasaciones',        text: 'Tasaciones' },
  { path: '/servicios',         text: 'Servicios' },
  { path: '/contacto',          text: 'Contacto' },
  { path: '/favoritas',         text: 'Favoritas' },

  { path: '/propiedades',       text: 'Todas' },


  // { path: '/mapa',              text: 'Mapa de propiedades' },
]


export const Navbar = () => {
  
  return (
    <nav className="px-5 flex flew-row bg-foreground">
      <Link href='/propiedades'>
        <Image
          src="/images/iso-header-tablet.png" 
          alt="RIB Inmobiliaria"
          height={38}
          width={71}
        />
      </Link>
      {
        navItems.map( (item) => (<NavbarItem key={item.path} {...item} /> ))
      }
    </nav>
  )
}
