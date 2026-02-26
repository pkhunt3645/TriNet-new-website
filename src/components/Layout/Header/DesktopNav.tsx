import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface NavLink {
    label: string;
    url?: string;
    external?: boolean;
    children?: { label: string; url?: string }[];
}

interface DesktopNavProps {
    links: NavLink[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
    return (
        <nav className='hidden lg:flex gap-4 items-center'>
            {links?.map((item, index) => (
                <div 
                    key={index} 
                    className="font-semibold text-secondary relative pb-1.5 before:content-[''] before:absolute before:left-0 before:bottom-[3px] before:h-0.5 before:w-0 before:bg-primary before:rounded-md before:transition-all before:duration-500 hover:before:w-full group"
                >
                    <Link 
                        href={item.url ?? '#'} 
                        className="transition duration-500 group-hover:text-primary text-sm xl:text-base 3xl:text-lg flex items-center gap-0.5" 
                        target={item.external ? '_blank' : undefined} 
                        rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                        {item.label} 
                        {item.children?.length && (
                            <ChevronDown 
                                className='w-4 transform-gpu origin-center transition-transform duration-500 group-hover:rotate-180' 
                                style={{ willChange: 'transform' }} 
                            />
                        )}
                    </Link>
                    {item.children?.length && (
                        <ul className='flex flex-col gap-1.5 p-2.5 rounded-md rounded-tl-none absolute top-full bg-white border border-gray-100 shadow-lg invisible group-hover:visible min-w-56 3xl:min-w-64 transition duration-500'>
                            {item.children.map((childItem, childIndex) => (
                                <li 
                                    key={childIndex} 
                                    className='px-1 pb-1 border-b-2 border-dotted border-gray-100 last:border-b-0 last:pb-0 hover:translate-x-1 transition-transform duration-500 group/submenu'
                                >
                                    <Link 
                                        href={childItem.url ?? '#'} 
                                        className="text-sm xl:text-base 3xl:text-lg transition duration-500 group-hover/submenu:text-primary"
                                    >
                                        {childItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default DesktopNav;