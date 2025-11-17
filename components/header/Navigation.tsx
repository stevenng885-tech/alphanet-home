'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const menu = [
    {
        title: "Giới Thiệu",
        href: "/about-us"
    },
    {
        title: "Chỉ Báo",
        href: "/indicators"
    },
    {
        title: "Tin Tức",
        href: "/news"
    },
    {
        title: "Liên Hệ",
        href: "/contact"
    },
]

import { FaAngleUp } from "react-icons/fa";

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const navRef = React.useRef(null)
    const handleRef = () => {
        window.scroll(0, 0)
    }
    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 text-white bg-black">
            <button
                onClick={handleRef}
                className='fixed z-10 bg-linear-to-br from-(--fourth) to-(--fiveth) rounded-full right-10 bottom-10 p-5 text-2xl'
            >
                <FaAngleUp />
            </button>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="shrink-0">
                        <Link href="/" onClick={toggleMenu} className="flex gap-5 items-center">
                            <Image
                                width={50}
                                height={50}
                                alt='logo'
                                className=''
                                src="/assets/common/logo.webp"
                            />
                            <span className='text-2xl '>Alpha Net</span>
                        </Link>
                    </div>

                    {/* Menu Desktop */}

                    <div className="hidden md:flex items-center gap-10 tracking-wide">
                        {
                            menu.map((item, index) => {
                                return (
                                    <Link
                                        key={item.href + index}
                                        href={item.href}
                                        className="hover:text-(--first) font-semibold relative group transition-colors duration-300 uppercase tracking-wide text-sm xl:text-base"
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })
                        }
                    </div>

                    {/* Button Desktop */}
                    <div className="hidden md:block p-3 smoothly-scale">
                        <Link
                            onClick={toggleMenu}
                            href="/#register"
                            className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white px-7 py-3 rounded-md font-bold shadow-md  transition"
                        >
                            THAM GIA MIỄN PHÍ
                        </Link>
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <button
                        className="md:hidden text-white hover:text-red-500 transition"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
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
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black border-t border-red-600 animate-slide-down py-5">
                    <div className="px-4 space-y-2 text-center">
                        {
                            menu.map((item, index) => {
                                return (
                                    <Link
                                        key={item.href + index}
                                        onClick={toggleMenu}
                                        href={item.href}
                                        className="block px-3 py-4 text-white rounded hover:bg-red-900 transition"
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })
                        }
                        <Link
                            onClick={toggleMenu}
                            href="/#register"
                            className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white px-7 py-3 rounded-md font-bold shadow-md  transition"
                        >
                            THAM GIA MIỄN PHÍ
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation