import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-title-primary">The Future of</span>
            <span className="text-title-secondary block">Decentralized Apps</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Build, deploy, and scale your blockchain applications with unprecedented ease. 
            Join thousands of developers who trust Synos for their Web3 infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="btn-highlight hover:bg-highlight/90 transition-colors text-lg px-6 sm:px-8 py-6 w-full sm:w-auto"
            >
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-white hover:bg-gray-50 transition-colors text-lg px-6 sm:px-8 py-6 w-full sm:w-auto border-2"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            Trusted by 10,000+ developers worldwide
          </div>
        </div>
      </div>
    </section>
  );
} 