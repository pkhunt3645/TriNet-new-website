import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { integrationSupportData } from '@/data/integrationsPageData';
import { SectionHeading } from '@/components/common';

const IntegrationSupport: React.FC = () => {
    return (
        <section className='tn-section bg-linear-to-br from-light-cyan to-white' id='integration_support'>
            <div className="tn-container space-y-6 md:space-y-8">
                <SectionHeading
                    heading={'We\'re Here to Help'}
                    title={'Dedicated <span>Integration Support</span>'}
                    subTitle='Our team of integration specialists is committed to ensuring your success, from initial setup through ongoing optimization.'
                />

                {/* Support Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                    {integrationSupportData.features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className="group relative bg-white border-2 border-primary/10 rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 animate-fadeInUp"
                            >
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-linear-to-br from-primary/10 to-light-cyan mb-4 group-hover:scale-110 transition-transform duration-500">
                                    <Icon className='w-6 h-6 lg:w-7 lg:h-7 text-primary' />
                                </div>

                                {/* Content */}
                                <h3 className="text-secondary font-bold text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors duration-500">
                                    {feature.title}
                                </h3>
                                <p className="text-txt-gray text-sm lg:text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="bg-linear-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center text-white animate-fadeInUp">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-base lg:text-lg mb-6 opacity-90 max-w-2xl mx-auto">Schedule a demo with our integration specialists and see how easy it is to connect your systems.</p>
                    <div className="flex flex-col md:flex-row max-w-60 md:max-w-max mx-auto justify-center gap-2 lg:gap-4">
                        <Link
                            href="#"
                            className="inline-flex whitespace-nowrap items-center justify-center gap-2 bg-white backdrop-blur-sm text-primary 3xl:text-lg font-semibold py-3 px-8 rounded-full group"
                        >
                            Schedule a Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-500" />
                        </Link>
                        <Link
                            href="#"
                            className='inline-flex whitespace-nowrap items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white 3xl:text-lg font-semibold py-3 px-8 rounded-full hover:bg-white/30 border border-white/30 transition duration-500'
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationSupport;
