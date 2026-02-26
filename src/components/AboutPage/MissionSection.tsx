'use client';

import React from 'react';
import Image from 'next/image';
import { Hash, CheckCircle } from 'lucide-react';
import { missionData } from '@/data/aboutPageData';

const MissionSection: React.FC = () => {
  return (
    <section className="tn-section">
      <div className="tn-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-6 animate-fadeInUp">
            <div className="flex items-center gap-2 text-primary font-bold text-base xl:text-lg uppercase">
              <Hash className="w-5 h-5" />
              <span>{missionData.sectionTag}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary leading-tight">
              {missionData.title}{' '}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                {missionData.highlightedTitle}
              </span>
            </h2>

            <p className="text-txt-gray text-base lg:text-lg leading-relaxed">
              {missionData.description}
            </p>

            {/* Features Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {missionData.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-secondary text-sm lg:text-base animate-fadeInUp"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="shrink-0 mt-0.5 p-1 bg-linear-to-tl from-primary/20 to-light-cyan rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className='grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2 h-fit'>
            {missionData.images.map((image, index) => (
              <figure
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-lg group animate-fadeInUp ${index === 0 ? 'col-span-2 h-60 lg:h-72' : 'h-44 lg:h-52'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  fill
                  src={image.src}
                  alt={image.alt}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='object-cover group-hover:scale-110 transition duration-500'
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
