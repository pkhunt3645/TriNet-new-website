import React from 'react';
import { statsData } from '@/data/landingPageData';

const StatsSection: React.FC = () => {
    return (
        <section className='tn-section'>
            <div className="tn-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                    {statsData.map((item) => {
                        const { Icon } = item;
                        return (
                            <div key={item.id} className={`group animate-fadeInUp relative overflow-hidden rounded-2xl bg-linear-to-tl from-gray-50 to-light-cyan hover:scale-105 border border-light-cyan hover:shadow-lg hover:from-secondary/15 transition duration-500`}>
                                <div className="relative p-4 sm:p-6 flex flex-col gap-3">
                                    <div className="flex items-start justify-start xl:justify-between gap-4">
                                        <div className="rounded-xl p-3 bg-linear-to-br from-primary to-secondary shadow-lg shadow-primary/30 group-hover:from-secondary group-hover:to-primary transition duration-500">
                                            <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                                        </div>

                                        {item.value && (
                                            <span className="text-4xl md:text-5xl font-semibold text-primary font-poppins">
                                                {item.value}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className={`font-semibold text-lg text-secondary`}>{item.title}</h3>
                                    <p className="text-sm text-txt-gray leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;