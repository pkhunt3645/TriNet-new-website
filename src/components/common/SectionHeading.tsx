import React from 'react';
import { Hash, LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  heading?: string;
  title: string;
  subTitle?: string;
  Icon?: LucideIcon;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  title,
  subTitle,
  Icon = Hash
}) => {
  return (
    <div className='tn-section-head animate-fadeInUp'>
      {heading && (
        <span className='tn-section-head--heading'>
          <Icon className='h-5 w-auto text-primary' /> {heading}
        </span>
      )}
      <h2 className='tn-section-head--title' dangerouslySetInnerHTML={{ __html: title }}></h2>
      {subTitle && (
        <p className='tn-section-head--description' dangerouslySetInnerHTML={{ __html: subTitle }}></p>
      )}
    </div>
  );
};

export default SectionHeading;
