import React from 'react'
import Link from 'next/link';


type NavbarItemProps = {
    path: string;
    text: string;
}

export const NavbarItem = ({path, text}: NavbarItemProps) => {
    return (
        <Link key={path} href={path}>
            <div className='hidden lg:flex px-5 mx-1 py-2 font-medium whitespace-nowrap text-background hover:border-b-5 h-[38px]'>
                <span>{text}</span>
            </div>
        </Link>

    )
}
