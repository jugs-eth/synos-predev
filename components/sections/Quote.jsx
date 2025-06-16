import React from 'react';
import Image from 'next/image';

export default function QuoteSection() {
  const auditLogos = [
    { name: 'Certik', logo: '/images/certik.png', width: 120, height: 40 },
    { name: 'Cantina', logo: '/images/cantina.png', width: 120, height: 40 },
    { name: 'OpenZeppelin', logo: '/images/openzep.png', width: 120, height: 40 },
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 sm:mb-16">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-title-primary mb-8 sm:mb-12 font-semibold px-4 leading-tight tracking-tight">
            Raise funds with battle-tested smart contracts and a platform that supports builders. 
            <span className="text-title-secondary font-semibold"> Audited by trusted industry giants and protected by Certik's SkyNet.</span>
          </blockquote>
          
          {/* Audit Logos */}
          <div className="flex justify-center items-center gap-8 sm:gap-12">
            {auditLogos.map((audit, index) => (
              <div
                key={index}
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image 
                  src={audit.logo} 
                  alt={audit.name} 
                  width={audit.width} 
                  height={audit.height} 
                  className="w-auto h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 