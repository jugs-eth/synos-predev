import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
        {/* Row with star, profiles, and icons */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex flex-row items-center gap-10">
            {/* Star and text */}
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3l4.09 8.29L29 12.18l-6.5 6.34L24.18 29 16 24.27 7.82 29l1.68-10.48L3 12.18l8.91-0.89L16 3z" fill="#FFD700"/>
              </svg>
              <span className="text-md font-medium text-neutral-400">67+ Stars</span>
            </div>
            {/* Overlapping profile images and text */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-4">
                <img src="/images/advisor1.png" alt="Advisor 1" className="w-8 h-8 rounded-full  object-cover" />
                <img src="/images/advisor2.png" alt="Advisor 2" className="w-8 h-8 rounded-full  object-cover" />
                <img src="/images/advisor3.png" alt="Advisor 3" className="w-8 h-8 rounded-full  object-cover" />
                <img src="/images/advisor4.png" alt="Advisor 4" className="w-8 h-8 rounded-full  object-cover" />
              </div>
              <span className="text-md font-medium text-neutral-400 ml-4">12+ Advisors</span>
            </div>
            {/* 3 icons and text */}
            <div className="flex items-center gap-2">
              <div className="flex items-center -gap-1">
                <img src="/images/arbitrum.svg" alt="Certik" className="w-7 h-7" />
                <img src="/images/ethereum.svg" alt="Ethereum" className="w-7 h-7" />
                <img src="/images/base.svg" alt="OpenZeppelin" className="w-7 h-7" />
              </div>
              <span className="text-md font-medium text-neutral-400 ml-4">16+ Chains</span>
            </div>
          </div>
        </div>
        <div className="pb-22 mx-auto max-w-[50vw]">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="text-title-primary">Completely open source, feature
              packed </span>
            <span className="text-title-secondary">and constantly evolving.</span>
          </h2>
        </div>
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