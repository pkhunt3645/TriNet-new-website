import React from 'react';
import { ArrowRight, LucideIcon } from "lucide-react";
import Button from '@/components/ui/Button';

export interface TrustIndicator {
  avatarLetters?: string[];
  title: string;
  subtitle: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface CenteredHeroSectionProps {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  highlightedText: string;
  description: string;
  ctaButtons?: CTAButton[];
  trustIndicators?: {
    left: TrustIndicator;
    right: TrustIndicator;
  };
}

const CenteredHeroSection: React.FC<CenteredHeroSectionProps> = ({
  badge,
  title,
  highlightedText,
  description,
  ctaButtons = [],
  trustIndicators,
}) => {
  const BadgeIcon = badge.icon;

  return (
    <section className="tn-section relative w-full overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="tn-container relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6 lg:gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm md:text-base font-semibold text-primary bg-white border-2 border-primary/20 shadow-sm hover:shadow-md hover:border-primary/40 transition duration-500 animate-fadeInUp">
            <BadgeIcon className="w-4 h-4 md:w-5 md:h-5 fill-primary" />
            <span>{badge.text}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-secondary leading-tight animate-fadeInUp">
            {title}{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              {highlightedText}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-txt-gray max-w-3xl leading-relaxed animate-fadeInUp" dangerouslySetInnerHTML={{ __html: description }}></p>

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 lg:mt-6 animate-fadeInUp">
              {ctaButtons.map((button, index) => {
                const isPrimary = button.variant !== 'secondary';
                return (
                  <Button
                    key={index}
                    href={button.href}
                    className={
                      isPrimary
                        ? 'inline-flex whitespace-nowrap items-center justify-center gap-2 bg-linear-to-br from-primary to-secondary text-white text-base md:text-lg font-semibold py-2.5 px-10 rounded-full hover:from-secondary hover:to-primary hover:shadow-lg hover:shadow-primary/30 transition duration-500 group'
                        : 'inline-flex whitespace-nowrap items-center justify-center gap-2 bg-white text-primary text-base md:text-lg font-semibold py-2.5 px-10 rounded-full border-2 border-primary hover:bg-primary hover:text-white hover:shadow-lg transition duration-500'
                    }
                  >
                    {button.text}
                    {isPrimary && (
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition duration-500' />
                    )}
                  </Button>
                );
              })}
            </div>
          )}

          {/* Trust Indicators */}
          {trustIndicators && (
            <div className="flex items-start md:items-center gap-6 pt-6 lg:pt-8 animate-fadeInUp">
              <div className='flex items-center gap-4'>
                {trustIndicators.left.avatarLetters && (
                  <ul className='hidden sm:flex -space-x-2'>
                    {trustIndicators.left.avatarLetters.map((letter, index) => (
                      <li
                        key={index}
                        className={`w-8 h-8 3xl:h-10 3xl:w-10 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                          } border-2 border-white flex items-center justify-center text-white text-xs 3xl:text-base font-bold`}
                      >
                        {letter}
                      </li>
                    ))}
                  </ul>
                )}
                <div className='text-right sm:text-left'>
                  <p className='text-secondary text-sm md:text-base font-semibold'>
                    {trustIndicators.left.title}
                  </p>
                  <p className='text-txt-gray text-xs md:text-sm'>{trustIndicators.left.subtitle}</p>
                </div>
              </div>
              <div className="block w-px h-12 bg-linear-to-t from-light-cyan via-primary to-lightfrom-light-cyan"></div>
              <div className='text-left'>
                <p className='text-secondary text-sm md:text-base font-semibold'>
                  {trustIndicators.right.title}
                </p>
                <p className='text-txt-gray text-xs md:text-sm'>{trustIndicators.right.subtitle}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CenteredHeroSection;
