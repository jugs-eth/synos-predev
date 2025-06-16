import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function Media() {
  const mediaLogos = [
    { name: 'Forbes', logo: '/images/forbes.png', width: 103, height: 25 },
    { name: 'Entrepreneur', logo: '/images/entrepreneur.png', width: 197, height: 41 },
    { name: 'Insider', logo: '/images/insider.png', width: 93, height: 45 },
    { name: 'Blockworks', logo: '/images/blockworks.png', width: 188, height: 29 },
    { name: 'CoinDesk', logo: '/images/coindesk.png', width: 155, height: 29 },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile Layout - Text above scrolling logos */}
        <div className="block sm:hidden">
          <p className="text-sm text-muted-foreground font-semibold mb-6 text-center">
            Synos has been featured on
          </p>
          
          <div className="relative -mx-4">
            <Marquee
              speed={40}
              gradient={false}
              pauseOnHover={true}
              className="py-4"
            >
              {mediaLogos.map((media, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer mx-6"
                  style={{ height: `${media.height}px` }}
                >
                  <Image 
                    src={media.logo} 
                    alt={media.name} 
                    width={media.width} 
                    height={media.height} 
                    className="w-auto h-[80%] object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Desktop Layout - Original inline design */}
        <div className="hidden sm:block">
          <div className="relative">
            {/* Left gradient (static) */}
            <div className="absolute left-[14%] top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-background to-transparent flex items-center">
              <Image 
                src="/images/gradient.png" 
                alt="Gradient" 
                width={80} 
                height={100} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right gradient (static, flipped) */}
            <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-background to-transparent flex items-center justify-end">
              <Image 
                src="/images/gradient.png" 
                alt="Gradient" 
                width={80} 
                height={100} 
                className="w-full h-full object-cover transform rotate-180"
              />
            </div>

            <div className="flex items-center gap-8">
              {/* Text aligned with logos */}
              <p className="text-sm text-muted-foreground whitespace-nowrap z-20 relative font-semibold">
                Synos has been featured on
              </p>

              {/* Marquee container */}
              <div className="flex-1">
                <Marquee
                  speed={40}
                  gradient={false}
                  pauseOnHover={true}
                  className="py-4"
                >
                  {mediaLogos.map((media, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer mx-10"
                      style={{ height: `${media.height}px` }}
                    >
                      <Image 
                        src={media.logo} 
                        alt={media.name} 
                        width={media.width} 
                        height={media.height} 
                        className="w-auto h-[80%] object-contain"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 