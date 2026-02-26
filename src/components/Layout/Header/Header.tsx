import React from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';
import { headerLinks } from '@/data/headerLinks';
import { CalendarCheck } from 'lucide-react';
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <header className='fixed z-40 top-0 right-0 left-0 bg-white/90 backdrop-blur-lg shadow-sm'>
            <div className='flex justify-between gap-2 tn-container py-3'>
                <Link href="/" className='flex items-center'>
                    <Image
                        preload
                        fetchPriority='high'
                        src={'/images/logo.png'}
                        alt={'TriNet Medical'}
                        width={270}
                        height={45}
                        className='w-auto h-10 xl:h-11 3xl:h-12'
                    />
                </Link>

                {/* Desktop Navigation - Server Component */}
                <DesktopNav links={headerLinks} />

                {/* Desktop CTA & Mobile Menu Button */}
                <ul className='flex gap-4 items-center'>
                    <li role='button' className='hidden sm:block'>
                        <Link
                            href={'#'}
                            className='px-3.5 xl:px-6 py-2.5 font-semibold flex items-center gap-1 rounded-full text-white bg-primary hover:bg-secondary transition duration-500'
                            title='Schedule a Demo'
                        >
                            <CalendarCheck className='w-4 xl:w-5 3xl:w-6 h-auto' />
                            <span className='hidden sm:block lg:hidden xl:block text-sm xl:text-base 3xl:text-lg'>Schedule a Demo</span>
                        </Link>
                    </li>

                    {/* Mobile Menu - Client Component */}
                    <MobileMenu links={headerLinks} />
                </ul>
            </div>
        </header>
    );
};

export default Header;