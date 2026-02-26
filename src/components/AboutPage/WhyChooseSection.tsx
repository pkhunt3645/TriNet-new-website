import React from 'react';
import { whyChooseData } from '@/data/aboutPageData';
import Image from 'next/image';

const WhyChooseSection: React.FC = () => {
  return (
    <section className="tn-section relative overflow-hidden">
      {/* Blue background for top half */}
      <div className='absolute inset-0 z-0 bottom-1/4 bg-linear-to-br from-primary via-primary to-secondary'></div>

      <div className="tn-container relative z-10">
        {/* Section Header */}
        <div className='tn-section-head text-center mb-12 animate-fadeInUp'>
          <h2 className='tn-section-head--title text-white! mb-4' dangerouslySetInnerHTML={{ __html: whyChooseData.title }}></h2>
          <p className='tn-section-head--description text-white/90! max-w-4xl mx-auto' dangerouslySetInnerHTML={{ __html: whyChooseData.description }}></p>
        </div>

        {/* Main Content Card */}
        <div className='grid lg:grid-cols-2 bg-white rounded-3xl max-w-360 mx-auto shadow-2xl overflow-hidden animate-fadeInUp'>
          <div className='p-6 md:p-12 flex flex-col justify-center'>
            <ul className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
              {whyChooseData.reasons?.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    className='flex items-start gap-2 md:gap-4 lg:gap-8 group animate-fadeInUp'
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className='w-12 md:w-14'>
                      <Icon className='h-auto w-full text-primary stroke-1 group-hover:scale-110 group-hover:text-theme-green transition duration-500' />
                    </div>

                    <div className='flex-1 flex flex-col gap-1 md:gap-1.5 lg:gap-2'>
                      <h4 className='text-lg font-bold text-secondary'>{item.title}</h4>
                      <p className='text-sm text-txt-gray'>{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='relative min-h-80 lg:min-h-120'>
            <div className='absolute inset-0'>
              <Image
                fill
                priority
                src={whyChooseData.image}
                alt={whyChooseData.imageAlt}
                sizes="(max-width: 768px) 100vw, 50vw"
                className='object-cover object-right group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-linear-to-br from-secondary/25 to-transparent'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;