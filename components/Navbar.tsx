"use client"
import React, { useState } from 'react'
import { BarIcon, CrossIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from './icons'
import Link from 'next/link'
import ComponentWrapper from './ComponentWrapper'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='relative' style={{
            background: "#F0F0F0"
        }}>
            <ComponentWrapper>
                <nav className='flex justify-between items-center py-5'>
                    <Link href="/" className="text-xl md:text-2xl font-bold">WPSecurities.</Link>
                    <ul className='hidden md:flex items-center space-x-8'>
                        <li><Link className='font-medium text-lg' href="/">Home</Link></li>
                        <li><Link className='font-medium text-lg' href="/">Home</Link></li>
                        <li><Link className='font-medium text-lg' href="/">Home</Link></li>
                        <li><Link className='font-medium text-lg' href="/">Home</Link></li>
                    </ul>

                    <ul className='hidden md:flex space-x-4'>
                        <li>
                            <Link href="/">
                                <FacebookIcon />
                            </Link>
                        </li>
                        <li>
                            <Link href="/"><TwitterIcon /></Link>
                        </li>
                        <li>
                            <Link href="/"><LinkedinIcon /></Link>
                        </li>
                    </ul>


                    <button
                        className='block md:hidden'
                        onClick={() => setOpen(!open)}
                        type='button'
                    >
                        {open ? (
                            <CrossIcon className='font-bold text-gray-800 w-6 h-6' />
                        ) : (
                            <BarIcon className='font-bold w-6 h-6 text-gray-800' />
                        )}
                    </button>
                </nav>
                <div
                    style={{
                        display: open ? 'block' : 'none',
                    }}
                    className='block w-full md:hidden'
                >
                    <ul className='absolute right-0 z-50 flex flex-col w-full px-4 mt-4 bg-gray-100 rounded-lg md:hidden top-10'>
                        <li onClick={() => setOpen(false)} className='border-b'>
                            <Link
                                href='/about'
                                className='block py-2 pl-3 pr-4 text-gray-700 rounded '
                                aria-current='page'
                            >
                                About
                            </Link>
                        </li>
                        <li onClick={() => setOpen(false)} className='border-b'>
                            <Link
                                href='/contact'
                                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
                            >
                                Contact
                            </Link>
                        </li>
                        <li onClick={() => setOpen(false)} className='border-b'>
                            <Link
                                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
                                href='https://drive.google.com/file/d/1A6I4qF3WBwlKskaAT23G5volEAJ-9i4T/view?usp=share_link'
                                target='_blank'
                            >
                                My CV
                            </Link>
                        </li>
                    </ul>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default Navbar