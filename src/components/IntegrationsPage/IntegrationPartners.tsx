import React from 'react';
import Image from "next/image";
import { CheckCircle2 } from 'lucide-react';
import { techPartnersData } from '@/data/landingPageData';
import { SectionHeading } from '@/components/common';

const IntegrationPartners: React.FC = () => {
    return (
        <section className='tn-section bg-white' id='integration_partners'>
            <div className="tn-container space-y-6 md:space-y-8">
                <SectionHeading
                    heading={'Our Integration partners'}
                    title={'Seamlessly Connect with Leading <span>Healthcare Platforms</span>'}
                    subTitle='Our platform integrates with industry-leading EMR systems and healthcare technologies to ensure smooth data flow and interoperability.'
                />

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {techPartnersData.map(item => (
                        <div
                            key={item.id}
                            className="group flex flex-col relative bg-white border-2 border-primary/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
                        >
                            {/* Integration Badge */}
                            <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="flex items-center gap-1 px-2 py-1 bg-theme-green text-white text-xs font-semibold rounded-full">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>Integrated</span>
                                </div>
                            </div>

                            {/* Logo Container */}
                            <div className="relative flex-1 aspect-video bg-linear-to-br from-light-cyan to-white py-6 px-4 flex items-center justify-center group-hover:from-primary/5 group-hover:to-light-cyan transition-all duration-500">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    title={item.name}
                                    height={80}
                                    width={160}
                                    className="w-auto h-auto max-w-full max-h-18 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Partner Info */}
                            <div className="p-4 bg-white border-t border-light-gray/30 group-hover:bg-light-cyan/30 transition-all duration-500">
                                <h3 className="text-secondary font-semibold text-sm md:text-base text-center group-hover:text-primary transition-all duration-500">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IntegrationPartners;
