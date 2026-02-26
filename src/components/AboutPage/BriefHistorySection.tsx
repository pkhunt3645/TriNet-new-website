import React from 'react';
import Image from 'next/image';
import { Hash } from 'lucide-react';
import { briefHistoryData } from '@/data/aboutPageData';

const BriefHistorySection: React.FC = () => {
  return (
    <section className="tn-section bg-none">
      <div className="tn-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 2xl:gap-10">
          <figure className="relative overflow-hidden w-full mx-auto animate-fadeInUp hover:rotate-1 transition duration-500">
            {/* Background glow */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/15 rounded-full blur-3xl -z-10" />

            {/* Image wrapper */}
            <div className="relative h-full overflow-hidden rounded-3xl rounded-tr-sm rounded-bl-sm group">
              <Image
                preload
                src={briefHistoryData.image}
                alt={briefHistoryData.imageAlt}
                fetchPriority="high"
                height={420}
                width={520}
                className="w-full h-full object-cover aspect-video transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/35 via-transparent via-55% to-secondary/35" />
            </div>

            {/* Top badge */}
            <div className="hidden md:inline-block absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/85 backdrop-blur-md px-4 py-3 rounded-xl shadow-md border border-gray-100 max-w-[85%]">
              <p className="text-xs text-txt-gray">Seamlessly Connect with</p>
              <p className="text-sm font-bold text-primary">Leading Healthcare Platforms</p>
            </div>

            {/* Bottom stats badge */}
            <div className="hidden md:inline-block absolute top-4 left-4 md:top-6 md:left-6 bg-white/85 backdrop-blur-md px-4 py-3 rounded-xl shadow-md border border-gray-100">
              <ul className="flex gap-4">
                <li className="flex flex-col">
                  <p className="text-base 2xl:text-lg font-bold text-primary">HIPAA</p>
                  <p className="text-xs text-txt-gray">Compliance Focused</p>
                </li>
                <li className="w-px bg-primary/25 rounded-md" />
                <li className="flex flex-col">
                  <p className="text-base 2xl:text-lg font-bold text-primary">SOC2</p>
                  <p className="text-xs text-txt-gray">Compliance Focused</p>
                </li>
              </ul>
            </div>
          </figure>

          <div className="flex flex-col gap-2 lg:gap-3 animate-fadeInUp" style={{ animationDelay: '150ms' }}>
            <div className="tn-section-head--heading">
              <Hash className="w-5 h-5" /> {briefHistoryData.sectionTag}
            </div>
            <h2 className="tn-section-head--title" dangerouslySetInnerHTML={{ __html: briefHistoryData.title }}></h2>

            <div className="space-y-4 text-txt-gray text-base lg:text-lg leading-relaxed">
              {briefHistoryData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {briefHistoryData.stats.map((stat) => (
                <div key={stat.id} className="relative pl-6 border-l-4 border-primary">
                  <h3 className="text-4xl lg:text-5xl font-bold text-primary font-poppins">{stat.value}</h3>
                  <p className="text-secondary text-sm lg:text-base mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefHistorySection;
