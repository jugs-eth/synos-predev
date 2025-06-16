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
    },
    {
      title: 'DAO Governance',
      description: 'Power decentralized autonomous organizations',
      icon: '🏛️',
      href: '#dao',
      features: ['Voting Systems', 'Proposal Management', 'Treasury Control', 'Member Onboarding']
    },
    {
      title: 'Gaming Platforms',
      description: 'Build blockchain-based gaming experiences',
      icon: '🎮',
      href: '#gaming',
      features: ['Asset Ownership', 'Play-to-Earn', 'Cross-Game Items', 'Tournament Systems']
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
    }
  ];

  const MegaMenu = ({ items, isVisible, onMouseLeave, type }) => {
    if (!isVisible) return null;

    return (
      <div 
        className={`fixed top-16 left-1/2 transform -translate-x-1/2 bg-background shadow-2xl z-50 transition-all duration-300 ease-out rounded-lg ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
        onMouseLeave={onMouseLeave}
        style={{ width: '80vw' }}
      >
        <div className="px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Main content grid */}
            <div className="lg:col-span-2 xl:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <Card key={index} className="border-0 shadow-none hover:shadow-lg transition-all duration-300 cursor-pointer group bg-transparent">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
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

            {/* Sidebar with additional content */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Featured article */}
                <Card className="border-0 shadow-none bg-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="h-4 w-4 text-highlight" />
                      <span className="text-sm font-medium text-highlight">Featured</span>
                    </div>
                    <h4 className="font-semibold text-title-secondary mb-2">Getting Started with {type === 'useCases' ? 'DeFi Development' : 'Enterprise Blockchain'}</h4>
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

                {/* Stats */}
                <Card className="border-0 shadow-none bg-muted/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-title-secondary mb-4">Platform Stats</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Active Projects</span>
                        <span className="text-lg font-semibold text-title-secondary">10,000+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Total Volume</span>
                        <span className="text-lg font-semibold text-title-secondary">$2.5B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Uptime</span>
                        <span className="text-lg font-semibold text-highlight">99.9%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
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
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-highlight text-[#BBBBBB] py-2"
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

          <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-highlight text-[#BBBBBB]">
            Benefits
          </Link>

          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-highlight text-[#BBBBBB] py-2"
              onMouseEnter={() => setActiveMegaMenu('solutions')}
            >
              Solutions
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            <MegaMenu 
              items={solutionsItems} 
              isVisible={activeMegaMenu === 'solutions'} 
              onMouseLeave={() => setActiveMegaMenu(null)}
              type="solutions"
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
                <SheetTitle className="text-title-secondary">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <div>
                  <h3 className="text-lg font-medium text-title-secondary mb-2">Use Cases</h3>
                  <div className="space-y-2 ml-4">
                    {useCasesItems.map((item, index) => (
                      <Link key={index} href={item.href} className="block text-sm text-muted-foreground hover:text-highlight transition-colors py-1">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link href="#benefits" className="text-lg font-medium transition-colors hover:text-highlight text-title-primary py-2">
                  Benefits
                </Link>
                
                <div>
                  <h3 className="text-lg font-medium text-title-secondary mb-2">Solutions</h3>
                  <div className="space-y-2 ml-4">
                    {solutionsItems.map((item, index) => (
                      <Link key={index} href={item.href} className="block text-sm text-muted-foreground hover:text-highlight transition-colors py-1">
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