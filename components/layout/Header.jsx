import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown, ArrowRight, Star, Zap, Shield, Users, Globe } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';

export default function Header() {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for header animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const useCasesItems = [
    {
      title: 'DeFi Protocols',
      description: 'Build and deploy decentralized finance applications',
      icon: '💰',
      href: '#defi',
      features: ['Lending & Borrowing', 'DEX Trading', 'Yield Farming', 'Staking']
    },
    {
      title: 'NFT Marketplaces',
      description: 'Create and manage NFT trading platforms',
      icon: '🎨',
      href: '#nft',
      features: ['Minting Tools', 'Auction System', 'Royalty Management', 'Metadata Standards']
    }
  ];

  const solutionsItems = [
    {
      title: 'Enterprise Integration',
      description: 'Seamlessly integrate blockchain into existing systems',
      icon: '🏢',
      href: '#enterprise',
      features: ['API Gateway', 'Legacy System Connectors', 'Compliance Tools', 'Audit Trails']
    },
    {
      title: 'Developer Tools',
      description: 'Comprehensive SDKs and development frameworks',
      icon: '🛠️',
      href: '#tools',
      features: ['Multi-Chain SDK', 'Testing Framework', 'Deployment Tools', 'Documentation']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time insights and performance monitoring',
      icon: '📊',
      href: '#analytics',
      features: ['Real-time Metrics', 'Custom Reports', 'Alert System', 'Data Export']
    },
    {
      title: 'Security Solutions',
      description: 'Advanced security and compliance features',
      icon: '🔒',
      href: '#security',
      features: ['Multi-Sig Wallets', 'Audit Logs', 'Penetration Testing', 'Insurance Coverage']
    },
    {
      title: 'Scalability Solutions',
      description: 'High-performance infrastructure for growth',
      icon: '⚡',
      href: '#scalability',
      features: ['Layer 2 Integration', 'Sharding Support', 'Load Balancing', 'Auto Scaling']
    },
    {
      title: 'Compliance Tools',
      description: 'Regulatory compliance and reporting',
      icon: '📋',
      href: '#compliance',
      features: ['KYC/AML Integration', 'Regulatory Reporting', 'Audit Trails', 'Compliance Monitoring']
    },
    {
      title: 'Cross-Chain Bridge',
      description: 'Seamless interoperability across blockchains',
      icon: '🌉',
      href: '#bridge',
      features: ['Multi-Chain Support', 'Asset Bridging', 'Liquidity Pools', 'Bridge Security']
    },
    {
      title: 'Smart Contract Templates',
      description: 'Pre-built, audited contract templates',
      icon: '📄',
      href: '#templates',
      features: ['DeFi Templates', 'NFT Contracts', 'Governance Models', 'Custom Development']
    }
  ];

  const useCasesCards = [
    {
      icon: '/images/1.svg',
      title: 'Raise Funds for an ERC20 Crypto Project',
      description: 'Lorem ipsum dolor sit amet consectetur. In dipshit.'
    },
    {
      icon: '/images/2.svg',
      title: 'Sell Tokens in Customisable Rounds',
      description: 'Lorem ipsum dolor sit amet consectetur. In dipshit.'
    },
    {
      icon: '/images/3.svg',
      title: 'Run a Presale With Whitelisted Bonuses',
      description: 'Lorem ipsum dolor sit amet consectetur. In dipshit.'
    }
  ];

  const quickLinks = [
    { label: 'Use Cases →', href: '#' },
    { label: 'Practical Guides →', href: '#' },
    { label: 'Developer Docs →', href: '#' }
  ];

  // Features mega menu content
  const featuresCards = [
    {
      icon: '/images/4.svg',
      title: 'Private Rounds',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: '/images/6.svg',
      title: 'Custom Widgets',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: '/images/5.svg',
      title: 'Presales & Fairlaunches',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: '/images/8.svg',
      title: 'Developer SDK',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: '/images/9.svg',
      title: 'Whitelisting & Bonuses',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: '/images/7.svg',
      title: 'Templates & Guides',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: '/images/10.svg',
      title: 'Branded Pages',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: '/images/11.svg',
      title: 'Automations',
      description: 'Lorem ipsum dolor sit amet.'
    }
  ];

  const MegaMenu = ({ items, isVisible, onMouseLeave, type }) => {
    if (!isVisible) return null;

    if (type === 'useCases') {
      return (
        <div 
          className={`fixed top-16 left-1/2 transform mt-10 -translate-x-1/2 bg-[#222222] shadow-lg z-50 transition-all duration-300 ease-out rounded-lg ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          onMouseLeave={onMouseLeave}
          style={{ width: '50vw', maxWidth: 900 }}
        >
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left: Use Cases */}
            <div className="md:col-span-2 border-r border-r-muted-foreground/10">
              <div className="uppercase text-xs font-semibold text-muted-foreground mb-6 tracking-widest">Use Cases</div>
              <div className="flex flex-col">
                {useCasesCards.map((card, idx) => (
                  <div key={idx} className="flex items-center gap-4 rounded-xl transition-colors py-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#191919]">
                      <Image src={card.icon} alt={card.title} width={28} height={28} />
                    </div>
                    <div>
                      <div className="font-semibold text-md text-white leading-tight">{card.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{card.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Quick Links and Bulb Card */}
            <div className="flex flex-col gap-6 h-full justify-between">
              <div>
                <div className="uppercase text-xs font-semibold text-muted-foreground mb-6 tracking-widest">Quick Links</div>
                <div className="flex flex-col">
                  {quickLinks.map((link, idx) => (
                    <Link key={idx} href={link.href} className="flex items-center justify-between text-white/90 hover:text-highlight text-base font-semibold transition-colors py-1">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <Image src="/images/bulb.png" alt="Bulb Card" width={220} height={90} className="rounded-xl w-[90%] object-cover" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'features') {
      return (
        <div 
          className={`fixed top-16 left-1/2 transform mt-10 -translate-x-1/2 bg-[#222222] shadow-lg z-50 transition-all duration-300 ease-out rounded-lg ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ width: '60vw', maxWidth: 900 }}
          onMouseLeave={onMouseLeave}
        >
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left: Feature image card */}
            <div className="flex items-center justify-center">
              <Image src="/images/check.png" alt="Check Card" width={260} height={260} className="rounded-2xl w-full object-cover max-w-[320px]" />
            </div>
            {/* Right: Features grid */}
            <div className="md:col-span-2 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="uppercase text-xs font-semibold text-muted-foreground tracking-widest">Features</div>
                <Link href="#" className="text-sm text-muted-foreground underline font-semibold hover:text-highlight transition-colors">View all features →</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {featuresCards.map((card, idx) => (
                  <div key={idx} className="flex items-center gap-4 rounded-xl transition-colors py-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#191919]">
                      <Image src={card.icon} alt={card.title} width={28} height={28} />
                    </div>
                    <div>
                      <div className="font-semibold text-md text-white leading-tight">{card.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{card.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div 
        className={`fixed top-16 left-1/2 transform -translate-x-1/2 bg-background shadow-2xl z-50 transition-all duration-300 ease-out rounded-lg ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
        onMouseLeave={onMouseLeave}
        style={{ width: '80vw' }}
      >
        <div className="px-8 py-12">
          {type === 'useCases' ? (
            // Use Cases: Single row with 4 columns + sidebar
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Main content - 4 columns */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((item, index) => (
                    <Card key={index} className="border-0 shadow-none hover:shadow-lg transition-all duration-300 cursor-pointer group bg-transparent">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-start space-y-4">
                          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-title-secondary mb-2 group-hover:text-highlight transition-colors duration-300 text-lg">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                            <ul className="space-y-1">
                              {item.features.map((feature, idx) => (
                                <li key={idx} className="text-xs text-muted-foreground flex items-center">
                                  <div className="w-1 h-1 bg-highlight rounded-full mr-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar with featured and quick actions */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {/* Featured article */}
                  <Card className="border-0 shadow-none bg-muted/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="h-4 w-4 text-highlight" />
                        <span className="text-sm font-medium text-highlight">Featured</span>
                      </div>
                      <h4 className="font-semibold text-title-secondary mb-2">Getting Started with DeFi Development</h4>
                      <p className="text-sm text-muted-foreground mb-4">Learn the fundamentals and best practices for building on our platform.</p>
                      <Button size="sm" className="btn-highlight hover:bg-highlight/90 transition-colors">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Quick actions */}
                  <Card className="border-0 shadow-none bg-muted/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-title-secondary mb-4">Quick Actions</h4>
                      <div className="space-y-3">
                        <Button variant="outline" size="sm" className="w-full justify-start btn-white hover:bg-gray-50">
                          <Zap className="h-4 w-4 mr-2" />
                          Start Building
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start btn-white hover:bg-gray-50">
                          <Shield className="h-4 w-4 mr-2" />
                          View Documentation
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start btn-white hover:bg-gray-50">
                          <Users className="h-4 w-4 mr-2" />
                          Join Community
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ) : (
            // Solutions: 2 rows with 4 columns each
            <div className="space-y-8">
              {/* First row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.slice(0, 4).map((item, index) => (
                  <Card key={index} className="border-0 shadow-none hover:shadow-lg transition-all duration-300 cursor-pointer group bg-transparent">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-start space-y-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-title-secondary mb-2 group-hover:text-highlight transition-colors duration-300 text-lg">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                          <ul className="space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center">
                                <div className="w-1 h-1 bg-highlight rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Second row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.slice(4, 8).map((item, index) => (
                  <Card key={index + 4} className="border-0 shadow-none hover:shadow-lg transition-all duration-300 cursor-pointer group bg-transparent">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-start space-y-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-title-secondary mb-2 group-hover:text-highlight transition-colors duration-300 text-lg">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                          <ul className="space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center">
                                <div className="w-1 h-1 bg-highlight rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <header className={`z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
      isScrolled ? '' : ''
    }`}>
      <div className={`container flex h-16 items-center justify-between mx-auto transition-all duration-300 ${
        isScrolled ? 'px-2 sm:px-6 py-14' : 'px-2 sm:px-6 py-14'
      }`}>
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 pl-4 md:pl-0">
            <Image src="/images/logo.svg" alt="Synos" width={101} height={51} />
          </Link>
        </div>

        {/* Navigation - Right aligned */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="relative">
            <button
              className="flex items-center gap-1 text-md font-semibold transition-colors hover:text-highlight text-[#BBBBBB] py-2"
              onMouseEnter={() => setActiveMegaMenu('useCases')}
            >
              Use Cases
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === 'useCases' ? 'rotate-180' : ''}`} />
            </button>
            <MegaMenu 
              items={useCasesItems} 
              isVisible={activeMegaMenu === 'useCases'} 
              onMouseLeave={() => setActiveMegaMenu(null)}
              type="useCases"
            />
          </div>

          <Link href="#benefits" className="text-md font-semibold transition-colors hover:text-highlight text-[#BBBBBB]">
            Benefits
          </Link>

          <div className="relative">
            <button
              className="flex items-center gap-1 text-md font-semibold transition-colors hover:text-highlight text-[#BBBBBB] py-2"
              onMouseEnter={() => setActiveMegaMenu('features')}
            >
              Features
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === 'features' ? 'rotate-180' : ''}`} />
            </button>
            <MegaMenu 
              items={featuresCards} 
              isVisible={activeMegaMenu === 'features'} 
              onMouseLeave={() => setActiveMegaMenu(null)}
              type="features"
            />
          </div>

          {/* Buttons */}
          <Button 
            variant="outline" 
            size="sm" 
            className="btn-white hover:bg-gray-50 transition-colors font-semibold text-sm px-6 !text-[#5A5A5A]"
          >
            Developer Portal
          </Button>
          <Button 
            size="sm" 
            className="btn-highlight hover:bg-highlight/90 transition-colors px-6 md:-ml-4 font-semibold text-sm"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
              <Link href="/" className="flex items-center space-x-2 -mt-1">
            <Image src="/images/logo.svg" alt="Synos" width={101} height={51} className='w-[30%]' />
          </Link>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-2 px-4">
                <div>
                  <h3 className="text-md font-semibold text-title-secondary mb-2">Use Cases</h3>
                  <div className="space-y-2 ml-4">
                    {useCasesItems.map((item, index) => (
                      <Link key={index} href={item.href} className="block text-sm text-muted-foreground hover:text-highlight transition-colors py-1">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link href="#benefits" className="text-md font-semibold transition-colors hover:text-highlight text-title-primary py-2">
                  Benefits
                </Link>
                
                <div>
                  <h3 className="text-md font-semibold text-title-secondary mb-2">Features</h3>
                  <div className="space-y-2 ml-4">
                    {featuresCards.map((item, index) => (
                      <Link key={index} href="#" className="block text-sm text-muted-foreground hover:text-highlight transition-colors py-1">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Mobile buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="btn-white hover:bg-gray-50 transition-colors justify-start"
                  >
                    Developer Portal
                  </Button>
                  <Button 
                    size="lg" 
                    className="btn-highlight hover:bg-highlight/90 transition-colors justify-start"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 