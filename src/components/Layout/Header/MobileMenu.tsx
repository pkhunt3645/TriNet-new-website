'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarCheck, ChevronDown, Menu, X } from 'lucide-react';

interface NavLink {
    label: string;
    url?: string;
    external?: boolean;
    children?: { label: string; url?: string }[];
}

interface MobileMenuProps {
    links: NavLink[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const body = document.body;

        if (isMobileMenuOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }

        return () => {
            body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        closeMobileMenu();
    }, [pathname]);

    const toggleSubmenu = (index: number) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenSubmenu(null);
    };

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
    };

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <li className='lg:hidden'>
                <button
                    onClick={openMobileMenu}
                    className='p-2 text-secondary hover:text-primary cursor-pointer transition duration-500'
                    aria-label='Toggle menu'
                >
                    <Menu className='w-5 h-auto' />
                </button>
            </li>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className='fixed h-dvh inset-0 bg-black/50 z-40 lg:hidden' onClick={closeMobileMenu} />
            )}

            {/* Mobile Navigation Sidebar */}
            <div className={`fixed h-dvh top-0 right-0 bg-white shadow-2xl z-50 transition-[width] duration-500 ease-in-out transform lg:hidden ${isMobileMenuOpen ? 'w-75' : 'w-0 overflow-hidden'}`}>
                <div className='flex flex-col h-full'>
                    <div className='h-16 py-3 px-4 flex items-center justify-end'>
                        <button
                            onClick={closeMobileMenu}
                            className='p-2 w-fit ml-auto text-secondary hover:text-primary cursor-pointer transition duration-500'
                            aria-label='Close menu'
                        >
                            <X className='w-5 h-auto' />
                        </button>
                    </div>

                    <nav className='flex-1 overflow-y-auto p-4'>
                        <ul className='flex flex-col gap-2'>
                            {links?.map((item, index) => (
                                <li key={index} className='flex flex-col text-secondary font-semibold'>
                                    <div role='button' className='p-2' onClick={() => toggleSubmenu(index)}>
                                        <Link
                                            href={item.url ?? '#'}
                                            className='flex items-center justify-between text-lg'
                                            target={item.external ? '_blank' : undefined}
                                            rel={item.external ? 'noopener noreferrer' : undefined}
                                        >
                                            {item.label}
                                            {item.children?.length && (
                                                <ChevronDown className={`w-4 h-4 transform transition-transform duration-500 ${openSubmenu === index ? 'rotate-180' : ''}`} />
                                            )}
                                        </Link>
                                    </div>
                                    {item.children?.length && (
                                        <ul className={`flex flex-col gap-1.5 pl-6 overflow-hidden transition duration-500 ${openSubmenu === index ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {item.children.map((childItem, childIndex) => (
                                                <li key={childIndex} className='p-2 relative after:content-[""] after:border-b after:absolute after:h-px after:inset-0 after:top-full after:transform after:translate-y-0.75 after:border-light-gray after:border-dashed after:bg-transparent'>
                                                    <Link href={childItem.url ?? '#'}>{childItem.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className='p-4 border-t border-gray-200'>
                        <Link
                            href={'#'}
                            className='px-6 py-3 font-semibold text-lg flex items-center justify-center gap-1 rounded-full text-white bg-primary hover:bg-secondary whitespace-nowrap transition duration-500'
                        >
                            <CalendarCheck className='w-5' />
                            Schedule a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;