import React from 'react';
import Image from 'next/image';

export default function Feature2() {
  const features = [
    {
      primaryTitle: 'Create rounds',
      secondaryTitle: 'and custom tiers.',
      primaryText: 'Lorem ipsum dolor sit amet consectetur. Nunc mattis purus volutpat elementum. ',
      secondaryText: 'Tortor est dolor ut habitant id cras mauris enim sit risus mi fames. Magna at eget sit sapien.',
      backgroundImage: '/images/feature-1.png'
    },
    {
      primaryTitle: 'Customise',
      secondaryTitle: ' your page and widget.',
      primaryText: 'Lorem ipsum dolor sit amet consectetur. Nunc mattis purus volutpat elementum. Tortor est dolor ut habitant id cras mauris enim sit risus mi fames. Magna at eget sit sapien.',
      secondaryText: '',
      backgroundImage: '/images/feature-2.png'
    },
    {
      primaryTitle: 'Analytics',
      secondaryTitle: ' and native affiliates.',
      primaryText: 'Lorem ipsum dolor sit amet consectetur. Nunc mattis purus volutpat elementum. Tortor est dolor ut habitant id cras mauris enim sit risus mi fames. Magna at eget sit sapien.',
      secondaryText: '',
      backgroundImage: '/images/feature-3.png'
    },
    {
      primaryTitle: 'Whitelist bonuses',
      secondaryTitle: 'and discounts.',
      primaryText: 'Lorem ipsum dolor sit amet consectetur. Nunc mattis purus volutpat elementum. Tortor est dolor ut habitant id cras mauris enim sit risus mi fames. Magna at eget sit sapien.',
      secondaryText: '',
      backgroundImage: '/images/feature-4.png'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative h-[495px] rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#222222' }}
            >
              {/* Background Image */}
              <Image 
                src={feature.backgroundImage} 
                alt={feature.primaryTitle + ' ' + feature.secondaryTitle} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Content - Bottom Aligned */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 leading-tight tracking-tighter">
                  <span className="text-title-primary">{feature.primaryTitle}</span>
                  <span className="text-title-secondary"> {feature.secondaryTitle}</span>
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-title-secondary font-semibold">
                  {feature.primaryText}
                  {feature.secondaryText && (
                    <span className="text-title-primary font-medium"> {feature.secondaryText}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 