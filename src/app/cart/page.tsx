
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalImpact = cart.reduce((acc, item) => ({
    water: acc.water + (item.impact.waterSaved * item.quantity),
    co2: acc.co2 + (item.impact.co2Reduced * item.quantity)
  }), { water: 0, co2: 0 });

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-32 text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
        </div>
        <h1 className="font-headline text-5xl italic">Your bag is empty</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          It looks like you haven't added any circular pieces to your bag yet. 
          Start exploring our curated archives.
        </p>
        <Button asChild size="lg" className="h-14 px-10 bg-accent hover:bg-accent/90">
          <Link href="/shop">SHOP THE COLLECTION</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="font-headline text-5xl italic mb-12">Shopping Bag</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-8">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-6 animate-fade-in-up">
              <div className="relative w-32 h-40 bg-secondary flex-shrink-0">
                <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg tracking-tight">{item.name}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.material} • {item.condition}</p>
                    <p className="text-sm font-bold italic">${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-2 hover:text-accent transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center bg-secondary border border-white/5 rounded-none h-10 px-2 gap-4">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-accent"><Minus className="w-3 h-3" /></button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-accent"><Plus className="w-3 h-3" /></button>
                  </div>
                  <p className="font-bold italic text-accent">${item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-8 bg-primary/5 border border-primary/10 rounded-none space-y-4">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-accent">Environmental Impact of this Bag</h4>
            <div className="flex gap-12">
              <div>
                <p className="text-2xl font-headline italic">{totalImpact.water}L</p>
                <p className="text-xs text-muted-foreground">Water Saved</p>
              </div>
              <div>
                <p className="text-2xl font-headline italic">{totalImpact.co2}kg</p>
                <p className="text-xs text-muted-foreground">CO2 Reduced</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4 bg-secondary p-10 space-y-8 h-fit">
          <h2 className="font-headline text-3xl italic">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-accent uppercase font-bold text-xs">Complimentary</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Taxes</span>
              <span>Calculated at checkout</span>
            </div>
            <Separator className="bg-white/10" />
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span className="italic">${subtotal}</span>
            </div>
          </div>

          <Button asChild size="lg" className="w-full h-16 text-lg tracking-widest bg-accent hover:bg-accent/90">
            <Link href="/checkout">
              PROCEED TO CHECKOUT <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </Button>
          
          <div className="space-y-4 text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Secure Payments via Stripe</p>
            <div className="flex justify-center gap-4 opacity-50">
              <div className="w-8 h-5 bg-white/20 rounded-sm" />
              <div className="w-8 h-5 bg-white/20 rounded-sm" />
              <div className="w-8 h-5 bg-white/20 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
