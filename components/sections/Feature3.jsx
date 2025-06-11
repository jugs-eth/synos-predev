import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3 } from 'lucide-react';

export default function Feature3() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-highlight/20 to-highlight/5 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl mb-4">📊</div>
                <div className="text-base sm:text-lg font-medium text-muted-foreground">
                  Advanced Analytics
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-highlight/20 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-highlight/10 rounded-full"></div>
            <div className="absolute top-1/2 -left-3 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 bg-highlight/30 rounded-full"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-highlight font-medium">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Advanced Analytics</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-title-primary">Data-Driven</span>
              <span className="text-title-secondary block">Insights</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Get real-time insights into your application performance, user behavior, 
              and blockchain metrics. Our advanced analytics help you make informed 
              decisions and optimize your applications for success.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-highlight rounded-full"></div>
                <span className="text-sm sm:text-base">Real-time performance monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-highlight rounded-full"></div>
                <span className="text-sm sm:text-base">User behavior analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-highlight rounded-full"></div>
                <span className="text-sm sm:text-base">Custom dashboard creation</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="btn-highlight hover:bg-highlight/90 transition-colors mt-4 sm:mt-6 w-full sm:w-auto"
            >
              Explore Analytics
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 