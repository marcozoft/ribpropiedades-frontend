import Link from "next/link"
import { ActiveLink } from ".."


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
  
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 rounded">
      
      <Link href={'/'} className="flex items-center">
        <span>Home&nbsp;</span>
      </Link>

      {
        navItems.map( navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      } 
      <div className="flex flex-1"></div>
    </nav>
  )
}
