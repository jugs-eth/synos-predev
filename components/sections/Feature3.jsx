import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Feature3() {
  return (
    <section className="py-12 !pt-6 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-1 lg:order-1">
            <Image 
              src="/images/features-right.png" 
              alt="Features" 
              width={600} 
              height={400} 
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2 md:pl-10">
            <h2 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="text-title-primary">Raise funds easily </span>
              <span className="text-title-secondary">and more secure than ever.</span>
            </h2>
            
            <p className="text-lg text-title-primary leading-relaxed text-center md:text-left md:max-w-[30vw] font-medium">
              <span className="text-title-secondary font-semibold">Hyper secure battle-hardened smart contracts.</span> All of our contracts are open source with frequent public audits from industry renowned developers.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-start items-center gap-4">
              <Button 
                size="lg" 
                variant="outline"
                className="btn-white hover:bg-gray-50 transition-colors text-black font-semibold px-8 py-6 w-full sm:w-auto"
              >
                Get Started
              </Button>
              
              <Link 
                href="#" 
                className="text-sm text-muted-foreground hover:text-highlight transition-colors flex items-center gap-1 font-semibold"
              >
                <span className="text-title-secondary underline">API Reference</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 