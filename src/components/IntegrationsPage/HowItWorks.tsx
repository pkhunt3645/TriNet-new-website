import React from 'react';
import { integrationProcessData } from '@/data/integrationsPageData';
import { SectionHeading } from '@/components/common';

const HowItWorks: React.FC = () => {
    return (
        <section className='tn-section bg-white'>
            <div className="tn-container space-y-6 md:space-y-8">
                <SectionHeading
                    heading={'Integration Process'}
                    title={'How Our <span>Integration Works</span>'}
                    subTitle='Get up and running in four simple steps. Our streamlined process ensures a smooth integration experience from start to finish.'
                />

                <div className="relative pt-4">
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-secondary to-primary opacity-20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {integrationProcessData.map((process, index) => {
                            const Icon = process.icon;
                            return (
                                <div
                                    key={process.id}
                                    className="relative group animate-fadeInUp"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative h-full bg-white border-2 border-primary/10 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                                        <div className={`absolute -top-6 left-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br ${process.color} text-white font-bold font-poppins text-lg shadow-lg z-10`}>{process.step}</div>
                                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-br from-light-cyan to-white mb-4 mt-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-secondary font-bold text-lg text-center mb-3 group-hover:text-primary transition-colors duration-500">{process.title}</h3>
                                        <p className="text-txt-gray text-sm text-center leading-relaxed">{process.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-center pt-4 animate-fadeInUp">
                    <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-linear-to-br from-light-cyan to-white border-2 border-primary/10 rounded-full">
                        <CheckCircle className="w-5 h-5 text-theme-green" />
                        <span className="text-secondary font-semibold text-sm lg:text-base">
                            Average setup time: 2-4 weeks
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Import CheckCircle for the bottom badge
import { CheckCircle } from 'lucide-react';

export default HowItWorks;
