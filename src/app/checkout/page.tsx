
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, ChevronLeft, CreditCard, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { toast } = useToast();
  const [isOrdered, setIsOrdered] = useState(false);
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment
    setTimeout(() => {
      setLoading(false);
      setIsOrdered(true);
      clearCart();
      toast({
        title: "Order Successful",
        description: "Your circular archive is being prepared.",
      });
    }, 2000);
  };

  if (isOrdered) {
    return (
      <div className="container mx-auto px-6 py-32 text-center space-y-8 animate-fade-in-up">
        <div className="flex justify-center">
          <CheckCircle2 className="w-20 h-20 text-primary animate-bounce" />
        </div>
        <h1 className="font-headline text-6xl italic">Thank You</h1>
        <p className="text-xl font-light text-muted-foreground max-w-xl mx-auto">
          Your order has been confirmed. You've just extended the life of high-end fashion. 
          A confirmation email with your circular impact report is on its way.
        </p>
        <Button asChild size="lg" className="h-16 px-12 bg-primary hover:bg-primary/90 text-white rounded-full mt-8">
          <Link href="/">RETURN TO ARCHIVE</Link>
        </Button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-32 text-center space-y-8">
        <h1 className="font-headline text-5xl italic">Nothing to Checkout</h1>
        <p className="text-muted-foreground">Your bag is currently empty.</p>
        <Button asChild className="rounded-full h-14 px-10">
          <Link href="/shop">START SHOPPING</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="mb-12">
        <Link href="/cart" className="text-[10px] font-bold tracking-[0.3em] flex items-center gap-2 hover:text-primary transition-colors uppercase">
          <ChevronLeft className="w-4 h-4" /> Back to Bag
        </Link>
        <h1 className="font-headline text-5xl md:text-6xl italic mt-6">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-16">
          {/* Personal Details */}
          <div className="space-y-8">
            <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary border-b border-black/5 pb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">First Name</Label>
                <Input id="firstName" required className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Last Name</Label>
                <Input id="lastName" required className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Email Address</Label>
                <Input id="email" type="email" required className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Contact Number</Label>
                <Input id="phone" type="tel" required className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-8">
            <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary border-b border-black/5 pb-4">Shipping Destination</h2>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Street Address</Label>
              <Input id="address" required placeholder="123 Archive St." className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-2 col-span-2 md:col-span-1">
                <Label htmlFor="city" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">City</Label>
                <Input id="city" required className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postal" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Postal Code</Label>
                <Input id="postal" required className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2 col-span-2 md:col-span-1">
                <Label htmlFor="country" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Region</Label>
                <Input id="country" required value="United States" readOnly className="bg-secondary border-none h-14 rounded-xl px-6 opacity-50" />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-black/5 pb-4">
              <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Secure Payment</h2>
              <div className="flex items-center gap-2 text-[9px] text-muted-foreground uppercase tracking-widest font-bold">
                <ShieldCheck className="w-3 h-3" /> Encrypted
              </div>
            </div>
            
            <div className="p-8 bg-primary/5 border border-primary/10 rounded-[2rem] flex items-center justify-between mb-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold">Total Amount Due</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Inclusive of all duties</p>
                </div>
              </div>
              <p className="font-headline text-3xl italic text-primary">${subtotal}</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cardNum" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Card Number</Label>
                <Input id="cardNum" required placeholder="0000 0000 0000 0000" className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="expiry" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Expiry Date</Label>
                  <Input id="expiry" required placeholder="MM / YY" className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc" className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">CVC</Label>
                  <Input id="cvc" required placeholder="000" className="bg-secondary border-none h-14 rounded-xl px-6 focus-visible:ring-primary" />
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" disabled={loading} size="lg" className="w-full h-20 text-xs font-bold tracking-[0.3em] bg-primary text-white hover:bg-primary/90 rounded-full shadow-xl">
            {loading ? "PROCESSING SECURELY..." : `PLACE ORDER — $${subtotal}`}
          </Button>
        </form>

        {/* Order Summary Column */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 space-y-8">
            <div className="bg-white rounded-[3rem] editorial-shadow p-10 md:p-12 space-y-10">
              <h2 className="font-headline text-4xl italic">Order Summary</h2>
              
              <div className="space-y-8 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-6 animate-fade-in-up">
                    <div className="relative w-20 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-secondary">
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-1">
                      <p className="font-medium tracking-tight text-sm">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.quantity} x ${item.price}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-headline text-xl italic">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="bg-black/5" />
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Circular Shipping</span>
                  <span className="text-primary uppercase font-bold text-[10px] tracking-widest">Complimentary</span>
                </div>
                <Separator className="bg-black/5 my-4" />
                <div className="flex justify-between items-baseline pt-2">
                  <span className="font-headline text-2xl italic">Total</span>
                  <span className="font-headline text-4xl italic text-primary">${subtotal}</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 border-2 border-primary/5 border-dashed rounded-[2.5rem] bg-primary/[0.02] space-y-4">
              <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-primary">The Circular Promise</p>
              <p className="text-xs text-muted-foreground leading-relaxed font-light italic">
                Every purchase from Circular Collective includes a certificate of authenticity and a detailed environmental impact report. 
                By choosing this piece, you are actively participating in the circular economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
