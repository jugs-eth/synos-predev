import React from 'react';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function QuoteSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at DeFi Labs',
      image: '/api/placeholder/100/100',
      quote: 'Synos transformed how we build and deploy our DeFi protocols. The developer experience is unmatched.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer at NFT Studio',
      image: '/api/placeholder/100/100',
      quote: 'The infrastructure reliability and ease of use made our NFT marketplace launch seamless.'
    },
    {
      name: 'Alex Thompson',
      role: 'Founder of Web3 Startup',
      image: '/api/placeholder/100/100',
      quote: 'Synos helped us scale from 0 to 1M users without any infrastructure headaches.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-highlight mx-auto mb-4 sm:mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
            "Synos has revolutionized the way we think about blockchain infrastructure. 
            It's not just a platform—it's the foundation for the next generation of decentralized applications."
          </blockquote>
          <div className="text-base sm:text-lg font-semibold text-title-secondary">
            — Michael Chang, CEO at Blockchain Ventures
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-highlight"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-sm sm:text-lg font-semibold text-muted-foreground">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <blockquote className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-semibold text-sm sm:text-base text-title-secondary">{testimonial.name}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 