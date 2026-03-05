"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Droplets, Wind, RefreshCw, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-20 md:space-y-32 pb-20 md:pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[95vh] w-full flex items-center overflow-hidden bg-secondary">
        <Image
          src="https://picsum.photos/seed/fashion-hero/1920/1080"
          alt="Luxury Fashion Editorial"
          fill
          priority
          className="object-cover opacity-90 transition-transform duration-1000 md:hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent md:from-white/40" />
        
        <div className="container relative z-10 px-6 pt-32 md:pt-48 pb-12">
          <div className="max-w-4xl space-y-6 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-primary italic tracking-[0.2em] md:tracking-[0.3em] text-3xl md:text-5xl lg:text-7xl font-bold uppercase animate-fade-in-up leading-tight">
                CIRCULAR COLLECTIVE <br className="hidden md:block" /> — ARCHIVE 2024
              </h2>
              <h3 className="font-headline text-base md:text-xl lg:text-2xl tracking-widest leading-relaxed animate-fade-in-up delay-100 italic font-normal text-foreground/60 uppercase">
                LUXURY, REIMAGINED.
              </h3>
            </div>
            <p className="max-w-lg text-foreground/80 leading-relaxed text-base md:text-lg animate-fade-in-up delay-200">
              Timeless fashion curated for a circular future. Discover a world where pre-loved meets high-end editorial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 animate-fade-in-up delay-300">
              <Button asChild size="lg" className="h-14 md:h-16 px-8 md:px-12 bg-primary hover:bg-primary/90 text-white rounded-full tracking-widest text-[10px] md:text-xs font-bold w-full sm:w-auto" suppressHydrationWarning>
                <Link href="/shop">EXPLORE THE ARCHIVE</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 md:h-16 px-8 md:px-12 rounded-full tracking-widest text-[10px] md:text-xs font-bold border-foreground/10 hover:bg-white/40 bg-white/60 backdrop-blur-sm w-full sm:w-auto" suppressHydrationWarning>
                <Link href="/shop?category=Vintage">SHOP VINTAGE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:h-[700px]">
          <Link href="/shop?category=Vintage" className="group relative overflow-hidden bg-secondary lg:col-span-2 rounded-[2rem] hover-lift h-[350px] md:h-auto">
            <Image src="https://picsum.photos/seed/vintage-fashion/1200/800" alt="Vintage" fill className="object-cover transition-transform duration-1000 md:group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 md:group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2">CURATED ARCHIVE</p>
              <h3 className="font-headline text-3xl md:text-5xl mb-4 italic">Vintage Treasures</h3>
              <p className="text-xs tracking-widest border-b border-white pb-1 w-fit">EXPLORE SELECTION</p>
            </div>
          </Link>
          <Link href="/shop?category=Designer" className="group relative overflow-hidden bg-secondary rounded-[2rem] hover-lift h-[350px] md:h-auto">
            <Image src="https://picsum.photos/seed/designer-archive/800/800" alt="Designer" fill className="object-cover transition-transform duration-1000 md:group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 md:group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
              <h3 className="font-headline text-3xl mb-2 italic">Pre-Loved</h3>
              <p className="text-[10px] tracking-widest border-b border-white pb-1 w-fit uppercase">Shop Designer</p>
            </div>
          </Link>
          <div className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-6 h-[200px] md:h-auto">
            <Link href="/shop?category=Silk" className="group relative overflow-hidden bg-secondary rounded-[2rem] hover-lift h-full">
              <Image src="https://picsum.photos/seed/silk-collection/800/400" alt="Silk" fill className="object-cover transition-transform duration-1000 md:group-hover:scale-110" />
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end text-white">
                <h3 className="font-headline text-xl md:text-2xl italic">Silk Series</h3>
              </div>
            </Link>
            <Link href="/shop?category=Denim" className="group relative overflow-hidden bg-secondary rounded-[2rem] hover-lift h-full">
              <Image src="https://picsum.photos/seed/denim-archive/800/400" alt="Denim" fill className="object-cover transition-transform duration-1000 md:group-hover:scale-110" />
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end text-white">
                <h3 className="font-headline text-xl md:text-2xl italic">Denim Project</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 space-y-12 md:space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-black/5 pb-8">
          <div className="space-y-3">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">THE EDITORIAL COLLECTION</p>
            <h2 className="font-headline text-4xl md:text-6xl italic">Featured Archives</h2>
          </div>
          <Link href="/shop" className="text-xs font-bold tracking-[0.2em] hover:text-primary transition-colors flex items-center gap-2 group">
            VIEW ALL PIECES <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-10">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-[#EFEDE8] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/circular-story/800/1000" 
                alt="Circular Collective Story" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-4">
                <p className="text-primary text-xs font-bold tracking-[0.4em] uppercase">OUR PHILOSOPHY</p>
                <h2 className="font-headline text-4xl md:text-6xl italic leading-tight">Fashion that respects the past, protects the future.</h2>
              </div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                Circular Collective was born from a desire to challenge the transient nature of modern fashion. 
                We believe that luxury shouldn't be defined by "newness," but by craftsmanship, heritage, 
                and the stories embedded in every fiber. Our mission is to curate an archive of high-end 
                pieces that deserve a second, third, or fourth life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4 md:pt-6">
                <div className="space-y-2">
                  <h4 className="font-headline text-xl md:text-2xl italic">Authenticity</h4>
                  <p className="text-sm text-muted-foreground">Every piece is verified by our archive experts for historical and quality integrity.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline text-xl md:text-2xl italic">Circularity</h4>
                  <p className="text-sm text-muted-foreground">A closed-loop system where luxury remains in circulation, never in a landfill.</p>
                </div>
              </div>
              <Button asChild size="lg" className="h-14 md:h-16 px-8 md:px-12 rounded-full bg-foreground text-white hover:bg-foreground/90 w-full sm:w-auto" suppressHydrationWarning>
                <Link href="/about">READ OUR FULL STORY</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-12 md:mb-20">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">COLLECTIVE IMPACT</p>
            <h2 className="font-headline text-4xl md:text-5xl italic">The Power of Circular Choice</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { label: 'Water Saved', value: '45,280L', icon: Droplets, sub: 'Equivalent to 600 showers' },
              { label: 'CO2 Reduced', value: '1,240kg', icon: Wind, sub: 'Offsetting 52 mature trees' },
              { label: 'Items Rescued', value: '842', icon: RefreshCw, sub: 'Kept in active circulation' },
            ].map((stat, i) => (
              <div key={i} className="group p-8 md:p-12 text-center space-y-6 rounded-[2rem] md:rounded-[3rem] bg-secondary hover:bg-accent/10 transition-colors duration-500">
                <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-sm transition-transform duration-500 md:group-hover:scale-110">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                  <p className="text-4xl md:text-5xl font-headline italic">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground/60 italic">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6">
        <div className="bg-accent/20 rounded-[2rem] md:rounded-[4rem] p-10 md:p-20 text-center space-y-8 md:space-y-12">
          <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 mx-auto text-primary animate-pulse" />
            <h2 className="font-headline text-4xl md:text-6xl italic">Join the Collective</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Sign up to receive early access to new archive drops, exclusive editorial stories, 
              and circular fashion insights.
            </p>
          </div>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" suppressHydrationWarning>
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="h-14 md:h-16 rounded-full px-8 bg-white border-none focus-visible:ring-primary shadow-sm"
              suppressHydrationWarning
            />
            <Button size="lg" className="h-14 md:h-16 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest text-[10px] md:text-xs" suppressHydrationWarning>
              SUBSCRIBE
            </Button>
          </form>
          <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest">
            Privacy respected. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
