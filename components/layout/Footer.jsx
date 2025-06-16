import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and text */}
          <div className="col-span-2">
          <Link href="/" className="flex items-center space-x-2 pb-4">
            <Image src="/images/logo.svg" alt="Synos" width={101} height={51} />
          </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Empowering the future of decentralized applications with cutting-edge blockchain technology and seamless user experiences.
            </p>
          </div>

          {/* Product menu */}
          <div className="col-span-2 text-left md:text-right">
            <div className="grid grid-cols-3 gap-8">
              {/* Product menu */}
              <div className="md:col-span-2">
                <h3 className="font-semibold mb-4 text-title-secondary">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#features" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#integrations" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="#api" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                      API
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company menu */}
              <div>
                <h3 className="font-semibold mb-4 text-title-secondary">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#blog" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#careers" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#press" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2024 Synos. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link href="#terms" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
              Terms of Service
            </Link>
            <Link href="#privacy" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
              Privacy Policy
            </Link>
            <Link href="#cookies" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 