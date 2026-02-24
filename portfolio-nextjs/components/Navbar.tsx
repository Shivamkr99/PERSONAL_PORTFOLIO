'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavbarProps {
    onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="navbar-blur fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4 sm:px-6 md:px-10 z-50 bg-[rgba(30,30,30,0.4)] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
            <Link href="/" className="flex items-center relative h-16 no-underline min-w-0">
                {/* Logo Circle */}
                <div className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px] bg-[#e67e22] rounded-full flex-shrink-0"></div>

                {/* Brand Text */}
                <div className="flex flex-col ml-[-35px] sm:ml-[-40px] md:ml-[-45px] leading-none justify-center z-10">
                    <span className="text-[0.75rem] sm:text-[0.9rem] md:text-[1.2rem] font-bold tracking-[1px] sm:tracking-[1.5px] leading-[1.3] -mb-0.5 text-white whitespace-nowrap">
                        SHIVAM
                    </span>
                    <span className="text-[0.75rem] sm:text-[0.9rem] md:text-[1.2rem] font-bold tracking-[1px] sm:tracking-[1.5px] leading-[1.3] pl-4 sm:pl-5 md:pl-7 text-white whitespace-nowrap">
                        KUMAR
                    </span>
                </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="md:hidden text-white text-2xl z-50 w-10 h-10 flex items-center justify-center hover:text-[#e67e22] transition-colors flex-shrink-0"
            >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-5 list-none m-0 p-0">
                <li>
                    <Link
                        href="/"
                        className={`no-underline font-semibold text-[0.9rem] transition-colors ${isActive('/') ? 'text-[#e67e22]' : 'text-white hover:text-[#e67e22]'
                            }`}
                    >
                        HOME
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={`no-underline font-semibold text-[0.9rem] transition-colors ${isActive('/about') ? 'text-[#e67e22]' : 'text-white hover:text-[#e67e22]'
                            }`}
                    >
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        className={`no-underline font-semibold text-[0.9rem] transition-colors ${isActive('/projects') ? 'text-[#e67e22]' : 'text-white hover:text-[#e67e22]'
                            }`}
                    >
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <a
                        href="/myresume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white no-underline font-semibold text-[0.9rem] hover:text-[#e67e22] transition-colors"
                    >
                        RESUME
                    </a>
                </li>
                <li>
                    <button
                        onClick={onContactClick}
                        className="bg-[#e67e22] text-white px-4 py-2 rounded font-bold text-[0.9rem] hover:bg-[#d35400] transition-colors uppercase cursor-pointer"
                    >
                        CONTACT
                    </button>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div
                className={`fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-[#1a1a1a] transform transition-transform duration-300 md:hidden overflow-y-auto z-40 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <ul className="flex flex-col items-center gap-8 list-none p-8 pt-12">
                    <li>
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className={`no-underline font-semibold text-[1.2rem] transition-colors ${isActive('/') ? 'text-[#e67e22]' : 'text-white hover:text-[#e67e22]'
                                }`}
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            onClick={closeMobileMenu}
                            className={`no-underline font-semibold text-[1.2rem] transition-colors ${isActive('/about') ? 'text-[#e67e22]' : 'text-white hover:text-[#e67e22]'
                                }`}
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            onClick={closeMobileMenu}
                            className={`no-underline font-semibold text-[1.2rem] transition-colors ${isActive('/projects') ? 'text-[#e67e22]' : 'text-white hover:text-[#e67e22]'
                                }`}
                        >
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <a
                            href="/myresume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobileMenu}
                            className="text-white no-underline font-semibold text-[1.2rem] hover:text-[#e67e22] transition-colors"
                        >
                            RESUME
                        </a>
                    </li>
                    <li className="w-full px-4">
                        <button
                            onClick={() => {
                                closeMobileMenu();
                                onContactClick();
                            }}
                            className="bg-[#e67e22] text-white px-8 py-3 rounded font-bold text-[1rem] hover:bg-[#d35400] transition-colors uppercase cursor-pointer w-full max-w-xs"
                        >
                            CONTACT
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
