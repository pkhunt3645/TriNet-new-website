import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/data/footerLinks';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from "next/image";

const Footer: React.FC = () => {
    const { companyLinks, policiesLinks, socialLinks, solutionLinks } = footerLinks;

    return (
        <footer className='bg-linear-to-br from-primary/10 to-white'>
            <div className='tn-container py-8 md:py-10 lg:py-12'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-12 mb-8 pb-8 border-b border-light-gray'>
                    <div className='flex flex-col items-center md:items-start gap-6 flex-2'>
                        <Link href="/" className='inline-block'>
                            <Image
                                preload
                                fetchPriority='high'
                                src={'/images/logo.png'}
                                alt={'TriNet Medical'}
                                width={270}
                                height={45}
                                className='w-auto h-10 md:h-12'
                            />
                        </Link>
                        <div className='flex gap-3 pt-2'>
                            {socialLinks.map(({ Icon, href, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-secondary hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-md'
                                >
                                    <Icon className='w-5 h-5' />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className='flex flex-col items-center md:items-start gap-4 flex-1'>
                        <h3 className='text-lg md:text-xl font-semibold text-secondary md:pl-5'>
                            Subscribe to Our Newsletter
                        </h3>
                        <form className='flex w-full'>
                            <input
                                type="email"
                                name="email"
                                id="newsletter-email"
                                placeholder="Enter your Email"
                                required
                                className='flex-1 px-5 py-3 rounded-tl-full rounded-bl-full border border-gray-100 bg-white text-secondary placeholder-txt-gray focus:outline-none focus:shadow-md transition duration-500 text-sm'
                            />
                            <button
                                type="submit"
                                className='px-6 py-2 -ml-5 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition duration-500 whitespace-nowrap cursor-pointer'
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Middle Section - Links */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8 pb-8 border-b border-light-gray'>
                    {/* Solutions */}
                    <div>
                        <h4 className='text-base font-semibold text-secondary mb-4'>Solutions</h4>
                        <ul className='flex flex-col gap-3'>
                            {solutionLinks.map((item, index) => (
                                <li key={item.label + index}>
                                    <Link
                                        href={item.href}
                                        className='text-sm text-txt-gray hover:text-primary transition duration-500 flex items-center gap-1 group'
                                    >
                                        <span className='w-0 h-0.5 bg-primary rounded-full transition-all duration-500 group-hover:w-1'></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compliance & Policies */}
                    <div>
                        <h4 className='text-base font-semibold text-secondary mb-4'>Policies</h4>
                        <ul className='flex flex-col gap-3'>
                            {policiesLinks.map((item, index) => (
                                <li key={item.label + index}>
                                    <Link
                                        href={item.href}
                                        className='text-sm text-txt-gray hover:text-primary transition duration-500 flex items-center gap-1 group'
                                    >
                                        <span className='w-0 h-0.5 bg-primary rounded-full transition-all duration-500 group-hover:w-1'></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className='hidden md:block'>
                        <h4 className='text-base font-semibold text-secondary mb-4'>Company</h4>
                        <ul className='flex flex-col gap-3'>
                            {companyLinks.map((item, index) => (
                                <li key={item.label + index}>
                                    <Link
                                        href={item.href}
                                        className='text-sm text-txt-gray hover:text-primary transition duration-500 flex items-center gap-1 group'
                                    >
                                        <span className='w-0 h-0.5 bg-primary rounded-full transition-all duration-500 group-hover:w-1'></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='col-span-2 md:col-span-1'>
                        <h4 className='text-base font-semibold text-secondary mb-4'>Contact</h4>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex gap-2'>
                                <MapPin className='w-4 h-4 text-primary shrink-0 mt-0.5' />
                                <Link
                                    href="https://www.google.com/maps?q=40.582062940667576,-74.60484696162631"
                                    className="text-sm text-txt-gray hover:text-primary transition duration-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    991 US Hwy 22, Suite 200, Bridgewater, NJ 08807
                                </Link>
                            </li>
                            <li className='flex gap-2'>
                                <Phone className='w-4 h-4 text-primary shrink-0 mt-0.5' />
                                <Link
                                    href="tel:+1-908-575-7304"
                                    className='text-sm text-txt-gray hover:text-primary transition duration-500'
                                >
                                    +1-908-575-7304
                                </Link>
                            </li>
                            <li className='flex gap-2'>
                                <Mail className='w-4 h-4 text-primary shrink-0 mt-0.5' />
                                <Link
                                    href="mailto:trinet@trinetmedical.com"
                                    className='text-sm text-txt-gray hover:text-primary transition duration-500'
                                >
                                    trinet@trinetmedical.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <p className='text-sm text-txt-gray text-center md:text-left'>
                    © {new Date().getFullYear()} TriNet Medical. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
