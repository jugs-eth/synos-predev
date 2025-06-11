import React from 'react';
import { Card } from '@/components/ui/card';

export default function Media() {
  const mediaLogos = [
    { name: 'Forbes', logo: 'Forbes', url: '#' },
    { name: 'Entrepreneur', logo: 'Entrepreneur', url: '#' },
    { name: 'TechCrunch', logo: 'TechCrunch', url: '#' },
    { name: 'Wired', logo: 'Wired', url: '#' },
    { name: 'The Verge', logo: 'The Verge', url: '#' },
    { name: 'VentureBeat', logo: 'VentureBeat', url: '#' },
    { name: 'CoinDesk', logo: 'CoinDesk', url: '#' },
    { name: 'Decrypt', logo: 'Decrypt', url: '#' },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-title-secondary">
            Featured In
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Leading publications trust and recommend Synos
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-4 sm:gap-6 lg:gap-8 pb-4 scrollbar-hide px-2">
            {mediaLogos.map((media, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-32 sm:w-40 lg:w-48 h-16 sm:h-20 lg:h-24 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-highlight"
              >
                <div className="text-center px-2">
                  <div className="font-bold text-sm sm:text-base lg:text-lg text-muted-foreground hover:text-highlight transition-colors">
                    {media.logo}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {media.name}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 