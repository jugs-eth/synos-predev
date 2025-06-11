import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Users, Globe } from 'lucide-react';

export default function Feature2() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance with industry standards.',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Sub-second response times with global CDN and edge computing capabilities.',
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in tools for team management, version control, and collaborative development.',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Deploy across multiple regions with automatic failover and load balancing.',
      color: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="text-title-primary">Everything You Need to</span>
            <span className="text-title-secondary block">Succeed</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Our comprehensive platform provides all the tools and infrastructure 
            you need to build, deploy, and scale your blockchain applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-highlight">
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-highlight" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-title-secondary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 