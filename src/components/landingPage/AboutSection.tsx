import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { aboutData } from '@/data/landingPageData';
import { CheckCircle, ArrowRight, Hash } from 'lucide-react';
import { SectionHeading } from '@/components/common';

const AboutSection: React.FC = () => {
    const { excellence, features } = aboutData;

    return (
        <section className='tn-section'>
            <div className="tn-container space-y-6 md:space-y-8">
                <SectionHeading
                    heading={'About us'}
                    title={'Excellence in <span>healthcare solutions'}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:items-center">
                    <ul className="flex flex-col gap-2 lg:gap-3 order-2 md:order-1 animate-fadeInUp">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 lg:gap-3 text-secondary text-base lg:text-lg">
                                <div className="shrink-0 p-1.5 bg-linear-to-tl from-gray-50 to-light-cyan rounded-lg flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-primary" />
                                </div>
                                {feature}
                            </li>
                        ))}
                        <li className='mt-4'>
                            <Link href="#" className='hidden md:inline-flex items-center justify-center gap-2 max-w-fit bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary transition duration-500 group'>
                                Learn about us
                                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition duration-500' />
                            </Link>
                        </li>
                    </ul>
                    <figure className='order-1 md:order-2 overflow-hidden max-w-xl 3xl:max-w-2xl w-full mx-auto p-2.5 bg-white rounded-md rounded-tl-4xl rounded-br-4xl group animate-fadeInUp'>
                        <Image
                            preload
                            src={'/images/about-img-1.png'}
                            alt={'TriNet Medical'}
                            fetchPriority='high'
                            height={360}
                            width={500}
                            className='w-full h-full object-cover aspect-video rounded-md rounded-tl-4xl rounded-br-4xl group-hover:scale-110 transition duration-500'
                        />
                    </figure>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start md:items-center">
                    <ul className="relative space-y-8 animate-fadeInUp">
                        <span className="absolute left-2 top-0 h-full w-px bg-linear-to-b from-primary/20 via-primary/60 to-primary/20" />
                        {excellence.map((item, index) => (
                            <li key={index} className="relative pl-8">
                                <span className="absolute left-0 top-2 h-4 w-4 rounded-full bg-primary" />
                                <h3 className="text-3xl lg:text-4xl font-semibold text-primary font-poppins leading-none">{item.percentage}</h3>
                                <span className="mt-1 text-secondary text-base lg:text-lg leading-tight">{item.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="md:col-span-2 flex flex-col gap-4 animate-fadeInUp">
                        <p className="text-secondary text-lg lg:text-xl leading-relaxed">Our solutions are designed to simplify medication tracking, enhance 340B compliance, and streamline medical Lot & Inventory tracking. We empower clinics and pharmacies with the tools they need to reduce administrative burden and focus more on what truly matters — delivering quality care.</p>
                        <span className="hidden md:block h-0.5 w-[10%] bg-linear-to-r from-primary to-primary/50 rounded-full" />
                        <Link href="#" className='inline-flex md:hidden items-center justify-center gap-2 w-full bg-primary text-white font-semibold py-3 px-8 rounded-full'>
                            Learn about us <ArrowRight className='w-5 h-5' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
