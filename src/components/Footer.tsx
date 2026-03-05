"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-24 pb-12 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="font-headline text-2xl tracking-tighter text-foreground block">
              CIRCULAR <span className="italic font-normal uppercase">COLLECTIVE</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed font-light italic">
              Curating the world's finest archives for a circular future. 
              Luxury shouldn't be defined by newness, but by the stories we preserve.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">The Archive</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/shop" className="text-sm font-light hover:pl-2 transition-all duration-300 block">Shop All</Link>
              </li>
              <li>
                <Link href="/shop?category=Vintage" className="text-sm font-light hover:pl-2 transition-all duration-300 block">Vintage Treasures</Link>
              </li>
              <li>
                <Link href="/shop?category=Designer" className="text-sm font-light hover:pl-2 transition-all duration-300 block">Designer Pre-Loved</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-light hover:pl-2 transition-all duration-300 block">Our Ethos</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-sm font-light group">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <a href="mailto:concierge@circularcollective.com" className="group-hover:text-primary transition-colors">concierge@circularcollective.com</a>
              </li>
              <li className="flex items-start gap-4 text-sm font-light group">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <a href="tel:+12125550198" className="group-hover:text-primary transition-colors">+1 (212) 555-0198</a>
              </li>
              <li className="flex items-start gap-4 text-sm font-light leading-relaxed">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>123 Archive St., Chelsea<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Join */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Join the Movement</h4>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Receive early access to new archive drops and editorial stories.
            </p>
            <form className="relative group" suppressHydrationWarning>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-black/10 py-2 pr-10 text-sm focus:outline-none focus:border-primary transition-colors"
                suppressHydrationWarning
              />
              <button 
                className="absolute right-0 bottom-2 text-primary hover:translate-x-1 transition-transform"
                suppressHydrationWarning
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
            © 2024 CIRCULAR COLLECTIVE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] text-muted-foreground tracking-widest uppercase hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] text-muted-foreground tracking-widest uppercase hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[10px] text-muted-foreground tracking-widest uppercase hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};