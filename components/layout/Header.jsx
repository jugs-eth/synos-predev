import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-title-secondary">Synos</span>
          </Link>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-highlight text-title-primary">
            Features
          </Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-highlight text-title-primary">
            About
          </Link>
          <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-highlight text-title-primary">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-highlight text-title-primary">
            Contact
          </Link>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden sm:inline-flex text-title-primary hover:text-highlight hover:bg-transparent"
          >
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="btn-highlight hover:bg-highlight/90 transition-colors px-4 sm:px-6"
          >
            Get Started
          </Button>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-title-secondary">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="#features" className="text-lg font-medium transition-colors hover:text-highlight text-title-primary py-2">
                  Features
                </Link>
                <Link href="#about" className="text-lg font-medium transition-colors hover:text-highlight text-title-primary py-2">
                  About
                </Link>
                <Link href="#pricing" className="text-lg font-medium transition-colors hover:text-highlight text-title-primary py-2">
                  Pricing
                </Link>
                <Link href="#contact" className="text-lg font-medium transition-colors hover:text-highlight text-title-primary py-2">
                  Contact
                </Link>
                
                {/* Mobile buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="justify-start text-title-primary hover:text-highlight hover:bg-transparent"
                  >
                    Sign In
                  </Button>
                  <Button 
                    size="lg" 
                    className="btn-highlight hover:bg-highlight/90 transition-colors justify-start"
                  >
                    Get Started
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