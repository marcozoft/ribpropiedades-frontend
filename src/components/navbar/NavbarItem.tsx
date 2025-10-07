import React from 'react'
import Link from 'next/link';


type NavbarItemProps = {
    path: string;
    text: string;
}

export const NavbarItem = ({path, text}: NavbarItemProps) => {
  return (
    <button className='px-5 mx-1 py-2 font-semibold hover:border-b-5 h-[38px]'>
        <Link key={path} href={path}>
            <span>{text}</span>
        </Link>
    </button>
  )
}
