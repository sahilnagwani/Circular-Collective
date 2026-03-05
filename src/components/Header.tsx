"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/store';
import { ShoppingBag, Heart, Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const { cart, wishlist } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-16 md:h-20 flex items-center",
    mounted && scrolled ? "glass-header border-b border-black/5 shadow-sm" : "bg-transparent"
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto h-full px-4 md:px-6 flex items-center justify-between gap-4">
        
        {/* Left Section: Mobile Menu Trigger & Desktop Nav */}
        <div className="flex items-center flex-1">
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="md:hidden p-2 -ml-2 hover:text-primary transition-colors"
            aria-label="Open Menu"
            suppressHydrationWarning
          >
            <Menu className="w-5 h-5" />
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link href="/" className="text-[10px] lg:text-xs font-bold tracking-[0.2em] hover:text-primary transition-colors relative group whitespace-nowrap">
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/shop" className="text-[10px] lg:text-xs font-bold tracking-[0.2em] hover:text-primary transition-colors relative group whitespace-nowrap">
              SHOP
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-[10px] lg:text-xs font-bold tracking-[0.2em] hover:text-primary transition-colors relative group uppercase whitespace-nowrap"
              suppressHydrationWarning
            >
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>
        </div>

        {/* Center Section: Logo */}
        <div className="flex justify-center flex-none">
          <Link href="/" className="font-headline text-sm sm:text-base md:text-xl lg:text-3xl tracking-tighter hover:opacity-70 transition-opacity text-foreground whitespace-nowrap uppercase">
            CIRCULAR <span className="italic font-normal">COLLECTIVE</span>
          </Link>
        </div>

        {/* Right Section: About, Wishlist, Cart */}
        <div className="flex items-center gap-1 md:gap-4 lg:gap-6 flex-1 justify-end">
          <Link href="/about" className="hidden md:block text-[10px] lg:text-xs font-bold tracking-[0.2em] hover:text-primary transition-colors uppercase whitespace-nowrap">ABOUT</Link>
          
          <Link href="/wishlist" className="relative group p-2 transition-transform hover:scale-110">
            <Heart className="w-4 h-4 md:w-5 md:h-5 group-hover:fill-primary group-hover:text-primary transition-all" />
            {mounted && wishlist.length > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-[8px] md:text-[10px] text-white w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative group p-2 transition-transform hover:scale-110">
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 group-hover:text-primary transition-all" />
            {mounted && cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-[8px] md:text-[10px] text-white w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background/98 backdrop-blur-2xl z-[60] transition-all duration-700 ease-in-out transform",
        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-6 right-6 md:top-8 md:right-8 p-3 hover:rotate-90 transition-transform duration-500"
          aria-label="Close Menu"
          suppressHydrationWarning
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="container mx-auto h-full flex flex-col justify-center px-6 md:px-10 overflow-y-auto pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            
            <div className="md:hidden space-y-8">
              <h3 className="font-headline text-3xl italic border-b border-black/5 pb-4">Main</h3>
              <ul className="space-y-6">
                <li>
                  <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-2xl font-light hover:text-primary transition-all tracking-tight flex items-center gap-3">
                    Home <ArrowRight className="w-4 h-4 opacity-30" />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsMenuOpen(false)} href="/shop" className="text-2xl font-light hover:text-primary transition-all tracking-tight flex items-center gap-3">
                    Shop Archive <ArrowRight className="w-4 h-4 opacity-30" />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsMenuOpen(false)} href="/about" className="text-2xl font-light hover:text-primary transition-all tracking-tight flex items-center gap-3">
                    Our Story <ArrowRight className="w-4 h-4 opacity-30" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6 md:space-y-10">
              <h3 className="font-headline text-3xl md:text-5xl italic border-b border-black/5 pb-4 md:pb-6">Collections</h3>
              <ul className="space-y-4 md:space-y-6">
                {['Vintage Archive', 'Designer Pre-Loved', 'Denim Project', 'Silk Series', 'Upcycled Studio'].map(item => (
                  <li key={item}>
                    <Link onClick={() => setIsMenuOpen(false)} href={`/shop?category=${item.split(' ')[0]}`} className="text-xl md:text-2xl font-light hover:pl-4 md:hover:pl-6 transition-all duration-500 hover:text-primary tracking-tight block">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 md:space-y-10">
              <h3 className="font-headline text-3xl md:text-5xl italic border-b border-black/5 pb-4 md:pb-6">Categories</h3>
              <ul className="space-y-4 md:space-y-6">
                {['Jackets', 'Trousers', 'Dresses', 'Accessories', 'Outerwear'].map(item => (
                  <li key={item}>
                    <Link onClick={() => setIsMenuOpen(false)} href="/shop" className="text-xl md:text-2xl font-light hover:pl-4 md:hover:pl-6 transition-all duration-500 hover:text-primary tracking-tight block">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex items-end">
              <div className="w-full aspect-[4/5] bg-secondary p-12 flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="font-headline text-3xl mb-4 italic relative z-10">The Circular Ethos</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 relative z-10">Discover fashion that respects the past while protecting our future. Every piece is a story saved from the landfill.</p>
                <Link onClick={() => setIsMenuOpen(false)} href="/about" className="text-xs font-bold tracking-widest border-b border-primary pb-1 w-fit hover:text-primary transition-colors relative z-10">READ OUR STORY</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};