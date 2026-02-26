import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Soc2CertificationData } from '@/data/landingPageData';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SOC2CertificationSection: React.FC = () => {
    const { title, description, features } = Soc2CertificationData;

    return (
        <section className="tn-section">
            <div className="tn-container space-y-6 md:space-y-8">
                <div className="relative rounded-3xl shadow-lg overflow-hidden border border-light-gray/30 group animate-fadeInUp">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row flex-wrap items-center gap-6 md:gap-8 p-6 md:p-8">
                        <div className="shrink-0">
                            <div className="relative">
                                <div className="w-30 h-30 md:w-38 md:h-38 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/10 p-4">
                                    <Image
                                        preload
                                        fetchPriority='high'
                                        src="/images/Seal_SOC2.svg"
                                        alt="SOC 2 TYPE 2 Certified"
                                        width={160}
                                        height={160}
                                        className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                <div className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-theme-green rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-2">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary">{title}</h3>
                            <p className="text-sm md:text-base lg:text-lg text-txt-gray">{description}</p>
                            <Link href="#" className="relative inline-flex items-center gap-0.5 text-base font-semibold text-primary after:absolute after:left-0 after:bottom-0 after:block after:h-0.5 after:w-0 after:bg-primary after:rounded-md after:transition-all after:duration-500 hover:after:w-10/12 group/btn">
                                Know More <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-0.5 transition duration-500' />
                            </Link>
                        </div>
                    </div>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map(item => {
                        const { Icon } = item;
                        return (
                            <li key={item.id} className="flex gap-4 rounded-xl p-4 shadow-md border border-light-gray/50 hover:border-light-gray hover:shadow-lg group/feature transition duration-500 animate-fadeInUp">
                                <div className="w-12 h-12 bg-light-cyan group-hover/feature:bg-primary/10 rounded-lg flex items-center justify-center shrink-0 transition duration-500">
                                    <Icon className="w-6 h-6 text-primary group-hover/feature:scale-90 transition duration-500" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h4 className="font-bold text-secondary">{item.title}</h4>
                                    <p className="text-sm text-txt-gray">{item.description}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default SOC2CertificationSection;
