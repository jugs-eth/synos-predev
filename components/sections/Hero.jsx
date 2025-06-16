import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pb-8 pt-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center md:text-left">
          {/* GitHub Blip */}
          <div className="flex items-center gap-2 mb-6 w-fit md:w-auto mx-auto md:mx-0">
            <Image src="/images/github.svg" alt="GitHub" width={20} height={20} />
            <span className="text-sm text-muted-foreground">OS <Link href="https://github.com/synos-io/synos-archive" target="_blank" className="text-white font-semibold underline">Synos Archive</Link> →</span>
            <Image src="/images/star.svg" alt="Star" width={16} height={16} />
            <span className="text-sm text-muted-foreground">2.4k stars</span>
          </div>

          {/* Title */}
          <h1 className="text-center md:text-left text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold tracking-tight mb-6 md:leading-[4.5rem] leading-tight">
            <span className="text-title-primary">Manage your funding</span>
            <span className="text-title-secondary block">rounds easier than ever.</span>
          </h1>
          
          {/* Description */}
          <p className="text-md text-muted-foreground max-w-lg mb-8 leading-relaxed">
            <span className="text-title-secondary font-semibold">Synos is an open source, human-centric, and fully decentralised funding platform.</span>
            <span className="text-title-primary font-medium"> Launch single or multi-round initial coin offerings on-chain easily with our widget or your own page.</span>
          </p>
          
          {/* CTA and Advisors */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <Button 
              size="lg" 
              className="btn-highlight hover:bg-highlight/90 transition-colors !text-md font-semibold !px-8 py-6 w-auto mx-auto md:mx-0"
            >
              Join Waitlist
            </Button>

            {/* Advisor Section */}
            <div className="flex items-center gap-4 mx-auto md:mx-0">
              <div className="flex -space-x-4">
                <Image 
                  src="/images/advisor1.png" 
                  alt="Advisor 1" 
                  width={45} 
                  height={45} 
                  className="rounded-full object-cover"
                />
                <Image 
                  src="/images/advisor2.png" 
                  alt="Advisor 2" 
                  width={45} 
                  height={45} 
                  className="rounded-full object-cover"
                />
                <Image 
                  src="/images/advisor3.png" 
                  alt="Advisor 3" 
                  width={45} 
                  height={45} 
                  className="rounded-full  object-cover"
                />
                <Image 
                  src="/images/advisor4.png" 
                  alt="Advisor 4" 
                  width={45} 
                  height={45} 
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Meet our <Link href="https://github.com/synos-io/synos-archive" target="_blank" className="text-white font-semibold underline">Advisors</Link> →</span>
              </div>
            </div>
          </div>

          {/* Two Column Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
            <div className="col-span-2 hidden md:block">
              <Image 
                src="/images/header-left.png" 
                alt="Header Left" 
                width={818} 
                height={387} 
                className="h-full rounded-lg"
              />
            </div>
            <div className="col-span-1 mx-auto md:mx-0 w-full">
              <Image 
                src="/images/header-right.png" 
                alt="Header Right" 
                width={372} 
                height={387} 
                className="h-full rounded-lg mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 