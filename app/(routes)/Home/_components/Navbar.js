
'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import LogoImage from '/public/images/logo.png'
import Image from 'next/image'
import { IoMdArrowForward } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { Menu } from 'lucide-react'

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const flyoutRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (event) => {
        if (flyoutRef.current && !flyoutRef.current.contains(event.target)) {
        setOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [flyoutRef]);


    return (
    <>
        <header className="bg-white fixed w-full z-50">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <Link className="block" href="#">
                    <Image 
                        src={LogoImage} 
                        width={150} 
                        height={150} 
                        alt="Monday Logo" 
                    />
                </Link>
                <div className="flex flex-1 items-center justify-end lg:justify-between">
                <nav aria-label="Global" className="hidden lg:block">
                    <ul className="flex items-center gap-6 text-sm">
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Producst </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Teams </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Platform </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Resources </a>
                    </li>
                    <li>
                        
                    </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4 justify-center">
                    <div className="sm:flex sm:gap-4 items-center">
                        <Link href="#" className="hidden lg:block text-sm font-medium text-gray-500 transition hover:text-gray-500/75">
                            Pricing
                        </Link>
                        <Link href="#" className="hidden lg:block text-sm font-medium text-gray-500 transition hover:text-gray-500/75">
                            Login
                        </Link>
                        <Link
                            className="rounded-full hover:bg-blue-500 px-5 py-2.5 text-sm hover:text-white transition hidden lg:flex items-center justify-center gap-2 bg-white text-blue-500 border hover:border-white border-blue-500"
                            href="#"
                        >
                            Talk to Sales 
                        </Link>
                        <Link
                            className="rounded-full bg-blue-500 px-5 py-2.5 text-sm text-white transition hidden lg:flex items-center justify-center gap-2 hover:bg-white hover:text-blue-600 border border-white hover:border-blue-500"
                            href="#"
                        >
                            Get Started 
                            <IoMdArrowForward />
                        </Link>
                        <div className='hidden lg:block'>
                            <PiDotsNineBold size={25} />
                        </div>
                        
                    </div>

                    <button
                        className="block rounded transition hover:text-gray-600/75 lg:hidden"
                    >
                    <Menu
                        
                        strokeWidth={2}
                    />
                    </button>
                </div>
                </div>
            </div>
        </header>
    </>
    )
}
