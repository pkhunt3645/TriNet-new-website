import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { techPartnersData } from '@/data/landingPageData';
import Image from "next/image";
import { SectionHeading } from '@/components/common';

const TechnologyPartners: React.FC = () => {
    return (
        <section className='tn-section'>
            <div className="tn-container space-y-6 md:space-y-8">
                <SectionHeading
                    heading={'Our technology partners'}
                    title={'Proudly collaborating with <span>industry leaders</span>'}
                />
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                    {techPartnersData.map(item => (
                        <li key={item.id} className="p-2 rounded-xl shadow-md shadow-primary/10 hover:shadow-xl bg-light-cyan flex flex-col gap-2 transition duration-500 animate-fadeInUp">
                            <div className="flex-1 flex items-center justify-center bg-white rounded-xl p-4">
                                <Image
                                    preload
                                    src={item.image}
                                    alt={item.name}
                                    title={item.name}
                                    height={100}
                                    width={200}
                                    fetchPriority='high'
                                    className="w-auto h-auto max-w-full max-h-24 object-contain aspect-video"
                                />
                            </div>

                            <div className="px-4 py-2 flex items-center justify-center">
                                <Link
                                    href={item.url || '#'}
                                    className="flex items-center gap-1 text-sm text-secondary font-semibold hover:text-primary group transition duration-500"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4 group-hover:transform group-hover:translate-x-0.5 transition duration-500" />
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default TechnologyPartners;
