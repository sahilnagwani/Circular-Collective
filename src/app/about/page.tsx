
"use client";

import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/about-hero/1920/800"
          alt="Luxury Archive"
          fill
          className="object-cover opacity-40 grayscale"
        />
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-tighter italic">Our Ethos</h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto px-6 max-w-4xl space-y-16">
        <div className="space-y-8 text-center">
          <p className="text-accent tracking-[0.5em] text-xs font-bold uppercase">THE VISION</p>
          <h2 className="font-headline text-5xl md:text-6xl italic leading-tight">Fashion that respects the past, protects the future.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-muted-foreground leading-loose">
          <p>
            Circular Collective was born from a desire to challenge the transient nature of modern fashion. 
            We believe that luxury shouldn't be defined by "newness," but by craftsmanship, heritage, 
            and the stories embedded in every fiber. Our mission is to curate an archive of high-end 
            pieces that deserve a second, third, or fourth life.
          </p>
          <p>
            By keeping luxury in circulation, we significantly reduce the environmental footprint of 
            the fashion industry. Each item in our collection is meticulously authenticated, 
            condition-verified, and evaluated for its historical and aesthetic value. We aren't just 
            selling clothes; we are facilitating a sustainable movement.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-secondary py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Scarcity', desc: 'We focus on unique, hard-to-find archive pieces that stand the test of time and trends.' },
              { title: 'Authenticity', desc: 'Every item is manually inspected by our experts to ensure absolute integrity and original quality.' },
              { title: 'Circularity', desc: 'Our platform is a loop. Buy, wear, cherish, and eventually, return it back into the collective.' }
            ].map((pillar, i) => (
              <div key={i} className="space-y-4 border-l border-accent pl-8">
                <h3 className="font-headline text-3xl italic">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="container mx-auto px-6 text-center space-y-12">
        <div className="relative aspect-video w-full max-w-6xl mx-auto overflow-hidden">
          <Image src="https://picsum.photos/seed/editorial-1/1200/600" alt="Editorial" fill className="object-cover" />
        </div>
        <div className="space-y-4">
          <h2 className="font-headline text-4xl italic">Join the Movement</h2>
          <p className="text-muted-foreground">The future of fashion is already in the archive.</p>
        </div>
      </section>
    </div>
  );
}
