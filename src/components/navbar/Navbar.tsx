import Link from "next/link"
import { NavbarItem } from "./NavbarItem"

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
    <nav className="flex px-5 items-center justify-between">
      {
        navItems.map( (item) => (<NavbarItem key={item.path} {...item} /> ))
      } 
      <div className="flex flex-1"></div>
    </nav>
  )
}
