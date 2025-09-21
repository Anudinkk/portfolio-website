"use client"
// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeSwitcher } from './Theme Switcher'

const Header = () => {

    const menu = [
        { id: 1, name: 'Home', path: '/' },
        // { id: 2, name: 'Works', path: '/works' },
        // { id: 3, name: 'Contact Us', path: '/contact' },
    ]

    return (
        <div className='flex justify-between items-center p-5 md:px-20 fixed z-10 w-full top-0 shadow-sm bg-white dark:bg-card dark:border-b dark:border-gray-500 dark:text-white'>
            <div>
                {/* <Image src="/logo.svg" alt='logo' width={50} height={50} /> */}
            </div>
            <div className='flex items-center gap-8'>
                <ul className='md:flex gap-8 hidden'>
                    {menu.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <li
                                className={`hover:text-primary 
                                cursor-pointer hover:scale-105 
                                transition-all ease-in-out font-semibold`}
                            >
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
                <ThemeSwitcher />
            </div>
            {/* <div>
                <div className='sm:block  md:hidden'>
                    <AlignJustify className='text-black dark:text-white' />
                </div>
            </div> */}

        </div>
    )
}

export default Header
